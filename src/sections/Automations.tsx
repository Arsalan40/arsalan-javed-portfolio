"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Zap, Clock } from "lucide-react";
import Container from "@/components/Container";
import { Section } from "@/components/Section";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import { automationsData } from "@/data/automations";
import WorkflowVisualization from "@/components/WorkflowVisualization";

export const Automations: React.FC = () => {
  return (
    <Section id="automations">
      <Container>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">n8n Automation Solutions</span>
            </h2>
            <p className="text-text/70 max-w-2xl mx-auto">
              Streamlining business operations and saving hundreds of hours through intelligent n8n workflows
            </p>
          </div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
          >
            {automationsData.map((automation) => (
              <motion.div
                key={automation.id}
                variants={fadeInUp}
                className="glass-effect rounded-xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 space-y-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-text">{automation.title}</h3>
                    <p className="text-sm md:text-base text-text/70">{automation.description}</p>
                  </div>
                  <Bot className="text-secondary flex-shrink-0" size={28} />
                </div>

                {/* Workflow Visualization */}
                <div className="border-t border-border pt-4">
                  <WorkflowVisualization nodes={automation.nodes} />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-4 text-xs md:text-sm border-t border-border">
                  <div className="flex items-center gap-2 text-text/60">
                    <Zap size={14} className="text-primary flex-shrink-0" />
                    <span>{automation.efficiency}</span>
                  </div>
                  <div className="flex items-center gap-2 text-text/60">
                    <Clock size={14} className="text-secondary flex-shrink-0" />
                    <span>{automation.timeSaved}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
