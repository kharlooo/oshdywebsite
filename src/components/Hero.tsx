
import { Calendar, Users, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-16">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-200">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src='/hero.jpg' alt="Background Image" className="w-full h-full object-cover filter blur opacity-50" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Creating Unforgettable
          <span className="block text-amber-300">Moments Together</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          From intimate gatherings to grand celebrations, we bring your vision to life with exceptional catering and flawless event planning.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 transform hover:scale-105">
            Download App Now
          </button>
          <Link
            to="/menu"
            className="border-2 border-white text-white hover:bg-white hover:text-amber-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-block"
          >
            View Our Menu
          </Link>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <Calendar className="w-12 h-12 mb-3 text-amber-300" />
            <h3 className="text-lg font-semibold mb-2">Event Planning</h3>
            <p className="text-sm text-gray-300">Complete event coordination from start to finish</p>
          </div>
          <div className="flex flex-col items-center">
            <Utensils className="w-12 h-12 mb-3 text-amber-300" />
            <h3 className="text-lg font-semibold mb-2">Gourmet Catering</h3>
            <p className="text-sm text-gray-300">Fresh, delicious meals crafted by expert chefs</p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 mb-3 text-amber-300" />
            <h3 className="text-lg font-semibold mb-2">Professional Service</h3>
            <p className="text-sm text-gray-300">Dedicated team ensuring seamless execution</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
