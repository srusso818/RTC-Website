"use client";

import React, { useEffect, useRef } from "react";

export function BinaryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const binaryChars = "01";
    const fontSize = 14;
    let columns = Math.floor(width / fontSize);
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      // Start the drops randomly across the entire height of the screen upon load
      drops[x] = (Math.random() * height) / fontSize;
    }

    const draw = () => {
      // Very slight black fade
      ctx.fillStyle = "rgba(0, 5, 2, 0.05)";
      ctx.fillRect(0, 0, width, height);

      // Brighter but soft emerald for regular text
      ctx.fillStyle = "rgba(52, 211, 153, 0.5)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length));

        if (Math.random() > 0.98) {
          // Brighter head for visibility
          ctx.fillStyle = "rgba(16, 185, 129, 0.9)";
          ctx.shadowBlur = 8;
          ctx.shadowColor = "rgba(16, 185, 129, 0.5)";
        } else {
          ctx.fillStyle = "rgba(52, 211, 153, 0.4)";
          ctx.shadowBlur = 0;
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += 0.2; // Moderate flow speed
      }
    };

    let animationFrameId: number;
    let lastDrawTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const render = (time: number) => {
      if (time - lastDrawTime > interval) {
        draw();
        lastDrawTime = time;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      // Preserve existing drops, add new ones if window gets wider
      const newColumns = Math.floor(width / fontSize);
      if (newColumns > columns) {
        for (let x = columns; x < newColumns; x++) {
          drops[x] = Math.random() * -100;
        }
      }
      columns = newColumns;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none mix-blend-screen opacity-50"
    />
  );
}
