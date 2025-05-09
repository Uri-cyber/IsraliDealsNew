import React, { useState, useEffect } from 'react';
import { ShoppingBag, Truck, Tag, Check } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { siteContent } from '../utils/content';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % siteContent.hero.features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`w-full md:w-1/2 mb-8 md:mb-0 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {siteContent.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              {siteContent.hero.subtitle}
            </p>
            
            <div className="flex flex-col space-y-4 mb-8">
              {siteContent.hero.features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-3 space-x-reverse transition-all duration-500 transform
                    ${currentFeature === index ? 'scale-105 opacity-100' : 'scale-100 opacity-70'}
                  `}
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-green-600" />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="transform hover:scale-110 transition-transform duration-300">
              <WhatsAppButton size="lg" location="hero" />
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl transform hover:scale-105 transition-transform duration-300"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg" 
                  alt="קניות אונליין מישראל" 
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl transform hover:rotate-3 transition-transform duration-300">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="bg-red-100 p-2 rounded-full animate-bounce">
                    <Tag size={20} className="text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">הנחה של עד</p>
                    <p className="text-xl font-bold text-red-600">80%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;