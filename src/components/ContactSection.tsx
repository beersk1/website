import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    // You would typically send this data to your backend or a form service
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <div className="glass-card rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 md:p-10 bg-gradient-to-br from-brand-red to-brand-red/80 text-white">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-white/80 mb-8">
                  Ready to experience professional helmet cleaning? Reach out to
                  us for appointments, quotes, or any questions.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-white/70 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Our Location</h3>
                      <p className="text-white/70">
                        69, Mahendra Chambers
                        <br />
                        Dr. D.N. Road, Mumbai-400001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-white/70 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-white/70">
                        info@cnfhelmet.com
                        <br />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-white/70 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-white/70">
                        +91 9920166621
                        <br />
                        +91 9653218523
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10 bg-white">
              {/* <h2 className="text-2xl font-bold text-brand-dark mb-6">
                Send Us a Message
              </h2> */}

              {/* <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service Type
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                  >
                    <option value="standard">Standard Cleaning</option>
                    <option value="premium">
                      Premium Cleaning & Protection
                    </option>
                    <option value="emergency">Express Service (24h)</option>
                    <option value="other">Other/Custom Request</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-brand-red hover:bg-brand-red/90 text-white w-full flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
