import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';
import sarahImage from '@/assets/testimonial-sarah.jpg';
import michaelImage from '@/assets/testimonial-michael.jpg';
import emmaImage from '@/assets/testimonial-emma.jpg';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Industries",
      image: sarahImage,
      content: "Westpoint Capital transformed our operations completely. Their AI solutions reduced our processing time by 70% and improved accuracy beyond our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "Global Logistics Ltd",
      image: michaelImage,
      content: "The automation tools delivered by Westpoint have been game-changing. We've seen a 40% reduction in operational costs while scaling our capacity.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Digital Innovation",
      company: "Financial Services Group",
      image: emmaImage,
      content: "Their chatbot solution handles 85% of our customer inquiries automatically, allowing our team to focus on complex cases that truly need human expertise.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "CEO",
      company: "StartupTech Inc",
      image: sarahImage, // Reusing image for now
      content: "Westpoint's strategic insights helped us scale from startup to enterprise-level operations in just 18 months.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "CFO", 
      company: "Manufacturing Solutions",
      image: emmaImage, // Reusing image for now
      content: "The ROI analysis and financial optimization tools exceeded our expectations, saving us millions annually.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            What our clients <span className="text-blue-400">say</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Don't just take our word for it. See how we've helped enterprises 
            across industries achieve remarkable results.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="testimonials-container">
          <Swiper
            grabCursor={true}
            initialSlide={2}
            centeredSlides={true}
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="testimonial-slide">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                
                {/* Content Overlay */}
                <div className="testimonial-content">
                  {/* Top Section - Quote & Rating */}
                  <div className="testimonial-header">
                    <Quote className="w-6 h-6 text-white/80 mb-3" />
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3" style={{ fill: '#FFD700', color: '#FFD700' }} />
                      ))}
                    </div>
                  </div>

                  {/* Middle Section - Testimonial Content */}
                  <div className="testimonial-quote">
                    <p className="text-white leading-relaxed italic text-sm md:text-base">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Bottom Section - Author Info */}
                  <div className="testimonial-author">
                    <h4 className="font-semibold text-white text-base">{testimonial.name}</h4>
                    <p className="text-white/80 text-xs">{testimonial.role}</p>
                    <p className="text-white/70 text-xs">{testimonial.company}</p>
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
                style={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;