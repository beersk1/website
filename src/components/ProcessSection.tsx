
import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, MessageCircle, Truck, ClipboardCheck, SparklesIcon } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Schedule',
    description: 'Book your helmet cleaning service online or by phone.',
    icon: <MessageCircle className="h-10 w-10 text-brand-blue" />
  },
  {
    number: '02',
    title: 'Drop-Off',
    description: "Bring your helmet to our location or arrange for pickup.",
    icon: <Truck className="h-10 w-10 text-brand-blue" />
  },
  {
    number: '03',
    title: 'Inspection',
    description: "We carefully assess your helmet's condition, identifying areas needing attention.",
    icon: <ClipboardCheck className="h-10 w-10 text-brand-blue" />
  },
  {
    number: '04',
    title: 'Cleaning',
    description: 'Our technicians use our specialized process to clean and sanitize your helmet.',
    icon: <SparklesIcon className="h-10 w-10 text-brand-blue" />
  },
  {
    number: '05',
    title: 'Return',
    description: 'After quality inspection, your helmet is returned looking like new.',
    icon: <CheckCircle2 className="h-10 w-10 text-brand-blue" />
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="section relative py-12 md:py-16">
      <div className="absolute inset-0 bg-gray-50 clip-diagonal"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-brand-lightBlue text-brand-blue font-medium mb-2">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            How We Work
          </h2>
          <p className="text-gray-600">
            Our streamlined process makes getting your helmet professionally cleaned effortless
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-5 flex flex-col items-center text-center"
            >
              <div className="h-16 w-16 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <div className="inline-flex items-center rounded-full px-2 py-0.5 text-xs bg-brand-blue/10 text-brand-blue font-medium mb-2">
                Step {step.number}
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
