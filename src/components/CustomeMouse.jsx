import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleMouseDown = () => setIsClick(true);
    const handleMouseUp = () => setIsClick(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 30,
        height: 30,
        borderRadius: "50%",
        border: "2px solid black",
        pointerEvents: "none",
        outline: "2px solid rgb(231,231,231)",
        zIndex: 9999,
      }}
      animate={{
        x: mousePos.x - 10,
        y: mousePos.y - 10,
        scale: isClick ? 0.7 : 1, // shrink on click
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    />
  );
};

export default CustomCursor;
