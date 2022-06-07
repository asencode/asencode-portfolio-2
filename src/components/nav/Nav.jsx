import React from 'react'
import './nav.css'
import {BiHomeAlt, BiUser, BiBriefcase, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {

  const[activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      {/*eslint-disable-next-line*/}
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><BiHomeAlt/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><BiUser/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BiBriefcase/></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav