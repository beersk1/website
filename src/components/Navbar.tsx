
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ShieldCheckIcon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <ShieldCheckIcon className="h-8 w-8 text-brand-blue" />
          <span className="font-display font-bold text-xl text-brand-dark">
            HelmetShine
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-brand-dark/80 hover:text-brand-blue transition-colors"
          >
            Features
          </a>
          <a
            href="#process"
            className="text-brand-dark/80 hover:text-brand-blue transition-colors"
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-brand-dark/80 hover:text-brand-blue transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-brand-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-6 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-brand-dark/80 hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#process"
              className="text-brand-dark/80 hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-brand-dark/80 hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
