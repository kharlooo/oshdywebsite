import { ArrowLeft, Smartphone, AppWindow, LayoutDashboard, Download, Calendar, MapPin, Clock, Users, CheckCircle, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HowItWorks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    { icon: Calendar, text: "Availability calendar" },
    { icon: Clock, text: "Instant booking confirmation" },
    { icon: Users, text: "Team collaboration tools" }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Navigation />

      {/* Floating Back Button */}
      <motion.button
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => {
          navigate(-1);
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 50);
        }}
        className="fixed top-24 left-4 z-30 border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        aria-label="Go Back"
      >
        <ArrowLeft className="w-5 h-5" />
      </motion.button>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-foreground mb-6">How It Works</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with OSHDY in just three simple steps. From downloading the app to celebrating your special moments.
            </p>
          </motion.div>
          
          {/* Process Timeline Indicator */}
          <motion.div 
            className="flex justify-center items-center mt-12 space-x-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[1, 2, 3].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                  {step}
                </div>
                {index < 2 && <div className="w-12 h-1 bg-amber-300 mx-2"></div>}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {/* Step 1 */}
            <motion.section
              variants={fadeUp}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      1
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">Download the App</h2>
                      <p className="text-muted-foreground">Available on Android and IOS</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-foreground leading-relaxed">
                      Our mobile app is your gateway to effortless event planning. Available for both iOS and Android, 
                      it provides instant access to all OSHDY services, real time notifications, and secure booking capabilities.
                    </p>
                    <div className="space-y-3">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 text-center">
                  <div className="bg-card rounded-2xl p-8 shadow-lg border">
                    <Smartphone className="w-16 h-16 text-amber-600 mx-auto mb-6" />
                    <div className="w-48 h-48 bg-muted rounded-lg mx-auto mb-6 flex items-center justify-center">
                      <span className="text-muted-foreground">QR Code Placeholder</span>
                    </div>
                    <a
                      href="https://oshdy.app/download"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-200 hover:scale-105 shadow-lg"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Step 2 */}
            <motion.section
              variants={fadeUp}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center">
                  <div className="bg-card rounded-2xl p-8 shadow-lg border">
                    <LayoutDashboard className="w-16 h-16 text-amber-600 mx-auto mb-6" />
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">Service Categories</h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-muted rounded-lg p-3">Catering</div>
                        <div className="bg-muted rounded-lg p-3">Events</div>
                        <div className="bg-muted rounded-lg p-3">Decorations</div>
                        <div className="bg-muted rounded-lg p-3">Gallery</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      2
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">Explore Our Services</h2>
                      <p className="text-muted-foreground">Discover what we offer</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-foreground leading-relaxed">
                      Browse our comprehensive catalog of services, from elegant grazing tables to full scale event management. 
                      Each service includes detailed descriptions, pricing, and customer reviews to help you make the perfect choice.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Step 3 */}
            <motion.section
              variants={fadeUp}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      3
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">Book Your Event</h2>
                      <p className="text-muted-foreground">Simple and secure booking</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-foreground leading-relaxed">
                      Complete your booking in minutes with our streamlined process. Select your preferred date, 
                      location, and package details. Our team will confirm your booking and handle all the preparations.
                    </p>
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">What happens next?</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Instant booking confirmation via email & SMS</li>
                        <li>• Personal event coordinator assigned</li>
                        <li>• 24/7 customer support throughout your event</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 text-center">
                  <div className="bg-card rounded-2xl p-8 shadow-lg border">
                    <AppWindow className="w-16 h-16 text-amber-600 mx-auto mb-6" />
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">Booking Process</h3>
                      <div className="space-y-3">
                        {['Select Date & Time', 'Choose Location', 'Confirm Details', 'Secure Payment'].map((step, index) => (
                          <div key={index} className="flex items-center gap-3 text-left">
                            <div className="w-6 h-6 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-xs font-bold">
                              {index + 1}
                            </div>
                            <span className="text-sm text-muted-foreground">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorks;