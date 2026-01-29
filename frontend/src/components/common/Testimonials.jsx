import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';



const testimonials = [
  {

    name: "Matthew Vicchi",
    position: "Director, Instyle Interiors & Construction",
    content: `I would have absolutely no issues in recommending Fleck Earthmoving in any circumstance for any task at hand, they are led from the front by Josh Shawyer & Jamey Flecknoe themselves, all their staff are as enthusiastic and skilled as I have seen in my 20 years plus of building and developments.`,
  },
  {

    name: "John Stein",
    position: "Director, Hotondo Homes",
    content: `We have been using Fleck Earthmoving for in excess of 20 years from small beginnings to the Company they are today. We have always found them to be honest (a company you can trust), reliable, they do good quality work, well-maintained equipment, and good quality operators. `,
  },
  {

    name: "Daniel Prentice",
    position: "Director, Quantum Construction Pty Ltd.",
    content: `Fleck Earthmoving get on with the job without the nannying that subcontractors seem to expect today. Their team is professional both on and off site, and their service and work ethic is excellent. I have no hesitation in recommending Fleck Earthmoving to a potential client. They are one of the very few contractors who can be trusted when used on hourly rates to look after your interests.`,
  },
  {
    name: "Grant Kearney",
    position: "Project Manager, Landscape Solutions",
    content: `Fleck Earthmoving have all the key values you look for: straightforward, great operators, the correct equipment and really easy to work with. I would not hesitate recommending these guys to anyone who is needing plant and equipment. I would not hesitate recommending these guys to anyone.`,
  },
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="section-5 py-5">
      <div className="container-fluid testimonial-container">
        <div className="section-header text-center mb-5" data-aos="fade-up">
          <span>Testimonials</span>
          <h3 className="section-title">Real Feedback. Real Satisfaction</h3>
          <p>
            Client feedback has played a vital role in enhancing our services <br />
            and delivering consistent customer satisfaction.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 4000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="testimonial-slider"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card" data-aos="zoom-in">
                <p className="testimonial-content">“{item.content}”</p>
                <div className="testimonial-author">
                  <h5 className="name">— {item.name}</h5>
                  <p className="position">{item.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
