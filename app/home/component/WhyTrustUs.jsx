"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Target, 
  Compass, 
  Users, 
  Award, 
  Clock,
  FileCheck,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Quote
} from 'lucide-react';

const WhyTrustUs = () => {
  const [activeCert, setActiveCert] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  const philosophy = {
    title: "We don't sell products. We design life plans.",
    description: "Every financial product is just a tool. What matters is how it fits into YOUR life story. We're not here to push policies – we're here to understand your dreams and build a roadmap to achieve them."
  };

  const certifications = [
    {
      id: 1,
      name: "SEBI Registered Investment Advisors",
      authority: "Securities and Exchange Board of India",
      icon: FileCheck,
      badge: "RIA",
      color: "#074a6b"
    },
    {
      id: 2,
      name: "IRDAI Certified Insurance Brokers",
      authority: "Insurance Regulatory Authority",
      icon: Shield,
      badge: "IRDAI",
      color: "#2ba5ea"
    },
    {
      id: 3,
      name: "CFP Board Member",
      authority: "Certified Financial Planner Board",
      icon: Award,
      badge: "CFP",
      color: "#1a729e"
    },
    {
      id: 4,
      name: "ISO 27001 Certified",
      authority: "Information Security Standard",
      icon: CheckCircle,
      badge: "ISO",
      color: "#0080bf"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Listen First",
      description: "We sit down to understand not just your finances, but your dreams, fears, and aspirations.",
      icon: Heart,
      color: "#074a6b",
      lightColor: "#e6f0f5"
    },
    {
      step: 2,
      title: "Map Your Journey",
      description: "Using our framework, we identify which life phase you're in and what each chapter needs.",
      icon: Compass,
      color: "#2ba5ea",
      lightColor: "#e8f4fd"
    },
    {
      step: 3,
      title: "Identify Risks",
      description: "We analyze potential plot twists – Death, Disability, Disease – and build your protection shield.",
      icon: Shield,
      color: "#1a729e",
      lightColor: "#e3eef7"
    },
    {
      step: 4,
      title: "Design Your Plan",
      description: "Together, we create a personalized plan that balances protection, growth, and legacy.",
      icon: Target,
      color: "#0080bf",
      lightColor: "#e6f3fa"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Happy Families", icon: Users },
    { value: "15+", label: "Years of Trust", icon: Clock },
    { value: "50+", label: "Industry Awards", icon: Star },
    { value: "100%", label: "Client Satisfaction", icon: CheckCircle }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#f0faff]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#074a6b] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#2ba5ea] rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0080bf] rounded-full filter blur-3xl opacity-10"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23074a6b' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#074a6b]/10 text-[#074a6b] px-4 py-2 rounded-full mb-4">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Why Trust Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-800">We don't sell products.</span>
            <br />
            <span className="bg-[#074a6b] bg-clip-text text-transparent">
              We design life plans.
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Every financial product is just a tool. What matters is how it fits into YOUR life story. 
            We're here to understand your dreams and build a roadmap to achieve them.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
                >
                  <Icon className="w-4 h-4 text-[#0080bf]" />
                  <span className="font-semibold text-gray-900">{stat.value}</span>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 relative"
        >
          <div className="relative bg-gradient-to-r from-[#074a6b] to-[#0080bf] rounded-3xl p-12 text-white overflow-hidden">
            <Quote className="absolute top-6 right-6 w-24 h-24 text-white/10" />
            <div className="relative z-10 max-w-3xl">
              <p className="text-2xl md:text-3xl font-light italic leading-relaxed">
                "Your life is a unique story. We're just here to help you write the best chapters."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Founder's Note</p>
                  <p className="text-sm text-white/80">15+ years of putting clients first</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Process Section */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h3>
            <p className="text-lg text-gray-600">A simple, transparent process designed around you</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, idx) => {
              const Icon = item.icon;
              const isHovered = hoveredStep === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onHoverStart={() => setHoveredStep(idx)}
                  onHoverEnd={() => setHoveredStep(null)}
                  className="relative group"
                >
                  {/* Connection Line */}
                  {idx < process.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-gray-300" />
                    </div>
                  )}

                  <motion.div
                    animate={{
                      y: isHovered ? -5 : 0,
                      scale: isHovered ? 1.02 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                    style={{
                      borderTop: `4px solid ${item.color}`,
                    }}
                  >
                    {/* Step Number */}
                    <div className="absolute -top-3 left-6">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: item.color }} />
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>

                    {/* Hover Indicator */}
                    <motion.div 
                      className="absolute bottom-4 right-4"
                      animate={{ x: isHovered ? 5 : 0 }}
                    >
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${item.color}10` }}
                      >
                        <ArrowRight className="w-4 h-4" style={{ color: item.color }} />
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Credentials</h3>
            <p className="text-lg text-gray-600">Certified & Regulated by Industry Authorities</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              const isActive = activeCert === cert.id;

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onHoverStart={() => setActiveCert(cert.id)}
                  onHoverEnd={() => setActiveCert(null)}
                  className="relative group cursor-pointer"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.02 : 1,
                      y: isActive ? -5 : 0,
                    }}
                    className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                  >
                    {/* Badge Ribbon */}
                    <div className="absolute -top-2 -right-2">
                      <div 
                        className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                        style={{ backgroundColor: cert.color }}
                      >
                        {cert.badge}
                      </div>
                    </div>

                    {/* Icon */}
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${cert.color}15` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: cert.color }} />
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mb-1 pr-16">{cert.name}</h4>
                    <p className="text-sm text-gray-500 mb-3">{cert.authority}</p>

                   

                    {/* Learn More Indicator */}
                    <motion.div 
                      className="mt-3 flex items-center gap-1 text-xs font-medium"
                      style={{ color: cert.color }}
                      animate={{ gap: isActive ? '0.5rem' : '0.25rem' }}
                    >
                      <span>{isActive ? 'More details' : 'Hover to learn more'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#074a6b] to-[#0080bf] text-white px-6 py-3 rounded-full">
            <Shield className="w-5 h-5" />
            <span className="font-medium">Trusted by 10,000+ families</span>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {['Ethical', 'Transparent', 'Client-First', 'Regulated'].map((tag, idx) => (
              <span key={idx} className="text-sm text-gray-500 flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-[#2ba5ea]" />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTrustUs;