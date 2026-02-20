"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Shield, Heart, Users, Clock } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: '/images/insuarance1.png',
      alt: 'Family protecting their home',
     title: 'Health & Wellness'
    },
    {
      id: 2,
      image: '/images/insuarance2.png',
      alt: 'Business insurance',
      title: 'Vehicle Security'
    },
    {
      id: 3,
      image: '/images/insuarance3.png',
      alt: 'Health insurance',
       title: 'Family Protection'
    },
    
  ];

  const features = [
    { icon: Shield, text: '100% Secure Coverage' },
    { icon: Heart, text: 'Care & Support' },
    { icon: Users, text: '1M+ Happy Clients' },
    { icon: Clock, text: '24/7 Claim Support' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative bg-linear-to-br from-[#074a6b] to-[#2ba5ea] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Trusted Insurance Partner Since 1995</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Protect What
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-yellow-100">
                  Matters Most
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-lg">
                Comprehensive insurance solutions tailored to your needs. 
                Get peace of mind with our reliable coverage plans.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
              onClick={() => window.location.href = "/contactus"}
              className="group bg-white text-[#074a6b] px-8 py-4 rounded-lg font-semibold 
                hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300
                flex items-center space-x-2">
                <span>Get Quote</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
              onClick={() => window.location.href = "/calculators"}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold 
                hover:bg-white/10 hover:border-white transition-all duration-300
                backdrop-blur-sm">
                Learn More
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 
                    bg-white/20 rounded-full mb-2 backdrop-blur-sm">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-white/90">{feature.text}</p>
                </div>
              ))}
            </div>

           
          </div>

          {/* Right Side - Image Slider */}
          <div className="relative lg:h-125">
            {/* Slider Container */}
            <div className="relative h-100 sm:h-125 lg:h-full rounded-2xl overflow-hidden">
              {/* Slides - FIXED IMAGE */}
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 transform
                    ${index === currentSlide 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-110'
                    }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                    priority={index === 0 ? true : false}
                  />
                
                </div>
              ))}

              

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-full
                      ${index === currentSlide 
                        ? 'w-8 h-2 bg-white' 
                        : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                      }`}
                  />
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute -bottom-5 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;