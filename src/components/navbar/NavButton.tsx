"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";

interface NavButtonProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  isMobile?: boolean;
}

export function NavButton({ href, label, isActive, onClick, isMobile = false }: NavButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      const navHeight = 80; // Navbar height offset
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    onClick?.();
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative rounded-lg font-medium transition-all duration-300",
        isMobile
          ? "w-full text-left px-5 py-3 text-base"
          : "px-4 py-2 text-sm",
        isActive
          ? "border border-primary text-primary backdrop-brightness-125 shadow-[0_0_15px_rgba(0,229,255,0.3)]"
          : "border border-transparent text-white/70 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_10px_rgba(0,229,255,0.2)]"
      )}
    >
      {label}
    </motion.button>
  );
}
