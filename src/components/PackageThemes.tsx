import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Heart, Gem, Compass, Wand2 } from 'lucide-react';

const PackageThemes = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packageData = {
    'birthday-baptismal': {
      title: 'Birthday/Baptismal Package',
      description: 'Choose your perfect theme for a memorable celebration',
      themes: [
        {
          name: 'Adventure',
          icon: Compass,
          description: 'Embark on an exciting journey with adventure-themed decorations and activities',
          image: '/packagesimg/bbap/adventure.jpg',
          features: [
            'Treasure hunt activities',
            'Explorer-themed decorations',
            'Adventure map place settings',
            'Compass party favors'
          ],
          colors: ['Forest Green', 'Earth Brown', 'Adventure Gold']
        },
        {
          name: 'Fantasy',
          icon: Wand2,
          description: 'Create a magical wonderland with enchanted decorations and mystical elements',
          image: '/packagesimg/bbap/fantasy.jpg',
          features: [
            'Fairy tale decorations',
            'Magical lighting effects',
            'Enchanted forest setup',
            'Fantasy character elements'
          ],
          colors: ['Mystic Purple', 'Fairy Pink', 'Magic Silver']
        }
      ]
    },
    'debutant': {
      title: 'Debutant Package',
      description: 'Elegant themes for your special coming-of-age celebration',
      themes: [
        {
          name: 'Roses',
          icon: Heart,
          description: 'Classic elegance with romantic rose arrangements and sophisticated styling',
          image: '/packagesimg/debutant/roses.jpg',
          features: [
            'Fresh rose centerpieces',
            'Elegant pink and white décor',
            'Romantic lighting setup',
            'Rose petal accents'
          ],
          colors: ['Rose Pink', 'Ivory White', 'Gold Accents']
        },
        {
          name: 'Treasures',
          icon: Gem,
          description: 'Luxurious theme with precious gemstone colors and opulent decorations',
          image: '/packagesimg/debutant/treasures.jpg',
          features: [
            'Jewel-toned decorations',
            'Crystalline centerpieces',
            'Luxurious fabric draping',
            'Gemstone-inspired lighting'
          ],
          colors: ['Emerald Green', 'Sapphire Blue', 'Diamond Silver']
        }
      ]
    },
    'wedding': {
      title: 'Wedding Package',
      description: 'Romantic themes to make your wedding day absolutely perfect',
      themes: [
        {
          name: 'Love',
          icon: Heart,
          description: 'Classic romantic theme with heartfelt decorations and intimate ambiance',
          image: '/packagesimg/wedding/love.jpg',
          features: [
            'Heart-shaped decorations',
            'Romantic candle lighting',
            'Love quote displays',
            'Intimate seating arrangements'
          ],
          colors: ['Passionate Red', 'Pure White', 'Romance Gold']
        },
        {
          name: 'Honey',
          icon: Sparkles,
          description: 'Warm and sweet theme with golden honey tones and natural elements',
          image: '/packagesimg/wedding/honey.jpg',
          features: [
            'Golden honey color palette',
            'Natural wooden accents',
            'Honeycomb pattern details',
            'Sweet floral arrangements'
          ],
          colors: ['Honey Gold', 'Warm Amber', 'Natural Cream']
        }
      ]
    }
  };

  const packageInfo = packageData[packageId as keyof typeof packageData];

  if (!packageInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Package Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-amber-600 hover:text-amber-700"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 relative">
      {/* Floating Back Button */}
      <motion.button
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.3 }}
  onClick={() => navigate(-1)}
  className="fixed top-24 left-4 z-30 border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white p-3 rounded-full shadow-md transition duration-300"
  aria-label="Go Back"
>
  <ArrowLeft className="w-5 h-5" />
</motion.button>


      {/* Header */}
      <div className="bg-gradient-to-b from-amber-50 to-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {packageInfo.title}
          </h1>
          <p className="text-xl text-gray-600">
            {packageInfo.description}
          </p>
        </div>
      </div>

      {/* Theme Cards */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {packageInfo.themes.map((theme) => (
              <div
                key={theme.name}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-amber-300 transition-all duration-300 hover:shadow-2xl cursor-pointer"
                onClick={() => navigate(`/theme/${packageId}-${theme.name.toLowerCase()}`)}
              >
                {/* Image */}
                <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: `url(${theme.image})` }}>
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-full">
                    <theme.icon className="w-6 h-6 text-amber-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{theme.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{theme.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Theme Features:</h4>
                    <ul className="space-y-2">
                      {theme.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Color Palette:</h4>
                    <div className="flex flex-wrap gap-2">
                      {theme.colors.map((color) => (
                        <span key={color} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 text-center">
                    Select {theme.name} Theme
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help Choosing?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our event coordinators are here to help you select the perfect theme for your special occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Download App
            </button>
            <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageThemes;
