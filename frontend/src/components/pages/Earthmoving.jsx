import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import earthmovingImg from "../../assets/images/earthmoving.jpg";
import civilImg from "../../assets/images/civil.jpeg";
import demolitionImg from "../../assets/images/demolition.jpeg";
import haulageImg from "../../assets/images/haulage.jpg";
import transportationImg from "../../assets/images/transport.jpg";
import plantHireImg from "../../assets/images/plantHire.jpg";

import logo1 from '../../assets/images/logo5.png';
import logo2 from '../../assets/images/logo4.png';
import logo3 from '../../assets/images/logo3.png';
import logo4 from '../../assets/images/logo2.png';

import "../../assets/css/Earthmoving.scss";

const services = [
  { title: "Earthmoving", subtitle: "Bulk excavation and expert earthworks solutions.", image: earthmovingImg, link: "/services/earthmoving" },
  { title: "Civil Works", subtitle: "Reliable infrastructure and site development services.", image: civilImg, link: "/services/civil" },
  { title: "Demolition", subtitle: "Safe, controlled, and precision demolition services.", image: demolitionImg, link: "/services/demolition" },
  { title: "Haulage", subtitle: "Efficient material transport for projects of any scale.", image: haulageImg, link: "/services/haulage" },
  { title: "Transportation", subtitle: "Dependable transport solutions backed by a modern fleet.", image: transportationImg, link: "/services/transportation" },
  { title: "Plant Hire", subtitle: "High-performance machinery with experienced operators.", image: plantHireImg, link: "/services/plant-hire" },
];

const Earthmoving = () => {
  const location = useLocation();
  const heroRef = useRef(null);

  /* ================= PARALLAX HERO ================= */
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const offset = window.pageYOffset;
        heroRef.current.style.backgroundPositionY = `${offset * 0.5}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= SCROLL ANIMATION ================= */
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".inner-w3-title4, .hero-subtitle, .earthmoving-side-card, .service-content1, .results-card, .cta-section, .fleck-brands-inline"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <div
        className="inner-banner4 py-5"
        style={{ backgroundImage: `url(${earthmovingImg})` }}
        ref={heroRef}
      >
        <section className="w3l-breadcrumb4 py-sm-5">
          <div className="container">
            <div className="w3breadcrumb-gids4">
              <div className="w3breadcrumb-left4">
                <h2 className="inner-w3-title4 mt-sm-5 mt-4">Earthmoving</h2>
                <p className="hero-subtitle">
                  Precision Excavation & Site Preparation Solutions
                </p>
              </div>
              <div className="w3breadcrumb-right4">
                <ul className="breadcrumbs-custom-path4">
                  <li><Link to="/">Home</Link></li>
                  <li className="active">
                    <span className="fas fa-angle-double-right mx-2"></span>
                    Earthmoving
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <section className="service-page1">
        <div className="container">
          <div className="service-layout1">

            {/* SIDEBAR */}
            <aside className="services-sidebar1">
              <h3>Other Services</h3>
              {services.filter(s => s.link !== location.pathname).map((service, idx) => (
                <Link key={idx} to={service.link} className="earthmoving-side-card service-card">
                  <img src={service.image} alt={service.title} />
                  <div className="card-content">
                    <h4>{service.title}</h4>
                    <p className="subtitle">{service.subtitle}</p>
                  </div>
                </Link>
              ))}
            </aside>

            {/* CONTENT */}
            <div className="service-content1">
              <h2>Professional Earthmoving & Site Preparation</h2>
              <p>
                Fleck Group delivers reliable, large-scale earthmoving solutions for
                residential, commercial, and civil construction projects.
              </p>

              <h3>Our Earthmoving Capabilities</h3>
              <ul>
                <li>Bulk excavation and cut & fill operations</li>
                <li>Site leveling and pad preparation</li>
                <li>Trenching and utility installation preparation</li>
                <li>Land clearing and vegetation removal</li>
                <li>Soil management and material haulage</li>
              </ul>

              <h3>Why Choose Fleck Group?</h3>
              <ul>
                <li>Proven experience and reliability</li>
                <li>Modern, fully maintained fleet</li>
                <li>On-time project delivery</li>
                <li>Commitment to quality and safety</li>
              </ul>
            </div>

          </div>

          {/* ================= RESULTS ================= */}
          <section className="results-section mt-5">
            <div className="container text-center">
              <h2>Real Results in Action</h2>
              <p>See our earthmoving projects transform sites with precision and efficiency.</p>

              <div className="results-cards">
                <div className="results-card">
                  <img src={earthmovingImg} alt="Project 1"/>
                  <h4>Residential Site Excavation</h4>
                  <p>Complete site prep and leveling for a new housing development.</p>
                </div>
                <div className="results-card">
                  <img src={civilImg} alt="Project 2"/>
                  <h4>Commercial Earthworks</h4>
                  <p>Efficient bulk excavation for commercial construction project.</p>
                </div>
                <div className="results-card">
                  <img src={haulageImg} alt="Project 3"/>
                  <h4>Civil Infrastructure</h4>
                  <p>Precision grading and trenching for utility installation.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ================= CTA ================= */}
        <section className="cta-section">
          <div className="container text-center">
            <h2>Ready to Move Earth Efficiently?</h2>
            <p>Fleck Group provides professional earthmoving solutions for projects of any scale.</p>
            <Link to="/contact" className="cta-btn">
              Contact Fleck Group Today →
            </Link>
          </div>
        </section>
      </section>

      {/* ================= BRANDS ================= */}
      <section className="fleck-brands-inline py-4">
        <div className="container text-center">
          <div className="fleck-brands-inline__row">
            <a href="/fleck-earthmoving"><img src={logo1} alt="Fleck Earthmoving" /></a>
            <a href="/fleck-planthire"><img src={logo2} alt="Fleck Plant Hire" /></a>
            <a href="/nextGen-earthworks"><img src={logo3} alt="NextGen Earthworks" /></a>
            <a href="/nsw-plant-haulage"><img src={logo4} alt="NSW Plant Haulage" /></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Earthmoving;
