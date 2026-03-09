import { useState } from "react";

import earthmovingImg from '../../assets/images/transport.jpg';
import missionImg from '../../assets/images/slide3.jpg';
import communityImg from '../../assets/images/slide2.jpg';
import plantHireImg from '../../assets/images/plantHire.jpg';

const FleckTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["What We Do", "Our Mission", "Our Impact", "Why Choose Fleck"];

  const tabContents = [
    {
      title: "Fleck Group brings specialised expertise across the civil construction, infrastructure, and earthmoving sectors.",
      text: `Fleck Group brings specialised expertise across civil construction, infrastructure, and earthmoving sectors. 
Our team supports projects at every stage, from initial site preparation through to complex, multi-phase works, 
delivering plant, labour, and logistical solutions aligned with modern project requirements.`,
      list: [
        "Civil and bulk earthworks",
        "Site preparation and remediation",
        "Infrastructure support",
        "Haulage and logistics coordination",
        "Wet and dry plant hire solutions",
      ],
      image: earthmovingImg,
    },
    {
      title: "Our mission is to provide reliable, safe, and efficient solutions that support the successful delivery of civil and infrastructure projects.",

      text: `We are committed to building long-term partnerships by consistently delivering quality service, 
      maintaining high safety standards, and adapting to the evolving needs of our clients. Through ongoing investment in our people, fleet, and systems, we aim to strengthen our capability 
      and deliver outcomes that add value on every project we support.`,
      list: [
        "Operational excellence",
        "Dependable service",
        "Sustainable growth",
        "High safety standards",
      ],
      image: missionImg,
    },
    {
      title: "Fleck Group plays a vital role in supporting the delivery of civil and infrastructure projects across New South Wales.",
      text: `Through dependable equipment, responsive service, and experienced personnel, we contribute to the efficient progression of works on site, helping minimise downtime and maintain project momentum. 
Our impact is reflected in both the projects we support and the standards we uphold.
As we continue to grow, our focus remains on delivering value through practical solutions, strong relationships, and a commitment to supporting the industries and communities in which we operate.`,
      list: [
        "Efficient site support",
        "Experienced personnel",
        "Reliable equipment",
        "Prioritising safety and operational consistency",
        "Supporting industries and communities",
      ],
      image: communityImg,
    },
    {
      title: "Choosing Fleck Group means partnering with a team that understand the practical demands of civil and infrastructure projects.",
      text: "We combine modern fleet capability with experienced personnel and structured operational systems to deliver dependable support where and when it’s needed. We focus on building long-term relationships by delivering outcomes our clients can rely on, project after project. At Fleck Group, our priority is simple: to provide th capability and support that help keeps moving efficiently and safely.",
      list: [
        "Reliable, well-maintained equipment",
        "Responsive service and communication",
        "Strong commitment to safety",
        "Flexible, tailored solutions",
        "Consistent performance",
      ],
      image: plantHireImg,
    },
  ];

  return (
    <section className="about-us-page">
      {/* Who We Are Section */}
      <section className="who-we-are py-5">
        <div className="container text-center content-wrapper">
          <h2>Who We Are</h2>
          <p>
            Fleck Group is a leading provider of integrated earthmoving, civil, plant hire, haulage, 
            and transport solutions across New South Wales. Our business is underpinned by a commitment 
            to safety, quality, and performance. Through ongoing investment in our fleet, systems, and people, 
            we deliver reliable and scalable support across a diverse range of projects.
          </p>
          <p>
            We combine practical on-site experience with structured processes and modern technology 
            to deliver consistent outcomes. Our collaborative approach builds long-term relationships 
            based on trust, transparency, and dependable service.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="w3l-products1 py-5" id="tabs">
        <div className="container py-lg-5 py-md-4 py-2">

          {/* Header */}
          <div className="header-sec mx-auto text-center">
            <h6>Our Expertise</h6>
            <h3>
              Industry-leading earthmoving<br /> and civil solutions
            </h3>
          </div>

          {/* Tabs */}
          <ul className="resp-tabs-list">
            {tabs.map((tab, idx) => (
              <li
                key={idx}
                className={activeTab === idx ? "resp-tab-active" : ""}
                onClick={() => setActiveTab(idx)}
              >
                {tab}
              </li>
            ))}
          </ul>

          {/* Tab Panels */}
          <div className="resp-tabs-container">
            {tabContents.map((content, idx) => (
              <div
                key={idx}
                className={`products-content ${activeTab === idx ? "active" : ""}`}
              >
                {/* LEFT */}
                <div className="tabw3-left">
                  <h4 className="head">{content.title}</h4>
                  <p>{content.text}</p>

                  <ul className="w3l-right-book">
                    {content.list.map((item, i) => (
                      <li key={i}>
                        <span className="fa fa-check"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT */}
                <div className="tabw3-right">
                  <img src={content.image} alt={content.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default FleckTabs;