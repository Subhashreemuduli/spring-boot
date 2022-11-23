import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import userContext from '../context/UserContext'
import { getUser } from '../services/UserService'
import pic from "../images/testimonial2.jpg"
import EditUser from '../user/EditUser'


const Profile = () => {

  const  [user,setUser]=useState(null);

 const{userId}= useParams();
 //console.log(userId);

  const object=useContext(userContext);

  useEffect(()=>{
    getUser(userId).then(data=>{
      console.log(data);
      setUser({...data})
    })
  },[])
   const userView=()=>{
    return (
      <>
      <div className='user'>
      <h2 className='user1'>User Information</h2>
      <img className='user2' src={pic} alt=''/>
      
      <div className="table-row">
          <div className="table-cell first-cell">
           <h3>User ID</h3>
            </div>
            <div className="table-cell">
            <h3>{user.id}</h3>
            </div>
        
    </div>
    <div className="table-row">
          <div className="table-cell first-cell">
           <h3>User Name</h3>
            </div>
            <div className="table-cell">
            <h3>{user.name}</h3>
        
    </div>
    </div>
    <div className="table-row">
          <div className="table-cell first-cell">
          <h3>User Email</h3>
            </div>
            <div className="table-cell">
            <h3>{user.email}</h3>
        </div>
        
    </div>
    <div className="table-row">
          <div className="table-cell first-cell">
          <h3>ROLE</h3>
            </div>
            <div className="table-cell">
            <h3>
              {user.roles.map((role)=>{
                return(
                  <div key={role.id}>{role.name}</div>
                )
              })}
              </h3>
              
        </div>
        </div>
        {/* <button className='buttonn' type="submit" >Update</button> */}
        {/* <NavLink to='/editUser/:{userId}'>
          <button>
            Update
          </button>
        </NavLink> */}
        
    </div>
    
    
    
    

      </>
    )
   }
  return (
    <div>
      

     { user ? userView() :'Loading user data...'}

    </div>
  )
}


export default Profile
