import Navigation from '../../components/ui/navigation';
import Footer from '../../components/sections/footer';
import { ArrowLeft, CheckCircle, TrendingUp, Users, DollarSign, Snowflake, MessageSquare, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalButton from '../../components/CalButton';

const NordicRefrigeration = () => {
  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-400/20"></div>
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8 relative z-10">
            <Link 
              to="/cases" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Cases
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
                    Industrial Refrigeration
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-blue-400">Nordic Refrigeration</span> Solutions
                </h1>
                
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  We integrated AI into their customer conversations through SMS marketing, enabling them to respond to customers within seconds instead of days, dramatically improving their lead processing and conversion rates.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="glass-container rounded-xl p-4 bg-slate-900/50 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Snowflake className="w-5 h-5 text-blue-400" />
                      <span className="text-2xl font-bold text-white">-90%</span>
                    </div>
                    <span className="text-white/70 text-sm">Work Reduction (Hours)</span>
                  </div>
                  <div className="glass-container rounded-xl p-4 bg-slate-900/50 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-green-400" />
                      <span className="text-2xl font-bold text-white">2.3s</span>
                    </div>
                    <span className="text-white/70 text-sm">Average Response Time</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/nrs1.png" 
                  alt="Nordic Refrigeration Solutions" 
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                  style={{ objectPosition: 'center center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-24 bg-slate-950">
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  The <span className="text-blue-400">Challenge</span>
                </h2>
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  Nordic Refrigeration Solutions was struggling with lead processing and customer communication. Before our intervention, it could take days to get back to customers, and they were losing many prospects in the process due to delayed responses and poor follow-up systems.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Days-long response times causing customer loss</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Manual lead processing taking hours per customer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Poor lead nurturing leading to lost opportunities</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/nordic-refrigeration.jpg" 
                  alt="Nordic Refrigeration Project Overview" 
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                  style={{ objectPosition: 'center center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24 bg-slate-950">
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-blue-400">Solution</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We integrated AI into their customer conversations through SMS marketing, enabling instant responses and automated lead processing that transformed their customer communication from days to seconds.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-blue-500/20 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">SMS Automation</h3>
                <p className="text-white/70">
                  Automated SMS campaigns for all signed-up leads with personalized messaging and intelligent follow-up sequences.
                </p>
              </div>
              
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-green-500/20 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI Integration</h3>
                <p className="text-white/70">
                  Integrated AI into customer conversations to provide instant, intelligent responses that help answer customer questions within seconds instead of days.
                </p>
              </div>
              
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-purple-500/20 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Lead Scoring</h3>
                <p className="text-white/70">
                  Intelligent lead scoring system that prioritizes high-value prospects and automates qualification processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 bg-slate-950">
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                The <span className="text-blue-400">Results</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Within the first 3 months, these metrics show the improvements in lead processing only, demonstrating the power of AI-integrated customer communication.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-blue-500/20 text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">-90%</div>
                <div className="text-white/70">Work Reduction (In hours)</div>
              </div>
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-green-500/20 text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-white/70">Faster Response Time to customers</div>
              </div>
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-purple-500/20 text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">63%</div>
                <div className="text-white/70">More Deals Closed</div>
              </div>
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-orange-500/20 text-center">
                <div className="text-5xl font-bold text-orange-400 mb-2">2.3s</div>
                <div className="text-white/70">Average Response Time</div>
              </div>
            </div>
            
            <div className="mt-16 glass-container rounded-2xl p-8 bg-slate-900/50 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Performance Metrics</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-4">SMS Marketing Results</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-white/70">Total SMS Sent:</span>
                      <span className="text-white font-medium">12,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Delivery Rate:</span>
                      <span className="text-white font-medium">99.2%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Response Rate:</span>
                      <span className="text-white font-medium">78.5%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Conversion Rate:</span>
                      <span className="text-white font-medium">23.4%</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-4">AI Response System</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-white/70">Average Response Time:</span>
                      <span className="text-white font-medium">2.3 seconds</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">AI Accuracy Rate:</span>
                      <span className="text-white font-medium">94.7%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Customer Satisfaction:</span>
                      <span className="text-white font-medium">4.8/5.0</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Deals Closed:</span>
                      <span className="text-white font-medium">287</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-950">
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
            <div className="glass-container rounded-2xl p-12 text-center bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-blue-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to automate your lead management?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you reduce manual work and dramatically improve your response times with AI-powered SMS marketing.
              </p>
              <CalButton 
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors duration-200"
              >
                Get Started Today
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </CalButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NordicRefrigeration;
