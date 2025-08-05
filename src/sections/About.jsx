import { motion } from "framer-motion";
import MusicPlayer from "../components/MusicPlayer";
import { FaMapMarkerAlt } from "react-icons/fa";
import MarqueeTechs from "../components/MarqueeTechs";
import NoteImg from "../assets/images/notebook-code.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="h-full w-full flex items-center justify-center lg:p-6"
    >
      {/* about me grid */}
      <div className="grid h-full w-full lg:w-5/6 sm:grid-cols-2 grid-rows-9 lg:grid-cols-3 lg:grid-rows-4 gap-4 p-2 lg:p-20">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 2.2, ease: "easeOut" }} 
          viewport={{ once: true }}
          className="row-span-2 sm:col-span-2 lg:row-span-2 bg-gpattern custom-border rounded-3xl text-white p-8 flex flex-col items-center justify-center gap-y-3"
        >
          <h1 className="text-3xl lg:text-6xl font-extrabold mb-4">About me</h1>
          <p className="text-xs xl:text-base text-center max-w-xl text-gray-300 leading-relaxed">
            I'm a 20-year-old Web Developer who thrives on creativity and challenges. 
            I'm focused, driven, and passionate about crafting innovative and impactful solutions.
          </p>
        </motion.div>
        {/* techs grid */}
        <motion.div 
          initial={{  opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} 
          viewport={{ once: true }}
          className="relative row-span-4 lg:row-span-3 bg-gpattern custom-border rounded-3xl text-white flex flex-col items-center overflow-hidden"
        >
          <h1 className="absolute text-2xl lg:text-4xl text-center font-bold top-16">Techs</h1>
          <MarqueeTechs />
        </motion.div>
        {/* music grid */}
        <motion.div 
          initial={{ opacity: 0, rotateX: 80 }} 
          whileInView={{ opacity: 1, rotateX: 0 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} 
          viewport={{ once: true }}
          className="hidden row-span-4 lg:row-span-2 bg-gpattern custom-border rounded-3xl sm:flex items-center justify-center"
        > 
          <MusicPlayer /> 
        </motion.div>
        {/* notebook grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }} 
          viewport={{ once: true }}
          className="row-span-3 lg:row-span-2 flex flex-col justify-evenly bg-gpattern custom-border rounded-3xl text-white"
        >
          <img src={NoteImg} alt="" className="w-full h-full object-cover rounded-3xl"/>
        </motion.div>
        {/* based in brazil grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }} 
          viewport={{ once: true }}
          className="row-span-3 lg:row-span-1 bg-gpattern custom-border rounded-3xl text-white flex flex-col items-center justify-center p-2"
        >
          <FaMapMarkerAlt className="text-2xl mb-4" />
          <p className="text-center font-medium text-base w-3/4 xl:text-lg">
            Based in Brazil with remote work available.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
