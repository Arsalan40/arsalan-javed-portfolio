"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "@/components/Container";
import { Section } from "@/components/Section";
import { fadeInUp, staggerChildren } from "@/lib/animations";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "VP of Operations",
    company: "TechCorp Solutions",
    content:
      "Arsalan transformed our entire customer onboarding process. His analytical skills and attention to detail resulted in a 60% reduction in onboarding time. He's an exceptional business analyst who truly understands stakeholder needs.",
    image: "/testimonials/avatar1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "IT Director",
    company: "Healthcare Plus",
    content:
      "Working with Arsalan on our CRM implementation was fantastic. He bridged the gap between our technical and business teams seamlessly. The project was delivered ahead of schedule with 95% user adoption - exceptional results!",
    image: "/testimonials/avatar2.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "CEO",
    company: "Retail Innovations Inc",
    content:
      "Arsalan's n8n automation workflows saved our team over 100 hours monthly. His ability to identify automation opportunities and implement scalable solutions is remarkable. Highly recommended for any process optimization project.",
    image: "/testimonials/avatar3.jpg",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
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
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base font-semibold text-primary uppercase tracking-wider"
            >
              Loved by clients & teams around the world
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            >
              What Clients Say
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400"
            >
              From startups to established brands, my clients trust me to bring their vision
              to life with precision, strategy, and seamless execution.
            </motion.p>

            {/* Rating Badges */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
                <span className="text-2xl font-bold text-primary">4.9</span>
                <span className="text-gray-400">/5 Reviews</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
                <span className="text-2xl font-bold text-primary">20</span>
                <span className="text-gray-400">+ Happy Clients</span>
              </div>
            </motion.div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative h-full bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6 hover:border-primary/30 transition-all duration-300">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative space-y-6">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>

                    {/* Content */}
                    <p className="text-gray-300 leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                        <span className="text-lg font-semibold text-white">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-white/50">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
