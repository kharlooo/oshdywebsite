import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Coffee, Apple, Candy, CheckCircle } from 'lucide-react';
import ImageWithSkeleton from './ui/image-with-skeleton';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const GrazingTableDetail = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const androidUrl = import.meta.env.VITE_ANDROID_DOWNLOAD_URL || 'https://www.upload-apk.com/en/Hht9ZHTFFwUi7A8';




  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packageData = {
    'delicacies': {
      title: 'Assorted Delicacies / Kakanin',
      icon: <Coffee className="w-12 h-12 text-amber-600" />,
      bgGradient: 'from-amber-100 to-orange-100',
      description: 'Traditional Filipino delicacies and sweet treats that bring the authentic taste of local kakanin to your event.',
      pricing: [
        { pax: 200 },
        { pax:  100}
      ],
      includes: [
        'Sapin-Sapin',
        'Bibingka',
        'Cassava Cake',
        'Puto',
        'Kutsinta',
        'Suman',
        'Pitchie Pitchie',
        'Biko',
        'Brewed Coffee',
        'Ice Tea or Cucumber Lemonade'
      ]
    },
    'mixed-deli': {
      title: 'Assorted Mixed Deli, Fruits, Bread & Biscuits',
      icon: <Apple className="w-12 h-12 text-green-600" />,
      bgGradient: 'from-green-100 to-emerald-100',
      description: 'Premium selection of fresh fruits, quality deli items, and baked goods for a sophisticated grazing experience.',
      pricing: [
        { pax: 200, price: '15,000' },
        { pax: 100, price: '10,000' }
      ],
      includes: [
        'Sliced Fruits: Oranges, Grapes, Pineapple, Melons, Watermelons',
        'Premium Cold Cuts: Sweet Ham, Hotdogs, Hungarian Sausage, Pepperoni',
        'Slice Cheese',
        'Breads: Garlic Bread Toast, Minnie Burgers, Clubhouse Sandwich Slice',
        'Assorted Biscuits',
        'Mango Jelly Floats / Buco Pandan',
        'Pandesal & Butter',
        'Brewed Coffee',
        'Ice Tea or Cucumber Lemonade'
      ]
    },
    'candy-corner': {
      title: 'Sweet / Candy Corner',
      icon: <Candy className="w-12 h-12 text-pink-600" />,
      bgGradient: 'from-pink-100 to-purple-100',
      description: 'A delightful sweets and candy station that brings joy to guests of all ages with an amazing variety of treats.',
      pricing: [
        { pax: 200, price: '8,000' },
        { pax: 100, price: '5,000' }
      ],
      includes: [
        'Assorted Dowey Donut Wall',
        'Minnie Donuts',
        'Chocolate Fountain',
        'Marshmallows',
        'Bread Stick',
        'Stick O',
        'Assorted Choco Knots',
        'Pretzels',
        'Wafers',
        'Brownies',
        'Lollipops',
        'Assorted Gummy Bears',
        'Gelatins'
      ]
    }
  };

  const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

  const currentPackage = packageData[packageId as keyof typeof packageData];

  if (!currentPackage) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Package Not Found</h1>
          <Link to="/" className="text-amber-600 hover:text-amber-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Floating Back Button */}
      <motion.button
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => {
          // Check if it's a touch device (mobile)
          if ('ontouchstart' in window) {
            setTimeout(() => {
              navigate(-1);
            }, 150);
          } else {
            // Regular behavior for non-touch devices
            navigate(-1);
          }
        }}
        className="fixed top-24 left-4 z-30 border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white p-3 rounded-full shadow-md transition duration-300"
        aria-label="Go Back"
      >
        <ArrowLeft className="w-5 h-5" />
      </motion.button>

      {/* Header */}
      <div className={`bg-gradient-to-br ${currentPackage.bgGradient} py-20 relative overflow-hidden`}>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12">
      
      {/* Image on the left with animation */}
<motion.div
  className="w-full lg:w-1/2"
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.5 }}
>
  <ImageWithSkeleton
    src={`/${packageId}.jpg`}
    alt={currentPackage.title}
    imgClass="w-full rounded-2xl shadow-lg border border-gray-200 object-cover h-80"
  />
</motion.div>

{/* Info on the right with animation */}
<motion.div
  className="w-full lg:w-1/2 text-center lg:text-left"
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.5, delay: 0.15 }}
>
  <div className="flex items-center justify-center lg:justify-start mb-6">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight elegant-font">
      {currentPackage.title}
    </h1>
  </div>
  <p className="text-xl text-gray-700 leading-relaxed">
    {currentPackage.description}
  </p>
</motion.div>

    </div>
  </div>
</div>
      {/* Package Details */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pricing */}
            <Card className="shadow-xl border-2 border-amber-200">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                <CardTitle className="text-2xl font-bold text-gray-900 text-center elegant-font">
                  Packages
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {currentPackage.pricing.map((price, index) => (
  <div key={index} className="bg-white p-6 rounded-xl border-2 border-amber-100 shadow-md">
    <div className="flex flex-col items-center text-center">
      <h3 className="text-xl font-bold text-gray-800">{price.pax} Pax</h3>
      <p className="text-gray-600">
        {price.pax === 100
          ? 'Ideal for large gatherings or grand celebrations'
          : 'Perfect for cozy events and intimate groups'}
      </p>
    </div>
  </div>
))}
                </div>
                <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-amber-800 text-sm font-medium text-center">
                    All packages include setup, service, and cleanup
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Inclusions */}
            <Card className="shadow-xl border-2 border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-2xl font-bold text-gray-900 text-center elegant-font">
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {currentPackage.includes.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA */}
<div className="py-16 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 elegant-font">
        Ready to Book This Package?
      </h3>
      <p className="text-gray-600 mb-6">
        Contact us today to reserve your grazing table and make your event unforgettable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => window.open(androidUrl, '_blank')}
          className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
        >
          Download App Now
        </button>
        <button
          onClick={() => {
            // Check if it's a touch device (mobile)
            if ('ontouchstart' in window) {
              setTimeout(() => {
                navigate("/menu");
              }, 200);
            } else {
              // Regular behavior for non-touch devices
              navigate("/menu");
            }
          }}
          className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold border-2 border-amber-600 hover:bg-amber-50 transition-colors duration-200"
        >
          View Menu Options
        </button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default GrazingTableDetail;