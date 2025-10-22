import Navigation from '../../components/ui/navigation';
import Footer from '../../components/sections/footer';
import { ArrowLeft, CheckCircle, TrendingUp, Users, DollarSign, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Bedreklima = () => {
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
              to="/" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Cases
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-green-500/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30">
                    HVAC Industry
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-green-400">Bedreklima</span>
                </h1>
                
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  We helped scale this Danish HVAC company to 42% online sales growth through strategic SMS marketing campaigns and digital transformation, revolutionizing their lead management and customer engagement.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="glass-container rounded-xl p-4 bg-slate-900/50 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <span className="text-2xl font-bold text-white">+42%</span>
                    </div>
                    <span className="text-white/70 text-sm">Online Sales Growth</span>
                  </div>
                  <div className="glass-container rounded-xl p-4 bg-slate-900/50 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-5 h-5 text-blue-400" />
                      <span className="text-2xl font-bold text-white">+22%</span>
                    </div>
                    <span className="text-white/70 text-sm">Revenue Increase</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Bedre-klima-vogn-1024x768.webp" 
                  alt="Bedreklima HVAC" 
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
                  About <span className="text-green-400">Bedreklima</span>
                </h2>
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  Bedreklima is a leading Danish HVAC company specializing in high-quality heat pumps with over 20 years of industry experience. Based in Vejle & Aarhus, they offer a comprehensive range of air-to-water, air-to-air, and propane heat pumps from brands like LG, Nordic, and Panasonic. With VE-approved installers and free delivery within 5-12 days, they serve customers across Denmark with professional installation and maintenance services.
                </p>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    Despite their expertise in heat pump installation and maintenance, Bedreklima was struggling with lead management and digital customer engagement. They had a strong offline presence but were missing opportunities to convert online inquiries and nurture leads effectively through digital channels.
                  </p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Limited online presence and digital marketing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Low customer engagement and retention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Seasonal business fluctuations</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/nordic-refrigeration.jpg" 
                  alt="Bedreklima Project Overview" 
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                  style={{ objectPosition: 'center center', aspectRatio: '9/16' }}
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
                Our <span className="text-green-400">Solution</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We implemented a comprehensive digital transformation strategy focused on SMS marketing, customer relationship management, and seasonal campaign optimization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-green-500/20 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Seasonal Campaigns</h3>
                <p className="text-white/70">
                  Created targeted SMS campaigns for heating and cooling seasons to maximize customer engagement.
                </p>
              </div>
              
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-blue-500/20 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Customer Segmentation</h3>
                <p className="text-white/70">
                  Segmented customers by service history, preferences, and seasonal needs for personalized messaging.
                </p>
              </div>
              
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-purple-500/20 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Maintenance Reminders</h3>
                <p className="text-white/70">
                  Automated maintenance reminders and service scheduling to increase customer retention and revenue.
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
                The <span className="text-green-400">Results</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Within the first 3 months with us, Bedreklima achieved remarkable improvements across all key performance indicators.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-green-500/20 text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">+42%</div>
                <div className="text-white/70">Online Sales Growth</div>
              </div>
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-blue-500/20 text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">+11%</div>
                <div className="text-white/70">Conversion Rate</div>
              </div>
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-purple-500/20 text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">+22%</div>
                <div className="text-white/70">Revenue Increase</div>
              </div>
              <div className="glass-container rounded-2xl p-6 bg-slate-900/50 border border-orange-500/20 text-center">
                <div className="text-5xl font-bold text-orange-400 mb-2">+11%</div>
                <div className="text-white/70">Engagement</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-950">
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
            <div className="glass-container rounded-2xl p-12 text-center bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-green-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to transform your HVAC business?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help your HVAC company scale online and increase revenue through digital marketing.
              </p>
              <button 
                       data-cal-link="westpoint-capital/free-consultation-call"
                       data-cal-namespace="free-consultation-call"
                data-cal-config='{"layout":"month_view"}'
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-colors duration-200"
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

export default Bedreklima;
