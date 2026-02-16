import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/ContactModal.scss"


const ContactModal = () => {
  const [showContact, setShowContact] = useState(false);

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
                <a href="tel:0419 111 133">0419 111 133</a>
              </p>
              <p>
                <strong>Office:</strong>{" "}
                <a href="tel:02 9653 2828">02 9653 2828</a>
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit" className="cta-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
