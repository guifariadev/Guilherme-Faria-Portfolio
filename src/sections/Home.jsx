import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";
import AutoScrollButton from "../components/AutoScrollButton";
import BgVideo from "../assets/video/background-home.mp4";
import cv from "../assets/cv/curriculum-vitae.pdf";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // video speed
    }
  }, []);

  return (
    <section id="home" className="relative h-screen">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src={BgVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-60"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,rgba(76,115,170,0.3),rgba(255,255,255,0))]"></div>

      {/* Content */}
      <div className="relative flex max-lg:flex-col justify-center max-lg:space-y-8 text-center items-center h-full">
        <div className="flex flex-col space-y-4 lg:space-y-6 xl:space-y-8">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white font-bold text-3xl md:text-5xl xl:text-7xl mx-[10vw] sm:mx-[19vw]"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-sky-900">
              Frontend
            </span>{" "}
            developer, tech enthusiast{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-900">
              and
            </span>{" "}
            a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-purple-900">
              gamer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="text-xs md:text-base xl:text-xl mx-[10vw] font-PoppinsItalic text-gray-100"
          >
            Hi, I'm Guilherme Faria. Web developer turning code into experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            className="flex space-x-10 justify-center"
          >
            <a
              href= {cv}
              target="_blank"
              download
              aria-label="Download Curriculum Vitae"
              title="Download Curriculum Vitae"
              className="mt-8"
            >
              <button className="text-xs md:text-base px-5 py-2 lg:px-6 lg:py-3 items-center flex rounded-md gap-2 bg-gray-300 transition-all duration-300">
                <MdOutlineFileDownload /> Resume
              </button>
            </a>
            <a href="#contact" className="mt-8">
              <button className="text-xs md:text-base px-7 py-2 lg:px-9 lg:py-3 rounded-md border text-white hover:text-black hover:bg-gray-300 transition-all duration-500 ">
                Let's talk
              </button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Button */}
      <div className="relative">
        <AutoScrollButton />
      </div>
    </section>
  );
};

export default Home;
