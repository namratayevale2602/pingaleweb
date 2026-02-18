"use client";
import { 
  GraduationCap,
  Shield,
  Home,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Clock
} from 'lucide-react';

const YourProcess = () => {
  const steps = [
    {
      phase: "DISCOVERY",
      title: "Understand Your Life Stage",
      description: "Are you starting out, growing a family, or planning retirement? We identify where you are to chart where you're going.",
      icon: GraduationCap,
      benefits: ["Career beginnings", "Family planning", "Retirement vision"]
    },
    {
      phase: "PROTECTION",
      title: "Identify Your 3D Risks",
      description: "We analyze potential life events – Death, Disability, Disease – and build your financial shield first.",
      icon: Shield,
      benefits: ["Income protection", "Health coverage", "Emergency fund"]
    },
    {
      phase: "FOUNDATION",
      title: "Build Protection First",
      description: "Before we grow your wealth, we ensure it's protected. Strong foundations make for stronger futures.",
      icon: Home,
      benefits: ["Insurance planning", "Emergency corpus", "Debt management"]
    },
    {
      phase: "GROWTH",
      title: "Create & Grow Wealth",
      description: "With protection in place, we build strategies to grow your wealth and achieve your life goals.",
      icon: TrendingUp,
      benefits: ["Investment planning", "Tax efficiency", "Wealth building"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Journey to<br/>
            <span className="text-[#0A4D6B]">Financial Freedom</span>
          </h2>
          <p className="text-xl text-gray-600">
            Four simple steps. One clear direction. Your complete financial roadmap.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
         

          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative flex md:block items-start gap-4">
                  {/* Step Indicator */}
                  <div className="relative z-10 shrink-0">
                    <div 
                      className="w-16 h-16 bg-[#0080bf] rounded-2xl flex items-center justify-center shadow-lg md:mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                  </div>

                  {/* Content */}
                  <div className="flex-1 md:text-center md:mt-4">
                    <span 
                      className="inline-block text-gray-700 text-xs font-bold px-3 py-1 rounded-full mb-3"
                      
                    >
                      {step.phase}
                    </span>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                    
                    {/* Benefits */}
                    <ul className="space-y-2">
                      {step.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-500 md:justify-center">
                          <CheckCircle className="w-3 h-3 text-[#0080bf]"  />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connector arrow for desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-8">
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

        
      </div>
    </section>
  );
};

export default YourProcess;