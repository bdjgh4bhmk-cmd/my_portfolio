import React from 'react'
import './footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer id='footer'>
      <a href="" className="footer_logo"></a>
      <ul className='links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://web.facebook.com/yehyiafaraj" target='_blank' ><FaFacebookSquare /> </a>
        <a href="https://x.com/YehiaFarag20" target='_blank' ><FaTwitter /> </a>
        <a href="https://www.linkedin.com/in/yehia-farag-334237321/" target='_blank' ><FaLinkedin /> </a>
      </div>
      <div className="footer_copyright">
        <small>&copy;<a href="https://web.facebook.com/yehyiafaraj">Yehia Farrag</a>Thank For Your Visit </small>
      </div>
    </footer>
  )
}

export default Footer