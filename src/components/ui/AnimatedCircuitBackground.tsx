"use client";
import React, { useEffect, useRef } from "react";

export function AnimatedCircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    
    // Grid size for the tracers (circuit paths)
    const GRID_SIZE = 40;
    const SPEED = 2; // px per frame, must divide GRID_SIZE evenly
    const SPARK_COUNT = 40; // Medium density

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
      } else {
        width = window.innerWidth;
        height = window.innerHeight;
      }
      canvas.width = width;
      canvas.height = height;
      
      // Fill initially with the dark navy background color
      ctx.fillStyle = "#0b1d3a"; 
      ctx.fillRect(0, 0, width, height);
    };

    window.addEventListener("resize", resize);
    resize();

    class Spark {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;

      constructor() {
        this.color = Math.random() > 0.5 ? "#0084c8" : "#76b82a"; // Blue or Green
        // Start on a grid intersection
        this.x = Math.floor(Math.random() * (width / GRID_SIZE)) * GRID_SIZE;
        this.y = Math.floor(Math.random() * (height / GRID_SIZE)) * GRID_SIZE;
        
        // Random initial direction
        const dirs = [
          [SPEED, 0], [-SPEED, 0], [0, SPEED], [0, -SPEED]
        ];
        const dir = dirs[Math.floor(Math.random() * dirs.length)];
        this.vx = dir[0];
        this.vy = dir[1];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Check if we hit an intersection
        if (this.x % GRID_SIZE === 0 && this.y % GRID_SIZE === 0) {
          const outOfBounds = this.x < 0 || this.x > width || this.y < 0 || this.y > height;
          
          if (Math.random() < 0.35 || outOfBounds) { // 35% chance to turn at intersection
            if (outOfBounds) {
              // Respawn somewhere else inside
              this.x = Math.floor(Math.random() * (width / GRID_SIZE)) * GRID_SIZE;
              this.y = Math.floor(Math.random() * (height / GRID_SIZE)) * GRID_SIZE;
            } else {
              // Turn 90 degrees
              if (this.vx !== 0) { // moving horizontally, turn vertically
                this.vy = Math.random() > 0.5 ? SPEED : -SPEED;
                this.vx = 0;
              } else { // moving vertically, turn horizontally
                this.vx = Math.random() > 0.5 ? SPEED : -SPEED;
                this.vy = 0;
              }
            }
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        // Draw a short trailing line to make it look like a spark
        ctx.moveTo(this.x - this.vx * 3, this.y - this.vy * 3);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.stroke();
        
        ctx.shadowBlur = 0; // Reset for performance
      }
    }

    const sparks: Spark[] = Array.from({ length: SPARK_COUNT }, () => new Spark());

    const render = () => {
      // Fade effect to make trails fade out smoothly into the navy background
      // rgba(11, 29, 58) corresponds to var(--color-rtc-navy)
      ctx.fillStyle = "rgba(11, 29, 58, 0.15)";
      ctx.fillRect(0, 0, width, height);

      sparks.forEach(spark => {
        spark.update();
        spark.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-80"
      style={{ display: "block" }}
    />
  );
}
