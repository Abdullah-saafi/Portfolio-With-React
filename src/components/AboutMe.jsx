import { useState } from "react";
import { FaLocationArrow, FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const AboutMe = () => {
  const lineH = [
    "I'm Abdullah a Full Stack Developer crafting fast scalable, and immersive digital experiences that merge creativity with engineering precision."
  ];
  const lines = [
    "Full-stack developer building responsive, user-friendly web applications with React, Node.js, and JavaScript. Skilled in UI / UX, Tailwind, animations, GitHub, Postman, and Adobe Photoshop, constantly learning new technologies."
  ];

  const [hoveredWord, setHoveredWord] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xOffset = (e.clientX - rect.left - rect.width / 2) / 5;
    const yOffset = (e.clientY - rect.top - rect.height / 2) / 5;
    setOffset({ x: xOffset, y: yOffset });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
    setIsButtonHovered(false);
  };

  const handleMouseEnter = () => {
    setIsButtonHovered(true);
  };

  const navWordEff = (word, wordIndex) => {
    if (typeof word === "string") {
      return word.split("").map((item, i) => (
        <motion.span
          key={i}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: hoveredWord === wordIndex ? [-10, 0] : 0,
            opacity: 1,
          }}
          transition={{ delay: i * 0.05 }}
        >
          {item}
        </motion.span>
      ));
    }
    return word; // For icons
  };

  return (
    <div className="relative scondBg text-white flex justify-center  w-full [clip-path:ellipse(100%_90%_at_50%_100%)] border-b-1 border-rgb(231,231,231) my-2"
    >
      <div className="content flex flex-col items-center   pt-10 md:pt-32 sm:w-[80%] md:w-[60%] justify-center text-center mt-[4rem] mb-6 sm:mb-10">
        {/* Heading */}
        <div className="TExt mb-15 px-2 mt-10">
          {lineH.map((line, index) => (
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              className="text-[5vmin] md:text-[5vmin]  "
            >
              {line}
            </motion.h1>
          ))}
        </div>

        {/* Description Lines */}
        {lines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="text-[2vmin] md:text-[3vmin] px-4"
          >
            {line}
          </motion.p>
        ))}

        {/* Scroll-trigger wrapper for button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >

          <motion.button
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            animate={{ x: offset.x, y: offset.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center  my-10 sm:mb-30 "
          >
            <motion.div
              animate={{
                backgroundColor: isButtonHovered ? "rgb(231,231,231)" : ""
              }}
              transition={{ duration: 0.3 }}
              className="px-8 py-4 mainBg scondTxt rounded-4xl cursor-pointer flex items-center gap-px font-bold "
            >
              <a href="">{navWordEff("About  me", 0)}</a>
            </motion.div>
            <motion.div
              animate={{
                backgroundColor: isButtonHovered ? "rgb(231,231,231)" : ""
              }}
              transition={{ duration: 0.3 }}
              className="w-14 h-14 mainBg scondTxt rounded-full cursor-pointer flex items-center justify-center text-[2rem]"
            >
              <a href=""> {navWordEff(<FaLocationArrow />, 1)}</a>
            </motion.div>
          </motion.button>
        </motion.div>
        <div className="w-full mt-[3rem] mb-6 primeTxt text-[2.5vmin]  sm:text-[1.5vmin] px-4">
          <ul className=" flex  justify-between">
            <li className="flex items-center "><span className="mr-1"><FaArrowDown /></span>  Scroll  to Explore</li>
            <li >
              My Short Story</li>
          </ul>
        </div>
      </div >
    </div >
  );
};

export default AboutMe;