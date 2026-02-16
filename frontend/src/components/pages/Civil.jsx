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

import "../../assets/css/Civil.scss";

const services = [
  { title: "Earthmoving", subtitle: "Bulk excavation and expert earthworks solutions.", image: earthmovingImg, link: "/services/earthmoving" },
  { title: "Civil Works", subtitle: "Reliable infrastructure and site development services.", image: civilImg, link: "/services/civil" },
  { title: "Demolition", subtitle: "Safe, controlled, and precision demolition services.", image: demolitionImg, link: "/services/demolition" },
  { title: "Haulage", subtitle: "Efficient material transport for projects of any scale.", image: haulageImg, link: "/services/haulage" },
  { title: "Transportation", subtitle: "Dependable transport solutions backed by a modern fleet.", image: transportationImg, link: "/services/transportation" },
  { title: "Plant Hire", subtitle: "High-performance machinery with experienced operators.", image: plantHireImg, link: "/services/plant-hire" },
];

const Civil = () => {
  const location = useLocation();
  const heroRef = useRef(null);

  // Parallax Hero
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${window.pageYOffset * 0.5}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-triggered animation
  useEffect(() => {
    const elements = document.querySelectorAll(".civil-hero-title, .civil-hero-subtitle, .civil-side-card, .civil-content, .civil-results-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <div
        className="civil-hero-banner"
        style={{ backgroundImage: `url(${civilImg})` }}
        ref={heroRef}
      >
        <section className="civil-breadcrumbs">
          <div className="container">
            <div className="civil-breadcrumbs-inner">
              <div className="civil-breadcrumbs-left">
                <h2 className="civil-hero-title">Civil Works</h2>
                <p className="civil-hero-subtitle">
                  Infrastructure Development & Precision Construction Solutions
                </p>
              </div>
              <div className="civil-breadcrumbs-right">
                <ul className="civil-breadcrumbs-path">
                  <li><Link to="/">Home</Link></li>
                  <li className="active"><span className="fas fa-angle-double-right mx-2"></span>Civil Works</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= MAIN ================= */}
      <section className="civil-service-page">
        <div className="container">
          <div className="civil-service-layout">

            {/* SIDEBAR */}
            <aside className="civil-sidebar">
              <h3>Other Services</h3>
              {services.filter(s => s.link !== location.pathname).map((service, idx) => (
                <Link
                  key={idx}
                  to={service.link}
                  className="civil-side-card"
                  style={{ animationDelay: `${0.3 + idx * 0.2}s` }}
                >
                  <img src={service.image} alt={service.title} />
                  <div className="card-content">
                    <h4>{service.title}</h4>
                    <p className="subtitle">{service.subtitle}</p>
                  </div>
                </Link>
              ))}
            </aside>

            {/* CONTENT */}
            <div className="civil-content">
              <h2>Comprehensive Civil Construction</h2>
              <p>
                Fleck Group provides complete civil construction services across
                commercial, industrial, and infrastructure projects. We combine
                engineering expertise with modern equipment to deliver durable,
                compliant, and high-quality outcomes.
              </p>

              <h3>Core Services</h3>
              <ul>
                <li>Road construction & upgrades</li>
                <li>Drainage & stormwater systems</li>
                <li>Subdivision development</li>
                <li>Utility trenching</li>
              </ul>

              <h3>Why Choose Us</h3>
              <ul>
                <li>Experienced project management</li>
                <li>Modern fleet & GPS technology</li>
                <li>Strict safety compliance</li>
                <li>On-time delivery</li>
              </ul>
            </div>
          </div>

          {/* ================= RESULTS ================= */}
          <section className="civil-results-section">
            <div className="container text-center">
              <h2>Real Results in Action</h2>
              <p>See our civil projects transform sites with precision, efficiency, and expert execution.</p>
              <div className="civil-results-cards">
                <div className="civil-results-card"><img src={civilImg} alt="Project 1"/><h4>Commercial Infrastructure</h4><p>Road construction and drainage systems for commercial site.</p></div>
                <div className="civil-results-card"><img src={haulageImg} alt="Project 2"/><h4>Industrial Site Development</h4><p>Site leveling and trenching for industrial development.</p></div>
                <div className="civil-results-card"><img src={earthmovingImg} alt="Project 3"/><h4>Subdivision Development</h4><p>Precision grading and road preparation for residential subdivision.</p></div>
              </div>
            </div>
          </section>

          {/* ================= CTA ================= */}
          <section className="civil-cta-section">
            <div className="container text-center">
              <h2>Start Your Civil Project Today</h2>
              <p>Fleck Group provides professional civil construction solutions for projects of any scale.</p>
              <Link to="/contact" className="cta-btn">Contact Fleck Group Today →</Link>
            </div>
          </section>
        </div>
      </section>
      <section className="fleck-brands-inline py-4" data-aos="fade-up">
        <div className="container text-center">
          <div className="fleck-brands-inline__row">
            <a href="/fleck-earthmoving">
              <img src={logo1} alt="Fleck Earthmoving" />
            </a>
            <a href="/fleck-planthire">
              <img src={logo2} alt="Fleck Plant Hire" />
            </a>
            <a href="/nextGen-earthworks">
              <img src={logo3} alt="NextGen Earthworks" />
            </a>
            <a href="/nsw-plant-haulage">
              <img src={logo4} alt="NSW Plant Haulage" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Civil;
