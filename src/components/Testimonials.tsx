import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { siteContent } from '../utils/content';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div 
      className="flex space-x-1 space-x-reverse"
      onMouseEnter={() => setIsAnimating(true)}
      onMouseLeave={() => setIsAnimating(false)}
    >
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < rating ? "#FBBF24" : "none"}
          stroke={i < rating ? "#FBBF24" : "#D1D5DB"}
          className={`${i < rating ? "text-yellow-400" : "text-gray-300"} 
            transform transition-all duration-300
            ${isAnimating && i < rating ? 'scale-125 rotate-12' : 'scale-100 rotate-0'}`}
        />
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<{
  name: string;
  rating: number;
  content: string;
  date: string;
  avatar: string;
  delay: number;
}> = ({ name, rating, content, date, avatar, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`bg-white rounded-xl shadow-md p-6 
        transition-all duration-500 transform
        ${isHovered ? 'scale-105 shadow-xl' : 'scale-100'}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4 space-x-4 space-x-reverse">
        <div className={`relative overflow-hidden rounded-full transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <div className="flex items-center mt-1">
            <StarRating rating={rating} />
            <span className="text-sm text-gray-500 mr-2">{date}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 transition-all duration-300">{content}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<number | null>(null);

  const metrics = [
    { value: "97%", label: "שביעות רצון" },
    { value: "12K+", label: "חברים בקבוצה" },
    { value: "80%", label: "חיסכון ממוצע" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 transform transition-all duration-500 hover:scale-105">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-gradient-text">
            {siteContent.testimonials.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {siteContent.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.testimonials.items.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              rating={testimonial.rating}
              content={testimonial.content}
              date={testimonial.date}
              avatar={testimonial.avatar}
              delay={index * 200}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-md p-8 inline-block w-full max-w-4xl">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 md:space-x-reverse">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className={`text-center transition-all duration-500 transform cursor-pointer
                    ${activeMetric === index ? 'scale-110' : 'scale-100'}`}
                  onMouseEnter={() => setActiveMetric(index)}
                  onMouseLeave={() => setActiveMetric(null)}
                >
                  <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-gradient-text">
                    {metric.value}
                  </p>
                  <p className="text-gray-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;