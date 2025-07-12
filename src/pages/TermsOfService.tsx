import { ArrowLeft, Info, Copyright, ShieldCheck, AlertTriangle, Link as LinkIcon, RefreshCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsOfService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-16 bg-white">
      <Navigation />

      {/* Floating Back Button */}
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

      {/* Header Section */}
      <div className="bg-gradient-to-br from-amber-100 to-orange-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-700">
            Understand the terms that govern your use of our website.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-10 text-gray-700 text-base leading-relaxed">
          <motion.section variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.4 }} className="p-6 bg-white rounded-xl border shadow-sm">
            <div className="flex items-center gap-3 text-xl font-semibold text-gray-900 mb-2">
              <span className="bg-amber-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">1</span>
              <Info className="w-5 h-5 text-amber-600" />
              <span>Website Purpose</span>
            </div>
            <p>The OSHDY Events website is intended for informational purposes only. All reservations, bookings, and payments must be made through our official mobile app, which is linked throughout the site.</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.4, delay: 0.1 }} className="p-6 bg-white rounded-xl border shadow-sm">
            <div className="flex items-center gap-3 text-xl font-semibold text-gray-900 mb-2">
              <span className="bg-amber-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">2</span>
              <Copyright className="w-5 h-5 text-amber-600" />
              <span>Intellectual Property</span>
            </div>
            <p>All content on this website — including text, images, graphics, and branding — is the property of OSHDY Events and is protected by copyright laws. You may not reproduce or reuse our materials without written permission.</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.4, delay: 0.2 }} className="p-6 bg-white rounded-xl border shadow-sm">
            <div className="flex items-center gap-3 text-xl font-semibold text-gray-900 mb-2">
              <span className="bg-amber-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">3</span>
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              <span>Acceptable Use</span>
            </div>
            <ul className="list-disc pl-5">
              <li>Use the website only for lawful purposes</li>
              <li>Do not attempt to breach or bypass security features</li>
              <li>Do not interfere with others’ ability to access the site</li>
            </ul>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.4, delay: 0.3 }} className="p-6 bg-white rounded-xl border shadow-sm">
            <div className="flex items-center gap-3 text-xl font-semibold text-gray-900 mb-2">
              <span className="bg-amber-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">4</span>
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>No Warranties</span>
            </div>
            <p>While we strive to ensure the information on our site is accurate and up to date, we do not provide guarantees or warranties of any kind. Information is provided “as is” and is subject to change without notice.</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.4, delay: 0.4 }} className="p-6 bg-white rounded-xl border shadow-sm">
            <div className="flex items-center gap-3 text-xl font-semibold text-gray-900 mb-2">
              <span className="bg-amber-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">5</span>
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              <span>Limitation of Liability</span>
            </div>
            <p>OSHDY Events is not liable for any damages or losses resulting from your use of the website, including but not limited to technical issues, inaccuracies, or broken links.</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.4, delay: 0.5 }} className="p-6 bg-white rounded-xl border shadow-sm">
            <div className="flex items-center gap-3 text-xl font-semibold text-gray-900 mb-2">
              <span className="bg-amber-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">6</span>
              <LinkIcon className="w-5 h-5 text-amber-600" />
              <span>Links to External Platforms</span>
            </div>
            <p>The website may contain links to third-party sites such as app stores. We are not responsible for their content or privacy practices.</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.4, delay: 0.6 }} className="p-6 bg-white rounded-xl border shadow-sm">
            <div className="flex items-center gap-3 text-xl font-semibold text-gray-900 mb-2">
              <span className="bg-amber-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">7</span>
              <RefreshCcw className="w-5 h-5 text-amber-600" />
              <span>Changes to Terms</span>
            </div>
            <p>We may update these terms as needed. Changes will be posted on this page and will become effective immediately upon publication.</p>
          </motion.section>

          <p className="text-sm text-gray-500 text-center mt-10">Last updated: July 12, 2025</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
