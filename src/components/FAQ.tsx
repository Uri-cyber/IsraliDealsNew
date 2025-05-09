import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { siteContent } from '../utils/content';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`border-b border-gray-200 last:border-b-0 transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <button
        className={`flex justify-between items-center w-full py-5 px-4 text-right rounded-lg
          transition-all duration-300 ${isHovered ? 'bg-gray-50' : ''}`}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-expanded={isOpen}
      >
        <span className={`font-medium text-lg transition-colors duration-300
          ${isOpen ? 'text-blue-600' : 'text-gray-800'}`}>
          {question}
        </span>
        <div className={`transform transition-all duration-300 
          ${isHovered ? 'scale-110' : 'scale-100'}
          ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {isOpen ? (
            <ChevronUp size={20} className="text-blue-600" />
          ) : (
            <ChevronDown size={20} className="text-gray-400" />
          )}
        </div>
      </button>
      <div 
        className={`transition-all duration-500 overflow-hidden
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="pb-5 px-4 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 transform transition-all duration-500 hover:scale-105">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-gradient-text">
            {siteContent.faq.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {siteContent.faq.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
          {siteContent.faq.items.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;