import React, { useState, useEffect } from "react";
import "../../assets/css/projects.scss";

import civilImg from "../../assets/images/civil-dozer.jpg";
import earthmovingImg from "../../assets/images/earthmoving.jpg";
import demolitionImg from "../../assets/images/demolition.jpeg";
import haulageImg from "../../assets/images/haulage-smalldigger.jpg";
import plantHireImg from "../../assets/images/planthire.jpg";
import transportImg from "../../assets/images/transport.jpg";

const projectsData = [
  {
    id: 1,
    title: "City Road Upgrade",
    category: "Civil",
    description:
      "Major arterial road reconstruction improving traffic flow and safety across Western Sydney.",
    image: civilImg,
  },
  {
    id: 2,
    title: "Bulk Excavation Works",
    category: "Earthmoving",
    description:
      "Large-scale excavation and site preparation for commercial development.",
    image: earthmovingImg,
  },
  {
    id: 3,
    title: "Industrial Site Demolition",
    category: "Demolition",
    description:
      "Complete demolition and site clearance of aging industrial facility.",
    image: demolitionImg,
  },
  {
    id: 4,
    title: "Material Haulage Program",
    category: "Haulage",
    description:
      "Efficient transport of aggregates and spoil across multiple project sites.",
    image: haulageImg,
  },
  {
    id: 5,
    title: "Wet & Dry Plant Hire",
    category: "Plant Hire",
    description:
      "Supplying modern machinery with skilled operators for civil contractors.",
    image: plantHireImg,
  },
  {
    id: 6,
    title: "Heavy Equipment Transport",
    category: "Transport",
    description:
      "Specialised transport logistics for oversized plant and machinery.",
    image: transportImg,
  },
];

const categories = [
  "All",
  "Civil",
  "Earthmoving",
  "Demolition",
  "Haulage",
  "Plant Hire",
  "Transport",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  // FAQ Accordion state
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const faqsData = [
    {
      question: "What types of projects do you handle?",
      answer:
        "We handle civil, earthmoving, demolition, haulage, plant hire, and transport projects across NSW, from small commercial sites to large-scale infrastructure.",
    },
    {
      question: "Do you provide machinery with operators?",
      answer:
        "Yes, all our plant hire and earthmoving machinery comes with skilled, fully licensed operators.",
    },
    {
      question: "How do I request a project quote?",
      answer:
        "You can contact us directly via the 'Get in Touch' button on this page or fill out our contact form with project details.",
    },
    {
      question: "Are your projects insured?",
      answer:
        "Absolutely. All projects are fully licensed and insured for safety and compliance.",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
  }, [activeProject]);

  return (
    <main style={{ marginTop: "160px" }}>
      {/* HERO + BREADCRUMB */}
      <section className="projects-hero">
        <div className="overlay"></div>
        <div className="container hero-content text-center">
          <h1>Our Projects</h1>
          <p>
            Delivering excellence across Civil, Earthmoving, Demolition, Haulage, Plant Hire & Transport services across NSW.
          </p>
          <div className="breadcrumb-custom">
            <span>Home</span>
            <span className="separator">/</span>
            <span className="active">Projects</span>
          </div>
        </div>
      </section>

      {/* PROJECTS TABS + GRID */}
      <section className="projects-section py-5">
        <div className="container">
          {/* Tabs */}
          <div className="projects-tabs text-center mb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                  <p>{project.description}</p>
                  <button
                    className="btn-brand mt-auto"
                    onClick={() => setActiveProject(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {activeProject && (
        <div className="project-modal">
          <div className="modal-overlay" onClick={() => setActiveProject(null)}></div>
          <div className="modal-content">
            <button className="close-btn" onClick={() => setActiveProject(null)}>×</button>
            <h2>{activeProject.title}</h2>
            <span className="project-category">{activeProject.category}</span>
            <img src={activeProject.image} alt={activeProject.title} />
            <p>{activeProject.description}</p>
          </div>
        </div>
      )}

      {/* CAPABILITIES */}
      <section className="projects-capabilities">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Comprehensive Civil & Earthworks Capability</h2>
              <p>
                With over 35 years of experience, Fleck Group delivers
                large-scale civil, demolition, and earthmoving solutions
                backed by modern machinery and skilled operators.
              </p>
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
          <h2>Our Achievements</h2>
          <p>
            Proven track record in civil, demolition, earthmoving, and transport projects across NSW.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>1200+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>35+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-card">
              <h3>100+</h3>
              <p>Machines & Assets</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Safety Commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="projects-faq py-5">
        <div className="container">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <div className="accordion">
            {faqsData.map((faq, index) => (
              <div
                className={`accordion-item ${activeFaqIndex === index ? "active" : ""}`}
                key={index}
              >
                <button
                  className="accordion-header"
                  onClick={() => setActiveFaqIndex(activeFaqIndex === index ? null : index)}
                >
                  {faq.question}
                  <span className="accordion-icon">{activeFaqIndex === index ? "−" : "+"}</span>
                </button>
                <div className="accordion-body">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="projects-cta">
        <div className="container text-center">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Partner with Fleck Group for reliable civil and earthmoving solutions across NSW.
          </p>
          <button className="btn-brand" onClick={() => window.location.href="/contact"}>
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  );
};

export default Projects;