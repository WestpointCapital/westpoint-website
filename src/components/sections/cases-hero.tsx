import { useState, useEffect, useRef } from 'react';

const CasesHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const runningTimeRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Odyssey-No-Grain-3k-scaled%20%281%29.webp",
      title: "CASES",
      name: "VILLA VIE RESIDENCES",
      description: "We helped them reactivate old and new leads and gain more than 5 million+ revenue."
    },
    {
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Bedre-klima-vogn-1024x768.webp",
      title: "CASES", 
      name: "BEDREKLIMA",
      description: "We helped scale this HVAC company to 40% of sales online through SMS marketing."
    },
    {
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Nicolinehus-Aarhus-Oe.webp",
      title: "CASES",
      name: "NICOLINEHUS APARTMENTS", 
      description: "Helped develop software to manage apartment availability and launch email campaigns."
    },
    {
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/nrs1.png",
      title: "CASES",
      name: "NORDIC REFRIGERATION SOLUTIONS",
      description: "Running comprehensive SMS marketing campaigns for all signed up leads, automating customer communication and streamlining the sales process with AI-powered responses."
    },
    {
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Showerheads.png",
      title: "CASES",
      name: "SWISSBLU",
      description: "Comprehensive email marketing campaigns that transformed their customer engagement and increased sales through targeted automation and personalized messaging strategies."
    }
  ];

  const timeRunning = 3000;
  const timeAutoNext = 9000;

  const resetTimeAnimation = () => {
    if (runningTimeRef.current) {
      runningTimeRef.current.style.animation = 'none';
      runningTimeRef.current.offsetHeight;
      runningTimeRef.current.style.animation = 'runningTime 9s linear 1 forwards';
    }
  };

  const showSlider = (type: 'next' | 'prev') => {
    if (type === 'next') {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }
    
    if (carouselRef.current) {
      carouselRef.current.classList.add(type);
      
      setTimeout(() => {
        if (carouselRef.current) {
          carouselRef.current.classList.remove('next', 'prev');
        }
      }, timeRunning);
    }
    
    resetTimeAnimation();
  };

  useEffect(() => {
    const autoNext = setInterval(() => {
      showSlider('next');
    }, timeAutoNext);

    return () => clearInterval(autoNext);
  }, []);

  useEffect(() => {
    resetTimeAnimation();
  }, []);

  const getItemClass = (index: number) => {
    const adjustedIndex = (index - currentIndex + items.length) % items.length;
    
    if (adjustedIndex === 0) return 'carousel-item-1';
    if (adjustedIndex === 1) return 'carousel-item-2';
    if (adjustedIndex === 2) return 'carousel-item-3';
    if (adjustedIndex === 3) return 'carousel-item-4';
    if (adjustedIndex === 4) return 'carousel-item-5';
    return 'carousel-item-hidden';
  };

  return (
    <div className="carousel-container" ref={carouselRef}>
      <style>{`
        .carousel-container {
          width: 100%;
          max-width: 100vw;
          height: calc(100vh - 80px);
          overflow: hidden;
          position: relative;
          z-index: 0;
        }

        .carousel-list .carousel-item {
          width: 180px;
          height: 250px;
          position: absolute;
          top: 80%;
          transform: translateY(-70%);
          left: 70%;
          border-radius: 20px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
          background-position: 50% 50%;
          background-size: cover;
          z-index: 100;
          transition: 1s;
        }

        .carousel-item-1,
        .carousel-item-2 {
          top: 0 !important;
          left: 0 !important;
          transform: translate(0, 0) !important;
          border-radius: 0 !important;
          width: 100% !important;
          height: 100% !important;
        }

        .carousel-item-3 {
          left: 67% !important;
          z-index: 103;
        }

        .carousel-item-4 {
          left: calc(67% + 200px) !important;
          z-index: 102;
        }

        .carousel-item-5 {
          left: calc(67% + 400px) !important;
          z-index: 101;
        }

        .carousel-item-2 { z-index: 105; }
        .carousel-item-1 { z-index: 104; }

        .carousel-item-hidden {
          left: calc(67% + 600px) !important;
          opacity: 0 !important;
        }

        .item-content {
          position: absolute;
          top: 50%;
          left: 17.5%;
          transform: translateY(-50%);
          width: 65%;
          max-width: 500px;
          text-align: left;
          color: #FFFFFF;
          display: none;
        }

        .carousel-item-1 .item-content,
        .carousel-item-2 .item-content {
          display: block;
        }

        .content-title {
          font-size: 50px;
          text-transform: uppercase;
          color: #60a5fa;
          font-weight: bold;
          line-height: 1;
          opacity: 0;
          animation: animate 1s ease-in-out 0.3s 1 forwards;
        }

        .content-name {
          font-size: 50px;
          text-transform: uppercase;
          font-weight: bold;
          line-height: 1;
          margin-bottom: 20px;
          opacity: 0;
          animation: animate 1s ease-in-out 0.6s 1 forwards;
        }

        .content-description {
          margin-top: 10px;
          margin-bottom: 20px;
          font-size: 18px;
          margin-left: 5px;
          opacity: 0;
          animation: animate 1s ease-in-out 0.9s 1 forwards;
        }

        .content-buttons {
          margin-left: 5px;
          opacity: 0;
          animation: animate 1s ease-in-out 1.2s 1 forwards;
        }

        @keyframes animate {
          from {
            opacity: 0;
            transform: translate(0, 100px);
            filter: blur(33px);
          }
          to {
            opacity: 1;
            transform: translate(0);
            filter: blur(0);
          }
        }

        .content-button {
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          font-size: 16px;
          border: 2px solid #FFFFFF;
          transition: 0.3s;
          background: white;
          color: black;
          border-radius: 300px;
        }

        .content-button:hover {
          background: #60a5fa;
          color: #FFFFFF;
          border-color: #60a5fa;
        }

        .carousel-arrows {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-top: 66px;
        }

        .arrow-button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #60a5fa;
          color: #FFFFFF;
          border: none;
          outline: none;
          font-size: 16px;
          font-family: monospace;
          font-weight: bold;
          transition: 0.5s;
          cursor: pointer;
        }

        .arrow-button:hover {
          background: #FFFFFF;
          color: #000000;
        }

        .time-running {
          position: absolute;
          z-index: 1000;
          width: 0%;
          height: 4px;
          background-color: #60a5fa;
          left: 0;
          top: 0;
        }

        @keyframes runningTime {
          from { width: 0%; }
          to { width: 100%; }
        }

        @media screen and (max-width: 999px) {
          .item-content {
            left: 50px;
          }
          .content-title,
          .content-name {
            font-size: 50px;
          }
          .content-description {
            font-size: 16px;
          }
        }

        @media screen and (max-width: 690px) {
          .item-content {
            top: 40%;
          }
          .content-title,
          .content-name {
            font-size: 35px;
          }
          .content-button {
            padding: 10px 15px;
            font-size: 14px;
          }
        }

        @media screen and (max-width: 450px) {
          .item-content {
            width: 300px;
            left: 20px;
          }
        }
      `}</style>

      <div className="carousel-list" ref={listRef}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${getItemClass(index)}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {(getItemClass(index) === 'carousel-item-1' || getItemClass(index) === 'carousel-item-2') && (
              <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
            )}
            <div className="item-content relative z-20">
              <div className="content-name">{item.name}</div>
              <div className="content-description">{item.description}</div>
              <div className="content-buttons">
                <button className="content-button">Book a call</button>
              </div>
              <div className="carousel-arrows">
                <button className="arrow-button" onClick={() => showSlider('prev')} aria-label="Previous slide">
                  &lt;
                </button>
                <button className="arrow-button" onClick={() => showSlider('next')} aria-label="Next slide">
                  &gt;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="time-running" ref={runningTimeRef}></div>
    </div>
  );
};

export default CasesHero;