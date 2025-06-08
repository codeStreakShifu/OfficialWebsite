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

  return (
    <>
      {/* Quill Pen Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        animate={{
          x: mousePosition.x - 16,  // Increased offset
          y: mousePosition.y - 16,  // Increased offset
          rotate: -45,
          scale: isHovering ? 1.3 : 1.1  // Increased base and hover scale
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
          mass: 0.5
        }}
      >
        <svg 
          width="64"  // Increased from 48
          height="64" // Increased from 48
          viewBox="0 0 48 48" 
          fill="none" 
          className="drop-shadow-xl"
        >
          {/* Main Quill */}
          <path 
            d="M36 12C36 12 31 9 29.5 6.5C28 4 28 2 28 2C28 2 26.5 3.5 26 5.5C25.5 7.5 26 11 26 11C26 11 23 12 21.5 13.5C20 15 19 18 19 18L12 30L15 31L21 21C21 21 23 20 24.5 20.5C26 21 27 24 27 24C27 24 29 22 30 20.5C31 19 30 16 30 16C30 16 33 15.5 34.5 14C36 12.5 36 12 36 12Z"
            className="stroke-emerald-600 fill-emerald-500/20"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Feather Details */}
          <g className="stroke-emerald-700">
            <path d="M29 7C29 7 30.5 8.5 32 9M27 9C27 9 28.5 10.5 30 11M25 11C25 11 26.5 12.5 28 13M23 13C23 13 24.5 14.5 26 15" 
              strokeWidth="0.75"
              strokeLinecap="round"
            />
          </g>
          {/* Ink Nib */}
          <path
            d="M12 30L15 31L13.5 30.5L12 30Z"
            className="fill-emerald-900"
          />
          {/* Decorative Scrollwork */}
          <path
            d="M38 8C38 8 36 6 35 7C34 8 35 10 36 11C37 12 39 12 40 11C41 10 40 8 38 8Z"
            className="stroke-emerald-500 fill-emerald-400/10"
            strokeWidth="0.5"
          />
        </svg>
      </motion.div>

      {/* Ink Flourish Effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        animate={{
          x: mousePosition.x - 32,  // Increased offset
          y: mousePosition.y - 32,  // Increased offset
          scale: isHovering ? 2.5 : 1,  // Increased scales
          opacity: isHovering ? 0.8 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20
        }}
      >
        <div className="w-16 h-16"> {/* Increased from w-12 h-12 */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Calligraphic Flourish */}
            <path 
              d="M50 10C60 25 65 30 85 35C65 40 60 45 50 60C40 45 35 40 15 35C35 30 40 25 50 10Z" 
              className="fill-emerald-500/20"
            />
            <path 
              d="M50 20C55 30 58 32 70 35C58 38 55 40 50 50C45 40 42 38 30 35C42 32 45 30 50 20Z" 
              className="fill-emerald-600/20"
            />
            {/* Ink Drop */}
            <circle 
              cx="50" 
              cy="35" 
              r="6" 
              className="fill-emerald-700/30" 
            />
          </svg>
        </div>
      </motion.div>

      {/* Ink Trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99997]"
        animate={{
          x: mousePosition.x - 2,  // Adjusted for larger trail
          y: mousePosition.y - 2,  // Adjusted for larger trail
          opacity: isHovering ? 0.5 : 0
        }}
        transition={{
          type: "tween",
          duration: 0.4,
          ease: "easeOut"
        }}
      >
        <div className="w-3 h-3 rounded-full bg-gradient-to-b from-emerald-500/30 to-emerald-600/10 blur-[4px]" /> {/* Increased size and blur */}
      </motion.div>
    </>
  );
};

export default CustomCursor;
