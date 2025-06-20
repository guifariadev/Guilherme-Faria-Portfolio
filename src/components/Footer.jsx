import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { PiCopyrightFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className='h-[150px] sm:h-[100px] text-gray-300 border border-transparent border-t-zinc-600'>
      <div className='h-full w-full flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-y-4'>
        <p>© Portfolio by <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400'>Guilherme Faria</span></p>
        <div className='flex items-center justify-center gap-x-3'>
          <a href="https://github.com/guifariadev" className='border rounded-full p-2' target='_blank'> <FaGithub /> </a>
          <a href="https://www.linkedin.com/in/guilherme-fariadev/" className='border rounded-full p-2' target='_blank'> <FaLinkedinIn /> </a>
          <a href="https://www.instagram.com/guisouzaspp/" className='border rounded-full p-2' target='_blank'> <FaInstagram /> </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;