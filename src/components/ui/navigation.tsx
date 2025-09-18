import { useState, useEffect } from 'react';
import { Button } from './button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  // No longer need scroll detection since we're always using glass effect

  // Always use white text for better contrast with the glass effect
  const textColorClass = 'text-white';
  const logoColorClass = 'text-white';

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const servicesDropdown = document.querySelector('[data-services-dropdown]');
      
      if (isServicesOpen && servicesDropdown && !servicesDropdown.contains(target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div className="nav-glass w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] rounded-[300px] px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://riy6kvbsz7kdh0jt.public.blob.vercel-storage.com/Westpoint-02.png" 
              alt="Westpoint Capital" 
              className="h-8 w-auto transition-opacity duration-300 hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsServicesOpen(!isServicesOpen);
                }}
                className={`hover:text-gray-300 transition-colors duration-300 ${textColorClass} flex items-center gap-1`}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div 
                  data-services-dropdown 
                  className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl overflow-hidden z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link 
                    to="/services" 
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-300"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link 
                    to="/chatbot" 
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-300"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Chatbot
                  </Link>
                  <Link 
                    to="/sms-email" 
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-300"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    SMS & Email
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/about" 
              className={`hover:text-gray-300 transition-colors duration-300 ${textColorClass}`}
            >
              About
            </Link>
            <Link 
              to="/cases" 
              className={`hover:text-gray-300 transition-colors duration-300 ${textColorClass}`}
            >
              Cases
            </Link>
            <Link 
              to="/partners" 
              className={`hover:text-gray-300 transition-colors duration-300 ${textColorClass}`}
            >
              Partnership
            </Link>
            <Link to="/contact">
              <Button variant="cta" size="sm" className="px-6 py-2">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${textColorClass}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl overflow-hidden z-50">
            <div className="flex flex-col p-4">
              <div className="py-3 px-4">
                <div className="text-foreground font-medium mb-2">Services</div>
                <div className="ml-4 space-y-2">
                  <Link 
                    to="/services" 
                    className="block text-foreground hover:text-primary transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link 
                    to="/chatbot" 
                    className="block text-foreground hover:text-primary transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Chatbot
                  </Link>
                  <Link 
                    to="/sms-email" 
                    className="block text-foreground hover:text-primary transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    SMS & Email
                  </Link>
                </div>
              </div>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/cases" 
                className="text-foreground hover:text-primary transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Cases
              </Link>
              <Link 
                to="/partners" 
                className="text-foreground hover:text-primary transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Partnership
              </Link>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="cta" size="sm" className="w-full px-6 py-2">
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;