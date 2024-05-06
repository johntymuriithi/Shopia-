// FAQ Page
import AccordionFaq from "../Utils/AccordionFaq.jsx";
import { useState } from "react";
import { motion } from "framer-motion";

const FAQs = () => {
  const [showAccordion, setShowAccordion] = useState([
    true,
    false,
    false,
    false,
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="transition-transform ease-in duration-300 sm:flex-row sm:flex max-w-screen-md mx-auto"
    >
      <img
        src="mansecond.png"
        alt="Man Holding Vegetables"
        className="w-full sm:max-w-[350px] self-end"
      />
      <div className=" w-full p-5 flex-col flex justify-center items-center transition-transform ease-in duration-100 ]">
        <h1 className="sm:text-xl text-center sm:text-left text-[#00B207]">
          Welcome! Here are some Frequently Asked Questions from our Esteemed
          Users like yourself.
        </h1>

        {/* Accordions */}
        <AccordionFaq
          title={"What is the Average Delivery Time?"}
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis alias ipsam doloribus laborum quibusdam obcaecati necessitatibus velit omnis ratione dolorem, natus sit quos esse sunt voluptatibus a est repellendus."
          show={showAccordion[0]}
          setShow={setShowAccordion}
          position={0}
        />

        <AccordionFaq
          title={"Can I get a Refund If I cancel an order?"}
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis alias ipsam doloribus laborum quibusdam obcaecati necessitatibus velit omnis ratione dolorem, natus sit quos esse sunt voluptatibus a est repellendus."
          show={showAccordion[1]}
          setShow={setShowAccordion}
          position={1}
        />

        <AccordionFaq
          title={"Which Areas are Products Sourced From?"}
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis alias ipsam doloribus laborum quibusdam obcaecati necessitatibus velit omnis ratione dolorem, natus sit quos esse sunt voluptatibus a est repellendus."
          show={showAccordion[2]}
          setShow={setShowAccordion}
          position={2}
        />

        <AccordionFaq
          title={"Can I Register as a Merchant on the Site?"}
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis alias ipsam doloribus laborum quibusdam obcaecati necessitatibus velit omnis ratione dolorem, natus sit quos esse sunt voluptatibus a est repellendus."
          show={showAccordion[3]}
          setShow={setShowAccordion}
          position={3}
        />
      </div>
    </motion.div>
  );
};

export default FAQs;
