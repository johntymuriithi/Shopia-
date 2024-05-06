// Hero Section
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const HeroSection = () => {
  return (
    <div className=" max-w-screen-xl w-full grid grid-cols-3 gap-4 shadow-xl p-3 rounded-xl dark:bg-darkSec">
      <section className="col-span-3 sm:col-span-2 relative">
        {/* Big Featured */}
        <section className="absolute w-full h-full top-0 left-0 rounded-md p-8 sm:p-10 md:p-16 text-white z-10 lg:w-[60%] xl:w-[50%]">
          <p className="text-xs lg:text-xl">HIGH QUALITY FRESH FOODS</p>
          <p className=" text-xl sm:text-4xl lg:text-6xl lg:mb-3 font-extrabold">
            Order Today
          </p>
          <p className="text-xs sm:block hidden">
            Tasty Products for delightful meals.
          </p>

          <Link to="/shop">
            <p className="text-md font-bold mt-4 w-fit rounded-xl text-[#00B207] hover:bg-[#00B207] bg-white p-3 hover:text-white transition-all ease-in-out cursor-pointer">
              Show Now
            </p>
          </Link>
        </section>

        <LazyLoadImage
          // effect="blur"
          src="/banner-big-1.png"
          alt="Home Screen Banner"
          className="w-full"
        />
      </section>
      <aside className="flex col-span-3 sm:col-span-1 sm:flex-col gap-4">
        <section className="relative">
          {/* Primary Aside */}
          <section className="absolute w-full h-full top-0 left-0 rounded-md p-5 text-black cursor-pointer">
            <p className="text-xs">SUMMER SALE</p>
            <p className="text-xl font-extrabold">75% OFF</p>
            <p className="text-xs sm:block hidden">Only Fruits & Veggies</p>

            {/* Add a parameter to this link so you can filter only fruits and veggies */}
            <Link to="/shop">
              <p className="text-xs mt-1 sm:mt-4 w-fit hover:rounded-xl text-[#00B207] hover:bg-[#00B207] hover:p-2 hover:text-white transition-all ease-in-out">
                Show Now
              </p>
            </Link>
          </section>
          <img src="/hero-02.png" alt="Summer Sale" />
        </section>

        {/* Secondary Aside */}
        <section className="relative">
          <section className="absolute w-full h-full top-0 left-0 bg-black opacity-0 hover:opacity-60 transition-opacity ease-out duration-200 rounded-md text-center flex flex-col justify-center cursor-pointer">
            <p className="opacity-100 text-white text-xs">BEST DEAL</p>
            <p className="opacity-100 text-white text-sm md:text-xl font-extrabold">
              Special Products
            </p>
            <p className="opacity-100 text-white text-sm md:text-xl font-extrabold">
              Deal of the Month
            </p>
          </section>
          <img src="/hero-03.png" alt="Special Products Deal" />
        </section>
      </aside>
    </div>
  );
};

export default HeroSection;
