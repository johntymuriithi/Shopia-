//  Feature Component for Home Page

import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

// eslint-disable-next-line react/prop-types
const Feature = ({ topText, mainText, link, imgLink, children }) => {
  let topColor = topText === "SUMMER SALE" ? "text-black" : "text-white";

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <div
      ref={ref}
      className={`${
        inView && "animate-entry"
      } relative rounded-xl object-cover overflow-hidden`}
    >
      <div className="absolute w-full h-full top-0 left-0 text-center p-2 mt-6 ">
        <p className={`${topColor} text-xs`}>{topText}</p>
        <h2 className={`${topColor} text-4xl sm:text-2xl font-extrabold`}>
          {mainText}
        </h2>
        <div>{children}</div>
        <Link to={link}>
          <input
            type="button"
            value="Shop Now"
            className="p-2 bg-white rounded-xl cursor-pointer mt-4 text-xl sm:text-xs font-bold text-[#1faf24] hover:bg-[#1faf24] hover:text-white transition-colors ease-in duration-300"
          />
        </Link>
      </div>
      <img src={imgLink} alt={topText} />
    </div>
  );
};

export default Feature;
