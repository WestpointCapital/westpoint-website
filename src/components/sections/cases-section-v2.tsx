import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CasesSectionV2 = () => {
  const cases = [
    {
      title: "Villa Vie Residences",
      description: "We helped them reactivate old and new leads and gain more than 5 million+ revenue.",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Odyssey-No-Grain-3k-scaled%20%281%29.webp",
      price: "$2,500"
    },
    {
      title: "Bedreklima",
      description: "We helped scale this HVAC company to 40% of sales online through SMS marketing.",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Bedre-klima-vogn-1024x768.webp",
      price: "$2,500"
    },
    {
      title: "Nicolinehus Apartments",
      description: "Help when develop a software to manage the the apartments avalibility and started email campaigns",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Nicolinehus-Aarhus-Oe.webp",
      price: "$2,200"
    },
    {
      title: "Nordic Refrigeration Solutions",
      description: "Running comprehensive SMS marketing campaigns for all signed up leads, automating customer communication and streamlining the sales process with AI-powered responses.",
      image: "https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/nrs1.png",
      price: "$2,800"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 overflow-visible py-4">
            {cases.map((caseItem, index) => (
              <div 
                key={index}
                className="relative rounded-3xl overflow-hidden h-[500px] w-full"
              >
                {/* Full Background Image */}
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center" 
                  style={{ backgroundImage: `url(${caseItem.image})` }}
                />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {caseItem.price}
                  </span>
                </div>
                
                {/* Glass Overlay - Bottom 70% */}
                <div className="absolute bottom-0 left-0 right-0 h-[70%] glass-card-overlay text-white flex flex-col justify-end p-6 gap-4 py-0 overflow-visible">
                  <div>
                    <h3 className="text-xl font-bold mb-3">
                      {caseItem.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-3">
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
                      className="w-full py-3 px-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors duration-200 inline-block text-center"
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