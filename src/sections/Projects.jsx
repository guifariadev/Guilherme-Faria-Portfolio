import React from "react";
import { motion } from "framer-motion";
import Marquee from "../components/Marquee.jsx";
import ShinyText from "../components/ShinyText.jsx";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="works" className="min-h-screen mt-10 flex flex-col justify-center space-y-10 relative">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ 
          once: true,
          amount: 1
         }}
        className="text-white font-bold text-center text-5xl md:text-7xl xl:text-8xl"
      >
        MY WORKS
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ 
          once: true,
          amount: 0.6
         }}
        className="marquee"
      >
        <Marquee />
      </motion.div>
      
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        onClick={() => navigate("/works")}
        className="px-8 py-5 text-base sm:text-xl bg-gradient-to-t from-gray-900 to-gray-950 hover:scale-105 transition-all ease-in duration-300 rounded-3xl absolute left-1/2 transform -translate-x-1/2 top-3/4 -translate-y-6"
      >
        <ShinyText text="View all works" disabled={false} speed={3} className='custom-class' />
      </motion.button>
    </section>
  );
}

export default Projects;
