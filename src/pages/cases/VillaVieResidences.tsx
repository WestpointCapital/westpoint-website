import Navigation from '../../components/ui/navigation';
import Footer from '../../components/sections/footer';
import { ArrowLeft, CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const VillaVieResidences = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-400/20"></div>
          <div className="w-[65%] mx-auto px-6 relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Cases
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
                    Real Estate
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Villa Vie <span className="text-blue-400">Residences</span>
                </h1>
                
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  We helped Villa Vie Residences reactivate old and new leads, resulting in over 5 million+ in revenue through strategic SMS marketing campaigns.
                </p>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <span className="text-2xl font-bold text-white">5M+</span>
                    <span className="text-white/70">Revenue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    <span className="text-2xl font-bold text-white">300%</span>
                    <span className="text-white/70">ROI</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Odyssey-No-Grain-3k-scaled%20%281%29.webp" 
                  alt="Villa Vie Residences" 
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
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
                  Villa Vie Residences was struggling with lead conversion and had a large database of cold leads that weren't generating revenue. They needed a way to reactivate these leads and convert them into sales.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Low lead conversion rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Cold lead database not being utilized</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Ineffective traditional marketing methods</span>
                  </li>
                </ul>
              </div>
              <div className="glass-container rounded-2xl p-8 bg-slate-900/50 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white/70">Industry:</span>
                    <span className="text-white">Real Estate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Duration:</span>
                    <span className="text-white">6 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Team Size:</span>
                    <span className="text-white">5 specialists</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Budget:</span>
                    <span className="text-white">$50,000</span>
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
                We implemented a comprehensive SMS marketing strategy that reactivated cold leads and created a systematic approach to lead nurturing.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-blue-500/20 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Lead Segmentation</h3>
                <p className="text-white/70">
                  Categorized leads based on behavior, preferences, and engagement history for targeted messaging.
                </p>
              </div>
              
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-blue-500/20 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">SMS Campaigns</h3>
                <p className="text-white/70">
                  Created personalized SMS sequences that nurtured leads through the sales funnel effectively.
                </p>
              </div>
              
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-blue-500/20 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Automation</h3>
                <p className="text-white/70">
                  Implemented automated follow-up sequences that converted leads without manual intervention.
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
                <div className="text-5xl font-bold text-blue-400 mb-2">5M+</div>
                <div className="text-white/70">Total Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">300%</div>
                <div className="text-white/70">ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">85%</div>
                <div className="text-white/70">Lead Reactivation Rate</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-400 mb-2">6x</div>
                <div className="text-white/70">Conversion Improvement</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-950">
          <div className="w-[65%] mx-auto px-6">
            <div className="glass-container rounded-2xl p-12 text-center bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-blue-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to achieve similar results?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help your business generate more revenue through strategic marketing automation.
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

export default VillaVieResidences;
