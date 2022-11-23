import React from 'react';
import clean from "../images/clean.jpg";
import "./About.css";
import NumberCounter from 'number-counter';
import img8 from '../images/house-cleaning.jpg';
import img9 from '../images/clean1.jpg';

const About = () => {
  return (
    <>
    <div className='mid'>
      <div className="left-part">
        <img src={clean} className='img-mid'  alt="" />
      </div>
      <div className="text-area">
        <span className='area'>Who We Are</span><br/>
        <span className='area1'>About The EHome Cleaners</span><br/>
        <span className='area3'>Provide the best Cleaning services for our client with their satisfaction</span><br/>
        <span className='area4'>No. 1 Cleaning Service in Odisha that provides sanitary and environmentally friendly cleaning solutions for homes, offices, and stores.</span><br/><br/>
        <span className='area2'>EHome Cleaners provides a platform that allows skilled and experienced professionals to connect with users looking for specific services. Once on the platform, our match-making algorithm identifies professionals who are closest to the users' requirements and available at the requested time and date.We like to think of ourselves as dust-busters who combat filth, germs, and grime to save the world here at Urban Cleaning. We have a highly skilled and experienced team of specialists that will deep clean and disinfect your home and business using high-tech equipment and industrial-grade cleaning products.</span>
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
        <div className='best'>
        <div className='best-left'>
            <span className='best1'>Why EHome Cleaners is the Best !</span>
            <h2 className='titlee'>Why use EHome Cleaners ?</h2>
            <p className='p1'>What appears to be clean is not always clean. The truth is that we are surrounded by germs and bacteria on most surfaces, which are transferred to our bodies when we touch them directly or indirectly. Keeping our surroundings Deep Clean will undoubtedly reduce such issues, and a neat and clean environment always appears beautiful.</p><br/>
            <p className='p1'><strong>Professional Staff</strong>  We have a team of experienced and professional cleaners; all are hired after proper verification and documentation. No partners, vendors or third parties.Home Cleaning provide services by in house staff only.</p><br/>
            <p className='p1'><strong>Advanced Equipment</strong>  We use advanced cleaning equipment which gives best cleaning results and complete the work in short time as compared to traditional cleaning. In short, quick and hassle free.</p><br/>
            <p className='p1'><strong>Best Chemicals</strong>  Low quality chemicals may deface your floor, furniture surface, carpet or sofa cloth in long term. Usually these signs appear after some days of cleaning.</p><br/><br/><br/>

        </div>
        <div className="best-right">
          <img src={img8} alt="" /><br/>
          </div>
          
          
         
        </div>
        </>
  )
}

export default About
