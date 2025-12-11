import { useState } from "react";
import { easeInOut, motion, scale, AnimatePresence } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { IoLogoLinkedin, IoMdClose, IoIosMenu } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";

import { FaGithub } from "react-icons/fa6";


const Header = () => {
  const [hoveredWord, setHoveredWord] = useState(null);
  const [menuIcon, setMenuIcon] = useState(true);
  const [sideBar, setSideBar] = useState(false);

  const handleMenuIcon = () => {
    setSideBar(true);
    setMenuIcon(false)
  }

  const handleCloseIcon = () => {
    setSideBar(false)
    setMenuIcon(true)
  }
  const noShake = {
    rotate: [0, 0, 0, 0],
    scale: [1, 1, 1, 1],

  }
  const shake = {
    rotate: [0, -10, 10, -10, 0],
    scale: [1, 1.5, 1,],
  };


  const navWordEff = (word, wordIndex) => {
    return (
      <span
        onMouseEnter={() => setHoveredWord(wordIndex)}
        onMouseLeave={() => setHoveredWord(null)}
      >
        {word.split("").map((item, i) => (
          <motion.span
            key={i}
            initial={{ y: 10, opacity: 0 }}
            animate={{
              y: hoveredWord === wordIndex ? [-5, 0] : 0,
              opacity: 1
            }}
            transition={{
              delay: i * 0.05
            }}
            style={{
              display: "inline-block"
            }}
          >
            {item}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <div className="Header primeBg h-screen overflow-hidden  ">
      <div className="Navbar flex pl-5 sm:pl-10 pr-10 md:pr-20 py-10 justify-between items-center z-10 relative">
        <div className="logo  " >
          <a href="#"> <img className="h-12" src="/imgs/Adobe Express - file.png" alt="Logo" /></a>
        </div>
        <nav className=" hidden sm:block">
          <ul>
            <li className="inline-block cursor-pointer">{navWordEff("Home", 0)}</li>
            <li className="inline-block cursor-pointer mx-5">{navWordEff("About", 1)}</li>
            <li className="inline-block cursor-pointer">{navWordEff("Works", 2)}</li>
          </ul>
        </nav>
        {menuIcon &&
          <div className="menuIcon sm:hidden text-4xl">
            <p><IoIosMenu onClick={handleMenuIcon} /> </p>
          </div>}
      </div>
      <AnimatePresence>
        {sideBar &&
          <motion.div key="circleSidebar"
            initial={{ clipPath: "circle(0% at 90% 5%)" }}
            animate={{ clipPath: "circle(150% at 90% 5%)" }}
            exit={{ clipPath: "circle(0% at 90% 5%)" }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.8, 0.25, 1]
            }} className="sideBar  md:hidden h-screen sm:w-[80%]  z-30  absolute right-0 top-0 scondBg primeTxt p-12 ">
            <motion.ul initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.4,
              }} className="flex  flex-col text-5xl  font-bold border-b border-b-[rgb(231,231,231) pb-[45%]">
              <li className="self-end mb-15 hover:rotate-90 transition-all duration-300"><IoMdClose onClick={handleCloseIcon} /></li>
              <li className="inline-block cursor-pointer">{navWordEff("Home", 0)}</li>
              <li className="inline-block cursor-pointer  py-5">{navWordEff("About", 1)}</li>
              <li className="inline-block cursor-pointer">{navWordEff("Works", 2)}</li>
              <li className="inline-block cursor-pointer py-5">{navWordEff("Contact", 3)}</li>

            </motion.ul>
            <motion.div iinitial={{ x: 300, opacity: 0 }}  // coming from right
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 1,
              }} className="sideBarContacts ">
              <p className=" text-gray-400 my-3">SOCIALS</p>
              <ul className="flex gap-2 text-1xl">
                <li><a href="">Linkedln</a></li>
                <li><a href="">WhatsApp</a></li>
                <li><a href="">Email</a></li>
                <li><a href="">Github</a></li>

              </ul>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
      <div className="HeroArea flex justify-center w-full h-90vh ">
        <div className="heroVid absolute top-0 left-0 w-full h-full overflow-hidden flex items-center justify-center">
          <video
            className="w-full h-full object-cover"
            src="/videos/glassyObj.3c74f580.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
        < div className="HeroTxt absolute  text-center top-[40%] md:top-[30%] ">
          <p className="text-[6vmin] md:text-3xl text-gray-600 my-2 font-bold" >Hi! I'm Abdullah Saafi</p>
          <h1 className="text-[9vmin] font-bold">Full-Stack Developer <br /> UI & UX Designer</h1>

        </div>

        <div className="scrolText absolute  text-center bottom-[2%] flex items-center text-2xl text-gray-800">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="flex items-center"
          >
            <p>Scroll down </p>
            <span><MdOutlineKeyboardDoubleArrowDown /></span>
          </motion.div>

        </div>
      </div>
      <aside className="Sidebar h-screen w-10 left-5 sm:left-10 relative flex flex-col items-center  justify-around  sm:pb-20">
        <div className="sideBorder relative hidden sm:flex flex-col items-center sm:h-[35%] justify-between ">
          <div className="w-1.5 h-1.5 bg-gray-700 rounded-full relative z-10"></div>
          <div className="w-1.5 h-1.5 bg-gray-700 rounded-full relative z-10"></div>
          <div className="absolute top-0 bottom-0 w-[.6px] bg-gray-700 left-1/2 -translate-x-1/2"></div>
        </div>
        <div className="contact text-2xl mt-70 sm:mt-1  ">
          <motion.div
            initial={noShake}
            whileHover={shake}
            transition={{
              repeat: Infinity,
              repeatType: "twice", duration: 0.6, ease: "easeInOut"
            }}
            className="cursor-pointer"
          >
            <IoLogoLinkedin />
          </motion.div>

          <motion.div
            initial={noShake}
            whileHover={shake}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="cursor-pointer py-3 sm:py-7"
          >
            <IoLogoWhatsapp />
          </motion.div>

          <motion.div
            initial={noShake}
            whileHover={shake}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="cursor-pointer "
          >
            <FaGithub />
          </motion.div>

        </div>
      </aside >
    </div >
  );
};

export default Header;