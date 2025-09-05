import { useState, useEffect, useRef } from 'react';

const CasesHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const runningTimeRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      image: "/lovable-uploads/738b1840-27d5-4ba0-8e6d-567318e784fc.png",
      title: "CASES",
      name: "COMPLIANCE",
      description: "Security and compliance tailored for the world's most regulated industries with advanced AI solutions."
    },
    {
      image: "/lovable-uploads/16c05f99-edea-463d-832a-6b33afafd856.png",
      title: "CASES", 
      name: "REIMBURSEMENT",
      description: "Medicare Medicaid reimbursement rates calculated with precision using our intelligent automation systems."
    },
    {
      image: "/lovable-uploads/a92eaa08-b028-42a6-85b7-65af4d95f067.png",
      title: "CASES",
      name: "VALIDATION", 
      description: "Measurement of completed requirements mandatory for clinical implementation through AI-powered analytics."
    },
    {
      image: "/lovable-uploads/9b76c421-b1fa-4777-8421-96704513645e.png",
      title: "CASES",
      name: "TRACTION",
      description: "Timeline and steps of validation streamlined through our comprehensive automation framework."
    },
    {
      image: "/lovable-uploads/22874d4e-4417-4ab7-8cd1-a2b0f0a7492e.png",
      title: "CASES",
      name: "ANALYTICS",
      description: "De-risk an innovation's funding and investment with predictive analytics and intelligent insights."
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
          width: 100vw;
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
          font-size: 70px;
          text-transform: uppercase;
          color: #60a5fa;
          font-weight: bold;
          line-height: 1;
          opacity: 0;
          animation: animate 1s ease-in-out 0.3s 1 forwards;
        }

        .content-name {
          font-size: 70px;
          text-transform: uppercase;
          font-weight: bold;
          line-height: 1;
          text-shadow: 3px 4px 4px rgba(255, 255, 255, 0.8);
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
            font-size: 70px;
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
            font-size: 45px;
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
              <div className="absolute inset-0 bg-black/40 z-10"></div>
            )}
            <div className="item-content relative z-20">
              <div className="content-title">{item.title}</div>
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