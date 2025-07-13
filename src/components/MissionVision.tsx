
import { Target, Eye, Heart, Star } from 'lucide-react';

const MissionVision = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by passion and guided by excellence, we're committed to creating extraordinary experiences that bring people together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-amber-100 rounded-full">
                <Target className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              To provide delicious, high quality food and exceptional service at prices that make catering accessible for everyone. We are committed to bringing flavorful experiences to every event big or small by combining fresh ingredients, professional presentation, and budget friendly options.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-amber-500 mr-3" />
                <span className="text-gray-700">Passionate about hospitality</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-amber-500 mr-3" />
                <span className="text-gray-700">Committed to excellence</span>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              To be the go to catering choice for communities seeking unforgettable culinary experiences without breaking the bank. We envision a world where quality catering is no longer a luxury, but a standard available to all.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Target className="w-5 h-5 text-blue-500 mr-3" />
                <span className="text-gray-700">Innovation in event planning</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-blue-500 mr-3" />
                <span className="text-gray-700">Industry leadership</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Core Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Passion</h4>
              <p className="text-sm text-gray-600">We pour our heart into every event</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-sm text-gray-600">Striving for perfection in every detail</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-500" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Reliability</h4>
              <p className="text-sm text-gray-600">Dependable service you can trust</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-amber-500" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-sm text-gray-600">Creative solutions for unique celebrations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
