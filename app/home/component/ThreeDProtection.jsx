"use client";
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Heart, Activity, Users, AlertCircle, ArrowRight, Calendar, IndianRupee, Target, Sparkles } from 'lucide-react';

const protectionLayers = [
  {
    id: "death",
    name: "Death",
    icon: Shield,
    description: "Income replacement for your family when you're gone",
    color: "#074a6b",
    lightColor: "#e6f0f5",
    story: {
      name: "Sarah's Story",
      text: "When Sarah lost her husband at 42, his ₹1Cr life insurance became the bridge that kept their children's dreams alive.",
      age: 42,
      cover: "₹1 Cr"
    },
    stat: {
      value: "63%",
      label: "families struggle within 6 months",
      icon: Users
    },
    solutions: ["Term Insurance", "Whole Life", "Return of Premium"],
    emotionalHook: "Love means protecting them even when you're not there.",
    gradient: "from-[#074a6b] to-[#1a729e]"
  },
  {
    id: "disability",
    name: "Disability",
    icon: Heart,
    description: "Income protection when you can't work",
    color: "#2ba5ea",
    lightColor: "#e8f4fd",
    story: {
      name: "Raj's Story",
      text: "A car accident changed Raj's life, but his disability cover ensured his family's lifestyle didn't.",
      age: 35,
      cover: "₹75 L"
    },
    stat: {
      value: "1 in 4",
      label: "will become disabled before retirement",
      icon: AlertCircle
    },
    solutions: ["Critical Illness", "Accident Cover", "Income Protection"],
    emotionalHook: "Your biggest asset is your ability to earn.",
    gradient: "from-[#2ba5ea] to-[#1a729e]"
  },
  {
    id: "disease",
    name: "Critical Illness",
    icon: Activity,
    description: "Financial shield against major health crises",
    color: "#0080bf",
    lightColor: "#e6f3fa",
    story: {
      name: "Meera's Story",
      text: "Cancer didn't ask for permission, but Meera's health insurance meant she could fight without financial worry.",
      age: 48,
      cover: "₹50 L"
    },
    stat: {
      value: "14%",
      label: "medical inflation rate",
      icon: IndianRupee
    },
    solutions: ["Health Insurance", "Cancer Cover", "Critical Illness"],
    emotionalHook: "Health is wealth, but insurance is the safety net.",
    gradient: "from-[#0080bf] to-[#2ba5ea]"
  }
];

const ThreeDProtection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-24 relative overflow-hidden ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#074a6b] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2ba5ea] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#074a6b]/10 text-[#1a729e] px-4 py-2 rounded-full mb-4">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">The 3D Shield</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#074a6b]">Protecting Your
            <br />
            
              Life's Greatest Stories</span>
           
          </h2>
          
          <p className="text-xl text-gray-600">
            Because the best-laid plans need protection from life's unexpected plot twists.
          </p>
        </motion.div>

        {/* 3D Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 perspective-container">
          {protectionLayers.map((layer, index) => {
            const Icon = layer.icon;
            const isActive = activeCard === index;
            const isHovered = hoveredCard === index;

            return (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => setActiveCard(isActive ? null : index)}
                className="group relative cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                {/* Card Container with 3D Effect */}
                <motion.div
                  animate={{
                    rotateY: isHovered ? 5 : 0,
                    rotateX: isHovered ? 2 : 0,
                    scale: isHovered ? 1.02 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative bg-white rounded-3xl shadow-xl overflow-hidden"
                  style={{
                    boxShadow: isHovered 
                      ? `0 30px 40px -15px ${layer.color}40` 
                      : "0 20px 25px -5px rgba(0,0,0,0.1)"
                  }}
                >
                  {/* Top Gradient Bar */}
                  <div 
                    className="h-2 w-full bg-[#0080bf]"
                    
                  />

                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div 
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${layer.color}15` }}
                      >
                        <Icon className="w-6 h-6 text-[#1a729e]" />
                      </div>
                      

                    </div>

                    <h3 className="text-2xl font-bold mb-1 text-[#1a729e]">
                      {layer.name}
                    </h3>
                    <p className="text-sm text-gray-600">{layer.description}</p>
                  </div>

                  {/* Story Card */}
                  <div 
                    className="mx-6 p-4 rounded-xl mb-4"
                    style={{ backgroundColor: layer.lightColor }}
                  >
                    <p className="text-sm text-gray-700 italic">
                      "{layer.story.text}"
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <span className="font-medium">{layer.story.name}</span>
                      <span>•</span>
                      <span>Age {layer.story.age}</span>
                      <span>•</span>
                      <span className='text-[#1a729e]'>{layer.story.cover}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="px-6 py-3 border-t border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gray-50">
                        <layer.stat.icon className="w-4 h-4 text-gray-500" />
                      </div>
                      <div>
                        <span className="text-xl font-bold text-[#1a729e]">
                          {layer.stat.value}
                        </span>
                        <span className="text-xs text-gray-500 ml-1">{layer.stat.label}</span>
                      </div>
                    </div>
                  </div>

                  {/* Solutions */}
                  <div className="p-6 pt-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {layer.solutions.map((sol) => (
                        <span 
                          key={sol} 
                          className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-700"
                        >
                          {sol}
                        </span>
                      ))}
                    </div>

                    {/* Emotional Hook */}
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#1a729e]"  />
                      <p className="text-xs font-medium text-[#1a729e]" >
                        {layer.emotionalHook}
                      </p>
                    </div>

                    {/* Learn More Link */}
                    <motion.button 
                      className="mt-4 text-sm font-medium inline-flex items-center gap-1 group text-[#1a729e]"
                      
                      whileHover={{ gap: "0.5rem" }}
                    >
                      Learn more about {layer.name} Protection
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </div>

                 
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#1a729e]/10">
                <Calendar className="w-6 h-6 text-[#1a729e]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1a729e]">Every 30 sec</div>
                <p className="text-sm text-gray-600">someone faces a financial crisis due to health issues</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#1a729e]/10">
                <IndianRupee className="w-6 h-6 text-[#1a729e]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1a729e]">₹10L+</div>
                <p className="text-sm text-gray-600">average medical emergency cost in India</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#1a729e]/10">
                <Shield className="w-6 h-6 text-[#1a729e]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1a729e]">76%</div>
                <p className="text-sm text-gray-600">of Indians are underinsured</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div 
            className="relative overflow-hidden rounded-3xl p-12"
            style={{
              background: "linear-gradient(135deg, #1a729e 0%, #1a729e 50%, #2ba5ea 100%)"
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full transform -translate-x-32 translate-y-32"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                "The best time to plant a tree was 20 years ago. 
                <br />
                The second best time is today."
              </h3>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Every family has a different protection need. Let's find yours.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#074a6b] px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 group"
                >
                  Discover Your Protection Score
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#074a6b] transition-all"
                >
                  Talk to an Advisor
                </motion.button>
              </div>

             
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeDProtection;