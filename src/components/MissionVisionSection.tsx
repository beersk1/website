
import React from 'react';

const MissionVisionSection = () => {
  return (
    <section id="about" className="section bg-gray-50 py-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-brand-lightRed text-brand-red font-medium mb-2">
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 text-lg">
            Dedicated to excellence in helmet care and maintenance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-2xl p-6 shadow-lg">
            <div className="h-14 w-14 rounded-full bg-gradient-to-r from-brand-red to-brand-red/80 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"/>
                <path d="M6 12h12"/>
                <path d="M12 6v12"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To provide the highest quality helmet cleaning and maintenance services that extend the life of protective gear, ensuring safety and comfort for riders and athletes of all kinds. We strive to make professional helmet care accessible, convenient, and environmentally responsible.
            </p>
          </div>
          
          <div className="glass-card rounded-2xl p-6 shadow-lg">
            <div className="h-14 w-14 rounded-full bg-gradient-to-r from-brand-red to-brand-red/80 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be recognized as the leading helmet maintenance service worldwide, setting the industry standard for quality, innovation, and customer satisfaction. We envision a future where regular professional helmet cleaning is an essential part of every rider's safety routine, and where our sustainable practices contribute to a healthier planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
