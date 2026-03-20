"use client";
import { useState, useEffect } from 'react';
import {
  Heart,
  Target,
  Eye,
  Users,
  Quote,
  Star,
  Award,
  TrendingUp,
  Shield,
  Clock,
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Testimonials from './Testimonials';

const AboutUs = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Company Story
  const story = {
    founded: "2010",
    founders: "Bhaurao pingale",
    description: "What started as a small office with a big dream has now become one of India's most trusted financial advisory firms. Our journey began with a simple belief: everyone deserves honest, unbiased financial advice."
  };

  // Vision & Mission
  const visionMission = {
    vision: {
      title: "Our Vision",
      description: "To create a world where every individual has the clarity and confidence to make financial decisions that align with their life's true purpose.",
      icon: Eye,
      color: "#1a729e"
    },
    mission: {
      title: "Our Mission",
      description: "To democratize financial planning by making it personal, transparent, and accessible to all, while maintaining the highest ethical standards.",
      icon: Target,
      color: "#1a729e"
    }
  };

  // Core Values
  const values = [
    {
      title: "Integrity First",
      description: "We always put client interests ahead of our own. No hidden agendas, no commission-driven advice.",
      icon: Shield,
      color: "#1a729e"
    },
    {
      title: "Personalized Approach",
      description: "Every client is unique. We craft solutions that fit your life story, not cookie-cutter products.",
      icon: Heart,
      color: "#1a729e"
    },
    {
      title: "Long-term Partnership",
      description: "We're with you for life's journey, not just a transaction. Your success is our success.",
      icon: Users,
      color: "#1a729e"
    },
    {
      title: "Continuous Excellence",
      description: "We never stop learning, improving, and evolving to serve you better.",
      icon: TrendingUp,
      color: "#1a729e"
    }
  ];

  // Team Stats
  const stats = [
    { number: "15+", label: "Years of Excellence", icon: Clock },
    { number: "50+", label: "Expert Advisors", icon: Users },
    { number: "5000+", label: "Happy Clients", icon: Heart },
    { number: "₹500Cr+", label: "Wealth Managed", icon: TrendingUp }
  ];

  // Awards
  const awards = [
    { name: "Best Financial Advisory 2023", issuer: "Economic Times", year: "2023" },
    { name: "Trusted Partner of the Year", issuer: "HDFC Bank", year: "2022" },
    { name: "Excellence in Client Service", issuer: "IRDAI", year: "2021" }
  ];

  return (
    
  <>

  <section className="about-us-section py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Your Trusted Partner in<br/>
            <span className="text-[#0A4D6B]">Financial Journey</span>
          </h2>
          <p className="text-xl text-gray-600">
            For over a decade, we've been helping families like yours achieve financial freedom through personalized, honest advice.
          </p>
        </div>

        {/* Image & Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="images/about2.jpeg" 
                  alt="Team meeting"
                  className="w-full h-64 object-cover"
                />
              </div>
              
              {/* Two smaller images */}
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="images/about1.png" 
                  alt="Client consultation"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="images/about3.jpeg" 
                  alt="Happy clients"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

           
          </div>

          {/* Right - Story Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
           
            
            <h3 className="text-3xl text-gray-900">
              From a Small Dream to <br/>
              <span className="text-[#0A4D6B]">Nation's Trust</span>
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in <span className="font-semibold text-[#0A4D6B]">2010</span> by <span className="font-semibold">{story.founders}</span>, 
              {story.description}
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Today, we're proud to be SEBI registered advisors, trusted by over 5000 families across India. 
              But numbers don't tell the full story. It's the smiles on our clients' faces, their children's 
              education secured, their retirements funded, that truly define our success.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#0080bf]" />
                </div>
                <span className="text-sm font-medium text-gray-700">SEBI Registered</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#0080bf]" />
                </div>
                <span className="text-sm font-medium text-gray-700">IRDAI Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-[#1a729e] rounded-3xl p-8 mb-20 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl mb-1">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {Object.values(visionMission).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 border-t-2 border-[#1a729e] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div 
                  className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#1a729e]" />
                </div>
                <h3 className="text-2xl text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                  <div 
                    className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#1a729e]" />
                  </div>
                  <h4 className="text-lg text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      

       

     
      </div>
    </section>
    <Testimonials />
    </>
  );
};

export default AboutUs;