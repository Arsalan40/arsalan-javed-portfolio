"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "@/lib/animations";

export default function SectionWrapper({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.div variants={fadeInUp}>{children}</motion.div>
      </motion.div>
    </section>
  );
}
