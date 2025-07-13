
import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Utensils,
  ChefHat,
  Beef,
  Fish,
  Salad,
  Coffee,
  IceCream,
  X,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Dialog, DialogContent } from './ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const Menu = () => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const openGallery = (categoryTitle: string) => {
    const images = galleryImages[categoryTitle] || [];
    setSelectedImages(images);
    setSelectedCategory(categoryTitle);
    setModalOpen(true);
  };

  const closeGallery = () => {
    setModalOpen(false);
    setSelectedImages([]);
    setSelectedCategory('');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menuCategories = [
    {
      title: 'Beef (Pick One)',
      icon: <Beef className="w-8 h-8 text-red-600" />,
      image: 'caldereta.jpg',
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
      items: ['Buco Pandan', 'Coffee Jelly', 'Mango Jelly Float'],
    },
  ];

  const galleryImages: Record<string, string[]> = {
    'Beef (Pick One)': [
      'caldereta.jpg',
      'mechado.jpg',
      '/images/beef/3.jpg',
      '/images/beef/4.jpg',
      '/images/beef/5.jpg',
    ],
    'Pork (Pick One)': [
      '/images/pork/1.jpg',
      '/images/pork/2.jpg',
      '/images/pork/3.jpg',
      '/images/pork/4.jpg',
      '/images/pork/5.jpg',
    ],
    'Chicken (Pick One)': [
      '/images/chicken/1.jpg',
      '/images/chicken/2.jpg',
      '/images/chicken/3.jpg',
      '/images/chicken/4.jpg',
      '/images/chicken/5.jpg',
      '/images/chicken/6.jpg',
    ],
    'Fish Fillet (Pick One)': ['/images/fish/1.jpg', '/images/fish/2.jpg', '/images/fish/3.jpg'],
    'Mixed Vegie (Pick One)': ['/images/vegie/1.jpg', '/images/vegie/2.jpg', '/images/vegie/3.jpg', '/images/vegie/4.jpg', ],
    'Pasta or Noodles (Pick One)': ['/images/pasta/1.jpg', '/images/pasta/2.jpg', '/images/pasta/3.jpg', '/images/pasta/4.jpg', '/images/pasta/5.jpg', '/images/pasta/6.jpg', '/images/pasta/7.jpg'],
    'Drinks (Pick One)': ['/images/drinks/1.jpg', '/images/drinks/2.jpg', '/images/drinks/3.jpg', '/images/drinks/4.jpg'],
    'Dessert (Pick One)': ['/images/dessert/1.jpg', '/images/dessert/2.jpg', '/images/dessert/3.jpg'],
  };

  const getImageLabel = (categoryTitle: string, imageIndex: number) => {
    const category = menuCategories.find(cat => cat.title === categoryTitle);
    if (category && category.items[imageIndex]) {
      return category.items[imageIndex];
    }
    return `${categoryTitle.replace(' (Pick One)', '')} Dish ${imageIndex + 1}`;
  };

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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Menu Selection
            </h1>
            <p className="text-gray-600 text-lg mt-4 max-w-xl mx-auto">
              Choose one item from each category below to build your custom meal
              experience.
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
              className="border border-gray-200 shadow-md group cursor-pointer"
              onClick={() => openGallery(category.title)}
            >
              <div className="relative h-36 w-full overflow-hidden rounded-t-xl">
  <img
    src={category.image}
    alt={category.title}
    className="absolute inset-0 w-full h-full object-cover group-hover:blur-sm transition-all duration-300"
  />

  {/* Icon in bottom-left */}
  <div className="absolute bottom-2 left-2 z-10 bg-white rounded-full p-2 shadow-md">
    {category.icon}
  </div>

  {/* Hover overlay */}
  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <span className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full font-semibold">
      View More
    </span>
  </div>
</div>
              <CardContent className="p-6 bg-white space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 text-center">{category.title}</h3>
                <ul className="space-y-2">
  {category.items.map((item, i) => (
    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
      <span className="w-2 h-2 rounded-full bg-amber-500 inline-flex self-center" />
      <span>{item}</span>
    </li>
  ))}
</ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Modal Gallery */}
      {modalOpen && (
        <Dialog open={modalOpen} onOpenChange={closeGallery}>
          <DialogContent className="max-w-6xl w-full p-0 bg-transparent border-none overflow-hidden">

            <Carousel className="w-full">
              <CarouselContent>
                {selectedImages.map((img, i) => (
                  <CarouselItem key={i}>
                    <div className="relative w-full h-[80vh] flex items-center justify-center p-4">
                      <img
                        src={img}
                        alt={getImageLabel(selectedCategory, i)}
                        className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
                      />
                      
                      {/* Image Label */}
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 text-gray-900 px-6 py-3 rounded-full shadow-lg">
                        <div className="text-center">
                          <p className="font-medium text-sm">
                            {getImageLabel(selectedCategory, i)}
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            {i + 1} of {selectedImages.length}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="left-4 z-40 bg-white/90 hover:bg-white text-gray-700 border-gray-200 shadow-lg" />
              <CarouselNext className="right-4 z-40 bg-white/90 hover:bg-white text-gray-700 border-gray-200 shadow-lg" />
            </Carousel>
          </DialogContent>
        </Dialog>
      )}

      {/* Footer */}
      <footer className="py-16 bg-gray-50 text-center">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100">
            <ChefHat className="w-10 h-10 text-amber-500 mx-auto mb-4" />
            <p className="text-gray-800 text-lg font-semibold mb-2">
              Crafted with Love & Expertise
            </p>
            <p className="text-gray-600 text-sm">
              Every item is thoughtfully prepared to provide the best catering
              experience for your special event.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
