import React, { useEffect, useRef } from "react";
import "../../assets/css/OurTeam.scss";
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const executives = [
  {
    name: "Danny Kalischer",
    role: "Group CEO",
    image: "https://via.placeholder.com/900x900",
    bio: "Driving Fleck Group’s strategic vision with decades of industry leadership, operational excellence, and a relentless focus on delivering major project success.",
    facebook: "#",
    linkedin: "#",
    email: "mailto:danny@fleckgroup.com.au",
    featured: true,
  },
  {
    name: "Michael McFarlane",
    role: "Group Operations Manager",
    image: "https://via.placeholder.com/600x700",
    facebook: "#",
    linkedin: "#",
    email: "mailto:michael@fleckgroup.com.au",
  },
  {
    name: "Joshua Shawyer",
    role: "Group BDM",
    image: "https://via.placeholder.com/600x700",
    facebook: "#",
    linkedin: "#",
    email: "mailto:josh@fleckgroup.com.au",
  },
  {
    name: "Charli McFarlane",
    role: "Group Hire / Office Manager",
    image: "https://via.placeholder.com/600x700",
    facebook: "#",
    linkedin: "#",
    email: "mailto:charli@fleckgroup.com.au",
  },
];

const OurTeam = () => {

  const sectionRef = useRef();

  useEffect(() => {

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const hiddenEls = sectionRef.current.querySelectorAll(".reveal");

    hiddenEls.forEach(el => observer.observe(el));

  }, []);

  const ceo = executives.find(e => e.featured);
  const team = executives.filter(e => !e.featured);

  return (
    <section className="executive-section" ref={sectionRef}>
      <div className="container">

        <div className="exec-header reveal">
          <h6>LEADERSHIP</h6>
          <h2>Executive Leadership Team</h2>
          <p>
            Proven leadership guiding complex projects with precision,
            accountability, and industry expertise.
          </p>
        </div>

        {/* CEO */}
        <div className="ceo-card reveal">

          <div className="ceo-image">
            <img src={ceo.image} alt={ceo.name}/>
          </div>

          <div className="ceo-content">
            <span className="red-line"></span>

            <h3>{ceo.name}</h3>
            <h5>{ceo.role}</h5>
            <p>{ceo.bio}</p>

            <div className="exec-social">
              <a href={ceo.facebook}><FaFacebookF/></a>
              <a href={ceo.linkedin}><FaLinkedinIn/></a>
              <a href={ceo.email}><FaEnvelope/></a>
            </div>
          </div>

        </div>

        {/* GRID */}
        <div className="exec-grid">
          {team.map((member, i) => (
            <div className="exec-card reveal" key={i}>

              <img src={member.image} alt={member.name}/>
              <div className="exec-overlay"/>

              <div className="exec-info">
                <h4>{member.name}</h4>
                <span>{member.role}</span>

                <div className="exec-social">
                  <a href={member.facebook}><FaFacebookF/></a>
                  <a href={member.linkedin}><FaLinkedinIn/></a>
                  <a href={member.email}><FaEnvelope/></a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTeam;
