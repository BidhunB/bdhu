"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

class UnifiedParticle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  friction: number;
  ease: number;
  canvasWidth: number;
  canvasHeight: number;
  opacity: number;
  opacitySpeed: number;
  opacityDirection: number;

  constructor(width: number, height: number, theme: string, x: number, y: number, color: string) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    
    this.x = x;
    this.y = y;
    this.originX = x;
    this.originY = y;
    
    this.vx = 0;
    this.vy = 0;
    
    // Small, crisp dots (Constellation look)
    this.size = Math.random() * 1 + 1; // 1px - 2px
    
    this.opacity = 1;
    this.opacitySpeed = Math.random() * 0.005;
    this.opacityDirection = Math.random() > 0.5 ? 1 : -1;
    
    this.color = color;
    this.friction = 0.90; 
    this.ease = 0.05; 
  }

  update(mouse: { x: number, y: number, radius: number }) {
    const dxMouse = mouse.x - this.x;
    const dyMouse = mouse.y - this.y;
    const distMouseSq = dxMouse * dxMouse + dyMouse * dyMouse;
    const mouseRadiusSq = mouse.radius * mouse.radius;

    // Mouse Interaction (Repel) - Optimized to avoid sqrt
    if (distMouseSq < mouseRadiusSq) {
      const distMouse = Math.sqrt(distMouseSq);
      const forceDirectionX = dxMouse / distMouse;
      const forceDirectionY = dyMouse / distMouse;
      const force = (mouse.radius - distMouse) / mouse.radius;
      
      const repelStrength = 2.0; 
      this.vx -= forceDirectionX * force * repelStrength;
      this.vy -= forceDirectionY * force * repelStrength;
    }

    // Return to origin
    const dx = this.originX - this.x;
    const dy = this.originY - this.y;
    
    // Optimization: If particle is near origin, not moving, and not near mouse, skip physics
    const distOriginSq = dx * dx + dy * dy;
    const isMoving = Math.abs(this.vx) > 0.01 || Math.abs(this.vy) > 0.01;
    
    if (isMoving || distOriginSq > 0.01) {
        const forceX = dx * this.ease;
        const forceY = dy * this.ease;
        
        this.vx += forceX;
        this.vy += forceY;
        
        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;
    } else {
        // Snap to grid to prevent micro-jitters
        this.x = this.originX;
        this.y = this.originY;
    }
    
    // Subtle breathing
    this.opacity += this.opacitySpeed * this.opacityDirection;
    if (this.opacity > 1) {
        this.opacity = 1;
        this.opacityDirection = -1;
    } else if (this.opacity < 0.8) {
        this.opacity = 0.8;
        this.opacityDirection = 1;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

interface HeroParticlesProps {
  imageSrc?: string;
}

const HeroParticles: React.FC<HeroParticlesProps> = ({
  imageSrc = "/bdhu.png",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    let particles: UnifiedParticle[] = [];
    let animationFrameId: number;
    let mouse = { x: -9999, y: -9999, radius: 100 };

    const image = new Image();
    image.src = imageSrc;
    image.crossOrigin = "Anonymous";

    image.onload = () => {
      const offCanvas = document.createElement('canvas');
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return;

      const targetWidth = canvas.width * 0.55; 
      const ar = image.width / image.height;
      let drawWidth = targetWidth;
      let drawHeight = drawWidth / ar;

      if (drawHeight > canvas.height * 0.95) {
          drawHeight = canvas.height * 0.95;
          drawWidth = drawHeight * ar;
      }

      const startX = canvas.width - drawWidth; 
      const startY = (canvas.height - drawHeight) / 2;

      offCanvas.width = canvas.width;
      offCanvas.height = canvas.height;
      offCtx.drawImage(image, startX, startY, drawWidth, drawHeight);
      
      const imageData = offCtx.getImageData(0, 0, canvas.width, canvas.height);
      const gap = 6;   

      particles = [];

      // Create Portrait Particles ONLY (No Ambient)
      for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {
          const index = (y * canvas.width + x) * 4;
          const alpha = imageData.data[index + 3];
          
          if (alpha > 128) {
             const red = imageData.data[index];
             const green = imageData.data[index + 1];
             const blue = imageData.data[index + 2];
             const color = `rgba(${red}, ${green}, ${blue}, ${alpha/255})`;
             
             // Spawn directly at target
             particles.push(new UnifiedParticle(canvas.width, canvas.height, resolvedTheme || 'light', x, y, color));
          }
        }
      }

      animate();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
          p.update(mouse);
          p.draw(ctx);
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [dimensions, imageSrc, resolvedTheme, mounted]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto z-0">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default HeroParticles;
