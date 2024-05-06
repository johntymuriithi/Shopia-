// second Card Component Organic Food
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import {useAnimation, motion} from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutDelivered = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  //
  return (
    <div
      className={`${
        inView && "animate-entry"
      } w-full flex flex-col md:flex-row gap-2 -mb-5`}
      ref={ref}
    >
      {/*  */}
      <div className="w-full sm:p-4 flex flex-col justify-center">
        <h2 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-[#00B207] text-center md:text-left">
          We Deliver, You Enjoy Your Order
        </h2>
        {/*  */}
        <p className="text-xs sm:text-base mt-4 w-[90%] text-center md:text-left mx-auto md:mx-0 dark:text-darkTer">
          Ordering food should not be a chore. With our user-friendly interface
          and speedy delivery, satisfying your cravings is just a few taps away.
          Browse our extensive menu, place your order, and get ready to indulge.
        </p>
      </div>
      {/*  */}
      <div className="w-full">
        <LazyLoadImage
          effect="blur"
          src="manthird.png"
          alt="Organic Food Store"
          className=" pl-8 hover:brightness-110 transition ease-out"
        />
      </div>
    </div>
  );
};

export default AboutDelivered;
