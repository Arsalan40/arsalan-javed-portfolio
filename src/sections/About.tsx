"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { Section } from "@/components/Section";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import { Briefcase, Award, Users, GraduationCap, Calendar } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "3+ Years Experience",
    description: "Business Analysis & Project Management",
  },
  {
    icon: Award,
    title: "20+ Projects Delivered",
    description: "On-time and within budget",
  },
  {
    icon: Users,
    title: "Cross-Functional Leadership",
    description: "Leading teams of 5-15 members",
  },
];

const experiences = [
  {
    title: "Business Analyst",
    company: "AZM Development",
    period: "Feb 2025 - Present",
    location: "Islamabad",
    description: "Worked on the Saudi Vision 2030 initiative, delivering the Maneh online certification system to digitize and streamline product certification processes.",
    achievements: [
      "Improved development efficiency by 20% through effective story writing and backlog grooming in JIRA",
      "Bridged communication between cross-functional teams of developers, QA engineers, and designers",
      "Coordinated UAT sessions achieving faster acceptance cycles and higher satisfaction scores",
      "Collaborated with designers using Figma to validate user flows and ensure UI consistency"
    ]
  },
  {
    title: "Implementation Consultant",
    company: "Elixir Technologies",
    period: "Sep 2024 - Nov 2024",
    location: "Islamabad",
    description: "Analyzed client business requirements and implemented Elixir Cloud solutions for healthcare and banking industries, enhancing operational workflows by 25%.",
    achievements: [
      "Developed and deployed Tango CCM solution with seamless database integration",
      "Managed multiple data sources including XML, delimited files, and RDBMS",
      "Improved user adoption and reduced post-deployment issues through effective training",
      "Provided ongoing implementation support and issue tracking with engineering teams"
    ]
  },
  {
    title: "Implementation Engineer",
    company: "CARE Pvt Ltd",
    period: "Dec 2022 - Sep 2024",
    location: "Islamabad",
    description: "Led ERP system implementations for the Pakistan Air Force, delivering Office Management, Overtime, and Finance modules across departments.",
    achievements: [
      "Improved operational efficiency by 30% and reduced manual workloads significantly",
      "Executed SQL-based workflow configurations cutting data-entry time by 40%",
      "Managed UAT sessions with 30% fewer rework iterations through continuous feedback",
      "Created dynamic dashboards using Poli for real-time analytics and decision-making"
    ]
  },
];

const education = [
  {
    degree: "Bachelor's in Computer Engineering",
    institution: "NUST",
    year: "2022",
    description: "National University of Sciences and Technology"
  },
  {
    degree: "Master's in Project Management",
    institution: "SZABIST",
    year: "2025",
    description: "Shaheed Zulfikar Ali Bhutto Institute of Science and Technology"
  },
  {
    degree: "Certified Scrum Master (CSM)",
    institution: "Scrum Alliance",
    year: "2023",
    description: "Agile project management certification"
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <Container>
        <div className="space-y-20">
          {/* Section Header */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            {/* Profile Photo */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center mb-6"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-xl opacity-50 animate-pulse" />
                <Image
                  src="/Arsalan.png"
                  alt="Arsalan Javed - Business Analyst & Project Manager"
                  width={160}
                  height={160}
                  priority
                  className="relative rounded-full border-4 border-primary/30 object-cover w-full h-full"
                />
              </div>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Bringing Your Vision to Life
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-400 leading-relaxed"
            >
              With Cutting-Edge Analysis, Strategic Planning & Smart Automation
            </motion.p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="text-center space-y-4 p-8 rounded-2xl glass-effect border border-primary/10 hover:border-primary/30 transition-all"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400">{highlight.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bio Section */}
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <h3 className="relative text-3xl md:text-4xl font-bold text-white mb-8">
                Meet Your Analyst
              </h3>
            </div>
            
            <div className="space-y-6 text-base md:text-lg text-gray-400 leading-relaxed">
              <p>
                With 3+ years of experience in business analysis and project management,
                I specialize in bridging the gap between business objectives and technical
                implementation. My approach combines analytical thinking with strategic
                planning to deliver measurable results.
              </p>
              
              <p>
                I've successfully contributed to cross-functional teams through digital
                transformation initiatives, consistently delivering projects that drive
                operational efficiency and business growth. My expertise in n8n workflow
                automation and process optimization has helped organizations streamline
                operations and save valuable time through intelligent automation solutions.
              </p>
            </div>

            {/* CTA */}
            <motion.div
              variants={fadeInUp}
              className="pt-8"
            >
              <motion.a
                href="/Arsalan Javed_CV_Business Analyst.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-colors"
              >
                Download CV
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            variants={fadeInUp}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Professional Experience
              </h3>
              <p className="text-gray-400">My journey in business analysis and project management</p>
            </div>

            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col gap-8`}
                  >
                    {/* Content Card */}
                    <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                      <div className="glass-effect rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                        <div className="flex items-center gap-2 text-primary mb-2 md:justify-end justify-start">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-semibold">{exp.period}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                        <p className="text-accent font-medium mb-3">{exp.company}</p>
                        <p className="text-gray-400 text-sm mb-4">{exp.description}</p>
                        <ul className={`space-y-2 text-sm text-gray-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 md:justify-end justify-start">
                              <span className={`text-primary ${index % 2 === 0 ? 'md:order-2' : ''}`}>→</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background items-center justify-center z-10">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            variants={fadeInUp}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Education & Certifications
              </h3>
              <p className="text-gray-400">Continuous learning and professional development</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="glass-effect rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all text-center"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-accent font-medium mb-2">{edu.institution}</p>
                  <p className="text-sm text-gray-400 mb-3">{edu.year}</p>
                  <p className="text-sm text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
