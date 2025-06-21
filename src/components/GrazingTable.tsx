
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Coffee, Apple, Candy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const GrazingTable = () => {
  const grazingPackages = [
    {
      id: 'delicacies',
      title: 'Assorted Delicacies / Kakanin',
      icon: <Coffee className="w-8 h-8 text-amber-600" />,
      bgGradient: 'from-amber-100 to-orange-100',
      description: 'Traditional Filipino delicacies and sweet treats',
      pricing: [
        { pax: 100, price: '12K' },
        { pax: 50, price: '8K' }
      ]
    },
    {
      id: 'mixed-deli',
      title: 'Assorted Mixed Deli, Fruits, Bread & Biscuits',
      icon: <Apple className="w-8 h-8 text-green-600" />,
      bgGradient: 'from-green-100 to-emerald-100',
      description: 'Premium selection of fruits, deli, and baked goods',
      pricing: [
        { pax: 100, price: '15K' },
        { pax: 50, price: '10K' }
      ]
    },
    {
      id: 'candy-corner',
      title: 'Sweet / Candy Corner',
      icon: <Candy className="w-8 h-8 text-pink-600" />,
      bgGradient: 'from-pink-100 to-purple-100',
      description: 'Delightful sweets and candy station for all ages',
      pricing: [
        { pax: 100, price: '8K' },
        { pax: 50, price: '5K' }
      ]
    }
  ];
  const navigate = useNavigate();

  return (
    <section id="grazing-table" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Grazing Table
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elevate your event with our beautifully curated grazing tables, featuring an array of delicious options to please every palate
          </p>
        </div>

        {/* Grazing Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {grazingPackages.map((pkg) => (
            <Link
              key={pkg.id}
              to={`/grazing/${pkg.id}`}
              className="group block"
            >
              <Card className="h-full border-2 border-gray-200 hover:border-amber-300 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:scale-105">
                <CardHeader className={`bg-gradient-to-br ${pkg.bgGradient} relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-20 rounded-full -mr-16 -mt-16"></div>
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-white p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                      {pkg.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 text-center mb-2">
                    {pkg.title}
                  </CardTitle>
                  <p className="text-gray-600 text-center text-sm">
                    {pkg.description}
                  </p>
                </CardHeader>
                <CardContent className="p-6 bg-white">
                  <div className="space-y-4">
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-800 mb-3">Package Pricing</h4>
                      <div className="space-y-2">
                        {pkg.pricing.map((price, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                            <span className="text-gray-700 font-medium">{price.pax} Pax</span>
                            <span className="text-amber-600 font-bold text-lg">₱{price.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-center text-amber-600 group-hover:text-amber-700 transition-colors duration-200">
                        <span className="font-medium mr-2">View Details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Perfect for Any Occasion
            </h3>
            <p className="text-gray-600 mb-6">
              Our grazing tables are ideal for corporate events, birthdays, weddings, and social gatherings. Each table is carefully arranged with fresh, quality ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrazingTable;
