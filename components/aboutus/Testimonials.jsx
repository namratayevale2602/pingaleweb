// components/Testimonials.jsx
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Quote, 
  Pause, 
  Play, 
  Users, 
  Heart, 
  Shield,
  Award,
  TrendingUp,
  ThumbsUp,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const autoPlayRef = useRef(null);
  const progressRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      role: "Business Owner",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 5,
      text: "Beyond Life didn't just sell me insurance; they gave me peace of mind. When my family needed it most, the claim was processed within 48 hours. Their team held my hand through the entire process. I've since referred 7 friends to them.",
      date: "2 months ago",
      service: "Life Insurance",
      verified: true,
      featured: true,
      videoTestimonial: false
    },
    {
      id: 2,
      name: "Priya Mehta",
      role: "IT Professional",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 5,
      text: "Started my investment journey with ₹5000 monthly through mutual funds. Within 3 years, my portfolio has grown by 35%. The quarterly reviews keep me motivated. Best financial decision I've made!",
      date: "3 months ago",
      service: "Mutual Funds",
      verified: true,
      featured: false,
      videoTestimonial: false
    },
    {
      id: 3,
      name: "Dr. Amit Kumar",
      role: "Cardiologist",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 5,
      text: "As a doctor, I understand the importance of health coverage. When my father needed emergency surgery, Beyond Life's health insurance covered everything - no questions asked. 10/10 service!",
      date: "1 month ago",
      service: "Health Insurance",
      verified: true,
      featured: true,
      videoTestimonial: false
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Startup Founder",
      location: "Hyderabad",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 5,
      text: "Their retirement planning calculator was eye-opening. Now at 38, I'm on track to retire at 55 with a corpus of 3 Cr. The personalized advice made all the difference.",
      date: "4 months ago",
      service: "Retirement Planning",
      verified: true,
      featured: false,
      videoTestimonial: false
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Automobile Engineer",
      location: "Pune",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 5,
      text: "Got comprehensive car insurance at 20% lower premium than competitors. The app is super intuitive, and I can manage everything digitally. Modern, efficient, trustworthy.",
      date: "2 months ago",
      service: "General Insurance",
      verified: true,
      featured: false,
      videoTestimonial: false
    },
    {
      id: 6,
      name: "Anjali Desai",
      role: "School Principal",
      location: "Ahmedabad",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 5,
      text: "Their child education planning helped me save systematically. My daughter will attend her dream college without any financial stress. Thank you for making this possible!",
      date: "1 month ago",
      service: "Child Education",
      verified: true,
      featured: false,
      videoTestimonial: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Stories', icon: Users },
    { id: 'Life Insurance', label: 'Life Insurance', icon: Shield },
    { id: 'Mutual Funds', label: 'Mutual Funds', icon: TrendingUp },
    { id: 'Health Insurance', label: 'Health Insurance', icon: Heart },
  ];

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.service === activeFilter);

  const featuredTestimonials = testimonials.filter(t => t.featured);

  useEffect(() => {
    if (isAutoPlaying && !isHovering && filteredTestimonials.length > 0) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isHovering, filteredTestimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
    resetAutoPlay();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    if (isAutoPlaying && filteredTestimonials.length > 0) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setCurrentIndex(0);
    resetAutoPlay();
  };

  const currentTestimonial = filteredTestimonials[currentIndex];

  if (filteredTestimonials.length === 0) {
    return null;
  }

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#f0faff] via-white to-[#f0faff]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#1281bd]/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#074a6b]/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1281bd]/[0.02] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          

          <h2 className="text-4xl md:text-5xl mb-6 bg-clip-text text-gray-800">
            Real {" "}
            <span className='text-[#0f4d6a]'>Stories,</span>
            Real 
            <span className='text-[#0f4d6a]'> Impact</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from families who found financial security and peace of mind through our guidance
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#074a6b] bg-white/50 backdrop-blur-sm'
              }`}
            >
              {activeFilter === filter.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#074a6b] to-[#1281bd] rounded-full shadow-lg animate-fadeIn"></div>
              )}
              <div className="relative flex items-center gap-2 z-10">
                <filter.icon className="w-4 h-4" />
                <span>{filter.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Main Testimonial Carousel */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-3 hover:shadow-2xl transition-all hover:scale-110 hidden lg:block"
            style={{ color: '#074a6b' }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-3 hover:shadow-2xl transition-all hover:scale-110 hidden lg:block"
            style={{ color: '#074a6b' }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={toggleAutoPlay}
            className="absolute top-0 right-0 z-20 bg-white shadow-md rounded-full p-2 hover:shadow-lg transition-all"
            style={{ color: '#074a6b' }}
          >
            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl">
            {/* Featured Badge */}
            {currentTestimonial.featured && (
              <div className="absolute top-6 left-6 z-10">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                  <Award className="w-3 h-3" />
                  Featured Story
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Image & Meta */}
              <div className="relative h-80 md:h-auto bg-gradient-to-br from-[#074a6b] to-[#1281bd] p-8 flex flex-col justify-between">
                <Quote className="w-12 h-12 text-white/20 absolute top-8 right-8" />
                
                {/* Client Image */}
                <div className="relative z-10">
                  <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-white/30 shadow-xl mb-6">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-white/80 mb-2">{currentTestimonial.role}</p>
                  
                  <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{currentTestimonial.location}</span>
                  </div>

                  {/* Verification Badge */}
                  {currentTestimonial.verified && (
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified Client
                    </div>
                  )}
                </div>

                {/* Service Tag */}
                <div className="mt-auto pt-6">
                  <div className="inline-block bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <p className="text-xs text-white/80">Service Availed</p>
                    <p className="text-sm font-semibold text-white">{currentTestimonial.service}</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Testimonial Content */}
              <div className="p-8 md:p-10 flex flex-col justify-between">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < currentTestimonial.rating
                          ? 'fill-current text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-[#1281bd]/30" />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  "{currentTestimonial.text}"
                </p>

                
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          {/* {isAutoPlaying && (
            <div className="absolute -bottom-8 left-0 right-0 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                ref={progressRef}
                className="h-full bg-gradient-to-r from-[#074a6b] to-[#1281bd] transition-all duration-[5000ms] linear"
                style={{ width: '100%' }}
                key={currentIndex}
              />
            </div>
          )} */}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {filteredTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                resetAutoPlay();
              }}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 h-2 bg-gradient-to-r from-[#074a6b] to-[#1281bd] rounded-full'
                  : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;