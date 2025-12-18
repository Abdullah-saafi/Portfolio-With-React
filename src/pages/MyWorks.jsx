import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import MovingbtnEff from "../components/MovingBtnEff";
import { NavLink } from "react-router-dom";


const MyWorks = () => {
  const cardsData = [
    { id: 1, title: "Educational", desc: "Next.js & React powerful combination", img: "/imgs/BaitusslamWeb.png", link: "https://baitussalam-website-using-react.vercel.app/" },
    { id: 2, title: "Services", desc: "React powerful combination", img: "/imgs/Helnurzor.png", link: "https://hel-nou-zur.vercel.app/" },
    { id: 3, title: "Services", desc: "Complete robust Design System", img: "/imgs/AcRepairWeb.png", link: "https://acrepairserviceswebsite.vercel.app/" },
    { id: 4, title: "Professional", desc: "Modern E-commerce Solutions", img: "/imgs/currencyConverter.png", link: "https://realtime-currency-converter-js-app-virid.vercel.app/" },
    { id: 5, title: "Personal", desc: "Interactive User Dashboards", img: "/imgs/Portfolio.png", link: "" },
  ];

  const textContainerVariants = {
    rest: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    hover: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };

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

  const handleCardClick = (card, e) => {
    e.preventDefault();
    if (card.link && card.link.trim() !== "") {
      window.open(card.link, "_blank");
    }
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
          <div
            key={card.id}
            onClick={(e) => handleCardClick(card, e)}
            className="block"
          >
            <motion.div
              className="relative h-[25rem] sm:h-[35rem] w-full overflow-hidden cursor-pointer rounded-xl group"
              initial="rest"
              whileHover="hover"
            >
              <div className="absolute top-4 left-4 z-30 mainBg opacity-70 px-3 py-1 rounded-full text-sm text-gray-800 font-medium shadow-sm">
                {card.title}
              </div>

              <img
                src={card.img}
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/60 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <motion.div
                className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center z-20"
                variants={textContainerVariants}
              >
                <h3 className="text-2xl md:text-3xl font-bold mainTxt flex flex-wrap justify-center gap-[0.4rem]">
                  {card.desc.split(" ").map((word, i) => (
                    <motion.span key={i} variants={wordVariants}>
                      {word}
                    </motion.span>
                  ))}
                </h3>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;