import React, { useRef } from 'react';
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const ContactData = [{
  id: 1,
  icon: <MdOutlineEmail />,
  title: 'Email',
  info: 'yehiafarag779@gamil.com',
  link: 'mailto:yehiafarag779@gamil.com',
},
{
  id: 2,
  icon: <FaFacebookMessenger />,
  title: 'Massanger',
  info: 'yehia farrag',
  link: 'https://n.mo/YehiaFarrag',
},
{
  id: 3,
  icon: <FaWhatsapp />,
  title: 'Whatsapp',
  info: '01113830524',
  link: 'https://api.whatsapp.com/send?phone=01113830524',
},
]
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_t20rvw9', 'template_ccy44bv', form.current, 'crQpxfeBNHN-sGDom')
      .then(() => {
        alert('Message sent successfully!');
        e.target.reset();
      })
      .catch((error) => {
        alert('Something went wrong: ' + error.text);
      });

  };
  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className='contact_option'>
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank">Send Message</a>

            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Full Name' name='name' />
          <input type="email" placeholder='Your Email' name='email' />
          <textarea rows={10} name="message" id="" placeholder='Your message' ></textarea>
          <button className='btn btn-primary'>Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact