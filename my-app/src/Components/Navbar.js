import {React,useEffect,useState} from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import logo from "../images/logoo.jpeg"
import {IoMdArrowDropdown} from "react-icons/io"
import Dropdown from '../Pages/Dropdown';
import "./Navbar.css"
import { doLogout, getCurrentUserDeatil, isLoggedIn } from '../auth/auth';
import EditUser from '../user/EditUser';
const Navbar = () => {

  let navigate=useNavigate()
  const [click,setClick]=useState(false);
  const [dropdown, setDropdown] = useState(false);


  const [login,setLogin]=useState(false)
  const [user,setUser]=useState(undefined)
 
  useEffect(()=>{
    setLogin(isLoggedIn())
    setUser(getCurrentUserDeatil())
  },[login])


 
 


  const handleClick = () => setClick(!click);
  const closeMobileMenu=()=>setClick(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const logout=()=>{
    doLogout(()=>{
      //logged out
    setLogin(false);
    navigate("/");
    
    })
  }
  return (

    <>
    <div className='navbar'>
      <img src={logo} className='logo' alt="" />
        
      <div className='right'>
        <div className="menu">
          <ul className='menu-item'>
            <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
          <NavLink to="/about">About</NavLink>
          </li>
          <li className='nav-item'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          <NavLink to="/services" className="nav-link" onClick={closeMobileMenu}>
            Services <IoMdArrowDropdown/></NavLink>
            {dropdown && <Dropdown />}
          </li>
          <li>
          <NavLink to="/contact">Contact</NavLink>
          </li>
          {/* <li>
          <NavLink to="/login">Login</NavLink>
          </li> */}
          {/* <li>
          <NavLink to="/signup">Signup</NavLink>
          </li> */}

          </ul>
          
          </div>
          </div>
          {
            login && (
              <>
              <div className='nav1'>
              <NavLink to={`/user/profile/${user.id}`} >

                Profile
                
                </NavLink>
             </div>

              <div className='navv'>
              <NavLink to="/" onClick={logout}>
                Logout</NavLink>
             </div>
             <div className='navvvv'>
              <NavLink>{user.name}</NavLink>
             </div>
             </>
            )
          }
          {
              !login &&(
                <div className='nav2'>
              <NavLink to="/login">Login</NavLink>
              </div>
              
              
              )
             

          }
           </div>
          
          
         
             
        </>   
         
          
  )
}

export default Navbar
