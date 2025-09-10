import React from 'react';
import { TrendingUp, Users, Zap, Shield, Rocket, Handshake } from 'lucide-react';

const MetricsSection = () => {
  const metrics = [
    {
      icon: Rocket,
      number: "9+",
      label: "Years of Innovation",
      description: "Leading the future of AI-powered business automation"
    },
    {
      icon: Users,
      number: "230+",
      label: "Clients",
      description: "Trusted by businesses worldwide to scale their operations"
    },
    {
      icon: Handshake,
      number: "50+",
      label: "Partners",
      description: "Strategic partnerships driving mutual growth and success"
    },
    {
      icon: Shield,
      number: "24/7",
      label: "Expert Support",
      description: "Round-the-clock assistance when you need it"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/f1452ced-5bcf-45ee-9593-d8525059a25b.png)` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/90"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl"></div>
      
      <div className="w-[65%] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Proven results that matter
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our track record speaks for itself. See how we've helped businesses like yours 
            achieve exceptional growth and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                className="metrics-plasma-card rounded-2xl p-8 group hover-scale flex flex-col items-start gap-6"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1 text-left">
                  <div className="metric-number text-4xl lg:text-5xl font-semibold mb-2 transition-all duration-300 group-hover:scale-110 text-white">
                    {metric.number}
                  </div>
                
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {metric.label}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="schedule-button px-8 py-4 font-semibold text-lg" style={{ borderRadius: '300px' }}>
            Schedule a call
          </button>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;