"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function InteractiveCard({ children, className = "", onClick }: InteractiveCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Very tight spring to eliminate wobble but maintain a tiny bit of smoothing
  const springConfig = { damping: 50, stiffness: 1000 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // Strictly limited tilt (3 degrees max) to prevent the "wobbly" feeling
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  // Glare effect transforms
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [100, 0]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [100, 0]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.1) 0%, transparent 50%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Percentage from center (-0.5 to 0.5)
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`glass-card relative overflow-hidden group ${className}`}
    >
      {/* Glare effect overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ background: glareBackground }}
      />
      
      {/* Terminal Header */}
      <div className="absolute top-0 left-0 right-0 h-7 border-b border-white/5 bg-slate-900/40 flex items-center px-4 gap-2 z-40 pointer-events-none">
        <div className="w-2 h-2 rounded-full bg-red-500/70"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500/70"></div>
        <div className="w-2 h-2 rounded-full bg-green-500/70"></div>
      </div>
      
      {/* Content wrapper to allow children to use translateZ */}
      <div style={{ transformStyle: "preserve-3d" }} className="h-full pt-4">
        {children}
      </div>
    </motion.div>
  );
}
