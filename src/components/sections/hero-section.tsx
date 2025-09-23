import { Button } from '../ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import SilkR3F from '../effects/SilkR3F';
import CalModal from '../CalModal';
import { useState } from 'react';

const HeroSection = () => {
  const [isCalModalOpen, setIsCalModalOpen] = useState(false);
  
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 bg-slate-900">
        {/* Silk R3F Background */}
        <div className="absolute inset-0 overflow-hidden">
          <SilkR3F
            speed={5}
            scale={0.6}
            color="#277cfb"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
        
        {/* Dark Transparent Overlay for Better Readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>

        <div className="mx-auto px-6 sm:px-8 relative z-10 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="text-center max-w-4xl mx-auto">
            {/* New Badge */}
            <div className="inline-flex items-center gap-2 glass-container rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                AI-Powered SMS & Email Marketing Team
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white/90">
              Your inhouse SMS & Email Marketing team
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              For 6+ years, we've managed end-to-end SMS and email campaigns for brands of all sizes—covering strategy, copy, design, targeting, and optimization. By combining AI with human expertise, we deliver scalable campaigns that perform.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center items-center mb-16">
              <Button 
                variant="hero" 
                size="lg" 
                className="px-8 py-4 text-lg"
                onClick={() => setIsCalModalOpen(true)}
              >
                Get a free strategy call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Dashboard Preview - positioned between sections */}
      <div className="relative z-20 -mt-64 mb-12">
        <div className="mx-auto px-6 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <img 
            src="/lovable-uploads/87b4aeb1-a16e-424f-8ed4-e124df3d5e72.png" 
            alt="Dashboard preview showing SMS marketing platform interface"
            className="w-full max-w-6xl mx-auto rounded-2xl"
          />
        </div>
      </div>
      
      {/* Cal.com Modal */}
      <CalModal isOpen={isCalModalOpen} onClose={() => setIsCalModalOpen(false)} />

    </>
  );
};

export default HeroSection;