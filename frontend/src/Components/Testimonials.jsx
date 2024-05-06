// Testimonials for Homepage
import TestimonialCard from "../Utils/TestimonialCard.jsx";
import testimonialdata from "../Utils/testimonialsdata.js";

import { useRef } from "react";

const Testimonials = () => {
  //   use this one to scroll the container holding the cards
  const containerRef = useRef(null);

  //   Create functions to handle scroll of the testimonial carousels
  const handleScrollLeft = () => {
    containerRef.current.scrollLeft -= 400;
  };

  const handleScrollRight = () => {
    containerRef.current.scrollLeft += 400;
  };
  //
  return (
    <div className="max-w-screen-xl w-full text-center mt-6 mb-4 bg-slate-200 p-5 sm:p-8 dark:bg-transparent">
      <p className="text-xs text-[#212221] dark:text-darkTer">
        CLIENT TESTIMONIAL
      </p>
      <h2 className="text-4xl font-extrabold text-[#00B207]">
        What Our Clients Say
      </h2>

      {/* Section holding the Testimonial cards */}
      <section
        className="flex gap-5 mt-4 overflow-x-scroll flex-nowrap relative"
        id="featured-container-2"
        ref={containerRef}
      >
        {testimonialdata.map((testi, idx) => (
          <TestimonialCard
            key={idx}
            message={testi.message}
            pictureUrl={testi.pictureUrl}
            name={testi.name}
            role={testi.role}
            reviewStars={testi.reviewStars}
          />
        ))}
      </section>
      <div className="flex gap-5 justify-center p-1 mt-2">
        <img
          src="left.png"
          alt="Left"
          className=" rotate-180 cursor-pointer hover:scale-110 transition ease-in"
          onClick={handleScrollLeft}
        />
        <img
          src="right.png"
          alt="Right"
          className=" cursor-pointer hover:scale-110 transition ease-in"
          onClick={handleScrollRight}
        />
      </div>
    </div>
  );
};

export default Testimonials;
