import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

/**
 * This adds animations with react router
 * @param {*} param0 desctrutures the props param and takes in the children which is all things nested in the component
 * @returns
 */
const LeftFadeAnimation = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default LeftFadeAnimation;
