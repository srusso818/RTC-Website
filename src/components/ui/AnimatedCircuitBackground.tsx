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
    const GRID_SIZE = 20;
    const SPEED = 1; // Halved speed for more methodical motion
    const SPARK_COUNT = 60; // Denser matrix of sparks

    // Theme Colors (Matrix/Blueprint style)
    const COLOR_BG = "#0b1d3a";
    const COLOR_TRACE_BLUE = "#0084c8";
    const COLOR_TRACE_GREEN = "#76b82a";
    const COLOR_CHIP_FILL = "#071225";
    const COLOR_CHIP_BORDER = "#1f4a7c";
    const COLOR_CHIP_TEXT = "#387ab8";
    const COLOR_PIN = "#8b9fb6";
    const COLOR_HIGHLIGHT = "#00ffcc";

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
      
      // Initial fill
      ctx.fillStyle = COLOR_BG; 
      ctx.fillRect(0, 0, width, height);
    };

    window.addEventListener("resize", resize);
    resize();

    // Hardware Components Definition
    const drawCPU = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.fillStyle = COLOR_CHIP_FILL;
      ctx.strokeStyle = COLOR_CHIP_BORDER;
      ctx.lineWidth = 2;
      
      // Socket Base
      ctx.fillRect(x, y, size, size);
      ctx.strokeRect(x, y, size, size);

      // Pins (dots around the edge)
      ctx.fillStyle = COLOR_PIN;
      for(let i = 10; i < size - 10; i += 8) {
        for(let j = 10; j < size - 10; j += 8) {
          if (i < 30 || i > size - 30 || j < 30 || j > size - 30) {
            ctx.beginPath();
            ctx.arc(x + i, y + j, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Inner CPU Chip
      const innerMargin = 35;
      const innerSize = size - innerMargin * 2;
      ctx.fillStyle = "#111827"; // Darker for the actual chip
      ctx.fillRect(x + innerMargin, y + innerMargin, innerSize, innerSize);
      ctx.strokeStyle = COLOR_CHIP_TEXT;
      ctx.strokeRect(x + innerMargin, y + innerMargin, innerSize, innerSize);

      // Text
      ctx.fillStyle = COLOR_CHIP_TEXT;
      ctx.font = "bold 20px monospace";
      ctx.textAlign = "center";
      ctx.fillText("i486™ SX", x + size / 2, y + size / 2 - 5);
      ctx.font = "12px monospace";
      ctx.fillText("intel®", x + size / 2, y + size / 2 + 15);
      ctx.fillText("Socket 3", x + size / 2, y + size - 15);
    };

    const drawChip = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, title: string, subtitle: string, pinCount: number) => {
      // Draw Pins sticking out
      ctx.strokeStyle = COLOR_PIN;
      ctx.lineWidth = 2;
      const pinSpacingX = w / (pinCount / 4 + 1);
      const pinSpacingY = h / (pinCount / 4 + 1);
      
      ctx.beginPath();
      for (let i = 1; i <= pinCount / 4; i++) {
        // Top pins
        ctx.moveTo(x + i * pinSpacingX, y);
        ctx.lineTo(x + i * pinSpacingX, y - 8);
        // Bottom pins
        ctx.moveTo(x + i * pinSpacingX, y + h);
        ctx.lineTo(x + i * pinSpacingX, y + h + 8);
        // Left pins
        ctx.moveTo(x, y + i * pinSpacingY);
        ctx.lineTo(x - 8, y + i * pinSpacingY);
        // Right pins
        ctx.moveTo(x + w, y + i * pinSpacingY);
        ctx.lineTo(x + w + 8, y + i * pinSpacingY);
      }
      ctx.stroke();

      // Chip Body
      ctx.fillStyle = COLOR_CHIP_FILL;
      ctx.strokeStyle = COLOR_CHIP_BORDER;
      ctx.lineWidth = 2;
      ctx.fillRect(x, y, w, h);
      ctx.strokeRect(x, y, w, h);

      // Text
      ctx.fillStyle = COLOR_CHIP_TEXT;
      ctx.font = "bold 14px monospace";
      ctx.textAlign = "center";
      ctx.fillText("VIA", x + w / 2, y + h / 2 - 10);
      ctx.font = "12px monospace";
      ctx.fillText(title, x + w / 2, y + h / 2 + 5);
      ctx.font = "10px monospace";
      ctx.fillText(subtitle, x + w / 2, y + h / 2 + 20);
    };

    const drawRAMSlots = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, count: number) => {
      ctx.fillStyle = COLOR_CHIP_FILL;
      ctx.strokeStyle = COLOR_CHIP_BORDER;
      ctx.lineWidth = 2;
      const spacing = h / count;
      
      for (let i = 0; i < count; i++) {
        const slotY = y + i * spacing;
        ctx.fillRect(x, slotY, w, 15);
        ctx.strokeRect(x, slotY, w, 15);
        
        // Inner contacts
        ctx.strokeStyle = COLOR_PIN;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for(let px = x + 5; px < x + w - 5; px += 4) {
          ctx.moveTo(px, slotY + 4);
          ctx.lineTo(px, slotY + 11);
        }
        ctx.stroke();
      }
    };

    const drawISASlots = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, count: number) => {
      ctx.fillStyle = COLOR_CHIP_FILL;
      ctx.strokeStyle = COLOR_CHIP_BORDER;
      ctx.lineWidth = 2;
      const spacing = h / count;
      
      for (let i = 0; i < count; i++) {
        const slotY = y + i * spacing;
        // Main slot
        ctx.fillRect(x, slotY, w, 20);
        ctx.strokeRect(x, slotY, w, 20);
        // Divider
        ctx.beginPath();
        ctx.moveTo(x + w * 0.7, slotY);
        ctx.lineTo(x + w * 0.7, slotY + 20);
        ctx.stroke();
      }
    };

    const drawResistorBank = (ctx: CanvasRenderingContext2D, x: number, y: number, count: number, horizontal: boolean) => {
      ctx.fillStyle = "#a88932"; // Resistor body color
      ctx.strokeStyle = COLOR_PIN;
      ctx.lineWidth = 1.5;

      for (let i = 0; i < count; i++) {
        const rx = horizontal ? x + i * 15 : x;
        const ry = horizontal ? y : y + i * 15;
        
        ctx.beginPath();
        if (horizontal) {
          ctx.moveTo(rx - 5, ry); ctx.lineTo(rx + 15, ry);
          ctx.stroke();
          ctx.fillRect(rx, ry - 3, 10, 6);
        } else {
          ctx.moveTo(rx, ry - 5); ctx.lineTo(rx, ry + 15);
          ctx.stroke();
          ctx.fillRect(rx - 3, ry, 6, 10);
        }
      }
    };

    const drawMotherboard = (ctx: CanvasRenderingContext2D) => {
      // Center coordinates offset
      const cx = width / 2;
      const cy = height / 2;

      // Draw CPU Socket
      drawCPU(ctx, cx + 50, cy - 150, 180);
      
      // Draw Northbridge / Chipset
      drawChip(ctx, cx - 180, cy - 100, 120, 120, "VT82C496G", "VA1C-1473", 64);
      
      // Draw Southbridge / Controller
      drawChip(ctx, cx - 200, cy + 80, 100, 140, "VT82C505", "VA17-1260", 56);
      
      // Draw RAM Slots (Top Left)
      drawRAMSlots(ctx, cx - 400, cy - 200, 180, 120, 4);

      // Draw ISA Slots (Bottom Left)
      drawISASlots(ctx, cx - 400, cy + 50, 160, 150, 4);

      // Draw assorted resistor/capacitor banks
      drawResistorBank(ctx, cx - 40, cy - 80, 5, false);
      drawResistorBank(ctx, cx + 20, cy + 50, 4, true);
      drawResistorBank(ctx, cx - 250, cy - 150, 6, true);
      drawResistorBank(ctx, cx + 250, cy + 80, 5, false);
    };

    class Spark {
      x: number;
      y: number;
      vx: number = 0;
      vy: number = 0;
      color: string;
      isDead: boolean = false;
      drawPad: boolean = false;
      trail: {x: number, y: number}[] = [];

      constructor() {
        this.color = Math.random() > 0.5 ? COLOR_HIGHLIGHT : COLOR_TRACE_GREEN; 
        this.x = Math.floor(Math.random() * (width / GRID_SIZE)) * GRID_SIZE;
        this.y = Math.floor(Math.random() * (height / GRID_SIZE)) * GRID_SIZE;
        this.pickNewDirection();
      }

      pickNewDirection() {
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
          this.isDead = false;
          this.drawPad = false;
          this.trail = [];
          this.x = Math.floor(Math.random() * (width / GRID_SIZE)) * GRID_SIZE;
          this.y = Math.floor(Math.random() * (height / GRID_SIZE)) * GRID_SIZE;
          this.color = Math.random() > 0.5 ? COLOR_HIGHLIGHT : COLOR_TRACE_GREEN;
          this.pickNewDirection();
          return;
        }

        this.x += this.vx;
        this.y += this.vy;
        
        // Keep a short trail for the drawing phase
        this.trail.push({x: this.x, y: this.y});
        if (this.trail.length > 5) this.trail.shift();

        if (this.x % GRID_SIZE === 0 && this.y % GRID_SIZE === 0) {
          const outOfBounds = this.x < 0 || this.x > width || this.y < 0 || this.y > height;
          
          if (outOfBounds) {
             this.isDead = true;
          } else if (Math.random() < 0.05) { 
             this.isDead = true;
             this.drawPad = true;
          } else if (Math.random() < 0.4) {
             this.pickNewDirection();
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.drawPad) {
           ctx.beginPath();
           ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
           ctx.fillStyle = this.color;
           ctx.shadowBlur = 12;
           ctx.shadowColor = this.color;
           ctx.fill();
           ctx.shadowBlur = 0;
           
           ctx.beginPath();
           ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
           ctx.strokeStyle = this.color;
           ctx.lineWidth = 1.5;
           ctx.stroke();
        } else if (!this.isDead && this.trail.length > 1) {
           ctx.beginPath();
           ctx.moveTo(this.trail[0].x, this.trail[0].y);
           for (let i = 1; i < this.trail.length; i++) {
             ctx.lineTo(this.trail[i].x, this.trail[i].y);
           }
           ctx.strokeStyle = this.color;
           ctx.lineWidth = 1.5;
           ctx.lineCap = "round";
           ctx.lineJoin = "round";
           ctx.shadowBlur = 10;
           ctx.shadowColor = this.color;
           ctx.stroke();
           ctx.shadowBlur = 0; 
        }
      }
    }

    const sparks: Spark[] = Array.from({ length: SPARK_COUNT }, () => new Spark());

    const render = () => {
      // 1. Fade the previous frame's sparks (creating the glow tail)
      ctx.fillStyle = "rgba(11, 29, 58, 0.15)";
      ctx.fillRect(0, 0, width, height);

      // 2. Draw static motherboard components over the faded background
      // so they remain sharp and never fade out.
      drawMotherboard(ctx);

      // 3. Draw new spark positions
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
      className="absolute inset-0 z-0 pointer-events-none opacity-90"
      style={{ display: "block" }}
    />
  );
}
