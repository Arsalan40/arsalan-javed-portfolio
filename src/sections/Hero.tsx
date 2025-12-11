"use client";

import Container from "@/components/Container";
import GlowButton from "@/components/ui/GlowButton";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-32">
      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerChildren}
        >
          <motion.p variants={fadeInUp} className="text-xl text-white/60">
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mt-2"
          >
            Arsalan Javed
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl text-primary mt-2"
          >
            Project Manager & Business Analyst
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-white/70"
          >
            {/* Placeholder tagline, will replace with typewriter later */}
            Building structured workflows and digital solutions that empower teams.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex gap-4 mt-8"
          >
            <GlowButton>Get My Resume</GlowButton>
            <GlowButton className="bg-primary text-black">
              Explore My Work
            </GlowButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

