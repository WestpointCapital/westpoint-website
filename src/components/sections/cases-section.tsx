import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { ArrowRight, Building2, Factory, Heart } from 'lucide-react';
import 'swiper/css';

const CasesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const cases = [
    {
      title: "FUTURE BUSINESS CENTER",
      subtitle: "Innovative business center created with a focus on sustainable development",
      type: "Business Center",
      location: "Downtown Business District",
      image: "/lovable-uploads/a60fb6f4-3664-4e5d-a1d0-5426229798cf.png",
      icon: <Building2 className="w-6 h-6" />,
      category: "Commercial Development"
    },
    {
      title: "INFINITY GREEN RESTAURANT", 
      subtitle: "A unique solar-powered restaurant with a combination of green spaces",
      type: "Restaurant",
      location: "Green District",
      image: "/lovable-uploads/a60fb6f4-3664-4e5d-a1d0-5426229798cf.png",
      icon: <Heart className="w-6 h-6" />,
      category: "Sustainable Hospitality"
    },
    {
      title: "RENEWASPHERE DISTRICT",
      subtitle: "A sustainable area with a full recycling cycle and a focus on renewable energy",
      type: "District",
      location: "Urban Center",
      image: "/lovable-uploads/a60fb6f4-3664-4e5d-a1d0-5426229798cf.png",
      icon: <Factory className="w-6 h-6" />,
      category: "Urban Planning"
    },
    {
      title: "SMART OFFICE COMPLEX",
      subtitle: "AI-powered office building with automated systems and energy optimization",
      type: "Office Complex",
      location: "Tech District",
      image: "/lovable-uploads/a60fb6f4-3664-4e5d-a1d0-5426229798cf.png",
      icon: <Building2 className="w-6 h-6" />,
      category: "Smart Buildings"
    },
    {
      title: "ECO RESIDENTIAL TOWERS",
      subtitle: "Luxury residential towers with vertical gardens and renewable energy systems",
      type: "Residential",
      location: "Eco Village",
      image: "/lovable-uploads/a60fb6f4-3664-4e5d-a1d0-5426229798cf.png",
      icon: <Heart className="w-6 h-6" />,
      category: "Green Living"
    },
    {
      title: "INNOVATION HUB CENTER",
      subtitle: "Multi-purpose innovation center fostering collaboration and creativity",
      type: "Innovation Center",
      location: "University District",
      image: "/lovable-uploads/a60fb6f4-3664-4e5d-a1d0-5426229798cf.png",
      icon: <Factory className="w-6 h-6" />,
      category: "Education & Innovation"
    },
    {
      title: "SUSTAINABLE LOGISTICS PARK",
      subtitle: "Next-generation logistics facility with automated sorting and green delivery systems",
      type: "Logistics Park",
      location: "Industrial Zone",
      image: "/lovable-uploads/a60fb6f4-3664-4e5d-a1d0-5426229798cf.png",
      icon: <Building2 className="w-6 h-6" />,
      category: "Industrial Innovation"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-16 px-6 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="font-bold">success stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of transformative projects that showcase our expertise 
            in creating innovative solutions across various industries.
          </p>
        </div>

        {/* Cases Slider */}
        <div className="testimonials-container">
          <Swiper
            grabCursor={true}
            initialSlide={0}
            centeredSlides={false}
            slidesPerView="auto"
            spaceBetween={10}
            speed={1000}
            freeMode={false}
            mousewheel={{
              thresholdDelta: 30,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onClick={(swiper, event) => {
              const clickedIndex = swiper.clickedIndex;
              if (typeof clickedIndex === 'number') {
                swiper.slideTo(clickedIndex);
                setActiveIndex(clickedIndex);
              }
            }}
            className="testimonials-swiper"
          >
            {cases.map((caseItem, index) => (
              <SwiperSlide key={index} className="testimonial-slide">
                <img 
                  src={caseItem.image}
                  alt={caseItem.title}
                />
                
                {/* Content Overlay */}
                <div className="testimonial-content bg-black/40 backdrop-blur-sm">
                  {/* Top Section - Category & Type */}
                  <div className="testimonial-header">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                        📅 {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}
                      </span>
                      <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                        🏢 {caseItem.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                        📍 {caseItem.location}
                      </span>
                    </div>
                  </div>

                  {/* Middle Section - Case Content */}
                  <div className="testimonial-quote">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base">
                      {caseItem.subtitle}
                    </p>
                  </div>

                  {/* Bottom Section - CTA */}
                  <div className="mt-auto">
                    <button className="w-full flex items-center justify-center gap-2 text-foreground bg-white hover:bg-white/90 transition-colors px-6 py-3 rounded-lg text-sm font-medium">
                      START A PROJECT
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Progress Bar */}
          <div className="testimonials-progress-container">
            <div className="testimonials-progress-bar">
              <div 
                className="testimonials-progress-fill"
                style={{ width: `${((activeIndex + 1) / cases.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-lg text-sm font-medium">
            View all projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;