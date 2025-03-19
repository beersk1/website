
import React from 'react';
import { Droplets, FlaskConical, ThumbsDown } from 'lucide-react';

const problems = [
  {
    icon: <Droplets className="h-12 w-12 text-brand-red" />,
    title: "Water Damage",
    description: "Water cleaning weakens the helmet's foam, affecting its safety in case of impact.",
    imageSrc: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <FlaskConical className="h-12 w-12 text-brand-red" />,
    title: "Harsh Chemicals",
    description: "Some cleaning chemicals cause skin irritation and damage helmet materials.",
    imageSrc: "https://images.unsplash.com/photo-1615658629900-1dad9a1e3e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <ThumbsDown className="h-12 w-12 text-brand-red" />,
    title: "Poor Cleaning Practices",
    description: "Helmets are rarely cleaned properly, leading to bad odors, acne, and hygiene issues.",
    imageSrc: "https://images.unsplash.com/photo-1612385164707-097bbe4c0b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-brand-lightRed text-brand-red font-medium mb-2">
            The Problem
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            What's Wrong with Current Cleaning Methods?
          </h2>
          <p className="text-gray-600 text-lg">
            Traditional helmet cleaning practices do more harm than good
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={problem.imageSrc} 
                  alt={problem.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="h-16 w-16 rounded-full bg-brand-red/10 flex items-center justify-center mb-4 -mt-12 border-4 border-white mx-auto">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 text-center">{problem.title}</h3>
                <p className="text-gray-600 text-center">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
