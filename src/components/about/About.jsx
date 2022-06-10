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
              <small>+4 años</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clientes</h5>
              <small>+10 clientes</small>
            </article>
            <article className='about_card'>
              <AiOutlineFundProjectionScreen className='about_icon' />
              <h5>Proyectos</h5>
              <small>+5 proyectos</small>
            </article>
          </div>

          <p>
            Me llamo Ángel, y soy tu nuevo desarrollador web.
            <br/><br/>
            Tras 4 años de estudio en Sistemas Informáticos y Desarrollo de Software
            me di cuenta de que la creación y producción de sitios web es lo que me apasionó desde el principio.
            <br/><br/>
            Tras 4 años trabajando en diferentes proyectos, en 2021 me lancé a hacer lo que más me llenaba y creé mi propia empresa, 
            en la que actualmente trabajo con algunos clientes fijos y estoy abierto a nuevas oportunidades.
          </p>

          <a href="#contact" className='btn btn-primary'>Contactar</a>
        </div>
      </div>
    </section>
  )
}

export default About