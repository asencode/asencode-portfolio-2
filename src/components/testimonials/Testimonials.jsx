import React from 'react'
import './testimonials.css'
import client1 from '../../assets/client1.png'
import client2 from '../../assets/client2.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: client1,
    name: "Cliente 1",
    review: 'Lorem ipsum dolor sit amet consectetur elit. Iusto quod nam impedit soluta odio possimus! Quas sint dignissimos distincto alias rerum laborum aperiamo minus pariatur, totam dicta, repellendus a voluptabilus!'
  },
  {
    avatar: client2,
    name: "Cliente 2",
    review: 'Lorem ipsum dolor sit amet consectetur elit. Iusto quod nam impedit soluta odio possimus! Quas sint dignissimos distincto alias rerum laborum aperiamo minus pariatur, totam dicta, repellendus a voluptabilus!'
  },
  {
    avatar: client1,
    name: "Cliente 3",
    review: 'Lorem ipsum dolor sit amet consectetur elit. Iusto quod nam impedit soluta odio possimus! Quas sint dignissimos distincto alias rerum laborum aperiamo minus pariatur, totam dicta, repellendus a voluptabilus!'
  },
  {
    avatar: client2,
    name: "Cliente 4",
    review: 'Lorem ipsum dolor sit amet consectetur elit. Iusto quod nam impedit soluta odio possimus! Quas sint dignissimos distincto alias rerum laborum aperiamo minus pariatur, totam dicta, repellendus a voluptabilus!'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Qué opinan los clientes</h5>
      <h2>Reseñas</h2>

      <Swiper className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        
        {
          data.map(({avatar, name, review}, index) => {
            return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials