import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, X, Calendar, User, Mail, Smartphone, Download } from "lucide-react";

const FeedbackWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutSection, setIsAboutSection] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setIsAboutSection(false);
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Check if about section is in viewport
        const isInView = rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3;
        
        if (isInView && !isAboutSection) {
          setIsAboutSection(true);
          setIsVisible(true);
        } else if (!isInView && isAboutSection) {
          setIsVisible(false);
          // Wait for exit animation to complete before hiding completely
          setTimeout(() => setIsAboutSection(false), 300);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage, location.pathname, isAboutSection]);

  const handleButtonClick = () => {
    if (!isAboutSection) return;

    const button = document.querySelector('.feedback-button');
    button?.classList.add('scale-95');
    
    const isMobile = window.innerWidth < 640;
    
    if (isMobile) {
      setTimeout(() => {
        setIsOpen(true);
        setTimeout(() => {
          button?.classList.remove('scale-95');
        }, 150);
      }, 200);
    } else {
      setIsOpen(true);
      setTimeout(() => {
        button?.classList.remove('scale-95');
      }, 150);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // Don't render anything if not in about section
  if (!isAboutSection) {
    return null;
  }

  // Sample feedback data
  const feedbacks = [
    {
      id: 1,
      name: "Maria Santos",
      email: "maria.santos@email.com",
      category: "App Improvement",
      feedback: "The app interface could be more intuitive. Adding a dark mode would be great for night usage.",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "John Reyes",
      email: "john.reyes@email.com",
      category: "Feature Request",
      feedback: "Would love to see a calendar integration feature to sync with existing schedules.",
      date: "2024-01-14"
    },
    {
      id: 3,
      name: "Sarah Lim",
      email: "sarah.lim@email.com",
      category: "Bug Report",
      feedback: "Found an issue with the login page on mobile devices. The button sometimes becomes unclickable.",
      date: "2024-01-13"
    },
    {
      id: 4,
      name: "Michael Tan",
      email: "michael.tan@email.com",
      category: "App Improvement",
      feedback: "The loading times have improved significantly since the last update. Great work team!",
      date: "2024-01-12"
    },
    {
      id: 5,
      name: "Andrea Cruz",
      email: "andrea.cruz@email.com",
      category: "Feature Request",
      feedback: "Please add export functionality for reports. CSV and PDF formats would be very helpful.",
      date: "2024-01-11"
    },
    {
      id: 6,
      name: "Robert Ong",
      email: "robert.ong@email.com",
      category: "General Feedback",
      feedback: "Excellent customer support experience. The team was very responsive and helpful.",
      date: "2024-01-10"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'App Improvement': 'bg-blue-50 text-blue-700 border-blue-200',
      'Feature Request': 'bg-emerald-50 text-emerald-700 border-emerald-200',
      'Bug Report': 'bg-rose-50 text-rose-700 border-rose-200',
      'General Feedback': 'bg-amber-50 text-amber-700 border-amber-200'
    };
    return colors[category] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  const handleDownloadApp = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    
    if (isIOS) {
      window.open('https://apps.apple.com/your-app-link', '_blank');
    } else if (isAndroid) {
      window.open('https://play.google.com/store/apps/details?id=your.app.id', '_blank');
    } else {
      window.open('https://play.google.com/store/apps/details?id=your.app.id', '_blank');
    }
  };

  return (
    <>
      {/* View Insights Button with Enter and Exit Animations */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-6 z-50"
          >
            <Button
              onClick={handleButtonClick}
              className="feedback-button h-12 w-12 rounded-full shadow-lg bg-gray-800 hover:bg-gray-900 transition-all duration-200 transform hover:scale-105 group border border-gray-600"
              size="icon"
            >
              <Users className="h-5 w-5 text-white" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-gray-700">
                View Insights
              </span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Insights Modal with Enter and Exit Animations */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={handleCloseModal}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <Card className="relative z-50 w-full max-w-2xl max-h-[85vh] bg-white shadow-xl mx-auto flex flex-col border-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-gray-200 flex-shrink-0 px-6 pt-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-gray-900">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        User Insights
                      </CardTitle>
                      <p className="text-sm text-gray-500 mt-1">
                        Customer feedback & suggestions
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleCloseModal}
                    className="h-8 w-8 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col min-h-0 p-6">
                  {/* Download App Section - More Compact */}
                  <div className="mb-6 p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-gray-900">
                        <Smartphone className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">
                          Share your feedback
                        </p>
                        <p className="text-gray-600 text-xs">
                          Download our app to submit insights
                        </p>
                      </div>
                    </div>
                    <Button
                      onClick={handleDownloadApp}
                      className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-1.5 px-3 text-xs flex items-center space-x-1.5 transition-colors duration-200 rounded-lg"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>Get App</span>
                    </Button>
                  </div>

                  {/* Insights List */}
                  <div className="flex-1 overflow-y-auto space-y-3 min-h-0">
                    {feedbacks.map((feedback) => (
                      <div
                        key={feedback.id}
                        className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors duration-200"
                      >
                        {/* Compact Header */}
                        <div className="flex flex-col space-y-2 mb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-white border border-gray-300">
                                <User className="h-3 w-3 text-gray-600" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 text-sm">{feedback.name}</p>
                                <div className="flex items-center space-x-1 text-xs text-gray-500">
                                  <Mail className="h-3 w-3" />
                                  <span>{feedback.email}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-1 text-gray-500 text-xs">
                              <Calendar className="h-3 w-3" />
                              <span>{formatDate(feedback.date)}</span>
                            </div>
                          </div>
                          
                          {/* Category Badge */}
                          <div className="flex justify-start">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${getCategoryColor(feedback.category)}`}>
                              {feedback.category}
                            </span>
                          </div>
                        </div>

                        {/* Feedback Content */}
                        <div>
                          <p className="text-gray-700 text-sm leading-relaxed bg-white rounded border border-gray-200 p-3">
                            {feedback.feedback}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>
        {`
          /* Custom scrollbar - Professional gray theme */
          .overflow-y-auto::-webkit-scrollbar {
            width: 4px;
          }
          
          .overflow-y-auto::-webkit-scrollbar-track {
            background: #f8fafc;
            border-radius: 2px;
          }
          
          .overflow-y-auto::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 2px;
          }
          
          .overflow-y-auto::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
          }
        `}
      </style>
    </>
  );
};

export default FeedbackWidget;