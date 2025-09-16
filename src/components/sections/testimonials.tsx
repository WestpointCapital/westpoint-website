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
      name: "Anne Alms",
      role: "Director of Sales & Marketing",
      company: "Villa Vie Residences",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Anne-Alms-1.png",
      content: "Westpoint Capital transformed our operations completely. Their AI solutions reduced our processing time by 70% and improved accuracy beyond our expectations.",
      rating: 5
    },
    {
      name: "Thomas Nielsen",
      role: "CEO & Owner",
      company: "Bodotex",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/th.png",
      content: "Working with Goauto has completely transformed our email marketing. Before, our campaigns lacked structure and engagement, but now we have a clear strategy that actually delivers results. They helped us design and implement automated flows tailored to our customer journey, optimized our newsletters for higher open and click-through rates, and gave us actionable insights through detailed reporting. We've seen a significant increase in lead engagement and, most importantly, measurable growth in sales opportunities. The team is proactive, professional, and always ready to adapt to our specific needs. Partnering with them has been one of the best marketing decisions we've made.",
      rating: 5
    },
    {
      name: "Refrigeration Group",
      role: "Owners of",
      company: "Nordic Refrigeration Solutions",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/NRS-billede-e1641558732467.webp",
      content: "We used to struggle with managing and nurturing leads effectively. Our sales team was overwhelmed with manual follow-ups and we were losing potential customers in the process. Since implementing Westpoint Capital's SMS and email marketing platform, we've seen an instant 40% increase in revenue. The automated lead nurturing sequences ensure no opportunity falls through the cracks, and our conversion rates have improved dramatically.",
      rating: 5
    },
    {
      name: "Gert S.",
      role: "Owner",
      company: "Danbolig Vejle",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/gert.png",
      content: "As a real estate business, we needed a way to stay connected with our clients throughout their property journey. Westpoint Capital's SMS marketing platform has been a game-changer for us. We can now send timely updates about property viewings, market insights, and personalized recommendations directly to our customers' phones. The response rates are incredible - our clients appreciate the instant communication, and we've seen a 35% increase in client engagement since implementing their SMS solution. It's transformed how we nurture relationships in the real estate market.",
      rating: 5
    },
    {
      name: "Pernille A.",
      role: "Owner of",
      company: "Proudstone",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Skaermbillede_2023-06-20_kl._18.28.28_720x.png",
      content: "Running a jewelry business online, I needed a way to connect personally with my customers beyond just selling products. Westpoint Capital's email and SMS marketing platform has been transformative for Proudstone. The personalized outreach campaigns make each customer feel truly seen and valued. We can send tailored messages about new collections, care instructions, and even birthday reminders. Our customers love the personal touch - they often tell us how much they appreciate receiving messages that feel like they're coming from a friend, not just a business. This personal approach has increased our online sales by 45% and created a loyal community of customers who feel genuinely connected to our brand.",
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