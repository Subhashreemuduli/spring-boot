import React from 'react'
import img1 from "../images/deep-cleaning.jpg";
import img2 from '../images/bathroom-cleaning-1.jpg'
import img3 from '../images/Domestic-sofa.jpg'
import img4 from '../images/Window-Cleaning.jpeg'
import img5 from '../images/dish-washing.jpg'
import img6 from '../images/Dust Removal.jpg'
import img7 from '../images/carpet cleaning.jpg'
import "./Services.css";
import { NavLink } from 'react-router-dom';


const Services = () => {
  return (
    <>
    <div className="main">
    <div className='cards'>
      <div className="images">
      <img src={img1} alt="" />
      </div>
      <div className="title">Deep Cleaning</div>
      <div className="desc">
        <p>Dry dusting  removal from all home...</p><br/>
        <a href='/deep'>Read More</a>
      </div>
    </div>
    <div className='cards'>
      <div className="images">
      <img src={img2} alt=""/>
      </div>
      <div className="title">Bathroom Cleaning</div>
      <div className="desc">
        <p>EHome Cleaner offers bathroom...</p><br/>
        <a href='/bathroom'>Read More</a>
      </div>
    </div>
    <div className='cards'>
      <div className="images">
      <img src={img3} alt=""/>
      </div>
      <div className="title">Sofa Cleaning</div>
      <div className="desc">
        <p>Dry vacum of sofa, carpet...</p><br/>
        <a href='/sofa'>Read More</a>
      </div>
    </div>
    <div className='cards'>
      <div className="images">
      <img src={img4} alt=""/>
      
      </div>
      <div className="title">Window Cleaning</div>
      <div className="desc">
        <p>Our window cleaning services in...</p><br/>
        <a href='/window'>Read More</a>
      </div>
    </div>
    <div className='cards'>
      <div className="images">
      <img src={img5} alt=""/>
      </div>
      <div className="title">Dish Washing</div>
      <div className="desc">
        <p>EHome Cleaners is here to take care... </p><br/>
        <a href='/dish'>Read More</a>
      </div>
    </div>
    <div className='cards'>
      <div className="images">
      <img src={img6} alt=""/>
      </div>
      <div className="title">Dust Removal</div>
      <div className="desc">
        <p>We offer a clean environment by...</p><br/>
        <a href='/dust'>Read More</a>
      </div>
    </div>
    <div className='cards'>
      <div className="images">
      <img src={img7} alt=""/>
      </div>
      <div className="title">Carpet Cleaning</div>
      <div className="desc">
        <p>We offer a smooth carpet cleaning...</p><br/>
        <a href='/carpet'>Read More</a>
      </div>
    </div>
   
  
    </div>
    </>
  )
}

export default Services
