"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Zap, Clock, Eye } from "lucide-react";
import Container from "@/components/Container";
import { Section } from "@/components/Section";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import { automationsData } from "@/data/automations";
import WorkflowModal from "@/components/WorkflowModal";

export const Automations: React.FC = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<number | null>(null);

  const openModal = (id: number) => setSelectedWorkflow(id);
  const closeModal = () => setSelectedWorkflow(null);

  const currentAutomation = selectedWorkflow
    ? automationsData.find((a) => a.id === selectedWorkflow)
    : null;
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

                {/* Preview Button */}
                <button
                  onClick={() => openModal(automation.id)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 border border-primary/30 rounded-lg transition-all duration-300 group"
                >
                  <Eye size={18} className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-text">View Interactive Workflow</span>
                </button>

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

          {/* Workflow Modal */}
          {currentAutomation && (
            <WorkflowModal
              isOpen={selectedWorkflow !== null}
              onClose={closeModal}
              title={currentAutomation.title}
              nodes={currentAutomation.nodes}
              connections={currentAutomation.connections}
            />
          )}
        </div>
      </Container>
    </Section>
  );
};
