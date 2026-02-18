"use client";
import { useState } from 'react';
import { 
  Heart, 
  Shield, 
  Target, 
  Compass, 
  Users, 
  Award, 
  Clock,
  FileCheck,
  CheckCircle
} from 'lucide-react';

const WhyTrustUs = () => {
  const [activeCert, setActiveCert] = useState(null);

  const philosophy = {
    title: "We don't sell products. We design life plans.",
    description: "Every financial product is just a tool. What matters is how it fits into YOUR life story. We're not here to push policies – we're here to understand your dreams and build a roadmap to achieve them."
  };

  const certifications = [
    {
      id: 1,
      name: "SEBI Registered Investment Advisors",
      authority: "Securities and Exchange Board of India",
      description: "We are SEBI RIA compliant, ensuring highest ethical standards and client-first approach.",
      icon: FileCheck,
      badge: "RIA"
    },
    {
      id: 2,
      name: "IRDAI Certified Insurance Brokers",
      authority: "Insurance Regulatory Authority",
      description: "Authorized to provide unbiased insurance advice across all major insurers.",
      icon: Shield,
      badge: "IRDAI"
    },
    {
      id: 3,
      name: "CFP Board Member",
      authority: "Certified Financial Planner Board",
      description: "Our advisors hold the globally recognized CFP certification.",
      icon: Award,
      badge: "CFP"
    },
    {
      id: 4,
      name: "ISO 27001 Certified",
      authority: "Information Security Standard",
      description: "Your data security is our top priority with internationally recognized standards.",
      icon: CheckCircle,
      badge: "ISO"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Listen First",
      description: "We sit down to understand not just your finances, but your dreams, fears, and aspirations.",
      icon: Heart,
    },
    {
      step: 2,
      title: "Map Your Journey",
      description: "Using our framework, we identify which life phase you're in and what each chapter needs.",
      icon: Compass,
    },
    {
      step: 3,
      title: "Identify Risks",
      description: "We analyze potential plot twists – Death, Disability, Disease – and build your protection shield.",
      icon: Shield,
    },
    {
      step: 4,
      title: "Design Your Plan",
      description: "Together, we create a personalized plan that balances protection, growth, and legacy.",
      icon: Target,
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
         
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We don't sell products.<br/>
            <span className="text-[#0A4D6B]">We design life plans.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Every financial product is just a tool. What matters is how it fits into YOUR life story.
          </p>
        </div>

        {/* Experience Banner */}
        <div className="bg-[#0080bf] rounded-2xl p-8 mb-16 text-white">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <div className="text-4xl font-bold">15+ Years</div>
                <div className="text-white/80">of Financial Excellence</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <div className="text-4xl font-bold">5000+</div>
                <div className="text-white/80">Happy Families</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <div className="text-4xl font-bold">₹500Cr+</div>
                <div className="text-white/80">Wealth Managed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-700 mb-8">Our 4-Step Philosophy</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-[#0080bf]" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span 
                        className="text-sm font-semibold px-2 py-1 bg-blue-50 rounded-md">
                        Step {item.step}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-700 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  {idx < process.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-700 mb-8">Our Credentials</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.id}
                  className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onMouseEnter={() => setActiveCert(cert.id)}
                  onMouseLeave={() => setActiveCert(null)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#0080bf]" />
                    </div>
                    <span 
                      className="text-xs font-bold px-2 py-1 bg-blue-50 rounded-md">
                      {cert.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">{cert.name}</h4>
                  <p className="text-sm text-gray-500 mb-3">{cert.authority}</p>
                  
                  {activeCert === cert.id && (
                    <div className="absolute inset-0 bg-white rounded-2xl p-6 flex items-center z-10 animate-fadeIn">
                      <p className="text-sm text-gray-700">{cert.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;