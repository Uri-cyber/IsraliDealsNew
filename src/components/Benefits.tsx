import React, { useState } from 'react';
import { ShoppingBag, Truck, Tag, Shield, ThumbsUp, User } from 'lucide-react';
import { siteContent } from '../utils/content';
import WhatsAppButton from './WhatsAppButton';
import TelegramButton from './TelegramButton';

const BenefitCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        bg-white rounded-xl shadow-md p-6 
        transition-all duration-300 
        transform ${isHovered ? 'scale-105 shadow-xl' : ''}
        cursor-pointer
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        w-12 h-12 rounded-lg 
        bg-gradient-to-br from-blue-500 to-purple-500 
        flex items-center justify-center mb-4
        transform transition-transform duration-300
        ${isHovered ? 'rotate-12' : ''}
      `}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const benefitIcons = [
    <ShoppingBag key="shopping" size={24} className="text-white" />,
    <Tag key="tag" size={24} className="text-white" />,
    <Truck key="truck" size={24} className="text-white" />,
    <Shield key="shield" size={24} className="text-white" />,
    <ThumbsUp key="thumbs-up" size={24} className="text-white" />,
    <User key="user" size={24} className="text-white" />
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 transform transition-all duration-500 hover:scale-105">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{siteContent.benefits.title}</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">{siteContent.benefits.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.benefits.items.map((benefit, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <BenefitCard 
                icon={benefitIcons[index % benefitIcons.length]}
                title={benefit.title}
                description={benefit.description}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white text-lg mb-6 animate-bounce">{siteContent.benefits.callToAction}</p>
          <div className="flex justify-center items-center space-x-4 space-x-reverse">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <WhatsAppButton size="lg" location="benefits" />
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <TelegramButton size="lg" location="benefits" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;