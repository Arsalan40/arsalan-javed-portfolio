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
        className="p-2 rounded-lg border border-white/20 text-white/70 hover:text-primary hover:border-primary/40 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
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
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-[rgba(13,13,13,0.98)] backdrop-blur-xl border-l border-white/10 z-50 shadow-2xl"
            >
              {/* Close Button */}
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <span className="font-semibold text-white">Menu</span>
                <motion.button
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-white/70 hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Navigation Buttons */}
              <nav className="flex flex-col p-6 space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
