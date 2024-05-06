// Testimonials for Homepage
import TeamMember from "../Utils/TeamMember.jsx";
import teammembersdata from "../Utils/teammembersdata.js";

import { useRef } from "react";

const AboutTeam = () => {
  //   use this one to scroll the container holding the cards
  const teamContainerRef = useRef(null);

  //   Create functions to handle scroll of the testimonial carousels
  const handleScrollLeft = () => {
    teamContainerRef.current.scrollLeft -= 200;
  };

  const handleScrollRight = () => {
    teamContainerRef.current.scrollLeft += 200;
  };
  //
  return (
    <div className="max-w-screen-xl w-full text-center mt-6 mb-4 bg-slate-200 p-5 sm:p-8 dark:bg-darkSec">
      <p className="text-xs text-[#212221] dark:text-darkTer">TEAM</p>
      <h2 className="text-xl md:text-4xl font-extrabold text-[#00B207]">
        Meet Our Team
      </h2>

      {/* Section holding the Testimonial cards */}
      <section
        className="flex gap-5 mt-4 overflow-x-scroll flex-nowrap md:justify-center w-full"
        id="featured-container-2"
        ref={teamContainerRef}
      >
        {teammembersdata.map((testi, idx) => (
          <TeamMember
            key={idx}
            name={testi.name}
            imgUrl={testi.imgUrl}
            title={testi.title}
            facebook={testi.facebook}
            twitter={testi.twitter}
            instagram={testi.instagram}
            pinterest={testi.pinterest}
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

export default AboutTeam;
