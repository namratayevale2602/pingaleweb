"use client";
import { useState, useEffect } from 'react'

const CTASection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Optional: Add a subtle timer for urgency (can be removed if not needed)
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7) // 7 days from now
    
    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const benefits = [
    {  text: "Personalized life-stage plan" },
    {  text: "Complete 3D protection analysis" },
    {  text: "Wealth growth strategy" },
    {  text: "Tax optimization" },
    {  text: "Family security review" },
    {  text: "Clear action plan" }
  ]

  const testimonials = [
    { text: "Finally someone who understood my dreams, not just my money.", name: "Priya S.", role: "Teacher" },
    { text: "The 4-step process made everything crystal clear.", name: "Rajesh K.", role: "Business Owner" },
    { text: "Best decision for my family's future.", name: "Anita M.", role: "Doctor" }
  ]

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#074a6b] to-[#0080bf]"></div>
      
      {/* Animated Waves */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main CTA Content */}
          <div className="text-white">
           

            {/* Main Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Your Life Is Already Moving Forward.
              Is Your Money Keeping Up?
            </h2>

            {/* Description */}
            <p className="text-xl opacity-90 mb-8">
              Don't let another year pass by without a plan. Get your personalized financial story designed in 4 simple steps.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-xl p-3">
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="group relative px-6 py-2 bg-white text-[#074a6b] rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all overflow-hidden">
                <span className="relative z-10">Start Your Financial Journey →</span>
              </button>
              
              <button className="px-6 py-2 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#074a6b] transition-all transform hover:scale-105">
                Book Free Consultation
              </button>
            </div>

            
          </div>

          {/* Right Side - Booking Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500">
            {/* Timer (Optional Urgency Element) */}
            <div className="text-center mb-6">
              <span className="text-sm text-gray-500">Free consultation spots filling fast</span>
              <div className="flex justify-center space-x-4 mt-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#074a6b]">{timeLeft.days}</div>
                  <div className="text-xs text-gray-500">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#074a6b]">{timeLeft.hours}</div>
                  <div className="text-xs text-gray-500">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#074a6b]">{timeLeft.minutes}</div>
                  <div className="text-xs text-gray-500">Mins</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#074a6b]">{timeLeft.seconds}</div>
                  <div className="text-xs text-gray-500">Secs</div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#074a6b' }}>Claim Your Free Session</h3>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                style={{ focusRingColor: '#074a6b' }}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                style={{ focusRingColor: '#074a6b' }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                style={{ focusRingColor: '#074a6b' }}
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                      style={{ focusRingColor: '#074a6b' }}>
                <option>Select your life stage</option>
                <option>Just starting out (20-30)</option>
                <option>Building family/career (30-45)</option>
                <option>Peak earning (45-60)</option>
                <option>Planning retirement (60+)</option>
              </select>
              
              <button 
                type="submit"
                className="w-full py-4 rounded-lg font-bold text-white transition-all transform hover:scale-105"
                style={{ backgroundColor: '#074a6b' }}
              >
                Schedule My Free Call
              </button>
            </form>

          

          
          </div>
        </div>

       
      </div>
    </section>
  )
}

export default CTASection