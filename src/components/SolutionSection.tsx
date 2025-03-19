
import React from 'react';
import { ShieldCheck, Zap, Sparkles, FlaskConicalOff } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section id="solution" className="section bg-gradient-to-r from-brand-red to-brand-red/80 text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-white/20 text-white font-medium mb-2">
            The Solution
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Introducing India's First Advanced Helmet Cleaning Service
          </h2>
          <p className="text-white/80 text-lg">
            Revolutionary cleaning technology for a safer, fresher helmet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
            <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Cutting-Edge Technology</h3>
            <p className="text-white/80">
              Our advanced cleaning service sterilizes, deodorizes, and removes bacteria in minutes, not hours.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
            <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <FlaskConicalOff className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Safe & Effective</h3>
            <p className="text-white/80">
              No water, no harsh chemicals—just advanced technology that's gentle on your helmet but tough on germs.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 md:col-span-2 lg:col-span-1">
            <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <ShieldCheck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">99.9% Bacteria-Free</h3>
            <p className="text-white/80">
              Our process eliminates 99.9% of bacteria, ensuring your helmet is not just clean but hygienically safe.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
              <p className="text-white/80">
                Schedule your helmet cleaning today and ride with confidence knowing your helmet is truly clean.
              </p>
            </div>
            <a 
              href="#contact" 
              className="whitespace-nowrap px-6 py-3 bg-white text-brand-red rounded-md font-medium hover:bg-opacity-90 transition-all shadow-lg"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
