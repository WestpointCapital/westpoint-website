import Navigation from '../components/ui/navigation';
import Footer from '../components/sections/footer';
import { Button } from '../components/ui/button';
import { ArrowRight, Users, Target, Award, Lightbulb } from 'lucide-react';
import NetworkDiagram from '../components/sections/network-diagram';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden -mt-20 bg-slate-950">
          {/* Enhanced blue gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-slate-950 to-slate-950"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/60 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/40 rounded-full blur-3xl opacity-60"></div>

          {/* Absolute robot hand on the right edge */}
          <div className="hidden md:flex absolute inset-y-0 right-0 z-0 items-center pointer-events-none">
            <img
              src="/lovable-uploads/edcaaf2e-ebd6-456a-a47d-92ecb095b381.png"
              alt="AI Robot Hand"
              className="h-[90%] max-h-[720px] w-auto object-contain"
            />
          </div>
          
          <div className="w-[65%] mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Side - Text Content */}
              <div className="lg:col-span-6 xl:col-span-5 space-y-8 pr-8">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                    About <span className="text-blue-400">Westpoint Capital</span>
                  </h1>
                  <p className="text-xl text-white/80 leading-relaxed">
                    We're a leading technology company specializing in AI-powered solutions 
                    that transform how businesses operate and scale in the modern digital landscape.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-black hover:bg-white/90 px-8 py-4">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 text-black" />
                  </Button>
                </div>
              </div>
              {/* Right Side - Reserve space for absolute positioned robot hand */}
              <div className="lg:col-span-6 xl:col-span-7 h-[420px] lg:h-[560px]" />
            </div>
          </div>
        </section>

        {/* Network Systems Section */}
        <NetworkDiagram />

        {/* Mission & Vision Section */}
        <section className="py-24 bg-slate-950">
          <div className="w-[65%] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="glass-container rounded-2xl p-8 bg-slate-900/50 border border-blue-500/20">
                <Target className="w-12 h-12 text-blue-400 mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
                <p className="text-white/70 leading-relaxed">
                  To empower businesses with cutting-edge AI and automation solutions that drive 
                  efficiency, innovation, and sustainable growth in an increasingly digital world.
                </p>
              </div>
              
              <div className="glass-container rounded-2xl p-8 bg-slate-900/50 border border-blue-500/20">
                <Lightbulb className="w-12 h-12 text-blue-400 mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-white">Our Vision</h2>
                <p className="text-white/70 leading-relaxed">
                  To be the global leader in enterprise technology solutions, creating a future 
                  where intelligent automation enhances human potential and business success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gradient-to-br from-blue-950/60 via-slate-950 to-slate-950 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-400/20"></div>
          <div className="w-[65%] mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our <span className="text-blue-400">values</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                The principles that guide everything we do and every solution we create.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto">
              {[
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Excellence",
                  description: "We strive for perfection in every project and solution we deliver."
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Collaboration",
                  description: "We believe in the power of teamwork and partnership with our clients."
                },
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: "Innovation",
                  description: "We continuously push boundaries to create cutting-edge solutions."
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Results",
                  description: "We focus on delivering measurable outcomes that drive business success."
                }
              ].map((value, index) => (
                <div key={index} className="glass-container rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 bg-slate-900/50 border border-blue-500/20">
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-white/70">
                    {value.description}
                  </p>
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
                Ready to work with us?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Let's discuss how we can help transform your business with our innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 px-8 py-4">
                  Get In Touch
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

export default About;