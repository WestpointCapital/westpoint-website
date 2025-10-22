import Navigation from '../../components/ui/navigation';
import Footer from '../../components/sections/footer';
import { ArrowLeft, CheckCircle, TrendingUp, Users, DollarSign, Building2, Mail, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Nicolinehus = () => {
  useEffect(() => {
    // Initialize Cal.com embed
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
             Cal("init", "free-consultation-call", {origin:"https://app.cal.com"});
             Cal.ns["free-consultation-call"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

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
                    Real Estate Management
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-blue-400">Nicolinehus</span> Apartments
                </h1>
                
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  We helped Nicolinehus Apartments overcome their email marketing struggles by implementing SMS marketing that opened new doors for customer engagement, transforming their lead nurturing process and dramatically improving their apartment rental and sales performance.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="glass-container rounded-xl p-4 bg-slate-900/50 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-5 h-5 text-blue-400" />
                      <span className="text-2xl font-bold text-white">+8</span>
                    </div>
                    <span className="text-white/70 text-sm">Apartments Rented</span>
                  </div>
                  <div className="glass-container rounded-xl p-4 bg-slate-900/50 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-green-400" />
                      <span className="text-2xl font-bold text-white">+93</span>
                    </div>
                    <span className="text-white/70 text-sm">Calls Generated</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Nicolinehus-Aarhus-Oe.webp" 
                  alt="Nicolinehus Apartments" 
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
                  The <span className="text-blue-400">Challenge</span>
                </h2>
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  Nicolinehus Apartments was struggling to maintain contact with customers through email marketing and online channels. Despite having many leads coming in, they were losing potential tenants due to poor lead management, lack of proper nurturing, and ineffective communication strategies. Their email campaigns were failing to engage prospects, and they needed a more direct and effective way to reach their target audience.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Poor email marketing performance and low engagement rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Losing leads due to lack of proper nurturing and follow-up</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">No overview of lead status and communication history</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Nicolinehus-Aarhus-Oe.webp" 
                  alt="Nicolinehus Project Overview" 
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
                We implemented SMS marketing as the primary communication channel, which opened new doors for customer engagement and lead nurturing, while also developing apartment management software to track availability and tenant communications.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-blue-500/20 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Management Software</h3>
                <p className="text-white/70">
                  Custom-built apartment management system with real-time availability tracking and tenant communication tools.
                </p>
              </div>
              
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-green-500/20 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">SMS Lead Nurturing</h3>
                <p className="text-white/70">
                  Implemented SMS marketing as the primary channel for lead nurturing, providing immediate and direct communication with prospects.
                </p>
              </div>
              
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-purple-500/20 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Lead Management</h3>
                <p className="text-white/70">
                  Created comprehensive lead tracking and management system to prevent losing prospects and ensure proper follow-up.
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
                Within the first 3 months with us, Nicolinehus Apartments achieved remarkable improvements in lead conversion and apartment occupancy.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-blue-500/20 text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">+8</div>
                <div className="text-white/70">Apartments Rented</div>
              </div>
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-green-500/20 text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">+93</div>
                <div className="text-white/70">Calls Generated</div>
              </div>
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-purple-500/20 text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">+5</div>
                <div className="text-white/70">Apartments Sold</div>
              </div>
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-orange-500/20 text-center">
                <div className="text-5xl font-bold text-orange-400 mb-2">+78%</div>
                <div className="text-white/70">Lead Conversion</div>
              </div>
            </div>
            
            <div className="mt-16 glass-container rounded-2xl p-8 bg-slate-900/50 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Campaign Performance</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-4">Email Marketing Results</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-white/70">Total Emails Sent:</span>
                      <span className="text-white font-medium">8,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Open Rate:</span>
                      <span className="text-white font-medium">34.2%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Click Rate:</span>
                      <span className="text-white font-medium">12.8%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Conversion Rate:</span>
                      <span className="text-white font-medium">4.7%</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-4">SMS Marketing Results</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-white/70">Total SMS Sent:</span>
                      <span className="text-white font-medium">2,100</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Delivery Rate:</span>
                      <span className="text-white font-medium">98.5%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Response Rate:</span>
                      <span className="text-white font-medium">67.3%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Appointment Bookings:</span>
                      <span className="text-white font-medium">156</span>
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
                Ready to transform your real estate marketing?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you re-engage dead leads and boost your apartment occupancy rates.
              </p>
              <button 
                       data-cal-link="westpoint-capital/free-consultation-call"
                       data-cal-namespace="free-consultation-call"
                data-cal-config='{"layout":"month_view"}'
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors duration-200"
              >
                Get Started Today
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Nicolinehus;
