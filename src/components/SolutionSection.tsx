
import React from 'react';
import { ShieldCheck, Zap, Sparkles, FlaskConicalOff } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section id="solution" className="section bg-gradient-to-r from-brand-red to-brand-red/80 text-white py-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-white/20 text-white font-medium mb-2">
            The Solution
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Introducing India's First Advanced Helmet Cleaning Service
          </h2>
          <p className="text-white/80 text-lg">
            Revolutionary cleaning technology for a safer, fresher helmet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
            <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <Zap className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Cutting-Edge Technology</h3>
            <p className="text-white/80">
              Our advanced cleaning service sterilizes, deodorizes, and removes bacteria in minutes, not hours.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
            <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <FlaskConicalOff className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Safe & Effective</h3>
            <p className="text-white/80">
              No water, no harsh chemicals—just advanced technology that's gentle on your helmet but tough on germs.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 md:col-span-2 lg:col-span-1">
            <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <ShieldCheck className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">99.9% Bacteria-Free</h3>
            <p className="text-white/80">
              Our process eliminates 99.9% of bacteria, ensuring your helmet is not just clean but hygienically safe.
            </p>
          </div>
        </div>
        
        <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-bold mb-2">Ready to Experience the Difference?</h3>
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
