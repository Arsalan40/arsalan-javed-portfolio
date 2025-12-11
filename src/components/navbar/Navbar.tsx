"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NavButton } from "./NavButton";
import { MobileMenu } from "./MobileMenu";
import Container from "../Container";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#automations", label: "Automations" },
  // { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const activeSection = useActiveSection();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[rgba(13,13,13,0.6)] backdrop-blur-md border-b border-white/8"
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-none group">
            <div className="flex items-center gap-2">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center"
              >
                <span className="text-xl font-black text-black">AJ</span>
              </motion.div>
              <div className="flex flex-col leading-none">
                <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent uppercase">
                  Arsalan Javed
                </span>
                <span className="text-[10px] text-gray-500 tracking-wider uppercase">
                  Business Analyst
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavButton
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={activeSection === item.href.replace("#", "")}
              />
            ))}
          </nav>

          {/* Mobile Menu */}
          <MobileMenu navItems={navItems} activeSection={activeSection} />
        </div>
      </Container>
    </motion.header>
  );
}
