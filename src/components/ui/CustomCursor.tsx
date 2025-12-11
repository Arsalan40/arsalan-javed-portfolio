"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isSkillHover, setIsSkillHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth spring animation for cursor movement
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) {
      return () => window.removeEventListener("resize", checkMobile);
    }

    // Hide default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hover over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.style.cursor === "pointer";

      setIsHovering(!!isInteractive);

      // Check for skill badge hover (adjust selector as needed)
      const isSkill =
        target.closest('[data-skill]') ||
        target.closest('.skill-badge') ||
        (target.closest('[class*="skill"]') && target.closest('[class*="badge"]'));
      
      setIsSkillHover(!!isSkill);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", checkMobile);
    };
  }, [cursorX, cursorY, isVisible, isMobile]);

  if (isMobile || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Main Cursor Circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none mix-blend-difference z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? (isSkillHover ? 60 : 40) : 24,
            height: isHovering ? (isSkillHover ? 60 : 40) : 24,
            borderColor: isSkillHover ? "rgba(56,189,248,0.8)" : "rgba(14,165,233,0.8)",
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="rounded-full border-2 backdrop-blur-sm"
          style={{
            boxShadow: isSkillHover
              ? "0 0 20px rgba(56,189,248,0.6)"
              : "0 0 15px rgba(14,165,233,0.5)",
          }}
        />
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 0 : 1,
            backgroundColor: isSkillHover ? "rgba(56,189,248,1)" : "rgba(14,165,233,1)",
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="w-1.5 h-1.5 rounded-full"
        />
      </motion.div>

      {/* Ripple Effect on Skill Hover */}
      {isSkillHover && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-16 h-16 rounded-full border-2 border-secondary"
          />
        </motion.div>
      )}
    </>
  );
}
