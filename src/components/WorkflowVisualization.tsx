"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, GitBranch, Zap, CheckCircle2 } from "lucide-react";
import type { WorkflowNode } from "@/data/automations";

interface WorkflowVisualizationProps {
  nodes: WorkflowNode[];
}

const nodeColors = {
  trigger: {
    bg: "bg-primary/10",
    border: "border-primary/30",
    icon: "text-primary",
  },
  action: {
    bg: "bg-secondary/10",
    border: "border-secondary/30",
    icon: "text-secondary",
  },
  condition: {
    bg: "bg-accent/10",
    border: "border-accent/30",
    icon: "text-accent",
  },
  output: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    icon: "text-green-500",
  },
};

const getNodeIcon = (type: 'trigger' | 'action' | 'condition' | 'output') => {
  switch (type) {
    case 'trigger':
      return Play;
    case 'action':
      return Zap;
    case 'condition':
      return GitBranch;
    case 'output':
      return CheckCircle2;
  }
};

export default function WorkflowVisualization({ nodes }: WorkflowVisualizationProps) {
  return (
    <div className="relative py-6">
      <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-2">
        {nodes.map((node, index) => {
          const Icon = getNodeIcon(node.type);
          const colors = nodeColors[node.type];
          
          return (
            <React.Fragment key={node.id}>
              {/* Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <div className={`relative group`}>
                  {/* Node Circle */}
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${colors.bg} border-2 ${colors.border} flex items-center justify-center transition-all duration-300 hover:scale-110`}>
                    <Icon className={`${colors.icon} w-5 h-5 md:w-6 md:h-6`} />
                  </div>
                  
                  {/* Node Label */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-[10px] md:text-xs text-gray-400 font-medium">
                      {node.label}
                    </span>
                  </div>
                  
                  {/* Pulse Animation for Trigger */}
                  {node.type === 'trigger' && (
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 border-primary"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </div>
              </motion.div>

              {/* Arrow Connector */}
              {index < nodes.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.1 + 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 origin-left"
                >
                  <svg width="24" height="2" className="hidden md:block">
                    <motion.line
                      x1="0"
                      y1="1"
                      x2="24"
                      y2="1"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ delay: index * 0.1 + 0.05, duration: 0.5 }}
                      viewport={{ once: true }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="w-3 h-0.5 bg-gradient-to-r from-primary/50 to-primary/80 md:hidden" />
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
