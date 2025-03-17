
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What types of helmets do you clean?",
    answer: "We clean all types of helmets including motorcycle, bicycle, sports, construction, and specialty helmets. Our cleaning processes are adapted to suit the specific materials and requirements of each helmet type."
  },
  {
    question: "How long does the cleaning process take?",
    answer: "Typically, our standard cleaning service takes 24-48 hours to complete. We also offer express services for those who need their helmets back sooner. The exact timeline will be provided when you schedule your service."
  },
  {
    question: "Is your cleaning process safe for all helmet materials?",
    answer: "Yes, we use specialized cleaning solutions and techniques that are safe for all helmet materials including polycarbonate, carbon fiber, fiberglass, and various liner materials. Our technicians are trained to handle each type of helmet appropriately."
  },
  {
    question: "Do you offer pickup and delivery services?",
    answer: "Yes, we offer convenient pickup and delivery within certain service areas. There may be a small additional fee depending on your location. You can also drop off and pick up your helmet at our facility."
  },
  {
    question: "How often should I have my helmet professionally cleaned?",
    answer: "For regular users, we recommend professional cleaning every 3-6 months. For heavy users, such as daily commuters or professional athletes, more frequent cleaning (every 1-3 months) may be beneficial to maintain optimal hygiene and comfort."
  },
  {
    question: "Can you remove stubborn odors from my helmet?",
    answer: "Absolutely! Our deep cleaning process is specifically designed to eliminate even the most persistent odors. We use specialized antimicrobial treatments that neutralize odor-causing bacteria rather than just masking the smell."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-brand-lightBlue text-brand-blue font-medium mb-2">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to the most common questions about our helmet cleaning services
          </p>
        </div>

        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 md:p-8 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-brand-dark">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
