import React, { useState, useEffect } from "react";
import Testimonial from "../common/Testimonials.jsx";
import { defaultTestimonials } from "../../data/testimonials";

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("testimonials")) || [];
    setTestimonials([...defaultTestimonials, ...stored]);
  }, []);

  return (
    <div style={{ marginTop: "160px" }}>
      <h1 className="text-center py-3">Testimonials</h1>
      <Testimonial testimonials={testimonials} />
    </div>
  );
};

export default TestimonialsPage;