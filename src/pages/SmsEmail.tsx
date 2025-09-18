import Navigation from '../components/ui/navigation';
import Footer from '../components/sections/footer';
import { Button } from '../components/ui/button';
import { ArrowRight, Mail, MessageSquare, Users, Database, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmsEmail = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden">
        {/* Background Animation - Glowing Blue Arc */}
        <div className="absolute inset-0">
          <div className="absolute top-1/8 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px]">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>

        <div className="relative z-10 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8 text-center">
          {/* Glowing Quarter-Circle Arc - Planet Horizon Above Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1800px] h-[1800px] pointer-events-none z-30 overflow-hidden">
            <div className="w-full h-full relative overflow-hidden">
              {/* Quarter-circle mask to show only the top arc */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                {/* Main circle - perfect size */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border-t-2 border-blue-300 rounded-full blur-sm animate-pulse"></div>
                {/* Bright outward glow - expanded */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border-t border-white/90 rounded-full blur-md animate-pulse"></div>
                {/* Extended bright flare - more outwards */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[1300px] border-t border-blue-100/85 rounded-full blur-lg animate-pulse"></div>
                {/* Maximum outward flare */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] border-t border-blue-200/70 rounded-full blur-xl animate-pulse"></div>
                {/* Ultra-wide outward flare */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1700px] h-[1700px] border-t border-blue-300/50 rounded-full blur-2xl animate-pulse"></div>
              </div>
              {/* Mask to show only the top quarter */}
              <div className="absolute top-1/2 left-0 w-full h-1/2 bg-slate-950"></div>
            </div>
          </div>

          {/* Chat Glass Image */}
          <div className="relative z-40 flex justify-center mb-8">
            <img 
              src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/chat-glass.png" 
              alt="SMS/Email Chat Interface"
              className="max-w-full h-auto"
            />
          </div>

          {/* Main Headline */}
          <h1 className="relative z-40 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Your complete <span className="text-blue-400">SMS/Email</span> suite to launch, manage, and convert leads.
          </h1>

          {/* Description */}
          <p className="relative z-40 text-base sm:text-lg md:text-xl text-white/70 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            No credit card required • Free credits included
          </p>

          {/* Call-to-Action Button */}
          <div className="relative z-40 flex justify-center items-center mb-6 sm:mb-8">
            <Button 
              size="lg" 
              className="bg-blue-400 hover:bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              asChild
            >
              <Link to="/contact">Start For Free</Link>
            </Button>
          </div>

          {/* Trusted by Section */}
          <div className="relative z-40 text-center">
            <p className="text-white/60 text-sm mb-4 sm:mb-6">Trusted by 500+ companies</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-60">
              <div className="text-white/40 font-semibold text-sm sm:text-base">Boltshift</div>
              <div className="text-white/40 font-semibold text-sm sm:text-base">Lightbox</div>
              <div className="text-white/40 font-semibold text-sm sm:text-base">FeatherDev</div>
              <div className="text-white/40 font-semibold text-sm sm:text-base">GlobalBank</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Campaign Creation */}
      <section className="py-24 bg-slate-900/50">
        <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Create, personalize, and launch <span className="text-blue-400">SMS/email campaigns</span> that actually convert.
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Create personalized text flows, set delays, and preview every step, all from one clean, visual interface. No tech skills needed, just powerful tools designed to convert.
              </p>
              <div className="pt-4">
                <Button size="lg" className="hero-button" asChild>
                  <Link to="/contact">Start For Free</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Campaigns-SS-926x1024.png" 
                  alt="SMS/Email Campaign Interface"
                  className="max-w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: AI-Powered Automation */}
      <section className="py-24 bg-slate-950">
        <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Ai-Copilot-SMS-e1752951579701.png" 
                  alt="AI Copilot for SMS Marketing"
                  className="max-w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Supercharge your <span className="text-blue-400">SMS marketing</span> with AI-powered automation.
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Our built-in AI Copilot helps you write better messages, choose the best send times, and understand customer intent with real-time sentiment analysis.
              </p>
              <div className="pt-4">
                <Button size="lg" className="hero-button" asChild>
                  <Link to="/contact">Try It Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Contact Management */}
      <section className="py-24 bg-slate-900/50">
        <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Organize and manage your <span className="text-blue-400">contact database</span>.
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Import contacts via CSV or Excel, add custom tags, build segmented lists, and run bulk actions in seconds. Filter, export, and stay in control of your full contact database. No clutter, no hassle.
              </p>
              <div className="pt-4">
                <Button size="lg" className="hero-button" asChild>
                  <Link to="/contact">Try It Today</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Ai-Copilot-SMS-e1752951579701.png" 
                  alt="Contact Database Management"
                  className="max-w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to transform your <span className="text-blue-400">marketing campaigns?</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Start building powerful SMS and email campaigns that convert leads into customers.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="hero-button" asChild>
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmsEmail;
