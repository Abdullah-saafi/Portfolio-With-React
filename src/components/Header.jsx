import { motion, } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { IoLogoLinkedin, } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";

import { FaGithub } from "react-icons/fa6";


const Header = () => {

  const noShake = {
    rotate: [0, 0, 0, 0],
    scale: [1, 1, 1, 1],

  }
  const shake = {
    rotate: [0, -10, 10, -10, 0],
    scale: [1, 1.5, 1,],
  };



  return (
    <div className="Header primeBg h-screen overflow-hidden  ">

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