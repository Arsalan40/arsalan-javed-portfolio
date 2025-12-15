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
      whileHover={{ scale: isMobile ? 1.02 : 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative rounded-xl font-medium transition-all duration-300",
        isMobile
          ? "w-full text-left px-6 py-4 text-base"
          : "px-4 py-2 text-sm",
        isActive
          ? isMobile
            ? "bg-gradient-to-r from-primary/20 to-secondary/10 border border-primary text-white shadow-[0_0_20px_rgba(0,229,255,0.25)] backdrop-blur-sm"
            : "border border-primary text-primary backdrop-brightness-125 shadow-[0_0_15px_rgba(0,229,255,0.3)]"
          : isMobile
          ? "bg-white/[0.03] border border-white/10 text-white/90 hover:bg-white/[0.06] hover:border-primary/40 hover:text-white hover:shadow-[0_0_15px_rgba(0,229,255,0.15)]"
          : "border border-transparent text-white/70 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_10px_rgba(0,229,255,0.2)]"
      )}
    >
      <span className={cn(
        "relative z-10",
        isMobile && "flex items-center gap-3"
      )}>
        {isMobile && (
          <span className={cn(
            "w-1.5 h-1.5 rounded-full transition-all duration-300",
            isActive ? "bg-primary shadow-[0_0_8px_rgba(0,229,255,0.6)]" : "bg-white/30"
          )} />
        )}
        {label}
      </span>
    </motion.button>
  );
}
