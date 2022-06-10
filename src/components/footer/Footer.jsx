import React from 'react'
import './footer.css'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      {/*eslint-disable-next-line*/}
      <a href="#" className='footer_logo'>ASENCODE</a>

      <ul className='permalinks'>
        {/*eslint-disable-next-line*/}
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre Mí</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://instagram.com/asencode_oficial" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/angel-castillo-asensio/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/asencode" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; ASENCODE. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer