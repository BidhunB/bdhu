"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Point {
  x: number;
  y: number;
}

class UnifiedParticle {
  x: number;
  y: number;
  targetX: number | null;
  targetY: number | null;
  vx: number;
  vy: number;
  size: number;
  color: string;
  baseColor: string; 
  currentColor: string; 
  friction: number;
  ease: number;
  canvasWidth: number;
  canvasHeight: number;
  opacity: number;
  opacitySpeed: number;
  opacityDirection: number;
  isPortrait: boolean;
  themeRgb: string;

  constructor(width: number, height: number, theme: string, startX?: number, startY?: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    
    // If start position provided, use it. Otherwise random.
    this.x = startX !== undefined ? startX : Math.random() * width;
    this.y = startY !== undefined ? startY : Math.random() * height;
    
    this.targetX = null;
    this.targetY = null;
    this.isPortrait = false;
    
    // Sparkles style movement: EXTREMELY subtle sway
    this.vx = (Math.random() - 0.5) * 0.05; 
    this.vy = (Math.random() - 0.5) * 0.05;
    
    // Sparkles style size: 1-2px (Crisp constellation look)
    this.size = Math.random() * 1 + 1;
    
    // Twinkle opacity
    this.opacity = Math.random() * 0.9 + 0.1;
    this.opacitySpeed = Math.random() * 0.02 + 0.005;
    this.opacityDirection = Math.random() > 0.5 ? 1 : -1;
    
    const baseRgb = theme === 'dark' ? '255, 255, 255' : '0, 0, 0';
    this.themeRgb = baseRgb;
    this.baseColor = `rgba(${baseRgb}, ${this.opacity})`;
    this.currentColor = this.baseColor;
    this.color = this.baseColor;

    this.friction = 0.94; // Smooth glide
    this.ease = 0.02; // Gentle pull
  }

  setTarget(x: number, y: number, color: string) {
    this.targetX = x;
    this.targetY = y;
    this.baseColor = color; 
    this.isPortrait = true;
  }

  update(mouse: { x: number, y: number, radius: number }, isMorphing: boolean) {
    const dxMouse = mouse.x - this.x;
    const dyMouse = mouse.y - this.y;
    const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
    let isInteracting = false;

    // Mouse Interaction (Repel)
    if (distMouse < mouse.radius) {
      isInteracting = true;
      const forceDirectionX = dxMouse / distMouse;
      const forceDirectionY = dyMouse / distMouse;
      const force = (mouse.radius - distMouse) / mouse.radius;
      
      const repelStrength = 1.0; // Stronger interaction restored
      this.vx -= forceDirectionX * force * repelStrength;
      this.vy -= forceDirectionY * force * repelStrength;
    }

    if (isMorphing && this.targetX !== null && this.targetY !== null) {
      this.currentColor = this.baseColor; 
      this.opacity += (1 - this.opacity) * 0.05;
      
      const dx = this.targetX - this.x;
      const dy = this.targetY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Only snap if NOT interacting with mouse
      if (!isInteracting && distance < 0.5) {
          this.x = this.targetX;
          this.y = this.targetY;
          this.vx = 0;
          this.vy = 0;
      } else {
          // Seek target
          const forceX = dx * this.ease;
          const forceY = dy * this.ease;
          this.vx += forceX;
          this.vy += forceY;
          this.vx *= this.friction; 
          this.vy *= this.friction;
      }
      
    } else {
      this.opacity += this.opacitySpeed * this.opacityDirection;
      if (this.opacity > 1) {
          this.opacity = 1;
          this.opacityDirection = -1;
      } else if (this.opacity < 0.1) {
          this.opacity = 0.1;
          this.opacityDirection = 1;
      }
      
      this.currentColor = `rgba(${this.themeRgb}, ${this.opacity})`;

      this.vx += (Math.random() - 0.5) * 0.01;
      this.vy += (Math.random() - 0.5) * 0.01;

      if (this.x < 0) this.x = this.canvasWidth;
      if (this.x > this.canvasWidth) this.x = 0;
      if (this.y < 0) this.y = this.canvasHeight;
      if (this.y > this.canvasHeight) this.y = 0;
      
      this.vx *= this.friction;
      this.vy *= this.friction;
    }

    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.currentColor;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

interface HeroParticlesProps {
  imageSrc?: string;
  morphDelay?: number;
}

const HeroParticles: React.FC<HeroParticlesProps> = ({
  imageSrc = "/bdhu.png",
  morphDelay = 2000,
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
    let isMorphing = false;
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

      // 1. Create Portrait Particles (Randomly distributed in Right 60%)
      for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {
          const index = (y * canvas.width + x) * 4;
          const alpha = imageData.data[index + 3];
          
          if (alpha > 128) {
             const red = imageData.data[index];
             const green = imageData.data[index + 1];
             const blue = imageData.data[index + 2];
             const color = `rgba(${red}, ${green}, ${blue}, ${alpha/255})`;
             
             // Random spawn in the right 60% of the screen
             // No clustering, no hard line
             const spawnX = (Math.random() * 0.6 + 0.4) * canvas.width;
             const spawnY = Math.random() * canvas.height;
             
             const p = new UnifiedParticle(canvas.width, canvas.height, resolvedTheme || 'light', spawnX, spawnY);
             p.setTarget(x, y, color);
             particles.push(p);
          }
        }
      }

      // 2. Create Ambient Particles (Spawn ANYWHERE)
      const ambientBuffer = 600; 
      for (let i = 0; i < ambientBuffer; i++) {
          particles.push(new UnifiedParticle(canvas.width, canvas.height, resolvedTheme || 'light'));
      }

      setTimeout(() => { isMorphing = true; }, morphDelay);
      animate();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
          p.update(mouse, isMorphing);
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
  }, [dimensions, imageSrc, morphDelay, resolvedTheme, mounted]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto z-0">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default HeroParticles;
