import React from 'react'
import './services.css'
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

function Services() {
    return (
        <section id='services'>
            <div className="top_section">
                <h5>What I Offer</h5>
                <h2>Services</h2>
            </div>
            <div className="container container_services">
                <article className='card'>
                    < FaPen className='icon' />
                    <h2>Web Design</h2>
                    <p className="text_light">Good Coordination and Harmonious</p>
                </article>
                <article className='card'>
                    < IoIosRocket className='icon' />
                    <h2>Faster</h2>
                    <p className="text_light">Quick understanding,Quick wit</p>
                </article>
                <article className='card'>
                    <  FaCode className='icon' />
                    <h2>Clean Code</h2>
                    <p className="text_light">Write Clean, Understandable Code Whith Explanatory Comments  </p>
                </article>
            </div>
        </section>
    )
}

export default Services