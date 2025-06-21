
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Check, Clock, Users, MapPin, Phone } from 'lucide-react';
import ImageGallery from './ImageGallery';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceData = {
    'wedding-catering': {
      title: 'Wedding Catering',
      subtitle: 'Creating Magical Moments for Your Special Day',
      heroImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=600&fit=crop',
      description: 'Make your wedding day truly unforgettable with our exquisite catering services. We specialize in creating elegant dining experiences that reflect your unique style and taste preferences.',
      packages: [
        {
          name: 'Classic Wedding Package',
          price: '$85/person',
          features: [
            '3-course plated dinner',
            'Cocktail hour with hors d\'oeuvres',
            'Wedding cake cutting service',
            'Professional wait staff',
            'Elegant table linens',
            'Complimentary tasting for 2'
          ]
        },
        {
          name: 'Premium Wedding Package',
          price: '$125/person',
          features: [
            '4-course gourmet dinner',
            'Extended cocktail reception',
            'Premium bar service',
            'Upgraded linens and centerpieces',
            'Dedicated wedding coordinator',
            'Late night snack service'
          ]
        },
        {
          name: 'Luxury Wedding Package',
          price: '$185/person',
          features: [
            '5-course chef\'s tasting menu',
            'Premium open bar all night',
            'Champagne toast for all guests',
            'Specialty dietary accommodations',
            'Live cooking stations',
            'Complimentary anniversary dinner'
          ]
        }
      ],
      additionalInfo: {
        minimumGuests: 50,
        planningTime: '3-6 months in advance',
        venues: 'Indoor and outdoor venues available'
      }
    },
    'corporate-catering': {
      title: 'Corporate Event Catering',
      subtitle: 'Professional Catering for Business Excellence',
      heroImage: 'https://images.unsplash.com/photo-1515169067868-5387ec2265f5?w=1200&h=600&fit=crop',
      description: 'Impress your clients and colleagues with our professional corporate catering services. From boardroom meetings to company celebrations, we deliver exceptional food and service.',
      packages: [
        {
          name: 'Business Lunch Package',
          price: '$35/person',
          features: [
            'Gourmet sandwich platters',
            'Fresh salad selections',
            'Seasonal fruit display',
            'Beverage service',
            'Disposable elegant tableware',
            'Setup and cleanup included'
          ]
        },
        {
          name: 'Executive Meeting Package',
          price: '$55/person',
          features: [
            'Hot entrée selections',
            'Fresh garden salads',
            'Artisan bread rolls',
            'Coffee and tea service',
            'China and glassware',
            'Professional service staff'
          ]
        },
        {
          name: 'Corporate Gala Package',
          price: '$95/person',
          features: [
            '3-course plated dinner',
            'Cocktail reception',
            'Premium bar service',
            'Elegant table settings',
            'Audio/visual coordination',
            'Dedicated event manager'
          ]
        }
      ],
      additionalInfo: {
        minimumGuests: 10,
        planningTime: '1-2 weeks in advance',
        venues: 'Office buildings, hotels, and conference centers'
      }
    },
    'birthday-parties': {
      title: 'Birthday Party Catering',
      subtitle: 'Celebrating Life\'s Special Moments',
      heroImage: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&h=600&fit=crop',
      description: 'Make every birthday celebration memorable with our fun and festive catering options. From kids\' parties to milestone birthdays, we create joyful dining experiences.',
      packages: [
        {
          name: 'Kids Birthday Package',
          price: '$25/person',
          features: [
            'Kid-friendly menu options',
            'Custom birthday cake',
            'Fun themed decorations',
            'Game coordination',
            'Party favor bags',
            'Cleanup service'
          ]
        },
        {
          name: 'Teen Birthday Package',
          price: '$40/person',
          features: [
            'Pizza and finger food station',
            'Specialty birthday cake',
            'Music system setup',
            'Photo booth props',
            'Trendy decorations',
            'Extended party time'
          ]
        },
        {
          name: 'Adult Milestone Package',
          price: '$65/person',
          features: [
            'Elegant buffet dinner',
            'Signature cocktail service',
            'Professional cake cutting',
            'Sophisticated decorations',
            'Memory book station',
            'Professional photography'
          ]
        }
      ],
      additionalInfo: {
        minimumGuests: 15,
        planningTime: '1-2 weeks in advance',
        venues: 'Homes, community centers, and party venues'
      }
    },
    'graduation-events': {
      title: 'Graduation Party Catering',
      subtitle: 'Honoring Academic Achievements',
      heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop',
      description: 'Celebrate academic milestones with our graduation catering services. Whether it\'s high school, college, or advanced degrees, we help honor these important achievements.',
      packages: [
        {
          name: 'Classic Graduation Package',
          price: '$30/person',
          features: [
            'Buffet-style lunch or dinner',
            'Graduation themed cake',
            'School color decorations',
            'Beverage service',
            'Congratulatory signage',
            'Photo opportunity setup'
          ]
        },
        {
          name: 'Family Celebration Package',
          price: '$50/person',
          features: [
            'Plated dinner service',
            'Custom graduation cake',
            'Premium decorations',
            'Memory display area',
            'Professional service staff',
            'Achievement recognition ceremony'
          ]
        },
        {
          name: 'Grand Graduation Gala',
          price: '$75/person',
          features: [
            'Multi-course dinner',
            'Cocktail reception',
            'Professional DJ service',
            'Elegant venue styling',
            'Guest speaker coordination',
            'Commemorative keepsakes'
          ]
        }
      ],
      additionalInfo: {
        minimumGuests: 20,
        planningTime: '2-4 weeks in advance',
        venues: 'Schools, banquet halls, and family homes'
      }
    }
  };

  const service = serviceData[serviceId as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/" className="text-amber-600 hover:text-amber-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Back Button */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${service.heroImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl md:text-2xl">{service.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Service Description */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed mb-12 text-center">
            {service.description}
          </p>

          {/* Service Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Users className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Minimum Guests</h3>
              <p className="text-gray-600">{service.additionalInfo.minimumGuests} people</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Planning Time</h3>
              <p className="text-gray-600">{service.additionalInfo.planningTime}</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Venue Options</h3>
              <p className="text-gray-600">{service.additionalInfo.venues}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <ImageGallery serviceType={serviceId || 'wedding-catering'} />

      {/* Packages */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-2xl font-bold text-amber-600 mb-6">{pkg.price}</p>
                  
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 pt-0">
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-16 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Plan Your Event?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Contact us today to discuss your {service.title.toLowerCase()} needs and get a personalized quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
