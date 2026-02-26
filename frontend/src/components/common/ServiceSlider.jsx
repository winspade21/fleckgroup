import React, { useState } from "react";
import "../../assets/css/ServiceSlider.scss";
import { NavLink } from "react-router-dom";

// Slide data
import { assets } from "../../assets/images/assets.js";

const ServiceSlider = () => {
  const services = [
    {
      id: 1,
      title: "Civil Works",
      img: assets.civil,
      desc: "We provide high-quality civil construction services including roadworks, stormwater drainage, concrete works, and infrastructure development.",
      route: "/services/civil",
    },
    {
      id: 2,
      title: "Earthmoving",
      img: assets.earthmoving,
      desc: "Professional earthmoving services including excavation, grading, trenching, and site preparation with modern equipment.",
      route: "/services/earthmoving",
    },
    {
      id: 3,
      title: "Heavy Haulage",
      img: assets.haulage,
      desc: "Safe, reliable, and efficient heavy haulage solutions for oversized and high-value cargo.",
      route: "/services/haulage",
    },
    {
      id: 4,
      title: "Demolition",
      img: assets.demolition,
      desc: "Controlled and environmentally responsible demolition services with safety compliance.",
      route: "/services/demolition",
    },
    {
      id: 5,
      title: "Plant Hire",
      img: assets.plantHire,
      desc: "Modern plant hire services with expert operators for construction and site preparation.",
      route: "/services/plant-hire",
    },
    {
      id: 6,
      title: "Transport",
      img: assets.transportImg,
      desc: "Reliable local and nationwide transport solutions with real-time tracking.",
      route: "/services/transport",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = services.length;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section className="service-heroSlider">
      {/* Slides */}
      <div className="service-heroList">
        {services.map((item, index) => (
          <div
            key={item.id}
            className={`service-heroItem ${
              index === currentIndex
                ? "active"
                : index < currentIndex
                ? "slide-left"
                : "slide-right"
            }`}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            {/* Overlay */}
            <div className="service-heroOverlay"></div>

            {/* Content */}
            <div className="service-heroContent">
              <div className="service-heroTitle">Our Service</div>
              <div className="service-heroType">{item.title}</div>
              <div className="service-heroDesc">{item.desc}</div>
              <div className="service-heroBtn1">
                <NavLink to={item.route} className="see-more-btn">
                  See More
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div className="service-heroThumbnail">
        {services.map((item, index) => (
          <div
            key={item.id}
            className={`heroThumbnail-item ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${item.img})` }}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="hero-nextPrevArrows">
        <button className="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button className="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default ServiceSlider;