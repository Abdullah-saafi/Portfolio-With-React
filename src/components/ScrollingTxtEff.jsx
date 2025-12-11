import { motion } from "framer-motion";

const ScrollingText = ({
  text = "DEFAULT TEXT",
  icon = null,
  duration = 15,
  className = ""
}) => {
  return (
    <div className={`relative overflow-hidden flex ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        // We render 4 items, but animate to -50%. 
        // This moves exactly 2 items' worth of width, 
        // creating a seamless swap with the next 2 items.
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        }}
        style={{ width: "max-content" }} // Ensures the div is as wide as the text needs
      >
        {/* Render the item 4 times to ensure screens of all sizes are filled */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="relative flex items-center px-[5vmin]">
            <h1 className="relative  prmeBg">
              {/* Main Text */}
              <span className="relative z-10 mr-4">
                {text}
              </span>

              {/* Icon - Positioned based on your previous design */}
              {icon && (
                <span className="absolute   z-0 mainTxt font-bold drop-shadow-[3px_3px_0px_#000] opacity-80 pointer-events-none">
                  {icon}
                </span>
              )}
            </h1>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingText;