import React, { Fragment } from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <>
   <Fragment>
    <section className='contact'>
      <div className="contact-heading">
        <h2>Contact Us</h2>
      </div>
      <div className="containerr">
        <div className="roww">
          <div className="column">
            <div className="contact-widget">
              <div className="contact-widget-items">
                <div className="icons">
                <i className='fa-solid fa-location-dot'></i>
                </div>
                <div className="texts">
                  <h5>Address</h5>
                  <p>Unit 1,Bhubaneswar, Odisha</p>
                </div>
              </div>
              <div className="contact-widget-items">
                <div className="icons">
                <i className='fa-solid fa-phone'></i>
                </div>
                <div className="texts">
                  <h5>Call Us</h5>
                  <p>+910000000000</p>
                </div>
              </div>
              <div className="contact-widget-items">
                <div className="icons">
                <i className='fa-regular fa-envelope'></i>
                </div>
                <div className="texts">
                  <h5>Email Address</h5>
                  <p>ehomecleaners@gmail</p>
                </div>
              </div>
            </div>

          </div>
          <div className="column">
            <div className="contact-form">
              <form action='https://formspree.io/f/mkneerzj' method='POST'>
                <input type="text" name="Username" id="" placeholder='Name'
                required/>
                <input type="email" name="Email" id="" placeholder='Email'required />
                <input type="number" name="Phone" id="" placeholder='Phone' required/>
                <input type="text" name="Service" id="" placeholder=' Select Service ' required/>
                <input type="text" name="Location" id="" placeholder='Location' required/>
                <textarea name="Message" placeholder="Comments"></textarea>
                <button type='submit' className='site-btn'>Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="roww">
          <div className="map-column">
            <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.8695836585407!2d85.83035391395138!3d20.264242818814335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7b98df0d659%3A0x8bbd28f9257c5620!2sUnit%201%20Market!5e0!3m2!1sen!2sin!4v1668497661354!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            style={{border:0}} 
            allowfullscreen=""
             loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
            </div>
          </div>
        </div>
      </div>
    </section>
   </Fragment>
   
   </>
  )
}

export default Contact
