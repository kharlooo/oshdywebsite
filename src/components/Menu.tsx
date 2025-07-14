
import { motion } from 'framer-motion';
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

  const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

  const menuCategories = [
    {
      title: 'Beef (Pick One)',
      icon: <Beef className="w-8 h-8 text-red-600" />,
      image: '/menu/beef/beefcaldereta.jpg',
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
      image: '/menu/pork/porkhoneyglaze.jpg',
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
      image: '/menu/chicken/chickenalaking.jpg',
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
      image: '/menu/fish fillet/fishfillettartarsauce.jpg',
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
      image: '/menu/mixed vegie/butteredmixedvegie.jpg',
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
      image: '/menu/pasta or noodles/creamycarbonara.jpg',
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
      image: '/menu/drinks/icetealemonade.jpg',
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
      image: '/menu/dessert/bucopandan.jpg',
      bgColor: 'bg-purple-50',
      items: ['Buco Pandan', 'Coffee Jelly', 'Mango Jelly Float'],
    },
  ];

  const galleryImages: Record<string, string[]> = {
    'Beef (Pick One)': [
      '/menu/beef/beefcaldereta.jpg',
      '/menu/beef/beefmechado.jpg',
      '/menu/beef/beefbrocolli.jpg',
      '/menu/beef/beefwithmushroomsauce.jpg',
      '/menu/beef/beefstirfry.jpg',
    ],
    'Pork (Pick One)': [
      '/menu/pork/porkhoneyglaze.jpg',
      '/menu/pork/porkmechado.jpg',
      '/menu/pork/porkcaldereta.jpg',
      '/menu/pork/porkhamonado.jpg',
      '/menu/pork/porkinbbqsauce.jpg',
    ],
    'Chicken (Pick One)': [
      '/menu/chicken/chickenalaking.jpg',
      '/menu/chicken/chickencordonbleu.jpg',
      '/menu/chicken/chickenterriyaki.jpg',
      '/menu/chicken/chickenmachurian.jpg',
      '/menu/chicken/chickenpineapple.jpg',
      '/menu/chicken/chickenbuttered.jpg',
    ],
    'Fish Fillet (Pick One)': [
      '/menu/fish fillet/fishfillettartarsauce.jpg',
      '/menu/fish fillet/fishfilletinmushroomsauce.jpg',
      '/menu/fish fillet/fishfilletinsweetandsoursauce.jpg',
    ],
    'Mixed Vegie (Pick One)': [
      '/menu/mixed vegie/butteredmixedvegie.jpg',
      '/menu/mixed vegie/mixedvegiewithquailegg.jpg',
      '/menu/mixed vegie/mixedvegiefreshsalad.jpg',
      '/menu/mixed vegie/steamedmixedvegie.jpg',
    ],
    'Pasta or Noodles (Pick One)': [
      '/menu/pasta or noodles/creamycarbonara.jpg',
      '/menu/pasta or noodles/tunacreamycarbonara.jpg',
      '/menu/pasta or noodles/cheesymacaroni.jpg',
      '/menu/pasta or noodles/italianspaghetti.jpg',
      '/menu/pasta or noodles/sweetspaghetti.jpg',
      '/menu/pasta or noodles/bihonguisado.jpg',
      '/menu/pasta or noodles/sotanghonguisado.jpg',
    ],
    'Drinks (Pick One)': [
      '/menu/drinks/icetealemonade.jpg',
      '/menu/drinks/redtea.jpg',
      '/menu/drinks/cucumberlemonade.jpg',
      '/menu/drinks/bluelemonade.jpg',
    ],
    'Dessert (Pick One)': [
      '/menu/dessert/bucopandan.jpg',
      '/menu/dessert/coffeejelly.jpg',
      '/menu/dessert/mangojellyfloat.jpg',
    ],
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
          <motion.div
  className="inline-block bg-amber-100 text-amber-800 font-semibold px-6 py-2 rounded-full text-sm shadow-sm"
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.4 }}
>
  8 Categories • Fresh Daily • Made to Order
</motion.div>
        </div>
      </header>

      {/* Category Grid */}
      <motion.section
  className="py-20 bg-white"
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.4 }}
>        
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
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
      </motion.section>

      {/* Modal Gallery */}
      {modalOpen && (
        <Dialog open={modalOpen} onOpenChange={closeGallery}>
          <DialogContent
  className="custom-gallery-modal max-w-6xl w-full p-0 bg-transparent border-none overflow-hidden rounded-xl
    sm:p-0 sm:rounded-2xl md:p-0 md:rounded-2xl flex items-center justify-center
    max-sm:max-w-full max-sm:w-[95vw] max-sm:p-2 max-sm:rounded-xl max-sm:justify-start max-sm:mt-0"
  style={{ maxWidth: '95vw' }}
>
  {/* Custom Close Button */}
  <button
    onClick={closeGallery}
    className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-white text-gray-700 border border-gray-200 shadow-lg rounded-full p-2 transition-colors duration-200"
    aria-label="Close"
    type="button"
    style={{ lineHeight: 0 }}
  >
    <X className="w-3 h-3" />
  </button>
  <Carousel className="w-full">
    <CarouselContent>
      {selectedImages.map((img, i) => (
        <CarouselItem key={i}>
          <div
            className="relative w-full h-[60vh] flex items-center justify-center p-2 sm:h-[80vh] sm:p-4 rounded-xl"
          >
            <img
              src={img}
              alt={getImageLabel(selectedCategory, i)}
              className="max-h-[50vh] max-w-full object-contain rounded-lg shadow-lg sm:max-h-full sm:rounded-lg"
            />
            {/* Image Label */}
            <div
  className="absolute bottom-5 sm:bottom-8 left-1/2 transform -translate-x-1/2 
             bg-white/80 text-gray-900 
             px-4 py-2 
             rounded-full shadow-xl backdrop-blur-md 
             w-[88vw] max-w-[200px] sm:max-w-md 
             text-center text-[10px] sm:text-sm"
>
  <p className="font-medium truncate">{getImageLabel(selectedCategory, i)}</p>
  <p className="text-[10px] text-gray-500 mt-1 sm:text-xs">
    {i + 1} of {selectedImages.length}
  </p>
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