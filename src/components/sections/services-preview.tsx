import { Bot, Cpu, Zap, Shield } from 'lucide-react';
import { Button } from '../ui/button';

const ServicesPreview = () => {
  const services = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "SaaS Solutions",
      description: "Custom-built software platforms that scale with your business needs and integrate seamlessly with existing systems.",
      features: ["Cloud-native architecture", "Real-time analytics", "Enterprise security"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation Tools",
      description: "Streamline operations and eliminate manual processes with intelligent workflow automation.",
      features: ["Process optimization", "Workflow automation", "Integration services"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Chatbots",
      description: "Deploy intelligent conversational agents that enhance customer experience and reduce support costs.",
      features: ["Natural language processing", "24/7 availability", "Multi-channel support"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Assistants",
      description: "Empower your team with AI-powered assistants that augment productivity and decision-making.",
      features: ["Intelligent insights", "Task automation", "Predictive analytics"]
    }
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our core <span className="text-blue-400">services</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            From intelligent automation to AI-powered solutions, we provide the tools 
            your enterprise needs to stay ahead in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-[65%] mx-auto">
          {services.map((service, index) => (
            <div key={index} className="glass-container rounded-2xl p-6 group hover:scale-105 transition-all duration-300 bg-slate-900/50 border border-blue-500/20">
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-white/60 flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button variant="cta" size="lg" className="px-8 py-4">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;