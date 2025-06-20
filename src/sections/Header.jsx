import React, { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <motion.header
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1, ease: "easeOut" }}
      className="fixed w-screen flex z-10 bg-transparent">
      <div className="py-4 px-9 flex w-full items-center text-white justify-between">
        {/* Logo */}
        <div className="text-xl lg:text-2xl font-light tracking-widest">
          Faria.
        </div>
        {/* Desktop Navbar */}
        <nav className="hidden sm:flex items-center space-x-11">
          <a href="#home" className="relative group lg:text-md">
            Home
            <div className="absolute w-full h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 transition-all duration-200"></div>
          </a>
          <a href="#about" className="relative group lg:text-md">
            About
            <div className="absolute w-full h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 transition-all duration-200"></div>
          </a>
          <a href="#works" className="relative group lg:text-md">
            Work
            <div className="absolute w-full h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 transition-all duration-200"></div>
          </a>
          <a
            href="#contact"
            className="relative text-black px-5 py-2 lg:text-md rounded-md bg-gray-300 hover:bg-gray-400 transition-all duration-300"
          >
            Let's talk
          </a>
        </nav>
        {/* Mobile Navbar Button */}
        <button
          className="sm:hidden text-white text-3xl z-20"
          onClick={toggleMenu}
        >
          {isOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="sm:hidden bg-[#101624] fixed top-0 left-0 w-full h-[300px] flex flex-col justify-center items-center space-y-6 text-white text-2xl">
          <a href="#home" onClick={() => setIsOpen(false)} >Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} >About</a>
          <a href="#works" onClick={() => setIsOpen(false)} >Work</a>
          <a 
            href="#contact" 
            className="bg-gray-300 text-black w-fit px-6 py-3 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Let's talk
          </a>
        </nav>
      )}
    </motion.header>
  );
};

export default Navbar;
