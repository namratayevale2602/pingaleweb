// pages/mutual-fund-explainer.js
"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  FaQuestionCircle,
  FaChartPie,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaBolt,
  FaTag,
  FaBalanceScale,
  FaWallet,
  FaShieldAlt,
  FaChartLine,
  FaCoins,
  FaCalendarAlt,
  FaPercent,
  FaGraduationCap,
  FaPiggyBank,
  FaUniversity,
  FaChartBar,
  FaClock,
  FaRocket,
  FaGift,
  FaLightbulb,
  FaCheckCircle,
  FaTimesCircle,
  FaUsers,
  FaStar,
  FaArrowUp,
  FaArrowDown,
  FaSyncAlt,
  FaDownload,
  FaUpload
} from 'react-icons/fa';

const MutualFundExplainer = () => {
  const [activeTab, setActiveTab] = useState('why-invest');
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
    { id: 'why-invest', label: 'Why Invest in MF?', icon: <FaQuestionCircle /> },
    { id: 'types', label: 'Types of Mutual Fund', icon: <FaChartPie /> },
    { id: 'sip', label: 'What is SIP?', icon: <FaMoneyBillWave /> },
    { id: 'stp', label: 'STP', icon: <FaExchangeAlt /> },
    { id: 'compounding', label: 'Power of Compounding', icon: <FaBolt /> },
    { id: 'elss', label: 'What is ELSS?', icon: <FaTag /> },
    { id: 'debt-vs-fd', label: 'Debt MF V/S FD', icon: <FaBalanceScale /> },
    { id: 'swp', label: 'SWP', icon: <FaWallet /> },
  ];

  const content = {
    'why-invest': {
      title: 'Why Invest in Mutual Funds?',
      description: 'Mutual funds offer a powerful way to grow your wealth through professional management and diversification.',
      reasons: [
        {
          icon: <FaShieldAlt />,
          title: 'Professional Management',
          description: 'Expert fund managers with research teams make investment decisions on your behalf'
        },
        {
          icon: <FaChartPie />,
          title: 'Diversification',
          description: 'Spread risk across multiple stocks/bonds with as little as ₹500 investment'
        },
        {
          icon: <FaBolt />,
          title: 'Power of Compounding',
          description: 'Reinvest earnings to generate exponential returns over long term'
        },
        {
          icon: <FaChartLine />,
          title: 'Higher Return Potential',
          description: 'Historically, equities have outperformed traditional investments like FD and gold'
        },
        {
          icon: <FaWallet />,
          title: 'Liquidity',
          description: 'Open-ended funds allow you to redeem your investment anytime'
        },
        {
          icon: <FaCoins />,
          title: 'Low Investment Threshold',
          description: 'Start with as little as ₹500 through SIP or ₹1000 as lump sum'
        },
        {
          icon: <FaUniversity />,
          title: 'Regulated & Transparent',
          description: 'SEBI regulated with complete portfolio disclosure and NAV publication daily'
        },
        {
          icon: <FaTag />,
          title: 'Tax Efficiency',
          description: 'ELSS offers tax saving under 80C; equity funds have LTCG tax benefits'
        }
      ],
    },
    types: {
      title: 'Types of Mutual Funds',
      description: 'Mutual funds are categorized based on asset class, structure, and investment objective.',
      categories: [
        {
          type: 'Equity Mutual Funds',
          description: 'Invest primarily in stock markets for high growth potential',
          subTypes: [
            'Large Cap Funds',
            'Mid Cap Funds', 
            'Small Cap Funds',
            'Flexi Cap Funds',
            'ELSS (Tax Saving)',
            'Sectoral/Thematic Funds'
          ],
          risk: 'High',
          horizon: '5-7 years',
          suitableFor: 'Long-term wealth creation'
        },
        {
          type: 'Debt Mutual Funds',
          description: 'Invest in fixed-income instruments like bonds, treasury bills',
          subTypes: [
            'Liquid Funds',
            'Ultra-Short Duration Funds',
            'Short Duration Funds',
            'Corporate Bond Funds',
            'Gilt Funds',
            'Dynamic Bond Funds'
          ],
          risk: 'Low to Moderate',
          horizon: '6 months - 3 years',
          suitableFor: 'Regular income, capital preservation'
        },
        {
          type: 'Hybrid Mutual Funds',
          description: 'Mix of equity and debt for balanced risk-return profile',
          subTypes: [
            'Aggressive Hybrid Funds',
            'Conservative Hybrid Funds',
            'Balanced Advantage Funds',
            'Arbitrage Funds',
            'Multi-Asset Allocation Funds'
          ],
          risk: 'Moderate',
          horizon: '3-5 years',
          suitableFor: 'Moderate risk takers'
        },
        {
          type: 'Solution-Oriented Funds',
          description: 'Designed for specific financial goals',
          subTypes: [
            'Retirement Funds',
            'Children\'s Funds',
            'ELSS (Tax Saving)'
          ],
          risk: 'Varies',
          horizon: '5+ years',
          suitableFor: 'Goal-based investing'
        },
        {
          type: 'Index Funds/ETFs',
          description: 'Passively track market indices like Nifty, Sensex',
          subTypes: [
            'Nifty 50 Index Funds',
            'Sensex ETFs',
            'Sectoral Index Funds',
            'International ETFs'
          ],
          risk: 'Low cost, market-linked',
          horizon: '5+ years',
          suitableFor: 'Passive investors, low-cost seekers'
        },
        {
          type: 'Fund of Funds (FoF)',
          description: 'Invest in other mutual funds',
          subTypes: [
            'International FoFs',
            'Gold FoFs',
            'Multi-Manager FoFs'
          ],
          risk: 'Diversified',
          horizon: '3-5 years',
          suitableFor: 'International diversification'
        }
      ]
    },
    sip: {
      title: 'What is SIP? (Systematic Investment Plan)',
      description: 'SIP allows you to invest a fixed amount regularly in mutual funds, making investing disciplined and affordable.',
      keyFeatures: [
        {
          icon: <FaCalendarAlt />,
          title: 'Regular Investment',
          description: 'Invest fixed amount monthly, quarterly, or weekly'
        },
        {
          icon: <FaArrowDown />,
          title: 'Rupee Cost Averaging',
          description: 'Buy more units when markets are low, fewer when high'
        },
        {
          icon: <FaBolt />,
          title: 'Power of Compounding',
          description: 'Small regular investments grow significantly over time'
        },
        {
          icon: <FaShieldAlt />,
          title: 'Discipline',
          description: 'Automated investments remove emotional decisions'
        },
        {
          icon: <FaCoins />,
          title: 'Low Entry Barrier',
          description: 'Start with as little as ₹500 per month'
        },
        {
          icon: <FaSyncAlt />,
          title: 'Flexibility',
          description: 'Increase, decrease, pause or stop anytime'
        }
      ],
      examples: [
        {
          amount: '₹5,000/month',
          years: 10,
          returns: '12%',
          total: '₹11.6 Lakhs',
          invested: '₹6 Lakhs'
        },
        {
          amount: '₹10,000/month',
          years: 15,
          returns: '12%',
          total: '₹50.5 Lakhs',
          invested: '₹18 Lakhs'
        },
        {
          amount: '₹25,000/month',
          years: 20,
          returns: '12%',
          total: '₹2.5 Crores',
          invested: '₹60 Lakhs'
        }
      ],
      tips: [
        'Start early to maximize compounding benefits',
        'Increase SIP amount by 10% annually (SIP top-up)',
        'Stay invested through market cycles',
        'Choose SIP date near your salary credit'
      ]
    },
    stp: {
      title: 'STP (Systematic Transfer Plan)',
      description: 'STP allows you to transfer a fixed amount regularly from one mutual fund scheme to another within the same fund house.',
      features: [
        {
          icon: <FaSyncAlt />,
          title: 'Automatic Transfers',
          description: 'Move money systematically from debt to equity or vice versa'
        },
        {
          icon: <FaArrowDown />,
          title: 'Rupee Cost Averaging',
          description: 'Enter equity markets gradually, reducing timing risk'
        },
        {
          icon: <FaArrowUp />,
          title: 'Better Returns',
          description: 'Earn higher returns on idle money by keeping in debt funds'
        },
        {
          icon: <FaChartBar />,
          title: 'Types of STP',
          description: 'Fixed STP, Capital Appreciation STP, Flexible STP, Variable STP'
        }
      ],
      types: [
        {
          name: 'Fixed STP',
          description: 'Transfer fixed amount at regular intervals',
          bestFor: 'Steady investment approach'
        },
        {
          name: 'Capital Appreciation STP',
          description: 'Transfer only the gains from source fund',
          bestFor: 'Protecting principal while investing gains'
        },
        {
          name: 'Flexible STP',
          description: 'Transfer amount based on market valuations',
          bestFor: 'Dynamic market timing'
        },
        {
          name: 'Variable STP',
          description: 'Transfer varying amounts as per choice',
          bestFor: 'Customized investment strategy'
        }
      ],
      useCases: [
        'Lump sum deployment in volatile markets',
        'Switching from debt to equity gradually',
        'Creating regular income from investments',
        'Rebalancing portfolio systematically'
      ]
    },
    compounding: {
      title: 'Power of Compounding',
      description: 'Compounding is the process where your investment earnings generate their own earnings, creating a snowball effect over time.',
      formula: 'A = P(1 + r)^n',
      explanation: 'Where A = Final Amount, P = Principal, r = Rate of Return, n = Time Period',
      illustration: [
        {
          age: 25,
          monthly: '₹5,000',
          total_at_60: '₹2.64 Cr',
          invested: '₹21 Lakhs',
          gain: '12.6x'
        },
        {
          age: 30,
          monthly: '₹5,000',
          total_at_60: '₹1.48 Cr',
          invested: '₹18 Lakhs',
          gain: '8.2x'
        },
        {
          age: 35,
          monthly: '₹5,000',
          total_at_60: '₹82 Lakhs',
          invested: '₹15 Lakhs',
          gain: '5.5x'
        },
        {
          age: 40,
          monthly: '₹5,000',
          total_at_60: '₹45 Lakhs',
          invested: '₹12 Lakhs',
          gain: '3.8x'
        }
      ],
      keyPoints: [
        {
          icon: <FaClock />,
          title: 'Start Early',
          description: 'A 25-year-old needs to invest only ₹5,000/month to reach ₹2.64 Cr by 60'
        },
        {
          icon: <FaChartLine />,
          title: 'Stay Invested',
          description: 'Longer investment periods create exponential growth'
        },
        {
          icon: <FaSyncAlt />,
          title: 'Reinvest Returns',
          description: 'Reinvesting dividends/returns accelerates compounding'
        },
        {
          icon: <FaBolt />,
          title: 'Consistency Matters',
          description: 'Regular investments harness compounding effectively'
        }
      ]
    },
    elss: {
      title: 'What is ELSS? (Equity Linked Savings Scheme)',
      description: 'ELSS is an equity-oriented mutual fund that offers tax benefits under Section 80C of Income Tax Act, with the shortest lock-in period of 3 years.',
      features: [
        {
          icon: <FaTag />,
          title: 'Tax Saving',
          description: 'Deduction up to ₹1.5 lakh under Section 80C'
        },
        {
          icon: <FaClock />,
          title: 'Shortest Lock-in',
          description: 'Only 3 years lock-in among all 80C options'
        },
        {
          icon: <FaChartLine />,
          title: 'Equity Growth',
          description: 'Potential for higher returns compared to traditional tax-saving options'
        },
        {
          icon: <FaWallet />,
          title: 'Partial Withdrawal',
          description: 'Not allowed during lock-in, complete liquidity after 3 years'
        },
        {
          icon: <FaPercent />,
          title: 'Dividend Option',
          description: 'Option to receive regular dividends (taxable)'
        },
        {
          icon: <FaSyncAlt />,
          title: 'SIP Available',
          description: 'Invest through SIP, each SIP installment has 3-year lock-in'
        }
      ],
      comparison: [
        {
          option: 'ELSS',
          lockIn: '3 years',
          returns: '12-15% p.a. (historical)',
          taxTreatment: 'LTCG > ₹1L taxed at 10%',
          risk: 'High'
        },
        {
          option: 'PPF',
          lockIn: '15 years',
          returns: '7.1% p.a. (current)',
          taxTreatment: 'EEE (Fully Tax-Free)',
          risk: 'Very Low'
        },
        {
          option: 'Tax-Saving FD',
          lockIn: '5 years',
          returns: '6-7% p.a.',
          taxTreatment: 'Interest Taxable',
          risk: 'Low'
        },
        {
          option: 'NSC',
          lockIn: '5 years',
          returns: '7.7% p.a.',
          taxTreatment: 'Interest Taxable',
          risk: 'Low'
        },
        {
          option: 'ULIP',
          lockIn: '5 years',
          returns: 'Market-linked',
          taxTreatment: 'Exempt under 10(10D)',
          risk: 'Moderate-High'
        }
      ],
      tips: [
        'Choose growth option for long-term wealth creation',
        'Start SIP in ELSS to spread lock-in periods',
        'Compare fund performance across market cycles',
        'Consider your risk profile before investing'
      ]
    },
    'debt-vs-fd': {
      title: 'Debt Mutual Funds VS Fixed Deposits',
      description: 'Compare Debt Mutual Funds and Fixed Deposits to make an informed investment decision.',
      comparison: [
        {
          aspect: 'Returns',
          debt: '7-9% p.a. (market-linked, varying)',
          fd: '6-7.5% p.a. (fixed, pre-determined)'
        },
        {
          aspect: 'Tax Efficiency',
          debt: 'Indexation benefit for LTCG (>3 years)', 
          fd: 'Fully taxable as per income slab'
        },
        {
          aspect: 'Liquidity',
          debt: 'High - redeem anytime (exit load may apply)',
          fd: 'Low - penalty for premature withdrawal'
        },
        {
          aspect: 'Safety',
          debt: 'Credit risk, interest rate risk',
          fd: 'Insured up to ₹5 lakhs by DICGC'
        },
        {
          aspect: 'Investment Horizon',
          debt: 'Flexible - days to years',
          fd: 'Fixed tenure (7 days to 10 years)'
        },
        {
          aspect: 'Minimum Investment',
          debt: '₹500 - ₹5000',
          fd: '₹1000 - ₹5000'
        },
        {
          aspect: 'Expense Ratio',
          debt: '0.5% - 1.5% p.a.',
          fd: 'No charges'
        },
        {
          aspect: 'Transparency',
          debt: 'Daily NAV publication, portfolio disclosure',
          fd: 'Fixed rate, no portfolio visibility'
        }
      ],
      prosCons: {
        debt: {
          pros: [
            'Better post-tax returns for high tax brackets',
            'High liquidity',
            'Diversification',
            'No penalty for withdrawal'
          ],
          cons: [
            'Market risk',
            'Credit risk',
            'Expense ratio',
            'No guarantee of returns'
          ]
        },
        fd: {
          pros: [
            'Guaranteed returns',
            'Capital protection',
            'Simple to understand',
            'Insurance cover'
          ],
          cons: [
            'Taxable returns',
            'Penalty on premature withdrawal',
            'Inflation risk',
            'Lock-in period'
          ]
        }
      },
      recommendation: {
        debt: 'Suitable for: Tax-efficient investing, short-term goals, high tax bracket individuals',
        fd: 'Suitable for: Senior citizens, conservative investors, emergency fund, short-term certainty'
      }
    },
    swp: {
      title: 'SWP (Systematic Withdrawal Plan)',
      description: 'SWP allows you to withdraw a fixed amount from your mutual fund investment at regular intervals, providing a steady income stream.',
      features: [
        {
          icon: <FaWallet />,
          title: 'Regular Income',
          description: 'Create a pension-like income stream from your investments'
        },
        {
          icon: <FaShieldAlt />,
          title: 'Capital Preservation',
          description: 'Withdraw only returns or a mix of capital as per need'
        },
        {
          icon: <FaTag />,
          title: 'Tax Efficiency',
          description: 'Only capital gains are taxed, not the entire withdrawal'
        },
        {
          icon: <FaSyncAlt />,
          title: 'Flexible Options',
          description: 'Choose amount, frequency (monthly/quarterly), and duration'
        }
      ],
      types: [
        {
          name: 'Fixed SWP',
          description: 'Withdraw fixed amount at regular intervals',
          bestFor: 'Predictable income needs'
        },
        {
          name: 'Appreciation SWP',
          description: 'Withdraw only the gains, preserve capital',
          bestFor: 'Capital preservation with income'
        },
        {
          name: 'Variable SWP',
          description: 'Withdraw varying amounts as needed',
          bestFor: 'Flexible income requirements'
        }
      ],
      example: {
        investment: '₹50 Lakhs in Debt Fund',
        swpAmount: '₹25,000/month',
        withdrawalPeriod: '20 years',
        totalWithdrawn: '₹60 Lakhs',
        remainingValue: 'Approx ₹45 Lakhs (at 7% returns)'
      },
      useCases: [
        'Retirement income planning',
        'Regular cash flow for expenses',
        'Education fees payment',
        'Loan EMI management',
        'Supplementing regular income'
      ],
      tips: [
        'Choose appropriate withdrawal rate (4-6% recommended)',
        'Consider inflation impact on withdrawals',
        'Monitor portfolio performance regularly',
        'Combine SWP with STP for dynamic management'
      ]
    }
  };

  // Render all sections for mobile view
  const renderMobileContent = () => {
    return (
      <div className="space-y-6">
        {/* Why Invest in MF? */}
        <section id="why-invest" className="scroll-mt-20">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-[#074a6b] mb-3 flex items-center">
              <span className="text-2xl mr-2 text-[#1a729e]">{tabs[0].icon}</span>
              Why Invest in Mutual Funds?
            </h2>
            <p className="text-sm text-gray-800 mb-4">{content['why-invest'].description}</p>
            
            <div className="space-y-3 mb-4">
              {content['why-invest'].reasons.map((reason, index) => (
                <div key={index} className="bg-blue-50 bg-opacity-50 p-3 rounded-lg">
                  <div className="flex items-start">
                    <span className="text-xl mr-2 text-[#1a729e]">{reason.icon}</span>
                    <div>
                      <h3 className="font-semibold text-[#074a6b] text-sm">{reason.title}</h3>
                      <p className="text-gray-800 text-xs">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

           
          </div>
        </section>

        {/* Types of Mutual Fund */}
        <section id="types" className="scroll-mt-20">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-[#074a6b] mb-3 flex items-center">
              <span className="text-2xl mr-2 text-[#1a729e]">{tabs[1].icon}</span>
              Types of Mutual Fund
            </h2>
            <p className="text-sm text-gray-800 mb-4">{content.types.description}</p>
            
            <div className="space-y-3">
              {content.types.categories.map((category, index) => (
                <div key={index} className="border border-gray-200 p-3 rounded-lg">
                  <h3 className="font-semibold text-[#0080bf] text-sm mb-1">{category.type}</h3>
                  <p className="text-gray-800 text-xs mb-2">{category.description}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {category.subTypes.map((sub, idx) => (
                      <span key={idx} className="bg-[rgb(208,239,255)] text-[#0080bf] text-[10px] px-2 py-0.5 rounded-full">
                        {sub}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-[10px]">
                    <span className="text-gray-500">Risk: {category.risk}</span>
                    <span className="text-gray-500">Horizon: {category.horizon}</span>
                    <span className="text-gray-500 truncate" title={category.suitableFor}>
                      {category.suitableFor.substring(0, 15)}...
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is SIP? */}
        <section id="sip" className="scroll-mt-20">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-[#074a6b] mb-3 flex items-center">
              <span className="text-2xl mr-2 text-[#1a729e]">{tabs[2].icon}</span>
              What is SIP?
            </h2>
            <p className="text-sm text-gray-800 mb-4">{content.sip.description}</p>
            
            <div className="space-y-3 mb-4">
              {content.sip.keyFeatures.map((feature, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-start">
                    <span className="text-xl mr-2 text-[#1a729e]">{feature.icon}</span>
                    <div>
                      <h3 className="font-semibold text-[#074a6b] text-sm">{feature.title}</h3>
                      <p className="text-gray-800 text-xs">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-semibold text-[#074a6b] text-sm mb-2">SIP Growth Examples (12% returns):</h3>
            <div className="space-y-2 mb-4">
              {content.sip.examples.map((example, index) => (
                <div key={index} className="bg-gray-50 p-2 rounded-lg flex justify-between items-center text-xs">
                  <div>
                    <span className="font-medium">{example.amount}</span>
                    <span className="text-gray-500 ml-1">for {example.years}y</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-[#0080bf]">{example.total}</span>
                    <span className="text-gray-400 text-[10px] block">Invested: {example.invested}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-[#0080bf] text-xs mb-1 flex items-center">
                <FaLightbulb className="mr-1 text-[#0080bf]" /> Pro Tips
              </h4>
              <ul className="space-y-1">
                {content.sip.tips.map((tip, index) => (
                  <li key={index} className="flex items-start text-[10px] text-gray-800">
                    <span className="mr-1">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* STP */}
        <section id="stp" className="scroll-mt-20">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-[#074a6b] mb-3 flex items-center">
              <span className="text-2xl mr-2 text-[#1a729e]">{tabs[3].icon}</span>
              STP (Systematic Transfer Plan)
            </h2>
            <p className="text-sm text-gray-800 mb-4">{content.stp.description}</p>
            
            <div className="space-y-3 mb-4">
              {content.stp.features.map((feature, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-start">
                    <span className="text-xl mr-2 text-[#1a729e]">{feature.icon}</span>
                    <div>
                      <h3 className="font-semibold text-[#074a6b] text-sm">{feature.title}</h3>
                      <p className="text-gray-800 text-xs">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-semibold text-[#074a6b] text-sm mb-2">Types of STP:</h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {content.stp.types.map((type, index) => (
                <div key={index} className="border border-gray-200 p-2 rounded-lg">
                  <h4 className="font-medium text-xs text-[#074a6b]">{type.name}</h4>
                  <p className="text-[10px] text-gray-500 mt-1">{type.bestFor}</p>
                </div>
              ))}
            </div>

            
          </div>
        </section>

        {/* Power of Compounding */}
        <section id="compounding" className="scroll-mt-20">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-[#074a6b] mb-3 flex items-center">
              <span className="text-2xl mr-2 text-[#1a729e]">{tabs[4].icon}</span>
              Power of Compounding
            </h2>
            <p className="text-sm text-gray-800 mb-4">{content.compounding.description}</p>
            
            
            <h3 className="font-semibold text-[#074a6b] text-sm mb-2">Start Early Impact (₹5,000/month):</h3>
            <div className="space-y-2 mb-4">
              {content.compounding.illustration.map((item, index) => (
                <div key={index} className="bg-gray-50 p-2 rounded-lg flex justify-between items-center text-xs">
                  <div>
                    <span className="font-medium">Start at {item.age}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-[#0080bf]">{item.total_at_60}</span>
                    <span className="text-gray-400 text-[10px] block">Gain: {item.gain}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2">
              {content.compounding.keyPoints.map((point, index) => (
                <div key={index} className="bg-white border border-gray-200 p-2 rounded-lg">
                  <span className="text-lg block mb-1 text-[#1a729e]">{point.icon}</span>
                  <h4 className="font-medium text-xs text-[#074a6b]">{point.title}</h4>
                  <p className="text-[10px] text-gray-500 mt-1">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is ELSS? */}
        <section id="elss" className="scroll-mt-20">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-[#074a6b] mb-3 flex items-center">
              <span className="text-2xl mr-2 text-[#1a729e]">{tabs[5].icon}</span>
              What is ELSS?
            </h2>
            <p className="text-sm text-gray-800 mb-4">{content.elss.description}</p>
            
            <div className="space-y-3 mb-4">
              {content.elss.features.map((feature, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-start">
                    <span className="text-xl mr-2 text-[#1a729e]">{feature.icon}</span>
                    <div>
                      <h3 className="font-semibold text-[#074a6b] text-sm">{feature.title}</h3>
                      <p className="text-gray-800 text-xs">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-semibold text-[#074a6b] text-sm mb-2">VS Other Tax Options:</h3>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full text-[10px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-2 py-1 text-left">Option</th>
                    <th className="px-2 py-1 text-left">Lock-in</th>
                    <th className="px-2 py-1 text-left">Returns</th>
                  </tr>
                </thead>
                <tbody>
                  {content.elss.comparison.slice(0, 3).map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-2 py-1 font-medium text-[#074a6b]">{item.option}</td>
                      <td className="px-2 py-1">{item.lockIn}</td>
                      <td className="px-2 py-1">{item.returns}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-[#0080bf] text-xs mb-1 flex items-center">
                <FaLightbulb className="mr-1 text-[#0080bf]" /> Tips
              </h4>
              <ul className="space-y-1">
                {content.elss.tips.map((tip, index) => (
                  <li key={index} className="flex items-start text-[10px] text-gray-800">
                    <span className="mr-1">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Debt MF V/S FD */}
        <section id="debt-vs-fd" className="scroll-mt-20">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-[#074a6b] mb-3 flex items-center">
              <span className="text-2xl mr-2 text-[#1a729e]">{tabs[6].icon}</span>
              Debt MF V/S FD
            </h2>
            <p className="text-sm text-gray-800 mb-4">{content['debt-vs-fd'].description}</p>
            
            <div className="space-y-3 mb-4">
              {content['debt-vs-fd'].comparison.slice(0, 4).map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-2">
                  <h4 className="font-medium text-xs text-[#074a6b] mb-1">{item.aspect}</h4>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="bg-blue-50 p-2 rounded"> Debt: {item.debt}</div>
                    <div className="bg-blue-50 p-2 rounded"> FD: {item.fd}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-blue-50 p-2 rounded-lg">
                <h4 className="font-semibold text-blue-800 text-xs mb-1 flex items-center">
                  <FaCheckCircle className="mr-1 text-blue-600" /> Debt MF Pros
                </h4>
                <ul className="space-y-1">
                  {content['debt-vs-fd'].prosCons.debt.pros.slice(0, 2).map((pro, idx) => (
                    <li key={idx} className="text-[10px] flex items-start">
                      <span className="text-green-500 mr-1">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 p-2 rounded-lg">
                <h4 className="font-semibold text-green-800 text-xs mb-1 flex items-center">
                  <FaCheckCircle className="mr-1 text-green-600" /> FD Pros
                </h4>
                <ul className="space-y-1">
                  {content['debt-vs-fd'].prosCons.fd.pros.slice(0, 2).map((pro, idx) => (
                    <li key={idx} className="text-[10px] flex items-start">
                      <span className="text-green-500 mr-1">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-2 rounded-lg">
              <p className="text-[10px] text-gray-700"><span className="font-semibold text-[#074a6b]">Recommendation:</span> {content['debt-vs-fd'].recommendation.debt}</p>
            </div>
          </div>
        </section>

        {/* SWP */}
        <section id="swp" className="scroll-mt-20">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-[#074a6b] mb-3 flex items-center">
              <span className="text-2xl mr-2 text-[#1a729e]">{tabs[7].icon}</span>
              SWP (Systematic Withdrawal Plan)
            </h2>
            <p className="text-sm text-gray-800 mb-4">{content.swp.description}</p>
            
            <div className="space-y-3 mb-4">
              {content.swp.features.map((feature, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-start">
                    <span className="text-xl mr-2 text-[#1a729e]">{feature.icon}</span>
                    <div>
                      <h3 className="font-semibold text-[#074a6b] text-sm">{feature.title}</h3>
                      <p className="text-gray-800 text-xs">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 bg-opacity-50 p-3 rounded-lg mb-4">
              <h4 className="font-semibold text-[#074a6b] text-xs mb-1"> Example</h4>
              <p className="text-[10px]">₹50L investment → ₹25,000/month for 20 years</p>
              <p className="text-[10px]">Total withdrawn: ₹60L, Remaining: ~₹45L</p>
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
      case 'why-invest':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#074a6b] mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-800">{currentContent.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentContent.reasons.map((reason, index) => (
                <div key={index} className="bg-blue-50 bg-opacity-50 p-5 rounded-lg hover:shadow-md transition">
                  <div className="text-3xl mb-3 text-[#1a729e]">{reason.icon}</div>
                  <h3 className="font-semibold text-[#0080bf] mb-2">{reason.title}</h3>
                  <p className="text-gray-800 text-sm">{reason.description}</p>
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
            
            <div className="space-y-6">
              {currentContent.categories.map((category, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg hover:border-[#0080bf] transition">
                  <h3 className="text-xl font-semibold text-[#0080bf] mb-2">{category.type}</h3>
                  <p className="text-gray-800 mb-4">{category.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.subTypes.map((sub, idx) => (
                      <span key={idx} className="bg-[rgb(208,239,255)] text-[#0080bf] text-sm px-3 py-1 rounded-full">
                        {sub}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
                    <div>
                      <span className="text-gray-500 block">Risk Level</span>
                      <span className="font-medium text-[#074a6b]">{category.risk}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Investment Horizon</span>
                      <span className="font-medium text-[#074a6b]">{category.horizon}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Suitable For</span>
                      <span className="font-medium text-[#074a6b]">{category.suitableFor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'sip':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#074a6b] mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-800">{currentContent.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentContent.keyFeatures.map((feature, index) => (
                <div key={index} className="bg-blue-50 p-5 rounded-lg">
                  <div className="text-3xl mb-3 text-[#1a729e]">{feature.icon}</div>
                  <h3 className="font-semibold text-[#0080bf] mb-2">{feature.title}</h3>
                  <p className="text-gray-800 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-semibold text-[#0080bf] mb-3 flex items-center">
                <FaLightbulb className="mr-2 text-[#0080bf]" /> Pro Tips for SIP
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentContent.tips.map((tip, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-800">
                    <span className="mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'stp':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#074a6b] mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-800">{currentContent.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="bg-blue-50 p-5 rounded-lg">
                  <div className="text-3xl mb-3 text-[#1a729e]">{feature.icon}</div>
                  <h3 className="font-semibold text-[#0080bf] mb-2">{feature.title}</h3>
                  <p className="text-gray-800 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Types of STP</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentContent.types.map((type, index) => (
                  <div key={index} className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#074a6b] mb-2">{type.name}</h4>
                    <p className="text-sm text-gray-800 mb-2">{type.description}</p>
                    <p className="text-xs text-[#0080bf]">Best for: {type.bestFor}</p>
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        );

      case 'compounding':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#074a6b] mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-800">{currentContent.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Start Early - See the Difference!</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-indigo-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Start Age</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Monthly SIP</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">At Age 60</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Total Invested</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Gain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {currentContent.illustration.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium">{item.age}</td>
                        <td className="px-4 py-3 text-sm">{item.monthly}</td>
                        <td className="px-4 py-3 text-sm font-bold text-[#0080bf]">{item.total_at_60}</td>
                        <td className="px-4 py-3 text-sm">{item.invested}</td>
                        <td className="px-4 py-3 text-sm text-green-600">{item.gain}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentContent.keyPoints.map((point, index) => (
                <div key={index} className="bg-white border border-gray-200 p-5 rounded-lg">
                  <span className="text-3xl mb-3 block text-[#1a729e]">{point.icon}</span>
                  <h4 className="font-semibold text-[#074a6b] mb-2">{point.title}</h4>
                  <p className="text-gray-800 text-sm">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'elss':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#0080bf] mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-800">{currentContent.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="bg-blue-50 p-5 rounded-lg">
                  <div className="text-3xl mb-3 text-[#1a729e]">{feature.icon}</div>
                  <h3 className="font-semibold text-[#0080bf] mb-2">{feature.title}</h3>
                  <p className="text-gray-800 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

           

            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-semibold text-[#0080bf] mb-3 flex items-center">
                <FaLightbulb className="mr-2 text-[#0080bf]" /> Key Tips for ELSS
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentContent.tips.map((tip, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-800">
                    <span className="mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'debt-vs-fd':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#074a6b] mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-800">{currentContent.description}</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">Aspect</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[#0080bf]">Debt Mutual Funds</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-green-600">Fixed Deposits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentContent.comparison.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-800">{item.aspect}</td>
                      <td className="px-4 py-3 text-sm text-gray-800">{item.debt}</td>
                      <td className="px-4 py-3 text-sm text-gray-800">{item.fd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                  <FaCheckCircle className="mr-2 text-blue-600" /> Debt Mutual Funds
                </h3>
                <div className="mb-3">
                  <h4 className="font-medium text-blue-700 mb-2">Pros:</h4>
                  <ul className="space-y-1">
                    {currentContent.prosCons.debt.pros.map((pro, idx) => (
                      <li key={idx} className="text-sm text-gray-800 flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-600 mb-2">Cons:</h4>
                  <ul className="space-y-1">
                    {currentContent.prosCons.debt.cons.map((con, idx) => (
                      <li key={idx} className="text-sm text-gray-800 flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                  <FaCheckCircle className="mr-2 text-green-600" /> Fixed Deposits
                </h3>
                <div className="mb-3">
                  <h4 className="font-medium text-green-700 mb-2">Pros:</h4>
                  <ul className="space-y-1">
                    {currentContent.prosCons.fd.pros.map((pro, idx) => (
                      <li key={idx} className="text-sm text-gray-800 flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-600 mb-2">Cons:</h4>
                  <ul className="space-y-1">
                    {currentContent.prosCons.fd.cons.map((con, idx) => (
                      <li key={idx} className="text-sm text-gray-800 flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#074a6b] to-[#1a729e] text-white p-6 rounded-lg">
              <p className="text-lg font-semibold mb-2">Recommendation</p>
              <p className="text-sm opacity-90">{currentContent.recommendation.debt}</p>
              <p className="text-sm opacity-90 mt-2">{currentContent.recommendation.fd}</p>
            </div>
          </div>
        );

      case 'swp':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#074a6b] mb-4">{currentContent.title}</h2>
              <p className="text-lg text-gray-800">{currentContent.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="bg-blue-50 p-5 rounded-lg">
                  <div className="text-3xl mb-3 text-[#1a729e]">{feature.icon}</div>
                  <h3 className="font-semibold text-[#0080bf] mb-2">{feature.title}</h3>
                  <p className="text-gray-800 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentContent.types.map((type, index) => (
                <div key={index} className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#074a6b] mb-2">{type.name}</h4>
                  <p className="text-sm text-gray-800 mb-2">{type.description}</p>
                  <p className="text-xs text-[#0080bf]">Best for: {type.bestFor}</p>
                </div>
              ))}
            </div>


            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-semibold text-[#0080bf] mb-3 flex items-center">
                <FaLightbulb className="mr-2 text-[#0080bf]" /> Key Tips for SWP
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentContent.tips.map((tip, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-800">
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
     

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#074a6b]">Mutual Fund</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mt-1 sm:mt-2">Your complete guide to understanding mutual funds</p>
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
                  className="flex-shrink-0 flex items-center px-3 py-2 bg-[rgb(208,239,255)] rounded-full text-sm text-[#074a6b] hover:bg-[rgb(180,220,240)] transition"
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
                            : 'text-[#1a729e] hover:bg-[rgb(208,239,255)] hover:text-[#074a6b]'
                        }`}
                      >
                        <span className="text-xl mr-3 text-[#1a729e]">{tab.icon}</span>
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

export default MutualFundExplainer;