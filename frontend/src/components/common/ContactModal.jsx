import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactModal = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <div className="contact-fab" onClick={() => setShowContact(true)}>
        <FontAwesomeIcon icon={faPhone} size="lg" />
      </div>

      {showContact && (
        <div
          className="contact-modal-backdrop"
          onClick={() => setShowContact(false)}
        >
          <div
            className="contact-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowContact(false)}
            >
              ×
            </button>

            <h4>Contact Us</h4>
            <p>Tell us about your project and we’ll get back to you.</p>

            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>

              <button type="submit" className="cta-btn primary">
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
