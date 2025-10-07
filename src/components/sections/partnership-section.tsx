import { Button } from '../ui/button';

const PartnershipSection = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
        <div className="glass-container rounded-2xl px-6 py-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-blue-500/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-6 text-center lg:text-left max-w-lg" style={{ paddingLeft: '30px' }}>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Nurture customers with <span className="text-blue-400">super fast responses</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mb-6">
                  Our AI assistant provides instant, intelligent responses to your customers 24/7. 
                  Never miss an opportunity to engage, convert, and retain customers with lightning-fast 
                  automated interactions that feel personal and professional.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <Button size="lg" className="hero-button" asChild>
                  <a href="/contact">Start for free today</a>
                </Button>
              </div>
            </div>

            {/* Right Side - Video */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <video 
                  src="https://www.goauto.ai/wp-content/uploads/2025/06/Chat-animation-v1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-w-xs w-64 h-auto rounded-xl scale-60"
                />
              </div>
            </div>
          </div>
        </div>

        {/* New Personalized Communication Section */}
        <div className="glass-container rounded-2xl px-3 py-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-blue-500/20 mt-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center justify-items-center">
            
            {/* Mobile First - Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/convo.png" 
                  alt="Personalized customer communication"
                  className="max-w-full h-auto rounded-xl shadow-lg"
                  style={{ transform: 'scale(0.69)' }}
                />
              </div>
            </div>

            {/* Mobile Second - Text Content */}
            <div className="space-y-0 text-center lg:text-left max-w-lg order-2 lg:order-1" style={{ paddingLeft: '30px' }}>
              <div>
                <h2 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ marginBottom: '35px' }}>
                  Make every customer feel <span className="text-blue-400">special and seen</span>
                </h2>
                <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl" style={{ marginBottom: '35px' }}>
                  While most brands send generic, impersonal messages with no-reply addresses, 
                  we focus on creating meaningful 2-way conversations. Our platform ensures every 
                  customer interaction feels personal, engaging, and truly human - making your 
                  customers feel valued and heard.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start" style={{ paddingTop: '35px' }}>
                <Button size="sm" className="hero-button" asChild>
                  <a href="/contact">Start for free today</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;