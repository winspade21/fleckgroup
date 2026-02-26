import React, { useRef, useEffect,useState } from "react";
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

import "../../assets/css/Haulage.scss";

const services = [
  { title: "Earthmoving", subtitle: "Bulk excavation and expert earthworks solutions.", image: earthmovingImg, link: "/services/earthmoving" },
  { title: "Civil Works", subtitle: "Reliable infrastructure and site development services.", image: civilImg, link: "/services/civil" },
  { title: "Demolition", subtitle: "Safe, controlled, and precision demolition services.", image: demolitionImg, link: "/services/demolition" },
  { title: "Haulage", subtitle: "Efficient material transport for projects of any scale.", image: haulageImg, link: "/services/haulage" },
  { title: "Plant Hire", subtitle: "High-performance machinery with experienced operators.", image: plantHireImg, link: "/services/plant-hire" },
  { title: "Transportation", subtitle: "Dependable transport solutions backed by a modern fleet.", image: transportationImg, link: "/services/transportation" },
];

const Haulage = () => {
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
      if (heroRef.current) heroRef.current.style.backgroundPositionY = `${window.pageYOffset * 0.5}px`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-triggered animation
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".haulage-hero-title, .haulage-hero-subtitle, .haulage-side-card, .haulage-content, .haulage-results-card"
    );
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 }
    );
    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <>
      {/* HERO */}
      <div className="haulage-hero-banner" style={{ backgroundImage: `url(${haulageImg})` }} ref={heroRef}>
        <section className="haulage-breadcrumbs">
          <div className="container">
            <div className="haulage-breadcrumbs-inner">
              <div className="haulage-breadcrumbs-left">
                <h2 className="haulage-hero-title">Haulage</h2>
                <p className="haulage-hero-subtitle">Efficient Material Transport for Projects of Any Scale</p>
              </div>
              <div className="haulage-breadcrumbs-right">
                <ul className="haulage-breadcrumbs-path">
                  <li><Link to="/">Home</Link></li>
                  <li className="active"><span className="fas fa-angle-double-right mx-2"></span>Haulage</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* MAIN */}
      <section className="haulage-service-page">
        <div className="container">
          <div className="haulage-service-layout">

            {/* SIDEBAR */}
            <aside className="haulage-sidebar">
              <h3>Other Services</h3>
              {services.filter(s => s.link !== location.pathname).map((service, idx) => (
                <Link key={idx} to={service.link} className="haulage-side-card" style={{ animationDelay: `${0.3 + idx*0.2}s` }}>
                  <img src={service.image} alt={service.title} />
                  <div className="card-content">
                    <h4>{service.title}</h4>
                    <p className="subtitle">{service.subtitle}</p>
                  </div>
                </Link>
              ))}
            </aside>

            {/* CONTENT */}
            <div className="haulage-content">
              <h2>Comprehensive Haulage Services</h2>
              <p>Fleck Group delivers efficient, reliable haulage solutions for projects of any size. Our modern fleet and experienced team ensure timely transport and seamless logistics management.</p>

              <h3>Core Services</h3>
              <ul>
                <li><strong>Material Transport</strong> – Timely Delivery of construction materials to keep projects on track.</li>
                <li><strong>Heavy Machine Transport</strong> – Safe, efficient movement of large equipment and machinery.</li>
                <li><strong>Logistics and Fleet</strong> – Coordinated transport solution for smooth, on-time project execution.  </li>
              </ul>

              <h3>Why Choose Us</h3>
              <ul>
                <li><strong>Experience Operators</strong> – Skilled fleet teams ensure safe, efficient, and reliable transport for every project.</li>
                <li><strong>GPS & Scheduling</strong> – Real-time tracking and planning optimize delivery and keep projects on schedule.</li>
                <li><strong>On-Time Delivery</strong> – Materials and machinery arrive as planned, minimizing delays and keeping projects efficient.</li>
                <li><strong>Safety & Compliance</strong> – Full adherence to safety regulations ensures secure, worry-free operations every time.</li>
              </ul>
            </div>
          </div>

          {/* RESULTS */}
          <section className="haulage-results-section">
            <div className="container text-center">
              <h2>Haulage Projects in Action</h2>
              <p>See our haulage projects efficiently transporting materials to sites safely and on time.</p>
              <div className="haulage-results-cards">
                <div className="haulage-results-card"><img src={haulageImg} alt="Project 1"/><h4>Construction Site Transport</h4><p>Timely delivery of construction materials across sites.</p></div>
                <div className="haulage-results-card"><img src={earthmovingImg} alt="Project 2"/><h4>Heavy Machinery Movement</h4><p>Safe transport of heavy equipment to multiple project sites.</p></div>
                <div className="haulage-results-card"><img src={civilImg} alt="Project 3"/><h4>Industrial Logistics</h4><p>Complete logistics solutions for industrial operations.</p></div>
              </div>
            </div>
          </section>

          {/* ================== HAULAGE GALLERY ======================= */}
