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

import "../../assets/css/Demolition.scss";

const services = [
  { title: "Earthmoving", subtitle: "Bulk excavation and expert earthworks solutions.", image: earthmovingImg, link: "/services/earthmoving" },
  { title: "Civil Works", subtitle: "Reliable infrastructure and site development services.", image: civilImg, link: "/services/civil" },
  { title: "Demolition", subtitle: "Safe, controlled, and precision demolition services.", image: demolitionImg, link: "/services/demolition" },
  { title: "Haulage", subtitle: "Efficient material transport for projects of any scale.", image: haulageImg, link: "/services/haulage" },
  { title: "Plant Hire", subtitle: "High-performance machinery with experienced operators.", image: plantHireImg, link: "/services/plant-hire" },
  { title: "Transportation", subtitle: "Dependable transport solutions backed by a modern fleet.", image: transportationImg, link: "/services/transportation" },
];

const Demolition = () => {
  const location = useLocation();
  const heroRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);
  
  const galleryImages = [
    earthmovingImg,
    civilImg,
    haulageImg,
    plantHireImg,
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
    const elements = document.querySelectorAll(
      ".demolition-hero-title, .demolition-hero-subtitle, .demolition-side-card, .demolition-content, .demolition-results-card"
    );

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
        className="demolition-hero-banner"
        style={{ backgroundImage: `url(${demolitionImg})` }}
        ref={heroRef}
      >
        <section className="demolition-breadcrumbs">
          <div className="container">
            <div className="demolition-breadcrumbs-inner">
              <div className="demolition-breadcrumbs-left">
                <h2 className="demolition-hero-title">Demolition</h2>
                <p className="demolition-hero-subtitle">
                  Safe, Controlled & Precision Demolition Solutions
                </p>
              </div>
              <div className="demolition-breadcrumbs-right">
                <ul className="demolition-breadcrumbs-path">
                  <li><Link to="/">Home</Link></li>
                  <li className="active"><span className="fas fa-angle-double-right mx-2"></span>Demolition</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= MAIN ================= */}
      <section className="demolition-service-page">
        <div className="container">
          <div className="demolition-service-layout">

            {/* SIDEBAR */}
            <aside className="demolition-sidebar">
              <h3>Other Services</h3>
              {services.filter(s => s.link !== location.pathname).map((service, idx) => (
                <Link
                  key={idx}
                  to={service.link}
                  className="demolition-side-card"
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
            <div className="demolition-content">
              <h2>Comprehensive Demolition Services</h2>
              <p>
                Fleck Group provides safe, efficient, and environmentally responsible demolition solutions for commercial, industrial, and residential sites. Our expert team minimizes disruption while maximizing safety and precision.
              </p>

              <h3>Core Services</h3>
              <ul>
                <li><strong>Controlled Building Demolition</strong> – Safe and precise demolition for commercial and residential structures.</li>
                <li><strong>Industrial Site Dismantling</strong> – Expert removal of machinery, structures, and industrial facilities.</li>
                <li><strong>Concrete & Structural Removal</strong> – Efficient extraction of concrete, steel, and structural elements.l</li>
                <li><strong>Debris Removal & Site Clearance</strong> – Complete cleanup for ready-to-build, safe sites.</li>
              </ul>

              <h3>Why Choose Us</h3>
              <ul>
                <li><strong>Experienced Demolition Specialists</strong> – Skilled teams handling every project with precision and expertise.</li>
                <li><strong>Strict Safety & Environmental Compliance</strong> – Commitment to protecting people and the planet.e</li>
                <li><strong>Modern Equipment & Machinery</strong> – Advanced tools ensure efficiency, accuracy, and minimal disruption.</li>
                <li><strong>On-Time, Budget-Friendly Execution</strong> – Projects delivered safely, on schedule, and within budget.</li>
              </ul>
            </div>
          </div>

          {/* ================= RESULTS ================= */}
          <section className="demolition-results-section">
            <div className="container text-center">
              <h2>Demolition Projects in Action</h2>
              <p>See our demolition projects executed with precision, safety, and efficiency.</p>
              <div className="demolition-results-cards">
                <div className="demolition-results-card">
                  <img src={demolitionImg} alt="Project 1"/>
                  <h4>Commercial Demolition</h4>
                  <p>Safe removal of commercial structures with minimal disruption.</p>
                </div>
                <div className="demolition-results-card">
                  <img src={haulageImg} alt="Project 2"/>
                  <h4>Industrial Site Clearance</h4>
                  <p>Efficient dismantling and debris removal from industrial sites.</p>
                </div>
                <div className="demolition-results-card">
                  <img src={earthmovingImg} alt="Project 3"/>
                  <h4>Residential Demolition</h4>
                  <p>Controlled demolition of homes and residential buildings.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ================== GALLERY ======================= */}
<section className="demolition-gallery-section">
  <div className="container text-center">
    <h2>Project Gallery</h2>

    <div className="demolition-carousel">

      {/* Carousel Track */}
      <div
        className="demolition-carousel-track"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {galleryImages.map((img, index) => (
          <div className="demolition-carousel-item" key={index}>
            <img src={img} alt={`Slide ${index + 1}`} onClick={() => setSelectedImage(img)} />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        className="demolition-carousel-btn prev"
        onClick={() =>
          setCurrentSlide(
            currentSlide === 0 ? galleryImages.length - 1 : currentSlide - 1
          )
        }
      >
        ‹
      </button>
      <button
        className="demolition-carousel-btn next"
        onClick={() =>
          setCurrentSlide(
            currentSlide === galleryImages.length - 1 ? 0 : currentSlide + 1
          )
        }
      >
        ›
      </button>

      {/* Dots */}
      <div className="demolition-carousel-dots">
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
    <div className="demolition-modal" onClick={() => setSelectedImage(null)}>
      <img src={selectedImage} alt="Enlarged Project" />
    </div>
  )}
</section>


          {/* ================= FAQ (ACCORDION) ================= */}
<section className="demolition-faq-section">
  <div className="container">
    <h2 className="text-center">Frequently Asked Questions</h2>

    {[
      {
        question: "What types of demolition projects do you handle?",
        answer:
          "We handle residential, commercial, and industrial demolition including interior stripping, partial demolitions, and complete building removal.",
      },
      {
        question: "Do you handle hazardous materials?",
        answer:
          "Yes, we are certified to safely manage hazardous materials like asbestos, lead paint, and other environmental risks during demolition.",
      },
      {
        question: "Do you recycle debris?",
        answer:
          "Absolutely. We ensure all recyclable materials are sorted and disposed of responsibly to minimize environmental impact.",
      },
      {
        question: "Do you provide site cleanup after demolition?",
        answer:
          "Yes, our team ensures that every project site is thoroughly cleaned and cleared of debris, leaving it ready for future use or construction.",
      },
      {
        question: "Are your demolition projects insured?",
        answer:
          "Yes, all our projects are fully insured to protect against any accidents or damages during the demolition process.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className={`demolition-faq-item ${activeIndex === index ? "active" : ""}`}
      >
        <button
          className="demolition-faq-question"
          onClick={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
        >
          {item.question}
          <span className="icon">{activeIndex === index ? "−" : "+"}</span>
        </button>

        <div className="demolition-faq-answer">
          <p>{item.answer}</p>
        </div>
      </div>
    ))}
  </div>
</section>

          {/* ================= CTA ================= */}
          <section className="demolition-cta-section">
            <div className="container text-center">
              <h2>Start Your Demolition Project Today</h2>
              <p>Fleck Group provides professional demolition solutions tailored to your project needs.</p>
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

export default Demolition;