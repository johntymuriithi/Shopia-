// First Card Component Organic Food
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const AboutOrganic = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-2 mb-5">
      {/*  */}
      <div className="w-full sm:p-4 flex flex-col justify-center">
        <h2 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-[#00B207] text-center md:text-left">
          100% Trusted Organic Food Store
        </h2>
        {/*  */}
        <p className="text-xs sm:text-base mt-4 w-[90%] text-center md:text-left mx-auto md:mx-0 dark:text-darkTer">
          Where integrity meets fresh flavor. Explore our 100% transparent
          supply chain and discover food you can feel good about. Know what you
          are feeding your family. Farm-to-table freshness, guaranteed organic
          every step of the way.
        </p>
      </div>
      {/*  */}
      <div className="w-full flex justify-center">
        <LazyLoadImage
          effect="blur"
          src="manfirst.png"
          alt="Organic Food Store"
          className="hover:brightness-110 transition ease-out mx-auto md:mx-0"
        />
      </div>
    </div>
  );
};

export default AboutOrganic;
