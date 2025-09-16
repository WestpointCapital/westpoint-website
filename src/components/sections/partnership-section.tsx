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
      <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Join Our <span className="text-blue-400">Partner Program</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Partner with us to unlock new revenue streams and grow your business. Our comprehensive 
              partner program offers exclusive benefits, dedicated support, and proven strategies to 
              help you succeed.
            </p>
            
            <div className="mb-8">
              <Button size="lg" className="hero-button" asChild>
                <a href="/partners">Join Our Partner Program</a>
              </Button>
            </div>

          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Exclusive Revenue Share",
                description: "Earn competitive commissions on every successful partnership referral."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Dedicated Support",
                description: "Get personalized support from our partnership team to maximize your success."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Marketing Resources",
                description: "Access to co-marketing materials, case studies, and proven strategies."
              },
              {
                icon: <Handshake className="w-6 h-6" />,
                title: "Training & Certification",
                description: "Comprehensive training programs to help you become a successful partner."
              }
            ].map((benefit, index) => (
              <div key={index} className="glass-container rounded-xl p-6 group hover:scale-105 transition-all duration-300 bg-slate-900/50 border border-blue-500/20">
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-white/70 leading-relaxed">
                      {benefit.description}
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