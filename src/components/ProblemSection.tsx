import React from "react";
import { Droplets, FlaskConical, ThumbsDown } from "lucide-react";

const problems = [
  {
    icon: <Droplets className="h-12 w-12 text-brand-red" />,
    title: "Water Damage",
    description:
      "Water cleaning weakens the helmet's foam, affecting its safety in case of impact.",
    imageSrc: "/Images/rsz_1helmet_foam.jpg",
  },
  {
    icon: <FlaskConical className="h-12 w-12 text-brand-red" />,
    title: "Harsh Chemicals",
    description:
      "Some cleaning chemicals cause skin irritation and damage helmet materials.",
    imageSrc: "/Images/Harsh_Chemicals.jpg",
  },
  {
    icon: <ThumbsDown className="h-12 w-12 text-brand-red" />,
    title: "Poor Cleaning Practices",
    description:
      "Helmets are rarely cleaned properly, leading to bad odors, acne, and hygiene issues.",
    imageSrc: "/Images/Poor_cleaning.jpg",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section py-8 mb-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-brand-lightRed text-brand-red font-medium mb-2">
            The Problem
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            What's Wrong with Current Cleaning Methods?
          </h2>
          <p className="text-gray-600 text-lg">
            Traditional helmet cleaning practices do more harm than good
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={problem.imageSrc}
                  alt={problem.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="h-14 w-14 rounded-full bg-brand-red/10 flex items-center justify-center mb-3 -mt-10 border-4 border-white mx-auto">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2 text-center">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
