import { Users, Award, MapPin, Phone, Mail, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Events Catered', icon: Award },
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Venue Partners', icon: MapPin }
  ];

  const teamMembers = [
    {
      name: '(name)',
      role: '(role)',
      description: '(description)',
      image: 'example.jpg', 
      imageAlt: '(professional headshot)'
    },
    {
      name: '(name)',
      role: '(role)',
      description: '(description)',
      image: 'example.jpg', 
      imageAlt: '(professional headshot)'
    },
    {
      name: '(name)',
      role: '(role)',
      description: '(description)',
      image: 'example.jpg', 
      imageAlt: '(professional headshot)'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About OSHDY
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded on the belief that every celebration deserves exceptional care, we've been creating unforgettable moments for families and businesses for over 15 years.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                What started as a small family catering business has grown into one of the region's most trusted event and catering service providers. Our journey began with a simple mission: to bring people together through exceptional food and unforgettable experiences.
              </p>
              <p>
                Over the years, we've had the privilege of being part of countless celebrations - from intimate family gatherings to grand corporate events. Each event has taught us something new and reinforced our commitment to excellence.
              </p>
              <p>
                Today, our experienced team combines traditional hospitality values with modern innovation, ensuring every event we cater reflects our passion for creating magical moments that last a lifetime.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="h-96 rounded-lg overflow-hidden shadow-md">
  <img
    src="example.jpg"
    alt="(catering team)"
    className="w-full h-full object-cover"
  />
</div>

        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                {/* Actual Profile Image */}
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={member.image}
                    alt={member.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-amber-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Get In Touch</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
              <p className="text-gray-600">0981 377 7731</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
              <p className="text-gray-600">oshdyevents@gmail.com</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
              <p className="text-gray-600">
                P5 B46 L3 Centella Homes,<br />
                Rodriguez, Philippines, 1860
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