<section className="haulage-gallery-section">
  <div className="container text-center">
    <h2>Project Gallery</h2>

    <div className="haulage-carousel">

      {/* Carousel Track */}
      <div
        className="haulage-carousel-track"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {galleryImages.map((img, index) => (
          <div className="haulage-carousel-item" key={index}>
            <img src={img} alt={`Haulage Project ${index + 1}`} onClick={() => setSelectedImage(img)} />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        className="haulage-carousel-btn prev"
        onClick={() =>
          setCurrentSlide(
            currentSlide === 0 ? galleryImages.length - 1 : currentSlide - 1
          )
        }
      >
        ‹
      </button>
      <button
        className="haulage-carousel-btn next"
        onClick={() =>
          setCurrentSlide(
            currentSlide === galleryImages.length - 1 ? 0 : currentSlide + 1
          )
        }
      >
        ›
      </button>

      {/* Dots */}
      <div className="haulage-carousel-dots">
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
    <div className="haulage-modal" onClick={() => setSelectedImage(null)}>
      <img src={selectedImage} alt="Enlarged Haulage Project" />
    </div>
  )}
</section>

{/* ================== HAULAGE FAQ ======================= */}
<section className="haulage-faq-section">
  <div className="container">
    <h2 className="text-center">Frequently Asked Questions</h2>

    {[
      {
        question: "What types of heavy equipment do you transport?",
        answer:
          "We transport all types of heavy equipment including excavators, bulldozers, cranes, loaders, and construction machinery safely and efficiently.",
      },
      {
        question: "Do you have specialized trailers for heavy equipment?",
        answer:
          "Yes, we use low-bed, extendable, and multi-axle trailers specifically designed for oversized and heavy machinery transport.",
      },
      {
        question: "How do you ensure equipment safety during transport?",
        answer:
          "All equipment is carefully secured using certified tie-downs, and our experienced drivers follow strict protocols to prevent damage during transit.",
      },
      {
        question: "Do you provide insurance for transported equipment?",
        answer:
          "Absolutely. All transported equipment is fully insured, giving our clients peace of mind throughout the delivery process.",
      },
      {
        question: "Can you handle urgent or long-distance deliveries?",
        answer:
          "Yes, we provide flexible scheduling and can handle both local and long-distance heavy equipment transport, including urgent delivery requests.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className={`haulage-faq-item ${activeIndex === index ? "active" : ""}`}
      >
        <button
          className="haulage-faq-question"
          onClick={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
        >
          {item.question}
          <span className="icon">{activeIndex === index ? "−" : "+"}</span>
        </button>

        <div className="haulage-faq-answer">
          <p>{item.answer}</p>
        </div>
      </div>
    ))}
  </div>
</section>

          {/* CTA */}
          <section className="haulage-cta-section">
            <div className="container text-center">
              <h2>Start Your Haulage Project Today</h2>
              <p>Fleck Group provides professional haulage solutions tailored to your project needs.</p>
              <Link to="/contact" className="cta-btn">Contact Fleck Group Today →</Link>
            </div>
          </section>
        </div>
      </section>

    {/* BRANDS */}
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

export default Haulage;