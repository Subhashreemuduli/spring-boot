// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { getUser, updateUser } from "../services/UserService";

// export default function EditUser() {
//   let navigate = useNavigate();

//   const {userId}=useParams();

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const { name,email,password } = user;

//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name1]: e.target.value });
//   };

//   useEffect(()=>{
//     loadUser();
   
//   },[])
 

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     updateUser(userId).then(data=>{
//         navigate("/");
//     })
    
//   };

//   const loadUser=async()=>{
//     const result=getUser(userId).then(data=>{
//         setUser(result.data)
//     })
    
//   }

//   return (
//     <>
//     <div className='container'>
   
//    <div className="page">
   
//     <h2>Update</h2>
//     <form className='form' onSubmit={(e)=>onSubmit(e)}>
//       <label for="name">Full Name</label>
    
//      <input className='inp' type="text"  name="name" id="name" 
//      placeholder='Enter here'
     
//       value={name}
//       onChange={(e) => onInputChange(e)}
//      />
//      <label for="email">Email</label>
//      <input className='inp' type="text"
//       placeholder='Enter here' id="email" name="email"
      
//         value={email}
//         onChange={(e) => onInputChange(e)} 
//         />
    
//       <label for="password">Password</label>
//      <input className='inp' type="text"
//      placeholder='Enter here'  id="password"name="password"
      
//       value={password}
//       onChange={(e) => onInputChange(e)}
//     />
//       <button className='onn' type="submit" >Submit</button>
//        <Link  to="/">
//               Cancel
//             </Link>
//           </form>
//       </div>
//       </div>
//       </>

    
//   );
// }