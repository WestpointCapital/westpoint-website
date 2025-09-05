import Navigation from '../components/ui/navigation';
import Footer from '../components/sections/footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Handshake, Globe, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';

const Partners = () => {
  const benefits = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Access to international markets and opportunities through our extensive network."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Revenue Growth",
      description: "Lucrative commission structures and recurring revenue opportunities."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Support",
      description: "Dedicated partner success team and comprehensive training programs."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Strategic Alliance",
      description: "Long-term partnerships built on mutual success and shared values."
    }
  ];

  const partnerTypes = [
    {
      title: "Technology Partners",
      description: "Integrate your solutions with our platform and expand your market reach.",
      features: [
        "API access and documentation",
        "Technical integration support",
        "Joint go-to-market strategies",
        "Co-marketing opportunities"
      ]
    },
    {
      title: "Reseller Partners",
      description: "Sell our solutions under your brand and earn attractive commissions.",
      features: [
        "White-label opportunities",
        "Competitive commission rates",
        "Sales enablement tools",
        "Dedicated account management"
      ]
    },
    {
      title: "Implementation Partners",
      description: "Provide implementation and consulting services to our clients.",
      features: [
        "Certified training programs",
        "Implementation methodologies",
        "Project management support",
        "Revenue sharing models"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24">
          <div className="w-[65%] mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Become a <span className="text-blue-400">partner</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
              Join our growing partner ecosystem and unlock new revenue opportunities 
              while delivering exceptional value to your clients.
            </p>
            <Button size="lg" className="hero-button px-8 py-4">
              Apply to Become a Partner
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-slate-950">
          <div className="w-[65%] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Why partner with <span className="text-blue-400">westpoint capital?</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We believe in building partnerships that drive mutual success and deliver 
                exceptional value to clients across the globe.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="glass-container rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 bg-slate-900/50 border border-blue-500/20">
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-white/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-24 bg-slate-950">
          <div className="w-[65%] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Partnership <span className="text-blue-400">opportunities</span></h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Choose the partnership model that aligns best with your business goals and capabilities.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <div key={index} className="glass-container rounded-2xl p-8 bg-slate-900/50 border border-blue-500/20">
                  <h3 className="text-2xl font-bold mb-4 text-white">{type.title}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="hero-button w-full">
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-24 bg-slate-950">
          <div className="w-[65%] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Ready to <span className="text-blue-400">get started?</span>
                </h2>
                <p className="text-xl text-white/70 mb-8 leading-relaxed">
                  Take the first step towards a profitable partnership. Complete our application 
                  form and our partnership team will reach out to discuss opportunities.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <div className="font-semibold text-white">Submit Application</div>
                      <div className="text-white/70 text-sm">Complete the partnership application form</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <div className="font-semibold text-white">Initial Review</div>
                      <div className="text-white/70 text-sm">Our team reviews your application within 48 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <div className="font-semibold text-white">Partnership Agreement</div>
                      <div className="text-white/70 text-sm">Finalize terms and begin your partnership journey</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-container rounded-2xl p-8 bg-slate-900/50 border border-blue-500/20">
                <h3 className="text-2xl font-bold mb-6 text-white">Partnership Application</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">First Name</label>
                      <Input className="glass-container border-none bg-slate-800/50 text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Last Name</label>
                      <Input className="glass-container border-none bg-slate-800/50 text-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Company Name</label>
                    <Input className="glass-container border-none bg-slate-800/50 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Email Address</label>
                    <Input type="email" className="glass-container border-none bg-slate-800/50 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Partnership Type</label>
                    <select className="w-full p-3 glass-container border-none rounded-lg bg-slate-800/50 text-white">
                      <option>Technology Partner</option>
                      <option>Reseller Partner</option>
                      <option>Implementation Partner</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Tell us about your business</label>
                    <Textarea 
                      placeholder="Describe your company, target market, and partnership goals..."
                      className="glass-container border-none min-h-[120px] bg-slate-800/50 text-white"
                    />
                  </div>
                  <Button size="lg" className="hero-button w-full">
                    Submit Application
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;