import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Proyectos Recientes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img1} alt="Portfolio 1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item_cta'>
            <a href="https://github.com" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://github.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img2} alt="Portfolio 1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item_cta'>
            <a href="https://github.com" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://github.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img3} alt="Portfolio 1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item_cta'>
            <a href="https://github.com" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://github.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img3} alt="Portfolio 1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item_cta'>
            <a href="https://github.com" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://github.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img2} alt="Portfolio 1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item_cta'>
            <a href="https://github.com" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://github.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={img1} alt="Portfolio 1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item_cta'>
            <a href="https://github.com" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://github.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio