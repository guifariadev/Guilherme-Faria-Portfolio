import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { FaArrowDown, FaArrowRight, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ButtonGoBack from "./ButtonGoBack";
import Project1 from "../assets/images/img1.png"
import Project2 from "../assets/images/img2.png"
import Project3 from "../assets/images/img3.png"


const ScrollAnimation = () => {
  const navigate = useNavigate();
  const BackMainPage = () => {
    navigate("/");
  }
  return (
    
    <section className="">
       <div onClick={BackMainPage} >
         <ButtonGoBack />
       </div>
      <div className="flex mt-10 space-y-10 flex-col items-center justify-center">
        <h1 className="text-5xl text-white md:text-7xl xl:text-8xl">
          MY WORKS
        </h1>
        
        <div className="flex flex-col items-center space-y-2">
          <p className="text-white">Scroll down </p>
          <p className="text-white"> <FaArrowDown /> </p>
        </div>
      </div>
      <HorizontalScrollCarousel />
      
    </section>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative size-[300px] lg:size-[500px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="w-full absolute bottom-4 flex items-center justify-center space-x-4">
        <a target="_blank" href= {card.demoLink} > 
          <button className="flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 rounded-xl text-base font-semibold transition-all duration-300 shadow-md hover:scale-105">
            Demo <FaArrowRight className="text-lg" />
          </button> 
        </a>
        <a target="_blank" href= {card.sourceCodeLink} >  
          <button className="flex items-center gap-2 px-6 py-3 text-white bg-gray-900 hover:bg-gray-800 rounded-xl text-base font-semibold transition-all duration-300 shadow-md hover:scale-105">
          <FaGithub className="text-xl" /> Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ScrollAnimation;

const cards = [
  {
    url: Project1,
    id: 1,
    demoLink: "https://www.youtube.com/",
    sourceCodeLink: "https://github.com/",
  },
  {
    url: Project2,
    id: 2,
    demoLink: "https://www.youtube.com/",
    sourceCodeLink: "https://github.com/",
  },
  {
    url: Project3,
    id: 3,
    demoLink: "https://www.youtube.com/",
    sourceCodeLink: "https://github.com/",
  },
  {
    url: "/imgs/abstract/4.jpg",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    id: 7,
  },
];