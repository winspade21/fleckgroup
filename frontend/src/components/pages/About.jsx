import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../../assets/css/About.scss';
import aboutImg1 from '../../assets/images/haulage.jpg';
import aboutImg2 from '../../assets/images/earthmoving.jpg';
import faqImg from '../../assets/images/slide1.jpg';
import FleckTabs from "../common/FleckTabs.jsx";
import OurTeam from "../common/OurTeam.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

import logo1 from '../../assets/images/logo5.png';
import logo2 from '../../assets/images/logo4.png';
import logo3 from '../../assets/images/logo3.png';
import logo4 from '../../assets/images/logo2.png';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="inner-banner1">
        <div className="inner-content" data-aos="fade-down">
          <section className="w3l-breadcrumb1 py-sm-5">
            <div className="container">
              <div className="w3breadcrumb-gids1">
                <div className="w3breadcrumb-left" data-aos="fade-right" data-aos-delay="100">
                  <h2 className="inner-w3-title1 mt-sm-5 mt-4">
                    About Us
                  </h2>
                </div>
                <div className="w3breadcrumb-right1" data-aos="fade-left" data-aos-delay="200">
                  <ul className="breadcrumbs-custom-path1">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="active">
                      <span className="fas fa-angle-double-right mx-2"></span> About Us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Passion / About Section */}
      <section className="w3l-passion-mid-sec py-5" data-aos="fade-up">
        <div className="container py-md-5 py-3">
          <div className="row w3l-passion-mid-grids align-items-center">

            {/* Text Column */}
            <div className="col-lg-6 passion-grid-item-info pe-lg-5 mb-lg-0 mb-5" data-aos="fade-right" data-aos-delay="100">
              <h6 className="title-subw3hny mb-1">About Fleck Group</h6>
              <h3 className="title-w3l mb-4">
                The Fleck Difference Family-Owned, Passion-Driven
              </h3>
              <p className="mt-3 pe-lg-5">
                With over 35 years of experience in earthmoving, demolition, civil construction, and haulage, Fleck Group is a trusted partner for builders, developers, and infrastructure projects across Sydney and NSW.
              </p>

              <Link to="/services" className="btn mt-3" data-aos="fade-up" data-aos-delay="200">
                View Services
              </Link>
            </div>

            {/* Images Column */}
            <div className="col-lg-6 w3hny-passion-item">
              <div className="row g-3">
                <div className="col-6 passion-grid-item-pic" data-aos="fade-up" data-aos-delay="300">
                  <img src={aboutImg1} alt="Industrial service 1" className="img-fluid radius-image" />
                </div>
                <div className="col-6 passion-grid-item-pic" data-aos="fade-up" data-aos-delay="400">
                  <img src={aboutImg2} alt="Industrial service 2" className="img-fluid radius-image" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Fleck Tabs */}
      <div data-aos="fade-up" data-aos-delay="500">
        <FleckTabs />
      </div>

      {/* FAQ Section */}
      <section className="w3l-products w3l-faq-block py-5" id="projects" data-aos="fade-up">
        <div className="container py-lg-5">
          <div className="row">
            <div className="col-lg-6 w3hny-passion-item pe-lg-5" data-aos="fade-right" data-aos-delay="100">
              <img src={faqImg} alt="FAQ" className="img-fluid radius-image" />
            </div>

            <div className="col-lg-6 mt-lg-0 mt-sm-5 mt-5" data-aos="fade-left" data-aos-delay="200">
              <h6 className="title-subw3hny mb-1">Ask by Client</h6>
              <h3 className="title-w3l mb-4">Frequently Asked Questions</h3>
              <div className="accordion" id="accordionExample">
                 <div className="accordion" id="accordionExample">

                <div className="accordion-item" data-aos="fade-up" data-aos-delay="300">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                     1.  How long has the company been in operation?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      The business traces its roots back over 30+ years, with the founders growing the company from modest beginnings into a well‑established contractor in the Sydney region.
                    </div>
                  </div>
                </div>

                <div className="accordion-item" data-aos="fade-up" data-aos-delay="400">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      2.  Where is Fleck Group located?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Their business is registered in New South Wales (NSW), Australia, with a main address listed in Box Hill (NSW 2765).
                    </div>
                  </div>
                </div>

                <div className="accordion-item" data-aos="fade-up" data-aos-delay="500">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      3.  What services does Fleck Earthmoving offer?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>They provide a comprehensive range of services, including:</strong>
                      <br /><strong> •Earthmoving & Excavation</strong> — bulk excavation, precision digs, land clearing, leveling.
                      <br /><strong> • Demolition </strong>— both residential and commercial structures.
                      <br /><strong>• Civil Works </strong>— site preparation, subdivision works, infrastructure support.
                      <br /><strong>• Haulage & Transport </strong>— bulk materials movement and equipment logistics.
                      <br /><strong>• Plant Hire </strong>— wet hire with operators, modern equipment fleet.
                    </div>
                  </div>
                </div>

              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurTeam/>


    {/* CTA SECTION -----=====
    [] =================== */}

<section className="fleck-cta">
      <div className="fleck-cta__content">
        
        <h2>Building the Infrastructure That Powers Tomorrow</h2>

        <p>
          Fleck Group partners with developers, government, and industry leaders
          to deliver complex civil and earthmoving projects with precision,
          safety, and certainty.
        </p>

        <div className="fleck-cta__buttons">
  <Link to="/contact" className="btn-primary">
    Start a Conversation
  </Link>

  <Link to="/services" className="btn-secondary">
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
    </>
  );
};

export default About;





 