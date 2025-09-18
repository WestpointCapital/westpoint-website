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
            <div className="space-y-8 text-center lg:text-left max-w-lg">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Nurture customers with <span className="text-blue-400">super fast responses</span>
                </h1>
                <p className="text-xl text-white/70 leading-relaxed mb-8">
                  Our AI assistant provides instant, intelligent responses to your customers 24/7. 
                  Never miss an opportunity to engage, convert, and retain customers with lightning-fast 
                  automated interactions that feel personal and professional.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4 flex justify-center lg:justify-start">
                <Button size="lg" className="hero-button" asChild>
                  <a href="/contact">Get Started Today</a>
                </Button>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/illustration-02.png" 
                  alt="AI assistant providing fast customer responses"
                  className="max-w-full h-auto"
                />
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Customer Message Analysis</h3>
                  <p className="text-white/70">AI analyzes the customer's message to understand their intent, urgency, and preferred communication style.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Smart Routing Decision</h3>
                  <p className="text-white/70">Based on intent analysis, the system automatically routes to AI assistant or human agent for optimal customer experience.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Seamless Handoff</h3>
                  <p className="text-white/70">If escalation is needed, the conversation seamlessly transfers to a human agent with full context preserved.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-blue-500/20">
              <h4 className="text-lg font-semibold text-white mb-6">Customer Preferences Form</h4>
              <form className="space-y-6">
                <div className="space-y-4">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 text-blue-500 bg-slate-700 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
                      defaultChecked
                    />
                    <span className="text-white group-hover:text-blue-300 transition-colors">Prefers AI assistance</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 text-yellow-500 bg-slate-700 border-slate-600 rounded focus:ring-yellow-500 focus:ring-2"
                    />
                    <span className="text-white group-hover:text-yellow-300 transition-colors">Complex technical issue</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 text-red-500 bg-slate-700 border-slate-600 rounded focus:ring-red-500 focus:ring-2"
                    />
                    <span className="text-white group-hover:text-red-300 transition-colors">Urgent support needed</span>
                  </label>
                </div>
                
                <div className="pt-4 border-t border-slate-600">
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Save Preferences
                  </Button>
                </div>
              </form>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hero-button" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link to="/services">View All Services</Link>
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
