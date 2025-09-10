import { useNavigate } from 'react-router-dom';
import { ArrowRight, Coffee, Apple, Candy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useState, useEffect } from 'react';

const GrazingTable = () => {
  const grazingPackages = [
    {
      id: 'delicacies',
      title: 'Assorted Delicacies / Kakanin',
      icon: <Coffee className="w-8 h-8 text-amber-600" />,
      bgGradient: 'from-amber-100 to-orange-100',
      textColor: 'text-amber-800',
      bgColor: 'bg-amber-200/50', 
      description: 'Traditional Filipino delicacies and sweet treats',
      pricing: [{ pax: 100 }, { pax: 50 }]
    },
    {
      id: 'mixed-deli',
      title: 'Assorted Mixed Deli, Fruits, Bread & Biscuits',
      icon: <Apple className="w-8 h-8 text-green-600" />,
      bgGradient: 'from-green-100 to-emerald-100',
      textColor: 'text-green-800',
      bgColor: 'bg-green-200/50', 
      description: 'Premium selection of fruits, deli, and baked goods',
      pricing: [{ pax: 100 }, { pax: 50 }]
    },
    {
      id: 'candy-corner',
      title: 'Sweet / Candy Corner',
      icon: <Candy className="w-8 h-8 text-pink-600" />,
      bgGradient: 'from-pink-100 to-purple-100',
      textColor: 'text-pink-800',
      bgColor: 'bg-pink-200/50', 
      description: 'Delightful sweets and candy station for all ages',
      pricing: [{ pax: 100 }, { pax: 50 }]
    }
  ];

  const navigate = useNavigate();
  const [clickedId, setClickedId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = (id: string) => {
    if (isMobile) {
      setClickedId(id); // trigger scale animation
      setTimeout(() => navigate(`/grazing/${id}`), 300); // delay for animation
    } else {
      navigate(`/grazing/${id}`); // instant for desktop
    }
  };

  return (
    <section id="grazing-table" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Grazing Table</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elevate your event with our beautifully curated grazing tables, featuring an array of delicious options to please every palate
          </p>
        </div>

        {/* Grazing Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {grazingPackages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => handleClick(pkg.id)}
              className={`cursor-pointer h-full border-2 border-gray-200 shadow-lg overflow-hidden rounded-xl transition-all duration-300 flex flex-col
                ${!isMobile ? 'hover:border-amber-300 hover:shadow-2xl hover:-translate-y-2' : ''}
                ${clickedId === pkg.id && isMobile ? 'scale-105 animate-pulse-mobile' : ''}`}
            >
              <CardHeader className={`bg-gradient-to-br ${pkg.bgGradient} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-20 rounded-full -mr-16 -mt-16"></div>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-white p-4 rounded-full shadow-md transition-transform duration-300">
                    {pkg.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 text-center mb-2">{pkg.title}</CardTitle>
                <p className="text-gray-600 text-center text-sm">{pkg.description}</p>
              </CardHeader>
              
              {/* Make CardContent a flex container that pushes content to bottom */}
              <CardContent className="p-6 bg-white flex flex-col flex-grow">
                <div className="space-y-4 flex-grow">
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-800 mb-3">Packages includes the following:</h4>
                    <div className="space-y-2">
                      {pkg.pricing.map((price, index) => (
                        <div key={index} className={`flex items-center justify-center ${pkg.bgColor} ${pkg.textColor} font-bold shadow-sm rounded-xl py-3 px-4 text-center`}>
                          <span className="text-lg">{price.pax} Pax</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* View Details section - always at the bottom */}
                <div className="pt-6 mt-auto border-t border-gray-100">
                  <div className="flex items-center justify-center text-amber-600 transition-colors duration-200">
                    <span className="font-medium mr-2">View Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200" />
                  </div>
                </div>
              </CardContent>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect for Any Occasion</h3>
            <p className="text-gray-600 mb-6">
              Our grazing tables are ideal for corporate events, birthdays, weddings, and social gatherings. Each table is carefully arranged with fresh, quality ingredients.
            </p>
          </div>
        </div>
      </div>

      {/* Pulse animation for mobile */}
      <style>
        {`
          @keyframes pulse-mobile {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          .animate-pulse-mobile {
            animation: pulse-mobile 0.2s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default GrazingTable;