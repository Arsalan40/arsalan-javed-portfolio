"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import { Section } from "@/components/Section";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import { projectsData } from "@/data/projects";

export const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Section id="projects-portfolio" className="py-24 md:py-32">
      <Container>
        <div className="space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
              >
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  See How I Helped
                </span>
                <br />
                <span className="text-white">Businesses Succeed</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-400"
              >
                Each project reflects commitment to excellence, strategic thinking, and delivering results that matter.
              </motion.p>
            </div>
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 rounded-full text-primary hover:bg-primary/10 transition-colors"
            >
              View All Projects
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {projectsData.map((project) => (
              <Link 
                key={project.id}
                href={`/projects/${project.slug}`}
              >
                <motion.div
                  variants={fadeInUp}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer h-full"
                >
                {/* Background Image/Gradient */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 relative overflow-hidden">
                  {/* Project Image */}
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : null}
                  
                  {/* Overlay on Hover */}
                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                      />
                    )}
                  </AnimatePresence>

                  {/* Project Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 bg-primary/90 backdrop-blur-sm text-black text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Content */}
                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute inset-0 flex flex-col justify-end p-6 z-10"
                      >
                        <div className="space-y-2">
                          <p className="text-white/80 text-sm line-clamp-3">
                            {project.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400">{project.role}</p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-background/50 rounded-full text-xs text-gray-400 border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
