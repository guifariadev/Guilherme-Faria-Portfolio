import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (

    // Motion params to animate the images
    <div className="flex overflow-hidden marquee-gradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return (
            <img
              className="h-72 w-96 object-cover" // Increase the proportional size
              src={image}
              key={index}
              alt={`marquee-item-${index}`}
            />
          );
        })}
      </motion.div>
      
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return (
            <img
              className="h-72 w-96 object-cover" // Increase the proportional size
              src={image}
              key={index}
              alt={`marquee-item-${index}`}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
