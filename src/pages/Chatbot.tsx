import Navigation from '../components/ui/navigation';
import Footer from '../components/sections/footer';
import { Button } from '../components/ui/button';
import { MessageSquare, Users, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import VideoPreview from '../components/VideoPreview';

const Chatbot = () => {
  const [showVideoPreview, setShowVideoPreview] = useState(true);

  // Hide/show the global Schedule Consultation button
  useEffect(() => {
    const globalButton = document.querySelector('[data-schedule-consultation]');
    if (globalButton instanceof HTMLElement) {
      if (showVideoPreview) {
        globalButton.style.display = 'none';
      } else {
        globalButton.style.display = 'flex';
      }
    }

    // Cleanup: show button when leaving page
    return () => {
      if (globalButton instanceof HTMLElement) {
        globalButton.style.display = 'flex';
      }
    };
  }, [showVideoPreview]);

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-slate-950">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div>
                <div className="mb-6">
                  <p className="text-sm text-white/70 mb-4 text-center lg:text-left">Do like 300+ companies</p>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left">
                    Get your <span className="text-blue-400">free demo chatbot</span> in one click
                  </h1>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mb-4">
                  Enter your website URL and we'll show you exactly how our AI assistant can transform your customer experience.
                </p>
                <div className="flex justify-center lg:justify-start mb-8">
                  <img 
                    src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/cursor.svg" 
                    alt="Computer cursor" 
                    className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce"
                  />
                </div>
                
                {/* Iframe Embed */}
                <div className="w-full overflow-hidden -mx-4 lg:mx-0">
                  <div className="w-full max-w-md lg:max-w-lg">
                    <iframe 
                      src="https://genia-psi.vercel.app/embed/campaign/1759853260622-7yyqth6" 
                      width="100%" 
                      height="600" 
                      frameBorder="0" 
                      style={{ border: 'none', borderRadius: '8px', maxWidth: '100%' }}
                      allow="camera; microphone; geolocation"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                      onError={() => console.log('Iframe failed to load')}
                      onLoad={() => console.log('Iframe loaded successfully')}
                    ></iframe>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Right Side - Video */}
            <div className="flex justify-center" style={{ marginTop: '-78px' }}>
              <div className="relative w-full flex justify-center">
                <video 
                  src="https://www.goauto.ai/wp-content/uploads/2025/06/Chat-animation-v1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-w-[65%] sm:max-w-xs lg:max-w-sm h-auto rounded-xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* AI Automation Section */}
      <section className="py-24 bg-slate-950">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                  Deliver on-point answers with <span className="text-blue-400">AI automation</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mb-8">
                  An AI-powered chatbot delivers instant support, automates common questions, and ensures customers get fast, accurate answers, anytime, without waiting in line.
                </p>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Get your free demo now
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center">
              <div className="relative w-full flex justify-center">
                      <img 
                        src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%207%2C%202025%2C%2003_04_23%20PM.png" 
                        alt="AI automation delivering on-point answers"
                        className="w-full max-w-[90%] sm:max-w-md lg:max-w-lg h-auto rounded-xl mx-auto"
                      />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built-in Return Flow Section */}
      <section className="py-24 bg-slate-950">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4">
            
            {/* Left Side - Image */}
            <div className="flex justify-center order-1">
              <div className="relative w-full flex justify-center">
                      <img 
                        src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/chatbot2.png" 
                        alt="Built-in return flow automation"
                        className="w-full max-w-[90%] sm:max-w-md lg:max-w-lg h-auto rounded-xl mx-auto"
                      />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-8 text-center lg:text-left order-2">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                  Turn every conversation into <span className="text-blue-400">revenue opportunities</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mb-8">
                  Our built-in return flow automatically identifies upsell opportunities, re-engages dormant customers, and converts conversations into sales, all while maintaining that personal touch your customers love.
                </p>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Get your free demo now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our results speaks for <span className="text-blue-400">itself</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              See how our AI chatbots have transformed businesses and delivered incredible results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 px-4">
            {/* Case Study 1 */}
            <div className="relative rounded-2xl p-8 border border-blue-500/20 group hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20"></div>
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-400 mb-2">80%</div>
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Nordictech-2-02.svg" alt="NordicTech Solutions" className="w-12 h-12" />
                  </div>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white">NordicTech Solutions</h3>
                  <p className="text-sm text-blue-400">E-commerce Platform</p>
                </div>
                <p className="text-white/70 leading-relaxed mb-4">
                  "We were drowning in support tickets. Our team of 8 was working 12-hour days just to keep up. 
                  After implementing the AI chatbot, we reduced support costs by 80% and our customer satisfaction 
                  actually improved. The chatbot handles 90% of inquiries instantly."
                </p>
                <div className="text-sm text-white/60">- Sarah Chen, Customer Success Director</div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="relative rounded-2xl p-8 border border-blue-500/20 group hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160395-0366d4c4b8b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20"></div>
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-blue-400 mb-2">85%</div>
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/gmka-logo.svg" alt="GMKA" className="w-12 h-12" />
                  </div>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white">GMKA</h3>
                  <p className="text-sm text-blue-400">Corporate Services</p>
                </div>
                <p className="text-white/70 leading-relaxed mb-4">
                  "We deployed an internal AI chatbot to streamline employee information access. The results were 
                  staggering—85% reduction in manual information requests. Our team now gets instant answers to 
                  policy questions, procedures, and company resources without waiting for HR responses."
                </p>
                <div className="text-sm text-white/60">- Anna Johansson, Operations Director</div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="relative rounded-2xl p-8 border border-blue-500/20 group hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20"></div>
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">80%</div>
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Med-farve-01.svg" alt="Bedreklima" className="w-12 h-12" />
                  </div>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white">Bedreklima</h3>
                  <p className="text-sm text-blue-400">HVAC Solutions</p>
                </div>
                <p className="text-white/70 leading-relaxed mb-4">
                  "We deployed an AI chatbot to handle customer inquiries about our climate control systems. 
                  The results were remarkable—80% reduction in customer questions. The chatbot instantly answers 
                  questions about installation, maintenance, and product specifications, freeing our team to focus 
                  on complex technical support and sales."
                </p>
                <div className="text-sm text-white/60">- Henrik Nielsen, Customer Service Manager</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Insights Section */}
      <section className="py-24 bg-slate-950">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          {/* Header */}
          <div className="text-center mb-16 px-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              User Insights
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-4xl mx-auto">
              Based on the answers from User interviews and Survey, I found some key insights which help us to observe any pattern and similarity in what potential users may want.
            </p>
          </div>

          {/* Data Cards */}
          <div className="grid md:grid-cols-3 gap-0">
            {/* Card 1 */}
            <div className="bg-slate-800/30 p-4 sm:p-6 md:p-8 border-r border-green-500/30">
              <div className="text-center px-4">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-400 mb-4">55.5%</div>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  About 55.5% of users prefer using AI chatbots for quick support before reaching a human agent, mainly because of faster response times.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-800/30 p-4 sm:p-6 md:p-8 border-r border-yellow-500/30">
              <div className="text-center px-4">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 mb-4">66.7%</div>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Approximately 66.7% of customer issues handled by chatbots are related to simple queries such as order status, returns, or account details.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-800/30 p-4 sm:p-6 md:p-8">
              <div className="text-center px-4">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-400 mb-4">40.2%</div>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Around 40.2% of users report frustration when chatbots fail to understand complex questions, highlighting the need for smooth handover to human support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-950">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Personal Two-Way <span className="text-blue-400">Communication</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Create meaningful conversations that feel natural and engaging. Our AI understands context, 
              remembers previous interactions, and adapts to each customer's unique needs and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            <div className="glass-container rounded-2xl p-8 group hover:scale-105 transition-all duration-300 bg-slate-900/50 border border-blue-500/20 text-center">
              <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <MessageSquare className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Personal Conversations</h3>
              <p className="text-white/70 leading-relaxed">
                Every interaction feels personal and tailored. Our AI remembers customer preferences, 
                purchase history, and communication style to create truly engaging conversations.
              </p>
            </div>

            <div className="glass-container rounded-2xl p-8 group hover:scale-105 transition-all duration-300 bg-slate-900/50 border border-blue-500/20 text-center">
              <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Interactive Engagement</h3>
              <p className="text-white/70 leading-relaxed">
                Customers can ask questions, get recommendations, and receive instant support. 
                Our AI creates a two-way dialogue that keeps customers engaged and satisfied.
              </p>
            </div>

            <div className="glass-container rounded-2xl p-8 group hover:scale-105 transition-all duration-300 bg-slate-900/50 border border-blue-500/20 text-center">
              <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Intent Recognition</h3>
              <p className="text-white/70 leading-relaxed">
                Smart intent detection automatically routes customers to AI assistance or human agents 
                based on their preferences and the complexity of their needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <div className="mx-auto w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your <span className="text-blue-400">Customer Experience?</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Start nurturing your customers with super fast, intelligent responses that feel personal and engaging.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="hero-button" asChild>
                <Link to="/contact">Wanna hear more?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Video Preview */}
      {showVideoPreview && (
        <VideoPreview onClose={() => setShowVideoPreview(false)} />
      )}
    </div>
  );
};

export default Chatbot;
