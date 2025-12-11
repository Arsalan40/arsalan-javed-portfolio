"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function HeroBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate random positions for floating blobs - only on client
  const blobs = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      size: Math.random() * 300 + 200,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 5,
      animateX: [0, Math.random() * 100 - 50, 0],
      animateY: [0, Math.random() * 100 - 50, 0],
    }));
  }, [mounted]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0">
        {/* Primary Gradient Orb */}
        <motion.div
          className="absolute -top-48 -left-48 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0,229,255,0.4) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary Gradient Orb */}
        <motion.div
          className="absolute top-1/4 -right-48 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(255,79,129,0.4) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Tertiary Gradient Orb */}
        <motion.div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0,229,255,0.3) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Particles/Blobs - only render after mount */}
      {mounted && (
        <div className="absolute inset-0">
          {blobs.map((blob) => (
            <motion.div
              key={blob.id}
              className="absolute rounded-full mix-blend-screen opacity-5"
              style={{
                width: blob.size,
                height: blob.size,
                left: `${blob.x}%`,
                top: `${blob.y}%`,
                background: `radial-gradient(circle, ${
                  blob.id % 2 === 0 ? "rgba(0,229,255,0.6)" : "rgba(255,79,129,0.6)"
                } 0%, transparent 70%)`,
              }}
              animate={{
                x: blob.animateX,
                y: blob.animateY,
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: blob.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: blob.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Grid Overlay (optional subtle effect) */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,229,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
