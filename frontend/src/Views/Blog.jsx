import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.div initial={{ x: "90%" }} animate={{ x: 0 }} exit={{ x: "-130%" }}>
      Blog
    </motion.div>
  );
};

export default Blog;
