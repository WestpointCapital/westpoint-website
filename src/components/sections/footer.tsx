import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { Button } from '../ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-subtle py-16">
      <div className="mx-auto px-6 w-[65%]">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">Westpoint Capital</h3>
            <p className="text-white/70 mb-6 leading-relaxed max-w-md">
              Transforming enterprises through innovative SaaS solutions, intelligent automation, 
              and AI-powered tools that drive measurable business results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-white/70 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="text-white/70">
                contact@westpointcapital.com
              </li>
              <li>
                <a href="tel:+17439026451" className="text-white/70 hover:text-white transition-colors">
                  +1 (743) 902-6451
                </a>
              </li>
              <li className="text-white/70">
                HQ: Tallinn, Estonia
              </li>
              <li className="text-white/70">
                Office 2: Vejle, Denmark
              </li>
              <li className="text-white/70">
                Office 3: Phuket, Thailand
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="text-white/70 mb-4 md:mb-0">
            © 2019 Westpoint Capital. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={scrollToTop}
              className="glass-container border-none hover:scale-110 transition-transform duration-200"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;