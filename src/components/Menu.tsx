import {
  ArrowLeft,
  Utensils,
  ChefHat,
  Beef,
  Fish,
  Salad,
  Coffee,
  IceCream
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Menu = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menuCategories = [
  {
    title: 'Beef (Pick One)',
    icon: <Beef className="w-8 h-8 text-red-600" />,
    image: '/images/beef.jpg',
    bgColor: 'bg-red-50',
    items: [
      'Beef Caldereta',
      'Beef Mechado',
      'Beef Brocolli',
      'Beef with Mushroom Sauce',
      'Beef Stir Fry',
    ],
  },
  {
    title: 'Pork (Pick One)',
    icon: <ChefHat className="w-8 h-8 text-pink-600" />,
    image: '/images/pork.jpg',
    bgColor: 'bg-pink-50',
    items: [
      'Pork Honey Glaze',
      'Pork Mechado',
      'Pork Caldereta',
      'Pork Hamonado',
      'Pork in BBQ Sauce',
    ],
  },
  {
    title: 'Chicken (Pick One)',
    icon: <Utensils className="w-8 h-8 text-yellow-600" />,
    image: '/images/chicken.jpg',
    bgColor: 'bg-yellow-50',
    items: [
      'Chicken Ala King',
      'Chicken Cordon Bleu',
      'Chicken Terriyaki',
      'Chicken Machurian',
      'Chicken Pineapple',
      'Chicken Buttered',
    ],
  },
  {
    title: 'Fish Fillet (Pick One)',
    icon: <Fish className="w-8 h-8 text-blue-600" />,
    image: '/images/fish.jpg',
    bgColor: 'bg-blue-50',
    items: [
      'Fish Fillet Tartar Sauce',
      'Fish Fillet in Mushroom Sauce',
      'Fish Fillet in Sweet and Sour Sauce',
    ],
  },
  {
    title: 'Mixed Vegie (Pick One)',
    icon: <Salad className="w-8 h-8 text-green-600" />,
    image: '/images/vegie.jpg',
    bgColor: 'bg-green-50',
    items: [
      'Buttered Mixed Vegie',
      'Mixed Vegie with Quail Egg',
      'Mixed Vegie Fresh Salad',
      'Steamed Mixed Vegie',
    ],
  },
  {
    title: 'Pasta or Noodles (Pick One)',
    icon: <ChefHat className="w-8 h-8 text-orange-600" />,
    image: '/images/pasta.jpg',
    bgColor: 'bg-orange-50',
    items: [
      'Creamy Carbonara',
      'Tuna Creamy Carbonara',
      'Cheesy Macaroni',
      'Italian Spaghetti',
      'Sweet Spaghetti',
      'Bihon Guisado',
      'Sotanghon Guisado',
    ],
  },
  {
    title: 'Drinks (Pick One)',
    icon: <Coffee className="w-8 h-8 text-teal-600" />,
    image: '/images/drinks.jpg',
    bgColor: 'bg-teal-50',
    items: [
      'Ice Tea Lemonade',
      'Red Tea',
      'Cucumber Lemonade',
      'Blue Lemonade',
    ],
  },
  {
    title: 'Dessert (Pick One)',
    icon: <IceCream className="w-8 h-8 text-purple-600" />,
    image: '/images/dessert.jpg',
    bgColor: 'bg-purple-50',
    items: [
      'Buco Pandan',
      'Coffee Jelly',
      'Mango Jelly Float',
    ],
  },
];

  return (
    <div className="min-h-screen pt-16">
      {/* Back Button */}
      <button
        onClick={() => {
          navigate(-1);
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 50);
        }}
        className="fixed top-20 left-4 z-30 border border-amber-500 text-amber-600 hover:bg-amber-600 hover:text-white p-3 rounded-full shadow transition duration-300"
        aria-label="Go Back"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* Header */}
      <header className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20 text-center relative">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-4">
              <Utensils className="w-8 h-8 text-amber-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Menu Selection</h1>
            <p className="text-gray-600 text-lg mt-4 max-w-xl mx-auto">
              Choose one item from each category below to build your custom meal experience.
            </p>
          </div>
          <div className="inline-block bg-amber-100 text-amber-800 font-semibold px-6 py-2 rounded-full text-sm shadow-sm">
            8 Categories • Fresh Daily • Made to Order
          </div>
        </div>
      </header>

      {/* Category Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuCategories.map((category, index) => (
  <Card
    key={index}
    className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
  >
    {/* Image */}
    <div
      className="h-36 w-full bg-cover bg-center rounded-t-xl"
      style={{ backgroundImage: `url(${category.image})` }}
    />

    {/* Content */}
    <CardContent className="p-6 bg-white space-y-4">
      {/* Title with Icon */}
      <div className="flex items-center gap-3 text-lg font-semibold text-gray-900">
  <div className="bg-white p-2 rounded-full shadow-md">{category.icon}</div>
  <span>{category.title}</span>
</div>

      {/* Items List */}
      <ul className="space-y-3">
        {category.items.map((item, itemIndex) => (
          <li
            key={itemIndex}
            className="flex items-center group-hover:translate-x-1 transition-transform duration-200"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mr-3 flex-shrink-0"></span>
            <span className="text-gray-700 text-sm font-medium leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
))}
        </div>
      </section>

      {/* Footer Quote */}
      <footer className="py-16 bg-gray-50 text-center">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100">
            <ChefHat className="w-10 h-10 text-amber-500 mx-auto mb-4" />
            <p className="text-gray-800 text-lg font-semibold mb-2">
              Crafted with Love & Expertise
            </p>
            <p className="text-gray-600 text-sm">
              Every item is thoughtfully prepared to provide the best catering experience for your special event.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
