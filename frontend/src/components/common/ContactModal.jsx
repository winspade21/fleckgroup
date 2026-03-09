import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import "../../assets/css/ContactModal.scss";

const ContactModal = () => {
  const [showContact, setShowContact] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(""); // "success", "error", ""

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formStatus) setFormStatus(""); // clear previous status
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_c6l4b78",       // Replace with your Service ID
        "template_yc0mfim",      // Replace with your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "z1JcI-iQSc1utoeQ0"        // Replace with your Public Key
      );
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Hide success message after 5 seconds
      setTimeout(() => setFormStatus(""), 5000);
    } catch (err) {
      setFormStatus("error");
      setTimeout(() => setFormStatus(""), 5000);
    }
  };

  return (
    <>
      {/* Floating Contact Button */}
      <div
        className="contact-fab"
        onClick={() => setShowContact(true)}
        aria-label="Open contact form"
      >  
        <FontAwesomeIcon icon={faPhone} size="lg" />
      </div>

      {/* Modal Backdrop */}
      {showContact && (
        <div
          className="contact-modal-backdrop"
          onClick={() => setShowContact(false)}
        >
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              className="close-btn"
              onClick={() => setShowContact(false)}
              aria-label="Close contact form"
            >
              ×
            </button>

            {/* Modal Content */}
            <h4>Contact Us</h4>
            <p>Tell us about your project and we’ll get back to you.</p>

            {/* Phone Numbers */}
            <div className="contact-info">
              <p>
                <strong>Mobile:</strong>{" "}
                <a href="tel:0419111133">0419 111 133</a>
              </p>
              <p>
                <strong>Office:</strong>{" "}
                <a href="tel:0296532828">02 9653 2828</a>
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="cta-btn">
                Send Message
              </button>
            </form>

            {/* Status Messages */}
            <div className="form-status">
              {formStatus === "success" && (
                <p className="success-msg">Thank you! Your message has been sent.</p>
              )}
              {formStatus === "error" && (
                <p className="error-msg">Oops! Something went wrong. Please try again.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;