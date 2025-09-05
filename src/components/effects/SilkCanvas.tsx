import { useRef, useEffect } from 'react';

interface SilkCanvasProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
}

const SilkCanvas = ({ 
  speed = 5, 
  scale = 1, 
  color = '#7B7481', 
  noiseIntensity = 1.5, 
  rotation = 0 
}: SilkCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255
      } : { r: 0.48, g: 0.45, b: 0.51 };
    };

    const rgb = hexToRgb(color);

    // Improved noise function based on ReactBits implementation
    const noise = (x: number, y: number): number => {
      const G = Math.E;
      const rx = G * Math.sin(G * x);
      const ry = G * Math.sin(G * y);
      return ((rx * ry * (1.0 + x)) % 1 + 1) % 1;
    };

    const rotateUvs = (x: number, y: number, angle: number) => {
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      return {
        x: x * c - y * s,
        y: x * s + y * c
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const animate = () => {
      if (!canvas || !ctx) return;

      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      
      ctx.clearRect(0, 0, width, height);
      
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      // Process every pixel for better quality
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          // Normalize coordinates to match shader UV space (-1 to 1)
          const uv = {
            x: (x / width) * 2 - 1,
            y: (y / height) * 2 - 1
          };

          // Apply rotation
          const rotated = rotateUvs(uv.x * scale, uv.y * scale, rotation);
          
          // Create texture coordinates with proper scaling
          let tex = { x: rotated.x * scale, y: rotated.y * scale };
          const tOffset = speed * time * 0.01;

          // Add wave distortion - key for silk effect
          tex.y += 0.03 * Math.sin(8.0 * tex.x - tOffset);

          // Generate the complex silk pattern exactly as in the shader
          const pattern = 0.6 + 0.4 * Math.sin(
            5.0 * (tex.x + tex.y + 
              Math.cos(3.0 * tex.x + 5.0 * tex.y) + 
              0.02 * tOffset) + 
            Math.sin(20.0 * (tex.x + tex.y - 0.1 * tOffset))
          );

          // Add noise for organic texture
          const rnd = noise(x * 0.01 + time * 0.001, y * 0.01 + time * 0.001);
          const finalPattern = Math.max(0, Math.min(1, pattern - (rnd / 15.0) * noiseIntensity));

          // Apply color with proper intensity mapping
          const intensity = finalPattern;
          const alpha = 1.0;

          const index = (y * width + x) * 4;
          if (index < data.length - 3) {
            data[index] = rgb.r * intensity * 255;     // R
            data[index + 1] = rgb.g * intensity * 255; // G
            data[index + 2] = rgb.b * intensity * 255; // B
            data[index + 3] = alpha * 255;             // A
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      time++;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Setup
    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resize);
    };
  }, [speed, scale, color, noiseIntensity, rotation]);

  return (
    <canvas 
      ref={canvasRef}
      className="w-full h-full block"
      style={{
        background: `linear-gradient(135deg, ${color}10 0%, ${color}05 50%, ${color}15 100%)`
      }}
    />
  );
};

export default SilkCanvas;
