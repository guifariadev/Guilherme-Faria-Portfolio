import React from "react";
import { motion } from "framer-motion";

const AutoScrollButton = () => {
  return (
    <div className="absolute bottom-10 w-full flex justify-center items-center">
      <a href="#about">
        <div className="hidden md:w-[35px] md:h-[64px] rounded-3xl border-2 border-gray-200 md:flex justify-center items-start p-2">
          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "Loop" }}
            className="size-3 rounded-full bg-gray-200 mb-1"
          />
        </div>
      </a>
    </div>
  );
};

export default AutoScrollButton;
