"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { ReactNode, useState, MouseEvent } from "react";

interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
}

export default function GlowButton({ 
  children, 
  className, 
  variant = "primary",
  onClick,
  href,
  type = "button",
}: GlowButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const baseClasses = "relative overflow-hidden rounded-lg px-6 py-3 font-medium transition-all duration-300";
  
  const variantClasses = variant === "primary"
    ? "bg-primary text-background hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] hover:scale-105"
    : "bg-transparent border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:scale-105";

  const ButtonComponent = href ? motion.a : motion.button;

  return (
    <ButtonComponent
      href={href}
      onClick={onClick}
      type={!href ? type : undefined}
      className={cn(baseClasses, variantClasses, className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Magnetic hover glow effect */}
      {isHovered && variant === "primary" && (
        <motion.span
          className="absolute w-32 h-32 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
            left: mousePosition.x,
            top: mousePosition.y,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </ButtonComponent>
  );
}
