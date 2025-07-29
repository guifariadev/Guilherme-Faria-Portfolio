import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaArrowDown, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ButtonGoBack from "../components/ButtonGoBack";
import Project1 from "../assets/images/img1.png"
import Project2 from "../assets/images/img2.png"
import Project3 from "../assets/images/img3.png"
import Project4 from "../assets/images/img4.png"
import Project5 from "../assets/images/img5.png"
import Footer from "../components/Footer";

const WorksPage = () => {
  window.scrollTo(0,0);
  const navigate = useNavigate();

  return (
    <section className="">
       <div onClick={ () => {navigate("/")} } className="hidden md:flex">
         <ButtonGoBack />
       </div>
      <div className="flex mt-10 space-y-10 flex-col items-center">
        <h1 className="text-5xl text-white  md:text-7xl xl:text-8xl">
          MY WORKS
        </h1>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-white">Scroll down </p>
          <motion.p
          animate = {{ y: [0, 10, 0]}}
          transition = {{ duration: 2, repeat: Infinity, repeatType: "Loop"}}
          className="text-white"> <FaArrowDown /> </motion.p>
        </div>
      </div>
      <HorizontalScrollCarousel />
      <Footer />
    </section>
  );
};
// HorizontalCarousel setup
const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [breakpoints, setBreakpoints] = useState(["0%", "-100%"]); // Default
  useEffect(() => {
    const updateBreakpoints = () => {
      if (window.innerWidth >= 1500) {
        // desktop 
        setBreakpoints(["2%", "-52%"]);
      } else if (window.innerWidth >= 1280) {
        // md
        setBreakpoints(["2%", "-60%"]);
      } else if (window.innerWidth >= 640) {
        // small tablet
        setBreakpoints(["2%", "-80%"]);
      } else {
        //mobile
        setBreakpoints(["2%", "-85%"]);
      }
    };
    updateBreakpoints();
    window.addEventListener("resize", updateBreakpoints);
    return () => window.removeEventListener("resize", updateBreakpoints);
  }, []);
  const x = useTransform(scrollYProgress, [0, 1], breakpoints);

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
  className="group relative size-[300px] sm:size-[500px] overflow-hidden bg-neutral-200 rounded-lg"
>
  {/* Badge "Still in development" */}
  {card.development && (
    <span className="absolute top-3 left-3 z-10 bg-yellow-500 text-white text-xs sm:text-sm px-2 py-1 rounded shadow-md pointer-events-none">
      {card.development}
    </span>
  )}

  {/* Background image */}
  <div
    style={{
      backgroundImage: `url(${card.url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
  ></div>

  {/* Buttons */}
  <div className="flex xl:hidden group-hover:flex hover:transition-all hover:duration-700 w-full absolute bottom-4 items-center justify-center space-x-4">
    <a target="_blank" href={card.demoLink}>
      <button className="bg-gradient-to-r from-blue-600 to-indigo-900 text-white flex items-center gap-2 p-3 
      sm:px-6 sm:py-3 text-sm sm:text-base rounded-xl hover:transition-all hover:duration-300 hover:scale-105 ">
        Live Demo <FiExternalLink className="text-base sm:text-lg" />
      </button>
    </a>
    <a target="_blank" href={card.sourceCodeLink}>
      <button className="bg-gray-900 text-white flex gap-2 px-3 py-3 text-sm sm:px-6 sm:py-3 
      sm:text-base rounded-xl hover:transition-all hover:duration-300 hover:scale-105">
        <FaGithub className="text-xl" /> Source Code
      </button>
    </a>
  </div>
</div>

  );
};

export default WorksPage;

const cards = [
  {
    url: Project1,
    id: 1,
    demoLink: "https://essentia-ecommerce.netlify.app/",
    sourceCodeLink: "https://github.com/guifariadev/ecommerce-project",
    development: "Still in development",
  },
  {
    url: Project2,
    id: 2,
    demoLink: "https://bit-elements.vercel.app/",
    sourceCodeLink: "https://github.com/guifariadev/BIT_ELEMENTS",
    development: "Still in development",
  },
  {
    url: Project3,
    id: 3,
    demoLink: "https://state-agency.netlify.app/",
    sourceCodeLink: "https://github.com/guifariadev/realstate-agency",
  },
  {
    url: Project4,
    id: 4,
    demoLink: "https://zenify.netlify.app/",
    sourceCodeLink: "https://github.com/guifariadev/zenify",
  },
  {
    url: Project5,
    id: 5,
    demoLink: "https://thetask-manager.netlify.app/",
    sourceCodeLink: "https://github.com/guifariadev/task-manager",
  },
];