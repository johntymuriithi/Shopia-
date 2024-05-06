// second Card Component Organic Food
import BulletPoints from "../Utils/BulletPoints.jsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const AboutFresh = () => {
  return (
    <div
      id="about-fresh"
      className="w-full flex flex-col md:flex-row gap-2 mb-5 bg-slate-200 dark:bg-darkSec"
    >
      {/*  */}
      <div className="w-full h-full overflow-hidden">
        <LazyLoadImage
          effect="blur"
          src="mansecond.png"
          alt="Organic Food Store"
          className="mx-auto md:mx-0 hover:brightness-110 transition ease-out"
        />
      </div>
      {/*  */}
      <div className="w-full sm:p-4 flex flex-col justify-center dark:text-white">
        <h2 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-[#00B207] text-center md:text-left p-2">
          Quality Fresh Farm Produce Year Round
        </h2>
        {/*  */}
        <p className="text-xs sm:text-base mt-4 w-[90%] text-center md:text-left mx-auto md:mx-0 ">
          Forget long journeys and stale supermarkets. We partner with local
          farmers who prioritize sustainable practices and hand-pick their
          harvest at peak ripeness. The result? Farm-to-table freshness that
          shines in every bite.
        </p>
        {/* Bullet Points */}
        <div className="flex flex-wrap md:flex-row flex-col md:justify-normal justify-center gap-3 mt-4 items-center md:items-start pb-4">
          <BulletPoints
            imgUrl="leaf.png"
            title="100% Organic Food"
            subtext="100% Healthy and Fresh Food"
          />
          <BulletPoints
            imgUrl="headphone.png"
            title="Great Support 24/7"
            subtext="Instant Access to Contact"
          />
          <BulletPoints
            imgUrl="star.png"
            title="Customer Feedback"
            subtext="Hear from Happy Cusomters"
          />
          <BulletPoints
            imgUrl="delivery.png"
            title="100% Organic Food"
            subtext="100% Healthy and Fresh Food"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutFresh;
