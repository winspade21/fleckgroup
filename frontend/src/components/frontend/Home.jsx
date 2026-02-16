import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Testimonial from "../common/Testimonials.jsx";
import "../../assets/css/style.scss";

import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpeg";
import slide3 from "../../assets/images/earthmoving.jpg";
import abtVideo from "../../assets/images/about.mp4"; 
import earthmovingImg from "../../assets/images/earthmoving.jpg"
import civilImg from "../../assets/images/civil.jpeg"
import haulageImg from "../../assets/images/haulage.jpg"
import transportImg from "../../assets/images/transport.jpg"
import demolitionImg from "../../assets/images/demolition.jpeg"
import plantHireImg from "../../assets/images/plantHire.jpg"

import { FaCheckCircle, FaFacebookF, FaLinkedinIn, FaInstagram, FaAward, FaShieldAlt, FaTools } from "react-icons/fa";

import logo1 from '../../assets/images/logo5.png';
import logo2 from '../../assets/images/logo4.png';
import logo3 from '../../assets/images/logo3.png';
import logo4 from '../../assets/images/logo2.png';


const images = [slide1, slide2, slide3];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const aboutRef = useRef(null);

  // Hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll-triggered animation + video play/pause
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const video = entry.target.querySelector(".about-video");
        const elements = entry.target.querySelectorAll(
          "span, h2, p, .btn-primary, .about-video, .social-icons"
        );

        if (entry.isIntersecting) {
          elements.forEach((el, index) => {
            setTimeout(() => el.classList.add("animate"), index * 200);
          });

          if (video && video.paused) {
            video.play().catch(() => {
              console.log("Autoplay blocked");
            });
          }
        } else {
          if (video && !video.paused) video.pause();
        }
      });
    },
    { threshold: 0.5 }
  );

  if (aboutRef.current) observer.observe(aboutRef.current);
  return () => observer.disconnect();
}, []);

  useEffect(() => {
  const elements = document.querySelectorAll(".reveal-left, .reveal-right");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach(el => observer.observe(el));
  return () => observer.disconnect();
}, []);

  return (
    <main style={{ marginTop: "160px" }}>
      {/* HERO SECTION */}
      <section className="section-1">
        {images.map((image, index) => (
          <div
            key={index}
            className={`bg-slide ${index === currentImage ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="overlay"></div>

        <div className="hero d-flex align-items-center">
          <div className="hero-left">
            <div className="hero-content">
              <h1>Sydney’s Trusted Earthmoving & Plant Hire Specialists</h1>
              <p>Supporting civil & construction projects since 1988</p>
              <div className="mt-3">
                <Link to="/contact" className="hero-btn btn text-decoration-none me-3">
                  Get A Free Quote
                </Link>
                <Link to="/projects" className="hero-btn1 btn text-decoration-none">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

   {/* ABOUT US */}
  <section className="section-2 py-5" ref={aboutRef}>
  <div className="container py-5">
    <div className="row align-items-center">
      
      {/* Video */}
      <div className="col-md-6 mb-4 mb-md-0">
        <video
          className="w-100 about-video rounded"
          src={abtVideo}
          autoPlay
          loop
          playsInline
          controls
        />
      </div>

      {/* Content */}
      <div className="col-md-6">
        <span className="text-uppercase text-muted small">
          About Fleck Group
        </span>

        <h2 className="mt-2 mb-3">
          The Fleck Difference <br />
          <strong>Family-Owned, Passion-Driven</strong>
        </h2>

        <p>
          From humble beginnings to a trusted name in the civil & construction industry, Fleck Group has grown through reliability, grit, and genuine passion for every project we take on.
        </p>

        <p>
          Today, our team delivers modern plant, skilled operators, and dependable service across Sydney and surrounding regions, combining big capability with small-business commitment.
        </p>

        <div className="d-flex align-items-center gap-3 mt-4">
          <Link to="/about" className="btn btn-primary">
            More About Us
          </Link>

          {/* Social Icons */}
         <div className="social-icons">
            <a href="https://www.facebook.com/fleckearthmoving" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/fleckearthmoving/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>


{/* SERVICE SECTION */}
     <section className="services-section">
      <div className="service-header">

        {/* Service 1 */}
        <div className="service-row">
          <div className="service-text reveal-left">
            <span className="red-bar"></span>
            <h3><i className="fa fa-road"></i> Civil Works</h3>
            <p>
              We provide reliable civil construction services specialising in bulk earthworks, roadworks, and infrastructure projects, delivered with a strong focus on safety and efficiency.
            </p>
            <Link to="/services" className="service-btn">View Services</Link>
          </div>
          <div className="service-image reveal-right">
            <img src={civilImg} alt="Civil Works" />
          </div>
        </div>

        {/* Service 2 */}
        <div className="service-row reverse">
          <div className="service-text reveal-right">
            <span className="red-bar"></span>
            <h3><i className="fa fa-hammer"></i> Demolition</h3>
            <p>
              Professional demolition services for residential and commercial developments, delivered in accordance with stringent safety, environmental, and regulatory compliance requirements.
            </p>
            <Link to="/services" className="service-btn">View Services</Link>
          </div>
          <div className="service-image reveal-left">
            <img src={demolitionImg} alt="Demolition" />
          </div>
        </div>

        {/* Service 3 */}
        <div className="service-row">
          <div className="service-text reveal-left">
            <span className="red-bar"></span>
            <h3><i className="fa fa-mountain"></i> Earthmoving</h3>
            <p>
              Leveraging modern equipment and experienced operators to handle earthmoving projects, regardless of scale or complexity.
            </p>
            <Link to="/services" className="service-btn">View Services</Link>
          </div>
          <div className="service-image reveal-right">
            { <img src={earthmovingImg} alt="Earthmoving" />}
          </div>
        </div>

        {/* Service 4 */}
        <div className="service-row reverse">
          <div className="service-text reveal-right">
            <span className="red-bar"></span>
            <h3><i className="fa fa-dolly"></i> Haulage</h3>
            <p>
              Efficient and reliable bulk transport solutions with a modern fleet and experienced operators, ensuring safe, timely delivery and projects remain on track.
            </p>
            <Link to="/services" className="service-btn">View Services</Link>
          </div>
          <div className="service-image reveal-left">
            <img src={haulageImg} alt="Haulage" />
          </div>
        </div>

        {/* Service 5 */}
        <div className="service-row">
          <div className="service-text reveal-left">
            <span className="red-bar"></span>
            <h3><i className="fa fa-tractor"></i> Plant Hire</h3>
            <p>
              Efficient and reliable bulk transport solutions with a modern fleet and experienced operators, ensuring materials are delivered safely and projects stay on schedule.
            </p>
            <Link to="/services" className="service-btn">View Services</Link>
          </div>
          <div className="service-image reveal-right">
            <img src={plantHireImg} alt="Plant Hire" />
          </div>
        </div>

        {/* Service 6 */}
        <div className="service-row reverse">
          <div className="service-text reveal-right">
            <span className="red-bar"></span>
            <h3><i className="fa fa-truck"></i> Transport</h3>
            <p>
              Efficient transport solutions supported by a modern, reliable fleet and experienced personnel, ensuring materials are moved safely and delivered on time for projects of any scale.
            </p>
            <Link to="/services" className="service-btn">View Services</Link>
          </div>
          <div className="service-image reveal-left">
            <img src={transportImg} alt="Transport" />
          </div>
        </div>

      </div>
    </section>


{/* Why Choose Us */}
<section className="about-overview">
  <div className="container">
    <div className="about-grid">

      {/* LEFT */}
      <div className="about-text fade-in-up delay-1">
        <h2>Built on Experience & Reliability</h2>
        <p>
          Fleck Group has been delivering high-quality civil, demolition,
          and earthmoving solutions across Sydney since 1988. Our team combines
          industry experience with modern machinery to complete projects safely,
          efficiently, and on time.
        </p>

        <ul className="about-points">
          <li><FaCheckCircle className="icon" /> Over 30 Years Industry Experience</li>
          <li><FaCheckCircle className="icon" /> Fully Licensed & Insured</li>
          <li><FaCheckCircle className="icon" /> Modern Fleet & Skilled Operators</li>
          <li><FaCheckCircle className="icon" /> Projects Delivered On Time</li>
        </ul>

        <Link to="/about" className="btn-learn">Learn More</Link>

        <div className="social-icon">
          <a href="https://www.facebook.com/fleckearthmoving" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/fleckearthmoving/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          
        </div>
      </div>

      {/* RIGHT */}
      <div className="about-stats fade-in-up delay-2">
        <div className="stat-card">
          <FaAward className="stat-icon" />
          <h3>35+</h3>
          <span>Decades of Experience</span>
        </div>

        <div className="stat-card">
          <FaTools className="stat-icon" />
          <h3>100+</h3>
          <span>Machines & Assets</span>
        </div>

        <div className="stat-card">
          <FaShieldAlt className="stat-icon" />
          <h3>100%</h3>
          <span>Safety Focused</span>
        </div>
      </div>

    </div>
  </div>
</section>


{/* TESTIMONIALS SECTION */}
 <Testimonial/>


{/* CTA SECTION */}
<section className="fleck-cta-unique">
  <div className="fleck-cta-unique__content">
    
    <h2>Ready to Start Your Project?</h2>

    <p>
      From civil works to large-scale earthmoving, <strong>Fleck Earthmoving & Plant Hire</strong> delivers reliable results across NSW & Sydney.
    </p>

    <div className="fleck-cta-unique__buttons">
      <Link to="/contact" className="fleck-btn-primary">
        Start a Conversation
      </Link>

      <Link to="/services" className="fleck-btn-secondary">
        Explore Our Capabilities
      </Link>
    </div>

  </div>
</section>

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
    </main>
  );
};

export default Home;
