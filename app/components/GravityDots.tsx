"use client";

import { useEffect, useRef, useState } from 'react';

interface Dot {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  targetOpacity: number;
  currentOpacity: number;
}

interface MousePosition {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

export function GravityDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animationFrameRef = useRef<number>();
  const isDarkMode = useRef(false);
  const [isGravityEnabled, setIsGravityEnabled] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();

    const spacing = 25;
    const dots: Dot[] = [];
    for (let x = 0; x < canvas.width; x += spacing) {
      for (let y = 0; y < canvas.height; y += spacing) {
        dots.push({
          x,
          y,
          originalX: x,
          originalY: y,
          targetOpacity: 0.08,
          currentOpacity: 0.08
        });
      }
    }
    dotsRef.current = dots;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const handleThemeChange = () => {
      isDarkMode.current = document.documentElement.classList.contains('dark');
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouseEasing = 0.1;
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * mouseEasing;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * mouseEasing;
      
      const mouse = {
        x: mouseRef.current.x,
        y: mouseRef.current.y
      };

      const gravitationalConstant = 2000;
      const maxDistance = 3000;
      const lightRadius = 300;
      const opacityEasing = 0.1;
      const dotRadius = 1;
      const maxOpacity = 0.4;
      const minOpacity = 0.08;

      dots.forEach((dot) => {
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (isGravityEnabled) {
          if (distance < maxDistance) {
            const force = (gravitationalConstant / (distance * distance));
            const moveX = (dx / distance) * force;
            const moveY = (dy / distance) * force;

            dot.x += moveX;
            dot.y += moveY;
          } else {
            dot.x += (dot.originalX - dot.x) * 0.1;
            dot.y += (dot.originalY - dot.y) * 0.1;
          }

          const normalizedDistance = Math.min(distance / lightRadius, 1);
          const opacityFalloff = Math.cos(normalizedDistance * Math.PI / 2);
          dot.targetOpacity = minOpacity + (maxOpacity - minOpacity) * Math.max(0, opacityFalloff);
        } else {
          dot.x += (dot.originalX - dot.x) * 0.1;
          dot.y += (dot.originalY - dot.y) * 0.1;
          dot.targetOpacity = minOpacity;
        }

        dot.currentOpacity += (dot.targetOpacity - dot.currentOpacity) * opacityEasing;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode.current 
          ? `rgba(255, 255, 255, ${dot.currentOpacity})` 
          : `rgba(0, 0, 0, ${dot.currentOpacity})`;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', updateCanvasSize);
    window.addEventListener('mousemove', handleMouseMove);
    handleThemeChange();
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isGravityEnabled]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      />
      <button
        onClick={() => setIsGravityEnabled(!isGravityEnabled)}
        className="fixed bottom-4 right-4 p-2 text-xs opacity-20 hover:opacity-100 transition-opacity duration-200"
      >
        {isGravityEnabled ? '⦿' : '◎'}
      </button>
    </>
  );
} 