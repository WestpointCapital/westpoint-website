import { Link } from 'react-router-dom';

const CasesGrid = () => {
  const caseItems = [{
    image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Screenshot%202025-09-17%20at%2013.47.33.png",
    title: "Villa Vie Residences",
    services: ["SMS Marketing", "Email Marketing"],
    description: "We helped them reactivate old and new leads and gain more than 5 million+ revenue.",
    link: "/cases/villa-vie-residences"
  }, {
    image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Bedre-klima-vogn-1024x768.webp",
    title: "Bedreklima",
    services: ["SMS Marketing"],
    description: "We helped scale this HVAC company to 40% of sales online through SMS marketing.",
    link: "/cases/bedreklima"
  }, {
    image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Nicolinehus-Aarhus-Oe.webp",
    title: "Nicolinehus Apartments",
    services: ["Email Marketing"],
    description: "Help when develop a software to manage the the apartments avalibility and started email campaigns",
    link: "/cases/nikolinehus"
  }, {
    image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/nrs1.png",
    title: "Nordic Refrigeration Solutions",
    services: ["SMS Marketing"],
    description: "Running comprehensive SMS marketing campaigns for all signed up leads, automating customer communication and streamlining the sales process with AI-powered responses.",
    link: "/cases/nordic-refrigeration"
  }, {
    image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Showerheads.png",
    title: "Swissblu",
    services: ["Email Marketing"],
    description: "Comprehensive email marketing campaigns that transformed their customer engagement and increased sales through targeted automation and personalized messaging strategies.",
    link: "/cases/swissblu"
  }, {
    isCTA: true,
    title: "Ready to transform your business?",
    subtitle: "Let's discuss your project",
    description: "Get in touch with our team to explore how we can help you achieve similar results with our proven strategies and cutting-edge technology.",
    buttonText: "Contact"
  }];
  return <section className="py-20 bg-slate-950">
      <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {caseItems.map((item, index) => {
            if (item.isCTA) {
              return (
                <div key={index} className="relative rounded-3xl overflow-hidden h-[500px] mb-6 border border-white/10">
                  {/* CTA Card Background - Inspired by Synquote */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
                    {/* Full card geometric pattern with fade */}
                    <div className="absolute inset-0">
                      {/* Geometric cubes/hexagons pattern - full width with fade */}
                      <div className="absolute inset-0 opacity-20">
                        {/* Large geometric shapes - spread across full width */}
                        <div className="absolute top-8 right-8 w-16 h-16 bg-purple-500/40 rotate-45"></div>
                        <div className="absolute top-20 right-20 w-12 h-12 bg-blue-500/40 rotate-12"></div>
                        <div className="absolute top-32 right-12 w-8 h-8 bg-purple-400/50 rotate-45"></div>
                        <div className="absolute top-16 right-32 w-10 h-10 bg-blue-400/40 rotate-12"></div>
                        <div className="absolute top-12 left-1/2 w-14 h-14 bg-purple-500/30 rotate-45"></div>
                        <div className="absolute top-24 left-1/3 w-10 h-10 bg-blue-500/30 rotate-12"></div>
                        
                        {/* Medium shapes - distributed across card */}
                        <div className="absolute top-40 right-24 w-6 h-6 bg-purple-300/50 rotate-45"></div>
                        <div className="absolute top-48 right-16 w-8 h-8 bg-blue-300/40 rotate-12"></div>
                        <div className="absolute top-56 right-28 w-4 h-4 bg-purple-400/60 rotate-45"></div>
                        <div className="absolute top-36 left-1/2 w-6 h-6 bg-purple-300/40 rotate-12"></div>
                        <div className="absolute top-44 left-2/3 w-8 h-8 bg-blue-400/30 rotate-45"></div>
                        
                        {/* Small shapes - scattered throughout */}
                        <div className="absolute top-64 right-20 w-3 h-3 bg-blue-400/50 rotate-12"></div>
                        <div className="absolute top-72 right-12 w-5 h-5 bg-purple-300/40 rotate-45"></div>
                        <div className="absolute top-80 right-24 w-2 h-2 bg-blue-500/60 rotate-12"></div>
                        <div className="absolute top-60 left-1/2 w-4 h-4 bg-purple-400/40 rotate-45"></div>
                        <div className="absolute top-68 left-1/3 w-3 h-3 bg-blue-300/50 rotate-12"></div>
                        <div className="absolute top-76 left-2/3 w-2 h-2 bg-purple-500/50 rotate-45"></div>
                      </div>
                      
                      {/* Gradient overlay for smooth fade from left to right */}
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-500/5 to-blue-500/15"></div>
                    </div>
                  </div>
                  
                  {/* CTA Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-8">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-blue-400 font-medium text-lg mb-6">
                        {item.subtitle}
                      </p>
                      <p className="text-white/80 text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Contact Button */}
                    <div className="pt-4">
                      <Link 
                        to="/partners"
                        className="w-full py-4 px-6 bg-white text-slate-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200 inline-block text-center text-lg"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      >
                        {item.buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
            
            return (
              <div key={index} className="relative rounded-3xl overflow-hidden h-[500px] mb-6">
              {/* Full Background Image */}
              <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{
            backgroundImage: `url(${item.image})`
          }} />
              
                {/* Services Tags - Top Right Corner */}
                <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                  {item.services.map((service, serviceIndex) => (
                    <span 
                      key={serviceIndex}
                      className="px-4 py-2 bg-white/90 text-slate-800 text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm"
                    >
                      {service}
                </span>
                  ))}
              </div>
              
              {/* Glass Overlay - Bottom 50% */}
              <div className="absolute bottom-0 left-0 right-0 h-[70%] glass-card-overlay text-white flex flex-col justify-end p-6 gap-4 py-0">
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    {item.title}
                  </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>
                
                {/* CTA Button */}
                <div className="pb-4">
                    <Link 
                      to={item.link}
                      className="w-full py-3 px-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors duration-200 inline-block text-center"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>;
};
export default CasesGrid;