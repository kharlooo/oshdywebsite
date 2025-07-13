import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import {
  Utensils,
  Cake,
  Fish,
  GlassWater,
  Drumstick,
  Egg,
  Salad,
  Sandwich
} from 'lucide-react';
import { ArrowLeft, Check, Clock, Users, Download, Sparkles, Heart, Crown, Gem, Compass, Wand2 } from 'lucide-react';
import ImageGallery from './ImageGallery';

const foodIcons1: Record<string, React.ElementType> = {
  Beef: Drumstick,
  Chicken: Egg,
  'Fish Fillet': Fish,
  'Mixed Veggie': Salad,
  Pasta: Utensils,
  Rice: Sandwich,
  Dessert: Cake,
  'Ice Tea': GlassWater
};

const foodIcons2: Record<string, React.ElementType> = {
  Beef: Drumstick,
  Pork: Drumstick,
  Chicken: Egg,
  'Fish Fillet': Fish,
  'Mixed Veggie': Salad,
  Pasta: Utensils,
  Rice: Sandwich,
  Dessert: Cake,
  'Ice Tea': GlassWater
};

const ThemeDetail = () => {
  const { themeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const themeData = {
    'birthday-baptismal-adventure': {
      title: 'Adventure Theme',
      subtitle: 'Birthday/Baptismal Package - Adventure',
      icon: Compass,
      heroImage: '/packagesimg/bbap/adventure.jpg',
      description: 'Embark on an exciting journey with our adventure-themed celebration. Perfect for young explorers who love treasure hunts and outdoor adventures.',
      colors: ['Forest Green', 'Earth Brown', 'Adventure Gold'],
      packages: [
        {
          name: 'Explorer Adventure Package',
          price: '$35/person',
          features: [
            'Premium adventure decorations',
            'Multi-stage treasure hunt',
            'Professional game coordinator',
            'Adventure-themed cake',
            'Enhanced catering menu',
            'Souvenir compass for each guest'
          ]
        },
        {
          name: 'Ultimate Adventure Package',
          price: '$45/person',
          features: [
            'Luxury adventure setup',
            'Interactive adventure stations',
            'Professional photographer',
            'Custom adventure certificates',
            'Premium catering with themed food',
            'Adventure party bags with multiple items'
          ]
        }
      ],
      additionalInfo: {
        minimumGuests: 15,
        planningTime: '2-3 weeks in advance',
        ageGroup: 'Perfect for ages 5-15'
      }
    },
    'birthday-baptismal-fantasy': {
      title: 'Fantasy Theme',
      subtitle: 'Birthday/Baptismal Package - Fantasy',
      icon: Wand2,
      heroImage: '/packagesimg/bbap/fantasy.jpg',
      description: 'Create a magical wonderland with enchanted decorations and mystical elements. Perfect for little dreamers who believe in fairy tales.',
      colors: ['Mystic Purple', 'Fairy Pink', 'Magic Silver'],
      packages: [
        {
          name: 'Enchanted Fantasy Package',
          price: '$35/person',
          features: [
            'Premium magical decorations',
            'Interactive fantasy activities',
            'Character appearance (1 hour)',
            'Fantasy-themed cake',
            'Enhanced catering menu',
            'Magic wand party favors'
          ]
        },
        {
          name: 'Ultimate Fantasy Package',
          price: '$45/person',
          features: [
            'Luxury enchanted setup',
            'Professional storytelling session',
            'Multiple character appearances',
            'Custom fantasy certificates',
            'Premium catering with themed treats',
            'Magical party bags with fairy accessories'
          ]
        }
      ],
      additionalInfo: {
        minimumGuests: 15,
        planningTime: '2-3 weeks in advance',
        ageGroup: 'Perfect for ages 3-12'
      }
    },
    'debutant-roses': {
      title: 'Roses Theme',
      subtitle: 'Debutant Package - Roses',
      icon: Heart,
      heroImage: '/packagesimg/debutant/roses.jpg',
      description: 'Classic elegance with romantic rose arrangements and sophisticated styling. Perfect for celebrating this important milestone with timeless beauty.',
      colors: ['Rose Pink', 'Ivory White', 'Gold Accents'],
      packages: [
        {
          name: 'Premium Roses Package',
          price: '$85/person',
          features: [
            'Premium rose arrangements',
            'Upgraded linens and tableware',
            'Extended cocktail reception',
            'Custom rose-themed cake',
            'Enhanced menu selections',
            'Dedicated event coordinator'
          ]
        },
        {
          name: 'Luxury Roses Package',
          price: '$110/person',
          features: [
            'Luxury rose displays',
            'Professional photography',
            'Champagne toast service',
            'Multi-tiered custom cake',
            'Gourmet catering menu',
            'Commemorative rose bouquet'
          ]
        }
      ],
      additionalInfo: {
        minimumGuests: 30,
        planningTime: '1-2 months in advance',
        ageGroup: 'Perfect for 18th birthday celebrations'
      }
    },
    'debutant-treasures': {
      title: 'Treasures Theme',
      subtitle: 'Debutant Package - Treasures',
      icon: Gem,
      heroImage: '/packagesimg/debutant/treasures.jpg',
      description: 'Luxurious theme with precious gemstone colors and opulent decorations. Create a celebration as precious as the milestone being celebrated.',
      colors: ['Emerald Green', 'Sapphire Blue', 'Diamond Silver'],
      packages: [
        {
          name: 'Premium Treasures Package',
          price: '$85/person',
          features: [
            'Premium gemstone decorations',
            'Crystal chandeliers',
            'Metallic accent pieces',
            'Custom treasure-themed cake',
            'Enhanced menu selections',
            'Dedicated event coordinator'
          ]
        },
        {
          name: 'Luxury Treasures Package',
          price: '$110/person',
          features: [
            'Luxury gemstone displays',
            'Professional lighting design',
            'Champagne and caviar service',
            'Multi-tiered designer cake',
            'Gourmet catering menu',
            'Commemorative jewelry gift'
          ]
        }
      ],
      additionalInfo: {
        minimumGuests: 30,
        planningTime: '1-2 months in advance',
        ageGroup: 'Perfect for 18th birthday celebrations'
      }
    },
    'wedding-love': {
      title: 'Love Theme',
      subtitle: 'Wedding Package - Love',
      icon: Heart,
      heroImage: '/packagesimg/wedding/love.jpg',
      description: 'Classic romantic theme with heartfelt decorations and intimate ambiance. Perfect for couples who want a timeless, romantic celebration of their love.',
      colors: ['Passionate Red', 'Pure White', 'Romance Gold'],
      packages: [
        {
          name: 'Luxury Love Package',
          price: '$185/person',
          features: [
            'Luxury romantic setup',
            'Professional wedding photography',
            'Live band entertainment',
            'Multi-tiered designer cake',
            '5-course chef\'s menu',
            'Premium open bar all night'
          ]
        }
      ],
      additionalInfo: {
        minimumGuests: 50,
        planningTime: '3-6 months in advance',
        ageGroup: 'Perfect for romantic couples'
      }
    },
    'wedding-honey': {
      title: 'Honey Theme',
      subtitle: 'Wedding Package - Honey',
      icon: Sparkles,
      heroImage: '/packagesimg/wedding/honey.jpg',
      description: 'Warm and sweet theme with golden honey tones and natural elements. Perfect for couples who love rustic elegance and natural beauty.',
      colors: ['Honey Gold', 'Warm Amber', 'Natural Cream'],
      packages: [
        {
          name: 'Premium Honey Package',
          price: '$125/person',
          features: [
            'Premium natural decorations',
            'Rustic wooden furniture',
            'Honey-inspired centerpieces',
            'Custom honey-themed cake',
            '4-course farm-to-table dinner',
            'Craft cocktail service'
          ]
        },
        {
          name: 'Luxury Honey Package',
          price: '$185/person',
          features: [
            'Luxury rustic setup',
            'Professional nature photography',
            'Live folk music entertainment',
            'Multi-tiered natural cake',
            '5-course organic menu',
            'Premium craft bar service'
          ]
        }
      ],
      additionalInfo: {
        minimumGuests: 50,
        planningTime: '3-6 months in advance',
        ageGroup: 'Perfect for nature-loving couples'
      }
    }
  };

  const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

  const theme = themeData[themeId as keyof typeof themeData];

  if (!theme) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Theme Not Found</h1>
          <Link to="/" className="text-amber-600 hover:text-amber-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
  <div className="min-h-screen pt-16 relative">
    <motion.button
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={() => {
  navigate(-1);
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 50); // small delay to wait for navigation
}}
      className="fixed top-24 left-4 z-30 border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white p-3 rounded-full shadow-md transition duration-300"
      aria-label="Go Back"
    >
      <ArrowLeft className="w-5 h-5" />
    </motion.button>


      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${theme.heroImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <motion.div 
            className="mb-4"
            variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.4, delay: 0.2}}
            >
              <theme.icon className="w-16 h-16 mx-auto text-amber-400" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{theme.title}</h1>
            <p className="text-xl md:text-2xl">{theme.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Theme Description */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed mb-12 text-center">
            {theme.description}
          </p>

          {/* Color Palette */}
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Color Palette</h3>
            <div className="flex justify-center gap-4">
              {theme.colors.map((color) => (
                <span key={color} className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full font-medium">
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* Theme Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Users className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Minimum Guests</h3>
              <p className="text-gray-600">{theme.additionalInfo.minimumGuests} people</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Planning Time</h3>
              <p className="text-gray-600">{theme.additionalInfo.planningTime}</p>
            </div>
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Perfect For</h3>
              <p className="text-gray-600">{theme.additionalInfo.ageGroup}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <ImageGallery serviceType={themeId || 'wedding-love'} />

      {/* Elegant Inclusions Section */}
      {themeId === 'wedding-honey' && (
  <section className="py-24 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 bg-center bg-cover pointer-events-none"></div>

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-6 tracking-tight">
        {theme.title} Inclusions & Packages
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-16 text-lg">
        A carefully curated setup that brings beauty, warmth, and sophistication to your special day.
      </p>

      {/* Food Menu + Pricing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Food Menu */}
        <div>
          <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-amber-100 p-8 h-full">
            <div className="flex items-center mb-6">
              <Utensils className="w-6 h-6 text-amber-500 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">Food Menu</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
              {Object.entries(foodIcons1).map(([label, Icon], index) => (
                <div
                  key={index}
                  className="bg-amber-100/30 border border-amber-200 text-amber-900 px-4 py-3 rounded-xl text-center text-sm font-medium shadow-inner flex flex-col items-center gap-1"
                >
                  <Icon className="w-5 h-5 mb-1" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Package Pricing */}
        <div>
          <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-amber-100 p-8 h-full">
            <div className="flex items-center mb-6">
              <Crown className="w-6 h-6 text-amber-500 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">Packages</h3>
            </div>
            <div className="space-y-6">
  {[
    { pax: '100 Pax' },
    { pax: '50 Pax' }
  ].map((item, idx) => (
    <div
      key={idx}
      className="bg-amber-100/40 border border-amber-200 px-6 py-5 rounded-xl shadow-sm text-center"
    >
      <h4 className="text-xl font-bold text-amber-700 drop-shadow-sm">
        {item.pax}
      </h4>
    </div>
  ))}
</div>

            <div className="mt-6 text-center text-sm italic text-gray-500">
              Download the app to see the prices.
            </div>
          </div>
        </div>
      </div>

      {/* Package Inclusions */}
      <div className="mb-16">
        <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200 p-8">
          <div className="flex items-center mb-6">
            <Crown className="w-6 h-6 text-green-500 mr-2" />
            <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">
              Complete Inclusions
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Elegant theme backdrop with artificial flowers',
              'Couch and red carpet or green carpet',
              'Arch entrance with artificial leaves and flowers',
              'Cake and gift tables with skirting',
              'Presidential tables with tiffany chairs',
              'Round tables with white linen and array color topper',
              'Artificial flowers with vase & table numbers',
              'Tiffany chairs with array color ribbons',
              'Buffet long table with skirting & centerpiece',
              'Ceramic plates (IKEA), highball glasses, goblets, sterilized spoons & forks (IKEA)',
              'Uniformed waiters and food server',
              'Purified tube ice and mineral water'
            ].map((inclusion, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-white via-gray-50 to-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{inclusion}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="text-center">
        <div className="inline-block px-6 py-4 bg-amber-100 text-amber-900 border-l-4 border-amber-500 rounded-md shadow-sm text-sm font-medium italic">
          ⏳ Note: 4 to 5 hours limit time. Beginning program included.
        </div>
      </div>
    </div>
  </section>
)}

      {themeId === 'wedding-love' && (
  <section className="py-24 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 bg-center bg-cover pointer-events-none"></div>

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-6 tracking-tight">
        {theme.title} Inclusions & Packages
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-16 text-lg">
        A carefully curated setup that brings beauty, warmth, and sophistication to your special day.
      </p>

      {/* Food Menu + Pricing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Food Menu */}
        <div>
          <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-amber-100 p-8 h-full">
            <div className="flex items-center mb-6">
              <Utensils className="w-6 h-6 text-amber-500 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">Food Menu</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
              {Object.entries(foodIcons2).map(([label, Icon], index) => (
                <div
                  key={index}
                  className="bg-amber-100/30 border border-amber-200 text-amber-900 px-4 py-3 rounded-xl text-center text-sm font-medium shadow-inner flex flex-col items-center gap-1"
                >
                  <Icon className="w-5 h-5 mb-1" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Package Pricing */}
        <div>
          <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-amber-100 p-8 h-full">
            <div className="flex items-center mb-6">
              <Crown className="w-6 h-6 text-amber-500 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">Packages</h3>
            </div>
            <div className="space-y-6">
  {[
    { pax: '100 Pax' },
    { pax: '50 Pax' }
  ].map((item, idx) => (
    <div
      key={idx}
      className="bg-amber-100/40 border border-amber-200 px-6 py-5 rounded-xl shadow-sm text-center"
    >
      <h4 className="text-xl font-bold text-amber-700 drop-shadow-sm">
        {item.pax}
      </h4>
    </div>
  ))}
</div>

            <div className="mt-6 text-center text-sm italic text-gray-500">
              Download the app to see the prices.
            </div>
          </div>
        </div>
      </div>

      {/* Package Inclusions */}
      <div className="mb-16">
        <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200 p-8">
          <div className="flex items-center mb-6">
            <Crown className="w-6 h-6 text-green-500 mr-2" />
            <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">
              Complete Inclusions
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Elegant theme backdrop with artificial flowers',
              'Couch and red carpet or green carpet',
              'Arch entrance with artificial leaves and flowers',
              'Cake and gift tables with skirting',
              'Presidential tables with tiffany chairs',
              'Round tables with white linen and array color topper',
              'Artificial flowers with vase & table numbers',
              'Tiffany chairs with array color ribbons',
              'Buffet long table with skirting & centerpiece',
              'Ceramic plates (IKEA), highball glasses, goblets, sterilized spoons & forks (IKEA)',
              'Uniformed waiters and food server',
              'Purified tube ice and mineral water'
            ].map((inclusion, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-white via-gray-50 to-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{inclusion}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="text-center">
        <div className="inline-block px-6 py-4 bg-amber-100 text-amber-900 border-l-4 border-amber-500 rounded-md shadow-sm text-sm font-medium italic">
          ⏳ Note: 4 to 5 hours limit time. Beginning program included.
        </div>
      </div>
    </div>
  </section>
)}

      {themeId === 'debutant-roses' && (
  <section className="py-24 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 bg-center bg-cover pointer-events-none"></div>

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-6 tracking-tight">
        {theme.title} Inclusions & Packages
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-16 text-lg">
        A carefully curated setup that brings beauty, warmth, and sophistication to your special day.
      </p>

      {/* Food Menu + Pricing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Food Menu */}
        <div>
          <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-amber-100 p-8 h-full">
            <div className="flex items-center mb-6">
              <Utensils className="w-6 h-6 text-amber-500 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">Food Menu</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
              {Object.entries(foodIcons2).map(([label, Icon], index) => (
                <div
                  key={index}
                  className="bg-amber-100/30 border border-amber-200 text-amber-900 px-4 py-3 rounded-xl text-center text-sm font-medium shadow-inner flex flex-col items-center gap-1"
                >
                  <Icon className="w-5 h-5 mb-1" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Package Pricing */}
        <div>
          <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-amber-100 p-8 h-full">
            <div className="flex items-center mb-6">
              <Crown className="w-6 h-6 text-amber-500 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">Packages</h3>
            </div>
            <div className="space-y-6">
  {[
    { pax: '100 Pax' },
    { pax: '50 Pax' }
  ].map((item, idx) => (
    <div
      key={idx}
      className="bg-amber-100/40 border border-amber-200 px-6 py-5 rounded-xl shadow-sm text-center"
    >
      <h4 className="text-xl font-bold text-amber-700 drop-shadow-sm">
        {item.pax}
      </h4>
    </div>
  ))}
</div>

            <div className="mt-6 text-center text-sm italic text-gray-500">
              Download the app to see the prices.
            </div>
          </div>
        </div>
      </div>

      {/* Package Inclusions */}
      <div className="mb-16">
        <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200 p-8">
          <div className="flex items-center mb-6">
            <Crown className="w-6 h-6 text-green-500 mr-2" />
            <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">
              Complete Inclusions
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Elegant theme backdrop with artificial flowers',
              'Couch and red carpet,candle holder with candle',
              'Arch entrance with artificial leaves and flowers',
              'Cake and gift tables with skirting',
              'Presidential tables with tiffany chairs',
              'Round tables with white linen and array color topper',
              'Artificial flowers with vase & table numbers',
              'Monoblock chairs with cover & array color ribbons',
              'Buffet long table with skirting & centerpiece',
              'Ceramic plates (IKEA), highball glasses, goblets, sterilized spoons & forks (IKEA)',
              'Uniformed waiters and food server',
              'Purified tube ice and mineral water'
            ].map((inclusion, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-white via-gray-50 to-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{inclusion}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="text-center">
        <div className="inline-block px-6 py-4 bg-amber-100 text-amber-900 border-l-4 border-amber-500 rounded-md shadow-sm text-sm font-medium italic">
          ⏳ Note: 4 to 5 hours limit time. Excess hours will be charged.
        </div>
      </div>
    </div>
  </section>
)}

      {themeId === 'debutant-treasures' && (
  <section className="py-24 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 bg-center bg-cover pointer-events-none"></div>

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-6 tracking-tight">
        {theme.title} Inclusions & Packages
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-16 text-lg">
        A carefully curated setup that brings beauty, warmth, and sophistication to your special day.
      </p>

      {/* Food Menu + Pricing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Food Menu */}
        <div>
          <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-amber-100 p-8 h-full">
            <div className="flex items-center mb-6">
              <Utensils className="w-6 h-6 text-amber-500 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">Food Menu</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
              {Object.entries(foodIcons1).map(([label, Icon], index) => (
                <div
                  key={index}
                  className="bg-amber-100/30 border border-amber-200 text-amber-900 px-4 py-3 rounded-xl text-center text-sm font-medium shadow-inner flex flex-col items-center gap-1"
                >
                  <Icon className="w-5 h-5 mb-1" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Package Pricing */}
        <div>
          <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-amber-100 p-8 h-full">
            <div className="flex items-center mb-6">
              <Crown className="w-6 h-6 text-amber-500 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">Packages</h3>
            </div>
            <div className="space-y-6">
  {[
    { pax: '100 Pax' },
    { pax: '50 Pax' }
  ].map((item, idx) => (
    <div
      key={idx}
      className="bg-amber-100/40 border border-amber-200 px-6 py-5 rounded-xl shadow-sm text-center"
    >
      <h4 className="text-xl font-bold text-amber-700 drop-shadow-sm">
        {item.pax}
      </h4>
    </div>
  ))}
</div>

            <div className="mt-6 text-center text-sm italic text-gray-500">
              Download the app to see the prices.
            </div>
          </div>
        </div>
      </div>

      {/* Package Inclusions */}
      <div className="mb-16">
        <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200 p-8">
          <div className="flex items-center mb-6">
            <Crown className="w-6 h-6 text-green-500 mr-2" />
            <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">
              Complete Inclusions
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Elegant theme backdrop with artificial flowers',
              'Couch and red carpet,candle holder with candle',
              'Arch entrance with artificial leaves and flowers',
              'Cake and gift tables with skirting',
              'Presidential tables with tiffany chairs',
              'Round tables with white linen and array color topper',
              'Artificial flowers with vase & table numbers',
              'Monoblock chairs with cover & array color ribbons',
              'Buffet long table with skirting & centerpiece',
              'Ceramic plates (IKEA), highball glasses, goblets, sterilized spoons & forks (IKEA)',
              'Uniformed waiters and food server',
              'Purified tube ice and mineral water'
            ].map((inclusion, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-white via-gray-50 to-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{inclusion}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="text-center">
        <div className="inline-block px-6 py-4 bg-amber-100 text-amber-900 border-l-4 border-amber-500 rounded-md shadow-sm text-sm font-medium italic">
          ⏳ Note: 4 to 5 hours limit time. Excess hours will be charged.
        </div>
      </div>
    </div>
  </section>
)}

      {themeId === 'birthday-baptismal-adventure' && (
  <section className="py-24 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 bg-center bg-cover pointer-events-none"></div>

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-6 tracking-tight">
        {theme.title} Inclusions & Packages
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-16 text-lg">
        A carefully curated setup that brings beauty, warmth, and sophistication to your special day.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Food Menu */}
        <div>
          <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-amber-100 p-8 h-full">
            <div className="flex items-center mb-6">
              <Utensils className="w-6 h-6 text-amber-500 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">Food Menu</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
              {Object.entries(foodIcons2).map(([label, Icon], index) => (
                <div
                  key={index}
                  className="bg-amber-100/30 border border-amber-200 text-amber-900 px-4 py-3 rounded-xl text-center text-sm font-medium shadow-inner flex flex-col items-center gap-1"
                >
                  <Icon className="w-5 h-5 mb-1" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Package Pricing */}
        <div>
          <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-amber-100 p-8 h-full">
            <div className="flex items-center mb-6">
              <Crown className="w-6 h-6 text-amber-500 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">Packages</h3>
            </div>
            <div className="space-y-6">
  {[
    { pax: '100 Pax' },
    { pax: '50 Pax' }
  ].map((item, idx) => (
    <div
      key={idx}
      className="bg-amber-100/40 border border-amber-200 px-6 py-5 rounded-xl shadow-sm text-center"
    >
      <h4 className="text-xl font-bold text-amber-700 drop-shadow-sm">
        {item.pax}
      </h4>
    </div>
  ))}
</div>

            <div className="mt-6 text-center text-sm italic text-gray-500">
              Download the app to see the prices.
            </div>
          </div>
        </div>
      </div>

      {/* Package Inclusions */}
      <div className="mb-16">
        <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200 p-8">
          <div className="flex items-center mb-6">
            <Crown className="w-6 h-6 text-green-500 mr-2" />
            <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">
              Complete Inclusions
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Basic backdrop of your choice theme with couch',
              'Balloons backdrop, balloons entrance arch',
              'Cake and gift tables with skirting',
              'Balloons table centerpiece',
              'Round tables with white linen and array color topper',
              'Monoblock chairs with cover & array color ribbons',
              'Buffet long table with skirting & centerpiece',
              'Ceramic plates, highball glasses, goblets, sterilized spoons & forks',
              'Uniformed waiters and food server',
              'Purified tube ice and mineral water'
            ].map((inclusion, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-white via-gray-50 to-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{inclusion}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="text-center">
        <div className="inline-block px-6 py-4 bg-amber-100 text-amber-900 border-l-4 border-amber-500 rounded-md shadow-sm text-sm font-medium italic">
          ⏳ Note: 4 to 5 hours limit time. Excess hours will be charged.
        </div>
      </div>
    </div>
  </section>
)}

      {themeId === 'birthday-baptismal-fantasy' && (
  <section className="py-24 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 bg-center bg-cover pointer-events-none"></div>

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-6 tracking-tight">
        {theme.title} Inclusions & Packages
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-16 text-lg">
        A carefully curated setup that brings beauty, warmth, and sophistication to your special day.
      </p>

      {/* Food Menu + Pricing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Food Menu */}
        <div>
          <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-amber-100 p-8 h-full">
            <div className="flex items-center mb-6">
              <Utensils className="w-6 h-6 text-amber-500 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">Food Menu</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
              {Object.entries(foodIcons1).map(([label, Icon], index) => (
                <div
                  key={index}
                  className="bg-amber-100/30 border border-amber-200 text-amber-900 px-4 py-3 rounded-xl text-center text-sm font-medium shadow-inner flex flex-col items-center gap-1"
                >
                  <Icon className="w-5 h-5 mb-1" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Package Pricing */}
        <div>
          <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-amber-100 p-8 h-full">
            <div className="flex items-center mb-6">
              <Crown className="w-6 h-6 text-amber-500 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">Packages</h3>
            </div>
            <div className="space-y-6">
  {[
    { pax: '100 Pax' },
    { pax: '50 Pax' }
  ].map((item, idx) => (
    <div
      key={idx}
      className="bg-amber-100/40 border border-amber-200 px-6 py-5 rounded-xl shadow-sm text-center"
    >
      <h4 className="text-xl font-bold text-amber-700 drop-shadow-sm">
        {item.pax}
      </h4>
    </div>
  ))}
</div>

            <div className="mt-6 text-center text-sm italic text-gray-500">
              Download the app to see the prices.
            </div>
          </div>
        </div>
      </div>

      {/* Package Inclusions */}
      <div className="mb-16">
        <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200 p-8">
          <div className="flex items-center mb-6">
            <Crown className="w-6 h-6 text-green-500 mr-2" />
            <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">
              Complete Inclusions
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Basic backdrop of your choice theme with couch',
              'Balloons backdrop, balloons entrance arch',
              'Cake and gift tables with skirting',
              'Balloons table centerpiece',
              'Round tables with white linen and array color topper',
              'Monoblock chairs with cover & array color ribbons',
              'Buffet long table with skirting & centerpiece',
              'Ceramic plates , highball glasses, goblets, sterilized spoons & forks ',
              'Uniformed waiters and food server',
              'Purified tube ice and mineral water'
            ].map((inclusion, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-white via-gray-50 to-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{inclusion}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="text-center">
        <div className="inline-block px-6 py-4 bg-amber-100 text-amber-900 border-l-4 border-amber-500 rounded-md shadow-sm text-sm font-medium italic">
          ⏳ Note: 4 to 5 hours limit time. Excess hours will be charged.
        </div>
      </div>
    </div>
  </section>
)}

      {/* Download App CTA */}
      <div className="py-16 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Book Your {theme.title} Celebration?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Download our app to make reservations and book your {theme.title.toLowerCase()} package easily.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download Our App
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeDetail;
