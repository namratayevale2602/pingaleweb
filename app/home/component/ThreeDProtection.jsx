"use client";
import { useState } from 'react'
import { AlarmClock, IndianRupee, Shield } from 'lucide-react';


const protectionLayers = [
  {
    name: "Death",
    color: "from-indigo-500 to-blue-500",
    story: "When Sarah lost her husband at 42, his life insurance became the bridge that kept their children's dreams alive.",
    stats: "63% of families would struggle to pay living expenses within 6 months",
    solutions: ["Term Insurance", "Whole Life", "ULIP"],
    emotionalHook: "Love means protecting them even when you're not there.",
    image: "🏠"
  },
  {
    name: "Disability",
    color: "from-purple-500 to-pink-500",
    story: "A car accident changed Raj's life, but his disability cover ensured his family's lifestyle didn't.",
    stats: "1 in 4 of today's 20-year-olds will become disabled before retirement",
    solutions: ["Critical Illness Cover", "Accident Cover", "Income Protection"],
    emotionalHook: "Your biggest asset isn't your home - it's your ability to earn.",
    image: "💪"
  },
  {
    name: "Disease",
    color: "from-red-500 to-orange-500",
    story: "Cancer didn't ask for permission, but Meera's health insurance meant she could fight without financial worry.",
    stats: "Medical inflation is 14% - double the general inflation rate",
    solutions: ["Health Insurance", "Critical Illness", "Cancer Cover"],
    emotionalHook: "Health is wealth, but insurance is the safety net.",
    image: "🏥"
  }
]

const ThreeDProtection = () => {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <section id="protection" className="py-24 relative overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
         
          
          <h2 className="text-4xl font-bold mb-4 text-[#074a6b]">
            The 3D Shield : Protecting Your Story
            
          </h2>
          <p className="text-xl text-gray-600">
            Because the best-laid plans need protection from life's unexpected plot twists.
          </p>
        </div>

        {/* 3D Cards with perspective */}
        <div className="grid md:grid-cols-3 gap-8 perspective-container">
          {protectionLayers.map((layer, idx) => (
            <div
              key={layer.name}
              className="group relative transform-gpu transition-all duration-500 hover:scale-105 hover:rotate-y-12">
              {/* Card front */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Gradient header */}
                <div className={`h-25 bg-[#0080bf] p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full transform -translate-x-16 translate-y-16"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mt-2">{layer.name}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Emotional story */}
                  <div className="mb-4 p-4 bg-gray-50 rounded-lg italic text-gray-700">
                    "{layer.story}"
                  </div>
                  
                  {/* Stat */}
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-500 mb-1">Did you know?</div>
                    <div className="text-lg font-bold text-gray-800">{layer.stats}</div>
                  </div>
                  
                  {/* Solutions */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Solutions:</div>
                    <div className="flex flex-wrap gap-2">
                      {layer.solutions.map((sol) => (
                        <span key={sol} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                          {sol}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Emotional hook */}
                  <div className="border-t pt-4">
                    <p className="text-sm text-center font-medium bg-[#002c42] bg-clip-text text-transparent">
                      {layer.emotionalHook}
                    </p>
                  </div>
                </div>
              </div>

              
            </div>
          ))}
        </div>

        {/* Interactive Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-100 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="flex justify-center mb-2"><AlarmClock className="w-8 h-8 text-[#2ba5ea]" /></div>
            <div className="text-2xl font-bold text-[#002c42]">Every 30 seconds</div>
            <p className="text-gray-700">someone faces a financial crisis due to health issues</p>
          </div>
          <div className="bg-gray-100 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="flex justify-center mb-2"><IndianRupee className="w-8 h-8 text-[#2ba5ea]" /></div>
            <div className="text-2xl font-bold text-[#002c42]">₹10L+</div>
            <p className="text-gray-700">average medical emergency cost in India</p>
          </div>
          <div className="bg-gray-100 backdrop-blur-lg rounded-xl p-6 text-center">
            <div className="flex justify-center mb-2">
                <Shield className="w-8 h-8 text-[#2ba5ea]" />
            </div>
            <div className="text-2xl font-bold text-[#002c42]">76%</div>
            <p className="text-gray-700">of Indians are underinsured</p>
          </div>  
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-[#0080bf] p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-2">"The best time to plant a tree was 20 years ago. The second best time is today."</h3>
            <p className="mb-4">Every family has a different protection need. Let's find yours.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
                Discover Your Protection Score →
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all">
                Talk to an Advisor
              </button>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default ThreeDProtection