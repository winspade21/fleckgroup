import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import plantHireImg from "../../assets/images/plantHire.jpg";
import earthmovingImg from "../../assets/images/earthmoving.jpg";
import civilImg from "../../assets/images/civil.jpeg";
import demolitionImg from "../../assets/images/demolition.jpeg";
import haulageImg from "../../assets/images/haulage.jpg";
import transportationImg from "../../assets/images/transport.jpg";

import logo1 from '../../assets/images/logo5.png';
import logo2 from '../../assets/images/logo4.png';
import logo3 from '../../assets/images/logo3.png';
import logo4 from '../../assets/images/logo2.png';

import "../../assets/css/PlantHire.scss";

const services = [
  { title: "Earthmoving", subtitle: "Bulk excavation and expert earthworks solutions.", image: earthmovingImg, link: "/services/earthmoving" },
  { title: "Civil Works", subtitle: "Reliable infrastructure and site development services.", image: civilImg, link: "/services/civil" },
  { title: "Demolition", subtitle: "Safe, controlled, and precision demolition services.", image: demolitionImg, link: "/services/demolition" },
  { title: "Haulage", subtitle: "Efficient material transport for projects of any scale.", image: haulageImg, link: "/services/haulage" },
  { title: "Transportation", subtitle: "Dependable transport solutions backed by a modern fleet.", image: transportationImg, link: "/services/transportation" },
  { title: "Plant Hire", subtitle: "High-performance machinery with experienced operators.", image: plantHireImg, link: "/services/plant-hire" },
];

