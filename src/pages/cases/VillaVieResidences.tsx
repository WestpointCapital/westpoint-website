import Navigation from '../../components/ui/navigation';
import Footer from '../../components/sections/footer';
import { ArrowLeft, CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const VillaVieResidences = () => {
  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-400/20"></div>
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8 relative z-10">
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
                  We helped Villa Vie Residences reactivate their lead database and generate over $2M+ in revenue from sold cabins, while booking 50+ consultation calls within the first 2 months through strategic SMS marketing campaigns.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="glass-container rounded-xl p-4 bg-slate-900/50 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-5 h-5 text-green-400" />
                      <span className="text-2xl font-bold text-white">$2M+</span>
                    </div>
                    <span className="text-white/70 text-sm">Revenue from Sold Cabins</span>
                  </div>
                  <div className="glass-container rounded-xl p-4 bg-slate-900/50 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="text-2xl font-bold text-white">50+</span>
                    </div>
                    <span className="text-white/70 text-sm">Calls Booked (2 months)</span>
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
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  About <span className="text-blue-400">Villa Vie Residences</span>
                </h2>
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  Villa Vie Residences offers a revolutionary residential cruise experience, allowing people to live aboard luxury ships while traveling to 425+ destinations across 147 countries every 3.5 years. They provide three main residency options: ownership starting at $129,999, rental segments from 35-120 days, and their new "Golden Passport" lifetime residency program starting at $99,999. With over 7,000 community members, they've created a unique lifestyle where residents can work, live, and explore the world from their home at sea.
                </p>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    Villa Vie Residences was struggling with lead conversion and had a large database of cold leads that weren't generating revenue. They needed a way to reactivate these leads and convert them into sales for their unique residential cruise experience.
                  </p>
                </div>
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
              <div className="relative">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Screenshot%202025-09-16%20at%2013.45.14.png" 
                  alt="Villa Vie Residences Project Overview" 
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
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
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                The <span className="text-blue-400">Results</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-green-500/20 text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">$2M+</div>
                <div className="text-white/70">Revenue from Sold Cabins</div>
              </div>
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-blue-500/20 text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-white/70">Calls Booked (2 months)</div>
              </div>
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-purple-500/20 text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">85%</div>
                <div className="text-white/70">Lead Reactivation Rate</div>
              </div>
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-orange-500/20 text-center">
                <div className="text-5xl font-bold text-orange-400 mb-2">6x</div>
                <div className="text-white/70">Conversion Improvement</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-950">
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
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
