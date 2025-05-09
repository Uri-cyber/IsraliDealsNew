import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const whatsAppGroupLink = "https://chat.whatsapp.com/yourgroup"; // Replace with real WhatsApp group link

  useEffect(() => {
    // Show floating button after scrolling a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed left-4 bottom-4 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-3 max-w-xs animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <button 
              onClick={toggle} 
              className="text-gray-500 hover:text-gray-700"
              aria-label="סגור"
            >
              <X size={18} />
            </button>
            <h4 className="font-semibold text-gray-800">רוצים לחסוך בקניות?</h4>
          </div>
          <p className="text-gray-600 mb-3 text-sm">
            הצטרפו לקבוצת הוואטסאפ שלנו וקבלו עדכונים על מבצעים והנחות של עד 80% ממחירי החנויות!
          </p>
          <a
            href={whatsAppGroupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            הצטרפו עכשיו
          </a>
        </div>
      )}

      <button
        onClick={toggle}
        className={`
          w-14 h-14 rounded-full flex items-center justify-center shadow-lg 
          transition-all duration-300 focus:outline-none
          ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}
        `}
        aria-label={isOpen ? "סגור צ'אט" : "פתח צ'אט"}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </button>
    </div>
  );
};

export default FloatingWhatsApp;