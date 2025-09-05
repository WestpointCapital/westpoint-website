const CasesGrid = () => {
  const caseItems = [{
    image: "/lovable-uploads/738b1840-27d5-4ba0-8e6d-567318e784fc.png",
    title: "Compliance Suite",
    price: "$2,500",
    description: "Security and compliance tailored for the world's most regulated industries with advanced AI solutions.",
    badges: ["Top Rated", "Enterprise Ready"]
  }, {
    image: "/lovable-uploads/16c05f99-edea-463d-832a-6b33afafd856.png",
    title: "Reimbursement Analytics",
    price: "$1,800",
    description: "Medicare Medicaid reimbursement rates calculated with precision using our intelligent automation systems.",
    badges: ["Popular Choice", "Healthcare Focus"]
  }, {
    image: "/lovable-uploads/a92eaa08-b028-42a6-85b7-65af4d95f067.png",
    title: "Validation Framework",
    price: "$3,200",
    description: "Measurement of completed requirements mandatory for clinical implementation through AI-powered analytics.",
    badges: ["New Release", "Clinical Grade"]
  }, {
    image: "/lovable-uploads/9b76c421-b1fa-4777-8421-96704513645e.png",
    title: "Traction Analytics",
    price: "$2,200",
    description: "Timeline and steps of validation streamlined through our comprehensive automation framework.",
    badges: ["AI-Powered", "Fast Track"]
  }, {
    image: "/lovable-uploads/22874d4e-4417-4ab7-8cd1-a2b0f0a7492e.png",
    title: "Investment Analytics",
    price: "$2,800",
    description: "De-risk an innovation's funding and investment with predictive analytics and intelligent insights.",
    badges: ["ROI Focused", "Predictive"]
  }, {
    image: "/lovable-uploads/a60fb6f4-3664-4e5d-a1d0-5426229798cf.png",
    title: "Automation Suite",
    price: "$3,500",
    description: "Complete automation framework for enterprise-level validation and compliance management.",
    badges: ["Premium", "Full Suite"]
  }];
  return <section className="py-20 bg-slate-950">
      <div className="w-[65%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 max-w-7xl mx-auto">
          {caseItems.map((item, index) => <div key={index} className="relative rounded-3xl overflow-hidden h-[500px] mb-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group will-change-transform">
              {/* Full Background Image */}
              <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{
            backgroundImage: `url(${item.image})`
          }} />
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.price}
                </span>
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
                  <button className="w-full py-3 px-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors duration-200">
                    Reserve
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default CasesGrid;