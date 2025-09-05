import { useEffect, useRef } from 'react';

const SilkCSS = ({ 
  speed = 5, 
  scale = 1, 
  color = '#7B7481', 
  noiseIntensity = 1.5, 
  rotation = 0 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create multiple layers for depth
    const layers = [
      { speed: speed * 0.3, opacity: 0.6, scale: scale * 1.2 },
      { speed: speed * 0.6, opacity: 0.4, scale: scale * 0.8 },
      { speed: speed * 1.0, opacity: 0.8, scale: scale * 1.0 }
    ];

    layers.forEach((layer, index) => {
      const layerDiv = document.createElement('div');
      layerDiv.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          45deg,
          ${color}22,
          ${color}44,
          ${color}22,
          ${color}66,
          ${color}22
        );
        background-size: ${200 * layer.scale}px ${200 * layer.scale}px;
        animation: silkFlow${index} ${20 / layer.speed}s linear infinite;
        opacity: ${layer.opacity};
        transform: rotate(${rotation}deg);
      `;
      
      container.appendChild(layerDiv);
    });

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes silkFlow0 {
        0% { background-position: 0% 0%; }
        100% { background-position: 100% 100%; }
      }
      @keyframes silkFlow1 {
        0% { background-position: 100% 0%; }
        100% { background-position: 0% 100%; }
      }
      @keyframes silkFlow2 {
        0% { background-position: 0% 100%; }
        100% { background-position: 100% 0%; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
      container.innerHTML = '';
      document.head.removeChild(style);
    };
  }, [speed, scale, color, rotation]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at 20% 50%, ${color}33 0%, transparent 50%),
                     radial-gradient(circle at 80% 20%, ${color}22 0%, transparent 50%),
                     radial-gradient(circle at 40% 80%, ${color}44 0%, transparent 50%)`,
      }}
    >
      {/* Additional noise overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, ${color}55 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, ${color}33 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, ${color}44 1.5px, transparent 1.5px)
          `,
          backgroundSize: '50px 50px, 30px 30px, 40px 40px',
          animation: `noise ${10 / speed}s linear infinite`
        }}
      />
      
      {/* Flowing wave patterns */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `linear-gradient(
            90deg,
            transparent 0%,
            ${color}22 25%,
            ${color}44 50%,
            ${color}22 75%,
            transparent 100%
          )`,
          backgroundSize: '200% 100%',
          animation: `wave ${15 / speed}s ease-in-out infinite`
        }}
      />
    </div>
  );
};

export default SilkCSS;
