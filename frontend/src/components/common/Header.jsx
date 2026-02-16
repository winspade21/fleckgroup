import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaQuoteLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/logo1.png";
import fleckGroupLogo from "../../assets/images/logo5.png";
import earthmovingLogo from "../../assets/images/logo4.png";
import nextgenLogo from "../../assets/images/logo3.png";
import civilLogo from "../../assets/images/logo2.png";

import "../../assets/css/Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCTA, setShowCTA] = useState(true);
  const location = useLocation();

  /* SINGLE SCROLL LISTENER (performance fix) */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      setShowCTA(window.scrollY < 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Scroll to top on route change */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  /* Adjust navbar top depending on bars */
  useEffect(() => {
    const adjustNavbarTop = () => {
      const navbar = document.querySelector(".navbar-custom");
      const topBar = document.querySelector(".top-bar");
      const companyStrip = document.querySelector(".company-strip");

      if (!navbar) return;

      const topBarHeight =
        topBar && window.innerWidth > 991 ? topBar.offsetHeight : 0;

      const stripHeight =
        companyStrip && window.innerWidth > 991
          ? companyStrip.offsetHeight
          : 0;

      navbar.style.top = `${topBarHeight + stripHeight}px`;
    };

    adjustNavbarTop();
    window.addEventListener("resize", adjustNavbarTop);
    return () => window.removeEventListener("resize", adjustNavbarTop);
  }, []);

  /* Handler for same-page nav click */
  const handleSamePageScroll = (path) => (e) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      e.preventDefault();
    }
  };

  return (
    <header className="site-header">
      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        {/* LEFT */}
        <div className="top-left">
          <span><FaPhone /> 0419 111 133</span>
          <span><FaEnvelope /> admin@fleckgroup.com.au</span>
        </div>

        {/* CENTER — COMPANY BRANDS */}
        <div className="top-brands">
          <Link to="/fleck-earthmoving">
            <img src={fleckGroupLogo} alt="Fleck Group" />
          </Link>

          <Link to="/fleck-planthire">
            <img src={earthmovingLogo} alt="Fleck Earthmoving" />
          </Link>

          <Link to="/nextgen-earthworks">
            <img src={nextgenLogo} alt="NextGen Earthworks" />
          </Link>

          <Link to="/nsw-planthaulage">
            <img src={civilLogo} alt="Fleck Civil" />
          </Link>
        </div>

        {/* RIGHT */}
        <div className="top-right">
          <div className="office-hours">
            <strong>Office Hours:</strong> Mon – Fri : 7:00AM – 5:00PM
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/fleckearthmoving" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/fleckearthmoving/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <Navbar
        expand="lg"
        fixed="top"
        className={`navbar-custom ${scrolled ? "scrolled" : ""}`}
      >
        <Container fluid>
          {/* LOGO */}
          <Navbar.Brand as={Link} to="/" className="logo me-auto">
            <img src={logo} alt="Fleck Group" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" onClick={handleSamePageScroll("/")}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={handleSamePageScroll("/about")}>About Us</Nav.Link>

              <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Item as={Link} to="/services" onClick={handleSamePageScroll("/services")}>
                  View All Services
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item as={Link} to="/services/earthmoving" onClick={handleSamePageScroll("/services/earthmoving")}>
                  Earthmoving
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/civil" onClick={handleSamePageScroll("/services/civil")}>
                  Civil
                </NavDropdown.Item>
                 <NavDropdown.Item as={Link} to="/services/demolition" onClick={handleSamePageScroll("/services/demolition")}>
                  Demolition
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/haulage" onClick={handleSamePageScroll("/services/haulage")}>
                  Haulage
                </NavDropdown.Item>               
                <NavDropdown.Item as={Link} to="/services/transport" onClick={handleSamePageScroll("/services/transport")}>
                  Transport
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/plant-hire" onClick={handleSamePageScroll("/services/plant-hire")}>
                  Plant Hire
                </NavDropdown.Item>
                
              </NavDropdown>

              <Nav.Link as={Link} to="/projects" onClick={handleSamePageScroll("/projects")}>Projects</Nav.Link>
              <Nav.Link as={Link} to="/testimonial" onClick={handleSamePageScroll("/testimonial")}>Testimonials</Nav.Link>
              <Nav.Link as={Link} to="/faqs" onClick={handleSamePageScroll("/faqs")}>FAQ</Nav.Link>
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
