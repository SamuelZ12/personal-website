"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';

interface TiltImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function TiltImage({ src, alt, className = '' }: TiltImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const maxRotation = 8;
    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * maxRotation;
    const rotateX = -((mouseY - centerY) / (rect.height / 2)) * maxRotation;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="relative w-full aspect-video perspective-1000 p-4"
    >
      <div
        className={`w-full h-full rounded-xl transition-transform duration-200 ease-out ${className}`}
        style={{
          transform: isHovering
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  );
} 