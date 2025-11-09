import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { BiBook } from "react-icons/bi";
import { BiMessageRounded } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";
import { useState } from 'react';
function Nav() {
  const [activeNav, setActiveNav ] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')} ><FaHome /></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')} ><GoPersonFill /></a>
      <a href="#skills" className={activeNav === '#skills' ? 'active' : ''} onClick={() => setActiveNav('#skills')} ><BiBook /></a>
      <a href="#services" className={activeNav === '#services' ? 'active' : ''} onClick={() => setActiveNav('#services')} ><RiServerLine /></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')} ><BiMessageRounded /></a>
    </nav>
  )
}

export default Nav