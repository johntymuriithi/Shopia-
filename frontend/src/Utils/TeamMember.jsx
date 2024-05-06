/* eslint-disable react/prop-types */

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SocialMediaLinks from "./SocialMediaLinks";

const TeamMember = ({
  name,
  title,
  imgUrl,
  facebook,
  instagram,
  pinterest,
  twitter,
}) => {
  return (
    <div className=" min-w-[250px] max-w-[312px]  text-center relative hover:shadow-lg bg-slate-50 overflow dark:bg-darkPry">
      <div className="flex flex-col items-center justify-center w-full h-full opacity-0 hover:opacity-85 transition-opacity ease-in duration-500 cursor-pointer text-xl sm:text-3xl font-extrabold text-white absolute top-0 left-0 z-10 bg-black">
        {/* Social media Links */}
        <SocialMediaLinks
          facebook={facebook}
          twitter={twitter}
          pinterest={pinterest}
          instagram={instagram}
        />
      </div>
      <LazyLoadImage effect="blur" src={imgUrl} alt={name} className="w-full" />
      <p className="font-bold text-slate-800 dark:text-darkTer">{name}</p>
      <p className="text-xs text-slate-700 mb-4 dark:text-darkTer">{title}</p>
    </div>
  );
};

export default TeamMember;

/**
/*   name: "Raymond Reddington",
    title: "CEO/Founder",
    imgUrl: "team1.png",
    facebook: "https://www.linkedin.com/in/stephen-omoregie/",
    instagram: "https://www.linkedin.com/in/stephen-omoregie/",
    pinterest: "https://www.linkedin.com/in/stephen-omoregie/",
    twitter: "https://twitter.com/Cre8steveDev",*/
