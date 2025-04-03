import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/Images/FinalLogo (1).png"
                alt="HelmetShine Logo"
                className="h-10 w-auto"
              />
              <span className="font-display font-bold text-xl text-brand-black">
                Clean N Fresh Helmet
              </span>
            </div>
            <p className="text-brand-gray mb-6">
              Professional helmet cleaning services for all types of helmets.
              Restore shine, eliminate odors, and extend the life of your gear.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red hover:bg-brand-red hover:text-white transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red hover:bg-brand-red hover:text-white transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red hover:bg-brand-red hover:text-white transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red hover:bg-brand-red hover:text-white transition-colors"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-brand-black mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-brand-gray hover:text-brand-red transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-brand-gray hover:text-brand-red transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-brand-gray hover:text-brand-red transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-brand-gray hover:text-brand-red transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-brand-gray hover:text-brand-red transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-gray text-sm mb-4 md:mb-0">
            © {currentYear} Clean N Fresh Helmet. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-brand-gray">
            <a href="#" className="hover:text-brand-red transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-red transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-brand-red transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
