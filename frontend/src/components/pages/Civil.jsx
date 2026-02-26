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

import "../../assets/css/Civil.scss";

const services = [
  { title: "Earthmoving", subtitle: "Bulk excavation and expert earthworks solutions.", image: earthmovingImg, link: "/services/earthmoving" },
  { title: "Civil Works", subtitle: "Reliable infrastructure and site development services.", image: civilImg, link: "/services/civil" },
  { title: "Demolition", subtitle: "Safe, controlled, and precision demolition services.", image: demolitionImg, link: "/services/demolition" },
  { title: "Haulage", subtitle: "Efficient material transport for projects of any scale.", image: haulageImg, link: "/services/haulage" },
  { title: "Plant Hire", subtitle: "High-performance machinery with experienced operators.", image: plantHireImg, link: "/services/plant-hire" },
  { title: "Transportation", subtitle: "Dependable transport solutions backed by a modern fleet.", image: transportationImg, link: "/services/transportation" },
];

const Civil = () => {
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
               Fleck Group delivers comprehensive civil construction services for commercial, industrial, and infrastructure projects, combining engineering expertise and modern equipment to ensure durable, compliant, and high-quality results every time.
              </p>

              <h3>Core Services</h3>
              <ul>
                <li><strong>Road Construction & Upgrades</strong> – Building durable, safe, and efficient roads for all types of projects.</li>
                <li><strong>Drainage & Stormwater Systems</strong> – Designing and installing reliable systems to manage water effectively.</li>
                <li><strong>Subdivision Development</strong> – Complete civil works for residential and commercial subdivisions from start to finish.</li>
                <li><strong>Utility Trenching</strong>– Precision trenching for utilities, ensuring compliance and minimal disruption.</li>
              </ul>

              <h3>Why Choose Us</h3>
              <ul>
                <li><strong>Experienced Project Management</strong> – Skilled teams delivering projects efficiently and professionally.</li>
                <li><strong>Modern Fleet & GPS Technology</strong> – Cutting-edge equipment ensures precision and reliability.</li>
                <li><strong>Strict Safety Compliance</strong> – Commitment to the highest safety standards on every site.</li>
                <li><strong>On-Time Delivery</strong> – Projects completed on schedule without compromising quality.</li>
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

          {/* ================== GALLERY ======================= */}
<section className="civil-gallery-section">
  <div className="container text-center">
    <h2>Project Gallery</h2>

    <div className="civil-carousel">

      <div
        className="civil-carousel-track"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {galleryImages.map((img, index) => (
          <div className="civil-carousel-item" key={index}>
            <img src={img} alt={`Slide ${index + 1}`} onClick={() => setSelectedImage(img)} />
          </div>
        ))}
      </div>

      <button
        className="civil-carousel-btn prev"
        onClick={() =>
          setCurrentSlide(
            currentSlide === 0 ? galleryImages.length - 1 : currentSlide - 1
          )
        }
      >
        ‹
      </button>
      <button
        className="civil-carousel-btn next"
        onClick={() =>
          setCurrentSlide(
            currentSlide === galleryImages.length - 1 ? 0 : currentSlide + 1
          )
        }
      >
        ›
      </button>

      <div className="civil-carousel-dots">
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

  {selectedImage && (
    <div className="civil-modal" onClick={() => setSelectedImage(null)}>
      <img src={selectedImage} alt="Enlarged Project" />
    </div>
  )}
</section>

{/* ================= FAQ (ACCORDION) ================= */}
<section className="civil-faq-section">
  <div className="container">
    <h2 className="text-center">Frequently Asked Questions</h2>

    {[
      {
        question: "What types of civil projects do you handle?",
        answer:
          "We manage road construction, drainage systems, subdivision development, utility trenching, and full-site civil works for residential, commercial, and industrial projects.",
      },
      {
        question: "Do you provide project management and supervision?",
        answer:
          "Yes, our experienced project managers oversee every stage of construction to ensure projects are completed on time, within budget, and compliant with all regulations.",
      },
      {
        question: "Is safety a priority on your sites?",
        answer:
          "Absolutely. All civil projects follow strict safety standards and regulatory compliance to protect both our team and the site environment.",
      },
      {
        question: "Do you offer consultation for planning and design?",
        answer:
          "Yes, we provide expert consultation, site assessment, and design recommendations to ensure efficient, durable, and cost-effective civil solutions.",
      },
      {
        question: "Can you handle projects of all scales?",
        answer:
          "From small residential subdivisions to large commercial and industrial infrastructure projects, our team is equipped and experienced to deliver quality results at any scale.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className={`civil-faq-item ${activeIndex === index ? "active" : ""}`}
      >
        <button
          className="civil-faq-question"
          onClick={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
        >
          {item.question}
          <span className="icon">
            {activeIndex === index ? "−" : "+"}
          </span>
        </button>

        <div className="civil-faq-answer">
          <p>{item.answer}</p>
        </div>
      </div>
    ))}
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

      {/* BRANDS */}
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

export default Civil;
