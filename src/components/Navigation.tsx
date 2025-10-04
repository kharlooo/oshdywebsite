import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Event & Catering Info', href: '/#services' },
    { name: 'Mission & Vision', href: '/#mission' },
    { name: 'About Us', href: '/#about' },
  ];

  // Handle scroll effect for mobile only
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 640) {
        if (window.scrollY > 10) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('/#', '');

    // Check if it's a touch device (mobile)
    if ('ontouchstart' in window) {
      // Close the menu after 150ms delay on mobile
      setTimeout(() => {
        setIsMenuOpen(false);
        
        // Then proceed with navigation after menu closes
        setTimeout(() => {
          if (location.pathname === '/') {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          } else {
            sessionStorage.setItem('scrollToSection', sectionId);
            navigate('/');
          }
        }, 50); // Small delay to ensure menu is fully closed
      }, 150);
    } else {
      // Regular behavior for non-touch devices
      setIsMenuOpen(false);
      if (location.pathname === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        sessionStorage.setItem('scrollToSection', sectionId);
        navigate('/');
      }
    }
  };

  const handleLogoClick = () => {
    // Check if it's a touch device (mobile)
    if ('ontouchstart' in window) {
      setTimeout(() => {
        if (location.pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          sessionStorage.setItem('scrollToSection', 'top');
          navigate('/');
        }
      }, 200);
    } else {
      // Regular behavior for non-touch devices
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        sessionStorage.setItem('scrollToSection', 'top');
        navigate('/');
      }
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Title Clickable */}
          <div className="flex-shrink-0 flex items-center">
            <div onClick={handleLogoClick} className="flex items-center cursor-pointer">
              <img
                src="/favicon.ico"
                alt="Logo"
                className={`h-12 w-12 mr-3 transition-all duration-500 ${
                  scrolled ? 'scale-110' : 'scale-100'
                }`}
              />
              <h1
                className="flex flex-col sm:block font-serif tracking-wide text-left sm:text-left items-center sm:items-start"
                style={{
                  background: 'linear-gradient(to bottom, #fbbf24, #f59e0b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: `-1px -1px 0 rgba(255,255,255,0.3), 1px 1px 2px rgba(0,0,0,0.2)`,
                  transition: 'opacity 0.5s ease-in-out',
                }}
              >
                {/* Mobile */}
                <span className="text-2xl font-extrabold sm:hidden">OSHDY</span>
                <span className="text-[10px] sm:hidden italic tracking-tight -mt-0.5 text-center">
                  Event Catering Services
                </span>

                {/* Desktop */}
                <span className="hidden sm:inline text-2xl font-bold">
                  OSHDY Event Catering Services
                </span>
              </h1>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-amber-600 px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap elegant-font"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu icon */}
          <div className="lg:hidden">
            <button
              onClick={() => {
                // Check if it's a touch device (mobile)
                if ('ontouchstart' in window) {
                  setTimeout(() => {
                    setIsMenuOpen(!isMenuOpen);
                  }, 200);
                } else {
                  setIsMenuOpen(!isMenuOpen);
                }
              }}
              className="text-gray-700 hover:text-amber-600 focus:outline-none transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`text-gray-700 hover:text-amber-600 hover:bg-amber-50 block px-3 py-3 rounded-md text-base font-medium transition-all duration-200 w-full text-left transform elegant-font ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Add style tag for the elegant font */}
      <style>
        {`
          .elegant-font {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            letter-spacing: 0.05em;
          }
        `}
      </style>
    </nav>
  );
};

export default Navigation;