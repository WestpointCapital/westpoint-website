import Navigation from '../components/ui/navigation';
import Footer from '../components/sections/footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Handshake, Globe, TrendingUp, Users, CheckCircle, ArrowRight, DollarSign, Target, Zap, BarChart3, Shield, Award, Banknote } from 'lucide-react';
import DarkVeil from '../components/DarkVeil';
import { useState } from 'react';
import { sendPartnershipForm, PartnershipFormData } from '../utils/emailService';

const Partners = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data: PartnershipFormData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      partnershipType: formData.get('partnershipType') as string,
      message: formData.get('message') as string,
    };

    try {
      const success = await sendPartnershipForm(data);
      
      if (success) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          (e.target as HTMLFormElement).reset();
        }, 3000);
      } else {
        alert('Failed to send application. Please try again or contact us directly at contact@westpoint.capital');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send application. Please try again or contact us directly at contact@westpoint.capital');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Refer & Earn for Life",
      description: "Send us customers, and we'll close the deal. When we win, you keep earning a high % of revenue — for as long as the customer stays with us."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Hit 10 Referrals — Get a Bonus",
      description: "Close 10 referred customers, and we'll add an exclusive cash bonus on top of your regular commission."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Zero Work, Pure Profit",
      description: "We handle sales, support, and onboarding. You focus on referrals — and watch your revenue grow."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Scalable Income",
      description: "Your earnings grow with every referral. There's no limit to how much you can make."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted SaaS Solution",
      description: "We sell proven SMS & Email marketing software that businesses already need — making your referrals easy to close."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Partner Recognition",
      description: "Top partners get featured, extra rewards, and VIP treatment."
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
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="pt-0 pb-24 relative -mt-20 overflow-hidden">
          {/* Dark Veil Background */}
          <div className="absolute inset-0 w-full h-full">
            <DarkVeil />
          </div>
          
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8 text-center relative z-10">
            <div className="mb-0 flex justify-center relative -mt-[130px]">
              <img 
                src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/glasshandshake.png" 
                alt="Partnership Handshake" 
                className="h-[36rem] md:h-[44rem] lg:h-[52rem] xl:h-[60rem] w-auto object-contain"
              />
              <div className="absolute inset-0 flex items-end justify-center pb-16">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center drop-shadow-lg">
                  Become a <span className="text-blue-400">partner</span>
                </h1>
              </div>
            </div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-5 -mt-[34px]">
              Join our growing partner ecosystem and unlock new revenue opportunities 
              while delivering exceptional value to your clients.
            </p>
            <Button 
              size="lg" 
              className="hero-button px-8 py-4"
              onClick={() => {
                const formSection = document.getElementById('partnership-form');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Apply to Become a Partner
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-slate-950">
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
            {/* Intro Card - Shared Belief */}
            <div className="mb-12">
              <div className="glass-container rounded-2xl p-8 text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30">
                <div className="text-blue-400 mb-4 flex justify-center">
                  <Banknote className="w-12 h-12" />
                </div>
                <h3 className="text-lg font-medium mb-4 text-blue-400">Together for Profit</h3>
                <h2 className="text-4xl font-bold mb-4 text-white">
                  Why partner with <span className="text-blue-400">Westpoint Capital?</span>
                </h2>
                <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
                  We believe the right partnership creates shared success. Our goal is simple: everyone should profit from our services.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

        {/* Partnership Explanation Section */}
        <section className="py-24 bg-slate-950">
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
            <div className="glass-container rounded-2xl p-12 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-blue-500/20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Heart Image */}
                <div className="flex items-center justify-center">
                  <img 
                    src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/heart.png" 
                    alt="Partnership Heart" 
                    className="w-full h-[30rem] object-contain"
                  />
                </div>

                {/* Right Side - Headline, Content and CTA */}
                <div className="space-y-6">
                  <div className="inline-block">
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
                      Partnership Details
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    What we mean by <span className="text-blue-400">partner</span>
                  </h2>
                  
                  <p className="text-lg text-white/80 leading-relaxed">
                    By partner we mean a collaboration where you get access to our services and can refer customers to us.
                  </p>
                  
                  <p className="text-lg text-white/80 leading-relaxed">
                    We charge <span className="text-blue-400 font-semibold">$10,000</span> to become a partner for one simple reason: we value serious, committed relationships — we trust that you have a network of people who are serious and can benefit from our services.
                  </p>
                  
                  <p className="text-lg text-white/80 leading-relaxed">
                    It's about filtering out casual conversations and low-quality leads so we can focus our time, energy, and resources on building real growth with the right people — both for your referrals and for our partnership.
                  </p>

                  <div className="pt-4">
                    <Button 
                      size="lg" 
                      className="hero-button px-8 py-4"
                      onClick={() => {
                        const formSection = document.getElementById('partnership-form');
                        if (formSection) {
                          formSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Schedule a Call
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Application Form */}
        <section id="partnership-form" className="py-24 bg-slate-950">
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">First Name</label>
                      <Input name="firstName" className="glass-container border-none bg-slate-800/50 text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Last Name</label>
                      <Input name="lastName" className="glass-container border-none bg-slate-800/50 text-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Company Name</label>
                    <Input name="company" className="glass-container border-none bg-slate-800/50 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Email Address</label>
                    <Input name="email" type="email" className="glass-container border-none bg-slate-800/50 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Partnership Type</label>
                    <select name="partnershipType" className="w-full p-3 glass-container border-none rounded-lg bg-slate-800/50 text-white">
                      <option>Technology Partner</option>
                      <option>Reseller Partner</option>
                      <option>Implementation Partner</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Tell us about your business</label>
                    <Textarea 
                      name="message"
                      placeholder="Describe your company, target market, and partnership goals..."
                      className="glass-container border-none min-h-[120px] bg-slate-800/50 text-white"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="hero-button w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : isSubmitted ? 'Application Sent!' : 'Submit Application'}
                    {!isSubmitting && !isSubmitted && <ArrowRight className="ml-2 w-5 h-5" />}
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