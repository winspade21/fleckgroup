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

import "../../assets/css/Earthmoving.scss";

const services = [
  { title: "Earthmoving", subtitle: "Bulk excavation and expert earthworks solutions.", image: earthmovingImg, link: "/services/earthmoving" },
  { title: "Civil Works", subtitle: "Reliable infrastructure and site development services.", image: civilImg, link: "/services/civil" },
  { title: "Demolition", subtitle: "Safe, controlled, and precision demolition services.", image: demolitionImg, link: "/services/demolition" },
  { title: "Haulage", subtitle: "Efficient material transport for projects of any scale.", image: haulageImg, link: "/services/haulage" },
  { title: "Plant Hire", subtitle: "High-performance machinery with experienced operators.", image: plantHireImg, link: "/services/plant-hire" },
  { title: "Transportation", subtitle: "Dependable transport solutions backed by a modern fleet.", image: transportationImg, link: "/services/transportation" },
];



const Earthmoving = () => {
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
    const elements = document.querySelectorAll(".earthmoving-hero-title, .earthmoving-hero-subtitle, .earthmoving-side-card, .earthmoving-content, .earthmoving-results-card");

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
        className="earthmoving-hero-banner"
        style={{ backgroundImage: `url(${earthmovingImg})` }}
        ref={heroRef}
      >
        <section className="earthmoving-breadcrumbs">
          <div className="container">
            <div className="earthmoving-breadcrumbs-inner">
              <div className="earthmoving-breadcrumbs-left">
                <h2 className="earthmoving-hero-title">Earthmoving</h2>
                <p className="earthmoving-hero-subtitle">
                  Bulk Excavation & Expert Earthworks Solutions
                </p>
              </div>
              <div className="earthmoving-breadcrumbs-right">
                <ul className="earthmoving-breadcrumbs-path">
                  <li><Link to="/">Home</Link></li>
                  <li className="active"><span className="fas fa-angle-double-right mx-2"></span>Earthmoving</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= MAIN ================= */}
      <section className="earthmoving-service-page">
        <div className="container">
          <div className="earthmoving-service-layout">

            {/* SIDEBAR */}
            <aside className="earthmoving-sidebar">
              <h3>Other Services</h3>
              {services.filter(s => s.link !== location.pathname).map((service, idx) => (
                <Link
                  key={idx}
                  to={service.link}
                  className="earthmoving-side-card"
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
            <div className="earthmoving-content">
              <h2>Professional Earthmoving Services</h2>
              <p>
                Fleck Group delivers dependable earthmoving solutions for commercial, industrial, and infrastructure projects. Our experienced operators and modern fleet ensure efficient bulk excavation and precise site preparation.
              </p>

            <h3>Core Services</h3>
              <ul>
                <li><strong>Bulk Excavation & Grading</strong> – Efficient earthmoving for large-scale site preparation.</li>
                <li><strong>Site Clearing & Leveling</strong> – Preparing land safely and accurately for construction.</li>
                <li><strong>Trenching & Foundation Prep</strong> – Precise groundwork for strong, stable foundations.</li>
                <li><strong>Heavy Machinery Operation</strong> – Skilled operators handling excavators, loaders, and bulldozers.</li>
              </ul>

             <h3>Why Choose Us</h3>
              <ul>
                <li><strong>Skilled & Experienced Operators</strong> – Professionals ensuring efficient and precise operations.</li>
                <li><strong>Modern Machinery & Fleet Management</strong> – Reliable, up-to-date equipment for every project.</li>
                <li><strong>High Safety Standards & Compliance</strong> – Prioritizing safety at every stage of work.</li>
                <li><strong>On-Time Project Delivery</strong> – Dependable services to keep your project on schedule.</li>
              </ul>
            </div>
          </div>

          {/* ================= RESULTS ================= */}
          <section className="earthmoving-results-section">
            <div className="container text-center">
              <h2>Earthmoving Projects in Action</h2>
              <p>Precision, efficiency, and high-performance machinery at work.</p>
              <div className="earthmoving-results-cards">
                <div className="earthmoving-results-card"><img src={earthmovingImg} alt="Project 1"/><h4>Commercial Excavation</h4><p>Site excavation and bulk earthworks for commercial development.</p></div>
                <div className="earthmoving-results-card"><img src={haulageImg} alt="Project 2"/><h4>Industrial Site Prep</h4><p>Earthmoving for leveling and trenching on industrial projects.</p></div>
                <div className="earthmoving-results-card"><img src={plantHireImg} alt="Project 3"/><h4>Subdivision Development</h4><p>Earthworks support for residential road and lot preparation.</p></div>
              </div>
            </div>
          </section>

          {/* ================== GALLERY ======================= */}
   <section className="earthmoving-gallery-section">
      <div className="container text-center">
        <h2>Project Gallery</h2>

        <div className="earthmoving-carousel">

          {/* Carousel Track */}
          <div
            className="earthmoving-carousel-track"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {galleryImages.map((img, index) => (
              <div className="earthmoving-carousel-item" key={index}>
                <img src={img} alt={`Slide ${index + 1}`} onClick={() => setSelectedImage(img)} />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            className="earthmoving-carousel-btn prev"
            onClick={() =>
              setCurrentSlide(
                currentSlide === 0 ? galleryImages.length - 1 : currentSlide - 1
              )
            }
          >
            ‹
          </button>
          <button
            className="earthmoving-carousel-btn next"
            onClick={() =>
              setCurrentSlide(
                currentSlide === galleryImages.length - 1 ? 0 : currentSlide + 1
              )
            }
          >
            ›
          </button>

          {/* Dots */}
          <div className="earthmoving-carousel-dots">
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
        <div className="earthmoving-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged Project" />
        </div>
      )}
    </section>

{/* ================= FAQ (ACCORDION) ================= */}
<section className="earthmoving-faq-section">
  <div className="container">
    <h2 className="text-center">Frequently Asked Questions</h2>

    {[
      {
        question: "What projects do you handle?",
        answer:
          "We manage bulk excavation, leveling, trenching, and full site preparation for residential, commercial, and industrial projects.",
      },
      {
        question: "Do you supply operators?",
        answer:
          "Yes, all machinery is operated by certified and experienced professionals to ensure safety and efficiency.",
      },
      {
        question: "Is your work compliant with safety standards?",
        answer:
          "Absolutely. All projects follow strict industry regulations and safety compliance protocols.",
      },
      {
        question: "What types of machinery do you provide?",
        answer:
          "We provide a wide range of machinery including excavators, bulldozers, backhoes, graders, and dump trucks to handle any earthmoving task efficiently.",
      },
      {
        question: "Do you offer emergency services?",
        answer:
          "Yes, our team can respond to urgent earthmoving needs, including site clearing or excavation, to keep your project on schedule.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className={`earthmoving-faq-item ${activeIndex === index ? "active" : ""}`}
      >
        <button
          className="earthmoving-faq-question"
          onClick={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
        >
          {item.question}
          <span className="icon">{activeIndex === index ? "−" : "+"}</span>
        </button>

        <div className="earthmoving-faq-answer">
          <p>{item.answer}</p>
        </div>
      </div>
    ))}
  </div>
</section>


          {/* ================= CTA ================= */}
          <section className="earthmoving-cta-section">
            <div className="container text-center">
              <h2>Start Your Earthmoving Project Today</h2>
              <p>Fleck Group delivers expert earthmoving services with modern machinery and skilled operators.</p>
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

export default Earthmoving;


