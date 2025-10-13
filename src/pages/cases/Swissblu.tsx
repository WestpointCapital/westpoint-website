import Navigation from '../../components/ui/navigation';
import Footer from '../../components/sections/footer';
import { ArrowLeft, CheckCircle, TrendingUp, Users, DollarSign, Mail, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Swissblu = () => {
  useEffect(() => {
    // Initialize Cal.com embed
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "30min", {origin:"https://app.cal.com"});
      Cal.ns["30min"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#329b88"},"dark":{"cal-brand":"#fafafa"}},"hideEventTypeDetails":false,"layout":"month_view"});
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
                    Bathroom Fixtures
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-blue-400">Swissblu</span>
                </h1>
                
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  We revolutionized their email marketing strategy with comprehensive campaigns that transformed customer engagement and dramatically increased sales through targeted automation and personalized messaging.
                </p>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-2xl font-bold text-white">280%</span>
                    <span className="text-white/70">Email Open Rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-2xl font-bold text-white">450%</span>
                    <span className="text-white/70">Sales Increase</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Showerheads.png" 
                  alt="Swissblu" 
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
                  About <span className="text-blue-400">Swissblu</span>
                </h2>
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  Swissblu is a premium bathroom fixtures company specializing in high-quality showerheads and bathroom accessories. Known for their Swiss precision and innovative designs, they offer a range of luxury bathroom products that combine functionality with aesthetic appeal. Their products are designed to enhance the bathroom experience with superior water flow technology and elegant Swiss craftsmanship.
                </p>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    Despite their premium product quality, Swissblu was struggling with online sales performance and email marketing effectiveness. Their digital presence wasn't converting visitors into customers, and they needed a comprehensive strategy to improve their online sales and customer engagement.
                  </p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Poor online sales performance and low conversion rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Ineffective email marketing with low engagement rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Limited customer segmentation and targeting strategies</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/swiss.webp" 
                  alt="Swissblu Project Overview" 
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
                We implemented a comprehensive email marketing strategy that dramatically improved their online sales performance through advanced segmentation, automated workflows, and personalized content that transformed customer engagement.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-blue-500/20 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Advanced Segmentation</h3>
                <p className="text-white/70">
                  Created detailed customer segments based on purchase history, preferences, and behavior for highly targeted campaigns.
                </p>
              </div>
              
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-green-500/20 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Automated Workflows</h3>
                <p className="text-white/70">
                  Implemented sophisticated email automation sequences for welcome series, abandoned cart recovery, and post-purchase follow-ups.
                </p>
              </div>
              
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-purple-500/20 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Personalized Content</h3>
                <p className="text-white/70">
                  Developed dynamic content that adapts to each customer's preferences and purchase history for maximum relevance.
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
                Our email marketing strategy delivered remarkable improvements in online sales performance, transforming Swissblu's digital presence and customer engagement.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-blue-500/20 text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">+123%</div>
                <div className="text-white/70">Email Open Rate Increase</div>
              </div>
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-green-500/20 text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">+9%</div>
                <div className="text-white/70">Online Sales Increase</div>
              </div>
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-purple-500/20 text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">+14%</div>
                <div className="text-white/70">Click-Through Rate</div>
              </div>
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-orange-500/20 text-center">
                <div className="text-5xl font-bold text-orange-400 mb-2">+6.2%</div>
                <div className="text-white/70">Conversion Rate</div>
              </div>
            </div>
            
            <div className="mt-16 glass-container rounded-2xl p-8 bg-slate-900/50 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Email Marketing Performance</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-4">Campaign Performance</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-white/70">Total Emails Sent:</span>
                      <span className="text-white font-medium">45,600</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Open Rate:</span>
                      <span className="text-white font-medium">33.6%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Click-Through Rate:</span>
                      <span className="text-white font-medium">18.7%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Conversion Rate:</span>
                      <span className="text-white font-medium">6.2%</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-4">Business Impact</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-white/70">Revenue Generated:</span>
                      <span className="text-white font-medium">$2.8M</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">New Customers:</span>
                      <span className="text-white font-medium">1,247</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">Customer Lifetime Value:</span>
                      <span className="text-white font-medium">$2,245</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/70">ROI:</span>
                      <span className="text-white font-medium">8,750%</span>
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
                Ready to transform your email marketing?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results with targeted email campaigns and automation strategies.
              </p>
              <button 
                data-cal-link="goauto/30min"
                data-cal-namespace="30min"
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

export default Swissblu;
