"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import GlowButton from "@/components/ui/GlowButton";
import Typewriter from "@/components/animations/Typewriter";
import FadeStagger, { FadeStaggerItem } from "@/components/motion/FadeStagger";
import HeroBackground from "@/components/backgrounds/HeroBackground";

const roles = [
  "Business Analyst",
  "Project Manager",
  "Automation Expert",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Background */}
      <HeroBackground />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center py-20 space-y-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">
              Available for Projects
            </span>
          </motion.div>

          {/* Main Heading with Letter Spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em]">
              <span className="block text-white/90">
                Meet the Expert
              </span>
              <span className="block mt-2 min-h-[1.2em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="inline-block whitespace-nowrap bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-300 max-w-5xl leading-relaxed"
          >
            Transforming Business Processes Through Strategic Analysis & Automation
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed"
          >
            I specialize in bridging the gap between business vision and technical execution—ensuring
            seamless workflows, optimized processes, and data-driven decision-making that drives growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full font-semibold text-black overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.6)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start A Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.a>
            <motion.a
              href="#automations"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-transparent border-2 border-primary/50 rounded-full font-semibold text-primary overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-[0_0_25px_rgba(14,165,233,0.4)] hover:bg-primary/5"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.a>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 md:gap-16 pt-12 max-w-4xl w-full"
          >
            <div className="space-y-2">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
                20<span className="text-secondary">+</span>
              </div>
              <div className="text-sm md:text-base text-gray-400">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
                99<span className="text-secondary">%</span>
              </div>
              <div className="text-sm md:text-base text-gray-400">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
                3<span className="text-secondary">+</span>
              </div>
              <div className="text-sm md:text-base text-gray-400">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-xs font-medium tracking-wider">SCROLL</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
