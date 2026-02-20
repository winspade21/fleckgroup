import { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import civil from "../../assets/images/civil-dozer.jpg";
import earthmoving from "../../assets/images/earthmoving.jpg";
import haulage from "../../assets/images/haulage-smalldigger.jpg";
import demolition from "../../assets/images/demolition.jpeg";
import transport from "../../assets/images/transport.jpg";
import planthire from "../../assets/images/plantHire.jpg";

import "../../assets/css/ServiceSection.scss";

const ServiceSection = () => {
  const initialServices = [
    {
      id: 1,
      name: "Civil Works",
      image: civil,
      description:
        "Infrastructure development, roadworks, drainage systems, and structural engineering solutions.",
      link: "/services/civil-works",
    },
    {
      id: 2,
      name: "Earthmoving",
      image: earthmoving,
      description:
        "Excavation, grading, trenching, and site preparation using modern heavy equipment.",
      link: "/services/earthmoving",
    },
    {
      id: 3,
      name: "Haulage",
      image: haulage,
      description:
        "Reliable transportation of aggregates, materials, and heavy loads.",
      link: "/services/haulage",
    },
    {
      id: 4,
      name: "Demolition",
      image: demolition,
      description:
        "Safe and controlled demolition for residential and commercial projects.",
      link: "/services/demolition",
    },
    {
      id: 5,
      name: "Transport",
      image: transport,
      description:
        "Efficient logistics and machinery transport solutions.",
      link: "/services/transport",
    },
    {
      id: 6,
      name: "Plant Hire",
      image: planthire,
      description:
        "Flexible equipment hire for short and long-term projects.",
      link: "/services/plant-hire",
    },
  ];

  const [services, setServices] = useState(initialServices);
  const sliderRef = useRef(null);

  const handleNext = () => {
    setServices((prev) => [...prev.slice(1), prev[0]]);
  };

  const handlePrev = () => {
    setServices((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  const handleCardClick = (index) => {
    if (window.innerWidth <= 992) {
      const rotated = [...services];
      while (rotated[1].id !== services[index].id) {
        rotated.push(rotated.shift());
      }
      setServices(rotated);

      if (sliderRef.current) {
        sliderRef.current.children[1].scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  };

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Delivering quality construction and engineering solutions.</p>
        </div>

        <div className="service-slider" ref={sliderRef}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-item position-${index} ${
                index === 1 ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${service.image})` }}
              onClick={() => handleCardClick(index)}
            >
              <div className="service-content">
                <h3>{service.name}</h3>
                <p>{service.description}</p>

                <Link
                  to={service.link}
                  className="service-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  See More
                  <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-buttons">
          <button onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <button onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;