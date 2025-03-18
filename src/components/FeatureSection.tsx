
import React from 'react';
import { ShieldCheckIcon, SparklesIcon, TimerIcon } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheckIcon className="h-12 w-12 text-brand-red" />,
    title: "Safe & Effective",
    description: "Our cleaning process is designed to be safe for all helmet materials while effectively eliminating bacteria, odors, and grime."
  },
  {
    icon: <SparklesIcon className="h-12 w-12 text-brand-red" />,
    title: "Professional Results",
    description: "Achieve a level of cleanliness and restoration that simply isn't possible with home cleaning methods."
  },
  {
    icon: <TimerIcon className="h-12 w-12 text-brand-red" />,
    title: "Quick Turnaround",
    description: "Our efficient process ensures your helmet is cleaned, sanitized, and ready for use again in minimal time."
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="section relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-brand-lightRed text-brand-red font-medium mb-2">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Why Choose Our Cleaning Service
          </h2>
          <p className="text-gray-600 text-lg">
            We've developed specialized techniques to clean helmets better than ever before
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card rounded-xl p-6 shadow-lg">
              <div className="h-16 w-16 rounded-full bg-brand-red/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="relative mt-24 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-brand-red/80 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent)]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12">
            <div className="text-white max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to experience the difference?
              </h3>
              <p className="text-white/80 text-lg">
                Schedule your helmet cleaning today and see why riders everywhere trust our services.
              </p>
            </div>
            
            <a 
              href="#contact" 
              className="whitespace-nowrap px-6 py-3 bg-white text-brand-red rounded-md font-medium hover:bg-opacity-90 transition-all shadow-lg"
            >
              Schedule Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
