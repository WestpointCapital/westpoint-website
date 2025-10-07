import { Phone, Mail, BarChart3, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Number Management",
      description: "We handle all your SMS phone numbers, ensuring compliance and optimal deliverability across all campaigns."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Campaign Posting",
      description: "From strategy to execution, we create, schedule, and manage all your SMS and email campaigns."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Detailed Reports",
      description: "Get comprehensive analytics and performance reports to track your campaign success and ROI."
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Regular Updates",
      description: "Stay informed with regular updates on campaign performance, industry insights, and optimization recommendations."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-950/60 via-slate-950 to-slate-950 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-400/20"></div>
      <div className="mx-auto px-6 max-w-7xl relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our core <span className="text-blue-400">services</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We handle everything from A to Z in SMS and email marketing. From phone number management to campaign posting, detailed reports, and regular updates - we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="cta" size="lg" className="px-8 py-4">
              Explore All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;