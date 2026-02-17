"use client";
import { useState } from 'react'

const WhyTrustUs = () => {
  const [activeCert, setActiveCert] = useState(null)

  const philosophy = {
    title: "We don't sell products. We design life plans.",
    description: "Every financial product is just a tool. What matters is how it fits into YOUR life story. We're not here to push policies or schemes – we're here to understand your dreams and build a roadmap to achieve them.",
    image: "🎯"
  }

  const certifications = [
    {
      id: 1,
      name: "SEBI Registered Investment Advisors",
      logo: "📜",
      authority: "Securities and Exchange Board of India",
      description: "We are SEBI RIA compliant, ensuring highest ethical standards and client-first approach.",
      color: "#074a6b"
    },
    {
      id: 2,
      name: "IRDAI Certified Insurance Brokers",
      logo: "🛡️",
      authority: "Insurance Regulatory & Development Authority",
      description: "Authorized to provide unbiased insurance advice across all major insurers.",
      color: "#2ba5ea"
    },
    {
      id: 3,
      name: "CFP Board Member",
      logo: "📋",
      authority: "Certified Financial Planner Board",
      description: "Our advisors hold the globally recognized CFP certification.",
      color: "#1a729e"
    },
    {
      id: 4,
      name: "ISO 27001 Certified",
      logo: "🔒",
      authority: "Information Security Standard",
      description: "Your data security is our top priority with internationally recognized standards.",
      color: "#0080bf"
    }
  ]

  const process = [
    {
      step: 1,
      title: "Listen to Your Story",
      description: "We sit down (virtually or in person) to understand not just your finances, but your dreams, fears, and aspirations.",
      icon: "👂",
      color: "#074a6b"
    },
    {
      step: 2,
      title: "Map Your Life Chapters",
      description: "Using the 5C framework, we identify which life phase you're in and what each chapter needs.",
      icon: "🗺️",
      color: "#2ba5ea"
    },
    {
      step: 3,
      title: "Identify Your 3D Risks",
      description: "We analyze potential plot twists – Death, Disability, Disease – and build your protection shield.",
      icon: "🛡️",
      color: "#1a729e"
    },
    {
      step: 4,
      title: "Design Your Financial Story",
      description: "Together, we create a personalized plan that balances protection, growth, and legacy.",
      icon: "✍️",
      color: "#0080bf"
    }
  ]

  const stats = [
    { value: "15+", label: "Years of Trust", icon: "⏳", color: "#074a6b" },
    { value: "50,000+", label: "Stories Written", icon: "📖", color: "#2ba5ea" },
    { value: "₹2,500Cr+", label: "Wealth Protected", icon: "💰", color: "#1a729e" },
    { value: "98%", label: "Client Retention", icon: "❤️", color: "#0080bf" }
  ]

  return (
    <section id="why-trust-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#074a6b10' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#074a6b' }}></span>
            <span className="text-sm font-medium" style={{ color: '#074a6b' }}>Why Thousands Trust Us</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-4">
            We Don't Sell Products.<br/>
            <span style={{ color: '#074a6b' }}>We Design Life Plans.</span>
          </h2>
          <p className="text-xl text-gray-600">
            Every financial product is just a tool. What matters is how it fits into YOUR life story.
          </p>
        </div>

        {/* Philosophy Card */}
        <div className="bg-gradient-to-r from-[#074a6b] to-[#0080bf] rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-7xl md:text-8xl animate-bounce">
              {philosophy.image}
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{philosophy.title}</h3>
              <p className="text-xl opacity-90">{philosophy.description}</p>
              <div className="mt-6 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-white/20 flex items-center justify-center text-xl">
                      {['👤','👩','👨','👵'][i-1]}
                    </div>
                  ))}
                </div>
                <span className="text-sm opacity-80">Join 50,000+ happy families</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-4">Our 4-Step Story Design Process</h3>
          <p className="text-center text-gray-600 mb-12">Simple, transparent, and completely personalized.</p>
          
          <div className="relative">
            {/* Connecting Line (desktop) */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#074a6b] via-[#2ba5ea] to-[#0080bf] hidden lg:block"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Step Number */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto transform group-hover:scale-110 transition-all"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.step}
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <div className="text-4xl mb-2">{step.icon}</div>
                    <h4 className="text-xl font-bold mb-2" style={{ color: step.color }}>{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  
                  {/* Arrow for desktop */}
                  {idx < process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-3 text-2xl text-gray-400">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-4">Our Credentials</h3>
          <p className="text-center text-gray-600 mb-12">We don't just talk trust – we're certified for it.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border-t-4 cursor-pointer"
                style={{ borderTopColor: cert.color }}
                onMouseEnter={() => setActiveCert(cert.id)}
                onMouseLeave={() => setActiveCert(null)}
              >
                <div className="text-5xl mb-4">{cert.logo}</div>
                <h4 className="text-lg font-bold mb-2" style={{ color: cert.color }}>{cert.name}</h4>
                <p className="text-xs text-gray-500 mb-2">{cert.authority}</p>
                
                {activeCert === cert.id && (
                  <div className="absolute inset-0 bg-white rounded-2xl p-6 flex items-center animate-fade-in border-2" style={{ borderColor: cert.color }}>
                    <p className="text-sm text-gray-700">{cert.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center opacity-70">
          <span className="text-lg font-semibold" style={{ color: '#074a6b' }}>Trusted by</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600">HDFC Bank</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600">ICICI Prudential</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600">SBI Life</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600">Max Life</span>
        </div>
      </div>
    </section>
  )
}

export default WhyTrustUs