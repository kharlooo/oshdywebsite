import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { X, MessageCircle, Phone, Mail, Check, Copy, CheckCheck } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const FeedbackWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'feedback' | 'contact'>('feedback');
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { toast } = useToast();

  const handleButtonClick = () => {
    // Add scale down animation
    const button = document.querySelector('.feedback-button');
    button?.classList.add('scale-95');
    
    // Check if mobile
    const isMobile = window.innerWidth < 640;
    
    if (isMobile) {
      // 200ms delay for mobile
      setTimeout(() => {
        setIsOpen(true);
        // Reset button scale after animation
        setTimeout(() => {
          button?.classList.remove('scale-95');
        }, 150);
      }, 200);
    } else {
      // Instant for desktop
      setIsOpen(true);
      // Reset button scale after animation
      setTimeout(() => {
        button?.classList.remove('scale-95');
      }, 150);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedback.trim()) {
      toast({
        title: "Error",
        description: "Please enter your feedback",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with the actual API 
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Feedback submitted:', { feedback, rating });
      
      toast({
        title: "Thank You!",
        description: "Your feedback helps us create better experiences.",
        className: "bg-amber-600 text-white border-amber-700",
      });
      
      setFeedback("");
      setRating("");
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = {
    phone: "+63 981 377 7731", // Philippine format
    email: "oshdyevents@gmail.com" // Replace with your actual email
  };

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.phone);
      setCopiedPhone(true);
      toast({
        title: "Phone Number Copied!",
        description: "Phone number has been copied to clipboard",
        className: "bg-amber-600 text-white border-amber-700",
      });
      
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedPhone(false);
      }, 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy phone number",
        variant: "destructive",
      });
    }
  };

  const openGmail = () => {
    const subject = "Inquiry - OSHDY Event Catering Services";
    const body = "Hello OSHDY Team,\n\nI would like to inquire about your catering services.\n\nBest regards,";
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(gmailUrl, '_blank');
  };

  return (
    <>
      {/* Feedback Button */}
      <Button
        onClick={handleButtonClick}
        className="feedback-button fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full shadow-xl bg-amber-600 hover:bg-amber-700 transition-all duration-200 transform hover:scale-105 group"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Share Feedback
        </span>
      </Button>

      {/* Feedback Modal - Responsive for mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:items-start sm:justify-start sm:pt-20 sm:pl-6 md:pt-32 md:pl-32">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Feedback Card - Responsive sizing */}
          <Card className="relative z-50 w-full max-w-md bg-gradient-to-br from-amber-50 to-amber-100 shadow-2xl mx-auto sm:mx-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-amber-200">
              <CardTitle className="text-xl text-amber-900 elegant-font">
                {activeTab === 'feedback' ? 'Share Your Experience' : 'Get In Touch'}
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 hover:bg-amber-200 text-amber-700"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            
            <CardContent className="space-y-4 pt-6">
              {/* Tab Switcher */}
              <div className="flex border-b border-amber-200">
                <button
                  type="button"
                  className={`flex-1 py-3 text-sm font-semibold transition-all duration-200 ${
                    activeTab === 'feedback'
                      ? 'border-b-2 border-amber-600 text-amber-700 bg-amber-50'
                      : 'text-amber-600 hover:text-amber-700 hover:bg-amber-50/50'
                  }`}
                  onClick={() => setActiveTab('feedback')}
                >
                  Quick Feedback
                </button>
                <button
                  type="button"
                  className={`flex-1 py-3 text-sm font-semibold transition-all duration-200 ${
                    activeTab === 'contact'
                      ? 'border-b-2 border-amber-600 text-amber-700 bg-amber-50'
                      : 'text-amber-600 hover:text-amber-700 hover:bg-amber-50/50'
                  }`}
                  onClick={() => setActiveTab('contact')}
                >
                  Contact Directly
                </button>
              </div>

              {activeTab === 'feedback' ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Label className="text-amber-800 font-semibold text-lg">How was your experience?</Label>
                    <RadioGroup 
                      value={rating} 
                      onValueChange={setRating} 
                      className="grid grid-cols-2 gap-3 sm:flex sm:space-x-4"
                    >
                      {[
                        { value: 'poor', label: 'Poor' },
                        { value: 'average', label: 'Average' },
                        { value: 'good', label: 'Good' },
                        { value: 'excellent', label: 'Excellent' }
                      ].map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem 
                            value={option.value} 
                            id={option.value} 
                            className="text-amber-600 border-amber-400 data-[state=checked]:bg-amber-600"
                          />
                          <Label 
                            htmlFor={option.value} 
                            className="text-sm text-amber-700 cursor-pointer font-medium"
                          >
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="feedback" className="text-amber-800 font-semibold text-lg">
                      Your Feedback
                    </Label>
                    <Textarea
                      id="feedback"
                      placeholder="Tell us about your experience, suggestions, or anything we can improve..."
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      rows={4}
                      className="resize-none border-amber-300 focus:border-amber-500 focus:ring-amber-500 bg-white"
                      maxLength={500}
                    />
                    <p className="text-xs text-amber-600 text-right">
                      {feedback.length}/500 characters
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 transition-all duration-200 transform hover:scale-105"
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Check className="h-4 w-4" />
                          <span>Submit Feedback</span>
                        </div>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsOpen(false)}
                      disabled={isSubmitting}
                      className="border-amber-400 text-amber-700 hover:bg-amber-100 font-semibold py-3"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6 py-2">
                  <div className="space-y-4">
                    <div 
                      className="flex items-center justify-between p-4 border border-amber-300 rounded-lg hover:bg-amber-50 cursor-pointer transition-all duration-200 bg-white/80 group"
                      onClick={copyPhoneNumber}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-100">
                          <Phone className="h-5 w-5 text-amber-700" />
                        </div>
                        <div>
                          <p className="font-semibold text-amber-800">Call Us</p>
                          <p className="text-sm text-amber-600">{contactInfo.phone}</p>
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {copiedPhone ? (
                          <CheckCheck className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4 text-amber-600" />
                        )}
                      </div>
                    </div>
                    
                    <div 
                      className="flex items-center justify-between p-4 border border-amber-300 rounded-lg hover:bg-amber-50 cursor-pointer transition-all duration-200 bg-white/80 group"
                      onClick={openGmail}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-100">
                          <Mail className="h-5 w-5 text-amber-700" />
                        </div>
                        <div>
                          <p className="font-semibold text-amber-800">Email Us</p>
                          <p className="text-sm text-amber-600">{contactInfo.email}</p>
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <Mail className="h-4 w-4 text-amber-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-sm text-amber-600 text-center italic bg-amber-50/50 p-3 rounded-lg border border-amber-200">
                      We typically respond within 24 hours
                    </p>
                    <p className="text-xs text-amber-500 text-center">
                      Click "Call Us" to copy phone number • Click "Email Us" to open Gmail
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      <style>
        {`
          .elegant-font {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            letter-spacing: 0.05em;
          }
        `}
      </style>
    </>
  );
};

export default FeedbackWidget;