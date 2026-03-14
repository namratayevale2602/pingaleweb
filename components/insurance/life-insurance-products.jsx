// pages/life-insurance-products.js
"use client";   
import { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  FaFileContract,
  FaTree,
  FaPiggyBank,
  FaChartLine,
  FaMoneyBillWave,
  FaChild,
  FaUmbrellaBeach,
  FaHeartbeat,
  FaCalendarAlt,
  FaShieldAlt,
  FaCoins,
  FaUniversity,
  FaExchangeAlt,
  FaPercent,
  FaPlusCircle,
  FaGraduationCap,
  FaRing,
  FaHandHoldingHeart,
  FaAmbulance,
  FaWheelchair,
  FaSuitcase,
  FaHome,
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
  FaLightbulb,
  FaStar
} from 'react-icons/fa';

const LifeInsuranceProducts = () => {
  const [activeTab, setActiveTab] = useState('term');
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
    { id: 'term', label: 'Term Insurance', icon: <FaFileContract /> },
    { id: 'whole-life', label: 'Whole Life', icon: <FaTree /> },
    { id: 'endowment', label: 'Endowment Plans', icon: <FaPiggyBank /> },
    { id: 'ulip', label: 'ULIPs', icon: <FaChartLine /> },
    { id: 'money-back', label: 'Money Back', icon: <FaMoneyBillWave /> },
    { id: 'child', label: 'Child Plans', icon: <FaChild /> },
    { id: 'retirement', label: 'Retirement Plans', icon: <FaUmbrellaBeach /> },
    { id: 'health', label: 'Health Riders', icon: <FaHeartbeat /> },
  ];

  const products = {
    term: {
      title: 'Term Insurance',
      tagline: 'Pure protection at its best',
      description: 'Term insurance is the simplest and most affordable life insurance product that provides financial protection to your family in case of unfortunate events during the policy term.',
      keyFeatures: [
        {
          icon: <FaCoins />,
          title: 'High Coverage at Low Cost',
          description: 'Get coverage of ₹1 Crore+ at premiums as low as ₹500-600/month'
        },
        {
          icon: <FaCalendarAlt />,
          title: 'Flexible Term Options',
          description: 'Choose policy terms from 5 to 40 years based on your needs'
        },
        {
          icon: <FaUniversity />,
          title: 'Tax Benefits',
          description: 'Premium paid eligible for tax deduction under Section 80C'
        },
        {
          icon: <FaShieldAlt />,
          title: 'Tax-Free Payout',
          description: 'Death benefit is tax-free under Section 10(10D)'
        },
        {
          icon: <FaExchangeAlt />,
          title: 'Return of Premium Option',
          description: 'Some plans return all premiums if you survive the term'
        },
        {
          icon: <FaPlusCircle />,
          title: 'Optional Riders',
          description: 'Enhance coverage with critical illness, accident, waiver of premium'
        }
      ],
      coverageOptions: [
        { age: '25 years', monthly: '₹500-600', coverage: '₹1 Crore' },
        { age: '35 years', monthly: '₹800-1000', coverage: '₹1 Crore' },
        { age: '45 years', monthly: '₹1800-2200', coverage: '₹1 Crore' },
      ],
      pros: [
        'Lowest premium among all life insurance products',
        'Simple and easy to understand',
        'Pure protection with no investment component',
        'High sum assured at affordable cost'
      ],
      cons: [
        'No maturity benefit if you survive the term',
        'No investment returns',
        'Premium increases with age'
      ],
      bestFor: 'Young professionals, breadwinners, people with dependents, home loan borrowers',
      tips: [
        'Buy term insurance when you\'re young to lock in low premiums',
        'Choose coverage of at least 15-20 times your annual income',
        'Consider return of premium option if you want money back',
        'Add critical illness rider for comprehensive protection'
      ]
    },
    'whole-life': {
      title: 'Whole Life Insurance',
      tagline: 'Lifetime protection with savings',
      description: 'Whole life insurance provides coverage throughout your lifetime and includes a savings component that builds cash value over time.',
      keyFeatures: [
        {
          icon: <FaTree />,
          title: 'Lifetime Coverage',
          description: 'Protection until age 100, unlike term plans that end at 60-70'
        },
        {
          icon: <FaCoins />,
          title: 'Guaranteed Cash Value',
          description: 'Policy accumulates cash value that grows tax-deferred'
        },
        {
          icon: <FaUniversity />,
          title: 'Loan Facility',
          description: 'Borrow against your policy\'s cash value at low interest rates'
        },
        {
          icon: <FaShieldAlt />,
          title: 'Guaranteed Death Benefit',
          description: 'Fixed sum assured paid to nominees regardless of when you pass away'
        },
        {
          icon: <FaMoneyBillWave />,
          title: 'Tax-Free Maturity',
          description: 'Maturity proceeds are tax-free under Section 10(10D)'
        },
        {
          icon: <FaPercent />,
          title: 'Participating Policies',
          description: 'Earn bonuses and dividends from insurer\'s profits'
        }
      ],
      comparison: [
        {
          feature: 'Coverage Period',
          term: 'Fixed term (e.g., 30 years)',
          wholeLife: 'Lifetime (up to 100 years)'
        },
        {
          feature: 'Premium',
          term: 'Lower, increases with age',
          wholeLife: 'Higher but locked for life'
        },
        {
          feature: 'Cash Value',
          term: 'No cash value',
          wholeLife: 'Builds guaranteed cash value'
        },
        {
          feature: 'Maturity Benefit',
          term: 'None if you survive',
          wholeLife: 'Pays sum assured at 100 years'
        },
        {
          feature: 'Loan Option',
          term: 'Not available',
          wholeLife: 'Available against cash value'
        }
      ],
      pros: [
        'Lifetime protection guaranteed',
        'Forced savings with guaranteed returns',
        'Tax-deferred cash value growth',
        'Loan facility for emergencies',
        'Estate planning tool'
      ],
      cons: [
        'Significantly higher premiums than term',
        'Complex product structure',
        'Lower returns compared to market investments',
        'Long-term commitment required'
      ],
      bestFor: 'High net worth individuals, estate planning, those wanting guaranteed savings, senior citizens',
      tips: [
        'Consider whole life only after maxing out retirement accounts',
        'Look at participating policies for bonus potential',
        'Use cash value loans for tax-free income in retirement',
        'Compare dividend histories of different insurers'
      ]
    },
    endowment: {
      title: 'Endowment Plans',
      tagline: 'Insurance + Guaranteed Savings',
      description: 'Endowment plans combine insurance coverage with guaranteed savings, providing a lump sum amount at maturity or to nominees in case of death.',
      keyFeatures: [
        {
          icon: <FaCoins />,
          title: 'Guaranteed Maturity Benefit',
          description: 'Receive sum assured + bonuses at the end of policy term'
        },
        {
          icon: <FaShieldAlt />,
          title: 'Death Benefit',
          description: 'Sum assured paid to nominees if something happens to you'
        },
        {
          icon: <FaChartLine />,
          title: 'Annual Bonuses',
          description: 'Participate in insurer\'s profits through reversionary bonuses'
        },
        {
          icon: <FaUniversity />,
          title: 'Tax Benefits',
          description: 'Premium deduction u/s 80C, maturity tax-free u/s 10(10D)'
        },
        {
          icon: <FaMoneyBillWave />,
          title: 'Loan Facility',
          description: 'Take loans against your policy after 2-3 years'
        },
        {
          icon: <FaCalendarAlt />,
          title: 'Fixed Term',
          description: 'Choose policy terms from 10 to 30 years'
        }
      ],
      example: {
        age: 30,
        term: '20 years',
        premium: '₹50,000/year',
        sumAssured: '₹10 Lakhs',
        maturityAmount: '₹18-22 Lakhs (with bonuses)'
      },
      pros: [
        'Guaranteed returns with insurance cover',
        'Capital protection guaranteed',
        'Disciplined savings approach',
        'Tax-efficient returns',
        'Low risk product'
      ],
      cons: [
        'Lower returns than equity (4-6% IRR typically)',
        'Long lock-in period',
        'Premium must be paid regularly',
        'Complex bonus calculations'
      ],
      bestFor: 'Conservative investors, first-time savers, goal-based planning (child education, marriage)',
      tips: [
        'Check the IRR (Internal Rate of Return) before buying',
        'Compare with debt funds + term insurance combination',
        'Consider limited premium payment options',
        'Look at historical bonus rates'
      ]
    },
    ulip: {
      title: 'ULIPs (Unit Linked Insurance Plans)',
      tagline: 'Insurance + Market-linked Investments',
      description: 'ULIPs are market-linked instruments that offer life insurance coverage along with investment in equity, debt, or hybrid funds, giving you the potential for higher returns.',
      keyFeatures: [
        {
          icon: <FaChartLine />,
          title: 'Market-Linked Returns',
          description: 'Invest in equity, debt, or balanced funds based on your risk appetite'
        },
        {
          icon: <FaExchangeAlt />,
          title: 'Fund Switching',
          description: 'Switch between funds freely to adapt to market conditions'
        },
        {
          icon: <FaMoneyBillWave />,
          title: 'Partial Withdrawals',
          description: 'Withdraw money after 5 years for liquidity'
        },
        {
          icon: <FaUniversity />,
          title: 'Tax Benefits',
          description: 'Premium u/s 80C, maturity tax-free u/s 10(10D)'
        },
        {
          icon: <FaChartLine />,
          title: 'Transparency',
          description: 'Daily NAV publication, regular portfolio updates'
        },
        {
          icon: <FaShieldAlt />,
          title: 'Life Cover',
          description: 'Sum assured or fund value, whichever is higher'
        }
      ],
      fundOptions: [
        { type: 'Equity Funds', risk: 'High', potential: '12-15%', suitable: 'Long term (10+ years)' },
        { type: 'Balanced Funds', risk: 'Moderate', potential: '9-11%', suitable: 'Medium term (5-7 years)' },
        { type: 'Debt Funds', risk: 'Low', potential: '7-8%', suitable: 'Short term (3-5 years)' }
      ],
      charges: [
        'Premium Allocation Charge',
        'Policy Administration Charge',
        'Fund Management Charge (1-1.5%)',
        'Mortality Charge',
        'Switching Charges (free switches limited)'
      ],
      pros: [
        'Market-linked returns potential',
        'Flexibility to switch funds',
        'Transparent structure',
        'Tax-efficient investment',
        'Long-term wealth creation'
      ],
      cons: [
        'Higher charges in initial years',
        'Market risk',
        '5-year lock-in period',
        'Complex product to understand'
      ],
      bestFor: 'Investors seeking market exposure with insurance, those who want flexibility, long-term wealth builders',
      tips: [
        'Choose ULIPs with lower charges',
        'Stay invested for at least 10-15 years',
        'Review fund performance regularly',
        'Use free switches to rebalance portfolio'
      ]
    },
    'money-back': {
      title: 'Money-Back Plans',
      tagline: 'Regular payouts + Life Cover',
      description: 'Money-back policies provide periodic payouts (survival benefits) during the policy term, along with life insurance coverage, ensuring regular liquidity.',
      keyFeatures: [
        {
          icon: <FaExchangeAlt />,
          title: 'Periodic Payouts',
          description: 'Get fixed amounts at regular intervals (e.g., every 5 years)'
        },
        {
          icon: <FaCoins />,
          title: 'Lump Sum at Maturity',
          description: 'Receive remaining sum assured + bonuses at policy end'
        },
        {
          icon: <FaShieldAlt />,
          title: 'Life Cover',
          description: 'Full sum assured paid to nominees in case of death'
        },
        {
          icon: <FaUniversity />,
          title: 'Tax Benefits',
          description: 'Premium u/s 80C, payouts tax-free u/s 10(10D)'
        },
        {
          icon: <FaMoneyBillWave />,
          title: 'Regular Income',
          description: 'Ideal for creating income streams for specific needs'
        },
        {
          icon: <FaPercent />,
          title: 'Bonuses',
          description: 'Participate in insurer\'s profits through bonuses'
        }
      ],
      payoutExample: {
        term: '20 years',
        sumAssured: '₹5 Lakhs',
        payouts: '20% every 5 years (₹1 Lakh each)',
        maturity: '40% + bonuses (₹2 Lakhs + bonuses)',
        total: '₹5 Lakhs + bonuses'
      },
      pros: [
        'Regular liquidity without surrendering policy',
        'Disciplined savings with periodic returns',
        'Tax-free payouts',
        'Life cover throughout term',
        'Predictable cash flows'
      ],
      cons: [
        'Lower returns compared to market products',
        'Premium higher than term insurance',
        'Bonuses not guaranteed',
        'Long-term commitment'
      ],
      bestFor: 'Those needing periodic cash flows, milestone-based planning (children\'s education), conservative investors',
      tips: [
        'Align payout dates with your financial goals',
        'Compare with FD ladder + term insurance',
        'Check bonus history before buying',
        'Consider limited pay options for flexibility'
      ]
    },
    child: {
      title: 'Child Plans',
      tagline: 'Secure your child\'s future',
      description: 'Child plans are designed to ensure that your child\'s financial goals (education, marriage) are met regardless of what happens to you.',
      keyFeatures: [
        {
          icon: <FaGraduationCap />,
          title: 'Education Fund',
          description: 'Build corpus for higher education, professional courses'
        },
        {
          icon: <FaRing />,
          title: 'Marriage Fund',
          description: 'Create wealth for child\'s marriage expenses'
        },
        {
          icon: <FaShieldAlt />,
          title: 'Waiver of Premium',
          description: 'Future premiums waived if parent dies, policy continues'
        },
        {
          icon: <FaCoins />,
          title: 'Lump Sum at Maturity',
          description: 'Receive accumulated fund at child\'s milestone age'
        },
        {
          icon: <FaChartLine />,
          title: 'Investment Options',
          description: 'Choose between ULIP, endowment, or money-back structures'
        },
        {
          icon: <FaUniversity />,
          title: 'Tax Benefits',
          description: 'Premium u/s 80C, maturity u/s 10(10D)'
        }
      ],
      planComparison: [
        {
          type: 'Child ULIP',
          features: 'Market-linked returns, fund switching',
          suitability: 'Long-term (>15 years), higher risk appetite'
        },
        {
          type: 'Child Endowment',
          features: 'Guaranteed returns, bonuses',
          suitability: 'Medium term (10-15 years), conservative'
        },
        {
          type: 'Child Money-Back',
          features: 'Periodic payouts for milestones',
          suitability: 'Specific age-based needs'
        }
      ],
      pros: [
        'Comprehensive protection for child\'s future',
        'Premium waiver critical feature',
        'Goal-specific planning',
        'Tax-efficient returns',
        'Disciplined savings'
      ],
      cons: [
        'Lower returns than direct investments',
        'High charges in ULIP variants',
        'Lock-in until child\'s maturity',
        'Complex product structures'
      ],
      bestFor: 'Parents (0-10 year old children), those with specific future goals, long-term planners',
      tips: [
        'Start early to maximize compounding',
        'Choose premium waiver option mandatory',
        'Consider inflation impact on goals',
        'Compare multiple plans before buying'
      ]
    },
    retirement: {
      title: 'Retirement Plans (Pension)',
      tagline: 'Build your retirement corpus',
      description: 'Retirement plans help you accumulate wealth during your working years and provide regular income (pension) after retirement.',
      keyFeatures: [
        {
          icon: <FaUmbrellaBeach />,
          title: 'Regular Pension',
          description: 'Receive guaranteed income monthly, quarterly, or annually post-retirement'
        },
        {
          icon: <FaCoins />,
          title: 'Lump Sum Option',
          description: 'Take up to 60% as lump sum at retirement, remaining as annuity'
        },
        {
          icon: <FaUniversity />,
          title: 'Tax Benefits',
          description: 'Premium u/s 80C, additional u/s 80CCC, pension taxable'
        },
        {
          icon: <FaChartLine />,
          title: 'Investment Choices',
          description: 'ULIP-based for growth, traditional for guaranteed returns'
        },
        {
          icon: <FaExchangeAlt />,
          title: 'Annuity Options',
          description: 'Choose from life annuity, joint life, with return of purchase price'
        },
        {
          icon: <FaPercent />,
          title: 'Inflation Protection',
          description: 'Some plans offer increasing annuity to beat inflation'
        }
      ],
      annuityOptions: [
        { type: 'Life Annuity', description: 'Pension for life, stops after death', payout: 'Highest' },
        { type: 'Joint Life', description: 'Pension for you and spouse', payout: 'Medium' },
        { type: 'With Return of Purchase Price', description: 'Purchase price returned to nominee after death', payout: 'Lower' },
        { type: 'Increasing Annuity', description: 'Pension increases annually', payout: 'Starts lower, grows' }
      ],
      pros: [
        'Regular post-retirement income',
        'Tax benefits during accumulation',
        'Multiple annuity options',
        'Can include spouse in pension',
        'Return of purchase price options'
      ],
      cons: [
        'Annuity rates locked at retirement',
        'Inflation may erode value',
        'Less flexible than other investments',
        'Complex annuity calculations'
      ],
      bestFor: 'Salaried employees, self-employed professionals, anyone wanting regular retirement income',
      tips: [
        'Start retirement planning in 30s',
        'Consider mix of lump sum and annuity',
        'Compare annuity rates across insurers',
        'Include spouse in joint life options'
      ]
    },
    health: {
      title: 'Health Riders & Add-ons',
      tagline: 'Enhance your life insurance cover',
      description: 'Health riders are optional add-ons that can be attached to your base life insurance policy to provide comprehensive protection against critical illnesses, accidents, and disabilities.',
      keyFeatures: [
        {
          icon: <FaHeartbeat />,
          title: 'Critical Illness Cover',
          description: 'Lump sum payment on diagnosis of covered illnesses (cancer, heart attack, etc.)'
        },
        {
          icon: <FaAmbulance />,
          title: 'Accident Death Benefit',
          description: 'Additional sum assured if death occurs due to accident'
        },
        {
          icon: <FaWheelchair />,
          title: 'Accidental Disability',
          description: 'Coverage for permanent total/partial disability due to accident'
        },
        {
          icon: <FaMoneyBillWave />,
          title: 'Waiver of Premium',
          description: 'Future premiums waived if you become disabled or critically ill'
        },
        {
          icon: <FaHandHoldingHeart />,
          title: 'Surgical Care',
          description: 'Coverage for specific surgical procedures'
        },
        {
          icon: <FaUniversity />,
          title: 'Hospital Cash',
          description: 'Daily cash benefit during hospitalization'
        }
      ],
      riderDetails: [
        {
          name: 'Critical Illness Rider',
          coverage: '₹5-25 Lakhs',
          features: 'Covers 8-20 major illnesses',
          cost: '20-30% of base premium'
        },
        {
          name: 'Accidental Death Benefit',
          coverage: 'Up to ₹1 Crore',
          features: 'Pays additional sum assured',
          cost: '₹1-2 per thousand coverage'
        },
        {
          name: 'Waiver of Premium',
          coverage: 'N/A',
          features: 'Future premiums waived',
          cost: '10-15% of base premium'
        },
        {
          name: 'Terminal Illness',
          coverage: 'Up to sum assured',
          features: 'Early payout on terminal illness',
          cost: '5-10% of base premium'
        }
      ],
      pros: [
        'Comprehensive protection package',
        'Cost-effective than standalone policies',
        'Tax benefits on rider premiums',
        'Customizable coverage',
        'Payout helps with treatment costs'
      ],
      cons: [
        'Adds to premium cost',
        'May have sub-limits',
        'Coverage restrictions for pre-existing',
        'Not all riders available with all plans'
      ],
      bestFor: 'Anyone wanting comprehensive protection, family history of critical illness, high-risk professions',
      tips: [
        'Prioritize critical illness and waiver of premium',
        'Check waiting periods and exclusions',
        'Don\'t over-insure - buy what you need',
        'Compare rider costs across insurers'
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
                
                <p className="text-sm text-gray-800 mb-4">{product.description}</p>
                
                <h3 className="font-semibold text-[#074a6b] text-sm mb-2">Key Features</h3>
                <div className="space-y-3 mb-4">
                  {product.keyFeatures.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="bg-blue-50 bg-opacity-50 p-3 rounded-lg">
                      <div className="flex items-start">
                        <span className="text-xl mr-2 text-[#1a729e]">{feature.icon}</span>
                        <div>
                          <h4 className="font-semibold text-[#074a6b] text-sm">{feature.title}</h4>
                          <p className="text-gray-800 text-xs">{feature.description}</p>
                        </div>
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
                      {product.pros.slice(0, 2).map((pro, idx) => (
                        <li key={idx} className="text-[10px] text-gray-800 flex items-start">
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
                      {product.cons.slice(0, 2).map((con, idx) => (
                        <li key={idx} className="text-[10px] text-gray-800 flex items-start">
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

    const renderTermContent = () => (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
            <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          </div>
          <span className="bg-[rgb(208,239,255)] text-[#0080bf] text-sm px-4 py-2 rounded-full flex items-center">
            <FaStar className="mr-2" /> Most Popular
          </span>
        </div>
        <p className="text-lg text-gray-800">{product.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.keyFeatures.map((feature, index) => (
            <div key={index} className="bg-blue-50 bg-opacity-50 p-5 rounded-lg transition">
              <div className="text-3xl mb-3 text-[#1a729e]">{feature.icon}</div>
              <h3 className="font-semibold text-[#0080bf] mb-2">{feature.title}</h3>
              <p className="text-gray-800 text-sm">{feature.description}</p>
            </div>
          ))}
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
          <p className="text-gray-800">{product.bestFor}</p>
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

    const renderWholeLifeContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-800 mt-4">{product.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.keyFeatures.map((feature, index) => (
            <div key={index} className="bg-blue-50 p-5 rounded-lg">
              <div className="text-3xl mb-3 text-[#1a729e]">{feature.icon}</div>
              <h3 className="font-semibold text-[#0080bf] mb-2">{feature.title}</h3>
              <p className="text-gray-800 text-sm">{feature.description}</p>
            </div>
          ))}
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
          <ul className="space-y-2">
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

    const renderEndowmentContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-800 mt-4">{product.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.keyFeatures.map((feature, index) => (
            <div key={index} className="bg-blue-50 p-5 rounded-lg">
              <div className="text-3xl mb-3 text-[#1a729e]">{feature.icon}</div>
              <h3 className="font-semibold text-[#0080bf] mb-2">{feature.title}</h3>
              <p className="text-gray-800 text-sm">{feature.description}</p>
            </div>
          ))}
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
          <ul className="space-y-2">
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

    const renderUlipContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-800 mt-4">{product.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.keyFeatures.map((feature, index) => (
            <div key={index} className="bg-blue-50 p-5 rounded-lg">
              <div className="text-3xl mb-3 text-[#1a729e]">{feature.icon}</div>
              <h3 className="font-semibold text-[#0080bf] mb-2">{feature.title}</h3>
              <p className="text-gray-800 text-sm">{feature.description}</p>
            </div>
          ))}
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
          <ul className="space-y-2">
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

    const renderMoneyBackContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-800 mt-4">{product.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.keyFeatures.map((feature, index) => (
            <div key={index} className="bg-blue-50 p-5 rounded-lg">
              <div className="text-3xl mb-3 text-[#1a729e]">{feature.icon}</div>
              <h3 className="font-semibold text-[#0080bf] mb-2">{feature.title}</h3>
              <p className="text-gray-800 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="bg-gradient-to-r from-[#074a6b] to-[#1a729e] text-white p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaMoneyBillWave className="mr-2" /> Payout Structure Example
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-xs opacity-75">Policy Term</p>
              <p className="text-lg font-bold">{product.payoutExample.term}</p>
            </div>
            <div className="text-center">
              <p className="text-xs opacity-75">Sum Assured</p>
              <p className="text-lg font-bold">{product.payoutExample.sumAssured}</p>
            </div>
            <div className="text-center">
              <p className="text-xs opacity-75">Periodic Payouts</p>
              <p className="text-sm font-bold">{product.payoutExample.payouts}</p>
            </div>
            <div className="text-center">
              <p className="text-xs opacity-75">Maturity</p>
              <p className="text-sm font-bold">{product.payoutExample.maturity}</p>
            </div>
          </div>
        </div> */}

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
          <ul className="space-y-2">
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

    const renderChildContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-800 mt-4">{product.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.keyFeatures.map((feature, index) => (
            <div key={index} className="bg-blue-50 p-5 rounded-lg">
              <div className="text-3xl mb-3 text-[#1a729e]">{feature.icon}</div>
              <h3 className="font-semibold text-[#0080bf]    mb-2">{feature.title}</h3>
              <p className="text-gray-800 text-sm">{feature.description}</p>
            </div>
          ))}
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
          <ul className="space-y-2">
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

    const renderRetirementContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-800 mt-4">{product.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.keyFeatures.map((feature, index) => (
            <div key={index} className="bg-blue-50 p-5 rounded-lg">
              <div className="text-3xl mb-3 text-[#1a729e]">{feature.icon}</div>
              <h3 className="font-semibold text-[#0080bf] mb-2">{feature.title}</h3>
              <p className="text-gray-800 text-sm">{feature.description}</p>
            </div>
          ))}
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
          <ul className="space-y-2">
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

    const renderHealthContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-800 mt-4">{product.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.keyFeatures.map((feature, index) => (
            <div key={index} className="bg-blue-50 p-5 rounded-lg">
              <div className="text-3xl mb-3 text-[#1a729e]">{feature.icon}</div>
              <h3 className="font-semibold text-[#0080bf] mb-2">{feature.title}</h3>
              <p className="text-gray-800 text-sm">{feature.description}</p>
            </div>
          ))}
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
          <ul className="space-y-2">
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
      case 'term':
        return renderTermContent();
      case 'whole-life':
        return renderWholeLifeContent();
      case 'endowment':
        return renderEndowmentContent();
      case 'ulip':
        return renderUlipContent();
      case 'money-back':
        return renderMoneyBackContent();
      case 'child':
        return renderChildContent();
      case 'retirement':
        return renderRetirementContent();
      case 'health':
        return renderHealthContent();
      default:
        return renderTermContent();
    }
  };

  return (
    <>
      <Head>
        <title>Life Insurance Products | Complete Guide</title>
        <meta name="description" content="Explore all types of life insurance products - Term Insurance, Whole Life, Endowment Plans, ULIPs, Child Plans, Retirement Plans, and Health Riders." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#074a6b]">Life Insurance Products</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mt-1 sm:mt-2">Choose the right life insurance for your needs</p>
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

export default LifeInsuranceProducts;