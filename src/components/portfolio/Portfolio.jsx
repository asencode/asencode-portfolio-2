import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.png'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Desarrollos Realizados</h5>
      <h2>Proyectos</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img1} alt="CSTMoto" />
          </div>
          <h3>CSTMoto</h3>
          <h5>Tienda online de venta de equipación y recambios para moto.</h5>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img2} alt="JLet" />
          </div>
          <h3>JLet</h3>
          <h5>App de gestión de facturación y contabilidad para empresas.</h5>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img3} alt="Mallproshop" />
          </div>
          <h3>Mallproshop</h3>
          <h5>Tienda online de venta de productos tecnológicos a mayoristas.</h5>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img4} alt="Portfolio 1" />
          </div>
          <h3>JA Inmobiliaria</h3>
          <h5>Inmobiliaria con más de 50 propiedades en venta.</h5>
        </article>
      </div>
    </section>
  )
}

export default Portfolio