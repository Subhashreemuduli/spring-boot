import React from 'react'
import "./Slider.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '../images/deep-cleaning.jpg';
import img2 from '../images/bathroom-cleaning-1.jpg'
import img3 from '../images/Domestic-sofa.jpg'
import img4 from '../images/Window-Cleaning.jpeg'
import img5 from '../images/dish-washing.jpg'
import img6 from '../images/Dust Removal.jpg'
import img7 from '../images/carpet cleaning.jpg'

const Slider = () => {
  return (
    <div className='hero'><br/><br/><br/>
       <div> <span className='hero1'>Our Services</span><br/><br/>
        <span className='hero2'>Excellence with Cleaning Services</span>
        </div>
        <div className='s-container'>
            <Swiper 
            
            modules={[Pagination,Navigation]}
            slidesPerView={3}
            pagination={{clickable:true}}
             className="myswiper"
              
            navigation={true}
            loopFillGroupWithBlank={true}
            spaceBetween={40}
            slidesPerGroup={1}
            loop={true}
            >
            <SwiperSlide>
                <div className='img-col'>
             <img src={img1} className='image1' alt="" />
             <span className='im'>Deep Cleaning</span><br/>
             <span><a href="/deep">Read More</a></span>
             
             </div>
             
            
            
             </SwiperSlide>
              <SwiperSlide>
                <div className='img-col'>
             <img src={img2}className="image1" alt="" />
             <span className='im'>Bathroom Cleaning </span>
             <span><a href="/bathroom">Read More</a></span>
             </div>
             </SwiperSlide>
              <SwiperSlide>
                <div className='img-col'>
                <img src={img3} className='image1' alt="" />
                <span className='im'>Sofa Cleaning</span><br/>
                <span><a href="/sofa">Read More</a></span>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='img-col'>
                <img src={img4} className='image1' alt="" />
                <span className='im'>Window Cleaning</span><br/>
                <span><a href="/window">Read More</a></span>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='img-col'>
                <img src={img5} className='image1' alt="" />
                <span className='im'>Dish Washing</span><br/>
                <span><a  href="/dish">Read More</a></span>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='img-col'>
                <img src={img6} className='image1' alt="" />
                <span className='im'>Dust Removal</span><br/>
                <span><a href="/dust">Read More</a></span>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className='img-col'>
                <img src={img7} className='image1' alt="" />
                <span className='im'>Carpet Cleaning</span><br/>
                <span><a href="/carpet">Read More</a></span>
                </div><br/><br/><br/><br/><br/>
             </SwiperSlide>
             
            </Swiper>
        </div>
       
    </div>
  )
}

export default Slider
