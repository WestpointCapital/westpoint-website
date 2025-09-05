import { Award, Shield, Lightbulb, Users } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering solutions that exceed expectations and set new industry standards."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust",
      description: "Building lasting relationships through transparency, reliability, and consistent delivery of our promises."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Pioneering cutting-edge solutions that push boundaries and create new possibilities for our clients."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working together as partners to achieve remarkable results through shared vision and expertise."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-950/60 via-slate-950 to-slate-950 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-400/20"></div>
      <div className="mx-auto px-6 max-w-7xl relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our <span className="text-blue-400">core values</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            The principles that guide everything we do, ensuring we deliver exceptional 
            value and build meaningful relationships with our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;