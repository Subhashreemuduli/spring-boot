import React from 'react'
import "./Footer.css"
import logo from "../images/logoo.jpeg"
import { FaFacebookF } from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import {IoIosCall} from "react-icons/io";
import {SiGmail} from "react-icons/si";
const Footer = () => {
  return (
    <>
    <footer className="footer-section">
      <div className='container'>
      <div className="row">
        <div className='footer-col'>

    <h2><span>EHome</span> Cleaners</h2>
      <p className='footer'>Your own Cleaning Partner</p>
      </div>
      <div className='footer-col'>
        <h4>Company</h4>
        
          <ul>
          <li >
              <a href="/">Home</a>
            </li>
            <li >
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          </div>
          <div className='footer-col'>
        <h4>Services</h4>
        
          <ul>
            <li >
              <a href="/deep">Deep Cleaning</a>
            </li>
            <li>
              <a href="/bathroom">Bathroom Cleaning</a>
            </li>
            <li>
              <a href="/sofa">Sofa Cleaning</a>
            </li>
            <li>
              <a href="/window">Window Cleaning</a>
            </li>
            <li>
              <a href="/dish">Dish Washing</a>
            </li>
            <li>
              <a href="/dust">Dust Removal</a>
            </li>
            <li>
              <a href="/carpet">Carpet Cleaning</a>
            </li>
          </ul>
          </div>
          <div className='footer-col'>
           <h4>Get in Touch </h4>
           <div className='about'>
           <h5><GoLocation/> Address</h5>
           <p>Bhubaneswar,India(IN)</p>
           <h5><IoIosCall/> Call Us</h5>
           <p>+9100000000</p>
           <h5><SiGmail/> Email Address</h5>
           <p>ehomecleaners@gmail.com</p>
           </div>
          </div>
       <div className='footer-col'>
        <div className='social'>
        <h4>Follow us</h4>
        <div className='social-links'>
        <ul>
           <li className='facebook'>
          <a href="#"><FaFacebookF/></a>
           </li>
           <li className='instagram'>
         <a href="#"><FaInstagram/> </a>
           </li>
           <li className='Linkedin'>
           <a href="#"><FaLinkedinIn/> </a>
           </li>
          </ul>
          </div>
          </div>
          </div>
    </div>
    </div>
   
   </footer>
   <div className="fff">
   <span className='ff'>2022 ©</span> <a href="/"> EHome Cleaners </a> all right reserved.
   </div>
   
    </>
  )
}

export default Footer
