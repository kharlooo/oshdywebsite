import { Heart, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
                  123 Celebration Avenue<br />
                  Event City, EC 12345
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-amber-400 mr-3" />
                <span className="text-gray-300 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-amber-400 mr-3" />
                <span className="text-gray-300 text-sm">oshdy@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Business Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-amber-400 mr-3" />
                <div className="text-gray-300 text-sm">
                  <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 10:00 AM - 4:00 PM</div>
                  <div>Sun: By Appointment</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold text-amber-400 mb-2">Emergency Contact</h5>
              <p className="text-gray-300 text-sm">(555) 123-URGENT</p>
              <p className="text-gray-400 text-xs">For day-of-event emergencies</p>
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
              <Link to="/privacy-policy" className="hover:text-amber-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-amber-400 transition-colors duration-200">
                Terms of Service
              </Link>
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
