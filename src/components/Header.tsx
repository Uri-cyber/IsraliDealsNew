import React, { useState, useEffect } from 'react';
import { Menu, X, Check } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { siteContent } from '../utils/content';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {siteContent.siteName}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
          {siteContent.navigation.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <WhatsAppButton size="sm" location="header" />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-full hover:bg-gray-100"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {siteContent.navigation.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="py-2">
              <WhatsAppButton size="full" location="mobile-menu" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;