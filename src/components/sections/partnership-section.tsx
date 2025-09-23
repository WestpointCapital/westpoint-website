import { Button } from '../ui/button';

const PartnershipSection = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Illustration */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Iphone%20mockup%20for%20assistant.png" 
                alt="AI assistant providing fast customer responses"
                className="max-w-full h-auto scale-70"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-8 text-center lg:text-left max-w-lg">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Nurture customers with <span className="text-blue-400">super fast responses</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Our AI assistant provides instant, intelligent responses to your customers 24/7. 
                Never miss an opportunity to engage, convert, and retain customers with lightning-fast 
                automated interactions that feel personal and professional.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <Button size="lg" className="hero-button" asChild>
                <a href="/contact">Start for free today</a>
              </Button>
            </div>
          </div>
        </div>

        {/* New Personalized Communication Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8 text-center lg:text-left max-w-lg">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Make every customer feel <span className="text-blue-400">special and seen</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                While most brands send generic, impersonal messages with no-reply addresses, 
                we focus on creating meaningful 2-way conversations. Our platform ensures every 
                customer interaction feels personal, engaging, and truly human - making your 
                customers feel valued and heard.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <Button size="lg" className="hero-button" asChild>
                <a href="/contact">Start for free today</a>
              </Button>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/convo.png" 
                alt="Personalized customer communication"
                className="max-w-full h-auto rounded-xl shadow-lg scale-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;