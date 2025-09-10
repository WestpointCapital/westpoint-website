import Navigation from '../components/ui/navigation';
import Footer from '../components/sections/footer';
import { Button } from '../components/ui/button';
import { Bot, Cpu, Zap, Shield, ArrowRight, CheckCircle, Settings, MessageSquare, BarChart3, Target, Users, TrendingUp, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: null, // No icon for this service
      title: "Intelligent Automation & Custom SaaS",
      description: "We build custom SaaS platforms and AI workflows designed around your business — not the other way around. Whether it's streamlining operations, integrating data across systems, or creating a platform that supports your growth, our solutions are tailored to solve your most pressing challenges.",
      examples: [
        "Internal dashboards and CRMs",
        "Workflow automation with AI",
        "Bespoke software products"
      ]
    },
    {
      icon: null, // No icon for this service
      title: "AI-Powered Customer Experiences",
      description: "We transform how your business interacts with customers through AI chatbots and assistants. Our solutions don't just answer questions — they qualify leads, nurture relationships, and provide real-time support that feels human, at scale.",
      examples: [
        "AI chatbots for websites & apps",
        "Virtual sales assistants",
        "Lead qualification and nurturing flows"
      ]
    },
    {
      icon: null, // No icon for this service
      title: "Data-Driven Marketing Systems",
      description: "We help you reach the right people at the right time with AI-enhanced SMS and email marketing. Instead of sending generic campaigns, we design personalized, automated marketing journeys that increase engagement and drive measurable ROI.",
      examples: [
        "Automated SMS/email campaigns",
        "AI-driven content personalization",
        "Re-engagement & retention workflows"
      ]
    },
    {
      icon: null, // No icon for this service
      title: "Strategy & Integration",
      description: "Technology only works when it's connected to your goals. We work with you to align SaaS, AI, and marketing into a cohesive system. From strategy workshops to hands-on integration, we make sure every part of your digital ecosystem contributes to growth.",
      examples: [
        "Strategic planning workshops",
        "System integration & optimization",
        "Performance monitoring & analytics"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tailored solutions",
      description: "Built for your unique needs"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Seamless integration",
      description: "SaaS, AI, and marketing in one ecosystem"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth-first approach",
      description: "Tech that drives measurable results"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden">
          {/* Background Animation - Glowing Blue Arc */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px]">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>

          <div className="relative z-10 w-[65%] mx-auto px-6 text-center">
            {/* Glowing Quarter-Circle Arc - Planet Horizon Above Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1800px] h-[1800px] pointer-events-none z-30">
              <div className="w-full h-full relative overflow-hidden">
                {/* Quarter-circle mask to show only the top arc */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                  {/* Main circle - perfect size */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-t-2 border-blue-300 rounded-full blur-sm animate-pulse"></div>
                  {/* Bright outward glow - expanded */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border-t border-white/90 rounded-full blur-md animate-pulse"></div>
                  {/* Extended bright flare - more outwards */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border-t border-blue-100/85 rounded-full blur-lg animate-pulse"></div>
                  {/* Maximum outward flare */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] border-t border-blue-200/70 rounded-full blur-xl animate-pulse"></div>
                  {/* Ultra-wide outward flare */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] border-t border-blue-300/50 rounded-full blur-2xl animate-pulse"></div>
                </div>
                {/* Mask to show only the top quarter */}
                <div className="absolute top-1/2 left-0 w-full h-1/2 bg-slate-950"></div>
              </div>
            </div>

            {/* New Feature Banner */}
            <div className="relative z-40 inline-flex items-center gap-3 bg-slate-800/50 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
              <span className="bg-blue-400 text-white text-xs px-3 py-1 rounded-full font-medium">New feature</span>
              <span className="text-white/80 text-sm">Check out our latest AI solutions</span>
              <ArrowRight className="w-4 h-4 text-white/60" />
              <ArrowRight className="w-4 h-4 text-white/60" />
            </div>

            {/* Main Headline */}
            <h1 className="relative z-40 text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our Services
            </h1>

            {/* Description */}
            <p className="relative z-40 text-xl text-white/70 max-w-4xl mx-auto mb-12 leading-relaxed">
              At Westpoint Capital, we help businesses unlock growth by combining AI, automation, and digital strategy. Instead of offering one-off tools, we design solutions that work together — giving you smarter systems, stronger customer connections, and scalable results.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="relative z-40 flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10 px-8 py-4">
                <div className="w-4 h-4 border-l-2 border-t-2 border-b-2 border-white transform rotate-45 mr-3"></div>
                Watch Demo
              </Button>
              <Button size="lg" className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-4">
                Get started for free
              </Button>
            </div>

            {/* Trusted by Section */}
            <div className="relative z-40 text-center">
              <p className="text-white/60 text-sm mb-6">Trusted by 500+ companies</p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                <div className="text-white/40 font-semibold">Boltshift</div>
                <div className="text-white/40 font-semibold">Lightbox</div>
                <div className="text-white/40 font-semibold">FeatherDev</div>
                <div className="text-white/40 font-semibold">GlobalBank</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-slate-950">
          <div className="w-[65%] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div key={index} className="glass-container rounded-2xl p-8 group bg-slate-900/50 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 relative overflow-hidden">
                  {/* Special background image for first service */}
                  {index === 0 && (
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 -ml-0">
                      <img 
                        src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/gear2.png" 
                        alt="Gear" 
                        className="w-full h-full object-contain object-left-bottom opacity-20"
                      />
                    </div>
                  )}
                  
                  {/* Special background image for second service */}
                  {index === 1 && (
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 -ml-0">
                      <img 
                        src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/ai-bot.png" 
                        alt="AI Bot" 
                        className="w-full h-full object-contain object-left-bottom opacity-20"
                      />
                    </div>
                  )}
                  
                  {/* Special background image for third service */}
                  {index === 2 && (
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 -ml-0">
                      <img 
                        src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/arrow.png" 
                        alt="Arrow" 
                        className="w-full h-full object-contain object-left-bottom opacity-20"
                      />
                    </div>
                  )}
                  
                  {/* Special background image for fourth service */}
                  {index === 3 && (
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 -ml-0">
                      <img 
                        src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/1arrow.png" 
                        alt="Arrow 1" 
                        className="w-full h-full object-contain object-left-bottom opacity-20"
                      />
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    {service.icon && (
                      <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-white">Examples:</h4>
                      <ul className="space-y-2">
                        {service.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                            <span className="text-white/70">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-end">
                      <Button className="hero-button">
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Service Approach Section */}
        <section className="py-24 bg-slate-900/30">
          <div className="w-[65%] mx-auto px-6">
            <div className="glass-container rounded-2xl p-12 bg-slate-900/50 border border-blue-500/20">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="relative w-full h-[780px] flex items-center justify-center">
                    <img 
                      src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/icons.png" 
                      alt="Westpoint Capital Service Technology" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="inline-block">
                    <span className="px-4 py-2 bg-slate-800/50 text-white/80 text-sm font-medium rounded-full border border-blue-500/20">Our Approach</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Integrated solutions that <span className="text-blue-400">work together</span>
                  </h2>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Unlike traditional agencies that offer disconnected tools, we design comprehensive ecosystems where every component enhances the others. Our SaaS platforms integrate seamlessly with AI automation, while our marketing systems leverage data insights to drive personalized customer experiences.
                  </p>
                  <p className="text-lg text-white/70 leading-relaxed">
                    From custom CRM development to AI-powered chatbots and automated marketing campaigns, each service we provide is built to complement and amplify your existing systems. This integrated approach ensures maximum efficiency and measurable ROI across your entire business operation.
                  </p>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Our 6+ years of experience in marketing automation, combined with cutting-edge AI development, means we understand both the technical requirements and business outcomes you need to succeed in today's competitive landscape.
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">S</span>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">A</span>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-2 border-slate-900 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">I</span>
                      </div>
                    </div>
                    <span className="text-white font-medium">SaaS + AI + Integration = Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Westpoint Capital Section */}
        <section className="py-24 bg-slate-900/30">
          <div className="w-[65%] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why <span className="text-blue-400">Westpoint Capital</span>?
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We don't just build technology — we build solutions that drive real business growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-400/10 border border-blue-400/20 rounded-2xl mb-6 group-hover:bg-blue-400/20 transition-colors duration-300">
                    <div className="text-blue-400">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-950">
          <div className="w-[65%] mx-auto px-6 text-center">
            <div className="glass-container rounded-2xl p-12 max-w-4xl mx-auto bg-slate-900/50 border border-blue-500/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to unlock your business growth?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Let's discuss how our integrated approach can transform your business. 
                Our experts will work with you to design the perfect solution that drives measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hero-button px-8 py-4">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="glass-container border-none px-8 py-4">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;