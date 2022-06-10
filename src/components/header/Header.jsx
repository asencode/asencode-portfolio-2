import React from 'react'
import './header.css'
import CTA from './CTA'
import Logo from '../../assets/logoHome_Neon.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>¡Hola! Bienvenid@ a</h5>
        <h1>ASENCODE</h1>
        <h5 className="text-light">Desarrollo de Aplicaciones Web</h5>
        <CTA />
        <HeaderSocials />
        <div className="logo">
          <img src={Logo} alt="Asencode" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header