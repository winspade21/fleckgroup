import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaQuoteLeft } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo1.png";
import "../../assets/css/Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Navbar shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [showCTA, setShowCTA] = useState(true); // new state for CTA visibility

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 60);
    setShowCTA(window.scrollY < 120); // hide CTA after scrolling 120px
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
  const navbar = document.querySelector(".navbar-custom");
  const topBar = document.querySelector(".top-bar");

  const adjustNavbarTop = () => {
    if (!navbar) return;
    const topBarHeight = topBar && window.innerWidth > 480 ? topBar.offsetHeight : 0;
    navbar.style.top = `${topBarHeight}px`;
  };

  adjustNavbarTop();
  window.addEventListener("resize", adjustNavbarTop);
  return () => window.removeEventListener("resize", adjustNavbarTop);
}, []);
  return (
    <header className="site-header">

      {/* ================= TOP BAR ================= */}

    <div className="top-bar">

        <div className="top-left">
          <span> <FaPhone /> 0419 111 133</span>
          <span><FaEnvelope /> admin@fleckgroup.com.au</span>
        </div>

        <div className="top-center">
          Mon – Fri : 7:00AM – 5:00PM
        </div>

        <div className="top-right">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>


      </div>

      {/* ================= NAVBAR ================= */}

      <Navbar
        expand="lg"
        fixed="top"
        className={`navbar-custom ${scrolled ? "scrolled" : ""}`}
      >
        <Container>

          {/* LOGO */}
          <Navbar.Brand as={Link} to="/" className="logo">
            <img src={logo} alt="Fleck Group" />
          </Navbar.Brand>

          {/* MOBILE TOGGLE */}
          <Navbar.Toggle aria-controls="main-navbar" />

          {/* NAVIGATION */}
          <Navbar.Collapse id="main-navbar">

            <Nav className="mx-auto">

              <Nav.Link as={Link} to="/">Home</Nav.Link>

              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>

              <NavDropdown title="Services" id="services-dropdown">

                <NavDropdown.Item as={Link} to="/services">
                  View All Services
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item as={Link} to="/services/demolition">
                  Demolition
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/services/earthmoving">
                  Earthmoving
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/services/transport">
                  Transport
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/services/haulage">
                  Haulage
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/services/plant-hire">
                  Plant Hire
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/services/civil">
                  Civil
                </NavDropdown.Item>

              </NavDropdown>

              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>

              <Nav.Link as={Link} to="/testimonial">
                Testimonials
              </Nav.Link>

              <Nav.Link as={Link} to="/faqs">
                FAQ
              </Nav.Link>

            </Nav>

            {/* CTA */}
            <div className={`nav-cta-button ${showCTA ? "show" : "hide"}`}>
              <Link to="/contact">
                <button className="nav-quote-btn">
                  <FaQuoteLeft /> Get A Quote
                </button>
              </Link>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  );
};

export default Header;
