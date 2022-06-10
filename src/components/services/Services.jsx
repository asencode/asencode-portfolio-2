import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section id="services">
      <h5>Lo que te ofrezco</h5>
      <h2>Servicios</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Proyectos a Medida</h3>
          </div>

          <ul className='service_list'>
            <li>
              <p>Podrás gestionar tu negocio al completo desde tu propia App hecha a medida, tu propio producto.</p>
            </li>
            <li>
              <hr/>
              <p>Escalabilidad: el producto crecerá con tu negocio sin problemas.</p>
            </li>
            <li>
              <hr/>
              <p>Usando siempre las mejores herramientas y tecnologías para que tu producto trabaje por tí de forma útil, dinámica y eficiente.</p>
            </li>
            <li>
              <hr/>
              <p>La seguridad es lo primero. Conexiones cifradas en todo el ciclo de uso del producto.</p>
            </li>
            <li>
              <hr/>
              <p>Soporte 24/7: estaré ahí para lo que necesites en todo momento.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Creación de Sitios Web</h3>
          </div>

          <ul className='service_list'>
            <li>
              <p>La web perfecta para tu negocio.</p>
            </li>
            <li>
              <hr/>
              <p>En pocos días tendrás tu sitio web al completo con los servicios que necesitas.</p>
            </li>
            <li>
              <hr/>
              <p>A través de los mejores plugins, tu sitio web se comunicará internamente con el algoritmo de Google para posicionarse lo más arriba posible en los resultados de búsqueda.</p>
            </li>
            <li>
              <hr/>
              <p>La seguridad es lo primero. Conexiones cifradas en todo el ciclo de uso del producto.</p>
            </li>
            <li>
              <hr/>
              <p>Soporte 24/7: estaré ahí para lo que necesites en todo momento.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Servicios Adicionales</h3>
          </div>

          <ul className='service_list'>
            <li>
              <p>Edición de imagen.</p>
            </li>
            <li>
              <hr/>
              <p>Servicio de fotografía: tu web mostrará las mejores imágenes de los productos que ofreces.</p>
            </li>
            <li>
              <hr/>
              <p>Creación del logo de tu negocio.</p>
            </li>
            <li>
              <hr/>
              <p>Marketing Digital: permite que tu empresa sea conocida en redes sociales.</p>
            </li>
            <li>
              <hr/>
              <p>Resolución de incidencias: tanto si tienes algún problema con tu sitio web actual como si necesitas asistencia física con tu equipo informático.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services