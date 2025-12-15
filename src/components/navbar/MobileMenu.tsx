"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavButton } from "./NavButton";
import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  navItems: Array<{ href: string; label: string }>;
  activeSection: string;
}

export function MobileMenu({ navItems, activeSection }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative p-2.5 rounded-xl border transition-all duration-300",
          isOpen
            ? "bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(0,229,255,0.3)]"
            : "bg-white/[0.03] border-white/20 text-white/80 hover:text-primary hover:border-primary/40 hover:bg-white/[0.05] hover:shadow-[0_0_10px_rgba(0,229,255,0.2)]"
        )}
        aria-label="Toggle menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
      </motion.button>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-gradient-to-br from-[#0f0f0f] via-[#0d0d0d] to-[#0a0a0a] border-l border-primary/20 z-50 shadow-2xl shadow-primary/5"
            >
              {/* Close Button */}
              <div className="flex justify-between items-center p-5 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="font-bold text-white tracking-wide">Navigation</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-primary/10 text-white/70 hover:text-primary transition-all duration-300 border border-white/5 hover:border-primary/30"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Navigation Buttons */}
              <nav className="flex flex-col p-5 space-y-2 overflow-y-auto max-h-[calc(100vh-80px)]">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.08,
                      type: "spring",
                      stiffness: 300,
                      damping: 24
                    }}
                  >
                    <NavButton
                      href={item.href}
                      label={item.label}
                      isActive={activeSection === item.href.replace("#", "")}
                      onClick={() => setIsOpen(false)}
                      isMobile
                    />
                  </motion.div>
                ))}
              </nav>

              {/* Decorative Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
