import React,{ useState} from 'react'
import { signUp } from '../services/UserService';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Signup = (props) => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
 
  const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
  })

  const [error,setError]=useState({
    errors:{},
    isError:false
  })
 

  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //      console.log(email);
  // }   
  // dynamic setting the value
  const handleChange=(event,property)=>{
    setData({...data,[property]:event.target.value})
    
    
  }
  //submit the data

  const submitForm=(event)=>{
    event.preventDefault()
    console.log(data)

    //call api server for sending the data

    signUp(data).then((resp)=>{
      console.log(resp)
      console.log("success log")
      toast.success("User is registered successfully !!");
    setData({
      name:'',
    email:'',
    password:'',
    })
  }).catch((error)=>
  {
    console.log(error)
    console.log("error log")
  })
  }
  return (
    
   <>
   <div className='auth-form-container'>
   
   <div className="login-page">
   
    <h2>Register</h2>
    <form className='register-form' onSubmit={submitForm}>
      <label for="name">Full Name</label>
    
     <input className='input' type="name"  name="name" id="name" 
     placeholder='Enter here'
      onChange={(e)=>handleChange(e,'name')}
      value={data.name}
      />
     <label for="email">Email</label>
     <input className='input' type="email"
      placeholder='Enter here' id="email" name="email"
       onChange={(e)=>handleChange(e,'email')}
        value={data.email}
        />
     <label for="password">Password</label>
     <input className='input' type="password"
     placeholder='Enter here'  id="password"name="password"
      onChange={(e)=>handleChange(e,'password')}
      value={data.password}
      />
     <button className='buttonn' type="submit" >Register</button>
       </form>
       <button className='link-btn' onClick={()=>props.onFormSwitch("login")}>Already have an account? Login here</button>
       </div>
       </div>
       <ToastContainer position='bottom-center' />
   </>
  )
}

export default Signup
