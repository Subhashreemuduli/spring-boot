import React from 'react'
import "./Ahome.css"
import clean from "../images/clean.jpg"

const Ahome = () => {
  return (
    <div className='mid'>
      <div className="left-part">
        <img src={clean} className='img-mid'  alt="" />
      </div>
      <div className="text-area">
        <span className='area'>Who We Are</span><br/>
        <span className='area1'>About The EHome Cleaners</span><br/>
        <span className='area3'>Provide the best Cleaning services for our client with their satisfaction</span><br/>
        <span className='area2'>EHome Cleaners provides a platform that allows skilled and experienced professionals to connect with users looking for specific services. Once on the platform, our match-making algorithm identifies professionals who are closest to the users' requirements and available at the requested time and date.We like to think of ourselves as dust-busters who combat filth, germs, and grime to save the world here at Urban Cleaning. We have a highly skilled and experienced team of specialists that will deep clean and disinfect your home and business using high-tech equipment and industrial-grade cleaning products.</span>
        <br/> <br/><a href="/about" className='about-btn'>Learn More</a>
        </div>
       </div>
  )
}

export default Ahome
