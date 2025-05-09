import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  size: 'sm' | 'md' | 'lg' | 'full';
  location: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ size, location }) => {
  const whatsAppGroupLink = "https://chat.whatsapp.com/Ca6JJPDFFTxCYBY2tduR7l";
  
  const trackClick = () => {
    // This could be enhanced with actual analytics tracking
    console.log(`WhatsApp button clicked from: ${location}`);
  };
  
  const buttonClasses = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-5 py-2.5",
    lg: "text-lg px-6 py-3",
    full: "text-base px-5 py-2.5 w-full"
  };
  
  const pulseAnimation = location === 'hero' || location === 'benefits' || location === 'footer';
  
  return (
    <a
      href={whatsAppGroupLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackClick}
      className={`
        inline-flex items-center justify-center rounded-lg 
        font-medium shadow-md transition-all duration-300
        bg-gradient-to-r from-green-500 to-green-600 
        hover:from-green-600 hover:to-green-700
        text-white 
        ${buttonClasses[size]}
        ${pulseAnimation ? 'animate-pulse-slow' : ''}
      `}
    >
      <MessageCircle size={size === 'sm' ? 16 : 20} className="ml-2" />
      הצטרפו לקבוצת הוואטסאפ
    </a>
  );
};

export default WhatsAppButton;