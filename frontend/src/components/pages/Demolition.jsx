import React from "react";
import { Link } from "react-router-dom";

import heroImg from "../../assets/images/demolition.jpeg";
import earthmovingImg from "../../assets/images/earthmoving.jpg";
import civilImg from "../../assets/images/civil.jpeg";
import demolitionImg from "../../assets/images/demolition.jpeg";
import haulageImg from "../../assets/images/haulage.jpg";
import transportationImg from "../../assets/images/transport.jpg";
import plantHireImg from "../../assets/images/plantHire.jpg";

import "../../assets/css/Demolition.scss"

const services = [
  {
    title: "Earthmoving",
    subtitle: "Bulk excavation and expert earthworks solutions.",
    image: earthmovingImg,
    link: "/services/earthmoving",
  },
  {
    title: "Civil Works",
    subtitle: "Reliable infrastructure and site development services.",
    image: civilImg,
    link: "/services/civil",
  },
  {
    title: "Demolition",
    subtitle: "Safe, controlled, and precision demolition services.",
    image: demolitionImg,
    link: "/services/demolition",
    active: true,
  },
  {
    title: "Haulage",
    subtitle: "Efficient material transport for projects of any scale.",
    image: haulageImg,
    link: "/services/haulage",
  },
  {
    title: "Transportation",
    subtitle: "Dependable transport solutions backed by a modern fleet.",
    image: transportationImg,
    link: "/services/transportation",
  },
  {
    title: "Plant Hire",
    subtitle: "High-performance machinery with experienced operators.",
    image: plantHireImg,
    link: "/services/plant-hire",
  },
];

const Demolition = () => {
  return (
    <>
      {/* HERO */}
      <section
        className="service-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <h1>Demolition</h1>
          <p>Trusted. Safe. Precise.</p>
        </div>
      </section>

      {/* MAIN */}
      <section className="service-page">
        <div className="container">
          <div className="service-layout">

            {/* SIDEBAR */}
            <aside className="services-sidebar">
              <h3>Our Services</h3>

              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service-card ${
                    service.active ? "active" : ""
                  }`}
                >
                  <img src={service.image} alt={service.title} />

                  <div className="card-content">
                    <h4>{service.title}</h4>
                    <p className="subtitle">{service.subtitle}</p>

                    <Link to={service.link} className="learn-btn">
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </aside>

            {/* CONTENT */}
            <div className="service-content">

              <h2>Professional Demolition Contractors</h2>
              <p>
                Fleck Group delivers safe, efficient, and highly controlled
                demolition services across residential, commercial, and
                industrial sectors. Using advanced equipment and proven
                methodologies, we ensure every structure is removed with
                precision while minimising disruption to surrounding areas.
              </p>

              <h3>Safety Is Our Priority</h3>

              <p>
                Demolition requires careful planning and strict compliance.
                Our specialists conduct thorough site inspections, identify
                potential risks, and implement industry-approved safety
                procedures before any work begins.
              </p>

              <h3>Our Capabilities</h3>

              <ul>
                <li>Residential demolition</li>
                <li>Commercial structures</li>
                <li>Industrial facilities</li>
                <li>Concrete removal</li>
                <li>Complete site clearing</li>
              </ul>

              <h3>Why Choose Fleck Group?</h3>

              <ul>
                <li>Experienced and highly skilled operators</li>
                <li>Modern fleet and advanced machinery</li>
                <li>Fully licensed and insured</li>
                <li>Reliable, on-schedule project delivery</li>
                <li>Commitment to safety and quality</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <section className="cta-bar">
      <div className="container">
        <p>Need expert demolition services? Get a free quote today!</p>
        <Link to="/contact" className="cta-btn">
          Request a Quote
        </Link>
      </div>
</section>
    </>
  );
};

export default Demolition;
