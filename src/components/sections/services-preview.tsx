import { Bot, Cpu, Zap, Shield, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Reengage customers",
      description: "AI-powered messaging platform that automates customer communication, follow-ups, and campaigns across email and SMS channels.",
      features: ["Automated follow-ups", "Campaign management", "Real-time messaging"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated followup",
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
      <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
          <Link to="/services">
            <Button variant="cta" size="lg" className="px-8 py-4">
              Explore All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;