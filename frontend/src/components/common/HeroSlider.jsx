import React, { useEffect, useRef, useState } from "react";
import "../../assets/css/HeroSlider.scss";

import civil from "../../assets/images/civil-dozer.jpg";
import haulage from "../../assets/images/haulage-smalldigger.jpg";
import demolition from "../../assets/images/demolition.jpeg";
import earthmoving from "../../assets/images/earthmoving.jpg";
import transport from "../../assets/images/transport.jpg";
import planthire from "../../assets/images/plantHire.jpg";

const slides = [
  {
    title: "Who We Are",
    category: "About Our Company",
    image: civil,
    description:
      "We are a trusted construction and engineering company committed to delivering high-quality infrastructure solutions with integrity, innovation, and excellence.",
  },
  {
    title: "Our Experience",
    category: "Years of Proven Expertise",
    image: haulage,
    description:
      "With years of hands-on industry experience, we have successfully completed projects across civil works, transport, demolition, and heavy equipment operations.",
  },
  {
    title: "Our Commitment",
    category: "Safety & Reliability",
    image: demolition,
    description:
      "Safety, professionalism, and precision guide every project we undertake. We follow strict industry standards to ensure dependable and secure operations.",
  },
  {
    title: "Our Capability",
    category: "Modern Equipment & Skilled Team",
    image: earthmoving,
    description:
      "Our skilled workforce and advanced machinery allow us to execute projects efficiently, on schedule, and within budget.",
  },
  {
    title: "Our Vision",
    category: "Building the Future",
    image: transport,
    description:
      "We aim to become a leading infrastructure partner by delivering sustainable, innovative, and impactful construction solutions.",
  },
  {
    title: "Our Values",
    category: "Integrity • Quality • Excellence",
    image: planthire,
    description:
      "We operate with transparency, prioritize quality workmanship, and strive for excellence in every partnership and project we undertake.",
  },
];


const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev - 1 < 0 ? slides.length - 1 : prev - 1
    );
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    resetAutoSlide();
  }, [activeIndex]);

  return (
    <div className="slider-hero">
      <div className="list-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`list-item ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <img src={slide.image} alt={slide.title} />
            <div className="content">
              <p>{slide.category}</p>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="arrows-btn">
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
      </div>

      {/* Thumbnails */}
      <div className="thumbnail">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`item-thumbnail ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={slide.image} alt={slide.title} />
            <div className="content-thumbnail">
              {slide.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
