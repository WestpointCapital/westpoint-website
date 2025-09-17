import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CasesSectionV2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const cases = [
    {
      title: "Villa Vie Residences - Cruise Ship",
      description: "We helped this luxury cruise ship company reactivate old and new leads and gain more than 5 million+ revenue through targeted SMS and email marketing campaigns.",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Screenshot%202025-09-17%20at%2013.47.33.png",
      services: ["SMS Marketing", "Email Marketing"],
      link: "/cases/villa-vie-residences"
    },
    {
      title: "Bedreklima",
      description: "We helped scale this HVAC company to 40% of sales online through SMS marketing.",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Bedre-klima-vogn-1024x768.webp",
      services: ["SMS Marketing"],
      link: "/cases/bedreklima"
    },
    {
      title: "Nicolinehus Apartments",
      description: "Help when develop a software to manage the the apartments avalibility and started email campaigns",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Nicolinehus-Aarhus-Oe.webp",
      services: ["Email Marketing"],
      link: "/cases/nikolinehus"
    },
    {
      title: "Nordic Refrigeration Solutions",
      description: "Running comprehensive SMS marketing campaigns for all signed up leads, automating customer communication and streamlining the sales process with AI-powered responses.",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/nrs1.png",
      services: ["SMS Marketing"],
      link: "/cases/nordic-refrigeration"
    },
    {
      title: "Swissblu",
      description: "Comprehensive email marketing campaigns that transformed their customer engagement and increased sales through targeted automation and personalized messaging strategies.",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Showerheads.png",
      services: ["Email Marketing"],
      link: "/cases/swissblu"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="py-24 bg-slate-950">
      <div className="w-full">
        {/* Header */}
        <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Our <span className="text-blue-400">success stories</span>
          </h2>
        </div>

        {/* Cases Slider */}
        <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {cases.map((caseItem, index) => (
                  <div 
                    key={index}
                    className="relative w-full flex-shrink-0 rounded-3xl overflow-hidden h-[600px]"
                  >
                    {/* Full Background Image */}
                    <div 
                      className="absolute inset-0 w-full h-full bg-cover bg-center" 
                      style={{ backgroundImage: `url(${caseItem.image})` }}
                    />
                    
                    {/* Services Tags - Top Right Corner */}
                    <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                      {caseItem.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="px-4 py-2 bg-white/90 text-slate-800 text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    {/* Glass Overlay - Bottom 70% */}
                    <div className="absolute bottom-0 left-0 right-0 h-[70%] glass-card-overlay text-white flex flex-col justify-end p-6 gap-4 py-0 overflow-visible">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">
                          {caseItem.title}
                        </h3>
                        <p className="text-white/80 text-base leading-relaxed mb-4">
                          {caseItem.description}
                        </p>
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pb-4">
                        <Link 
                          to={caseItem.link}
                          className="w-full py-4 px-6 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200 inline-block text-center text-lg"
                          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-blue-400' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View All Cases Button */}
        <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8 mt-8">
          <Link 
            to="/cases" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span>View All Cases</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CasesSectionV2;