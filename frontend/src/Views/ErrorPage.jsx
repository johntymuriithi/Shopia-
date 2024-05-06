// Error Page Component
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <motion.div
      initial={{ x: "90%" }}
      animate={{ x: 0 }}
      exit={{ x: "-130%" }}
      className="w-full max-w-screen-xl flex flex-col items-center text-center mt-5 mx-auto"
    >
      <div className="w-full max-w-lg p-3  h-[260px] sm:h-[300px] relative">
        <img
          src="notfound.png"
          alt="Page Not Found"
          className="w-full absolute bottom-0 left-0 animate-entry"
        />
        <img
          src="plants.png"
          alt="Plants"
          className="w-full absolute top-3 left-0 animate-pulse"
        />
        <img
          src="bubble.png"
          alt="Speech Bubble"
          className="w-1/7 absolute right-16 animate-spin"
        />
      </div>

      <h1 className="text-xl md:text-4xl font-extrabold my-2">
        Oops! Sorry, page not found.
      </h1>
      <p className="w-full max-w-screen-sm mb-4 px-8 text-sm sm:text-base sm:px-0">
        The page/resource you are looking for is not found. Or I think Stephen
        is probably too lazy to implement the feature just yet. Not to worry, he
        is working on his MERN skills with these projects
      </p>
      <Link to="/">
        <input
          type="button"
          value="Back to Home"
          className="p-3 mb-7 bg-[#00B207] rounded-3xl font-extrabold text-white animate-pulse"
        />
      </Link>
    </motion.div>
  );
};

export default ErrorPage;
