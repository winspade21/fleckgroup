import React, { useEffect } from 'react';
import { assets } from '../../assets/images/assets.js';
import { Link, useLocation } from 'react-router-dom';
import "../../assets/css/Service.scss";

const Services = () => {
  const location = useLocation();

  // Scroll to hash on page load or route change
  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        requestAnimationFrame(() => {
          const yOffset = -80; // offset for fixed header
          const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const servicesData = [
    {
      id: "demolition",
      title: "Demolition",
      icon: "fas fa-hammer",
      image: assets.demolition,
      content: [
        "We provide safe and compliant demolition for residential and commercial projects—executed with precision and care.",
        "Our licensed team ensures minimal disruption and complete site clearance."
      ],
      link: "/services/demolition"
    },
    {
      id: "earthmoving",
      title: "Earthmoving",
      icon: "fas fa-mountain",
      image: assets.earthmoving,
      content: [
        "We shape terrain to match your project’s exact specifications—handling cuts, fills, and grading with efficiency.",
        "Our fleet and operators are equipped for all scales of excavation."
      ],
      link: "/services/earthmoving"
    },
    {
      id: "transport",
      title: "Transport",
      icon: "fas fa-truck-moving",
      image: assets.transportImg,
      content: [
        "We deliver reliable haulage and transport solutions across varied terrains.",
        "From aggregate to equipment, your materials arrive securely and on time."
      ],
      link: "/services/transport"
    },
    {
      id: "haulage",
      title: "Haulage",
      icon: "fas fa-dolly",
      image: assets.haulage,
      content: [
        "From heavy loads to bulk material, we offer dependable haulage for every job.",
        "Our team ensures secure transport logistics that align with your deadlines."
      ],
      link: "/services/haulage"
    },
    {
      id: "plant-hire",
      title: "Plant Hire",
      icon: "fas fa-tractor",
      image: assets.plantHire,
      content: [
        "Hire modern, well-maintained machinery operated by experienced professionals.",
        "Flexible terms and reliable support ensure productivity on your site."
      ],
      link: "/services/plant-hire"
    },
    {
      id: "civil",
      title: "Civil Works",
      icon: "fas fa-road",
      image: assets.civil,
      content: [
        "We handle road preparation, drainage, and trenching with expert precision.",
        "Our civil capabilities ensure your infrastructure meets both code and durability standards."
      ],
      link: "/services/civil"
    }
  ];

  return (
    <>
      {/* Inner Banner / Breadcrumb */}
      <div className="inner-banner py-5">
        <section className="w3l-breadcrumb py-sm-5">
          <div className="container">
            <div className="w3breadcrumb-gids">
              <div className="w3breadcrumb-left">
                <h2 className="inner-w3-title mt-sm-5 mt-4">Our Services</h2>
              </div>
              <div className="w3breadcrumb-right">
                <ul className="breadcrumbs-custom-path">
                  <li><Link to="/">Home</Link></li>
                  <li className="active">
                    <span className="fas fa-angle-double-right mx-2"></span> Services
                  </li>
                </ul>
              </div>
            </div>
            <p className="inner-page-para">Delivering expert solutions across demolition, earthmoving, transport, haulage, plant hire, and civil works.</p>
          </div>
        </section>       
      </div>

      {/* Services Section */}
      <section className="section-3 bg-light py-5" id="services">
        <div className="container">
          <div className="row gy-4">
            {servicesData.map(service => (
              <div className="col-md-4 col-lg-4" id={service.id} key={service.id}>
                <div className="item">
                  <div className="service-image">
                    <img src={service.image} alt={service.title} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title d-flex align-items-center gap-2">
                      <i className={`${service.icon} service-icon`}></i>
                      <h3 className="mb-0">{service.title}</h3>
                    </div>
                    <div className="service-content">
                      {service.content.map((para, i) => <p key={i}>{para}</p>)}
                    </div>
                    <Link to={service.link} className="btn btn-primary">Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta py-5">
        <div className="container">
          <div className="cta-card">
            <div className="cta-bg">
              <img src={assets.ctaImage} alt="" aria-hidden="true" />
            </div>
            <div className="cta-content text-center">
              <h2>Got a Project in Mind?</h2>
              <p>Speak directly with our experienced team and get clear, honest advice. Free quote. No pressure.</p>
              <Link to="/contact" className="btn-1">Let’s Get Started</Link>
              <small>No obligations • Fast response • Trusted across NSW</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
