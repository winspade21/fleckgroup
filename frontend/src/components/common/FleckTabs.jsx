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
      title: "Delivering dependable earthmoving ...",
      text: "Fleck Group combines decades ...",
      list: [
        "Bulk earthworks and detailed excavation",
        "Site preparation and land clearing",
        "Road construction and upgrades",
        "Drainage, trenching, and infrastructure support",
        "Modern plant hire with skilled operators",
        "Safety-focused project delivery",
      ],
      image: earthmovingImg,
    },
    {
      title: "Building strong foundations ...",
      text: "Our mission is to deliver ...",
      list: [
        "Commitment to safety and compliance",
        "Precision and attention to detail",
        "Transparent communication",
        "On-time, on-budget delivery",
      ],
      image: missionImg,
    },
    {
      title: "Supporting communities ...",
      text: "Every project we undertake ...",
      list: [
        "Environmentally responsible practices",
        "Reliable infrastructure support",
        "Trusted by contractors and developers",
        "Built for long-term performance",
        "Strengthening local communities",
      ],
      image: communityImg,
    },
    {
      title: "Experience, reliability, and capability ...",
      text: "Clients choose Fleck Group ...",
      list: [
        "Decades of industry experience",
        "Skilled and professional operators",
        "Modern, well-maintained fleet",
        "Efficient project management",
        "Proven track record of success",
      ],
      image: plantHireImg,
    },
  ];

  return (
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
  );
};

export default FleckTabs;
