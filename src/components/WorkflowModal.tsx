'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, RotateCcw, Sparkles, Mail, Database, Slack, Calendar, FileText, Users, Zap, GitBranch, CheckCircle2, Globe, Code, Webhook, Bell, MessageSquare, ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';

interface WorkflowNode {
  id: string;
  type: 'trigger' | 'action' | 'condition' | 'output';
  label: string;
  integration?: string;
  description?: string;
  position: { x: number; y: number };
}

interface WorkflowConnection {
  from: string;
  to: string;
  label?: string;
}

interface WorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  nodes: WorkflowNode[];
  connections: WorkflowConnection[];
}

// Integration configurations with colors and icons
const integrationConfig: Record<string, { icon: any; color: string; bgColor: string; }> = {
  'form': { icon: FileText, color: '#3b82f6', bgColor: 'bg-blue-500' },
  'webhook': { icon: Webhook, color: '#8b5cf6', bgColor: 'bg-purple-500' },
  'email': { icon: Mail, color: '#ef4444', bgColor: 'bg-red-500' },
  'gmail': { icon: Mail, color: '#ea4335', bgColor: 'bg-red-500' },
  'slack': { icon: Slack, color: '#e01e5a', bgColor: 'bg-pink-500' },
  'database': { icon: Database, color: '#10b981', bgColor: 'bg-green-500' },
  'postgresql': { icon: Database, color: '#336791', bgColor: 'bg-blue-600' },
  'mysql': { icon: Database, color: '#00758f', bgColor: 'bg-cyan-600' },
  'mongodb': { icon: Database, color: '#47a248', bgColor: 'bg-green-600' },
  'crm': { icon: Users, color: '#f97316', bgColor: 'bg-orange-500' },
  'hubspot': { icon: Users, color: '#ff7a59', bgColor: 'bg-orange-500' },
  'salesforce': { icon: Users, color: '#00a1e0', bgColor: 'bg-blue-500' },
  'calendar': { icon: Calendar, color: '#8b5cf6', bgColor: 'bg-purple-500' },
  'google-calendar': { icon: Calendar, color: '#4285f4', bgColor: 'bg-blue-500' },
  'api': { icon: Code, color: '#06b6d4', bgColor: 'bg-cyan-500' },
  'http': { icon: Globe, color: '#06b6d4', bgColor: 'bg-cyan-500' },
  'notification': { icon: Bell, color: '#f59e0b', bgColor: 'bg-amber-500' },
  'chat': { icon: MessageSquare, color: '#8b5cf6', bgColor: 'bg-purple-500' },
  'teams': { icon: MessageSquare, color: '#5b5fc7', bgColor: 'bg-indigo-500' },
  'shopify': { icon: ShoppingCart, color: '#96bf48', bgColor: 'bg-lime-600' },
  'stripe': { icon: ShoppingCart, color: '#635bff', bgColor: 'bg-indigo-600' },
};

const getNodeTypeConfig = (type: 'trigger' | 'action' | 'condition' | 'output') => {
  const configs = {
    trigger: { icon: Play, color: '#f97316', label: 'Trigger' },
    action: { icon: Zap, color: '#3b82f6', label: 'Action' },
    condition: { icon: GitBranch, color: '#8b5cf6', label: 'Condition' },
    output: { icon: CheckCircle2, color: '#10b981', label: 'Output' },
  };
  return configs[type];
};

