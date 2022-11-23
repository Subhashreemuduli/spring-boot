import React,{useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { doLogin } from '../auth/auth';
import { loginUser } from '../services/UserService';
import {Navigate, useNavigate} from "react-router-dom";

const Login = (props) => {
 
  

  const navigate=useNavigate()

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const [loginDetail,setLoginDetail]=useState({
    username:'',
    password:''
  })
  const handleChange=(event,field)=>{
    let actualValue=event.target.value
    setLoginDetail({
      ...loginDetail,
      [field]:actualValue
    })
  }
  
 


  const handleFormSubmit=(e)=>{
 e.preventDefault();
    console.log(loginDetail);
    //validation
    if(loginDetail.username.trim()=="" || 
       loginDetail.password.trim()==""
    ){
      toast.error("Username or Password is required !!");
      return;
    }
    //submit the data to server to generate token
    loginUser(loginDetail).then((data)=>{
      console.log(data)
      //sava the data to localstorage
      doLogin(data,()=>{
        console.log("login detail is saves to localstorage");
        //redirect to user dashboard page
     navigate("/user/dashboard");
     window.location.reload();
    

      })
     
    
     
      

      toast.success("Login Successfully")
    }).catch(error=>{
      console.log(error)
      toast.error("Something went wrong on server !!")
    })
  }
  
  return (
    <>
    <div className='auth-form-container'>
      <div className="login-page">
      <h2>Login</h2>
    <form className='login-form' onSubmit={handleFormSubmit}>
     <label  for="email">Email</label>
     <input className='input' type="email"
      placeholder='Enter here'  id="email" name="email"
       value={loginDetail.username}
       onChange={(e)=>handleChange(e,'username')}
       />
     <label for="password">Password</label>
     <input className='input' type="password"
      placeholder='Enter here'  id="password" name="password"
       value={loginDetail.password}   
       onChange={(e)=>handleChange(e,'password')}
       />
     <button className='buttonn' type="submit">Login</button>
       </form>
      
       <button className='link-btn' onClick={()=>props.onFormSwitch("signup")}>Don't have an account? Register here</button>
       </div>
       </div>
       <ToastContainer position='bottom-center' />
       </>
  )
}

export default Login
