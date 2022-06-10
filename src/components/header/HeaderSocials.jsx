import React from 'react'
import {BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/angel-castillo-asensio/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/asencode" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a href="https://instagram.com/asencode_oficial" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials