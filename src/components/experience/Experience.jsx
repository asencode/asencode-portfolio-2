import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Mis Skills</h5>
      <h2>Experiencia</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Desarrollo Frontend</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_icon'/>
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_icon'/>
                <div>
                  <h4>CSS3</h4>
                  <small className='text-light'>Avanzado</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Avanzado</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_icon'/>
                <div>
                  <h4>jQuery</h4>
                  <small className='text-light'>Avanzado</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_icon'/>
                <div>
                  <h4>ReactJS</h4>
                  <small className='text-light'>Avanzado</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_icon'/>
                <div>
                  <h4>Angular</h4>
                  <small className='text-light'>Avanzado</small>
                </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Desarrollo Backend</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_icon'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience