import React, { useEffect, useRef } from 'react';

export const PixelCanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    const pixelSize = 16; // Size of each square pixel cell
    const gap = 4; // Gap between pixel cells

    // Mouse coordinates
    let mouseX = -1000;
    let mouseY = -1000;
    let isHovering = false;

    // Grid state
    let cols = 0;
    let rows = 0;

    interface PixelNode {
      baseAlpha: number;
      targetAlpha: number;
      currentAlpha: number;
      color: string;
      speed: number;
      twinkleTimer: number;
    }

    let grid: PixelNode[][] = [];

    const initGrid = () => {
      cols = Math.ceil(width / (pixelSize + gap));
      rows = Math.ceil(height / (pixelSize + gap));
      grid = [];

      // Color palette of refined cyber purples/lilacs
      const purplePalette = [
        '197, 192, 255', // Primary Lilac (#c5c0ff)
        '168, 85, 247',  // Vibrant Purple (#a855f7)
        '139, 92, 246',  // Deep Violet (#8b5cf6)
        '124, 58, 237',  // Electric Indigo (#7c3aed)
        '216, 180, 254', // Soft Lavender (#d8b4fe)
      ];

      for (let r = 0; r < rows; r++) {
        const rowArr: PixelNode[] = [];
        for (let c = 0; c < cols; c++) {
          // Standard uniform abstract background with random cyber sparks (no centered cat shape)
          const isSpark = Math.random() < 0.08;
          const color = purplePalette[Math.floor(Math.random() * purplePalette.length)];
          const baseAlpha = isSpark
            ? 0.12 + Math.random() * 0.18
            : 0.015 + Math.random() * 0.04;

          rowArr.push({
            baseAlpha,
            targetAlpha: baseAlpha,
            currentAlpha: baseAlpha,
            color,
            speed: 0.01 + Math.random() * 0.03,
            twinkleTimer: Math.floor(Math.random() * 120),
          });
        }
        grid.push(rowArr);
      }
    };

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initGrid();
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
    resizeObserver.observe(canvas);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let frameCount = 0;

    const render = () => {
      frameCount++;
      ctx.clearRect(0, 0, width, height);

      // Subtle ambient cyber radial glow
      const centerX = width / 2;
      const centerY = height * 0.45;
      const bgGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        30,
        centerX,
        centerY,
        Math.max(width, height) * 0.65
      );
      bgGrad.addColorStop(0, 'rgba(197, 192, 255, 0.08)');
      bgGrad.addColorStop(0.4, 'rgba(124, 58, 237, 0.03)');
      bgGrad.addColorStop(1, 'rgba(19, 19, 21, 0)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const cellSize = pixelSize + gap;
      const hoverRadius = 150;

      for (let r = 0; r < rows; r++) {
        // Vertical fade factor to seamlessly blend bottom into next section
        const pixelY = r * cellSize;
        const fadeThreshold = height * 0.65;
        let verticalFadeFactor = 1.0;

        if (pixelY > fadeThreshold) {
          // Progressively fade out from 1.0 to 0.0 towards the bottom edge
          verticalFadeFactor = Math.max(0, 1 - (pixelY - fadeThreshold) / (height - fadeThreshold));
          // Apply smooth quad curve
          verticalFadeFactor = Math.pow(verticalFadeFactor, 1.5);
        }

        // Top subtle fade for navbar seamlessness
        if (pixelY < height * 0.15) {
          const topFade = pixelY / (height * 0.15);
          verticalFadeFactor = Math.min(verticalFadeFactor, topFade);
        }

        if (verticalFadeFactor <= 0.001) continue;

        for (let c = 0; c < cols; c++) {
          const node = grid[r]?.[c];
          if (!node) continue;

          const px = c * cellSize;
          const py = pixelY;
          const pCenterX = px + pixelSize / 2;
          const pCenterY = py + pixelSize / 2;

          // Compute interactive cursor proximity
          let mouseExcitement = 0;
          if (isHovering) {
            const dx = mouseX - pCenterX;
            const dy = mouseY - pCenterY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < hoverRadius) {
              mouseExcitement = (1 - dist / hoverRadius) * 0.85;
            }
          }

          // Ambient twinkling cycle
          node.twinkleTimer++;
          if (node.twinkleTimer > 80 + (r * 7 + c * 3) % 60) {
            node.twinkleTimer = 0;
            if (Math.random() < 0.25) {
              node.targetAlpha = node.baseAlpha + Math.random() * 0.3;
            } else {
              node.targetAlpha = node.baseAlpha;
            }
          }

          const target = Math.min(1, node.targetAlpha + mouseExcitement);
          node.currentAlpha += (target - node.currentAlpha) * 0.1;

          // Final rendered opacity with smooth vertical gradient dissolve
          const finalAlpha = Math.max(0, node.currentAlpha * verticalFadeFactor);

          if (finalAlpha > 0.008) {
            ctx.fillStyle = `rgba(${node.color}, ${finalAlpha})`;
            ctx.fillRect(px, py, pixelSize, pixelSize);

            // Subtle high-tech cell stroke on excited or high alpha pixels
            if (finalAlpha > 0.25 || mouseExcitement > 0.2) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${finalAlpha * 0.35})`;
              ctx.lineWidth = 1;
              ctx.strokeRect(px + 0.5, py + 0.5, pixelSize - 1, pixelSize - 1);
            }
          }
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
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
      {/* Seamless linear gradient overlay at the bottom to guarantee zero sharp cutoff */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#131315]/60 to-[#131315] pointer-events-none" />
    </div>
  );
};