const PlantHire = () => {
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
    const elements = document.querySelectorAll(".planthire-hero-title, .planthire-hero-subtitle, .planthire-side-card, .planthire-content, .planthire-results-card");

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
        className="planthire-hero-banner"
        style={{ backgroundImage: `url(${plantHireImg})` }}
        ref={heroRef}
      >
        <section className="planthire-breadcrumbs">
          <div className="container">
            <div className="planthire-breadcrumbs-inner">
              <div className="planthire-breadcrumbs-left">
                <h2 className="planthire-hero-title">Plant Hire</h2>
                <p className="planthire-hero-subtitle">
                  High-Performance Machinery & Experienced Operators
                </p>
              </div>
              <div className="planthire-breadcrumbs-right">
                <ul className="planthire-breadcrumbs-path">
                  <li><Link to="/">Home</Link></li>
                  <li className="active"><span className="fas fa-angle-double-right mx-2"></span>Plant Hire</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= MAIN ================= */}
      <section className="planthire-service-page">
        <div className="container">
          <div className="planthire-service-layout">

            {/* SIDEBAR */}
            <aside className="planthire-sidebar">
              <h3>Other Services</h3>
              {services.filter(s => s.link !== location.pathname).map((service, idx) => (
                <Link
                  key={idx}
                  to={service.link}
                  className="planthire-side-card"
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
            <div className="planthire-content">
              <h2>Comprehensive Plant Hire Services</h2>
              <p>
                Fleck Group delivers expert plant hire solutions for commercial, industrial, and infrastructure projects. Our modern, dependable fleet is operated by skilled professionals, ensuring projects run efficiently and safely.
              </p>

              <h3>Core Offerings</h3>
              <ul>
                <li><strong>Excavators, Loaders & Bulldozers</strong> – Powerful machines for digging, lifting, and moving materials efficiently.</li>
                <li><strong>Cranes & Lifting Equipment</strong> – Reliable solutions for safe and precise heavy lifting.</li>
                <li><strong>Earthmoving & Grading Machines</strong> – Advanced equipment for site preparation and land leveling.</li>
                <li><strong>Trucks & Transport Support</strong> – Dependable logistics to keep your project moving smoothly.</li>
              </ul>

              <h3>Why Choose Us</h3>
              <ul>
                <li><strong>Well-Maintained Modern Machinery</strong> – Our fleet is up-to-date, reliable, and ready for any project.</li>
                <li><strong>Experienced & Certified Operators</strong> – Skilled professionals ensure efficient, safe operations.</li>
                <li><strong>Safety-Focused Operations</strong> – We prioritize safety at every stage of your project.</li>
                <li><strong>Flexible Hire Options</strong> – Tailored solutions to suit projects of any size or scope.</li>
              </ul>
            </div>
          </div>

          {/* ================= RESULTS ================= */}
          <section className="planthire-results-section">
            <div className="container text-center">
              <h2>Our Plant Hire in Action</h2>
              <p>Delivering precision and efficiency on every project with our fleet.</p>
              <div className="planthire-results-cards">
                <div className="planthire-results-card"><img src={plantHireImg} alt="Project 1"/><h4>Construction Support</h4><p>Heavy machinery deployed for commercial construction.</p></div>
                <div className="planthire-results-card"><img src={haulageImg} alt="Project 2"/><h4>Earthworks Assistance</h4><p>Loaders and excavators assisting industrial development.</p></div>
                <div className="planthire-results-card"><img src={earthmovingImg} alt="Project 3"/><h4>Subdivision Development</h4><p>Plant hire supporting grading and road preparation.</p></div>
              </div>
            </div>
          </section>

          {/* ================== PLANT HIRE GALLERY ======================= */}
          <section className="planthire-gallery-section">
            <div className="container text-center">
              <h2>Our Plant Hire Fleet</h2>

              <div className="planthire-carousel">

                {/* Carousel Track */}
                <div
                  className="planthire-carousel-track"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {galleryImages.map((img, index) => (
                    <div className="planthire-carousel-item" key={index}>
                      <img src={img} alt={`Plant Hire ${index + 1}`} onClick={() => setSelectedImage(img)} />
                    </div>
                  ))}
                </div>

                {/* Arrows */}
                <button
                  className="planthire-carousel-btn prev"
                  onClick={() =>
                    setCurrentSlide(
                      currentSlide === 0 ? galleryImages.length - 1 : currentSlide - 1
                    )
                  }
                >
                  ‹
                </button>
                <button
                  className="planthire-carousel-btn next"
                  onClick={() =>
                    setCurrentSlide(
                      currentSlide === galleryImages.length - 1 ? 0 : currentSlide + 1
                    )
                  }
                >
                  ›
                </button>

                {/* Dots */}
                <div className="planthire-carousel-dots">
                  {galleryImages.map((_, idx) => (
                    <span
                      key={idx}
                      className={currentSlide === idx ? "active" : ""}
                      onClick={() => setCurrentSlide(idx)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal */}
            {selectedImage && (
              <div className="planthire-modal" onClick={() => setSelectedImage(null)}>
                <img src={selectedImage} alt="Enlarged Plant Hire" />
              </div>
            )}
          </section>

          {/* ================== PLANT HIRE FAQ ======================= */}
              <section className="planthire-faq-section">
                <div className="container">
                  <h2 className="text-center">Frequently Asked Questions</h2>

                  {[
                    {
                      question: "What plant machinery do you offer for hire?",
                      answer:
                        "We provide a wide range of plant machinery for hire including excavators, loaders, bulldozers, dumpers, and mini diggers.",
                    },
                    {
                      question: "Do you provide operators with the plant hire?",
                      answer:
                        "Yes, we offer both self-drive hire and operator-assisted hire depending on your project needs.",
                    },
                    {
                      question: "Is the machinery maintained and insured?",
                      answer:
                        "Absolutely. All equipment is fully maintained, safety-checked, and insured for reliable operation on site.",
                    },
                    {
                      question: "Can you deliver plant machinery to my site?",
                      answer:
                        "Yes, we deliver machinery directly to your site, ensuring timely setup and removal after your project is complete.",
                    },
                    {
                      question: "Do you offer short-term and long-term hire?",
                      answer:
                        "Yes, we provide flexible hire periods from a single day to several months to suit your project requirements.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`planthire-faq-item ${activeIndex === index ? "active" : ""}`}
                    >
                      <button
                        className="planthire-faq-question"
                        onClick={() =>
                          setActiveIndex(activeIndex === index ? null : index)
                        }
                      >
                        {item.question}
                        <span className="icon">{activeIndex === index ? "−" : "+"}</span>
                      </button>

                      <div className="planthire-faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

          {/* ================= CTA ================= */}
          <section className="planthire-cta-section">
            <div className="container text-center">
              <h2>Start Your Project with Our Plant Hire</h2>
              <p>Fleck Group delivers safe, reliable, and flexible plant hire solutions.</p>
              <Link to="/contact" className="cta-btn">Contact Fleck Group Today →</Link>
            </div>
          </section>
        </div>
      </section>

      {/* ================= BRANDS ================= */}
   
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

export default PlantHire;