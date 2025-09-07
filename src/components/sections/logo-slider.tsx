import { useEffect, useRef } from 'react';

const LogoSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fake company logos - using text placeholders
  const logos = [
    'Microsoft',
    'Google',
    'Amazon',
    'Apple',
    'Meta',
    'Tesla',
    'Netflix',
    'Adobe',
    'Salesforce',
    'Oracle',
    'IBM',
    'Intel',
    'NVIDIA',
    'Spotify',
    'Uber'
  ];

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth / 2;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5; // Moderate speed
      if (scrollPosition >= scrollWidth) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 16); // ~60fps for smooth animation

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-16 bg-slate-950 overflow-hidden">
      <div className="w-[65%] mx-auto px-4">
        
        <div 
          ref={scrollRef}
          className="flex gap-12 overflow-hidden whitespace-nowrap"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-16 px-8 text-xl font-semibold text-white/60 hover:text-blue-400 transition-colors duration-300"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;