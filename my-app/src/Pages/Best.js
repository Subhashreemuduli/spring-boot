import React from 'react'
import "./Best.css"
import img8 from '../images/house-cleaning.jpg';
import NumberCounter from 'number-counter';
import testimonial1 from '../images/testimonial1.jpg'
import testimonial2 from '../images/testimonial2.jpg'
import testimonial3 from '../images/testimonial3.jpg'
import testi4 from '../images/profile2.jpg'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination} from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';
const Best = () => {
  return (
    <>
    <div className='best'>
        <div className='best-left'>
            <span className='best1'>Why EHome Cleaners is the Best !</span>
            <h2 className='titlee'>Why use EHome Cleaners ?</h2>
            <p className='p1'>What appears to be clean is not always clean. The truth is that we are surrounded by germs and bacteria on most surfaces, which are transferred to our bodies when we touch them directly or indirectly. Keeping our surroundings Deep Clean will undoubtedly reduce such issues, and a neat and clean environment always appears beautiful.</p><br/>
            <p className='p1'><strong>Professional Staff</strong>  We have a team of experienced and professional cleaners; all are hired after proper verification and documentation. No partners, vendors or third parties.Home Cleaning provide services by in house staff only.</p><br/>
            <p className='p1'><strong>Advanced Equipment</strong>  We use advanced cleaning equipment which gives best cleaning results and complete the work in short time as compared to traditional cleaning. In short, quick and hassle free.</p><br/>
            <p className='p1'><strong>Best Chemicals</strong>  Low quality chemicals may deface your floor, furniture surface, carpet or sofa cloth in long term. Usually these signs appear after some days of cleaning.</p><br/>
            <a href="/about" className='best-btn'>Discover More </a> <br/><br/><br/><br/>
        </div>
        <div className="best-right">
          <img src={img8} alt="" />
          
          </div>
        </div>
        
        <div className='figures'> 
        <div className='fig'>
          <span >
            <NumberCounter end={400} start={1} delay='4' postFix="+"/>
          </span>
          <span >Happy Customers</span>
          </div>
          <div className='fig1'>
          <span >
          <NumberCounter end={360} start={1} delay='4' postFix="+"/>
          </span>
          <span>People Working</span>
          </div>
          <div className='fig2'>
          <span >
          <NumberCounter end={400} start={1} delay='4' postFix="+"/>
          </span>
          <span >Clean Homes</span>
          </div>
          <div className='fig3'>
          <span>
          <NumberCounter end={310} start={1} delay='4' postFix="+"/>
          </span>
          <span >Area Covered</span>
          </div>
        </div>
        <div className='testimonial-section'>
          <div className='heading'>
            <span className='section-subtitle'>What Our Customer Say</span><br/><br/>
          <span className='section-title'>Testimonial</span>
          </div>
          <Swiper
          
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{clickable:true}}
          
          >
            <SwiperSlide>
            <div className="testimonial-card">
                <img src={testimonial1}  className="test1" alt="" />
                <h3 className='testimonial-name'>Jhon Dey</h3>
                <p className='testimonial-description'>My Mom was very pleased with her service, the products used and the attentiveness by the ladies who cleaned the apartment.The cleaning products used were very good. Thank You!”</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="testimonial-card">
                <img src={testimonial2} className="test1" alt="" />
                <h3 className='testimonial-name'>Paula R</h3>
                <p className='testimonial-description'>EHome Cleaners are all wonderful! We have used them for many years in many different states.They are efficient, professional, and affordable. Thanks to all!”</p>
              </div>
            </SwiperSlide>
            <SwiperSlide><div className="testimonial-card">
                <img src={testimonial3} className="test1" alt="" />
                <h3 className='testimonial-name'>James Goel</h3>
                <p className='testimonial-description'>I wanted to write and express my deep appreciation for the women who did a deep clean of my home in Bhubaneswar. The service was outstanding, exceptional, reliable, dependable, and extremely professional</p>
              </div> 
              </SwiperSlide>
              <SwiperSlide><div className="testimonial-card">
                <img src={testi4} className="test1" alt="" />
                <h3 className='testimonial-name'>Sameera Desai</h3>
                <p className='testimonial-description'>“The ladies were extremely friendly and polite and they clean my oven perfectly! They also cleaned up after themselves. I was so happy I had to go look at my oven about ten times. Thank you EHome Cleaners!”</p>
              </div> 
              </SwiperSlide>
           
          </Swiper>
          </div>
          
          
    
    </>
  )
}

export default Best
