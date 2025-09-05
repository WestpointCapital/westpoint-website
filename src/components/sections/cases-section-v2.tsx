import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Building2, Factory, Heart } from 'lucide-react';

const CasesSectionV2 = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  
  const cases = [
    {
      title: "Compliance",
      description: "Security and compliance tailored for the world's most regulated industries.",
      image: "/lovable-uploads/a60fb6f4-3664-4e5d-a1d0-5426229798cf.png",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      title: "Reimbursement",
      description: "Medicare Medicaid reimbursement rates to calculate the cost.",
      image: "/lovable-uploads/64ff65fb-2e43-493d-8f26-69b03a44c20f.png",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "Validation",
      description: "Measurement of completed requirements mandatory for clinical implementation.",
      image: "/lovable-uploads/7a7a5c28-6b77-4460-95c1-697247c62b74.png",
      icon: <Factory className="w-6 h-6" />,
    },
    {
      title: "Traction",
      description: "Timeline and steps of validation.",
      image: "/lovable-uploads/f1452ced-5bcf-45ee-9593-d8525059a25b.png",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      title: "Predictive Analytics",
      description: "De-risk an innovation's funding and investment.",
      image: "/lovable-uploads/2a396632-2343-45ef-96aa-d977a05a8398.png",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  const isMobile = () => window.matchMedia("(max-width: 767px)").matches;

  const center = (i: number) => {
    if (!wrapRef.current || !trackRef.current) return;
    
    const card = trackRef.current.children[i] as HTMLElement;
    if (!card) return;
    
    const wrap = wrapRef.current;
    const isMob = isMobile();
    
    if (isMob) {
      const wrapHeight = wrap.clientHeight;
      const cardHeight = card.clientHeight;
      const start = card.offsetTop;
      wrap.scrollTo({
        top: start - (wrapHeight / 2 - cardHeight / 2),
        behavior: "smooth"
      });
    } else {
      const wrapWidth = wrap.clientWidth;
      const cardWidth = card.clientWidth;
      const start = card.offsetLeft;
      wrap.scrollTo({
        left: start - (wrapWidth / 2 - cardWidth / 2),
        behavior: "smooth"
      });
    }
  };

  const activate = (i: number, scroll: boolean = false) => {
    if (i === current) return;
    setCurrent(i);
    if (scroll) center(i);
  };

  const go = (step: number) => {
    const newIndex = Math.min(Math.max(current + step, 0), cases.length - 1);
    activate(newIndex, true);
  };

  useEffect(() => {
    const handleResize = () => center(current);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [current]);

  useEffect(() => {
    center(0);
  }, []);

  return (
    <section className="py-24 bg-slate-950">
      <div className="w-full">
        {/* Header */}
        <div className="w-[65%] mx-auto px-6 mb-16">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-blue-400">success stories</span>
            </h2>
            
            <div className="project-slider-controls">
              <button 
                className="project-nav-btn" 
                onClick={() => go(-1)}
                disabled={current === 0}
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                className="project-nav-btn" 
                onClick={() => go(1)}
                disabled={current === cases.length - 1}
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="w-full">
          <div className="w-[65%] mx-auto px-6">
            <div className="project-slider" ref={wrapRef}>
          <div className="project-track" ref={trackRef}>
            {cases.map((caseItem, index) => (
              <article 
                key={index}
                className={`project-card ${current === index ? 'active' : ''}`}
                onClick={() => activate(index, true)}
                onMouseEnter={() => window.matchMedia("(hover: hover)").matches && activate(index, true)}
              >
                <img 
                  className="project-card__bg" 
                  src={caseItem.image} 
                  alt={caseItem.title}
                />
                <div className="project-card__content">
                  <div className="frosted-box bg-gradient-to-t from-black/50 via-black/30 to-black/20">
                    <div>
                      <h3 className="project-card__title text-white">{caseItem.title}</h3>
                      <p className="project-card__desc text-white/90">{caseItem.description}</p>
                      <button className="project-card__btn bg-white text-black hover:bg-white/90">Learn More</button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="w-[65%] mx-auto px-6">
          <div className="project-dots">
            {cases.map((_, index) => (
              <span 
                key={index}
                className={`project-dot ${current === index ? 'active' : ''}`}
                onClick={() => activate(index, true)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSectionV2;