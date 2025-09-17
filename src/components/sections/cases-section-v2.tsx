import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CasesSectionV2 = () => {
  const cases = [
    {
      title: "Villa Vie Residences - Cruise Ship",
      description: "We helped this luxury cruise ship company reactivate old and new leads and gain more than 5 million+ revenue through targeted SMS and email marketing campaigns.",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Screenshot%202025-09-17%20at%2013.47.33.png",
      services: ["SMS Marketing", "Email Marketing"]
    },
    {
      title: "Bedreklima",
      description: "We helped scale this HVAC company to 40% of sales online through SMS marketing.",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Bedre-klima-vogn-1024x768.webp",
      services: ["SMS Marketing"]
    },
    {
      title: "Nicolinehus Apartments",
      description: "Help when develop a software to manage the the apartments avalibility and started email campaigns",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Nicolinehus-Aarhus-Oe.webp",
      services: ["Email Marketing"]
    },
    {
      title: "Nordic Refrigeration Solutions",
      description: "Running comprehensive SMS marketing campaigns for all signed up leads, automating customer communication and streamlining the sales process with AI-powered responses.",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/nrs1.png",
      services: ["SMS Marketing"]
    },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="w-full">
        {/* Header */}
        <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Our <span className="text-blue-400">success stories</span>
          </h2>
        </div>

        {/* Cases Grid */}
        <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 overflow-visible py-4">
            {cases.map((caseItem, index) => (
              <div 
                key={index}
                className="relative rounded-3xl overflow-hidden h-[600px] w-full"
              >
                {/* Full Background Image */}
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center" 
                  style={{ backgroundImage: `url(${caseItem.image})` }}
                />
                
                {/* Services Tags - Top Right Corner */}
                <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                  {caseItem.services.map((service, serviceIndex) => (
                    <span 
                      key={serviceIndex}
                      className="px-4 py-2 bg-white/90 text-slate-800 text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Glass Overlay - Bottom 70% */}
                <div className="absolute bottom-0 left-0 right-0 h-[70%] glass-card-overlay text-white flex flex-col justify-end p-6 gap-4 py-0 overflow-visible">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {caseItem.title}
                    </h3>
                    <p className="text-white/80 text-base leading-relaxed mb-4">
                      {caseItem.description}
                    </p>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="pb-4">
                    <Link 
                      to={index === 0 ? "/cases/villa-vie-residences" : 
                          index === 1 ? "/cases/bedreklima" : 
                          index === 2 ? "/cases/nikolinehus" : 
                          "/cases/nordic-refrigeration"}
                      className="w-full py-4 px-6 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200 inline-block text-center text-lg"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Cases Button */}
        <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto px-6 sm:px-8 mt-8">
          <Link 
            to="/cases" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span>View All Cases</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CasesSectionV2;