import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosSend } from "react-icons/io";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  function sendEmail(e) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      setFeedbackMessage({ type: "error", text: "Please fill in all fields." });
      return;
    }
    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };
    //hide all data in .env file for security
    emailjs.send('service_zy5ur06', 'template_fosef8c', templateParams, 'bfAKEMvPJD5SGNfnw').then(
      () => {
        setName("");
        setEmail("");
        setMessage("");
        setFeedbackMessage({ type: "success", text: "Email sent successfully!" });
        setTimeout(() => {
          setFeedbackMessage(null);
        }, 5000);
      },
    );
  }

  return (
    <motion.section 
      id="contact" 
      className="h-full w-full pt-10"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="text-center text-white"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ 
          once: true,
          amount: 0.6
         }}
      >
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold">Get In Touch</h1>
      </motion.div>
      <div className="flex flex-col items-center justify-center my-8 gap-x-10 h-full">
        <motion.div 
          className="border border-gray-800 max-w-[600px] h-full w-3/4 md:w-full rounded-lg p-5 sm:p-10"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <form onSubmit={sendEmail} className="flex flex-col space-y-4 text-white w-full">
            <p className="text-sm">Let's build something amazing together! Feel free to drop me a message.</p>
            <div className="space-y-2">
              <label>Full Name</label>
              <input
                type="text"
                className="w-full h-10 border border-gray-800 bg-transparent rounded-md px-3"
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="space-y-2">
              <label>Email Address</label>
              <input
                type="email"
                className="w-full h-10 border border-gray-800 bg-transparent rounded-md px-3"
                placeholder="johndoe1722@gmail.com"
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
              />
            </div>
            <div className="space-y-2">
              <label>Message</label>
              <textarea
                className="w-full h-28 border border-gray-800 bg-transparent rounded-md p-3"
                placeholder="Write your message here"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-sky-800 hover:bg-sky-900 transition-all duration-300 rounded-md p-2 flex justify-center items-center gap-1"
            >
              Send Message <IoIosSend className="size-5" />
            </button>
            {feedbackMessage && (
              <motion.div
                className={`p-3 text-center text-sm font-medium rounded-md transition-all duration-300 ${
                  feedbackMessage.type === "success" ? "text-green-600" : "text-red-600"
                }`}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {feedbackMessage.text}
              </motion.div>
            )}
          </form>
        </motion.div>
        <motion.div 
          className="flex flex-col justify-center gap-y-6 mt-10"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-white flex gap-2 justify-center items-center">
            <span className="text-sm sm:text-base">Or</span>
          </div>
          <div className="flex text-white items-center justify-center gap-x-6 mb-10 rounded-2xl">
            <a href="https://github.com/guifariadev" target="_blank">
              <FaGithub className="bg-sky-950 size-10 p-2 rounded-lg cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/guilherme-fariadev/" target="_blank">
              <FaLinkedinIn className="bg-sky-800 size-10 p-2 rounded-lg cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/guisouzaspp/" target="_blank">
              <FaInstagram className="bg-gradient-to-bl from-fuchsia-900 to-orange-300 size-10 p-2 rounded-lg cursor-pointer" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
