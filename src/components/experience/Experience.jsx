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
                <h4>HTML</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_icon'/>
              <div>
                <h4>CSS</h4>
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
                <h4>React</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_icon'/>
              <div>
                <h4>ES5/ES6</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_icon'/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Intermedio</small>
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
                <h4>Java</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
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
                <h4>PHP</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_icon'/>
              <div>
                <h4>JSON</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_icon'/>
              <div>
                <h4>REST</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_icon'/>
              <div>
                <h4>Wordpress</h4>
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