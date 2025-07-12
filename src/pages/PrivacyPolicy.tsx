import { ArrowLeft, Shield, FileText, Lock, ExternalLink, Mail, RefreshCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-700">
            Learn how OSHDY Events handles your data while browsing our website.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-10 text-gray-700 text-base leading-relaxed">
          <motion.section variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.4 }} className="p-6 bg-white rounded-xl border shadow-sm">
            <div className="flex items-center gap-3 text-xl font-semibold text-gray-900 mb-2">
              <span className="bg-amber-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">1</span>
              <Shield className="w-5 h-5 text-amber-600" />
              <span>Information We Collect</span>
            </div>
            <p>Our website is designed for informational purposes. We do not collect personal information such as names, phone numbers, or email addresses directly through the website. However, we may use basic web analytics tools (like cookies or similar technologies) to understand user behavior and improve our content.</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.4, delay: 0.1 }} className="p-6 bg-white rounded-xl border shadow-sm">
            <div className="flex items-center gap-3 text-xl font-semibold text-gray-900 mb-2">
              <span className="bg-amber-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">2</span>
              <FileText className="w-5 h-5 text-amber-600" />
              <span>How We Use Information</span>
            </div>
            <p>The information we collect via analytics is used solely for:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Improving website performance and user experience</li>
              <li>Understanding what pages are visited most</li>
              <li>Identifying technical issues</li>
            </ul>
            <p className="mt-2">We do not sell or share your data with third parties for marketing.</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.4, delay: 0.2 }} className="p-6 bg-white rounded-xl border shadow-sm">
            <div className="flex items-center gap-3 text-xl font-semibold text-gray-900 mb-2">
              <span className="bg-amber-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">3</span>
              <Lock className="w-5 h-5 text-amber-600" />
              <span>Data Security</span>
            </div>
            <p>We take reasonable steps to secure our website and any analytics data. Our hosting and security providers follow modern best practices, but no method of transmission over the Internet is 100% secure.</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.4, delay: 0.3 }} className="p-6 bg-white rounded-xl border shadow-sm">
            <div className="flex items-center gap-3 text-xl font-semibold text-gray-900 mb-2">
              <span className="bg-amber-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">4</span>
              <ExternalLink className="w-5 h-5 text-amber-600" />
              <span>Third-Party Links</span>
            </div>
            <p>Our website contains links to download our mobile application. Once you leave our site, your data will be governed by the policies of the third-party platforms (e.g., Google Play Store, Apple App Store).</p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.4, delay: 0.4 }} className="p-6 bg-white rounded-xl border shadow-sm">
            <div className="flex items-center gap-3 text-xl font-semibold text-gray-900 mb-2">
              <span className="bg-amber-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">5</span>
              <Mail className="w-5 h-5 text-amber-600" />
              <span>Contact Us</span>
            </div>
            <p>If you have any questions about this policy, you may contact us at:</p>
            <p className="mt-2">
              📧 <strong>oshdy@gmail.com</strong><br />
              📍 123 Celebration Avenue, Event City, EC 12345
            </p>
          </motion.section>

          <motion.section variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.4, delay: 0.5 }} className="p-6 bg-white rounded-xl border shadow-sm">
            <div className="flex items-center gap-3 text-xl font-semibold text-gray-900 mb-2">
              <span className="bg-amber-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">6</span>
              <RefreshCcw className="w-5 h-5 text-amber-600" />
              <span>Updates to This Policy</span>
            </div>
            <p>We may revise this policy from time to time. The latest version will always be available on our website with the updated date.</p>
          </motion.section>

          <p className="text-sm text-gray-500 text-center mt-10">Last updated: July 12, 2025</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
