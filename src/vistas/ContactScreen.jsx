import React from 'react'
import { useState } from 'react';
import '../css/ContactScreen.css'
const ContactScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };
  
    return (
      <div className="contact-container d-flex flex-column justify-content-center align-items-center">
        <h2 className="mb-4">Contáctanos</h2>
        <form className="contact-form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Ingresa tu correo electrónico"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Mensaje
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              value={message}
              onChange={handleMessageChange}
              placeholder="Escribe tu mensaje"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar Mensaje
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactScreen;