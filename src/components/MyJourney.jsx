import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SnakeLineEff from "./SnakeLineEff.jsx";

const MyJourney = () => {
  const containerRef = useRef(null);

  // 1. Line Progress: Tracks strictly for the central line filling up
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // 2. Background Progress: Tracks specifically for the color change
  const { scrollYProgress: scrollYProgressBg } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.1"],
  });

  // --- COLOR TRANSFORMATIONS ---
  // Background: White -> Dark Black
  const backgroundColor = useTransform(
    scrollYProgressBg,
    [0, 1],
    ["rgb(231,231,231)", "rgb(15,15,15)"]
  );

  // Text: Dark Gray -> White (Crucial for visibility on dark background)
  const textColor = useTransform(
    scrollYProgressBg,
    [0, 1],
    ["rgb(30,30,30)", "rgb(255,255,255)"]
  );

  const journey = [
    {
      heading: "AI & Animations",
      title: "AI & UX/UI Designer",
      descp:
        "Designing advanced UI/UX experiences powered by AI to make products faster, smarter, and more intuitive.",
      period: "2025 - Present",
    },
    {
      heading: "Full Stack Developer",
      title: "Batissalam Tech Park (PSDC)",
      descp:
        "Designed and developed full-stack applications with React and Node.js, focusing on clean UI and secure APIs.",
      period: "2024 - 2025",
    },
    {
      heading: "SUBENGINEER",
      title: "ANCHOR DEVELOPMENT COMPANY",
      descp:
        "Contributed to internal digital tools by creating responsive interfaces and improving workflow automation.",
      period: "2019 - 2023",
    },
    {
      heading: "SUBENGINEER",
      title: "IFTIKHAR AHMED COMPANY",
      descp:
        "Worked on improving digital workflows and internal documentation systems.",
      period: "2017 - 2019",
    },
    {
      heading: "Diploma of Associate Engineer",
      title: "AL-JADOON INSTITUTE",
      descp:
        "Designed and developed full-stack applications with React and Node.js.",
      period: "2014 - 2017",
    },
    {
      heading: "CEPRO Awarding institution",
      title: "ACI Student Chapter",
      descp:
        "Participated and won the competition of making prototype arch structure that would sustain maxium impact loads.",
      period: "- 2026",
    },
    {
      heading: "Certificate of Appreciation",
      title: "Al-Jadoon Institute of Technology",
      descp:
        "Honored with a ‘Certificate of Appreciation’ by Al-Jadoon Institute of Technology for participation in the ‘Al- Jadoon Technical Exhibition",
      period: "- 2016",
    },
    {
      heading: "Secondary School",
      title: "MENGAL ISLAMIA SCHOOL",
      descp:
        "Completed foundational studies in science building early analytical skills.",
      period: "2012 - 2014",
    },
  ];

  return (
    <motion.div
      ref={containerRef}
      style={{ backgroundColor }}
      className="MainContent relative mx-auto py-40 text-center rounded-4xl overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <SnakeLineEff />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="Heading mb-20 w-full text-center relative z-10"
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight primeTxt">
          Explore my journey and the technologies that define <br /> my craft.
        </h1>
      </motion.div>

      <div className="relative flex flex-col gap-16 px-5 md:px-0 max-w-7xl mx-auto primeTxt">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-[oklch(0.39_0.01_0)]" />

        <motion.div
          style={{
            scaleY: scrollYProgress,
            originY: 0,
          }}
          className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-[rgb(212,245,52)] shadow-[0_0_40px_rgb(212,245,52)] z-0"
        />

        {journey.map((item, i) => {
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                type: "spring",
                stiffness: 50,
              }}
              className={`
                relative z-10 flex flex-col py-10 md:w-[50%] mb-20 md:mb-70 md:pl-0 
                ${isLeft
                  ? "md:self-start md:text-right md:items-end md:pr-14"
                  : "md:self-end md:text-left md:items-start md:pl-14"
                }
                text-left pl-8
              `}
            >
              <h2 className="text-3xl md:text-5xl font-bold ">{item.heading}</h2>
              <h3 className="text-xl md:text-2xl mt-4 opacity-60">
                {item.title}
              </h3>
              <p className="text-lg leading-relaxed opacity-60 my-5">
                {item.descp}
              </p>
              <p className="mt-4 font-mono opacity-60">{item.period}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default MyJourney;