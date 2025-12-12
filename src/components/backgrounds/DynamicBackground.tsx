"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function DynamicBackground() {
  const mousePosition = useMousePosition();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  // Smooth mouse values for particle movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 100 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 100 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition, mouseX, mouseY]);

  // Generate particles - only on client, responsive count
  const particles = useMemo(() => {
    if (!mounted) return [];
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const particleCount = isMobile ? 25 : 50; // Reduce particles on mobile
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, [mounted]);

  // Animated gradient blobs - only on client
  const gradientBlobs = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: 3 }, (_, i) => ({
      id: i,
      initialX: Math.random() * 80 + 10,
      initialY: Math.random() * 80 + 10,
      size: Math.random() * 40 + 30,
      color: i === 0 ? "primary" : i === 1 ? "secondary" : "primary",
      duration: Math.random() * 10 + 20,
      delay: i * 2,
    }));
  }, [mounted]);

  // Canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let particlePositions = particles.map((p) => ({
      x: (p.x / 100) * canvas.width,
      y: (p.y / 100) * canvas.height,
      vx: p.speedX,
      vy: p.speedY,
      size: p.size,
      opacity: p.opacity,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlePositions.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Mouse interaction - subtle repulsion
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.x -= (dx / distance) * force * 2;
          particle.y -= (dy / distance) * force * 2;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${particle.opacity})`;
        ctx.fill();

        // Draw connections between nearby particles
        particlePositions.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlePositions = particles.map((p) => ({
        x: (p.x / 100) * canvas.width,
        y: (p.y / 100) * canvas.height,
        vx: p.speedX,
        vy: p.speedY,
        size: p.size,
        opacity: p.opacity,
      }));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [particles, mousePosition]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />

      {/* Animated Gradient Blobs - only render after mount */}
      {mounted && (
        <div className="absolute inset-0">
          {gradientBlobs.map((blob) => (
            <motion.div
              key={blob.id}
              className="absolute rounded-full blur-3xl"
              style={{
                width: `${blob.size}vw`,
                height: `${blob.size}vw`,
                left: `${blob.initialX}%`,
                top: `${blob.initialY}%`,
                background:
                  blob.color === "primary"
                    ? "radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)"
                    : "radial-gradient(circle, rgba(255,79,129,0.12) 0%, transparent 70%)",
              }}
              animate={{
                x: [0, 100, -100, 0],
                y: [0, -80, 80, 0],
                scale: [1, 1.2, 0.8, 1],
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

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,229,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50" />
    </div>
  );
}
