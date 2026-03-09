// pages/mutual-fund-products.js
"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  FaChartLine,
  FaUniversity,
  FaBalanceScale,
  FaChartBar,
  FaTag,
  FaTint,
  FaGlobe,
  FaBullseye,
  FaShieldAlt,
  FaCoins,
  FaPercent,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTimesCircle,
  FaLightbulb,
  FaUsers,
  FaStar,
  FaArrowUp,
  FaArrowDown,
  FaSyncAlt,
  FaMoneyBillWave,
  FaPiggyBank,
  FaWallet,
  FaChartPie,
  FaIndustry,
  FaHospital,
  FaLaptop,
  FaCar,
  FaHome,
  FaLeaf,
  FaBuilding,
  FaLandmark,
  FaGem,
  FaRocket,
  FaClock,
  FaGift
} from 'react-icons/fa';

const MutualFundProducts = () => {
  const [activeTab, setActiveTab] = useState('equity');
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
    { id: 'equity', label: 'Equity Funds', icon: <FaChartLine /> },
    { id: 'debt', label: 'Debt Funds', icon: <FaUniversity /> },
    { id: 'hybrid', label: 'Hybrid Funds', icon: <FaBalanceScale /> },
    { id: 'index', label: 'Index Funds/ETFs', icon: <FaChartBar /> },
    { id: 'elss', label: 'ELSS (Tax Saving)', icon: <FaTag /> },
    { id: 'liquid', label: 'Liquid Funds', icon: <FaTint /> },
    { id: 'international', label: 'International Funds', icon: <FaGlobe /> },
    { id: 'sectoral', label: 'Sectoral/Thematic', icon: <FaBullseye /> },
  ];

  const products = {
    equity: {
      title: 'Equity Mutual Funds',
      tagline: 'Growth through stock market investments',
      description: 'Equity funds invest primarily in stocks across market capitalizations, offering high growth potential with higher risk. Ideal for long-term wealth creation.',
      categories: [
        {
          name: 'Large Cap Funds',
          risk: 'Moderate',
          return: '12-14%',
          horizon: '5-7 years',
          minInvestment: '₹500',
          features: 'Invest in top 100 companies by market cap, stable returns',
          suitableFor: 'Conservative equity investors, beginners'
        },
        {
          name: 'Mid Cap Funds',
          risk: 'High',
          return: '14-16%',
          horizon: '7-10 years',
          minInvestment: '₹500',
          features: 'Invest in 101-250 ranked companies, higher growth potential',
          suitableFor: 'Moderate risk takers, growth seekers'
        },
        {
          name: 'Small Cap Funds',
          risk: 'Very High',
          return: '16-18%',
          horizon: '7-10 years',
          minInvestment: '₹500',
          features: 'Invest in 251+ ranked companies, highest growth potential',
          suitableFor: 'Aggressive investors, long-term wealth creation'
        },
        {
          name: 'Flexi Cap Funds',
          risk: 'Moderate-High',
          return: '13-15%',
          horizon: '5-7 years',
          minInvestment: '₹500',
          features: 'Flexibility to invest across market caps based on opportunities',
          suitableFor: 'Investors wanting diversification'
        },
        {
          name: 'Multi Cap Funds',
          risk: 'Moderate-High',
          return: '13-15%',
          horizon: '5-7 years',
          minInvestment: '₹500',
          features: 'Mandatory investment in large, mid, and small caps',
          suitableFor: 'Diversified equity exposure seekers'
        },
        {
          name: 'Value Funds',
          risk: 'Moderate',
          return: '12-14%',
          horizon: '5-7 years',
          minInvestment: '₹500',
          features: 'Invest in undervalued stocks, contrarian approach',
          suitableFor: 'Value investors, contrarian thinkers'
        }
      ],
      topPerformers: [
        { fund: 'Quant Large Cap Fund', returns: '18.5%', aum: '₹8,200 Cr' },
        { fund: 'HDFC Mid-Cap Opportunities', returns: '22.3%', aum: '₹32,500 Cr' },
        { fund: 'SBI Small Cap Fund', returns: '25.1%', aum: '₹18,700 Cr' }
      ],
      pros: [
        'Highest long-term return potential',
        'Beat inflation effectively',
        'Professional fund management',
        'Diversification across companies',
        'Tax efficient for long term'
      ],
      cons: [
        'High volatility in short term',
        'Market risk',
        'Not suitable for short-term goals',
        'Requires patience and discipline'
      ],
      bestFor: 'Long-term goals (7+ years), wealth creation, retirement planning, children\'s education',
      tips: [
        'Start with large cap funds if new to equity',
        'Invest through SIP to average out volatility',
        'Hold for at least 5-7 years',
        'Review performance annually'
      ]
    },
    debt: {
      title: 'Debt Mutual Funds',
      tagline: 'Stable returns with capital preservation',
      description: 'Debt funds invest in fixed-income instruments like government securities, corporate bonds, and money market instruments. Ideal for stability and regular income.',
      categories: [
        {
          name: 'Liquid Funds',
          risk: 'Low',
          return: '6-7%',
          horizon: '1-30 days',
          minInvestment: '₹500',
          features: 'Invest in money market instruments up to 91 days maturity',
          suitableFor: 'Emergency funds, short-term parking'
        },
        {
          name: 'Ultra-Short Duration Funds',
          risk: 'Low',
          return: '6.5-7.5%',
          horizon: '3-6 months',
          minInvestment: '₹500',
          features: 'Invest in papers with 3-6 months maturity',
          suitableFor: '3-6 month investment horizon'
        },
        {
          name: 'Short Duration Funds',
          risk: 'Low-Moderate',
          return: '7-8%',
          horizon: '1-3 years',
          minInvestment: '₹500',
          features: 'Invest in papers with 1-3 year maturity',
          suitableFor: '1-3 year goals'
        },
        {
          name: 'Corporate Bond Funds',
          risk: 'Moderate',
          return: '7.5-8.5%',
          horizon: '2-3 years',
          minInvestment: '₹500',
          features: '80% investment in highest rated corporate bonds',
          suitableFor: 'Higher returns with moderate risk'
        },
        {
          name: 'Gilt Funds',
          risk: 'Moderate',
          return: '7-8%',
          horizon: '3-5 years',
          minInvestment: '₹500',
          features: 'Invest in government securities, no credit risk',
          suitableFor: 'Safety seekers, interest rate play'
        },
        {
          name: 'Dynamic Bond Funds',
          risk: 'Moderate',
          return: '7.5-9%',
          horizon: '3-5 years',
          minInvestment: '₹500',
          features: 'Actively manage duration based on interest rate views',
          suitableFor: 'Active fixed income investors'
        }
      ],
      interestRateScenario: {
        falling: 'Long duration funds perform best',
        rising: 'Short duration and floating rate funds perform best',
        stable: 'Corporate bond and medium duration funds perform well'
      },
      pros: [
        'Lower risk than equity',
        'Stable returns',
        'Better tax efficiency than FD',
        'High liquidity',
        'No penalty for withdrawal'
      ],
      cons: [
        'Credit risk in corporate bonds',
        'Interest rate risk',
        'Returns may not beat inflation',
        'Exit load in some categories'
      ],
      bestFor: 'Short-term goals (1-3 years), emergency funds, retired persons, capital preservation',
      tips: [
        'Choose liquid/ultra-short for <6 months',
        'Match fund duration with investment horizon',
        'Check credit quality of portfolio',
        'Consider tax-free bonds for high bracket'
      ]
    },
    hybrid: {
      title: 'Hybrid Mutual Funds',
      tagline: 'Best of both worlds - Equity + Debt',
      description: 'Hybrid funds invest in a mix of equity and debt instruments, offering balanced risk-return profile. Suitable for moderate risk takers.',
      categories: [
        {
          name: 'Aggressive Hybrid Funds',
          equity: '65-80%',
          debt: '20-35%',
          risk: 'Moderate-High',
          return: '10-12%',
          horizon: '3-5 years',
          suitableFor: 'Growth with some stability'
        },
        {
          name: 'Conservative Hybrid Funds',
          equity: '10-25%',
          debt: '75-90%',
          risk: 'Low-Moderate',
          return: '8-9%',
          horizon: '2-3 years',
          suitableFor: 'Stability with some growth'
        },
        {
          name: 'Balanced Advantage Funds',
          equity: '0-100%',
          debt: '0-100%',
          risk: 'Dynamic',
          return: '9-11%',
          horizon: '3-5 years',
          suitableFor: 'Market timing not required'
        },
        {
          name: 'Arbitrage Funds',
          equity: 'Derivatives based',
          debt: 'Cash',
          risk: 'Low',
          return: '5-7%',
          horizon: '3-6 months',
          suitableFor: 'Tax efficient alternative to FD'
        },
        {
          name: 'Multi-Asset Funds',
          assets: 'Equity + Debt + Gold',
          risk: 'Moderate',
          return: '10-12%',
          horizon: '3-5 years',
          suitableFor: 'Diversification across asset classes'
        }
      ],
      taxTreatment: [
        { type: 'Aggressive Hybrid', equityExposure: '>65%', tax: 'Taxed as equity' },
        { type: 'Conservative Hybrid', equityExposure: '<65%', tax: 'Taxed as debt' },
        { type: 'Arbitrage Funds', equityExposure: '>65%', tax: 'Taxed as equity' }
      ],
      pros: [
        'Built-in diversification',
        'Automatic rebalancing',
        'Lower volatility than pure equity',
        'Suitable for moderate risk takers',
        'Tax efficient in equity-oriented'
      ],
      cons: [
        'Lower returns than pure equity',
        'May underperform in strong markets',
        'Complex to understand',
        'Tax complexity based on type'
      ],
      bestFor: 'Moderate risk takers, first-time investors, goal-based investing (3-5 years)',
      tips: [
        'Choose based on equity-debt mix needed',
        'Arbitrage funds for tax efficient parking',
        'Balanced advantage for dynamic allocation',
        'Review asset allocation annually'
      ]
    },
    index: {
      title: 'Index Funds & ETFs',
      tagline: 'Passive investing at low cost',
      description: 'Index funds and ETFs track market indices like Nifty 50, Sensex, offering market returns at very low cost. Perfect for passive investors.',
      categories: [
        {
          name: 'Nifty 50 Index Funds',
          benchmark: 'Nifty 50',
          expense: '0.2-0.5%',
          returns: 'Market returns',
          minInvestment: '₹500',
          features: 'Track top 50 companies'
        },
        {
          name: 'Sensex Index Funds',
          benchmark: 'BSE Sensex',
          expense: '0.2-0.5%',
          returns: 'Market returns',
          minInvestment: '₹500',
          features: 'Track 30 blue-chip companies'
        },
        {
          name: 'Nifty Next 50 Funds',
          benchmark: 'Nifty Next 50',
          expense: '0.3-0.6%',
          returns: 'Market returns',
          minInvestment: '₹500',
          features: 'Track next 50 companies'
        },
        {
          name: 'Banking ETFs',
          benchmark: 'Bank Nifty',
          expense: '0.2-0.4%',
          returns: 'Sector returns',
          minInvestment: '₹500',
          features: 'Track banking stocks'
        },
        {
          name: 'Gold ETFs',
          benchmark: 'Gold Price',
          expense: '0.5-1%',
          returns: 'Gold returns',
          minInvestment: '₹500',
          features: 'Paper gold investment'
        },
        {
          name: 'International ETFs',
          benchmark: 'Nasdaq/Dow Jones',
          expense: '0.5-1%',
          returns: 'Global returns',
          minInvestment: '₹500',
          features: 'US/Global market exposure'
        }
      ],
      comparison: [
        { feature: 'Expense Ratio', active: '1-2%', passive: '0.2-0.5%' },
        { feature: 'Fund Manager Risk', active: 'Yes', passive: 'No' },
        { feature: 'Tracking Error', active: 'Not applicable', passive: 'Minimal' },
        { feature: 'Returns Goal', active: 'Beat market', passive: 'Match market' }
      ],
      pros: [
        'Very low expense ratio',
        'No fund manager risk',
        'Transparent portfolio',
        'Market-linked returns',
        'Tax efficient'
      ],
      cons: [
        'No chance to beat market',
        'Tracking error possible',
        'Less flexible than active',
        'Not suitable for all markets'
      ],
      bestFor: 'Passive investors, low-cost seekers, long-term wealth building, satellite portfolio',
      tips: [
        'Choose funds with lowest expense ratio',
        'Check tracking error regularly',
        'Combine with active funds',
        'Use ETFs for low investment amounts'
      ]
    },
    elss: {
      title: 'ELSS (Equity Linked Savings Scheme)',
      tagline: 'Tax saving + Wealth creation',
      description: 'ELSS is an equity-oriented mutual fund that offers tax benefits under Section 80C with the shortest lock-in period of 3 years.',
      keyFeatures: [
        {
          icon: <FaTag />,
          title: 'Tax Saving',
          description: 'Deduction up to ₹1.5 lakh under Section 80C'
        },
        {
          icon: <FaClock />,
          title: 'Shortest Lock-in',
          description: 'Only 3 years among all 80C options'
        },
        {
          icon: <FaChartLine />,
          title: 'Equity Growth',
          description: 'Potential for 12-15% long-term returns'
        },
        {
          icon: <FaSyncAlt />,
          title: 'SIP Available',
          description: 'Each SIP installment has 3-year lock-in'
        }
      ],
      topELSSFunds: [
        { fund: 'Mirae Asset Tax Saver Fund', returns: '18.2%', aum: '₹8,500 Cr' },
        { fund: 'SBI Long Term Equity Fund', returns: '16.5%', aum: '₹12,300 Cr' },
        { fund: 'Axis Long Term Equity Fund', returns: '17.1%', aum: '₹15,200 Cr' },
        { fund: 'Quant Tax Plan', returns: '19.8%', aum: '₹4,100 Cr' }
      ],
      comparison: [
        { option: 'ELSS', lockIn: '3 years', returns: '12-15%', tax: 'LTCG >1L taxed 10%' },
        { option: 'PPF', lockIn: '15 years', returns: '7.1%', tax: 'EEE (Tax Free)' },
        { option: 'Tax-Saving FD', lockIn: '5 years', returns: '6-7%', tax: 'Interest Taxable' },
        { option: 'NSC', lockIn: '5 years', returns: '7.7%', tax: 'Interest Taxable' }
      ],
      pros: [
        'Tax saving with equity returns',
        'Shortest lock-in period',
        'SIP facility available',
        'No upper investment limit',
        'Professional management'
      ],
      cons: [
        'Market risk',
        '3-year lock-in',
        'LTCG tax applicable',
        'Exit load if redeemed early'
      ],
      bestFor: 'Tax payers in 20-30% bracket, long-term investors, first-time tax savers',
      tips: [
        'Start SIP to spread lock-in periods',
        'Choose growth option for compounding',
        'Do not redeem immediately after lock-in',
        'Compare performance across cycles'
      ]
    },
    liquid: {
      title: 'Liquid Funds',
      tagline: 'Better than savings account',
      description: 'Liquid funds invest in money market instruments up to 91 days maturity. They offer better returns than savings accounts with high safety and liquidity.',
      keyFeatures: [
        {
          icon: <FaTint />,
          title: 'High Liquidity',
          description: 'Redeem anytime, money in bank within 1 day'
        },
        {
          icon: <FaMoneyBillWave />,
          title: 'Better Returns',
          description: 'Earn 6-7% vs 2.5-3% in savings account'
        },
        {
          icon: <FaShieldAlt />,
          title: 'Low Risk',
          description: 'Invest in highest quality papers'
        },
        {
          icon: <FaCalendarAlt />,
          title: 'No Lock-in',
          description: 'Withdraw anytime without penalty'
        }
      ],
      returns: [
        { amount: '₹1 Lakh', savingAccount: '₹2,500', liquidFund: '₹6,500', gain: '₹4,000' },
        { amount: '₹5 Lakhs', savingAccount: '₹12,500', liquidFund: '₹32,500', gain: '₹20,000' },
        { amount: '₹10 Lakhs', savingAccount: '₹25,000', liquidFund: '₹65,000', gain: '₹40,000' }
      ],
      pros: [
        'Better than savings account',
        'Very low risk',
        'High liquidity (T+1)',
        'No exit load',
        'Ideal for emergency fund'
      ],
      cons: [
        'Returns taxable as per slab',
        'Lower than inflation',
        'Minimum investment ₹500',
        'Not for long-term goals'
      ],
      bestFor: 'Emergency funds (3-6 months expenses), short-term parking (up to 3 months), corporate treasuries',
      tips: [
        'Maintain emergency fund in liquid funds',
        'Use for short-term cash needs',
        'Compare expense ratios',
        'Consider for high balance savings'
      ]
    },
    international: {
      title: 'International Funds',
      tagline: 'Go global with your investments',
      description: 'International funds invest in overseas markets, providing geographical diversification and exposure to global giants like Apple, Amazon, Google.',
      categories: [
        {
          name: 'US Equity Funds',
          exposure: 'S&P 500, Nasdaq',
          returns: '12-15%',
          risk: 'Moderate-High',
          minInvestment: '₹500',
          features: 'Invest in US tech, healthcare, consumer companies'
        },
        {
          name: 'China/Hong Kong Funds',
          exposure: 'Hang Seng, Shanghai',
          returns: '10-14%',
          risk: 'High',
          minInvestment: '₹500',
          features: 'Exposure to Chinese tech, manufacturing'
        },
        {
          name: 'European Funds',
          exposure: 'DAX, FTSE, CAC',
          returns: '9-12%',
          risk: 'Moderate',
          minInvestment: '₹500',
          features: 'Diversified European exposure'
        },
        {
          name: 'Emerging Markets',
          exposure: 'Brazil, Russia, India, China',
          returns: '10-14%',
          risk: 'High',
          minInvestment: '₹500',
          features: 'High growth potential'
        },
        {
          name: 'Global Technology Funds',
          exposure: 'FAANG + Tech',
          returns: '12-18%',
          risk: 'High',
          minInvestment: '₹500',
          features: 'Focus on tech sector globally'
        }
      ],
      pros: [
        'Geographical diversification',
        'Access to global giants',
        'Hedge against rupee depreciation',
        'Exposure to developed markets',
        'Sector-specific opportunities'
      ],
      cons: [
        'Currency risk',
        'Higher expense ratios',
        'Different tax treatment',
        'Time zone differences',
        'Geopolitical risks'
      ],
      taxImplication: 'Debt fund taxation (as per slab) for most international funds. Some US-focused funds may have different tax treatment.',
      bestFor: 'Diversification seekers, global exposure, tech investors, dollar earners',
      tips: [
        'Limit to 10-15% of portfolio',
        'Consider US-focused funds first',
        'Check fund of fund structure',
        'Understand tax implications'
      ]
    },
    sectoral: {
      title: 'Sectoral & Thematic Funds',
      tagline: 'Focus on specific sectors/themes',
      description: 'Sectoral funds invest in specific sectors like banking, technology, healthcare. Thematic funds invest around themes like consumption, infrastructure, ESG.',
      categories: [
        {
          name: 'Banking & Financial Services',
          focus: 'Banks, NBFCs, Insurance',
          returns: '14-18%',
          risk: 'High',
          suitable: 'Bull market phase',
          icon: <FaUniversity />
        },
        {
          name: 'Technology Funds',
          focus: 'IT, Software, Tech',
          returns: '15-20%',
          risk: 'High',
          suitable: 'Digital growth phase',
          icon: <FaLaptop />
        },
        {
          name: 'Healthcare/Pharma Funds',
          focus: 'Pharma, Hospitals',
          returns: '12-16%',
          risk: 'High',
          suitable: 'Defensive during uncertainty',
          icon: <FaHospital />
        },
        {
          name: 'Consumption Funds',
          focus: 'FMCG, Auto, Retail',
          returns: '12-15%',
          risk: 'Moderate-High',
          suitable: 'Economic growth phase',
          icon: <FaCar />
        },
        {
          name: 'Infrastructure Funds',
          focus: 'Construction, Cement, Capital Goods',
          returns: '13-17%',
          risk: 'High',
          suitable: 'Capex cycle upturn',
          icon: <FaHome />
        },
        {
          name: 'ESG Funds',
          focus: 'Environmental, Social, Governance',
          returns: '12-15%',
          risk: 'Moderate',
          suitable: 'Sustainable investing',
          icon: <FaLeaf />
        },
        {
          name: 'PSU Funds',
          focus: 'Public Sector Companies',
          returns: '12-16%',
          risk: 'High',
          suitable: 'Government policy focus',
          icon: <FaBuilding />
        },
        {
          name: 'MNC Funds',
          focus: 'Multinational Companies',
          returns: '11-14%',
          risk: 'Moderate',
          suitable: 'Stable growth',
          icon: <FaLandmark />
        }
      ],
      pros: [
        'High returns in bull run',
        'Focus on specific expertise',
        'Leverage sector growth',
        'Thematic opportunities',
        'Diversification within sector'
      ],
      cons: [
        'Very high risk',
        'Cyclical performance',
        'Timing critical',
        'Can underperform long periods',
        'Concentration risk'
      ],
      bestFor: 'Aggressive investors, sector experts, tactical allocation, satellite portfolio (5-10% max)',
      tips: [
        'Limit to 5-10% of portfolio',
        'Entry and exit timing crucial',
        'Combine with diversified funds',
        'Monitor sector cycles closely'
      ]
    }
  };

  // Render all sections for mobile view
  const renderMobileContent = () => {
    return (
      <div className="space-y-6">
        {tabs.map((tab) => {
          const product = products[tab.id];
          return (
            <section key={tab.id} id={tab.id} className="scroll-mt-20">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-bold text-[#074a6b] flex items-center">
                    <span className="text-2xl mr-2 text-[#1a729e]">{tab.icon}</span>
                    {product.title}
                  </h2>
                  <span className="bg-[rgb(208,239,255)] text-[#0080bf] text-xs px-2 py-1 rounded-full">
                    {product.tagline}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                
                <h3 className="font-semibold text-[#074a6b] text-sm mb-2 flex items-center">
                  <FaChartBar className="mr-1 text-[#1a729e]" /> Key Categories
                </h3>
                <div className="space-y-3 mb-4">
                  {product.categories?.slice(0, 3).map((cat, idx) => (
                    <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-[#0080bf] text-sm mb-1">{cat.name}</h4>
                      <div className="grid grid-cols-2 gap-1 text-[10px]">
                        <span className="text-gray-500">Risk: {cat.risk}</span>
                        <span className="text-gray-500">Return: {cat.return}</span>
                        <span className="text-gray-500">Horizon: {cat.horizon}</span>
                        <span className="text-gray-500">Min: {cat.minInvestment}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-green-50 p-2 rounded-lg">
                    <h4 className="font-semibold text-green-800 text-xs mb-1 flex items-center">
                      <FaCheckCircle className="mr-1 text-green-600" /> Pros
                    </h4>
                    <ul className="space-y-1">
                      {product.pros.slice(0, 3).map((pro, idx) => (
                        <li key={idx} className="text-[10px] text-gray-600 flex items-start">
                          <span className="text-green-500 mr-1">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 p-2 rounded-lg">
                    <h4 className="font-semibold text-red-800 text-xs mb-1 flex items-center">
                      <FaTimesCircle className="mr-1 text-red-600" /> Cons
                    </h4>
                    <ul className="space-y-1">
                      {product.cons.slice(0, 3).map((con, idx) => (
                        <li key={idx} className="text-[10px] text-gray-600 flex items-start">
                          <span className="text-red-500 mr-1">✗</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg mb-3">
                  <p className="text-xs flex items-start">
                    <span className="font-semibold text-[#0080bf] mr-1 flex items-center">
                      <FaUsers className="mr-1" /> Best for:
                    </span>
                    <span className="text-gray-800">{product.bestFor}</span>
                  </p>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-[#0080bf] text-xs mb-1 flex items-center">
                    <FaLightbulb className="mr-1 text-[#0080bf]" /> Tips
                  </h4>
                  <ul className="space-y-1">
                    {product.tips.slice(0, 2).map((tip, idx) => (
                      <li key={idx} className="text-[10px] text-gray-800 flex items-start">
                        <span className="mr-1">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    );
  };

  // Render single tab content for desktop
  const renderDesktopContent = () => {
    const product = products[activeTab];

    const renderEquityContent = () => (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
            <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          </div>
          <span className="bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full flex items-center">
            <FaRocket className="mr-2" /> High Growth Potential
          </span>
        </div>
        <p className="text-lg text-gray-600">{product.description}</p>
        
        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4 flex items-center">
            <FaChartLine className="mr-2 text-[#1a729e]" /> Equity Fund Categories
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Fund Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Risk</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Returns (p.a.)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Horizon</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Suitable For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.categories.map((cat, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{cat.name}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        cat.risk === 'Very High' ? 'bg-red-100 text-red-700' :
                        cat.risk === 'High' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {cat.risk}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-green-600">{cat.return}</td>
                    <td className="px-4 py-3 text-sm">{cat.horizon}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{cat.suitableFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-green-600" /> Pros
            </h3>
            <ul className="space-y-2">
              {product.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
              <FaTimesCircle className="mr-2 text-red-600" /> Cons
            </h3>
            <ul className="space-y-2">
              {product.cons.map((con, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="text-red-500 mr-2">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-2 flex items-center">
            <FaUsers className="mr-2" /> Best For
          </h3>
          <p className="text-gray-700">{product.bestFor}</p>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-3 flex items-center">
            <FaLightbulb className="mr-2 text-[#0080bf]" /> Pro Tips
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {product.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-800">
                <span className="mr-2">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

    const renderDebtContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4 flex items-center">
            <FaUniversity className="mr-2 text-[#1a729e]" /> Debt Fund Categories
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Fund Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Risk</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Returns</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Horizon</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.categories.map((cat, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{cat.name}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        cat.risk === 'Low' ? 'bg-green-100 text-green-700' :
                        cat.risk === 'Low-Moderate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {cat.risk}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-[#0080bf]">{cat.return}</td>
                    <td className="px-4 py-3 text-sm">{cat.horizon}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{cat.suitableFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-green-600" /> Pros
            </h3>
            <ul className="space-y-2">
              {product.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
              <FaTimesCircle className="mr-2 text-red-600" /> Cons
            </h3>
            <ul className="space-y-2">
              {product.cons.map((con, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="text-red-500 mr-2">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-2 flex items-center">
            <FaUsers className="mr-2" /> Best For
          </h3>
          <p className="text-gray-700">{product.bestFor}</p>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-3 flex items-center">
            <FaLightbulb className="mr-2 text-[#0080bf]" /> Pro Tips
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {product.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-800">
                <span className="mr-2">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

    const renderHybridContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4 flex items-center">
            <FaBalanceScale className="mr-2 text-[#1a729e]" /> Hybrid Fund Categories
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Fund Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Allocation</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Risk</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Returns</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Horizon</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.categories.map((cat, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{cat.name}</td>
                    <td className="px-4 py-3 text-sm">
                      {cat.equity ? `Eq:${cat.equity} Debt:${cat.debt}` : cat.assets || 'Dynamic'}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        cat.risk === 'Low' ? 'bg-green-100 text-green-700' :
                        cat.risk === 'Low-Moderate' ? 'bg-yellow-100 text-yellow-700' :
                        cat.risk === 'Moderate' ? 'bg-orange-100 text-orange-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {cat.risk}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-green-600">{cat.return}</td>
                    <td className="px-4 py-3 text-sm">{cat.horizon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Tax Treatment</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left text-sm font-semibold text-[#074a6b] pb-2">Fund Type</th>
                  <th className="text-left text-sm font-semibold text-[#074a6b] pb-2">Equity Exposure</th>
                  <th className="text-left text-sm font-semibold text-[#074a6b] pb-2">Tax Treatment</th>
                </tr>
              </thead>
              <tbody>
                {product.taxTreatment.map((item, index) => (
                  <tr key={index}>
                    <td className="py-1 text-sm">{item.type}</td>
                    <td className="py-1 text-sm">{item.equityExposure}</td>
                    <td className="py-1 text-sm text-[#0080bf]">{item.tax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-green-600" /> Pros
            </h3>
            <ul className="space-y-2">
              {product.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
              <FaTimesCircle className="mr-2 text-red-600" /> Cons
            </h3>
            <ul className="space-y-2">
              {product.cons.map((con, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="text-red-500 mr-2">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-2 flex items-center">
            <FaUsers className="mr-2" /> Best For
          </h3>
          <p className="text-gray-700">{product.bestFor}</p>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-3 flex items-center">
            <FaLightbulb className="mr-2 text-[#0080bf]" /> Pro Tips
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {product.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-800">
                <span className="mr-2">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

    const renderIndexContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4 flex items-center">
            <FaChartBar className="mr-2 text-[#1a729e]" /> Popular Index Funds/ETFs
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Fund Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Benchmark</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Expense Ratio</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Min Investment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.categories.map((cat, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{cat.name}</td>
                    <td className="px-4 py-3 text-sm">{cat.benchmark}</td>
                    <td className="px-4 py-3 text-sm text-green-600 font-semibold">{cat.expense}</td>
                    <td className="px-4 py-3 text-sm">{cat.minInvestment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Active vs Passive: Quick Comparison</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left text-sm font-semibold text-[#074a6b] pb-2">Feature</th>
                  <th className="text-left text-sm font-semibold text-[#074a6b] pb-2">Active Funds</th>
                  <th className="text-left text-sm font-semibold text-[#074a6b] pb-2">Passive Funds</th>
                </tr>
              </thead>
              <tbody>
                {product.comparison.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 text-sm font-medium">{item.feature}</td>
                    <td className="py-2 text-sm">{item.active}</td>
                    <td className="py-2 text-sm text-[#0080bf]">{item.passive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-green-600" /> Pros
            </h3>
            <ul className="space-y-2">
              {product.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
              <FaTimesCircle className="mr-2 text-red-600" /> Cons
            </h3>
            <ul className="space-y-2">
              {product.cons.map((con, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="text-red-500 mr-2">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-2 flex items-center">
            <FaUsers className="mr-2" /> Best For
          </h3>
          <p className="text-gray-700">{product.bestFor}</p>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-3 flex items-center">
            <FaLightbulb className="mr-2 text-[#0080bf]" /> Pro Tips
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {product.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-800">
                <span className="mr-2">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

    const renderELSSContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.keyFeatures.map((feature, index) => (
            <div key={index} className="bg-blue-50 p-5 rounded-lg">
              <div className="text-3xl mb-3 text-[#1a729e]">{feature.icon}</div>
              <h3 className="font-semibold text-[#074a6b] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4 flex items-center">
            <FaStar className="mr-2 text-[#1a729e]" /> Top ELSS Funds
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.topELSSFunds.map((fund, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded-lg flex justify-between items-center hover:shadow-md transition">
                <div>
                  <p className="font-semibold text-[#074a6b]">{fund.fund}</p>
                  <p className="text-sm text-gray-500">AUM: {fund.aum}</p>
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {fund.returns}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4">ELSS vs Other Tax Options</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Option</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Lock-in</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Returns</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Tax Treatment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.comparison.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{item.option}</td>
                    <td className="px-4 py-3 text-sm">{item.lockIn}</td>
                    <td className="px-4 py-3 text-sm">{item.returns}</td>
                    <td className="px-4 py-3 text-sm text-[#0080bf]">{item.tax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-green-600" /> Pros
            </h3>
            <ul className="space-y-2">
              {product.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
              <FaTimesCircle className="mr-2 text-red-600" /> Cons
            </h3>
            <ul className="space-y-2">
              {product.cons.map((con, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="text-red-500 mr-2">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

       <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-2 flex items-center">
            <FaUsers className="mr-2" /> Best For
          </h3>
          <p className="text-gray-700">{product.bestFor}</p>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-3 flex items-center">
            <FaLightbulb className="mr-2 text-[#0080bf]" /> Pro Tips
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {product.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-800">
                <span className="mr-2">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

    const renderLiquidContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.keyFeatures.map((feature, index) => (
            <div key={index} className="bg-blue-50 p-5 rounded-lg">
              <div className="text-3xl mb-3 text-[#1a729e]">{feature.icon}</div>
              <h3 className="font-semibold text-[#074a6b] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#074a6b] to-[#1a729e] text-white p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaMoneyBillWave className="mr-2" /> Savings Account vs Liquid Fund (Annual Returns)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-white border-opacity-30">
                  <th className="py-2 text-left">Amount</th>
                  <th className="py-2 text-left">Savings A/c (3%)</th>
                  <th className="py-2 text-left">Liquid Fund (6.5%)</th>
                  <th className="py-2 text-left">Extra Gain</th>
                </tr>
              </thead>
              <tbody>
                {product.returns.map((item, index) => (
                  <tr key={index} className="border-b border-white border-opacity-20">
                    <td className="py-2">{item.amount}</td>
                    <td className="py-2">{item.savingAccount}</td>
                    <td className="py-2">{item.liquidFund}</td>
                    <td className="py-2 font-semibold">{item.gain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-green-600" /> Pros
            </h3>
            <ul className="space-y-2">
              {product.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
              <FaTimesCircle className="mr-2 text-red-600" /> Cons
            </h3>
            <ul className="space-y-2">
              {product.cons.map((con, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="text-red-500 mr-2">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-2 flex items-center">
            <FaUsers className="mr-2" /> Best For
          </h3>
          <p className="text-gray-700">{product.bestFor}</p>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-3 flex items-center">
            <FaLightbulb className="mr-2 text-[#0080bf]" /> Pro Tips
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {product.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-800">
                <span className="mr-2">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

    const renderInternationalContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4 flex items-center">
            <FaGlobe className="mr-2 text-[#1a729e]" /> International Fund Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.categories.map((cat, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition">
                <h4 className="font-semibold text-[#074a6b] mb-2">{cat.name}</h4>
                <p className="text-sm text-gray-600 mb-2">Exposure: {cat.exposure}</p>
                <div className="flex justify-between text-xs">
                  <span className="bg-[rgb(208,239,255)] text-[#0080bf] px-2 py-1 rounded">Returns: {cat.returns}</span>
                  <span className={`px-2 py-1 rounded ${
                    cat.risk === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    Risk: {cat.risk}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#074a6b] mb-2 flex items-center">
            <FaUniversity className="mr-2 text-[#1a729e]" /> Tax Implications
          </h3>
          <p className="text-sm text-gray-600">{product.taxImplication}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-green-600" /> Pros
            </h3>
            <ul className="space-y-2">
              {product.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
              <FaTimesCircle className="mr-2 text-red-600" /> Cons
            </h3>
            <ul className="space-y-2">
              {product.cons.map((con, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="text-red-500 mr-2">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-2 flex items-center">
            <FaUsers className="mr-2" /> Best For
          </h3>
          <p className="text-gray-700">{product.bestFor}</p>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-3 flex items-center">
            <FaLightbulb className="mr-2 text-[#0080bf]" /> Pro Tips
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {product.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-800">
                <span className="mr-2">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

    const renderSectoralContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4 flex items-center">
            <FaBullseye className="mr-2 text-[#1a729e]" /> Sectoral/Thematic Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.categories.map((cat, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded-lg hover:border-[#0080bf] transition">
                <div className="flex items-start mb-2">
                  <span className="text-2xl text-[#1a729e] mr-2">{cat.icon}</span>
                  <h4 className="font-semibold text-[#074a6b]">{cat.name}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">Focus: {cat.focus}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-semibold text-green-600">{cat.returns}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    cat.risk === 'High' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {cat.risk} Risk
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Best when: {cat.suitable}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-green-600" /> Pros
            </h3>
            <ul className="space-y-2">
              {product.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
              <FaTimesCircle className="mr-2 text-red-600" /> Cons
            </h3>
            <ul className="space-y-2">
              {product.cons.map((con, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="text-red-500 mr-2">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

       <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-2 flex items-center">
            <FaUsers className="mr-2" /> Best For
          </h3>
          <p className="text-gray-700">{product.bestFor}</p>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-3 flex items-center">
            <FaLightbulb className="mr-2 text-[#0080bf]" /> Pro Tips
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {product.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-800">
                <span className="mr-2">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

    // Render appropriate content based on active tab
    switch(activeTab) {
      case 'equity':
        return renderEquityContent();
      case 'debt':
        return renderDebtContent();
      case 'hybrid':
        return renderHybridContent();
      case 'index':
        return renderIndexContent();
      case 'elss':
        return renderELSSContent();
      case 'liquid':
        return renderLiquidContent();
      case 'international':
        return renderInternationalContent();
      case 'sectoral':
        return renderSectoralContent();
      default:
        return renderEquityContent();
    }
  };

  return (
    <>
      <Head>
        <title>Mutual Fund Products | Complete Guide to All Fund Types</title>
        <meta name="description" content="Explore all types of mutual funds - Equity Funds, Debt Funds, Hybrid Funds, Index Funds, ELSS, Liquid Funds, International Funds, and Sectoral Funds." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#074a6b]">Mutual Fund Products</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-1 sm:mt-2">Complete guide to all types of mutual funds</p>
          </div>
        </header>

        {/* Mobile Quick Navigation */}
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
            renderMobileContent()
          ) : (
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

export default MutualFundProducts;