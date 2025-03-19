
import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, MessageCircle, Truck, ClipboardCheck, SparklesIcon } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Schedule',
    description: 'Book your helmet cleaning service online or by phone.',
    icon: <MessageCircle className="h-8 w-8 text-brand-red" />
  },
  {
    number: '02',
    title: 'Drop-Off',
    description: "Bring your helmet to our location or arrange for pickup.",
    icon: <Truck className="h-8 w-8 text-brand-red" />
  },
  {
    number: '03',
    title: 'Inspection',
    description: "We carefully assess your helmet's condition, identifying areas needing attention.",
    icon: <ClipboardCheck className="h-8 w-8 text-brand-red" />
  },
  {
    number: '04',
    title: 'Cleaning',
    description: 'Our technicians use our specialized process to clean and sanitize your helmet.',
    icon: <SparklesIcon className="h-8 w-8 text-brand-red" />
  },
  {
    number: '05',
    title: 'Return',
    description: 'After quality inspection, your helmet is returned looking like new.',
    icon: <CheckCircle2 className="h-8 w-8 text-brand-red" />
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="section relative py-6 md:py-10">
      <div className="absolute inset-0 bg-gray-50 clip-diagonal"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-brand-lightRed text-brand-red font-medium mb-2">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-3">
            How We Work
          </h2>
          <p className="text-brand-gray">
            Our streamlined process makes getting your helmet professionally cleaned effortless
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-2">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-3 flex flex-col items-center text-center"
            >
              <div className="h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center mb-2">
                {step.icon}
              </div>
              <div className="inline-flex items-center rounded-full px-2 py-0.5 text-xs bg-brand-red/10 text-brand-red font-medium mb-1">
                Step {step.number}
              </div>
              <h3 className="text-base font-bold text-brand-black mb-1">{step.title}</h3>
              <p className="text-brand-gray text-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
