// Home Page Component Which will house other sub components such as the Hero Section, Featured Section, et al.
import HeroSection from "../Components/HeroSection.jsx";
import DetailsBar from "../Components/DetailsBar.jsx";
import FeaturedDeals from "../Components/FeaturedDeals.jsx";
import ShopByCategories from "../Components/ShopByCategories.jsx";
import FeaturedProducts from "../Components/FeaturedProducts.jsx";
import VideoSection from "../Components/VideoSection.jsx";
import Testimonials from "../Components/Testimonials.jsx";
import homeVariant from "../variants/homeVariants.js";

// Framer Motion package to animate the homepage
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      className="p-6 flex flex-col items-center"
      initial={"start"}
      animate={"end"}
      variants={homeVariant}
    >
      <HeroSection />
      <DetailsBar />
      <ShopByCategories />
      <FeaturedDeals />
      <FeaturedProducts />
      <VideoSection />
      <Testimonials />
    </motion.div>
  );
};

export default HomePage;
