import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      setIsHovering(
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('hoverable')
      );
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);

    // Hide the default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      opacity: 1
    },
    hover: {
      scale: 2,
      backgroundColor: "rgba(99, 102, 241, 0.2)",
      mixBlendMode: "difference"
    }
  };
  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50 }}
      >
        <div className="w-2 h-2 bg-indigo-500 rounded-full" />
      </motion.div>

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: 1
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <div className={`w-8 h-8 rounded-full border border-indigo-500 ${isHovering ? 'bg-indigo-500/10' : ''} transition-colors duration-150`} />
      </motion.div>
    </>
  );
};

export default CustomCursor;
