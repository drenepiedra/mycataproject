import React, { useEffect, useRef } from 'react';

export const AmbientPixelField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    let mouseX = -1000;
    let mouseY = -1000;
    let isHovering = false;

    // Scattered pixel clusters
    interface ScatteredPixel {
      x: number; // percentage or px
      y: number;
      size: number;
      color: string;
      baseAlpha: number;
      currentAlpha: number;
      targetAlpha: number;
      twinkleSpeed: number;
      twinklePhase: number;
      shapeType: 'single' | 'duo_h' | 'duo_v' | 'l_shape' | 'cross';
    }

    let pixels: ScatteredPixel[] = [];

    const purplePalette = [
      '197, 192, 255', // Lilac
      '168, 85, 247',  // Soft Violet
      '139, 92, 246',  // Deep Lavender
      '100, 240, 255', // Cyan Accent
    ];

    const generatePixels = () => {
      pixels = [];
      const pixelCount = Math.max(35, Math.floor((width * height) / 45000));

      const shapeOptions: ScatteredPixel['shapeType'][] = [
        'single',
        'single',
        'duo_h',
        'duo_v',
        'l_shape',
      ];

      for (let i = 0; i < pixelCount; i++) {
        // Distribute mainly below the hero section (from 20% height downwards to bottom)
        const y = Math.random() * height;
        const x = Math.random() * width;
        const color = purplePalette[Math.floor(Math.random() * purplePalette.length)];
        const isCyan = color === '100, 240, 255';
        const baseAlpha = isCyan
          ? 0.04 + Math.random() * 0.08
          : 0.03 + Math.random() * 0.12;

        pixels.push({
          x,
          y,
          size: Math.random() > 0.7 ? 12 : 8,
          color,
          baseAlpha,
          currentAlpha: baseAlpha,
          targetAlpha: baseAlpha,
          twinkleSpeed: 0.02 + Math.random() * 0.03,
          twinklePhase: Math.random() * Math.PI * 2,
          shapeType: shapeOptions[Math.floor(Math.random() * shapeOptions.length)],
        });
      }
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      generatePixels();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovering = true;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      isHovering = false;
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const hoverRadius = 140;

      for (const p of pixels) {
        // Twinkle oscillation
        p.twinklePhase += p.twinkleSpeed;
        const osc = Math.sin(p.twinklePhase) * 0.5 + 0.5;
        p.targetAlpha = p.baseAlpha + osc * 0.14;

        // Mouse proximity boost
        let boost = 0;
        if (isHovering) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < hoverRadius) {
            boost = (1 - dist / hoverRadius) * 0.45;
          }
        }

        const effectiveTarget = Math.min(0.85, p.targetAlpha + boost);
        p.currentAlpha += (effectiveTarget - p.currentAlpha) * 0.1;

        if (p.currentAlpha <= 0.01) continue;

        ctx.fillStyle = `rgba(${p.color}, ${p.currentAlpha})`;

        const s = p.size;
        const gap = 2;

        // Render micro pixel blocks depending on shape
        if (p.shapeType === 'single') {
          ctx.fillRect(p.x, p.y, s, s);
        } else if (p.shapeType === 'duo_h') {
          ctx.fillRect(p.x, p.y, s, s);
          ctx.fillRect(p.x + s + gap, p.y, s, s);
        } else if (p.shapeType === 'duo_v') {
          ctx.fillRect(p.x, p.y, s, s);
          ctx.fillRect(p.x, p.y + s + gap, s, s);
        } else if (p.shapeType === 'l_shape') {
          ctx.fillRect(p.x, p.y, s, s);
          ctx.fillRect(p.x, p.y + s + gap, s, s);
          ctx.fillRect(p.x + s + gap, p.y + s + gap, s, s);
        } else if (p.shapeType === 'cross') {
          ctx.fillRect(p.x, p.y - s - gap, s, s);
          ctx.fillRect(p.x - s - gap, p.y, s, s);
          ctx.fillRect(p.x, p.y, s, s);
          ctx.fillRect(p.x + s + gap, p.y, s, s);
          ctx.fillRect(p.x, p.y + s + gap, s, s);
        }

        // Crisp subtle stroke if highlighted
        if (p.currentAlpha > 0.22) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${p.currentAlpha * 0.35})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(p.x + 0.5, p.y + 0.5, s - 1, s - 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    handleResize();
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 select-none"
    />
  );
};
