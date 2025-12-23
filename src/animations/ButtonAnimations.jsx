import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const BtnAnima = ({ link, title, Icon }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [hoveredWord, setHoveredWord] = useState(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xOffset = (e.clientX - rect.left - rect.width / 5) / 10;
    const yOffset = (e.clientY - rect.top - rect.height / 5) / 10;
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
    return content.split("").map((item, i) => (
      <motion.span
        key={i}
        initial={{ y: 0, opacity: 10 }}
        animate={{
          y: hoveredWord === 0 ? [-10, 0] : 0,
          opacity: 1,
        }}
        transition={{ delay: i * 0.01 }}
        className="inline-block"
      >
        {item}
      </motion.span>
    ));
  };

  return (
    <div className="py-20">
      <NavLink to={link}>
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          animate={{ x: offset.x, y: offset.y }}
          transition={{ type: "spring", stiffness: 100, damping: 2 }}
          className="flex items-center my-2 sm:my-10 sm:mb-30 group z-10 relative"
        >
          <div className="flex items-center gap-1 cursor-pointer text-black">
            <motion.div
              animate={{
                backgroundColor: isButtonHovered ? "rgb(231,231,231)" : "",
              }}
              transition={{ duration: 0.3 }}
              className="px-8 py-4 mainBg rounded-4xl flex items-center font-bold border border-transparent"
            >
              {letterAnim(title)}
            </motion.div>

            <motion.div
              animate={{
                backgroundColor: isButtonHovered ? "rgb(231,231,231)" : "",
              }}
              transition={{ duration: 0.3 }}
              className="w-14 h-14 mainBg rounded-full flex items-center justify-center text-2xl ml-1"
            >
              <motion.span
                initial={{ y: 0, opacity: 10 }}
                animate={{
                  y: hoveredWord === 0 ? [-10, 0] : 0,
                  opacity: 1,
                }}
                transition={{ delay: 1 * 0.05 }}
                className="inline-block"
              >
                <Icon />
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </NavLink>
    </div>
  );
};

export default BtnAnima;
