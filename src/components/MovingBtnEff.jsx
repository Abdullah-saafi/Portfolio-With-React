import { useState } from "react";
import { motion } from "framer-motion";


const MagneticPillButton = ({ text = "Click Me", icon, link = "#" }) => {
  // 1. State for Magnetic Movement
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  // 2. State for Text Letter Animation
  const [hoveredWord, setHoveredWord] = useState(null);

  // 3. Mouse Handlers
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
    // Trigger animation for the first word (0) on enter
    setHoveredWord(0);
  };

  // 4. Letter Animation Logic
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
    // If it's an icon/component, return as is (wrapped for consistency)
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
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex items-center my-2 sm:my-10  sm:mb-30 group"
    >
      {/* Text Pill Part */}
      <a href={link} className="flex items-center gap-px">
        <motion.div
          animate={{
            backgroundColor: isButtonHovered ? "rgb(231,231,231)" : "",
            color: isButtonHovered ? "black" : "white" // Assuming scondTxt is blackish
          }}
          transition={{ duration: 0.3 }}
          className="px-8 py-4 mainBg rounded-4xl cursor-pointer flex items-center font-bold border border-transparent"
        >
          {letterAnim(text)}
        </motion.div>

        {/* Icon Circle Part */}
        <motion.div
          animate={{
            backgroundColor: isButtonHovered ? "rgb(231,231,231)" : "",
            color: isButtonHovered ? "black" : "white"
          }}
          transition={{ duration: 0.3 }}
          className="w-14 h-14 mainBg rounded-full cursor-pointer flex items-center justify-center text-[2rem] ml-1"
        >
          {letterAnim(icon)}
        </motion.div>
      </a>
    </motion.button>
  );
};

export default MagneticPillButton;