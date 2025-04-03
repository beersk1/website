import React from "react";
import { CheckCircle2, Zap, Clock, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Zap className="h-8 w-8 text-brand-red" />,
    title: "Deep Sterilization",
    description: "Kills 99.9% of germs & bacteria from your helmet's interior.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-brand-red" />,
    title: "Odor Removal",
    description: "Eliminates sweat & bad smells for a fresh riding experience.",
  },
  {
    icon: <Clock className="h-8 w-8 text-brand-red" />,
    title: "Quick & Efficient",
    description: "Get a completely fresh helmet in just minutes!",
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-brand-red" />,
    title: "Exterior Cleaning & Polishing",
    description: "Restores shine and removes dirt for a brand-new look.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section relative py-8 mb-5">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-brand-lightRed text-brand-red font-medium mb-2">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            We Provide
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive cleaning solutions for all types of helmets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-5 shadow-lg flex flex-col items-center text-center transform transition-transform hover:scale-105"
            >
              <div className="h-16 w-16 rounded-full bg-brand-red/10 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-3 text-brand-red">
                <CheckCircle2 className="h-6 w-6 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
