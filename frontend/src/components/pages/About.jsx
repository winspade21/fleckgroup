import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../../assets/css/About.scss';
import aboutImg1 from '../../assets/images/haulage.jpg';
import aboutImg2 from '../../assets/images/earthmoving.jpg';
import faqImg from '../../assets/images/slide1.jpg';
import FleckTabs from "../common/FleckTabs.jsx";
import HeroSlider from "../common/HeroSlider.jsx"

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

      {/* HERO SECTION */}
      <HeroSlider/>


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
    <div className="row align-items-center">

      {/* LEFT IMAGE - Vertically Centered */}
      <div className="col-lg-6 d-flex align-items-center justify-content-center w3hny-passion-item mb-4 mb-lg-0" data-aos="fade-right" data-aos-delay="100">
        <img src={faqImg} alt="FAQ" className="img-fluid radius-image" />
      </div>

      {/* RIGHT FAQ */}
      <div className="col-lg-6 mt-lg-0 mt-4" data-aos="fade-left" data-aos-delay="200">
        <h6 className="title-subw3hny mb-1">Ask by Client</h6>
        <h3 className="title-w3l mb-4">Frequently Asked Questions</h3>

        <div className="accordion accordion-grid" id="accordionExample">

          {/* 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                1. How long has the company been in operation?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                The business traces its roots back over 30+ years, with the founders growing the company from modest beginnings into a well-established contractor in the Sydney region.
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                2. Where is Fleck Group located?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Their business is registered in New South Wales (NSW), Australia, with a main address listed in Box Hill (NSW 2765).
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                3. What services does Fleck Group provide?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Fleck Group provides earthmoving, civil support, plant hire (wet and dry), haulage, and transport solutions across New South Wales. Our services are designed to support projects from initial site preparation through to completion.
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                4. Do you offer both wet and dry hire?
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Yes, we offer both wet hire (equipment with experienced operators) and dry hire (equipment only), allowing clients to choose the option that best suits their project requirements.
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                5. What areas do you service?
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                We operate across New South Wales, with a strong presence in the Sydney metropolitan area and surrounding regions.
              </div>      
            </div>
          </div>

          {/* 6 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                6. What types of projects do you support?
              </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                We support a wide range of projects, including civil works, infrastructure projects, site preparation, and bulk earthworks. Our flexible service offering allows us to adapt to projects of varying scale and complexity.
              </div>
            </div>
          </div>

          {/* 7 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven">
                7. How do you ensure equipment reliability?
              </button>
            </h2>
            <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Our fleet is maintained to a high standard through structured servicing and ongoing mechanical support, ensuring equipment is job-ready and minimising the risk of downtime on site.
              </div>
            </div>
          </div>

          {/* 8 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight">
                8. Is safety a priority?
              </button>
            </h2>
            <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Safety is a core focus across all Fleck Group operations. We are committed to maintaining safe work practices, clear communication, and proactive reporting across all sites and activities.
              </div>
            </div>
          </div>

          {/* 9 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine">
                9. Can you support urgent or short-notice requirements?
              </button>
            </h2>
            <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Yes, we understand that project demands can change quickly. Our team works to provide responsive support and practical solutions where possible to help keep projects moving.
              </div>
            </div>
          </div>

          {/* 10 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen">
                10. Do you provide haulage and transport?
              </button>
            </h2>
            <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Yes, in addition to plant hire, we offer haulage and transport solutions to support equipment mobilisation and project logistics.
              </div>
            </div>
          </div>

          {/* 11 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven">
                11. How can we engage Fleck Group for a project?
              </button>
            </h2>
            <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                You can contact our team directly to discuss your project requirements. We work closely with clients to understand site needs and provide tailored support solutions.
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


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





 