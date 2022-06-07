import React from 'react'
import './footer.css'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

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
        <li><a href="#testimonials">Reviews</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://twitter.com"><FaTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; ASENCODE. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer