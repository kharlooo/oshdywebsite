
import { Utensils, Users, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const CateringServices = () => {
  const services = [
    {
      id: 'birthday-baptismal',
      title: 'Birthday/Baptismal Package',
      description: 'Celebrate special moments with our festive birthday and baptismal packages',
      icon: Utensils,
      features: [
        'Custom themed decorations',
        'Kid-friendly menu options',
        'Professional coordination',
        'Complete setup service'
      ],
      popular: false,
      image: '/packagesimg/bbap/hero.jpg',
      themes: ['Adventure', 'Fantasy']
    },
    {
      id: 'debutant',
      title: 'Debutant Package',
      description: 'Elegant celebration packages for coming-of-age milestones',
      icon: Award,
      features: [
        'Sophisticated menu selections',
        'Elegant table settings',
        'Professional photography coordination',
        'Themed decorations'
      ],
      popular: false,
      image: '/packagesimg/debutant/hero.jpg',
      themes: ['Roses', 'Treasures']
    },
    {
      id: 'wedding',
      title: 'Wedding Package',
      description: 'Make your special day unforgettable with our elegant wedding packages',
      icon: Users,
      features: [
        'Customized wedding menus',
        'Professional service staff',
        'Elegant table settings',
        'Bridal coordination'
      ],
      popular: true,
      image: '/packagesimg/wedding/hero.jpg',
      themes: ['Love', 'Honey']
    }
  ];

  const additionalServices = [
    'Professional wait staff',
    'Event coordination',
    'Linens and tableware',
    'Setup and cleanup',
    'Bar service',
    'Specialty dietary menus'
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Exceptional Catering Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate dinners to grand celebrations, our catering packages are designed to satisfy every palate and accommodate every occasion.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/packages/${service.id}`}
              className={`relative bg-white rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 block ${
                service.popular ? 'border-amber-500' : 'border-gray-200 hover:border-amber-300'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}

              {/* Service Image */}
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}>
                <div className="h-full bg-black bg-opacity-20 flex items-end p-4">
                  <div className={`p-2 rounded-lg ${service.popular ? 'bg-amber-500' : 'bg-white'} bg-opacity-90`}>
                    <service.icon className={`w-6 h-6 ${service.popular ? 'text-white' : 'text-gray-700'}`} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Title and Price */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${service.popular ? 'bg-amber-500' : 'bg-gray-400'}`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Themes Preview */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Available themes:</p>
                  <div className="flex gap-2">
                    {service.themes.map((theme) => (
                      <span key={theme} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className={`w-full py-2 px-4 rounded-lg font-semibold text-sm text-center transition-colors duration-200 ${
                  service.popular
                    ? 'bg-amber-500 hover:bg-amber-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}>
                  Choose Theme
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Complete Event Solutions
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Beyond exceptional food, we provide comprehensive event services to ensure your occasion runs smoothly from start to finish.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {additionalServices.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="h-64 rounded-lg overflow-hidden shadow-md">
  <img
    src="/prepfood.jpg"
    alt="Professional Kitchen - Chefs preparing food"
    className="w-full h-full object-cover"
  />
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringServices;
