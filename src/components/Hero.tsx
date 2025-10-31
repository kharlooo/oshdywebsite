import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // ✅ Detect mobile screen size (Tailwind sm breakpoint: 640px)
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // ✅ Handle Download button click
  const handleDownloadClick = () => {
    if (isMobile) {
      setTimeout(() => {
        console.log("Download started (mobile after delay)");
        window.open("https://www.upload-apk.com/Hht9ZHTFFwUi7A8", "_blank"); // replace with your actual app link
      }, 200);
    } else {
      console.log("Download started (desktop instantly)");
      window.location.href = "/download"; // replace with your actual app link
    }
  };

  // ✅ Handle Menu button click
  const handleMenuClick = (e) => {
    e.preventDefault(); // stop <Link> from instant navigation
    if (isMobile) {
      setTimeout(() => navigate("/menu"), 200);
    } else {
      navigate("/menu");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-200">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/hero.jpg"
            alt="Background"
            className="w-full h-full object-cover filter blur opacity-50"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight elegant-font">
          Creating Unforgettable
          <span className="block text-amber-300">Moments Together</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          From intimate gatherings to grand celebrations, we bring your vision to life with exceptional catering and flawless event planning.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {/* Download button with delay */}
          <button
            onClick={handleDownloadClick}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 transform hover:scale-105"
          >
            Download App Now
          </button>

          {/* Menu button with delay */}
          <Link
            to="/menu"
            onClick={handleMenuClick}
            className="border-2 border-white text-white hover:bg-white hover:text-amber-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-block"
          >
            View Our Menu
          </Link>
        </div>

        {/* Checklist */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto pb-12">
          {[
            'BIR & DTI Registered',
            'Flexible Payment Terms',
            'No hidden charges',
            'Lots of Freebies',
            'Flexible Inclusions',
            'Affordable Packages'
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center text-sm md:text-base text-white"
            >
              <Check className="w-4 h-4 md:w-5 md:h-5 text-amber-300 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Add style tag for the elegant font */}
      <style>
        {`
          .elegant-font {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            letter-spacing: 0.05em;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;