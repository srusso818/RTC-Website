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
      vx: number = 0;
      vy: number = 0;
      color: string;
      isDead: boolean = false;
      drawPad: boolean = false;

      constructor() {
        this.color = Math.random() > 0.5 ? "#0084c8" : "#76b82a"; // Blue or Green
        // Start on a grid intersection
        this.x = Math.floor(Math.random() * (width / GRID_SIZE)) * GRID_SIZE;
        this.y = Math.floor(Math.random() * (height / GRID_SIZE)) * GRID_SIZE;
        this.pickNewDirection();
      }

      pickNewDirection() {
        // Orthogonal and Diagonal (45-degree) directions
        const dirs = [
          [SPEED, 0], [-SPEED, 0], [0, SPEED], [0, -SPEED], 
          [SPEED, SPEED], [SPEED, -SPEED], [-SPEED, SPEED], [-SPEED, -SPEED]
        ];
        const dir = dirs[Math.floor(Math.random() * dirs.length)];
        this.vx = dir[0];
        this.vy = dir[1];
      }

      update() {
        if (this.isDead) {
          // Respawn after being dead for a frame (to allow the pad to be drawn)
          this.isDead = false;
          this.drawPad = false;
          this.x = Math.floor(Math.random() * (width / GRID_SIZE)) * GRID_SIZE;
          this.y = Math.floor(Math.random() * (height / GRID_SIZE)) * GRID_SIZE;
          this.color = Math.random() > 0.5 ? "#0084c8" : "#76b82a";
          this.pickNewDirection();
          return;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Check if we hit a grid intersection
        if (this.x % GRID_SIZE === 0 && this.y % GRID_SIZE === 0) {
          const outOfBounds = this.x < 0 || this.x > width || this.y < 0 || this.y > height;
          
          if (outOfBounds) {
             this.isDead = true;
          } else if (Math.random() < 0.08) { 
             // 8% chance to stop and form a circular pad (via)
             this.isDead = true;
             this.drawPad = true;
          } else if (Math.random() < 0.35) {
             // 35% chance to change direction
             this.pickNewDirection();
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.drawPad) {
           // Draw inner solid circle
           ctx.beginPath();
           ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
           ctx.fillStyle = this.color;
           ctx.shadowBlur = 10;
           ctx.shadowColor = this.color;
           ctx.fill();
           ctx.shadowBlur = 0;
           
           // Draw outer hollow circle to look like a PCB via
           ctx.beginPath();
           ctx.arc(this.x, this.y, 6, 0, Math.PI * 2);
           ctx.strokeStyle = this.color;
           ctx.lineWidth = 1.5;
           ctx.stroke();
        } else if (!this.isDead) {
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
