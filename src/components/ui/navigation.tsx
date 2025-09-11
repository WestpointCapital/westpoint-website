import { useState } from 'react';
import { Button } from './button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // No longer need scroll detection since we're always using glass effect

  // Always use white text for better contrast with the glass effect
  const textColorClass = 'text-white';
  const logoColorClass = 'text-white';

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
            <Link 
              to="/services" 
              className={`hover:text-gray-300 transition-colors duration-300 ${textColorClass}`}
            >
              Services
            </Link>
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
              Partnerprogram
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
              <Link 
                to="/services" 
                className="text-foreground hover:text-primary transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
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
                Partnerprogram
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