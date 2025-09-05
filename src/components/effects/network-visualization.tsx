import React, { useEffect, useRef, useState } from 'react';
import { 
  Menu, CircleDot, Network, Shield, Sliders, BarChart3, 
  Database, Server, ArrowLeftRight, Globe, Mail, 
  User, Handshake, Smartphone, Cpu 
} from 'lucide-react';

const NetworkVisualization = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const platesRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const plates = [
    // Core (center)
    { id: 'p0', label: 'Core', icon: CircleDot, position: { c: 6, r: 6 } },
    
    // Control Layer  
    { id: 'p4', label: 'HTTP', icon: ArrowLeftRight, position: { c: 5, r: 4 } },
    { id: 'p5', label: 'API', icon: Network, position: { c: 7, r: 4 } },
    { id: 'p6', label: 'Config', icon: Sliders, position: { c: 9, r: 4 } },
    { id: 'p7', label: 'Security', icon: Shield, position: { c: 2, r: 3 } },
    { id: 'p8', label: 'DB', icon: Database, position: { c: 4, r: 3 } },
    { id: 'p9', label: 'Queue', icon: BarChart3, position: { c: 6, r: 3 } },

    // Service Layer
    { id: 'p1', label: 'DNS', icon: Globe, position: { c: 4, r: 5 } },
    { id: 'p2', label: 'Security', icon: Shield, position: { c: 8, r: 5 } },
    { id: 'p3', label: 'HTTP', icon: ArrowLeftRight, position: { c: 3, r: 4 } },
    { id: 'p10', label: 'Mail', icon: Mail, position: { c: 8, r: 3 } },
    { id: 'p11', label: 'Partner', icon: Handshake, position: { c: 10, r: 3 } },

    // End-user Layer
    { id: 'p12', label: 'Mobile', icon: Smartphone, position: { c: 5, r: 1.35 } },
    { id: 'p13', label: 'IoT', icon: Cpu, position: { c: 7, r: 1.35 } }
  ];

  const routes = [
    { from: 'p0', to: 'p1', color: '#6ac8ff', dash: true },
    { from: 'p0', to: 'p2', color: '#6ac8ff', dash: true },
    { from: 'p1', to: 'p3', color: '#6ac8ff', dash: true },
    { from: 'p1', to: 'p4', color: '#6ac8ff', dash: true },
    { from: 'p2', to: 'p5', color: '#6ac8ff', dash: true },
    { from: 'p2', to: 'p6', color: '#6ac8ff', dash: true },
    { from: 'p3', to: 'p7', color: '#6ac8ff', dash: true },
    { from: 'p4', to: 'p8', color: '#6ac8ff', dash: true },
    { from: 'p4', to: 'p9', color: '#6ac8ff', dash: true },
    { from: 'p5', to: 'p10', color: '#6ac8ff', dash: true },
    { from: 'p5', to: 'p11', color: '#6ac8ff', dash: true },
    { from: 'p9', to: 'p12', color: '#6ac8ff', dash: true },
    { from: 'p11', to: 'p13', color: '#6ac8ff', dash: true },
    { from: 'p12', to: 'p13', color: '#6ac8ff', dash: true }
  ];

  const [centers, setCenters] = useState<Record<string, { x: number; y: number }>>({});

  useEffect(() => {
    const updateDimensions = () => {
      if (stageRef.current) {
        const rect = stageRef.current.getBoundingClientRect();
        const newDimensions = {
          width: Math.max(640, Math.round(rect.width)),
          height: Math.max(360, Math.round(rect.height))
        };
        setDimensions(newDimensions);
        placeNodes(newDimensions);
      }
    };

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (stageRef.current) {
      resizeObserver.observe(stageRef.current);
    }

    updateDimensions();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const placeNodes = (dims: { width: number; height: number }) => {
    if (!platesRef.current) return;

    const { width: W, height: H } = dims;
    const cols = 12, rows = 7;
    const margin = Math.max(32, Math.min(W, H) * 0.06);
    const cellW = (W - 2 * margin) / cols;
    const cellH = (H - 2 * margin) / rows;

    const gx = (c: number) => margin + (c - 0.0) * cellW;
    const gy = (r: number) => margin + (r - 0.0) * cellH;

    const newCenters: Record<string, { x: number; y: number }> = {};

    plates.forEach(plate => {
      const element = platesRef.current?.querySelector(`[data-id="${plate.id}"]`) as HTMLElement;
      if (!element) return;

      const cx = gx(plate.position.c);
      const cy = gy(plate.position.r);
      const hw = 25;
      const hh = 25;

      element.style.left = `${Math.round(cx - hw)}px`;
      element.style.top = `${Math.round(cy - hh)}px`;

      newCenters[plate.id] = { x: cx, y: cy };
    });

    setCenters(newCenters);
  };

  const createGrid = () => {
    const { width: W, height: H } = dimensions;
    const target = Math.min(W, H) / 24;
    const choices = [12, 14, 16, 18, 20, 22, 24, 26, 28, 32];
    let step = choices[0];
    for (const c of choices) {
      if (Math.abs(c - target) < Math.abs(step - target)) step = c;
    }

    const segments = [];
    const ox = 0.5, oy = 0.5, maxX = W - 0.5, maxY = H - 0.5;
    
    for (let x = ox; x <= maxX; x += step) {
      segments.push(`M${x} ${oy} V${maxY}`);
    }
    for (let y = oy; y <= maxY; y += step) {
      segments.push(`M${ox} ${y} H${maxX}`);
    }

    return segments.join(' ');
  };

  const orthoPathWithTangency = (ax: number, ay: number, bx: number, by: number, r: number) => {
    const dx = Math.abs(bx - ax), dy = Math.abs(by - ay);
    const sx = Math.sign(bx - ax) || 1, sy = Math.sign(by - ay) || 1;
    
    if (dx < 1 || dy < 1) {
      return { 
        d: `M${ax} ${ay} L${bx} ${by}`, 
        tangency: { x: (ax + bx) / 2, y: (ay + by) / 2 } 
      };
    }
    
    if (dx >= dy) {
      const tx = bx - sx * r, ty = ay, cx = tx, cy = ay + sy * r, y2 = by - sy * r;
      const d = `M${ax} ${ay} L${tx} ${ty} Q${cx} ${ay} ${cx} ${cy} L${bx - sx * r} ${y2} Q${bx} ${by - sy * r} ${bx} ${by}`;
      return { d, tangency: { x: tx, y: ty } };
    } else {
      const tx = ax, ty = by - sy * r, cx = ax + sx * r, cy = ty, x2 = bx - sx * r;
      const d = `M${ax} ${ay} L${tx} ${ty} Q${ax} ${cy} ${cx} ${cy} L${x2} ${by - sy * r} Q${bx - sx * r} ${by} ${bx} ${by}`;
      return { d, tangency: { x: tx, y: ty } };
    }
  };

  const createPath = (fromId: string, toId: string) => {
    const fromCenter = centers[fromId];
    const toCenter = centers[toId];
    
    if (!fromCenter || !toCenter) return { d: '', tangency: { x: 0, y: 0 } };

    return orthoPathWithTangency(fromCenter.x, fromCenter.y, toCenter.x, toCenter.y, 1);
  };

  if (dimensions.width === 0) return null;

  return (
    <div 
      className="relative rounded-3xl overflow-hidden"
      style={{
        minHeight: 'clamp(520px, 98vh, 900px)',
        background: 'radial-gradient(120% 100% at 50% 20%, #4b2bb0 0%, #0e1a4a 50%, #081326 100%)',
        isolation: 'isolate',
        marginBottom: 'calc(8px * 3)'
      }}
    >
      {/* Corner Button */}
      <button 
        className="absolute z-[6] w-14 h-14 rounded-full border-none bg-transparent p-0 cursor-pointer flex items-center justify-center"
        style={{ 
          top: '14px',
          left: '14px',
          filter: 'drop-shadow(0 8px 28px rgba(0, 0, 0, .45))' 
        }}
        aria-label="Menu"
      >
        <svg className="absolute inset-0" viewBox="0 0 80 80" aria-hidden="true">
          <circle cx="40" cy="40" r="28" fill="#0a0a0a"/>
          <circle cx="40" cy="40" r="34" fill="#141414" opacity=".95"/>
          <circle cx="40" cy="40" r="38" fill="#1e1e1e" opacity=".88"/>
          <circle cx="40" cy="40" r="40" fill="#2a2a2a" opacity=".82"/>
        </svg>
        <Menu 
          className="relative z-[2] text-gray-200" 
          size={15}
          style={{ textShadow: '0 1px 0 #000' }} 
        />
      </button>

      {/* SVG Stage */}
      <div 
        ref={stageRef}
        className="absolute inset-0 z-[1]"
      >
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          className="w-full h-full"
          role="img"
          aria-hidden="true"
        >
          <defs>
            <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="2.2" result="b"/>
              <feMerge>
                <feMergeNode in="b"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <marker
              id="arrowBlue"
              viewBox="0 0 10 6"
              refX="9"
              refY="3"
              markerWidth="10"
              markerHeight="6"
              orient="auto"
            >
              <path d="M0 0 L10 3 L0 6 Z" fill="#6ac8ff" />
            </marker>
            <marker
              id="arrowHot"
              viewBox="0 0 10 6"
              refX="9"
              refY="3"
              markerWidth="10"
              markerHeight="6"
              orient="auto"
            >
              <path d="M0 0 L10 3 L0 6 Z" fill="#ff6a3d" />
            </marker>
          </defs>

          {/* Grid */}
          <path
            d={createGrid()}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
            fill="none"
            pointerEvents="none"
            shapeRendering="crispEdges"
          />

          {/* Connection Lines */}
          {routes.map((route, index) => {
            const { d } = createPath(route.from, route.to);
            return (
              <path
                key={index}
                d={d}
                fill="none"
                stroke={route.color}
                strokeWidth="2"
                strokeDasharray={route.dash ? "4 8" : "none"}
                strokeLinecap="round"
                filter="url(#glow)"
                opacity="0.95"
                vectorEffect="non-scaling-stroke"
              />
            );
          })}

          {/* Connection Dots */}
          {routes.map((route, index) => {
            const { tangency } = createPath(route.from, route.to);
            return (
              <circle
                key={`dot-${index}`}
                cx={tangency.x}
                cy={tangency.y}
                r="6"
                fill="none"
                stroke="#4cff9a"
                strokeWidth="2"
                className="node-dot"
              />
            );
          })}
        </svg>
      </div>

      {/* Floating Plates */}
      <div ref={platesRef} className="absolute inset-0 z-[3] pointer-events-none">
        {plates.map((plate) => {
          const Icon = plate.icon;
          
          return (
            <div
              key={plate.id}
              data-id={plate.id}
              data-label={plate.label}
              className="absolute w-[50px] h-[50px] flex items-center justify-content pointer-events-auto transform-gpu rounded-[10px] border"
              style={{
                color: '#dff7ff',
                fontSize: '1.1rem',
                borderColor: '#37a6b3',
                background: 'rgba(55,166,179,.15)',
                boxShadow: '0 8px 40px rgba(34, 34, 34, 0.67), 0 2px 8px rgba(0, 0, 0, 0.27)',
                backdropFilter: 'blur(6px)'
              }}
            >
              <Icon className="w-5 h-5 mx-auto" />
              <span 
                className="absolute top-[52px] left-1/2 transform -translate-x-1/2 whitespace-nowrap font-semibold tracking-wide"
                style={{ 
                  fontSize: '.7rem',
                  color: '#cbe8ff', 
                  textShadow: '0 0 6px rgba(0, 0, 0, 0.67)',
                  letterSpacing: '.02em'
                }}
              >
                {plate.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div 
        className="relative z-[2] h-full flex items-center justify-center text-center mx-auto"
        style={{ 
          color: '#eaf2ff',
          maxWidth: '900px',
          padding: 'calc(8px * 10) calc(8px * 6)',
          textShadow: '0 1px 10px rgba(0, 0, 0, .35)'
        }}
      >
        <div>
          <h1 
            className="font-extrabold mb-2"
            style={{ 
              margin: '0 0 .2em',
              fontSize: 'clamp(2.6rem, 7vw, 5.6rem)',
              letterSpacing: '.01em',
              fontWeight: '800'
            }}
          >
            Network Systems
          </h1>
          <p 
            className="mb-4"
            style={{ 
              margin: '.2em 0 1.1em',
              fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
              color: '#cfe7ff'
            }}
          >
            From Core to Client
          </p>
          <a 
            className="inline-block no-underline font-semibold transition-all duration-200"
            href="#contact"
            style={{
              padding: '.9em 1.3em',
              borderRadius: '12px',
              color: '#001',
              background: 'linear-gradient(180deg, #2be4ff, #1263ff)',
              boxShadow: '0 14px 40px rgba(18, 99, 255, .35), inset 0 0 18px rgba(255, 255, 255, .15)',
              fontWeight: '600'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.filter = 'saturate(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.filter = 'saturate(1)';
            }}
          >
            Let's build
          </a>
        </div>
      </div>
    </div>
  );
};

export default NetworkVisualization;