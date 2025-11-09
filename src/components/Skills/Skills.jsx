import React from 'react'
import './skills.css'
import css from '../../images/css.png'
import js from '../../images/js.png'
import html from '../../images/html.png'
import nodejs from '../../images/nodejs.svg'
import react from '../../images/react.png'
import githup from '../../images/githup.png'
import bootstrap from '../../images/bootstrap_logo.svg.png'

const skillsdata = [
  {
    Id: 1,
    image: css,
    title: "Css",
    dis: 'User Interface',
  },
  {
    Id: 2,
    image: html,
    title: "Html",
    dis: 'Write',
  },
  {
    Id: 3,
    image: react,
    title: "React",
    dis: 'Framwork',
  },
  {
    Id: 4,
    image: js,
    title: "Javascript",
    dis: 'Interaction',
  },
  {
    Id: 5,
    image: nodejs,
    title: "nodejs",
    dis: 'framwork',
  },
  {
    Id: 6,
    image: githup,
    title: "Githup",
    dis: 'social',
  },
  {
    Id: 7,
    image: bootstrap,
    title: "Bootstrap",
    dis: 'framwork',
  },
]
function Skills() {
  return (
    <section className='skills' id='skills'>
      <div className="top_section">
        <h5>what skills i have</h5>
        <h2>my Expreience</h2>
      </div>
      <div className="container container_skills">
        {skillsdata.map(({ id, image, title, dis }) => (
          <article className='card_skill'>
            <div className="icon">
              <img src={image} alt="" /> </div>
            <div className='content'><h5>{title}</h5>
              <p className='text-light'>{dis}</p></div>


          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills