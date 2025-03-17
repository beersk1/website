
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, SparklesIcon } from 'lucide-react';

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
              <SparklesIcon className="h-4 w-4 mr-1" />
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
              <a href="#contact" className="btn-primary inline-flex items-center justify-center group">
                Schedule Service
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#process" className="btn-secondary">
                How It Works
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
              <div className="glass-card absolute -bottom-10 -left-10 p-4 rounded-xl shadow-lg animate-fadeIn animate-delay-400 hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center border-2 border-white">
                        <span className="text-xs font-medium text-brand-blue">✓</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium">
                    <p className="text-brand-dark">100% Satisfaction</p>
                    <p className="text-gray-500 text-xs">Trusted by professionals</p>
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

export default HeroSection;
