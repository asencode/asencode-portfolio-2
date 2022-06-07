import React, { useRef, useState } from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const Contact = () => {

  const form = useRef();
  const [toggleAlert, setToggleAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_h2bcga3', 'template_ypgqdui', form.current, 'zCwN8x2CXMklpjpUF')
    .then((result) => {
      setToggleAlert(true);
    });
  };

  return (
    <section id="contact">
      <h5>Para lo que necesites</h5>
      <h2>Contacto</h2>

      <div className="container contact_container">
        <div className="contact_cards">
          <article className="contact_card">
            <FiMail className='contact_icon' />
            <h4>Email</h4>
            <h5>soporte@asencode.com</h5>
            <a href="mailto:soporte@asencode.com" target="_blank" rel="noopener noreferrer">Enviar Mensaje</a>
          </article>
          <article className="contact_card">
            <RiMessengerLine className='contact_icon' />
            <h4>Messenger</h4>
            <h5>Asencode</h5>
            <a href="https://m.me/cstmoto" target="_blank" rel="noopener noreferrer">Enviar Mensaje</a>
          </article>
          <article className="contact_card">
            <BsWhatsapp className='contact_icon' />
            <h4>WhatsApp</h4>
            <h5>681103266</h5>
            <a href="whatsapp://send?text=Hola! He visto tu portfolio y me gustaría saber si me puedes ayudar con...&phone=+34681103266" target="_blank" rel="noopener noreferrer">Enviar Mensaje</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="contact_name" placeholder='Tu Nombre' required />
          <input type="email" name="contact_mail" placeholder='Tu Email' required />
          <textarea rows="7" name="contact_message" placeholder='Tu mensaje...' required></textarea>
          <Stack spacing={2} className={`contact_alert ${toggleAlert === true ? "fadeIn" : "fadeOut"}`}>
            <Alert severity="success">
              <AlertTitle>¡Recibido!</AlertTitle>
              En breve recibirás mi respuesta. <strong>¡Muchas Gracias!</strong>
            </Alert>
          </Stack>
          <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact