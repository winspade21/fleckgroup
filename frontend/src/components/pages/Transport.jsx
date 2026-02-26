import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import earthmovingImg from "../../assets/images/earthmoving.jpg";
import civilImg from "../../assets/images/civil-dozer.jpg";
import demolitionImg from "../../assets/images/demolition.jpeg";
import haulageImg from "../../assets/images/haulage-smalldigger.jpg";
import transportationImg from "../../assets/images/transport.jpg";
import plantHireImg from "../../assets/images/plantHire.jpg";

import logo1 from '../../assets/images/logo5.png';
import logo2 from '../../assets/images/logo4.png';
import logo3 from '../../assets/images/logo3.png';
import logo4 from '../../assets/images/logo2.png';

import "../../assets/css/Transport.scss";

const services = [
  { title: "Earthmoving", subtitle: "Bulk excavation and expert earthworks solutions.", image: earthmovingImg, link: "/services/earthmoving" },
  { title: "Civil Works", subtitle: "Reliable infrastructure and site development services.", image: civilImg, link: "/services/civil" },
  { title: "Demolition", subtitle: "Safe, controlled, and precision demolition services.", image: demolitionImg, link: "/services/demolition" },
  { title: "Haulage", subtitle: "Efficient material transport for projects of any scale.", image: haulageImg, link: "/services/haulage" },
  { title: "Transportation", subtitle: "Dependable transport solutions backed by a modern fleet.", image: transportationImg, link: "/services/transportation" },
  { title: "Plant Hire", subtitle: "High-performance machinery with experienced operators.", image: plantHireImg, link: "/services/plant-hire" },
];

