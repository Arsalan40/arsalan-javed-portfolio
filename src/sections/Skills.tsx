"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Target, Zap, Code, Wrench, Users } from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";
import { Section } from "@/components/Section";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import { skillsData } from "@/data/skills";

const categoryIcons = {
  "Business Analysis": Briefcase,
  "Project Management": Target,
  "Workflow Automation": Zap,
  "Technical Skills": Code,
  "Tools & Platforms": Wrench,
  "Soft Skills": Users,
};

export const Skills: React.FC = () => {
  return (
    <Section id="skills" className="py-24 md:py-32">
      <Container>
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Crafting Solutions
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed"
            >
              Delivering seamless analysis, strategic planning, and cutting-edge automation
              that transforms business operations
            </motion.p>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          >
            {skillsData.map((category, index) => {
              const Icon = categoryIcons[category.category as keyof typeof categoryIcons] || Briefcase;
              
              return (
                <motion.div
                  key={category.category}
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative h-full glass-effect rounded-2xl p-6 md:p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                    {/* Background Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative space-y-4 md:space-y-6">
                      {/* Icon */}
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 md:p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                      </div>

                      {/* Category Title */}
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                        {category.category}
                      </h3>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2">
                        {category.skills.slice(0, 6).map((skill) => (
                          <span
                            key={skill}
                            data-skill
                            className="px-2.5 py-1 md:px-3 md:py-1.5 bg-background/50 rounded-full text-xs md:text-sm text-gray-300 border border-border hover:border-primary/50 hover:text-primary transition-all cursor-pointer"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Tools Logos Infinite Scroll */}
          <div className="relative overflow-hidden py-8">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {[
                "Jira.svg",
                "Figma.svg",
                "Github.svg",
                "Atlassian.svg",
                "Analytics.svg",
                "Docker.svg",
                "Git.svg",
                "Mysql.svg",
                "Wordpress.svg",
              ].map((logo) => (
                <div
                  key={logo}
                  className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex-shrink-0 transition-all hover:scale-110 hover:bg-white/10"
                >
                  <Image
                    src={`/tools/${logo}`}
                    alt={logo.replace('.svg', '')}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                "Jira.svg",
                "Figma.svg",
                "Github.svg",
                "Atlassian.svg",
                "Analytics.svg",
                "Docker.svg",
                "Git.svg",
                "Mysql.svg",
                "Wordpress.svg",
              ].map((logo, index) => (
                <div
                  key={`${logo}-${index}`}
                  className="flex items-center justify-center w-16 h-16 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex-shrink-0 transition-all hover:scale-110 hover:bg-white/10"
                >
                  <Image
                    src={`/tools/${logo}`}
                    alt={logo.replace('.svg', '')}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
