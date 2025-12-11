import { FaLocationArrow, FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import MovingbtnEff from "../components/MovingBtnEff";

const AboutMe = () => {
  const lineH = [
    "I'm Abdullah a Full Stack Developer crafting fast scalable, and immersive digital experiences that merge creativity with engineering precision."
  ];
  const lines = [
    "Full-stack developer building responsive, user-friendly web applications with React, Node.js, and JavaScript. Skilled in UI / UX, Tailwind, animations, GitHub, Postman, and Adobe Photoshop, constantly learning new technologies."
  ];




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
          <MovingbtnEff
            text="About me"
            icon={<FaLocationArrow />}
            link="#about-section"
          />
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