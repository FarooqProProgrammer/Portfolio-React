import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import './styles/Footer.css'



function Footer() {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="left">
          <div className="location flex  mb-[0.8rem] ">
            <FaHome size={20} className='text-white mr-[2rem]'/>
            <p>123 Housing Society</p>
          <p>Pakistan</p>
          </div>
         
          <div className="Phone flex">
            <h4><FaPhone size={20} className='text-white mr-[2rem]'/>
              123-456-789
            </h4>
          </div>
          <div className="email flex">
            <h4>
                    <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    Pakistan@gmail.com
            </h4>
          </div>
        </div> 

        <div className="right">
              <h4>About The Company</h4>
              <p>This is me Muhammad Farooq . I enjoy discussing 
                new projects design challenges
              </p>
              <div className="social flex">
                <FaFacebook size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaTwitter size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/>

              </div>
        </div> 
      </div>      
    </div>
  )
}

export default Footer