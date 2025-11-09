import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Homeicons() {
  return (
    <div className='home_social'>
        <a href="https://web.facebook.com/yehyiafaraj" target="_blank"><FaFacebook /></a>
        <a href="https://www.instagram.com/yehia__farrag/" target="_blank"><FaInstagram /></a>
        <a href="https://github.com/bdjgh4bhmk-cmd" target="_blank"> <FaGithub /></a>
    </div>
  )
}

export default Homeicons