import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import logo from "../../assets/images/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container className="footer-container">
        <Row>
          {/* Brand */}
          <Col md={3} className="footer-brand">
            <div className="footer-logo-row">
              <img src={logo} alt="Fleck Group" className="footer-logo" />
              <span className="footer-brand-name">Fleck Group</span>
            </div>
            <p>
              We provide reliable and efficient earthmoving services backed by years of experience and a commitment to quality.
              From residential to large-scale commercial projects, we deliver precise results on time, every time.
            </p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </Col>

          {/* Our Services */}
          <Col md={3} className="footer-links">
            <h5>Our Services</h5>
            <span className="footer-accent"></span>
            <ul>
              <li><Link to="/services/demolition">Demolition</Link></li>
              <li><Link to="/services/earthmoving">Earthmoving</Link></li>
              <li><Link to="/services/haulage">Haulage</Link></li>
              <li><Link to="/services/plant-hire">Plant Hire</Link></li>
              <li><Link to="/services/transport">Transport</Link></li>
              <li><Link to="/services/civil">Civil</Link></li>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col md={3} className="footer-links">
            <h5>Quick Links</h5>
            <span className="footer-accent"></span>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/blogs">Testimonials</Link></li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={3} className="footer-contact">
            <h5>Contact</h5>
            <span className="footer-accent"></span>
            <ul>
              <li><FaMapMarkerAlt /> 8/18 Precision Place Mulgrave NSW 2756</li>
              <li><FaPhone /> <a href="tel:+614191111133">(+61) 0419 111 133</a></li>
              <li><FaEnvelope /> <a href="mailto:admin@fleckgroup.com.au">admin@fleckgroup.com.au</a></li>
            </ul>
          </Col>
        </Row>

        {/* Bottom copyright */}
        <Row>
          <Col className="footer-bottom text-center">
            &copy; {new Date().getFullYear()} Fleck Group. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
