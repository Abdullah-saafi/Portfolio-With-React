import { useState } from "react";
import { motion } from "framer-motion";

const MagneticPillButton = ({ text = "Click Me", icon, link = "#" }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [hoveredWord, setHoveredWord] = useState(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xOffset = (e.clientX - rect.left - rect.width / 2) / 5;
    const yOffset = (e.clientY - rect.top - rect.height / 2) / 5;
    setOffset({ x: xOffset, y: yOffset });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
    setIsButtonHovered(false);
    setHoveredWord(null);
  };

  const handleMouseEnter = () => {
    setIsButtonHovered(true);
    setHoveredWord(0);
  };

  const letterAnim = (content) => {
    if (typeof content === "string") {
      return content.split("").map((item, i) => (
        <motion.span
          key={i}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: hoveredWord === 0 ? [-10, 0] : 0,
            opacity: 1,
          }}
          transition={{ delay: i * 0.05 }}
          className="inline-block scondTxt"
        >
          {item}
        </motion.span>
      ));
    }
    return (
      <motion.span
        initial={{ y: 0, opacity: 0 }}
        animate={{
          y: hoveredWord === 0 ? [-10, 0] : 0,
          opacity: 1,
        }}
        className="scondTxt"
      >
        {content}
      </motion.span>
    );
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex items-center my-2 sm:my-10 sm:mb-30 group z-10 relative"
    >

      <a href={link} className="flex items-center gap-px cursor-pointer">

        <motion.div
          animate={{
            backgroundColor: isButtonHovered ? "rgb(231,231,231)" : "",
            color: isButtonHovered ? "black" : "white"
          }}
          transition={{ duration: 0.3 }}
          className="px-8 py-4 mainBg rounded-4xl flex items-center font-bold border border-transparent"
        >
          {letterAnim(text)}
        </motion.div>

        <motion.div
          animate={{
            backgroundColor: isButtonHovered ? "rgb(231,231,231)" : "",
            color: isButtonHovered ? "black" : "white"
          }}
          transition={{ duration: 0.3 }}
          className="w-14 h-14 mainBg rounded-full flex items-center justify-center text-[2rem] ml-1"
        >
          {letterAnim(icon)}
        </motion.div>
      </a>
    </motion.div>
  );
};

export default MagneticPillButton;