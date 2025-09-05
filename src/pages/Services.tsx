import Navigation from '../components/ui/navigation';
import Footer from '../components/sections/footer';
import { Button } from '../components/ui/button';
import { Bot, Cpu, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "SaaS Solutions",
      description: "Custom-built software platforms designed to scale with your business and integrate seamlessly with your existing infrastructure.",
      features: [
        "Cloud-native architecture for scalability",
        "Real-time analytics and reporting",
        "Enterprise-grade security",
        "API-first design for integrations",
        "Multi-tenant architecture",
        "Automated backup and recovery"
      ],
      pricing: "Starting at $5,000/month"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Automation Tools",
      description: "Streamline your operations and eliminate manual processes with our intelligent workflow automation solutions.",
      features: [
        "Business process optimization",
        "Workflow automation design",
        "Legacy system integration",
        "Document processing automation",
        "Quality assurance automation",
        "Performance monitoring"
      ],
      pricing: "Starting at $3,000/month"
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "AI Chatbots",
      description: "Deploy intelligent conversational agents that enhance customer experience while reducing support costs.",
      features: [
        "Natural language processing",
        "24/7 customer support",
        "Multi-channel deployment",
        "Sentiment analysis",
        "Conversation analytics",
        "Human handoff capabilities"
      ],
      pricing: "Starting at $2,000/month"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "AI Assistants",
      description: "Empower your team with AI-powered assistants that augment productivity and enhance decision-making.",
      features: [
        "Intelligent data insights",
        "Task automation",
        "Predictive analytics",
        "Document intelligence",
        "Voice-enabled interfaces",
        "Custom training models"
      ],
      pricing: "Starting at $4,000/month"
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
              Enterprise technology solutions.
              <br />
              <span className="text-blue-400">The future of business.</span>
            </h1>

            {/* Description */}
            <p className="relative z-40 text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Powerful, scalable SaaS platforms and AI-powered automation tools. Supercharge your operations & drive measurable growth with cutting-edge technology.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="relative z-40 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
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
        <section className="py-16 bg-slate-950">
          <div className="w-[65%] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div key={index} className="glass-container rounded-2xl p-8 group bg-slate-900/50 border border-blue-500/20">
                  <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-white">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <span className="text-white/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-blue-400">
                      {service.pricing}
                    </div>
                    <Button className="hero-button">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
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
                Ready to get started?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Let's discuss which solution is right for your business. 
                Our experts will work with you to design the perfect implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hero-button px-8 py-4">
                  Schedule Consultation
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