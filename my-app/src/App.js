import "./App.css";
import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Deep from "./Pages/Deep";
import Bathroom from "./Pages/Bathroom";
import Sofa from "./Pages/Sofa";
import Window from "./Pages/Window";
import Dish from "./Pages/Dish";
import Dust from "./Pages/Dust";
import Carpet from "./Pages/Carpet";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import UserDashboard from "./Pages/UserDashboard";
import PrivateRoute from "./Pages/PrivateRoute";
import Profile from "./Pages/Profile";
import UserProvider from "./context/UserProvider";
import EditUser from "./user/EditUser";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentForm,setCurrentForm]=useState("login");
  const toggleForm=(formName) =>{
    setCurrentForm(formName);

  }
  return (
    <>
    
    <UserProvider>
    <Router>
    
      
      <Header />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/deep" element={<Deep />} />
        <Route path="/bathroom" element={<Bathroom />} />
        <Route path="/sofa" element={<Sofa />} />
        <Route path="/window" element={<Window />} />
        <Route path="/dish" element={<Dish />} />
        <Route path="/dust" element={<Dust />} />
        <Route path="/carpet" element={<Carpet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={currentForm==="login"?<Login onFormSwitch={toggleForm}/>:<Signup onFormSwitch={toggleForm}/>} />
        
         <Route path="/user" element={<PrivateRoute />} >
         <Route path="dashboard" element={<UserDashboard />} />
         <Route path="profile/:userId" element={<Profile/>} />

          </Route>

          <Route exact path="/editUser/:userId" element={<EditUser/>}></Route>
      </Routes>

      <Footer />
    </Router>
    
    
    </UserProvider>
  
    </>
  );
}

export default App;
