import { motion } from "framer-motion";
import { useState, useRef } from "react";

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

// --- 2. MagneticButton (New Reusable Component) ---
const MagneticButton = ({ text, href }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Handle the Magnetic Movement
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xOffset = (e.clientX - rect.left - rect.width / 2) / 3; // Divided by 3 for stronger effect
    const yOffset = (e.clientY - rect.top - rect.height / 2) / 3;
    setOffset({ x: xOffset, y: yOffset });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      // Apply the magnetic movement to the button
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="inline-block"
    >
      <motion.div
        // Change background color on hover
        animate={{
          backgroundColor: isHovered ? "rgb(212,245,52)" : "", // Assuming black default, white hover
          borderColor: isHovered ? "rgb(212,245,52)" : "rgb(255,255,255)",
          color: isHovered ? "#000" : "#fff",
        }}
        transition={{ duration: 0.3 }}
        className="px-8 py-4 rounded-full cursor-pointer flex items-center justify-center font-bold border border-transparent hover:border-black"
      >
        {/* Text Animation - Staggered Jump Effect */}
        {text.split("").map((item, i) => (
          <motion.span
            key={i}
            className="inline-block"
            animate={{
              // If hovered, jump up (-5) and back to 0. If not, stay at 0.
              y: isHovered ? [-5, 0] : 0,
            }}
            transition={{
              duration: 0.3,
              delay: i * 0.02, // Stagger delay
              ease: "easeOut",
            }}
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </motion.a >
  );
};

// --- 3. Main Footer Component ---
const Footer = () => {
  return (
    <footer className="primeTxt scondBg md:h-screen p-10 flex flex-col justify-between  ">
      <div className="NavLinks md:flex  justify-between text-center">
        <div className="NavLinksMain flex flex-col md:flex-row gap-10 md:gap-20">

          {/* Services Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-2">
              Services
            </h3>
            <FlipLink href="#">Home</FlipLink>
            <FlipLink href="#">Work</FlipLink>
            <FlipLink href="#">About</FlipLink>
            <FlipLink href="#">Contact</FlipLink>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-2">
              Resources
            </h3>
            <FlipLink href="#">Email</FlipLink>
            <FlipLink href="#">LinkedIn</FlipLink>
            <FlipLink href="#">WhatsApp</FlipLink>
            <FlipLink href="#">Github</FlipLink>
          </div>

          {/* Time Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-2">
              Local Time
            </h3>
            <h3 className="text-xl font-bold">12:45 PM</h3>
          </div>
        </div>

        <div className="Contacts  mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4" // Use gap to separate the buttons
          >
            {/* Button 1: Phone */}
            <MagneticButton
              text="+923132388723"
              href="tel:+923132388723"
            />

            {/* Button 2: Email */}
            <MagneticButton
              text="Abdullahsaafipro@gmail.com"
              href="mailto:Abdullahsaafipro@gmail.com"
            />

          </motion.div>
        </div>
      </div>

      <div className="primeTxt md:text-[20rem] text-5xl my-10  text-center justify-self-end ">
        <h1>Abdullah <span className="md:text-[2rem] text-sm ml-[-1rem] md:ml-[-6rem]">Saafi</span> </h1>
      </div>
    </footer>
  );
};

export default Footer;