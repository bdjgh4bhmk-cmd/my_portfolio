import React from 'react'
import './home.css'
import Me from '../../Me/me.jpeg.jpeg'
import Homeicons from './Homeicons'

function Home() {
  return (
    <>
    <div className="home">
      <div className="container home_container">
         <h4>Hello i'm</h4>
         <h1>YEHIA FARRAG</h1>
         <h4>Full Stack Developer </h4>
        <div className="btns">
         <a href="" className='btn' download>Download CV</a>
         <a href="#contact" className='btn btn-primary'>Let's Talk </a>
        </div>
          <div className="me">
           <img src={Me} alt="" />
          </div>
          <a href="#contact" className="scroll_down">scroll down </a>
              <Homeicons />

      </div>
    </div>
    </>
  )
}

export default Home