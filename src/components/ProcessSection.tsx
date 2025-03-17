
import React from 'react';
import { cn } from '@/lib/utils';

const steps = [
  {
    number: '01',
    title: 'Schedule',
    description: 'Book your helmet cleaning service online or by phone. Choose a convenient time for drop-off or pickup.',
    imageUrl: 'https://images.unsplash.com/photo-1586980368323-29454b8e37a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    number: '02',
    title: 'Inspection',
    description: 'We carefully assess your helmet's condition, identifying areas needing special attention.',
    imageUrl: 'https://images.unsplash.com/photo-1570655652364-2e0a67455ac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    number: '03',
    title: 'Cleaning',
    description: 'Our technicians use our specialized process to clean, sanitize, and restore your helmet.',
    imageUrl: 'https://images.unsplash.com/photo-1594869482095-0be3521e581a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    number: '04',
    title: 'Finish & Delivery',
    description: 'After quality inspection, your helmet is returned looking and smelling like new.',
    imageUrl: 'https://images.unsplash.com/photo-1549363330-ce2c181bfcce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="section relative">
      <div className="absolute inset-0 bg-gray-50 clip-diagonal"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-brand-lightBlue text-brand-blue font-medium mb-2">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            How We Work
          </h2>
          <p className="text-gray-600 text-lg">
            Our streamlined process makes getting your helmet professionally cleaned effortless
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={cn(
                "flex flex-col md:flex-row items-center gap-8 md:gap-16",
                index % 2 !== 0 && "md:flex-row-reverse"
              )}
            >
              <div className="w-full md:w-1/2 space-y-4">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-brand-blue/10 text-brand-blue font-medium">
                  Step {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-dark">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue/20 to-brand-lightBlue/20 rounded-xl blur-xl opacity-70"></div>
                  <img 
                    src={step.imageUrl} 
                    alt={`Step ${step.number}: ${step.title}`}
                    className="relative rounded-xl w-full h-auto object-cover shadow-lg"
                    style={{ aspectRatio: '16/9' }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
