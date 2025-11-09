import React from 'react'
import './about.css'
import MeImage from '../../Me/me2.jpeg.jpeg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section className='about' id='about' >
      <div className="top_section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_container">
         <div className="about_me">
           <div className="about_me_image">
           <img src={MeImage} alt="" />
           </div>
         </div>
         <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward  className='about_icon'/>
              <h5>Experience</h5>
              <small>I Currently Junior frontend and studying Backend </small>
            </div>
             <div className="about_card">
              <FiUsers  className='about_icon'/>
              <h5>Clinets</h5>
              <small>No Clinets </small>
            </div>
             <div className="about_card">
              <VscFolderLibrary   className='about_icon'/>
              <h5>Projects </h5>
              <small>I'm working on a project at the Collage</small>
            </div>
          </div>
          <p> I'm Yahia, studying at the Pharaohs Academy, Computer Science Faculty, fourth level, final year.</p>
          <a href="#contact" className='btn btn-primary'>let's talk </a>         
         </div>
      </div>
    </section>
  )
}

export default About