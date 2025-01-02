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

export function GravityDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
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

    const spacing = 40;
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
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
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
      
      const mouse = mouseRef.current;
      const gravitationalConstant = 2000;
      const maxDistance = 10000;
      const lightRadius = 100;
      const opacityEasing = 0.1;
      const dotRadius = 1;

      dots.forEach((dot) => {
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (isGravityEnabled && distance < maxDistance) {
          const force = (gravitationalConstant / (distance * distance));
          const moveX = (dx / distance) * force;
          const moveY = (dy / distance) * force;

          dot.x += moveX;
          dot.y += moveY;
        } else if (!isGravityEnabled) {
          // Reset position when gravity is disabled
          dot.x = dot.originalX;
          dot.y = dot.originalY;
        } else {
          // When gravity is enabled but dot is beyond maxDistance
          dot.x += (dot.originalX - dot.x) * 0.1;
          dot.y += (dot.originalY - dot.y) * 0.1;
        }

        // Always calculate opacity based on distance to mouse
        dot.targetOpacity = Math.max(0.08, Math.min(0.3, 1 - (distance / lightRadius)));
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