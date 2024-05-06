// Contact Us Page - Containing a Form to collect details from the user
import { motion } from "framer-motion";
import ContactInformation from "../Components/ContactInformation.jsx";
import MapEmbed from "../Utils/MapEmbed.jsx";
import homeVariant from "../variants/homeVariants.js";

const ContactUs = () => {
  return (
    <motion.div initial={"start"} animate={"end"} variants={homeVariant}>
      <ContactInformation />
      <MapEmbed />
    </motion.div>
  );
};

export default ContactUs;
