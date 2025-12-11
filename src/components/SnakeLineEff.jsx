import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SnakeLine = () => {
  const containerRef = useRef(null);

  // Track the scroll of the PARENT container or the window
  const { scrollYProgress } = useScroll({
    // Attach to the containerRef if you wrap this in a relative div, 
    // or remove 'target' to track the whole window scroll.
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 600 2000"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M 100 0 C 100 100, 50 200, 200 350 S 450 500, 200 700 S 50 900, 200 1100 S 450 1300, 200 1500 S 100 1700, 200 1900"
          stroke="rgb(212,245,52)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="60 20"
          style={{ pathLength }}
          animate={{ strokeDashoffset: [0, -160] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};

export default SnakeLine;