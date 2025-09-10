import Navigation from '../../components/ui/navigation';
import Footer from '../../components/sections/footer';
import { ArrowLeft, CheckCircle, TrendingUp, Users, DollarSign, Snowflake, MessageSquare, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const NordicRefrigeration = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-400/20"></div>
          <div className="w-[65%] mx-auto px-6 relative z-10">
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
                  We implemented comprehensive SMS marketing campaigns for all signed up leads, automating customer communication and streamlining the sales process with AI-powered responses that dramatically reduced manual work and response times.
                </p>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Snowflake className="w-5 h-5 text-blue-400" />
                    <span className="text-2xl font-bold text-white">95%</span>
                    <span className="text-white/70">Manual Work Reduction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span className="text-2xl font-bold text-white">98%</span>
                    <span className="text-white/70">Faster Response Time</span>
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
          <div className="w-[65%] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  The <span className="text-blue-400">Challenge</span>
                </h2>
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  Nordic Refrigeration Solutions was struggling with manual lead management and slow response times. Their sales team was overwhelmed with hundreds of signed-up leads, leading to missed opportunities and poor customer experience.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Manual lead follow-up processes taking hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Average response time of 24+ hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Low conversion rates due to delayed responses</span>
                  </li>
                </ul>
              </div>
              <div className="glass-container rounded-2xl p-8 bg-slate-900/50 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white/70">Industry:</span>
                    <span className="text-white">Industrial Refrigeration</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Duration:</span>
                    <span className="text-white">3 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Team Size:</span>
                    <span className="text-white">3 specialists</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Budget:</span>
                    <span className="text-white">$28,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24 bg-slate-950">
          <div className="w-[65%] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-blue-400">Solution</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We implemented an AI-powered SMS marketing system that automated lead communication, reduced manual work by 95%, and decreased response times by 98% through intelligent automated responses.
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
                <h3 className="text-xl font-bold text-white mb-3">AI Responses</h3>
                <p className="text-white/70">
                  AI-powered instant responses to customer inquiries, reducing response time from 24 hours to under 30 seconds.
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
          <div className="w-[65%] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                The <span className="text-blue-400">Results</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-white/70">Manual Work Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-white/70">Faster Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">340%</div>
                <div className="text-white/70">More Deals Closed</div>
              </div>
              <div className="text-center">
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
          <div className="w-[65%] mx-auto px-6">
            <div className="glass-container rounded-2xl p-12 text-center bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-blue-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to automate your lead management?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you reduce manual work and dramatically improve your response times with AI-powered SMS marketing.
              </p>
              <Link 
                to="/partners" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors duration-200"
              >
                Get Started Today
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NordicRefrigeration;
