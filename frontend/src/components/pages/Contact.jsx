import React, { useState } from "react";
import "../../assets/css/ContactModal.scss";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_c6l4b78",    
      "template_yc0mfim",  
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString() 
      },
      "z1JcI-iQSc1utoeQ0"     
    )
    .then(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    })
    .catch(() => setFormStatus("error"));
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <div className="container hero-content">
            <h1>Contact Us</h1>
            <p className="breadcrumb-custom">
              <Link to="/">Home</Link> <span className="separator">/</span> <span className="active">Contact</span>
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="main-contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* LEFT COLUMN */}
            <div className="contact-left">
              <div className="intro-text">
                <h4>Why Choose Us</h4>
                <h2>We Would Love To Cooperate To Build Future</h2>
                <p>
                  Our team provides innovative solutions for plant hire, heavy equipment, and site services.
                  We are committed to delivering quality, efficiency, and safety on every project.
                </p>
              </div>

              <div className="contact-cards">
                <div className="info-card">
                  <div className="icon">📍</div>
                  <p>8/18 Precision Place Mulgrave</p>
                  <p>NSW 2756</p>
                </div>
                <div className="info-card">
                  <div className="icon">✉️</div>
                  <p>admin@fleckgroup.com</p>
                </div>
                <div className="info-card">
                  <div className="icon">📞</div>
                  <p>0419 111 133</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="contact-right">
              <div className="contact-form">
                <h3>SEND A MESSAGE</h3>
                <p>Fill out the form below and our team will get back to you shortly.</p>

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone No"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <button type="submit">SUBMIT</button>
                </form>

                <div className="form-status">
                  {formStatus === "success" && <p className="success-msg">Thank you! Your message has been sent.</p>}
                  {formStatus === "error" && <p className="error-msg">Oops! Something went wrong. Please try again.</p>}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1660.9932511361453!2d150.8368795015223!3d-33.63159197543461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129df567fecbaf%3A0x2347e544e8eb7e08!2s8%2F18%20Precision%20Pl%2C%20Mulgrave%20NSW%202756%2C%20Australia!5e0!3m2!1sen!2sph!4v1772718202720!5m2!1sen!2sph"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location"
        ></iframe>
      </section>

    </div>
  );
};

export default Contact;