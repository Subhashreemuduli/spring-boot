import React from 'react'
import "./Home.css";
import Vector2 from "../images/Vector2.png";
import banner1 from "../images/banner1.png"
import Ahome from './Ahome';
import Slider from './Slider';
import Best from './Best';

const Home = () => {
  return (

      <>
      <div className='homee'>
  
      <div className='home-intro'>
        <span className='heading1'>Fastest Growing </span>
        <span className='heading1'>Cleaning Services in Odisha</span>
        <span className='intro'><br/>No.1 Cleaning Services Across Odisha which delivers hygienic and eco-friendly cleaning solutions for home,offices,shops etc. We offer deep cleaning and sanitization solutions for your residential and commercial cleaning needs. </span>
        </div>
        <div className="home-right">
          <img src={Vector2} className="log" alt="" />
          <img src={banner1} alt="" />
        </div>
        
      </div>
      <Ahome/>
      <Slider/>
      <Best/>
      </>
    )
  
}

export default Home
