import React from "react";
import { AlertCircle, Droplet, AlertTriangle, BookOpen } from "lucide-react";

const facts = [
  {
    icon: <AlertCircle className="h-6 w-6 text-brand-red" />,
    title: "Bacteria Hotspot",
    description:
      "A helmet can hold 20,000+ bacteria per square inch—more than a toilet seat.",
  },
  {
    icon: <Droplet className="h-6 w-6 text-brand-red" />,
    title: "Sweat & Oil Trap",
    description:
      "Sweat, oil, and dust get trapped in the padding, creating an ideal environment for bacteria.",
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-brand-red" />,
    title: "Ineffective Cleaning",
    description:
      "Traditional washing methods don't eliminate bacteria from the inner lining.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-brand-red" />,
    title: "Health Risks",
    description:
      "Dirty helmets can cause skin irritations, acne, and other health issues.",
  },
];

const FactsSection = () => {
  return (
    <section id="facts" className="section bg-gray-50 clip-diagonal py-16 mb-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-brand-lightRed text-brand-red font-medium mb-2">
            The Facts
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            Shocking Helmet Hygiene Facts
          </h2>
          <p className="text-gray-600 text-lg">
            What you don't know about your helmet could be affecting your health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1 rounded-full bg-brand-red/10 p-2">
                  {fact.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-1">
                    {fact.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{fact.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
