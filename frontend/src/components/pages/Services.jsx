import React, { useEffect } from "react";
import { assets } from "../../assets/images/assets.js";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/css/Service.scss";

import logo1 from '../../assets/images/logo5.png';
import logo2 from '../../assets/images/logo4.png';
import logo3 from '../../assets/images/logo3.png';
import logo4 from '../../assets/images/logo2.png';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      mirror: false,
      easing: "ease-out-cubic",
      offset: 120,
    });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        const yOffset = -100;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const servicesData = [
    { id: "excavation", title: "Excavation & Grading", image: assets.earthmoving, content: "Precision excavation and grading tailored to your project.", link: "/services/excavation-grading" },
    { id: "heavy-haulage", title: "Heavy Haulage", image: assets.haulage, content: "Specialized heavy haulage for machinery and large loads.", link: "/services/heavy-haulage" },
    { id: "tipper-transport", title: "Tipper Transport", image: assets.transportImg, content: "Reliable tipper truck services for construction materials.", link: "/services/tipper-transport" },
    { id: "plant-hire", title: "Plant & Equipment Hire", image: assets.plantHire, content: "Modern machinery with flexible hire options.", link: "/services/plant-hire" },
    { id: "civil-works", title: "Civil Works", image: assets.civil, content: "Drainage, trenching, and infrastructure preparation.", link: "/services/civil-works" },
    { id: "demolition", title: "Demolition Services", image: assets.demolition, content: "Safe, compliant demolition delivered efficiently.", link: "/services/demolition" },
  ];

  return (
    <>
      {/* HERO */}
      <div className="ultra-banner">
        <div className="ultra-overlay"></div>
        <div className="ultra-content" data-aos="fade-down">
          <h1 className="ultra-title">Our Services</h1>
          <p className="ultra-subtitle">
            Delivering precision, reliability, and excellence across every project.
          </p>
          <ul className="ultra-breadcrumbs" data-aos="fade-up" data-aos-delay="200">
            <li><Link to="/">Home</Link></li>
            <li className="active"><span className="fas fa-angle-double-right mx-2"></span> Services</li>
          </ul>
        </div>
      </div>

      {/* SERVICES GRID */}
      <section className="section-services">
        <div className="container">
          <div className="services-grid">
            {servicesData.map((service, idx) => (
              <article key={service.id} className="service-card" data-aos="fade-up" data-aos-delay={idx * 150}>
                <div className="service-img">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="gradient-overlay"></div>
                </div>
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.content}</p>
                  <Link to={service.link} className="btn-service">Explore →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FULL SERVICE BREAKDOWN */}
      <section className="service-breakdown">
        <div className="container">
          {/* Each service row */}
          {servicesData.map((service, idx) => (
            <div key={service.id} className={`breakdown-row ${idx % 2 !== 0 ? "reverse" : ""}`} data-aos="fade-up">
              <div className="breakdown-img">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="breakdown-content">
                <h2>{service.title}</h2>
                <p>{service.content}</p>
                <ul>
                  <li>Professional execution</li>
                  <li>Safety and compliance</li>
                  <li>Modern equipment</li>
                  <li>Flexible solutions</li>
                  <li>Project-specific planning</li>
                </ul>
                <Link to="/contact" className="btn-breakdown">Request Quote</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE PROCESS TIMELINE - CINEMATIC WITH TRUE SLOPED ARROWS */}
<section className="service-process-timeline" data-aos="fade-up">
  <div className="container">
    <h2 className="section-title">Our Service Process</h2>
    <p className="section-subtitle">
      From consultation to completion, we follow a precise workflow to ensure excellence.
    </p>

    <div className="timeline">
      {/* Step 1 */}
      <div className="timeline-step">
        <div className="step-icon"><i className="fas fa-comments"></i></div>
        <div className="step-number">1</div>
        <h3>Consultation</h3>
        <p>We discuss project needs, scope, and goals for clear understanding.</p>
        {/* Sloped arrow */}
        <svg className="timeline-arrow" width="120" height="60">
          <line x1="0" y1="0" x2="120" y2="50" stroke="#ff6600" strokeWidth="4" />
          <polygon points="115,45 120,50 115,55" fill="#ff6600" />
        </svg>
      </div>

      {/* Step 2 */}
      <div className="timeline-step">
        <div className="step-icon"><i className="fas fa-pencil-ruler"></i></div>
        <div className="step-number">2</div>
        <h3>Planning & Design</h3>
        <p>Our team creates a detailed plan tailored to your project.</p>
        <svg className="timeline-arrow" width="120" height="60">
          <line x1="0" y1="0" x2="120" y2="50" stroke="#ff6600" strokeWidth="4" />
          <polygon points="115,45 120,50 115,55" fill="#ff6600" />
        </svg>
      </div>

      {/* Step 3 */}
      <div className="timeline-step">
        <div className="step-icon"><i className="fas fa-cogs"></i></div>
        <div className="step-number">3</div>
        <h3>Execution</h3>
        <p>Skilled operators deploy modern machinery efficiently.</p>
        <svg className="timeline-arrow" width="120" height="60">
          <line x1="0" y1="0" x2="120" y2="50" stroke="#ff6600" strokeWidth="4" />
          <polygon points="115,45 120,50 115,55" fill="#ff6600" />
        </svg>
      </div>

      {/* Step 4 */}
      <div className="timeline-step">
        <div className="step-icon"><i className="fas fa-check-circle"></i></div>
        <div className="step-number">4</div>
        <h3>Completion & Review</h3>
        <p>Final checks and client review ensure total satisfaction.</p>
        {/* No arrow after last step */}
      </div>
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="ultra-cta" data-aos="zoom-in">
        <div className="cta-card">
          <img src={assets.ctaImage} alt="CTA" />
          <div className="cta-content">
            <h2>Got a Big Project?</h2>
            <p>Speak directly with our expert team. Clear advice, no pressure, cinematic results.</p>
            <Link to="/contact" className="btn-cta">Let’s Make It Happen</Link>
          </div>
        </div>
      </section>

      <section className="fleck-brands-inline py-4" data-aos="fade-up">
        <div className="container text-center">
          <div className="fleck-brands-inline__row">
            <a href="/brand1">
              <img src={logo1} alt="Fleck Earthmoving" />
            </a>
            <a href="/brand2">
              <img src={logo2} alt="Fleck Haulage" />
            </a>
            <a href="/brand3">
              <img src={logo3} alt="Fleck Civil" />
            </a>
            <a href="/brand4">
              <img src={logo4} alt="Fleck Plant Hire" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
