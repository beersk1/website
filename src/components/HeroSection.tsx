
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, WhatsappIcon } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--x', `${x}`);
      heroRef.current.style.setProperty('--y', `${y}`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center pt-24 pb-16 overflow-hidden relative"
      style={{ 
        '--x': '0.5', 
        '--y': '0.5',
        background: 'radial-gradient(circle at calc(var(--x) * 100%) calc(var(--y) * 100%), rgba(224, 242, 254, 0.5), rgba(255, 255, 255, 0) 40%)'
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-blue opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-brand-lightBlue opacity-30 rounded-full filter blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-brand-lightBlue text-brand-blue font-medium mb-2 animate-fadeIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v3m6-3v3M6 3v3M3 9h18M3 11v6c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-6"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
                <path d="M10 9H8"></path>
              </svg>
              Professional Helmet Cleaning
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-brand-dark animate-fadeIn animate-delay-100">
              Keep Your Helmet 
              <span className="block text-brand-blue">Pristine & Protected</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl animate-fadeIn animate-delay-200">
              Professional cleaning solutions tailored specifically for all types of helmets. Restore shine, eliminate odors, and extend the life of your protective gear.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeIn animate-delay-300">
              <a href="#contact" className="btn-primary inline-flex items-center justify-center">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="https://wa.me/yourphonenumber" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                <WhatsappIcon className="mr-2 h-5 w-5 text-green-600" />
                WhatsApp Us
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-brand-lightBlue/30 to-transparent rounded-full blur-2xl"></div>
              <div className="glass-card p-4 rounded-2xl overflow-hidden shadow-xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1591190269445-b8fcfea8ded9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Clean motorcycle helmet" 
                  className="w-full h-auto object-cover rounded-xl transform transition-transform duration-700 hover:scale-[1.02]"
                  style={{ aspectRatio: '4/3' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
