import { motion, useScroll, useTransform } from "framer-motion";
import { LiaConnectdevelop } from "react-icons/lia";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaWordpress } from "react-icons/fa";
import { GiRapidshareArrow } from "react-icons/gi";
import { HiSun } from "react-icons/hi2";
import { useRef, } from "react";
import SnakeLineEff from "./SnakeLineEff"
import ScrollingTxtEff from "./ScrollingTxtEff";
const cards = [
  {
    number: "01",
    icon: <LiaConnectdevelop />,
    title: "Full Stack Development",
    text: "Building scalable and high-performance web applications using Next.js, React, Node.js, and TypeScript, with robust backend architectures, secure RESTful APIs, and clean code practices.",
  },
  {
    number: "02",
    icon: <AiOutlineAntDesign />,
    title: "UI/UX Design & Frontend",
    text: "Designing modern, responsive interfaces with Figma, Tailwind CSS, and Framer Motion. Creating intuitive experiences with clean design systems and pixel-perfect implementations.",
  },
  {
    number: "03",
    icon: <FaWordpress />,
    title: "WORDPRESS Development",
    text: "From landing pages to full-stack applications.",
  },
  {
    number: "04",
    icon: <GiRapidshareArrow />,
    title: "API & System Architecture",
    text: "Backend developer focused on building reliable APIs, database architectures, and highly optimized server-side logic. Skilled in Node.js, Express, JWT authentication, REST APIs, and database design using MongoDB & PostgreSQL.",
  },
];

const PersonalInfo = () => {
  const imgRef = useRef(null);



  // 2. Track scroll progress for this specific image
  const { scrollYProgress: imgScrollProgress } = useScroll({
    target: imgRef,
    // "start end" = When the top of the image hits the bottom of the screen
    // "center center" = When the center of the image hits the center of the screen
    offset: ["start end", "center center"]
  });

  // 3. Transform values: 
  // At start (0), scale is 0.8. At center (1), scale is 1.
  // Framer Motion automatically "clamps" this, so if you scroll past 1, it stays at 1.
  const imgScale = useTransform(imgScrollProgress, [0, 1], [0.8, 1]);
  const imgOpacity = useTransform(imgScrollProgress, [0, 1], [0, 1]);

  // ... (rest of your snake and text code) ...


  const containerRef = useRef(null);




  return (
    <div
      ref={containerRef}
      className="PersonalInfo relative flex flex-col items-center overflow-hidden"
    >
      {/* Animated Snake Line */}
      {/* Animated Snake Line */}
      <SnakeLineEff />

      {/* Scrolling Text */}
      <div className="prmeBg  font-bold text-[10vmin] md:text-[15vmin] py-5 flex whitespace-nowrap z-10">
        <ScrollingTxtEff
          text="FULL-STACK DEVELOPER UI & UX DESIGNER."
          icon={<HiSun className="ml-[2rem]" />}
          duration={20} // Slower
        />
      </div>

      {/* Main Content */}
      <div className="mainCOntent relative z-10 w-[90%] flex flex-col justify-center">
        {/* Image */}
        <motion.div
          ref={imgRef} // Attach the ref here
          style={{
            scale: imgScale,
            opacity: imgOpacity
          }}
          className="img mt-5 mb-15 flex justify-center"
        >
          <img className="max-w-full h-auto" src="/imgs/myImg.jpg" alt="Profile" loading="lazy" />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="md:flex my-10 gap-8"
        >
          <h1 className="md:w-1/2 text-2xl md:text-3xl font-medium py-6">
            Driving measurable growth and engagement through thoughtful design and engineering.
          </h1>
          <p className="md:w-1/2 text-md md:text-xl font-light py-6 text-gray-600">
            Every product I build starts by understanding user goals and translating them into intuitive, high-performance experiences. From concept to launch, I focus on meaningful results—boosting user engagement, retention, and overall business impact.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="md:flex my-10 gap-8"
        >
          <div className="md:w-1/2 py-10 border-t-2 border-gray-300">
            <p className="text-sm font-medium text-gray-600">YEARS OF EXPERIENCE</p>
            <h2 className="text-7xl font-bold my-5">1+</h2>
          </div>
          <div className="md:w-1/2 py-10 border-t-2 border-gray-300">
            <p className="text-sm font-medium text-gray-600">PROJECTS COMPLETED</p>
            <h2 className="text-7xl font-bold my-5">
              20+ <span className="text-sm font-light">(Continuing)</span>
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="w-[90%] py-20">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="sm:ml-[10%] py-20 text-2xl md:text-4xl leading-relaxed"
        >
          Transforming ideas into exceptional digital <br /> experiences through expertise and innovation
        </motion.h2>

        {/* Services Section */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:ml-30 ">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}


              // ⭐ Hover Animation
              whileHover={{
                x: 10,   // moves 10px to the right
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.2,
              }}

              className="p-5 cursor-pointer flex flex-col border border-black-800"
            >
              <p className="self-end font-light text-gray-500 text-2xl">{item.number}</p>

              <div className="h-18 w-18 rounded-full flex justify-center items-center 
                      text-4xl mainBg my-1">
                {item.icon}
              </div>

              <h1 className="text-[4vmin] border-b border-gray-500 py-5">{item.title}</h1>
              <p className="text-gray-500 py-5">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default PersonalInfo;