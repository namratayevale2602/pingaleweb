// pages/insurance-explainer.js
"use client"; 
import { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  FaQuestionCircle,
  FaGift,
  FaListAlt,
  FaStar,
  FaShieldAlt,
  FaShoppingCart,
  FaChartLine,
  FaSyncAlt,
  FaChartBar,
  FaCoins,
  FaBrain,
  FaMoneyBillWave,
  FaCreditCard,
  FaUniversity,
  FaGraduationCap,
  FaUsers,
  FaHome,
  FaBook,
  FaBriefcase,
  FaSun,
  FaHeartbeat
} from "react-icons/fa";

const InsuranceExplainer = () => {
  const [activeTab, setActiveTab] = useState('why');
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const tabs = [
  { id: "why", label: "Why Life Insurance?", icon: <FaQuestionCircle /> },
  { id: "offer", label: "What Does It Offer?", icon: <FaGift /> },
  { id: "types", label: "Types Of Insurance", icon: <FaListAlt /> },
  { id: "benefits", label: "Benefits Of Insurance", icon: <FaStar /> },
  { id: "importance", label: "Why Is It Important?", icon: <FaShieldAlt /> },
];

  const content = {
    why: {
      title: 'Why Life Insurance?',
      description: 'Life insurance is a crucial financial tool that provides peace of mind and financial security for your loved ones.',
      points: [
        {
          title: 'Income Protection',
          description: 'Replace lost income and maintain your family\'s standard of living'
        },
        {
          title: 'Debt Coverage',
          description: 'Ensure mortgages, loans, and other debts don\'t burden your family'
        },
        {
          title: 'Future Planning',
          description: 'Secure your children\'s education and family\'s future goals'
        },
        {
          title: 'Estate Planning',
          description: 'Create a lasting legacy and provide tax-efficient wealth transfer'
        }
      ],
    },
    offer: {
  title: "What Does It Offer?",
  description:
    "Modern life insurance policies offer comprehensive coverage and valuable features beyond basic protection.",
  features: [
    {
      icon: <FaMoneyBillWave />,
      title: "Death Benefit",
      description: "Tax-free lump sum payment to beneficiaries",
    },
    {
      icon: <FaChartLine />,
      title: "Cash Value Growth",
      description: "Tax-deferred savings accumulation in permanent policies",
    },
    {
      icon: <FaSyncAlt />,
      title: "Living Benefits",
      description: "Access funds for critical illness or chronic conditions",
    },
    {
      icon: <FaChartBar />,
      title: "Investment Options",
      description: "Variable policies with market-linked growth potential",
    },
    {
      icon: <FaShieldAlt />,
      title: "Riders & Add-ons",
      description: "Customizable coverage for specific needs",
    },
    {
      icon: <FaCoins />,
      title: "Dividend Payments",
      description: "Participating policies may pay annual dividends",
    },
  ],
},
    types: {
      title: 'Types Of Insurance',
      description: 'Choose from various insurance types based on your needs, budget, and financial goals.',
      categories: [
        {
          type: 'Term Life Insurance',
          description: 'Coverage for a specific period at affordable rates',
          features: ['10-30 year terms', 'Lower premiums', 'Simple coverage'],
          bestFor: 'Young families, budget-conscious individuals'
        },
        {
          type: 'Whole Life Insurance',
          description: 'Lifetime coverage with guaranteed cash value growth',
          features: ['Lifetime protection', 'Fixed premiums', 'Guaranteed cash value'],
          bestFor: 'Estate planning, guaranteed growth seekers'
        },
        {
          type: 'ULIP',
          description: 'Growth tied to market indexes with downside protection',
          features: ['Index-linked returns', 'Principal protection', 'Floor guarantees'],
          bestFor: 'Growth seekers wanting protection'
        },
        {
          type: 'Final Expense Insurance',
          description: 'Smaller policies for end-of-life costs',
          features: ['Lower coverage amounts', 'Simplified issue', 'Guaranteed acceptance options'],
          bestFor: 'Seniors, burial cost coverage'
        }
      ]
    },
    benefits: {
  title: "Benefits Of Insurance",
  description:
    "Life insurance provides numerous advantages that extend beyond simple financial protection.",
  benefitsList: [
    {
      icon: <FaShieldAlt />,
      title: "Financial Security",
      description:
        "Ensure your family maintains their lifestyle and meets financial obligations",
    },
    {
      icon: <FaBrain />,
      title: "Peace of Mind",
      description:
        "Rest easy knowing your loved ones are protected no matter what",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Tax Advantages",
      description:
        "Death benefits are generally income tax-free; cash value grows tax-deferred",
    },
    {
      icon: <FaCreditCard />,
      title: "Loan Options",
      description:
        "Borrow against cash value at competitive rates without credit checks",
    },
    {
      icon: <FaUniversity />,
      title: "Credit Protection",
      description:
        "Life insurance often has protection from creditors in many states",
    },
    {
      icon: <FaGraduationCap />,
      title: "Education Funding",
      description:
        "Guarantee funds for children's education regardless of what happens",
    },
  ],
},

importance: {
  title: "Why Is It Important?",
  description:
    "Understanding the critical role life insurance plays in comprehensive financial planning.",
  reasons: [
    {
      icon: <FaUsers />,
      title: "Family Protection",
      description:
        "adults would have trouble covering unexpected expense without insurance",
    },
    {
      icon: <FaCreditCard />,
      title: "Loan Options",
      description:
        "Borrow against cash value at competitive rates without credit checks",
    },
    {
      icon: <FaCreditCard />,
      title: "Best Support After Retirement",
      description:
        "After Retirement gives financial support",
    },
    {
      icon: <FaHome />,
      title: "Mortgage Security",
      description:
        "Ensure your family can keep their home even after you're gone",
    },
    {
      icon: <FaBook />,
      title: "Education Guarantee",
      description:
        "Average cost of college continues rising - secure this future expense",
    },
    {
      icon: <FaBriefcase />,
      title: "Business Continuity",
      description:
        "Protect business partners, fund buy-sell agreements, retain key employees",
    },
    {
      icon: <FaSun />,
      title: "Retirement Supplement",
      description:
        "Permanent policies can provide tax-advantaged retirement income",
    },
    {
      icon: <FaHeartbeat />,
      title: "Health Crisis Buffer",
      description:
        "Living benefits help when critical illness strikes unexpectedly",
    },
  ],
  quote: {
    text: "Life insurance isn't for the people who die. It's for the people they leave behind.",
    author: "Dave Ramsey",
  },
}
  };

  // Render all sections for mobile view
  const renderMobileContent = () => {
    return (
      <div className="space-y-12">
        {/* Why Life Insurance */}
        <section id="why" className="scroll-mt-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-[#074a6b] mb-4 flex items-center">
              <span className="text-3xl mr-3"><FaQuestionCircle /></span>
              Why Life Insurance?
            </h2>
            <p className="text-gray-800 mb-6">{content.why.description}</p>
            
            <div className="space-y-4 mb-6">
              {content.why.points.map((point, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0080bf] mb-1">{point.title}</h3>
                  <p className="text-gray-800 text-sm">{point.description}</p>
                </div>
              ))}
            </div>

            
          </div>
        </section>

        {/* What Does It Offer? */}
        <section id="offer" className="scroll-mt-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-[#074a6b] mb-4 flex items-center">
              <span className="text-3xl mr-3"><FaGift /></span>
              What Does It Offer?
            </h2>
            <p className="text-gray-800 mb-6">{content.offer.description}</p>
            
            <div className="space-y-4">
              {content.offer.features.map((feature, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 text-[#074a6b]">{feature.icon}</span>
                    <div>
                      <h3 className="font-semibold text-[#0080bf]">{feature.title}</h3>
                      <p className="text-gray-800 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types Of Insurance */}
        <section id="types" className="scroll-mt-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-[#074a6b] mb-4 flex items-center">
              <span className="text-3xl mr-3"><FaListAlt /></span>
              Types Of Insurance
            </h2>
            <p className="text-gray-800 mb-6">{content.types.description}</p>
            
            <div className="space-y-4">
              {content.types.categories.map((category, index) => (
                <div key={index} className="border border-gray-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#0080bf] mb-2">{category.type}</h3>
                  <p className="text-gray-800 text-sm mb-3">{category.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {category.features.map((feature, idx) => (
                      <span key={idx} className="bg-blue-50 text-[#0080bf] text-xs px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-800">
                    <span className="font-medium text-gray-800">Best for:</span> {category.bestFor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Of Insurance */}
        <section id="benefits" className="scroll-mt-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-[#074a6b] mb-4 flex items-center">
              <span className="text-3xl mr-3"><FaStar /></span>
              Benefits Of Insurance
            </h2>
            <p className="text-gray-800 mb-6">{content.benefits.description}</p>
            
            <div className="space-y-4">
              {content.benefits.benefitsList.map((benefit, index) => (
                <div key={index} className="bg-linear-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 text-[#074a6b]">{benefit.icon}</span>
                    <div>
                      <h3 className="font-semibold text-[#0080bf]">{benefit.title}</h3>
                      <p className="text-gray-800 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Is It Important? */}
        <section id="importance" className="scroll-mt-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-[#074a6b] mb-4 flex items-center">
              <span className="text-3xl mr-3"><FaShieldAlt /></span>
              Why Is It Important?
            </h2>
            <p className="text-gray-800 mb-6">{content.importance.description}</p>
            
            <div className="space-y-4 mb-6">
              {content.importance.reasons.map((reason, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 text-[#074a6b]">{reason.icon}</span>
                    <div>
                      <h3 className="font-semibold text-[#0080bf] mb-1">{reason.title}</h3>
                      <p className="text-gray-500 text-sm">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </section>

       
      </div>
    );
  };

  // Render single tab content for desktop
  const renderDesktopContent = () => {
    const currentContent = content[activeTab];

    switch(activeTab) {
      case 'why':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#074a6b] mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-800">{currentContent.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentContent.points.map((point, index) => (
                <div key={index} className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-[#0080bf] mb-2">{point.title}</h3>
                  <p className="text-gray-800 text-sm">{point.description}</p>
                </div>
              ))}
            </div>

            
          </div>
        );

      case 'offer':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#074a6b] mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-800">{currentContent.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 p-5 rounded-lg hover:shadow-md transition">
                  <div className="text-3xl mb-3 text-[#1a729e]">{feature.icon}</div>
                  <h3 className="font-semibold text-[#0080bf] mb-2">{feature.title}</h3>
                  <p className="text-gray-800 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'types':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#074a6b] mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-800">{currentContent.description}</p>
            </div>
            
            <div className="space-y-4">
              {currentContent.categories.map((category, index) => (
                <div key={index} className="bg-white border border-gray-200 p-5 rounded-lg hover:border-blue-300 transition">
                  <h3 className="text-xl font-semibold text-[#0080bf] mb-2">{category.type}</h3>
                  <p className="text-gray-800 mb-3">{category.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {category.features.map((feature, idx) => (
                      <span key={idx} className="bg-[rgb(208,239,255)] text-[#0080bf] text-xs px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-800">
                    <span className="font-medium text-gray-800">Best for:</span> {category.bestFor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'benefits':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#074a6b] mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-800">{currentContent.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentContent.benefitsList.map((benefit, index) => (
                <div key={index} className="bg-linear-to-br from-green-50 to-blue-50 p-5 rounded-lg">
                  <div className="text-3xl text-[#1a729e] mb-3">{benefit.icon}</div>
                  <h3 className="font-semibold text-[#0080bf] mb-2">{benefit.title}</h3>
                  <p className="text-gray-800 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'importance':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#074a6b] mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-800">{currentContent.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentContent.reasons.map((reason, index) => (
                <div key={index} className="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <div className="flex items-start">
                    <span className="text-2xl text-[#1a729e] mr-3">{reason.icon}</span>
                    <div>
                      <h3 className="font-semibold text-[#0080bf] mb-1">{reason.title}</h3>
                      <p className="text-gray-800 text-sm">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

           
          </div>
        );

     

      default:
        return null;
    }
  };

  return (
    <>
     
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#074a6b]">Life Insurance</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mt-1 sm:mt-2">Your complete guide to understanding life insurance</p>
          </div>
        </header>

        {/* Mobile Quick Navigation (only visible on mobile) */}
        {isMobile && (
          <div className="sticky top-[73px] sm:top-[89px] z-10 bg-white border-b border-gray-200 overflow-x-auto">
            <div className="flex px-4 py-2 space-x-2">
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  className="flex-shrink-0 flex items-center px-3 py-2 bg-gray-100 rounded-full text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="mr-1 text-[#1a729e]">{tab.icon}</span>
                  <span className="whitespace-nowrap">{tab.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {isMobile ? (
            // Mobile: Show all content as one long page
            renderMobileContent()
          ) : (
            // Desktop: Show tabs interface
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Sidebar - Tabs */}
              <div className="md:w-1/4">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden sticky top-24">
                  <nav className="flex flex-col">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center px-6 py-4 text-left transition-all ${
                          activeTab === tab.id
                            ? 'bg-[rgb(208,239,255)] border-l-4 border-[#074a6b] text-[#074a6b]'
                            : 'text-[#1a729e] hover:bg-[rgb(208,239,255)]'
                        }`}
                      >
                        <span className="text-xl mr-3">{tab.icon}</span>
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="md:w-3/4">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
                  {renderDesktopContent()}
                </div>
              </div>
            </div>
          )}
        </main>

       
      </div>
    </>
  );
};

export default InsuranceExplainer;