const Transport = () => {
  const location = useLocation();
  const heroRef = useRef(null);


  const [activeIndex, setActiveIndex] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const galleryImages = [
        civilImg,
        earthmovingImg,
        demolitionImg,
        haulageImg,
      ];

  // ✅ SWIPE FUNCTIONS MUST BE HERE (INSIDE COMPONENT)
    
      const handleTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
      };
    
      const handleTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
      };
    
      const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
    
        const distance = touchStartX.current - touchEndX.current;
    
        if (distance > 50) {
          setCurrentSlide(prev =>
            prev === galleryImages.length - 1 ? 0 : prev + 1
          );
        } else if (distance < -50) {
          setCurrentSlide(prev =>
            prev === 0 ? galleryImages.length - 1 : prev - 1
          );
        }
    
        touchStartX.current = null;
        touchEndX.current = null;
      };

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
    const elements = document.querySelectorAll(".transport-hero-title, .transport-hero-subtitle, .transport-side-card, .transport-content, .transport-results-card");

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
        className="transport-hero-banner"
        style={{ backgroundImage: `url(${transportationImg})` }}
        ref={heroRef}
      >
        <section className="transport-breadcrumbs">
          <div className="container">
            <div className="transport-breadcrumbs-inner">
              <div className="transport-breadcrumbs-left">
                <h2 className="transport-hero-title">Transportation</h2>
                <p className="transport-hero-subtitle">
                  Dependable Transport Solutions for Projects of Any Scale
                </p>
              </div>
              <div className="transport-breadcrumbs-right">
                <ul className="transport-breadcrumbs-path">
                  <li><Link to="/">Home</Link></li>
                  <li className="active"><span className="fas fa-angle-double-right mx-2"></span>Transportation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= MAIN ================= */}
      <section className="transport-service-page">
        <div className="container">
          <div className="transport-service-layout">

            {/* SIDEBAR */}
            <aside className="transport-sidebar">
              <h3>Other Services</h3>
              {services.filter(s => s.link !== location.pathname).map((service, idx) => (
                <Link
                  key={idx}
                  to={service.link}
                  className="transport-side-card"
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
            <div className="transport-content">
              <h2>Professional Transport Solutions</h2>
              <p>
                Fleck Group provides efficient, reliable transportation services
                for construction projects, ensuring timely delivery and safe
                handling of materials using a modern fleet.
              </p>

              <h3>Core Services</h3>
              <ul>
                <li>Project material haulage</li>
                <li>Equipment transport</li>
                <li>Fleet management</li>
                <li>Logistics coordination</li>
              </ul>

              <h3>Why Choose Us</h3>
              <ul>
                <li>Modern transport fleet</li>
                <li>Experienced drivers and operators</li>
                <li>On-time delivery guarantee</li>
                <li>High safety and compliance standards</li>
              </ul>
            </div>
          </div>

          {/* ================= RESULTS ================= */}
          <section className="transport-results-section">
            <div className="container text-center">
              <h2>Transport Projects in Action</h2>
              <p>Reliable delivery, precision handling, and modern logistics solutions.</p>
              <div className="transport-results-cards">
                <div className="transport-results-card"><img src={haulageImg} alt="Project 1"/><h4>Industrial Transport</h4><p>Efficient material transport for industrial projects.</p></div>
                <div className="transport-results-card"><img src={transportationImg} alt="Project 2"/><h4>Project Delivery</h4><p>On-time delivery of construction materials and equipment.</p></div>
                <div className="transport-results-card"><img src={plantHireImg} alt="Project 3"/><h4>Fleet Operations</h4><p>Coordinated fleet management for multiple project sites.</p></div>
              </div>
            </div>
          </section>


{/* ================== TRANSPORT GALLERY ======================= */}
<section className="transport-gallery-section">
  <div className="container text-center">
    <h2>Heavy Equipment Transport Gallery</h2>

    <div className="transport-carousel">
      <div
        className="transport-carousel-track"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {galleryImages.map((img, index) => (
          <div className="transport-carousel-item" key={index}>
            <img src={img} alt={`Transport Slide ${index + 1}`} onClick={() => setSelectedImage(img)} />
          </div>
        ))}
      </div>

      <button className="transport-carousel-btn prev" onClick={() => setCurrentSlide(currentSlide === 0 ? galleryImages.length - 1 : currentSlide - 1)}>‹</button>
      <button className="transport-carousel-btn next" onClick={() => setCurrentSlide(currentSlide === galleryImages.length - 1 ? 0 : currentSlide + 1)}>›</button>

      <div className="transport-carousel-dots">
        {galleryImages.map((_, idx) => (
          <span key={idx} className={currentSlide === idx ? "active" : ""} onClick={() => setCurrentSlide(idx)}></span>
        ))}
      </div>
    </div>
  </div>

  {selectedImage && (
    <div className="transport-modal" onClick={() => setSelectedImage(null)}>
      <img src={selectedImage} alt="Enlarged Transport Project" />
    </div>
  )}
</section>

{/* ================== TRANSPORT FAQ ======================= */}
<section className="transport-faq-section">
  <div className="container">
    <h2 className="text-center">Heavy Equipment Transport FAQs</h2>

    {[
      { question: "What equipment do you transport?", answer: "Excavators, bulldozers, loaders, cranes, and other heavy machinery safely and efficiently." },
      { question: "Do you provide specialized trailers?", answer: "Yes, we use low-bed, extendable, and multi-axle trailers for oversized machinery." },
      { question: "Is the transport insured?", answer: "All transported equipment is fully insured for complete protection during transit." },
      { question: "How do you ensure equipment safety?", answer: "Certified tie-downs, experienced drivers, and strict handling protocols are followed." },
      { question: "Do you offer urgent and long-distance transport?", answer: "Yes, we provide flexible scheduling for urgent and long-haul deliveries nationwide." },
    ].map((item, index) => (
      <div key={index} className={`transport-faq-item ${activeIndex === index ? "active" : ""}`}>
        <button className="transport-faq-question" onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
          {item.question}
          <span className="icon">{activeIndex === index ? "−" : "+"}</span>
        </button>
        <div className="transport-faq-answer"><p>{item.answer}</p></div>
      </div>
    ))}
  </div>
</section>

          {/* ================= CTA ================= */}
          <section className="transport-cta-section">
            <div className="container text-center">
              <h2>Start Your Transport Project Today</h2>
              <p>Fleck Group delivers professional transport solutions with a modern fleet and expert operators.</p>
              <Link to="/contact" className="cta-btn">Contact Fleck Group Today →</Link>
            </div>
          </section>
        </div>
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

export default Transport;