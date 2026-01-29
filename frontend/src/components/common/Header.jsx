import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo1.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <header>
      <Navbar
        expand="lg"
        fixed="top"
        className={`navbar-custom navbar-dark ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          {/* LOGO */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={logo} alt="Logo" />
          </Navbar.Brand>

          {/* TOGGLER */}
          <Navbar.Toggle aria-controls="main-navbar">
            <span className="navbar-toggler-icon">
              <span></span>
            </span>
          </Navbar.Toggle>

          {/* NAV */}
          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto">
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>

              <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Item as={Link} to="/services">
                  View All Services
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/services/demolition">Demolition</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/earthmoving">Earthmoving</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/transport">Transport</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/haulage">Haulage</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/plant-hire">Plant Hire</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/civil">Civil</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/testimonial">Testimonials</Nav.Link>
              <Nav.Link as={Link} to="/faqs">FAQ</Nav.Link>
            </Nav>

            {/* CTA */}
            <div className="nav-cta-button">
              <Link to="/contact">
                <button className="nav-quote-btn">
                  <FaPhone /> Contact Us
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
