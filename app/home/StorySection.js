"use client";
import { useState, useEffect } from 'react'
import { Zap } from 'lucide-react';

const HeroStory = () => {
  const [storyIndex, setStoryIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stories = [
    {
      name: "Arjun, 28",
      scenario: "Just got married, planning a baby",
      emotion: "Excited but worried about future",
      phase: "Consumption Phase",
    },
    {
      name: "Priya, 35",
      scenario: "Started her own business",
      emotion: "Building dreams while managing risks",
      phase: "Creation Phase",
    },
    {
      name: "Rajiv, 58",
      scenario: "Children settled, planning retirement",
      emotion: "Want to protect what I've built",
      phase: "Conservation Phase",
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setStoryIndex((prev) => (prev + 1) % stories.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screenoverflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          
            
            <h1 className="text-2xl lg:text-4xl text-[#074a6b] font-bold leading-tight ">
              Your Life's Journey Deserves a Story Worth Living
              
            </h1>
            
            <p className="md:text-xl text-gray-600">
              From your first paycheck to your legacy, we help you write every chapter with confidence.
            </p>

            {/* Interactive story carousel */}
            <div className="relative h-64 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className={`absolute -top-3 left-6 bg-[#0080bf] text-white px-4 py-1 rounded-full text-sm`}>
                Meet {stories[storyIndex].name}
              </div>
              
              <div className="h-full flex flex-col justify-center">
                <p className="text-2xl text-gray-800 font-medium mb-4">"{stories[storyIndex].scenario}"</p>
                <p className="text-gray-600 mb-2">{stories[storyIndex].emotion}</p>
                <div className="flex items-center space-x-2">
                  <span className={`text-xl text-[#002c42] font-bold bg-opacity-10 py-1 rounded-full`}>
                    {stories[storyIndex].phase}
                  </span>
                </div>
              </div>
              
              {/* Navigation dots */}
              <div className="absolute bottom-4 right-6 flex space-x-2">
                {stories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setStoryIndex(idx)}
                    className={`transition-all duration-300 ${
                      idx === storyIndex ? 'w-8 h-2 bg-blue-600 rounded-full' : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                    }`}
                    aria-label={`Go to story ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-2 bg-[#0080bf] text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                Start Your Journey →
              </button>
              
            </div>
          </div>

          {/* Right side - Visual metaphor */}
          <div className="relative">
            <div className="relative w-96 h-96 mx-auto">
              {/* Animated circles representing life phases */}
              <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-ping-slow opacity-20"></div>
              <div className="absolute inset-4 border-4 border-purple-200 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-8 border-4 border-green-200 rounded-full animate-pulse"></div>
              <div className="absolute inset-12 border-4 border-orange-200 rounded-full animate-bounce"></div>
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center mb-2"><Zap className="w-15 h-15 text-[#2ba5ea]" /></div>
                  <div className="font-bold text-xl">5C Framework</div>
                  <div className="text-sm text-gray-500 mt-2">Consumption → Creation → Conservation → Continuation → Contribution</div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default HeroStory