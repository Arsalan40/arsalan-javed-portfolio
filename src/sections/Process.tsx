"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { Section } from "@/components/Section";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import { Search, FileText, Cog, CheckCircle } from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Research & Discovery",
    description:
      "Defining goals, audience, and competitive insights. Thorough analysis of business requirements and stakeholder needs.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Planning & Documentation",
    description:
      "Structuring workflows, creating detailed documentation, and mapping out the entire project roadmap.",
  },
  {
    number: "03",
    icon: Cog,
    title: "Implementation & Automation",
    description:
      "Building solutions, automating processes with n8n, and integrating systems for seamless operations.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Testing & Optimization",
    description:
      "Refining solutions through feedback, usability testing, and continuous performance improvements.",
  },
];

export const Process: React.FC = () => {
  return (
    <Section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <Container>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                From Concept to Completion
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-400 leading-relaxed"
            >
              A systematic approach to turning business challenges into effective solutions
            </motion.p>
          </div>

          {/* Process Steps Grid */}
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="relative group"
                >
                  {/* Connecting Line (hidden on mobile, shown on lg+) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-x-1/2 z-0" />
                  )}

                  {/* Card */}
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 group-hover:-translate-y-2">
                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 mb-6">
                      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeInUp}
            className="text-center pt-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-colors"
            >
              Start Your Project
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};
