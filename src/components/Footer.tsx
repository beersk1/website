
import React from 'react';
import { ShieldCheckIcon, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShieldCheckIcon className="h-8 w-8 text-brand-blue" />
              <span className="font-display font-bold text-xl text-brand-dark">
                HelmetShine
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Professional helmet cleaning services for all types of helmets. Restore shine, eliminate odors, and extend the life of your gear.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg text-brand-dark mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-brand-blue transition-colors">Features</a></li>
              <li><a href="#process" className="text-gray-600 hover:text-brand-blue transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-brand-blue transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-brand-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg text-brand-dark mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">Standard Cleaning</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">Premium Package</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">Express Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">Helmet Inspection</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">Corporate Accounts</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg text-brand-dark mb-4">Business Hours</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {currentYear} HelmetShine. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
