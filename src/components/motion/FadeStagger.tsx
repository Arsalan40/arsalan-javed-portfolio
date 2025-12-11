"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialY?: number;
  duration?: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function FadeStagger({
  children,
  className = "",
  staggerDelay = 0.15,
  initialY = 20,
  duration = 0.5,
}: FadeStaggerProps) {
  const customContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={customContainerVariants}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FadeStaggerItemProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}

export function FadeStaggerItem({
  children,
  className = "",
  delay = 0,
  y = 20,
  duration = 0.5,
}: FadeStaggerItemProps) {
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: y 
    },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1] as any,
      }
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
