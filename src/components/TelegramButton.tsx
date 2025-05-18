import React from 'react';
import { Send } from 'lucide-react';

interface TelegramButtonProps {
  size: 'sm' | 'md' | 'lg' | 'full';
  location: string;
}

const TelegramButton: React.FC<TelegramButtonProps> = ({ size, location }) => {
  const telegramGroupLink = "https://t.me/IsraeliDealsIL";
  
  const trackClick = () => {
    console.log(`Telegram button clicked from: ${location}`);
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
      href={telegramGroupLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackClick}
      className={`
        inline-flex items-center justify-center rounded-lg 
        font-medium shadow-md transition-all duration-300
        bg-gradient-to-r from-blue-500 to-blue-600 
        hover:from-blue-600 hover:to-blue-700
        text-white mr-4
        ${buttonClasses[size]}
        ${pulseAnimation ? 'animate-pulse-slow' : ''}
      `}
    >
      <Send size={size === 'sm' ? 16 : 20} className="ml-2" />
      הצטרפו לקבוצת הטלגרם
    </a>
  );
};

export default TelegramButton