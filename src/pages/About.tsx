import Navigation from '../components/ui/navigation';
import Footer from '../components/sections/footer';
import { Button } from '../components/ui/button';
import { ArrowRight, Users, Target, Award, Lightbulb } from 'lucide-react';
import NetworkDiagram from '../components/sections/network-diagram';
import CalModal from '../components/CalModal';
import { useState } from 'react';

const About = () => {
  const [isCalModalOpen, setIsCalModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden -mt-20 bg-slate-950">
          {/* Enhanced blue gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-slate-950 to-slate-950"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/60 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/40 rounded-full blur-3xl opacity-60"></div>

          {/* Absolute glass hand on the right edge */}
          <div className="hidden md:flex absolute inset-y-0 right-0 z-0 items-center pointer-events-none">
            <img
              src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/glasshand1.png"
              alt="Glass Hand Technology"
              className="h-[66.5%] max-h-[560px] w-auto object-contain"
            />
          </div>
          
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              {/* Left Side - Text Content */}
              <div className="lg:col-span-6 xl:col-span-5 space-y-6 sm:space-y-8 lg:pr-8">
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white">
                    About <span className="text-blue-400">Westpoint Capital</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                    We're a leading technology company specializing in AI-powered solutions 
                    that transform how businesses operate and scale in the modern digital landscape.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button size="lg" className="bg-white text-black hover:bg-white/90 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                    Read more
                    <ArrowRight className="ml-2 w-4 h-4 text-black" />
                  </Button>
                </div>
              </div>
              {/* Right Side - Reserve space for absolute positioned robot hand */}
              <div className="lg:col-span-6 xl:col-span-7 h-[420px] lg:h-[560px]" />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-950">
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
            <div className="glass-container rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 bg-slate-900/50 border border-blue-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                {/* Left Side - dna1.png Image */}
                <div className="relative">
                  <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center">
                    <img 
                      src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/dna1.png" 
                      alt="Westpoint Capital Technology" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Right Side - Text Content */}
                <div className="space-y-6">
                  {/* Our DNA Tag */}
                  <div className="inline-block">
                    <span className="px-4 py-2 bg-slate-800/50 text-white/80 text-sm font-medium rounded-full border border-blue-500/20">
                      Our DNA
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    From marketing expertise to <span className="text-blue-400">AI innovation</span>
                  </h2>

                  {/* First Paragraph */}
                  <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
                    With over 6 years of proven experience in SMS and email marketing, we've helped businesses connect with their audiences, increase engagement, and drive measurable growth. From building effective campaigns to optimizing deliverability, our expertise covers every step of the customer journey.
                  </p>

                  {/* Second Paragraph */}
                  <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
                    Since the launch of ChatGPT, we've also been at the forefront of AI-powered automations, developing solutions that integrate seamlessly into marketing workflows. Our focus includes voice agents and chatbots, designed to handle conversations naturally and efficiently, giving companies a smarter way to engage their customers.
                  </p>

                  {/* Third Paragraph */}
                  <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
                    By combining years of marketing know-how with cutting-edge AI, we deliver strategies and tools that are not only effective today but built for the future of digital communication.
                  </p>

                  {/* Trusted By Section */}
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">A</span>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">B</span>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-2 border-slate-900 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">C</span>
                      </div>
                    </div>
                    <span className="text-white font-medium">Trusted by 250+ Enterprise Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-950">
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Partnered with most of the <span className="text-blue-400">top people at each industry</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                Meet the core team behind our solutions, supported by trusted partners and freelancers worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
              {/* Team Member 1 */}
              <div className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-2xl overflow-hidden hover:from-slate-700/60 hover:to-slate-800/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
                  <img 
                    src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/marcus.jpeg" 
                    alt="Marcus Volsted" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">Marcus Volsted</h3>
                  <p className="text-blue-400 font-medium text-sm sm:text-base">CMO</p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-2xl overflow-hidden hover:from-slate-700/60 hover:to-slate-800/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
                  <img 
                    src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Sebastian.jpeg" 
                    alt="Sebastian Stokkendal" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Sebastian Stokkendal</h3>
                  <p className="text-blue-400 font-medium">Founder</p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-2xl overflow-hidden hover:from-slate-700/60 hover:to-slate-800/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
                  <img 
                    src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/alexander-e1749406883885.jpg" 
                    alt="Alexander Ovesen" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Alexander Ovesen</h3>
                  <p className="text-blue-400 font-medium">COO</p>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-2xl overflow-hidden hover:from-slate-700/60 hover:to-slate-800/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
                  <img 
                    src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/willss.png" 
                    alt="Kasper Willow" 
                    className="w-full h-full object-cover object-center scale-110 transition-all duration-500 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Kasper Willow</h3>
                  <p className="text-blue-400 font-medium">CEO</p>
                </div>
              </div>

              {/* Team Member 5 */}
              <div className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-2xl overflow-hidden hover:from-slate-700/60 hover:to-slate-800/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
                  <img 
                    src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/IMG_9123-scaled.jpg" 
                    alt="Jesper Kruse" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Jesper Kruse</h3>
                  <p className="text-blue-400 font-medium">CTO</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Network Systems Section */}
        <NetworkDiagram />

        {/* Mission & Vision Section */}
        <section className="py-24 bg-slate-950">
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
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
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8 relative">
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
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8 text-center">
            <div className="glass-container rounded-2xl p-12 max-w-4xl mx-auto bg-slate-900/50 border border-blue-500/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to work with us?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Let's discuss how we can help transform your business with our innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-white/90 px-8 py-4"
                  onClick={() => setIsCalModalOpen(true)}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Cal.com Modal */}
      <CalModal 
        isOpen={isCalModalOpen} 
        onClose={() => setIsCalModalOpen(false)} 
      />
    </div>
  );
};

export default About;