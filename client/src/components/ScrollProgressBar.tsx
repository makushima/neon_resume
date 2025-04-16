import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-green-400 z-50"
      style={{ 
        scaleX: scrollYProgress,
        transformOrigin: "0%",
        boxShadow: "0 0 8px rgba(0, 255, 170, 0.7)"
      }}
    />
  );
};

export default ScrollProgressBar;
