// pages/insurance-explainer.js
"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';

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
    { id: 'why', label: 'Why Life Insurance?', icon: '💭' },
    { id: 'offer', label: 'What Does It Offer?', icon: '🎁' },
    { id: 'types', label: 'Types Of Insurance', icon: '📋' },
    { id: 'benefits', label: 'Benefits Of Insurance', icon: '✨' },
    { id: 'importance', label: 'Why Is It Important?', icon: '⭐' },
    { id: 'buy', label: 'What To Buy', icon: '🛒' },
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
      stats: [
        { value: '54%', label: 'of Americans have life insurance' },
        { value: '40%', label: 'would struggle financially within 6 months' }
      ]
    },
    offer: {
      title: 'What Does It Offer?',
      description: 'Modern life insurance policies offer comprehensive coverage and valuable features beyond basic protection.',
      features: [
        {
          icon: '💰',
          title: 'Death Benefit',
          description: 'Tax-free lump sum payment to beneficiaries'
        },
        {
          icon: '📈',
          title: 'Cash Value Growth',
          description: 'Tax-deferred savings accumulation in permanent policies'
        },
        {
          icon: '🔄',
          title: 'Living Benefits',
          description: 'Access funds for critical illness or chronic conditions'
        },
        {
          icon: '📊',
          title: 'Investment Options',
          description: 'Variable policies with market-linked growth potential'
        },
        {
          icon: '🛡️',
          title: 'Riders & Add-ons',
          description: 'Customizable coverage for specific needs'
        },
        {
          icon: '💵',
          title: 'Dividend Payments',
          description: 'Participating policies may pay annual dividends'
        }
      ]
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
          type: 'Universal Life Insurance',
          description: 'Flexible premiums with adjustable coverage',
          features: ['Flexible payments', 'Adjustable death benefit', 'Interest-account growth'],
          bestFor: 'Those needing flexibility in payments'
        },
        {
          type: 'Variable Life Insurance',
          description: 'Investment component with market participation',
          features: ['Market-linked returns', 'Investment control', 'Potential higher growth'],
          bestFor: 'Experienced investors seeking growth'
        },
        {
          type: 'Indexed Universal Life',
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
      title: 'Benefits Of Insurance',
      description: 'Life insurance provides numerous advantages that extend beyond simple financial protection.',
      benefitsList: [
        {
          icon: '🛡️',
          title: 'Financial Security',
          description: 'Ensure your family maintains their lifestyle and meets financial obligations'
        },
        {
          icon: '🧠',
          title: 'Peace of Mind',
          description: 'Rest easy knowing your loved ones are protected no matter what'
        },
        {
          icon: '💰',
          title: 'Tax Advantages',
          description: 'Death benefits are generally income tax-free; cash value grows tax-deferred'
        },
        {
          icon: '💳',
          title: 'Loan Options',
          description: 'Borrow against cash value at competitive rates without credit checks'
        },
        {
          icon: '🏦',
          title: 'Creditor Protection',
          description: 'Life insurance often has protection from creditors in many states'
        },
        {
          icon: '🎓',
          title: 'Education Funding',
          description: 'Guarantee funds for children\'s education regardless of what happens'
        }
      ]
    },
    importance: {
      title: 'Why Is It Important?',
      description: 'Understanding the critical role life insurance plays in comprehensive financial planning.',
      reasons: [
        {
          icon: '👪',
          title: 'Family Protection',
          description: '47% of U.S. adults would have trouble covering unexpected $400 expense without insurance'
        },
        {
          icon: '🏠',
          title: 'Mortgage Security',
          description: 'Ensure your family can keep their home even after you\'re gone'
        },
        {
          icon: '📚',
          title: 'Education Guarantee',
          description: 'Average cost of college continues rising - secure this future expense'
        },
        {
          icon: '💼',
          title: 'Business Continuity',
          description: 'Protect business partners, fund buy-sell agreements, retain key employees'
        },
        {
          icon: '🌅',
          title: 'Retirement Supplement',
          description: 'Permanent policies can provide tax-advantaged retirement income'
        },
        {
          icon: '⚕️',
          title: 'Health Crisis Buffer',
          description: 'Living benefits help when critical illness strikes unexpectedly'
        }
      ],
      quote: {
        text: "Life insurance isn't for the people who die. It's for the people they leave behind.",
        author: "Dave Ramsey"
      }
    },
    buy: {
      title: 'What To Buy',
      description: 'Selecting the right insurance depends on your unique situation, goals, and stage of life.',
      guides: [
        {
          stage: 'Young & Single (20s-30s)',
          recommendation: 'Term Life Insurance',
          coverage: '10-15x annual income',
          reasoning: 'Low-cost protection while building career, covering student loans, and starting savings'
        },
        {
          stage: 'New Families (30s-40s)',
          recommendation: 'Term Life + Small Permanent Policy',
          coverage: '15-20x annual income',
          reasoning: 'Protect growing family needs, start building cash value for future goals'
        },
        {
          stage: 'Established Families (40s-50s)',
          recommendation: 'Permanent Insurance Mix',
          coverage: '10-15x annual income',
          reasoning: 'Lock in insurability, maximize cash value accumulation, estate planning begins'
        },
        {
          stage: 'Pre-Retirement (50s-60s)',
          recommendation: 'Universal/Indexed Universal Life',
          coverage: '5-10x annual income',
          reasoning: 'Catch-up savings, tax-efficient retirement income, long-term care options'
        },
        {
          stage: 'Retired (60s+)',
          recommendation: 'Final Expense + Existing Coverage',
          coverage: 'Cover final expenses + leave legacy',
          reasoning: 'Cover burial costs, leave tax-free inheritance, charitable giving'
        }
      ],
      tips: [
        'Buy sooner rather than later - premiums increase with age',
        'Consider your debt, income, and future obligations',
        'Look beyond employer coverage - it often ends when you leave',
        'Work with an independent agent to compare multiple carriers'
      ]
    }
  };

  // Render all sections for mobile view
  const renderMobileContent = () => {
    return (
      <div className="space-y-12">
        {/* Why Life Insurance */}
        <section id="why" className="scroll-mt-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">💭</span>
              Why Life Insurance?
            </h2>
            <p className="text-gray-600 mb-6">{content.why.description}</p>
            
            <div className="space-y-4 mb-6">
              {content.why.points.map((point, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-1">{point.title}</h3>
                  <p className="text-gray-600 text-sm">{point.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {content.why.stats.map((stat, index) => (
                <div key={index} className="bg-white border border-gray-200 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Does It Offer? */}
        <section id="offer" className="scroll-mt-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🎁</span>
              What Does It Offer?
            </h2>
            <p className="text-gray-600 mb-6">{content.offer.description}</p>
            
            <div className="space-y-4">
              {content.offer.features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">{feature.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                      <p className="text-gray-500 text-sm">{feature.description}</p>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">📋</span>
              Types Of Insurance
            </h2>
            <p className="text-gray-600 mb-6">{content.types.description}</p>
            
            <div className="space-y-4">
              {content.types.categories.map((category, index) => (
                <div key={index} className="border border-gray-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">{category.type}</h3>
                  <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {category.features.map((feature, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    <span className="font-medium text-gray-700">Best for:</span> {category.bestFor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Of Insurance */}
        <section id="benefits" className="scroll-mt-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">✨</span>
              Benefits Of Insurance
            </h2>
            <p className="text-gray-600 mb-6">{content.benefits.description}</p>
            
            <div className="space-y-4">
              {content.benefits.benefitsList.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">{benefit.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">⭐</span>
              Why Is It Important?
            </h2>
            <p className="text-gray-600 mb-6">{content.importance.description}</p>
            
            <div className="space-y-4 mb-6">
              {content.importance.reasons.map((reason, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">{reason.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{reason.title}</h3>
                      <p className="text-gray-500 text-sm">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-600 text-white p-5 rounded-lg text-center">
              <p className="text-base italic mb-2">"{content.importance.quote.text}"</p>
              <p className="text-xs opacity-90">— {content.importance.quote.author}</p>
            </div>
          </div>
        </section>

        {/* What To Buy */}
        <section id="buy" className="scroll-mt-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🛒</span>
              What To Buy
            </h2>
            <p className="text-gray-600 mb-6">{content.buy.description}</p>
            
            <div className="space-y-4 mb-6">
              {content.buy.guides.map((guide, index) => (
                <div key={index} className="border border-gray-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">{guide.stage}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-1">{guide.recommendation}</p>
                  <p className="text-gray-600 text-xs mb-2">Coverage: {guide.coverage}</p>
                  <p className="text-gray-500 text-xs">{guide.reasoning}</p>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2 text-sm">💡 Pro Tips</h3>
              <ul className="space-y-2">
                {content.buy.tips.map((tip, index) => (
                  <li key={index} className="flex items-start text-xs text-yellow-700">
                    <span className="mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-600">{currentContent.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentContent.points.map((point, index) => (
                <div key={index} className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">{point.title}</h3>
                  <p className="text-gray-600 text-sm">{point.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {currentContent.stats.map((stat, index) => (
                <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'offer':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-600">{currentContent.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 p-5 rounded-lg hover:shadow-md transition">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'types':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-600">{currentContent.description}</p>
            </div>
            
            <div className="space-y-4">
              {currentContent.categories.map((category, index) => (
                <div key={index} className="bg-white border border-gray-200 p-5 rounded-lg hover:border-blue-300 transition">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">{category.type}</h3>
                  <p className="text-gray-600 mb-3">{category.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {category.features.map((feature, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">Best for:</span> {category.bestFor}
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-600">{currentContent.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentContent.benefitsList.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-5 rounded-lg">
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'importance':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-600">{currentContent.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentContent.reasons.map((reason, index) => (
                <div key={index} className="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">{reason.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{reason.title}</h3>
                      <p className="text-gray-500 text-sm">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <p className="text-xl italic mb-2">"{currentContent.quote.text}"</p>
              <p className="text-sm opacity-90">— {currentContent.quote.author}</p>
            </div>
          </div>
        );

      case 'buy':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-600">{currentContent.description}</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Life Stage</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Recommendation</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Coverage</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Why</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentContent.guides.map((guide, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{guide.stage}</td>
                      <td className="px-4 py-3 text-sm text-blue-600">{guide.recommendation}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{guide.coverage}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{guide.reasoning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-3">💡 Pro Tips</h3>
              <ul className="space-y-2">
                {currentContent.tips.map((tip, index) => (
                  <li key={index} className="flex items-start text-sm text-yellow-700">
                    <span className="mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>Insurance Explained | Your Guide to Life Insurance</title>
        <meta name="description" content="Comprehensive guide to understanding life insurance, its types, benefits, and how to choose the right coverage for your needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Insurance Explained</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-1 sm:mt-2">Your complete guide to understanding life insurance</p>
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
                  <span className="mr-1">{tab.icon}</span>
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
                            ? 'bg-blue-50 border-l-4 border-blue-600 text-blue-700'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
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

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-8 sm:mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <p className="text-center text-gray-500 text-xs sm:text-sm">
              © 2024 Insurance Explained. This information is for educational purposes only. 
              Consult with a licensed insurance professional for personalized advice.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default InsuranceExplainer;