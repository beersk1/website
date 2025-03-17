
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I couldn't believe how new my motorcycle helmet looked after their cleaning service. All the grime and built-up residue was completely gone, and the visor was crystal clear.",
    author: "Michael R.",
    title: "Motorcycle Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    quote: "After a full racing season, my helmet was in rough shape. Their cleaning service not only restored the appearance but eliminated the odor completely. Highly recommended!",
    author: "Sarah L.",
    title: "Amateur Racer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    quote: "As someone who uses their helmet daily for commuting, the quick turnaround time and quality of service exceeded my expectations. Will definitely use again.",
    author: "James T.",
    title: "Daily Commuter",
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
    rating: 5
  },
  {
    quote: "I was skeptical at first, but the difference in my bicycle helmet is remarkable. The padding is fresh, and the shell looks like new. Worth every penny.",
    author: "Emma W.",
    title: "Cycling Enthusiast",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-brand-lightBlue text-brand-blue font-medium mb-2">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it - hear from the people who trust us with their helmets
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-6 md:p-10 shadow-xl">
            <div className="absolute top-6 right-10 flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].author}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="flex-1">
                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-brand-dark">{testimonials[activeIndex].author}</p>
                  <p className="text-gray-500">{testimonials[activeIndex].title}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-brand-blue hover:text-white transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-brand-blue hover:text-white transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full mx-1 transition-all duration-200",
                  index === activeIndex 
                    ? "bg-brand-blue w-6" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
