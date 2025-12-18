import { useState, useEffect } from "react";
import { easeInOut, motion, scale, AnimatePresence } from "framer-motion";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [hoveredWord, setHoveredWord] = useState(null);
  const [menuIcon, setMenuIcon] = useState(true);
  const [sideBar, setSideBar] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(false);

  const navLinks = [
    { path: "/", lable: "Home" },
    { path: "/about-me", lable: "About" },
    { path: "/works", lable: "Works" },
    { path: "/contact", lable: "Contact" },
  ];



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowMenuIcon(true);
      } else {
        setShowMenuIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuIcon = () => {
    setSideBar(true);
    setMenuIcon(false);
  };

  const handleCloseIcon = () => {
    setSideBar(false);
    setMenuIcon(true);
  };

  const scrollBtn = () => {
    setSideBar(true);
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
              opacity: 1,
            }}
            transition={{
              delay: i * 0.05,
            }}
            style={{
              display: "inline-block",
            }}
          >
            {item}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <div className="Maincontent">
      <div className="Navbar flex pl-5 sm:pl-10 pr-10 md:pr-20 py-10 justify-between items-center z-10 relative">
        {showMenuIcon && (
          <div className={`
          fixed right-2  md:right-15 z-30 
          h-15 w-15 rounded-full 
          flex justify-center items-center 
          text-4xl bg-gray-300 text-black 
          shadow-lg
          transition-all duration-300 ease-in-out
        `}>
            <button onClick={scrollBtn}>
              <HiOutlineMenuAlt1 />
            </button>
          </div>
        )}
        <div className="logo  ">
          <NavLink to="/">
            <img
              className="h-12"
              src="/imgs/Adobe Express - file.png"
              alt="Logo"
            />
          </NavLink>
        </div>
        <nav className=" hidden sm:block">
          <ul>
            {navLinks.map((item, index) => (
              <li key={index} className={`inline-block cursor-pointer gap-4 px-2 `}>
                <NavLink to={item.path}>
                  {navWordEff(item.lable, index)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {menuIcon && (
          <div className="menuIcon sm:hidden text-4xl">
            <p>
              <IoIosMenu onClick={handleMenuIcon} />{" "}
            </p>
          </div>
        )}
      </div>
      <AnimatePresence>
        {sideBar && (
          <motion.div
            key="circleSidebar"
            initial={{ clipPath: "circle(0% at 90% 5%)" }}
            animate={{ clipPath: "circle(150% at 90% 5%)" }}
            exit={{ clipPath: "circle(0% at 90% 5%)" }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            className="sideBar   h-screen w-[90%] sm:w-[60%] md:w-[40%]  z-30  fixed right-0 top-0 scondBg primeTxt p-12 "
          >
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.4,
              }}
              className="flex  flex-col text-5xl  font-bold border-b border-b-[rgb(231,231,231) pb-[45%]"
            >
              <li className="self-end mb-15 hover:rotate-90 transition-all duration-300">
                <IoMdClose onClick={handleCloseIcon} />
              </li>
              {navLinks.map((item, index) => (
                <li key={index} className="inline-block cursor-pointer py-5">
                  <NavLink to={item.path} onClick={handleCloseIcon}>
                    {navWordEff(item.lable, index)}
                  </NavLink>
                </li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 1,
              }}
              className="sideBarContacts "
            >
              <p className=" text-gray-400 my-3">SOCIALS</p>
              <ul className="flex gap-2 text-1xl">
                <li>
                  <a href="">Linkedln</a>
                </li>
                <li>
                  <a href="">WhatsApp</a>
                </li>
                <li>
                  <a href="">Email</a>
                </li>
                <li>
                  <a href="">Github</a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;