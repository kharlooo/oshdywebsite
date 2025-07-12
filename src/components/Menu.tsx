
import { ArrowLeft, Utensils, ChefHat, Beef, Fish, Salad, Coffee, IceCream } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const navigate = useNavigate();
  const menuCategories = [
    {
      title: 'Beef (Pick One)',
      icon: <Beef className="w-8 h-8 text-red-600" />,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      items: [
        'Beef Caldereta',
        'Beef Mechado',
        'Beef Brocolli',
        'Beef with Mushroom Sauce',
        'Beef Stir Fry'
      ]
    },
    {
      title: 'Pork (Pick One)',
      icon: <ChefHat className="w-8 h-8 text-pink-600" />,
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      items: [
        'Pork Honey Glaze',
        'Pork Mechado',
        'Pork Caldereta',
        'Pork Hamonado',
        'Pork in BBQ Sauce'
      ]
    },
    {
      title: 'Chicken (Pick One)',
      icon: <Utensils className="w-8 h-8 text-yellow-600" />,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      items: [
        'Chicken Ala King',
        'Chicken Cordon Bleu',
        'Chicken Terriyaki',
        'Chicken Machurian',
        'Chicken Pineapple',
        'Chicken Buttered'
      ]
    },
    {
      title: 'Fish Fillet (Pick One)',
      icon: <Fish className="w-8 h-8 text-blue-600" />,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      items: [
        'Fish Fillet Tartar Sauce',
        'Fish Fillet in Mushroom Sauce',
        'Fish Fillet in Sweet and Sour Sauce'
      ]
    },
    {
      title: 'Mixed Vegie (Pick One)',
      icon: <Salad className="w-8 h-8 text-green-600" />,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      items: [
        'Buttered Mixed Vegie',
        'Mixed Vegie with Quail Egg',
        'Mixed Vegie Fresh Salad',
        'Steamed Mixed Vegie'
      ]
    },
    {
      title: 'Pasta or Noodles (Pick One)',
      icon: <ChefHat className="w-8 h-8 text-orange-600" />,
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      items: [
        'Creamy Carbonara',
        'Tuna Creamy Carbonara',
        'Cheesy Macaroni',
        'Italian Spaghetti',
        'Sweet Spaghetti',
        'Bihon Guisado',
        'Sotanghon Guisado'
      ]
    },
    {
      title: 'Drinks (Pick One)',
      icon: <Coffee className="w-8 h-8 text-teal-600" />,
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      items: [
        'Ice Tea Lemonade',
        'Red Tea',
        'Cucumber Lemonade',
        'Blue Lemonade'
      ]
    },
    {
      title: 'Dessert (Pick One)',
      icon: <IceCream className="w-8 h-8 text-purple-600" />,
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      items: [
        'Buco Pandan',
        'Coffee Jelly',
        'Mango Jelly Float'
      ]
    }
  ];

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

      {/* Header */}
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white p-4 rounded-full shadow-lg mr-6">
              <Utensils className="w-12 h-12 text-amber-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Menu Pick One
            </h1>
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Choose one delicious item from each category to create your perfect meal experience
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-amber-100 px-6 py-3 rounded-full">
              <p className="text-amber-800 font-semibold">8 Categories • Fresh Daily • Made to Order</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {menuCategories.map((category, index) => (
              <Card key={index} className={`${category.borderColor} border-2 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group`}>
                <CardHeader className={`${category.bgColor} relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-20 rounded-full -mr-10 -mt-10"></div>
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-white p-3 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 bg-white">
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center group-hover:translate-x-1 transition-transform duration-200">
                        <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm font-medium leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200">
            <ChefHat className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <p className="text-gray-700 text-lg font-medium mb-2">
              Crafted with Love & Expertise
            </p>
            <p className="text-gray-600">
              All menu items are freshly prepared with high-quality ingredients to ensure the best dining experience for your event.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
