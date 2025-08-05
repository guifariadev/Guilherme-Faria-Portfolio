import MarqueeItem from "./MarqueeItemTechs";
import { FaReact, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiFigma } from "react-icons/si";

const upper = [
  <SiNextdotjs className="size-12 text-white" title="Next.js" />,
  <SiTypescript className="size-12 text-blue-600" title="Typescript" />,
  <FaReact className="size-12 text-blue-500" title="React" />,
  <SiTailwindcss className="size-12 text-blue-400" title="TailwindCSS" />,
  <FaGitAlt className="size-12 text-orange-500" title="Git" />,
];

const lower = [
  <SiJavascript className="size-12 text-yellow-500" title="JavaScript" />,
  <FaNodeJs className="size-12 text-green-600" title="Node.js" />,
  <SiHtml5 className="size-12 text-orange-600" title="HTML" />,
  <FaCss3Alt className="size-12 text-blue-600" title="CSS" />,
  <SiFigma className="size-12 text-pink-500" title="Figma" />,
];

const MarqueeTechs = () => {
  return (
    <div className="container m-auto space-y-10">
      <MarqueeItem images={upper} from={0} to={"-100%"} />
      <MarqueeItem images={lower} from={"-100%"} to={0} />
    </div>
  );
};

export default MarqueeTechs;
