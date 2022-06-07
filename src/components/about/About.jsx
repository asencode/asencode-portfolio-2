import React from 'react'
import './about.css'
import aboutMeImagen from '../../assets/about_me_2.png'
import {BiMedal} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Sobre Mí</h5>
      <h2>¿Quién Soy?</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={aboutMeImagen} alt="Asencode" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BiMedal className='about_icon' />
              <h5>Experiencia</h5>
              <small>+3 years</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clientes</h5>
              <small>Creciendo</small>
            </article>
            <article className='about_card'>
              <AiOutlineFundProjectionScreen className='about_icon' />
              <h5>Proyectos</h5>
              <small>+200</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <a href="#contact" className='btn btn-primary'>Contactar</a>
        </div>
      </div>
    </section>
  )
}

export default About