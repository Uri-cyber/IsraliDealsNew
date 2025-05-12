import React from 'react';
import { siteContent } from '../utils/content';
import WhatsAppButton from './WhatsAppButton';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between pb-8 border-b border-gray-700">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {siteContent.siteName}
            </h3>
            <p className="max-w-md text-gray-400 mb-4">
              {siteContent.footer.description}
            </p>
            <div className="mb-6">
              <WhatsAppButton size="md" location="footer" />
            </div>
            <div className="text-gray-400">
              <p className="mb-2">יצירת קשר בטלפון: 052-8919886</p>
              <p>כתובת: בר יהודה 10 קרית אונו</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">קישורים מהירים</h4>
              <ul className="space-y-2">
                {siteContent.navigation.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">משאבים</h4>
              <ul className="space-y-2">
                {siteContent.footer.resources.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 text-center text-gray-500 text-sm">
          <p className="mb-2">{siteContent.footer.disclaimer}</p>
          <p>© {currentYear} {siteContent.siteName}. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;