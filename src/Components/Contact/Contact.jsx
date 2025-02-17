import React from "react";
import { FaHome, FaEnvelope, FaPhone } from "react-icons/fa";
import './Contact.css'
const ContactSection = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <p className="contact-subtitle">SERVICES FOR WOMEN AND MEN</p>
        <h2 className="contact-title">
          Let us help you find the perfect look & gift for every occasion.
        </h2>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <div className="icon-container">
            <FaHome className="contact-icon" />
          </div>
          <p>Shepherd's Bush Sinclair Road,  <br /> 142, flat D, W14 0NL</p>
        </div>

        <div className="contact-item">
          <div className="icon-container">
            <FaEnvelope className="contact-icon" />
          </div>
          <p>labelpallavij@mail.com</p>
        </div>

        <div className="contact-item">
          <div className="icon-container">
            <FaPhone className="contact-icon" />
          </div>
          <p>+91 9988776655</p>
        </div>
      </div>
      <div className="contact-form-container">
      <div className="map-container">
        <iframe
          title="Google Maps"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.847369648689!2d-74.0059414845955!3d40.71277517932856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ1LjMiTiA3NMKwMDAnMTIuMyJX!5e0!3m2!1sen!2sus!4v1611100895534"
        ></iframe>
      </div>

      <div className="form-container">
        <h3>Contact Me</h3>
        <h2>Consultations are free!</h2>
        <p>Contact me today for all of your fashion needs.</p>

        <form>
          <div className="input-group">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="E-mail" />
          </div>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </div>
    
  );
};

export default ContactSection;
