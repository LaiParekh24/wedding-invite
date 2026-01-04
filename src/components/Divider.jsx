import React from 'react';
import { motion } from 'framer-motion';

const Divider = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="divider"
    >
      <div className="line"></div>
      <motion.div 
        animate={{ 
          rotate: [0, 10, -10, 0],
          y: [0, -5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="shell-icon"
      >
        🐚
      </motion.div>
      <div className="line"></div>
    </motion.div>
  );
};

export default Divider;
