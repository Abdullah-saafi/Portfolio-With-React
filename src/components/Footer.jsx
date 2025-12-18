import { motion } from "framer-motion";
import { IoCall, IoMailSharp } from "react-icons/io5";

import MovingbtnEff from "../components/MovingBtnEff";
import { NavLink } from "react-router-dom";


const FlipLink = ({ children, href }) => {

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden uppercase hover:text-gray-500 transition-colors duration-300"
    >
      <div className="relative">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              delay: 0.025 * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
            <span className="absolute left-0 top-full block">{l}</span>
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};


const Footer = () => {
  const navLinks = [
    { path: "/", lable: "Home" },
    { path: "/about-me", lable: "About" },
    { path: "/works", lable: "Works" },
    { path: "/contact", lable: "Contact" },
  ];
  const socialLinks = [
    { path: "mailto:Abdullahsaafipro@gmail.com", lable: "Email" },
    { path: "https://www.linkedin.com/in/abdullah-saafi-641a5a305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", lable: "LINKEDIN" },
    { path: "tel:03132388723", lable: "WHATSAPP" },
    { path: "https://github.com/Abdullah-saafi", lable: "GITHUB" },
  ];

  return (
    <footer className="primeTxt scondBg md:h-screen p-10 flex flex-col justify-between  ">
      <div className="NavLinks md:flex  justify-between text-center md:p-10">
        <div className="NavLinksMain flex flex-col md:flex-row gap-10 md:gap-10">

          <div className="flex flex-col md:gap-4">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-2">
              Services
            </h3>
            <ul className="space-y-3">
              {navLinks.map((items, i) => (
                <li key={i} >
                  <NavLink to={items.path}>
                    <FlipLink >{items.lable}</FlipLink>

                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col md:gap-4">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-2">
              Resources
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((items, i) => (
                <li key={i} >
                  <NavLink to={items.path} target="_blank">
                    <FlipLink >{items.lable}</FlipLink>

                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-2">
              Local Time
            </h3>
            <h3 className="text-xl font-bold">12:45 PM</h3>
          </div>
        </div>

        <div className="Contacts mt-8 ">
          <div className="Btn flex justify-center ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-1 md:gap-6 text-sm"
            >
              <MovingbtnEff
                text="+923132388723"
                icon={<IoCall />}
                link="#about-section"
              />
              <MovingbtnEff
                text="Abdullahsaafipro@gmail.com"
                icon={<IoMailSharp />}
                link="mailto:Abdullahsaafipro@gmail.com"
              />

            </motion.div>
          </div>
        </div>
      </div>

      <div className="primeTxt md:text-[20vmin] text-5xl my-10  text-center justify-self-end ">
        <h1>Abdullah <span className="md:text-[2rem] text-sm ml-[-1rem] md:ml-[-2rem]">Saafi</span> </h1>
      </div>
    </footer>
  );
};

export default Footer;