"use client";

import { useEffect, useRef } from "react";

type Speck = {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  phase: number;
  tint: number;
};

const darkDots = ["#38bdf8", "#818cf8", "#22d3ee", "#a78bfa", "#67e8f9", "#60a5fa", "#c084fc", "#2dd4bf"];
const lightDots = ["#2563eb", "#4f46e5", "#0f766e", "#7c3aed", "#0369a1", "#334155", "#6d28d9", "#0d9488"];

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const mouse = { x: 0.5, y: 0.5, active: false };
    const specks: Speck[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    function hexToRgba(hex: string, alpha: number) {
      const clean = hex.replace("#", "");
      if (clean.length < 6) return `rgba(56, 189, 248, ${alpha})`;
      const r = Number.parseInt(clean.slice(0, 2), 16);
      const g = Number.parseInt(clean.slice(2, 4), 16);
      const b = Number.parseInt(clean.slice(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      specks.length = 0;
      const scattered = Math.round((width * height) / 4200);
      for (let index = 0; index < scattered; index += 1) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        specks.push({
          x,
          y,
          ox: x,
          oy: y,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          size: 1.15 + Math.random() * 1.35,
          alpha: 0.42 + Math.random() * 0.4,
          phase: Math.random() * Math.PI * 2,
          tint: Math.floor(Math.random() * darkDots.length),
        });
      }
    }

    function draw() {
      frame = window.requestAnimationFrame(draw);

      const isLight = document.documentElement.classList.contains("light");
      const palette = isLight ? lightDots : darkDots;
      const mx = mouse.x * width;
      const my = mouse.y * height;
      const now = performance.now();

      context.clearRect(0, 0, width, height);

      specks.forEach((speck) => {
        const dx = mx - speck.x;
        const dy = my - speck.y;
        const dist = Math.hypot(dx, dy) || 1;
        const nx = dx / dist;
        const ny = dy / dist;

        if (mouse.active) {
          if (dist < 70) {
            speck.vx -= nx * 0.55;
            speck.vy -= ny * 0.55;
          } else if (dist < 260) {
            speck.vx += nx * 0.16;
            speck.vy += ny * 0.16;
          }
        }

        speck.vx += (speck.ox - speck.x) * 0.004;
        speck.vy += (speck.oy - speck.y) * 0.004;
        speck.vx *= 0.92;
        speck.vy *= 0.92;
        speck.x += speck.vx;
        speck.y += speck.vy;

        const near = mouse.active ? Math.max(0, 1 - dist / 220) : 0;
        const twinkle = 0.82 + Math.sin(now * 0.0014 + speck.phase) * 0.18;

        context.beginPath();
        const alpha = isLight
          ? Math.min(0.95, speck.alpha * twinkle + near * 0.4)
          : Math.min(1, speck.alpha * twinkle + near * 0.45);
        context.fillStyle = hexToRgba(palette[speck.tint], alpha);
        context.arc(speck.x, speck.y, speck.size + near * 0.9, 0, Math.PI * 2);
        context.fill();
      });
    }

    function onMove(event: MouseEvent) {
      mouse.x = event.clientX / window.innerWidth;
      mouse.y = event.clientY / window.innerHeight;
      mouse.active = true;
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
