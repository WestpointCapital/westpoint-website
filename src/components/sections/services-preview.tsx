import { Phone, Mail, BarChart3, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our core <span className="text-blue-400">services</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                We handle everything from A to Z in SMS and email marketing. From phone number management to campaign posting, detailed reports, and regular updates - we've got you covered.
              </p>
            </div>
            
            {/* Service Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 lg:justify-start justify-center">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-lg font-semibold text-white mb-2">Phone Number Management</h3>
                  <p className="text-white/70">We handle all your SMS phone numbers, ensuring compliance and optimal deliverability across all campaigns.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 lg:justify-start justify-center">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-lg font-semibold text-white mb-2">Campaign Posting</h3>
                  <p className="text-white/70">From strategy to execution, we create, schedule, and manage all your SMS and email campaigns.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 lg:justify-start justify-center">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-lg font-semibold text-white mb-2">Detailed Reports</h3>
                  <p className="text-white/70">Get comprehensive analytics and performance reports to track your campaign success and ROI.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 lg:justify-start justify-center">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-lg font-semibold text-white mb-2">Regular Updates</h3>
                  <p className="text-white/70">Stay informed with regular updates on campaign performance, industry insights, and optimization recommendations.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link to="/services">
                <Button variant="cta" size="lg" className="px-8 py-4">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - Phone Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/chat-glass.png" 
                alt="Phone illustration showing SMS and email marketing services"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;