export default function WorkflowModal({ isOpen, onClose, title, nodes, connections }: WorkflowModalProps) {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isPlaying && activeNodeIndex < nodes.length - 1) {
      const timer = setTimeout(() => {
        setActiveNodeIndex(activeNodeIndex + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else if (activeNodeIndex === nodes.length - 1) {
      setIsPlaying(false);
    }
  }, [isPlaying, activeNodeIndex, nodes.length]);

  const handlePlay = () => {
    if (activeNodeIndex === -1 || activeNodeIndex === nodes.length - 1) {
      setActiveNodeIndex(0);
    }
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setActiveNodeIndex(-1);
    setIsPlaying(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="relative border-b border-white/10 px-6 py-4 flex items-center justify-between bg-[#0f0f0f]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500/20 to-pink-500/20 border border-orange-500/30">
                    <Sparkles className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{title}</h2>
                    <p className="text-xs text-gray-500 mt-0.5">n8n Workflow Automation</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleReset}
                    disabled={activeNodeIndex === -1}
                    className="px-3 py-1.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  
                  {isPlaying ? (
                    <button
                      onClick={handlePause}
                      className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
                    >
                      <Pause className="w-4 h-4" />
                      Pause
                    </button>
                  ) : (
                    <button
                      onClick={handlePlay}
                      className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                    >
                      <Play className="w-4 h-4" fill="currentColor" />
                      {activeNodeIndex === nodes.length - 1 ? 'Replay' : activeNodeIndex >= 0 ? 'Continue' : 'Play'}
                    </button>
                  )}
                  
                  <button
                    onClick={onClose}
                    className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Canvas */}
              <div className="relative p-8 overflow-auto max-h-[calc(90vh-80px)] bg-[#1a1a1a]" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}>
                <div className="relative min-h-[600px]" style={{ width: '100%', minWidth: '1200px' }}>
                  {/* SVG Connections */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="3"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                      </marker>
                      <marker
                        id="arrowheadInactive"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="3"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3, 0 6" fill="rgba(255,255,255,0.2)" />
                      </marker>
                    </defs>
                    
                    {connections.map((conn, idx) => {
                      const fromNode = nodes.find(n => n.id === conn.from);
                      const toNode = nodes.find(n => n.id === conn.to);
                      if (!fromNode || !toNode) return null;

                      const fromIndex = nodes.findIndex(n => n.id === conn.from);
                      const toIndex = nodes.findIndex(n => n.id === conn.to);
                      const isActive = fromIndex <= activeNodeIndex && toIndex <= activeNodeIndex;

                      const x1 = fromNode.position.x + 100;
                      const y1 = fromNode.position.y + 40;
                      const x2 = toNode.position.x;
                      const y2 = toNode.position.y + 40;
                      const midX = (x1 + x2) / 2;

                      return (
                        <g key={`${conn.from}-${conn.to}`}>
                          <path
                            d={`M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`}
                            stroke={isActive ? "#3b82f6" : "rgba(255,255,255,0.2)"}
                            strokeWidth={isActive ? "3" : "2"}
                            fill="none"
                            markerEnd={isActive ? "url(#arrowhead)" : "url(#arrowheadInactive)"}
                            opacity={isActive ? 1 : 0.3}
                          />
                          
                          {/* Animated dot */}
                          {isActive && fromIndex === activeNodeIndex - 1 && (
                            <motion.circle
                              r="4"
                              fill="#3b82f6"
                              initial={{ cx: x1, cy: y1 }}
                              animate={{ cx: x2, cy: y2 }}
                              transition={{ duration: 0.8, ease: "easeInOut" }}
                            />
                          )}
                        </g>
                      );
                    })}
                  </svg>

                  {/* Nodes */}
                  {nodes.map((node, idx) => {
                    const typeConfig = getNodeTypeConfig(node.type);
                    const integrationInfo = node.integration ? integrationConfig[node.integration.toLowerCase()] : null;
                    const IconComponent = integrationInfo?.icon || typeConfig.icon;
                    const isActive = idx <= activeNodeIndex;
                    const isCurrent = idx === activeNodeIndex;

                    return (
                      <motion.div
                        key={node.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: isActive ? 1 : 0.4,
                          scale: isCurrent ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="absolute"
                        style={{
                          left: `${node.position.x}px`,
                          top: `${node.position.y}px`,
                          zIndex: 10,
                        }}
                      >
                        <div className="relative">
                          {/* Node */}
                          <div className={`
                            w-[100px] h-[80px] rounded-lg border-2 bg-[#2a2a2a]
                            flex flex-col items-center justify-center gap-1.5 p-2
                            transition-all duration-300
                            ${isActive ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-white/20'}
                            ${isCurrent ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-[#1a1a1a]' : ''}
                          `}>
                            {/* Icon */}
                            <div className={`
                              w-10 h-10 rounded-lg flex items-center justify-center
                              ${integrationInfo ? integrationInfo.bgColor : 'bg-gray-700'}
                            `}>
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            
                            {/* Label */}
                            <div className="text-[10px] font-medium text-center text-white leading-tight line-clamp-2 w-full px-1">
                              {node.label}
                            </div>
                          </div>

                          {/* Type badge */}
                          <div 
                            className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#1a1a1a]"
                            style={{ backgroundColor: typeConfig.color }}
                          >
                            {idx + 1}
                          </div>

                          {/* Check mark for completed */}
                          {isActive && !isCurrent && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-[#1a1a1a]"
                            >
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            </motion.div>
                          )}

                          {/* Active pulse */}
                          {isCurrent && (
                            <motion.div
                              className="absolute inset-0 rounded-lg border-2 border-blue-400"
                              animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 0, 0.5],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                              }}
                            />
                          )}
                        </div>

                        {/* Integration label */}
                        {node.integration && (
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                            <div className={`
                              text-[10px] px-2 py-0.5 rounded font-medium
                              ${isActive ? 'bg-blue-500/20 text-blue-300' : 'bg-white/5 text-gray-500'}
                            `}>
                              {node.integration}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Progress */}
              <div className="h-1 bg-[#0f0f0f]">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                  animate={{
                    width: activeNodeIndex >= 0 ? `${((activeNodeIndex + 1) / nodes.length) * 100}%` : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
