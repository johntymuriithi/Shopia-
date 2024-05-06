// Page Holding Information about the Company and possibly about me the developer
import { motion } from "framer-motion";

import AboutOrganic from "../Components/AboutOrganic.jsx";
import AboutFresh from "../Components/AboutFresh.jsx";
import AboutDelivered from "../Components/AboutDelivered.jsx";
import AboutTeam from "../Components/AboutTeam.jsx";
import homeVariant from "../variants/homeVariants.js";

const AboutUs = () => {
  return (
    <motion.div
      initial={"start"}
      animate={"end"}
      variants={homeVariant}
      className="w-full max-w-screen-xl p-6 mx-auto"
    >
      <AboutOrganic />
      <AboutFresh />
      <AboutDelivered />
      <AboutTeam />
    </motion.div>
  );
};

export default AboutUs;
