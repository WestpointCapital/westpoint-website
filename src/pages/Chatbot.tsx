import Navigation from '../components/ui/navigation';
import Footer from '../components/sections/footer';
import { Button } from '../components/ui/button';
import { MessageSquare, Users, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Chatbot = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-slate-950">
        <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                  Cut <span className="text-blue-400">support</span> costs by 80%
                </h1>
                
                <p className="text-xl text-white/70 leading-relaxed mb-4">
                  Fill out the form below and get instant access to try your chatbot demo
                </p>
                
                {/* Iframe Embed */}
                <div className="w-full flex justify-center lg:justify-start">
                  <div className="w-full max-w-md lg:max-w-lg lg:-ml-4">
                    <iframe 
                      src="https://genia-psi.vercel.app/embed/campaign/1759853260622-7yyqth6" 
                      width="100%" 
                      height="600" 
                      frameBorder="0" 
                      style={{ border: 'none', borderRadius: '8px' }}
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
            <div className="flex justify-center lg:justify-end" style={{ marginTop: '-72px' }}>
              <div className="relative">
                <video 
                  src="https://www.goauto.ai/wp-content/uploads/2025/06/Chat-animation-v1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-w-md w-96 h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Demo Form Section */}
      <section id="chatbot-demo-form" className="py-16 bg-slate-950">
        <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="glass-container rounded-2xl px-6 py-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-blue-500/20">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Get your demo chatbot in <span className="text-blue-400">one click</span>
                </h3>
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/cursor.svg" 
                  alt="Computer cursor" 
                  className="w-8 h-8 animate-bounce"
                />
              </div>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Enter your website URL and we'll show you exactly how our AI assistant can transform your customer experience.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <div>
                  <input
                    type="url"
                    placeholder="Enter your website URL (e.g., https://yourwebsite.com)"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-blue-500/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full hero-button"
                  >
                    Get my chatbot demo now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* AI Automation Section */}
      <section className="py-24 bg-slate-950">
        <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Deliver on-point answers with <span className="text-blue-400">AI automation</span>
                </h2>
                <p className="text-xl text-white/70 leading-relaxed">
                  Ensure continuous customer engagement and human-like support without expanding your team.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%207%2C%202025%2C%2003_04_23%20PM.png" 
                  alt="AI automation delivering on-point answers"
                  className="max-w-sm w-80 h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built-in Return Flow Section */}
      <section className="py-24 bg-slate-950">
        <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Image */}
            <div className="flex justify-center lg:justify-start order-1">
              <div className="relative">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%207%2C%202025%2C%2003_32_03%20PM.png" 
                  alt="Built-in return flow automation"
                  className="max-w-md w-96 h-auto rounded-xl"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-8 text-center lg:text-left order-2">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Turn every conversation into <span className="text-blue-400">revenue opportunities</span>
                </h2>
                <p className="text-xl text-white/70 leading-relaxed">
                  Our built-in return flow automatically identifies upsell opportunities, re-engages dormant customers, and converts conversations into sales—all while maintaining that personal touch your customers love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-950">
        <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Personal Two-Way <span className="text-blue-400">Communication</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Create meaningful conversations that feel natural and engaging. Our AI understands context, 
              remembers previous interactions, and adapts to each customer's unique needs and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-container rounded-2xl p-8 group hover:scale-105 transition-all duration-300 bg-slate-900/50 border border-blue-500/20">
              <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Personal Conversations</h3>
              <p className="text-white/70 leading-relaxed">
                Every interaction feels personal and tailored. Our AI remembers customer preferences, 
                purchase history, and communication style to create truly engaging conversations.
              </p>
            </div>

            <div className="glass-container rounded-2xl p-8 group hover:scale-105 transition-all duration-300 bg-slate-900/50 border border-blue-500/20">
              <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Interactive Engagement</h3>
              <p className="text-white/70 leading-relaxed">
                Customers can ask questions, get recommendations, and receive instant support. 
                Our AI creates a two-way dialogue that keeps customers engaged and satisfied.
              </p>
            </div>

            <div className="glass-container rounded-2xl p-8 group hover:scale-105 transition-all duration-300 bg-slate-900/50 border border-blue-500/20">
              <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* How It Works Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              How Intent Recognition <span className="text-blue-400">Works</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our AI analyzes customer messages to understand their intent and automatically 
              determines the best response path for optimal customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-blue-500/20 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Customer Message Analysis</h3>
              <p className="text-white/70">AI analyzes the customer's message to understand their intent, urgency, and preferred communication style.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-blue-500/20 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Smart Routing Decision</h3>
              <p className="text-white/70">Based on intent analysis, the system automatically routes to AI assistant or human agent for optimal customer experience.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-blue-500/20 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Seamless Handoff</h3>
              <p className="text-white/70">If escalation is needed, the conversation seamlessly transfers to a human agent with full context preserved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
          <div className="text-center">
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
    </div>
  );
};

export default Chatbot;
