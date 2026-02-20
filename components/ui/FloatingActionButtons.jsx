// components/FloatingActionButtons.jsx
"use client";
import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';

const FloatingActionButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState('');

  // Show buttons after scrolling a bit
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919881063639?text=Hi%20I%20need%20help%20with%20insurance', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919881063639';
  };

  return (
    <>
      {/* Main container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <div className="relative group">
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="bg-gray-900 text-white text-sm py-2 px-3 rounded-lg whitespace-nowrap shadow-lg">
              Chat on WhatsApp
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </div>
          </div>
          
          {/* Button */}
          <button
            onClick={handleWhatsApp}
            className="w-10 h-10 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>

        {/* Call Button */}
        <div className="relative group">
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="bg-gray-900 text-white text-sm py-2 px-3 rounded-lg whitespace-nowrap shadow-lg">
              Call us now
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </div>
          </div>
          
          {/* Button */}
          <button
            onClick={handleCall}
            className="w-10 h-10 md:w-16 md:h-16 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Call us"
          >
            <Phone className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingActionButtons;