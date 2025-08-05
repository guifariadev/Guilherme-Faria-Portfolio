import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex overflow-hidden marquee-gradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((Icon, index) => (
          <div className="mx-4 flex items-center justify-center" key={index}>
            {Icon}
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((Icon, index) => (
          <div className="mx-4 flex items-center justify-center" key={index}>
            {Icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
