import React from 'react';
import { motion } from 'framer-motion';

const AnimatedImage = () => {
  return (
    <motion.img
      src="/c:\Users\HP\OneDrive\Documents\static webpage project\my-static-webpage\'public\'public\images.png'\image.png'" // Replace with your image path
      alt="Animated"
      initial={{ opacity: 0, scale: 0.8 }} // Initial state
      animate={{ opacity: 1, scale: 1 }} // Animate to this state
      exit={{ opacity: 0 }} // Exit state
      transition={{ duration: 0.5 }} // Transition duration
      style={{ width: '300px', height: 'auto' }} // Adjust size as needed
    />
  );
};

export default AnimatedImage;