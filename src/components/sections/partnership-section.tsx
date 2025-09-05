import { Handshake, Target, Zap, Users } from 'lucide-react';
import { Button } from '../ui/button';

const PartnershipSection = () => {
  const partnerships = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Partnerships",
      description: "Long-term collaborative relationships focused on mutual growth and shared objectives across multiple projects."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Technology Integration",
      description: "Seamless integration of our solutions with your existing systems to enhance operational efficiency."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Consulting Partners",
      description: "Expert guidance and advisory services to help you navigate complex business transformation challenges."
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Joint Ventures",
      description: "Collaborative initiatives that combine our expertise with your industry knowledge for innovative solutions."
    }
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="mx-auto px-6 w-[65%]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Partnership <span className="text-blue-400">opportunities</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              We believe in building lasting partnerships that drive mutual success. Our collaborative 
              approach ensures that together, we create solutions that exceed expectations and deliver 
              exceptional value.
            </p>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Whether you're looking for strategic collaboration, technology integration, or expert 
              consulting, our partnership models are designed to be flexible and aligned with your 
              business objectives.
            </p>
            
            <div className="mb-8">
              <Button size="lg" className="hero-button">
                Explore Partnership Options
              </Button>
            </div>

          </div>

          {/* Partnership Types Grid */}
          <div className="grid grid-cols-1 gap-6">
            {partnerships.map((partnership, index) => (
              <div key={index} className="glass-container rounded-xl p-6 group hover:scale-105 transition-all duration-300 bg-slate-900/50 border border-blue-500/20">
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300 mt-1">
                    {partnership.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white">{partnership.title}</h3>
                    <p className="text-white/70 leading-relaxed">
                      {partnership.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;