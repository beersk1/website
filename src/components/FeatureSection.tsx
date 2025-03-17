
import React from 'react';
import { ShieldCheck, SparklesIcon, Droplets, Clock, BadgeCheck, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <SparklesIcon className="h-6 w-6" />,
    title: 'Streak-Free Shine',
    description: 'Our specialized cleaning process ensures your helmet maintains a pristine, showroom-quality finish.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Safety Maintained',
    description: 'We use cleaning methods that preserve the structural integrity and safety features of your helmet.',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: <Droplets className="h-6 w-6" />,
    title: 'Odor Elimination',
    description: 'Advanced sanitization completely removes sweat odors and bacteria, leaving your helmet fresh.',
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    title: 'Premium Materials',
    description: 'We use only the highest-quality, helmet-safe cleaning agents and materials in our process.',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Quick Turnaround',
    description: 'Most services completed within 24-48 hours so you can get back to riding quickly.',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Long-Lasting Protection',
    description: 'Optional protective coating extends the cleanliness and repels dirt, water, and UV damage.',
    color: 'bg-red-50 text-red-600'
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-brand-lightBlue text-brand-blue font-medium mb-2">
            Our Benefits
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Why Choose Our Helmet Cleaning Service
          </h2>
          <p className="text-gray-600 text-lg">
            We combine cutting-edge cleaning technology with meticulous attention to detail to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl"
              style={{ opacity: 0 }}
              onLoad={(e) => {
                const target = e.currentTarget;
                setTimeout(() => {
                  target.style.opacity = '1';
                  target.style.transform = 'translateY(0)';
                }, 100 * index);
              }}
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease-out' }}
            >
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", feature.color)}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
