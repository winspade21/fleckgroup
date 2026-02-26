import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { NavLink, Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/logo1.png";
import fleckGroupLogo from "../../assets/images/logo5.png";
import earthmovingLogo from "../../assets/images/logo4.png";
import nextgenLogo from "../../assets/images/logo3.png";
import civilLogo from "../../assets/images/logo2.png";

import "../../assets/css/Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  // Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top + close menu on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setExpanded(false);
  }, [location.pathname]);

  const handleNavClick = (path) => (e) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      e.preventDefault();
    }
    setExpanded(false);
  };

  // Active classes
  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const dropdownItemClass = ({ isActive }) =>
    isActive ? "dropdown-item active" : "dropdown-item";

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>

      {/* ================= TOP BAR ================= */}
      <div className="top-bar">

        {/* Logo Left */}
        <div className="top-left">
          <Link
            to="/"
            className="logo-link"
            onClick={(e) => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
                e.preventDefault();
              }
              setExpanded(false);
            }}
          >
            <img src={logo} alt="Fleck Group" className="main-logo" />
          </Link>
        </div>

        {/* Contact Center */}
        {/* <div className="top-center">
          <span><FaPhone /> 0419 111 133</span>
          <span><FaEnvelope /> admin@fleckgroup.com.au</span>
        </div> */}

        {/* Brand Logos Right */}
        <div className="top-right">
          <Link to="/fleck-earthmoving">
            <img src={earthmovingLogo} alt="Fleck Earthmoving" />
          </Link>
          <Link to="/fleck-planthire">
            <img src={fleckGroupLogo} alt="Fleck PlantHire" />
          </Link>
          <Link to="/nsw-planthaulage">
            <img src={civilLogo} alt="NSW Plant Haulage" />
          </Link>
          <Link to="/nextgen-earthworks">
            <img src={nextgenLogo} alt="NextGen Earthworks" />
          </Link>
        </div>

      </div>

      {/* ================= NAVBAR ================= */}
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        onToggle={(isOpen) => setExpanded(isOpen)}
        className="navbar-custom"
      >
        <Container fluid>

          {/* Mobile Logo */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-lg-none"
            onClick={() => setExpanded(false)}
          >
            <img src={logo} alt="Fleck Group" style={{ height: "50px" }} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto">

              {/* Home */}
              <Nav.Link
                as={NavLink}
                to="/"
                className={navLinkClass}
                onClick={handleNavClick("/")}
              >
                Home
              </Nav.Link>

              {/* About */}
              <Nav.Link
                as={NavLink}
                to="/about"
                className={navLinkClass}
              >
                About Us
              </Nav.Link>

              {/* Services */}
              <NavDropdown
                title="Services"
                id="services-dropdown"
                className={
                  location.pathname.startsWith("/services")
                    ? "active-dropdown"
                    : ""
                }
              >
                <NavDropdown.Item
                  as={NavLink}
                  to="/services"
                  className={dropdownItemClass}
                >
                  View All Services
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item as={NavLink} to="/services/earthmoving" className={dropdownItemClass}>
                  Earthmoving
                </NavDropdown.Item>

                <NavDropdown.Item as={NavLink} to="/services/civil" className={dropdownItemClass}>
                  Civil
                </NavDropdown.Item>

                <NavDropdown.Item as={NavLink} to="/services/demolition" className={dropdownItemClass}>
                  Demolition
                </NavDropdown.Item>

                <NavDropdown.Item as={NavLink} to="/services/haulage" className={dropdownItemClass}>
                  Haulage
                </NavDropdown.Item>
                
                <NavDropdown.Item as={NavLink} to="/services/plant-hire" className={dropdownItemClass}>
                   Plant Hire
                </NavDropdown.Item>

                <NavDropdown.Item as={NavLink} to="/services/transport" className={dropdownItemClass}>
                  Transport
                </NavDropdown.Item>

                
              </NavDropdown>

              {/* Projects */}
              <NavDropdown
                title="Projects & Info"
                id="projects-info-dropdown"
                className={
                  ["/projects", "/testimonial", "/faqs"].includes(location.pathname)
                    ? "active-dropdown"
                    : ""
                }
              >
                <NavDropdown.Item as={NavLink} to="/projects" className={dropdownItemClass}>
                  Projects
                </NavDropdown.Item>

                <NavDropdown.Item as={NavLink} to="/testimonial" className={dropdownItemClass}>
                  Testimonials
                </NavDropdown.Item>

                <NavDropdown.Item as={NavLink} to="/faqs" className={dropdownItemClass}>
                  FAQ
                </NavDropdown.Item>
              </NavDropdown>

              {/* Company */}
              <NavDropdown
                title="Company"
                id="company-dropdown"
                className={
                  [
                    "/fleck-earthmoving",
                    "/fleck-planthire",
                    "/nsw-planthaulage",
                    "/nextgen-earthworks",
                  ].includes(location.pathname)
                    ? "active-dropdown"
                    : ""
                }
              >
                <NavDropdown.Item as={NavLink} to="/fleck-earthmoving" className={dropdownItemClass}>
                  Fleck Earthmoving
                </NavDropdown.Item>

                <NavDropdown.Item as={NavLink} to="/fleck-planthire" className={dropdownItemClass}>
                  Fleck PlantHire
                </NavDropdown.Item>

                <NavDropdown.Item as={NavLink} to="/nsw-planthaulage" className={dropdownItemClass}>
                  NSW Plant Haulage
                </NavDropdown.Item>

                <NavDropdown.Item as={NavLink} to="/nextgen-earthworks" className={dropdownItemClass}>
                  NextGen Earthworks
                </NavDropdown.Item>
              </NavDropdown>

              {/* Contact */}
              <Nav.Link
                as={NavLink}
                to="/contact"
                className={navLinkClass}
              >
                Contact
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;