// components/services/Services.jsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaHeart, 
  FaEye, 
  FaHandsHelping, 
  FaHandshake,
  FaShieldAlt,
  FaChartLine,
  FaUmbrella,
  FaQuestionCircle,
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaClock,
  FaRupeeSign,
  FaHome,
  FaHospital,
  FaGraduationCap,
  FaQuoteRight,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import PopupForm from '../popup/PopupForm';

export default function Services() {
  const [activeValue, setActiveValue] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const values = [
    {
      title: "Personalised Path",
      icon: <FaHeart className="text-3xl" />,
      description: "Gain clarity about your financial way forward with a custom-created plan that matches your goals, time frame, and present-day financial life.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Objective Eye",
      icon: <FaEye className="text-3xl" />,
      description: "Be confident of every decision ahead as we offer you our unbiased suggestions, always keeping your goals in mind.",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Accountability",
      icon: <FaHandsHelping className="text-3xl" />,
      description: "Stay assured with regular reviews of your progress, and suggestions to ensure your investments stay aligned to your financial goals.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Lasting Partnership",
      icon: <FaHandshake className="text-3xl" />,
      description: "Count on us to partner you on this long-term financial journey, with our experience, meticulous research, and objective recommendations.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const timelineSteps = [
    {
      number: "01",
      title: "Our First Talk",
      description: "You are welcome to a no-obligations introductory meeting where we discuss your life, needs, ambitions, and the dream future you wish to create.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "02",
      title: "Receive Personalised Report",
      description: "Based on your financial goals, current lifestyle, and time frame, we chart a suitability report with appropriate options like mutual funds and insurance.",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "03",
      title: "Start Your Financial Journey",
      description: "Once you're happy with the proposal, our operations team carries out the approved transactions. You've begun the journey towards your financial goals.",
      image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "04",
      title: "Regular Reviews",
      description: "We present a review report every six months to track progress and make suitable adjustments that support your financial goals better.",
      image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "05",
      title: "Best-in-class Technology",
      description: "Powered by Salesforce, Ace-MF, and Morningstar, we ensure seamless experience and well-documented reviews with the best analysis tools.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Enhanced service cards with emotional stories
  const services = [
    {
      id: "life-insurance",  // Add this
      title: "Life Insurance",
      tagline: "Because their dreams don't end with you",
      icon: <FaShieldAlt className="text-4xl" />,
      description: "Protect your loved ones' financial future with comprehensive life coverage, ensuring they maintain their lifestyle even in your absence.",
      image: "/images/lifeinsurance.jpg",
      benefits: [
        { text: "Income replacement for family", icon: <FaUsers /> },
        { text: "Children's education secured", icon: <FaGraduationCap /> },
        { text: "Home loan protection", icon: <FaHome /> },
        { text: "Tax benefits under 80C", icon: <FaCheckCircle /> }
      ],
    },
    {
      id: "mutual-funds",  // Add this
      title: "Mutual Funds",
      tagline: "Grow your wealth, fulfill your dreams",
      icon: <FaChartLine className="text-4xl" />,
      description: "Grow your wealth through professionally managed diversified portfolios, tailored to your risk appetite and financial goals.",
      image: "/images/mutualfund.jpg",
      benefits: [
        { text: "Start with as low as ₹500", icon: <FaRupeeSign /> },
        { text: "Beat inflation over time", icon: <FaChartLine /> },
        { text: "Professional fund management", icon: <FaUsers /> },
        { text: "Tax saving options", icon: <FaCheckCircle /> }
      ],
    },
    {
      id: "general-insurance",  // Add this
      title: "General Insurance",
      tagline: "Life is unpredictable, we'll prepare you",
      icon: <FaUmbrella className="text-4xl" />,
      description: "Safeguard your assets - health, property, and vehicles - against unexpected events with comprehensive coverage plans.",
      image: "/images/genralinsurance.jpg",
      benefits: [
        { text: "Comprehensive health coverage", icon: <FaHospital /> },
        { text: "Critical illness protection", icon: <FaHeart /> },
        { text: "Asset & vehicle security", icon: <FaHome /> },
        { text: "Cashless hospitalization", icon: <FaClock /> }
      ],
    }
  ];

  const faqs = [
    {
      question: "Why is insurance important?",
      answer: "Insurance provides financial security against unexpected events. It ensures your loved ones are protected, your assets are safe, and your long-term goals remain achievable even in challenging times."
    },
    {
      question: "How do you choose the right insurance?",
      answer: "We assess your needs, family situation, financial goals, and risk tolerance to recommend the most suitable coverage. Our unbiased approach ensures you get what truly matters for your unique situation."
    },
    {
      question: "What makes our service different?",
      answer: "We provide end-to-end personalized guidance - from needs analysis to product selection and regular reviews. Our technology-driven approach ensures transparency and accountability at every step."
    },
    {
      question: "How often should I review my insurance?",
      answer: "We recommend reviewing your insurance portfolio every 6-12 months or when significant life events occur (marriage, children, home purchase, career changes)."
    }
  ];

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
    <div className="bg-white">
      {/* Hero Section with Emotional Hook */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#f0faff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6 leading-tight" style={{ color: '#074a6b' }}>
              Your Family's Future Is
              <span className="block text-3xl md:text-4xl mt-2" style={{ color: '#1281bd' }}>
                Priceless. We Protect It.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Be it your child's education, your dream retirement, or protecting your family from life's uncertainties – 
              We're here to ensure your loved ones always feel your love, even in your absence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity text-lg"
                style={{ backgroundColor: '#1281bd' }}
              >
                Protect My Family Today
              </button>
              <button 
              onClick={openPopup}
                className="px-8 py-4 rounded-lg font-semibold border-2 transition-all hover:bg-white text-lg"
                style={{ borderColor: '#1281bd', color: '#074a6b' }}
              >
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section with Emotional Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#074a6b' }}>
              Your Dreams, Our Commitment
            </h2>
            <p className="text-xl text-gray-600">
              Every number tells a story. Every policy protects a dream. 
              Let us help you write your family's success story.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
                <div 
                key={service.id || index}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 bg-white rounded-2xl overflow-hidden transition-shadow cursor-pointer`}
                >
                  {/* Image Side */}
                  <div className="lg:w-1/2 relative h-64 lg:h-95">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-1/2 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl" style={{ backgroundColor: '#f0faff' }}>
                        <div style={{ color: '#1281bd' }}>{service.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-2xl" style={{ color: '#074a6b' }}>
                          {service.title}
                        </h3>
                        <p className="text-sm italic" style={{ color: '#1281bd' }}>
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{service.description}</p> 

                    {/* Benefits */}
                    <div className="grid grid-cols-2 gap-4">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <span style={{ color: '#1281bd' }}>{benefit.icon}</span>
                          <span className="text-gray-600">{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section with Interactive Images */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12" style={{ color: '#074a6b' }}>
            More Than Just Advisors — We're Your Partners
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side - Image */}
            <div className="lg:w-1/2">
              <div className="relative h-96 lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={values[activeValue].image}
                  alt={values[activeValue].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl mb-2">{values[activeValue].title}</h3>
                  <p className="text-sm opacity-90">{values[activeValue].description}</p>
                </div>
              </div>
            </div>

            {/* Right side - Values List */}
            <div className="lg:w-1/2 space-y-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all ${
                    activeValue === index ? 'ring-2 ring-[#1c82bb]' : ''
                  }`}
                  style={{ ringColor: activeValue === index ? '#1281bd' : 'transparent' }}
                  onClick={() => setActiveValue(index)}
                >
                  <div className="p-4 flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ 
                      backgroundColor: activeValue === index ? '#1281bd' : '#f0faff',
                      color: activeValue === index ? 'white' : '#1281bd'
                    }}>
                      {value.icon}
                    </div>
                    <h3 className="text-lg" style={{ color: '#074a6b' }}>
                      {value.title}
                    </h3>
                    <FaArrowRight 
                      className="ml-auto transition-transform"
                      style={{ 
                        color: '#1281bd',
                        transform: activeValue === index ? 'rotate(90deg)' : 'none'
                      }}
                    />
                  </div>
                  
                  {activeValue === index && (
                    <div className="px-4 pb-4 pl-16 text-gray-600">
                      <p className="text-sm">{value.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work - Timeline */}
      <section className="py-20" style={{ backgroundColor: '#f0faff' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4" style={{ color: '#074a6b' }}>
            Your Journey to Financial Peace of Mind
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Simple, transparent steps to secure your family's future
          </p>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            <div className="space-y-12">
              {timelineSteps.map((step, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 z-10" 
                       style={{ borderColor: '#1281bd' }}>
                  </div>
                  
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48 w-full">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-4xl font-bold mb-2" style={{ color: '#1281bd', opacity: 0.2 }}>
                          {step.number}
                        </div>
                        <h3 className="text-xl mb-2" style={{ color: '#074a6b' }}>
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4" style={{ color: '#074a6b' }}>
            Have Questions? We're Here to Help
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Everything you need to know about securing your family's future
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <details className="group">
                  <summary className="flex items-center gap-3 p-4 cursor-pointer list-none hover:bg-gray-50">
                    <FaQuestionCircle style={{ color: '#1281bd' }} />
                    <span className="font-semibold" style={{ color: '#074a6b' }}>
                      {faq.question}
                    </span>
                    <FaArrowRight className="ml-auto transition-transform group-open:rotate-90" 
                                 style={{ color: '#1281bd' }} />
                  </summary>
                  <div className="px-4 pb-4 pl-12 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Emotional Touch */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#074a6b' }}>
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Family background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl mb-4 text-white">
            Your Family's Dreams Deserve Protection
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Don't leave their future to chance. Start your journey to financial security today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg bg-white"
              style={{ color: '#074a6b' }}
            >
              <FaPhone className="inline mr-2" />
              Schedule Free Call
            </button>
            <button 
              className="px-8 py-4 rounded-lg font-semibold border-2 border-white text-white hover:bg-white/10 transition-all text-lg"
            >
              <FaEnvelope className="inline mr-2" />
              Get Free Guide
            </button>
          </div>
          <p className="text-sm mt-6 text-white/80">
            *No obligations. Just honest advice about your family's future.
          </p>
        </div>
      </section>
    </div>
    {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
}