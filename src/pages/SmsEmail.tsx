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
      <section className="pt-32 pb-24 bg-slate-950">
        <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Your complete <span className="text-blue-400">SMS/Email</span> suite to launch, manage, and convert leads.
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              No credit card required • Free credits included
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hero-button" asChild>
                <Link to="/contact">Start For Free</Link>
              </Button>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hero-button" asChild>
                <Link to="/contact">Start For Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link to="/services">View All Services</Link>
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
