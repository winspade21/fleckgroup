import React, { useState, useEffect, useRef } from "react";
import "../../assets/css/Projects.scss";
import { fleetCategories } from "../../assets/images/fleetData.js";

const faqsData = [
  { question: "Do you provide machinery with operators?", answer: "Yes, all our fleet comes with skilled, fully licensed operators." },
  { question: "Can I hire equipment for short-term projects?", answer: "Absolutely. We offer flexible hire options depending on your project requirements." },
  { question: "Do you service all of NSW?", answer: "Yes, our fleet is available across New South Wales for all project types." },
  { question: "Are the machines insured?", answer: "Yes, all fleet equipment is fully insured and maintained for safety compliance." },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(fleetCategories[0]);
  const [activeEquipment, setActiveEquipment] = useState(null);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const tabsRef = useRef(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeEquipment ? "hidden" : "auto";
  }, [activeEquipment]);

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <main style={{ marginTop: "160px" }}>
      {/* HERO */}
      <section className="projects-hero">
        <div className="overlay"></div>
        <div className="container hero-content text-center">
          <h1>Our Fleet</h1>
          <p>
            Showcasing our heavy machinery and equipment for civil, earthmoving, demolition, haulage, and transport projects across NSW.
          </p>
          <div className="breadcrumb-custom">
            <span>Home</span>
            <span className="separator">/</span>
            <span className="active">Fleet</span>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="projects-section py-5">
        <div className="container">
          <div className="tabs-wrapper">
            <button className="scroll-btn" onClick={() => scrollTabs("left")}>◀</button>
            <div className="projects-tabs" ref={tabsRef}>
              {fleetCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`tab-btn ${activeCategory.id === cat.id ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat.title}
                </button>
              ))}
            </div>
            <button className="scroll-btn" onClick={() => scrollTabs("right")}>▶</button>
          </div>



          {/* GRID */}
          <div className="projects-grid mt-4">
            {activeCategory.equipment.map((eq, idx) => (
              <div
                key={idx}
                className="project-card"
                onClick={() => setActiveEquipment(eq)}
              >
                {eq.image && <img src={eq.image} alt={eq.name} className="project-img" />}
                <div className="card-content">
                  <h3>{eq.name}</h3>
                  <p>{eq.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {activeEquipment && (
        <div className="project-modal">
          <div className="modal-overlay" onClick={() => setActiveEquipment(null)}></div>
          <div className="modal-content">
            <button className="close-btn" onClick={() => setActiveEquipment(null)}>×</button>
            <h2>{activeEquipment.name}</h2>
            {activeEquipment.image && <img src={activeEquipment.image} alt={activeEquipment.name} />}
            <p>{activeEquipment.description}</p>
          </div>
        </div>
      )}

      {/* CAPABILITIES */}
      <section className="projects-capabilities">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Comprehensive Fleet Capability</h2>
              <p>With over 35 years of experience, Fleck Group offers a wide range of modern machinery for civil, demolition, and earthmoving projects.</p>
              <ul>
                <li>✔ Bulk excavation & detailed earthworks</li>
                <li>✔ Road construction & infrastructure</li>
                <li>✔ Commercial & industrial demolition</li>
                <li>✔ Heavy haulage & logistics coordination</li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="capability-image"></div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="projects-stats">
        <div className="container text-center">
          <h2>Our Fleet Achievements</h2>
          <p>Reliable fleet and machinery for civil, demolition, earthmoving, and transport projects across NSW.</p>
          <div className="stats-grid">
            <div className="stat-card"><h3>100+</h3><p>Machines Available</p></div>
            <div className="stat-card"><h3>35+</h3><p>Years of Experience</p></div>
            <div className="stat-card"><h3>500+</h3><p>Projects Supported</p></div>
            <div className="stat-card"><h3>100%</h3><p>Safety Compliance</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="projects-faq py-5">
        <div className="container">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <div className="accordion">
            {faqsData.map((faq, index) => (
              <div className={`accordion-item ${activeFaqIndex === index ? "active" : ""}`} key={index}>
                <button
                  className="accordion-header"
                  onClick={() => setActiveFaqIndex(activeFaqIndex === index ? null : index)}
                >
                  {faq.question}
                  <span className="accordion-icon">{activeFaqIndex === index ? "−" : "+"}</span>
                </button>
                <div className="accordion-body"><p>{faq.answer}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="projects-cta">
        <div className="container text-center">
          <h2>Need Heavy Machinery?</h2>
          <p>Hire from Fleck Group for reliable fleet and equipment solutions across NSW.</p>
          <button className="btn-brand" onClick={() => window.location.href="/contact"}>Get in Touch</button>
        </div>
      </section>
    </main>
  );
};

export default Projects;