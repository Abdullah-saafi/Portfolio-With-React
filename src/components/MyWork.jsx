import { useState } from "react";
import { FaLocationArrow, FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const MyWork = () => {


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

  const cardsData = [
    { id: 1, title: "Educational", desc: "Next.js & React powerful combination", img: "/imgs/BaitusslamWeb.png" },
    { id: 2, title: "Services", desc: "Complete robust Design System", img: "/imgs/AcRepairWeb.png" },
    { id: 3, title: "Professional", desc: "Modern E-commerce Solutions", img: "/imgs/currencyConverter.png" },
    { id: 4, title: "Personal", desc: "Interactive User Dashboards", img: "/imgs/Portfolio.png" },
  ];

  // Animation for the container of words
  const textContainerVariants = {
    rest: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    hover: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };

  // Animation for individual words
  const wordVariants = {
    rest: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
  };




  return (
    <div className="MainContent px-[5%] sm:px-[10%] py-30">
      <div className="heading text-2xl md:text-4xl font-bold my-10">
        <h1>
          Discover my latest work and creative <br /> solutions that bring ideas to life
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cardsData.map((card) => (
          <motion.div
            key={card.id}
            // 'group' allows us to use CSS hover effects for Image and Overlay
            className="relative h-[25rem] sm:h-[35rem] w-full overflow-hidden cursor-pointer rounded-xl group"

            // We still keep initial/whileHover to trigger the TEXT animation
            initial="rest"
            whileHover="hover"
          >
            {/* Title Tag */}
            <div className="absolute top-4 left-4 z-30 mainBg opacity-70 px-3 py-1 rounded-full text-sm text-gray-800 font-medium shadow-sm">
              {card.title}
            </div>

            {/* 1. IMAGE: Using CSS (Tailwind) for Zoom. It's smoother and less buggy. */}
            <img
              src={card.img}
              alt={card.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* 2. OVERLAY: Using CSS (Tailwind) for Opacity. */}
            {/* z-10 ensures it's above the image. group-hover:opacity-100 makes it appear. */}
            <div className="absolute inset-0 bg-black/60 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* 3. TEXT: Using Framer Motion for the stagger effect */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center z-20"
              variants={textContainerVariants}
            >
              <h3 className="text-2xl md:text-3xl font-bold mainTxt flex flex-wrap justify-center gap-[0.4rem]">
                {card.desc.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariants}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </h3>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className=" flex justify-center my-10">
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
                backgroundColor: isButtonHovered ? "rgb(255,255,255)" : ""
              }}
              transition={{ duration: 0.3 }}
              className="px-8 py-4 mainBg scondTxt rounded-4xl cursor-pointer flex items-center gap-px font-bold "
            >
              <a href="">{navWordEff("Explore Projects", 0)}</a>
            </motion.div>
            <motion.div
              animate={{
                backgroundColor: isButtonHovered ? "rgb(255,255,255)" : ""
              }}
              transition={{ duration: 0.3 }}
              className="w-14 h-14 mainBg scondTxt rounded-full cursor-pointer flex items-center justify-center text-[2rem]"
            >
              <a href=""> {navWordEff(<FaLocationArrow />, 1)}</a>
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default MyWork;