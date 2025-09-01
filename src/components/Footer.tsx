import { Heart, MapPin, Phone, Mail, Globe, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleLinkClick = (url, isExternal = false) => {
    // Check if it's a touch device (mobile)
    if ('ontouchstart' in window) {
      setTimeout(() => {
        if (isExternal) {
          window.open(url, '_blank', 'noopener,noreferrer');
        } else {
          navigate(url);
        }
      }, 150);
    } else {
      // Regular behavior for non-touch devices
      if (isExternal) {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else {
        navigate(url);
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-amber-400">OSHDY</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating unforgettable moments through exceptional catering and event services. 
              From intimate gatherings to grand celebrations, we bring your vision to life with 
              passion, creativity, and attention to every detail.
            </p>
            <div className="flex items-center text-gray-300">
              <Heart className="w-5 h-5 text-amber-400 mr-2" />
              <span className="text-sm">Made with love for every celebration</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  P5 B46 L3 Centella Homes,<br />
                  Rodriguez, Philippines, 1860
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-amber-400 mr-3" />
                <span className="text-gray-300 text-sm">0981 377 7731</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-amber-400 mr-3" />
                <span className="text-gray-300 text-sm">oshdyevents@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-amber-400">Service Areas in the Philippines</h4>
            <div className="flex items-start mb-4">
              <Globe className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
              <div className="text-gray-300 text-sm leading-relaxed">
                Quezon City &middot; Antipolo &middot; Aparri &middot; San Mateo &middot; Cainta &middot; Caloocan &middot; Pasig &middot; Rodriguez &middot; Manila &middot; Bugallon
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Follow Us</h4>
              <div className="flex items-center space-x-3">
                <Facebook className="w-5 h-5 text-amber-400" />
                <button
                  onClick={() => handleLinkClick('https://www.facebook.com/julianjongliquigan', true)}
                  className="text-sm text-gray-300 hover:text-amber-400 transition-colors duration-200 text-left"
                >
                  facebook.com/oshdyevents
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} OSHDY. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button
                onClick={() => handleLinkClick('/privacy-policy')}
                className="hover:text-amber-400 transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleLinkClick('/terms-of-service')}
                className="hover:text-amber-400 transition-colors duration-200"
              >
                Terms of Service
              </button>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              Ready to plan your perfect event? Download our mobile app for easy booking and planning tools.
            </p>
            <button className="mt-3 bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-200">
              Get Our App
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;