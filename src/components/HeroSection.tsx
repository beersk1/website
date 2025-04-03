import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      heroRef.current.style.setProperty("--x", `${x}`);
      heroRef.current.style.setProperty("--y", `${y}`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center pt-24 pb-16 overflow-hidden relative"
      style={
        {
          "--x": "0.5",
          "--y": "0.5",
          background:
            "radial-gradient(circle at calc(var(--x) * 100%) calc(var(--y) * 100%), rgba(255, 235, 238, 0.5), rgba(255, 255, 255, 0) 40%)",
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-red opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-brand-lightRed opacity-30 rounded-full filter blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-brand-lightRed text-brand-red font-medium mb-2 animate-fadeIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v3m6-3v3M6 3v3M3 9h18M3 11v6c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-6"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
                <path d="M10 9H8"></path>
              </svg>
              Professional Helmet Cleaning
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-brand-black animate-fadeIn animate-delay-100">
              India's First Advanced
              <span className="block text-brand-red">
                Helmet Cleaning Service
              </span>
            </h1>

            <p className="text-lg md:text-xl text-brand-gray max-w-xl animate-fadeIn animate-delay-200">
              Your helmet is dirtier than you think—packed with sweat, bacteria,
              and odors. Our advanced cleaning service uses cutting-edge
              technology to sterilize, deodorize, and restore freshness, along
              with exterior cleaning & polishing for a spotless finish.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeIn animate-delay-300">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://wa.me/+919920166621"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1 bg-[#25D366] hover:bg-[#128C7E] text-white"
              >
                <span className="text-white mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-brand-lightRed/30 to-transparent rounded-full blur-2xl"></div>
              <div className="glass-card p-4 rounded-2xl overflow-hidden shadow-xl animate-float">
                <img
                  src="Images/Clean_Helmet.jpg"
                  alt="Clean motorcycle helmet"
                  className="w-full h-auto object-cover rounded-xl transform transition-transform duration-700 hover:scale-[1.02]"
                  style={{ aspectRatio: "3/3" }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
