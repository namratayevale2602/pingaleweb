// pages/general-insurance.js
"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  FaShieldAlt,
  FaCar,
  FaHome,
  FaHeartbeat,
  FaUmbrellaBeach,
  FaBriefcase,
  FaMotorcycle,
  FaTruck,
  FaPlane,
  FaShip,
  FaQuestionCircle,
  FaChartPie,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaBolt,
  FaTag,
  FaBalanceScale,
  FaWallet,
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
  FaUpload,
  FaAmbulance,
  FaFire,
  FaWater,
  FaExclamationTriangle,
  FaFileInvoice,
  FaHandHoldingHeart,
  FaHospital,
  FaWheelchair,
  FaTooth,
  FaEye,
  FaBriefcaseMedical,
  FaLaptop
} from 'react-icons/fa';

const GeneralInsurance = () => {
  const [activeTab, setActiveTab] = useState('why-insurance');
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
    { id: 'why-insurance', label: 'Why General Insurance?', icon: <FaQuestionCircle /> },
    { id: 'health', label: 'Health Insurance', icon: <FaHeartbeat /> },
    { id: 'motor', label: 'Motor Insurance', icon: <FaCar /> },
    { id: 'home', label: 'Home Insurance', icon: <FaHome /> },
    { id: 'travel', label: 'Travel Insurance', icon: <FaUmbrellaBeach /> },
    { id: 'critical', label: 'Critical Illness', icon: <FaBriefcaseMedical /> },
    { id: 'personal', label: 'Personal Accident', icon: <FaWheelchair /> },
    { id: 'cyber', label: 'Cyber Insurance', icon: <FaLaptop /> },
  ];

  const content = {
    'why-insurance': {
      title: 'Why General Insurance?',
      description: 'General insurance protects you against unforeseen events that can cause financial loss. It provides a safety net for your assets, health, and peace of mind.',
      reasons: [
        {
          icon: <FaShieldAlt />,
          title: 'Financial Protection',
          description: 'Safeguard your savings from unexpected expenses due to accidents, illnesses, or damages'
        },
        {
          icon: <FaChartPie />,
          title: 'Risk Transfer',
          description: 'Transfer financial risks to insurance companies for a small premium'
        },
        {
          icon: <FaBolt />,
          title: 'Peace of Mind',
          description: 'Live tension-free knowing you\'re protected against life\'s uncertainties'
        },
        {
          icon: <FaChartLine />,
          title: 'Legal Compliance',
          description: 'Motor insurance is mandatory under Motor Vehicles Act'
        },
        {
          icon: <FaWallet />,
          title: 'Tax Benefits',
          description: 'Premium paid for health insurance qualifies for tax deduction under Section 80D'
        },
        {
          icon: <FaCoins />,
          title: 'Affordable Premiums',
          description: 'Get comprehensive coverage starting as low as ₹500 per year'
        },
        {
          icon: <FaUniversity />,
          title: 'IRDAI Regulated',
          description: 'Insurance industry regulated by IRDAI for consumer protection'
        },
        {
          icon: <FaTag />,
          title: 'Add-on Covers',
          description: 'Customize your policy with additional covers as per need'
        }
      ],
    },
    health: {
      title: 'Health Insurance',
      tagline: 'Secure your health, secure your future',
      description: 'Health insurance covers medical expenses incurred due to illnesses or accidents. It ensures you get quality healthcare without worrying about costs.',
      keyFeatures: [
        {
          icon: <FaHospital />,
          title: 'Cashless Treatment',
          description: 'Get treatment at network hospitals without paying upfront'
        },
        {
          icon: <FaMoneyBillWave />,
          title: 'Coverage up to ₹1 Cr',
          description: 'High sum insured options available with super top-up plans'
        },
        {
          icon: <FaClock />,
          title: 'No Claim Bonus',
          description: 'Sum insured increases by 50% for every claim-free year'
        },
        {
          icon: <FaAmbulance />,
          title: 'Ambulance Cover',
          description: 'Coverage for emergency ambulance expenses'
        },
        {
          icon: <FaFileInvoice />,
          title: 'Pre & Post Hospitalization',
          description: 'Coverage for medical expenses before and after hospitalization'
        },
        {
          icon: <FaHeartbeat />,
          title: 'Day Care Procedures',
          description: 'Coverage for treatments not requiring 24-hour hospitalization'
        }
      ],
      types: [
        {
          name: 'Individual Health Insurance',
          coverage: 'Covers one person',
          suitableFor: 'Singles, individuals',
          features: 'Customizable sum insured, personal coverage'
        },
        {
          name: 'Family Floater Plan',
          coverage: 'Covers entire family',
          suitableFor: 'Families with 2+ members',
          features: 'Single sum insured shared by all members'
        },
        {
          name: 'Senior Citizen Plan',
          coverage: 'Age 60+ years',
          suitableFor: 'Elderly parents, senior citizens',
          features: 'Higher coverage, pre-existing disease cover'
        },
        {
          name: 'Critical Illness Plan',
          coverage: 'Specific illnesses',
          suitableFor: 'Those with family history',
          features: 'Lump sum payment on diagnosis'
        },
        {
          name: 'Top-up/Super Top-up',
          coverage: 'Extra cover above base',
          suitableFor: 'High coverage seekers',
          features: 'Cost-effective way to increase cover'
        },
        {
          name: 'Group Health Insurance',
          coverage: 'Employee groups',
          suitableFor: 'Companies, organizations',
          features: 'Employer-provided coverage'
        }
      ],
      inclusions: [
        'Room rent (usually up to 1% of sum insured)',
        'ICU charges',
        'Doctor consultation fees',
        'Medicine costs',
        'Diagnostic tests',
        'Surgery costs',
        'Pre-hospitalization (30-60 days)',
        'Post-hospitalization (60-90 days)',
        'Ambulance charges',
        'Day care procedures'
      ],
      exclusions: [
        'Pre-existing diseases (waiting period 2-4 years)',
        'Cosmetic surgery',
        'Dental treatment (unless accidental)',
        'War/nuclear risks',
        'Self-inflicted injuries',
        'Alcohol/drug-related treatment',
        'Alternative treatments (AYUSH) - limited cover',
        'Maternity (usually after waiting period)'
      ],
      pros: [
        'Cashless treatment at network hospitals',
        'Tax benefits under Section 80D',
        'No claim bonus increases cover',
        'Coverage for COVID-19 treatment',
        'Lifelong renewability',
        'Portability option available'
      ],
      cons: [
        'Waiting period for pre-existing diseases',
        'Co-payment clause in some plans',
        'Room rent limits',
        'Sub-limits on specific treatments',
        'Premium increases with age'
      ],
      tips: [
        'Buy at young age for lower premiums',
        'Compare plans before buying',
        'Check network hospitals in your city',
        'Understand waiting periods',
        'Opt for higher sum insured',
        'Disclose medical history truthfully'
      ]
    },
    motor: {
      title: 'Motor Insurance',
      tagline: 'Protect your vehicle on the road',
      description: 'Motor insurance provides coverage against damage/theft of vehicles and third-party liability. It is mandatory for all vehicles in India.',
      types: [
        {
          name: 'Third-Party Liability',
          coverage: '₹7.5L - Unlimited',
          premium: 'Low',
          features: 'Covers injury/damage to third party, mandatory by law',
          suitableFor: 'Old vehicles, budget conscious'
        },
        {
          name: 'Comprehensive Policy',
          coverage: 'IDV + TP',
          premium: 'Moderate',
          features: 'Covers own damage + third party + theft',
          suitableFor: 'Most vehicle owners'
        },
        {
          name: 'Standalone Own Damage',
          coverage: 'IDV based',
          premium: 'Moderate',
          features: 'Covers own vehicle damage only',
          suitableFor: 'Vehicles with TP covered elsewhere'
        }
      ],
      addOns: [
        {
          name: 'Zero Depreciation Cover',
          benefit: 'Full claim without depreciation deduction',
          extraPremium: '15-20%'
        },
        {
          name: 'Engine Protector',
          benefit: 'Covers engine damage due to water flooding',
          extraPremium: '₹500-1000'
        },
        {
          name: 'Roadside Assistance',
          benefit: '24x7 help for flat tyre, fuel, towing',
          extraPremium: '₹200-500'
        },
        {
          name: 'NCB Protection',
          benefit: 'No Claim Bonus protected even after claim',
          extraPremium: '₹300-800'
        },
        {
          name: 'Consumables Cover',
          benefit: 'Covers nuts, bolts, oil, coolant etc.',
          extraPremium: '₹400-1000'
        }
      ],
      pros: [
        'Mandatory compliance with law',
        'Protection against third-party claims',
        'Coverage against theft',
        'Natural calamities covered',
        'NCB discount on renewal',
        'Transferable on vehicle sale'
      ],
      cons: [
        'Depreciation deducted in claims',
        'IDV decreases each year',
        'No cover for mechanical breakdown',
        'Geographical restrictions',
        'Claim affects NCB'
      ],
      tips: [
        'Buy comprehensive policy for new cars',
        'Opt for zero depreciation add-on',
        'Maintain NCB for discounts',
        'Compare IDV offered',
        'Check garage network',
        'Renew before expiry to avoid inspection'
      ]
    },
    home: {
      title: 'Home Insurance',
      tagline: 'Protect your most valuable asset',
      description: 'Home insurance covers your house structure and contents against risks like fire, theft, natural calamities, and other unforeseen events.',
      coverage: [
        {
          icon: <FaHome />,
          title: 'Building Structure',
          description: 'Coverage for walls, roof, floor, doors, windows'
        },
        {
          icon: <FaWallet />,
          title: 'Contents',
          description: 'Coverage for furniture, electronics, appliances, valuables'
        },
        {
          icon: <FaFire />,
          title: 'Fire & Allied Perils',
          description: 'Coverage against fire, lightning, explosion'
        },
        {
          icon: <FaWater />,
          title: 'Natural Calamities',
          description: 'Coverage for flood, earthquake, storm, landslide'
        },
        {
          icon: <FaExclamationTriangle />,
          title: 'Theft/Burglary',
          description: 'Coverage for theft with forced entry'
        },
        {
          icon: <FaBriefcase />,
          title: 'Personal Liability',
          description: 'Coverage for legal liability to public'
        }
      ],
      types: [
        {
          name: 'Bundled Policy',
          cover: 'Structure + Contents',
          premium: '₹0.5-1 per thousand',
          suitableFor: 'Homeowners'
        },
        {
          name: 'Structure Only',
          cover: 'Only building',
          premium: '₹0.3-0.6 per thousand',
          suitableFor: 'Owners with less contents'
        },
        {
          name: 'Contents Only',
          cover: 'Only household items',
          premium: '₹0.8-1.5 per thousand',
          suitableFor: 'Tenants'
        }
      ],
      pros: [
        'Comprehensive protection',
        'Affordable premium',
        'Coverage against multiple risks',
        'Personal liability cover',
        'Alternative accommodation cover',
        'Tax benefits in some cases'
      ],
      cons: [
        'Policy exclusions to check',
        'Underinsurance penalty',
        'Depreciation on contents',
        'Geographical restrictions',
        'Claim settlement process'
      ],
      tips: [
        'Insure for full reconstruction cost',
        'Keep inventory of contents with bills',
        'Opt for earthquake cover in seismic zones',
        'Review coverage annually',
        'Disclose high-value items separately'
      ]
    },
    travel: {
      title: 'Travel Insurance',
      tagline: 'Travel safe, travel smart',
      description: 'Travel insurance provides coverage during domestic and international trips against medical emergencies, trip cancellations, lost baggage, and other travel-related risks.',
      types: [
        {
          name: 'Domestic Travel',
          coverage: 'Within India',
          premium: '₹50-500',
          features: 'Medical, baggage, trip delay'
        },
        {
          name: 'International Travel',
          coverage: 'Outside India',
          premium: '₹300-3000',
          features: 'Medical, evacuation, passport loss'
        },
        {
          name: 'Student Travel',
          coverage: 'Study abroad',
          premium: '₹5000-15000',
          features: 'Long-term coverage, study interruption'
        },
        {
          name: 'Senior Citizen Travel',
          coverage: 'Age 60+',
          premium: 'Higher',
          features: 'Enhanced medical coverage'
        }
      ],
      coverage: [
        {
          icon: <FaHospital />,
          title: 'Medical Expenses',
          description: 'Coverage for illness/injury during travel'
        },
        {
          icon: <FaAmbulance />,
          title: 'Emergency Evacuation',
          description: 'Medical evacuation to nearest hospital'
        },
        {
          icon: <FaPlane />,
          title: 'Trip Cancellation',
          description: 'Refund if trip cancelled due to unforeseen events'
        },
        {
          icon: <FaClock />,
          title: 'Trip Delay',
          description: 'Compensation for delayed flights'
        },
        {
          icon: <FaBriefcase />,
          title: 'Lost Baggage',
          description: 'Coverage for checked-in baggage loss'
        },
        {
          icon: <FaFileInvoice />,
          title: 'Passport Loss',
          description: 'Assistance for lost passport'
        }
      ],
      pros: [
        'Medical coverage in foreign countries',
        'Coverage for expensive medical evacuation',
        'Trip cancellation protection',
        'Baggage loss coverage',
        '24x7 travel assistance',
        'Affordable premiums'
      ],
      cons: [
        'Pre-existing disease exclusions',
        'Adventure sports not covered (add-on)',
        'Claim limit for valuables',
        'Deductible applicable',
        'Time-sensitive claims'
      ],
      tips: [
        'Buy insurance immediately after booking trip',
        'Check medical coverage limits',
        'Opt for comprehensive plan',
        'Keep policy document handy',
        'Know emergency contact numbers',
        'Declare pre-existing conditions'
      ]
    },
    critical: {
      title: 'Critical Illness Insurance',
      tagline: 'Financial shield against major illnesses',
      description: 'Critical illness insurance provides a lump sum payment upon diagnosis of specified life-threatening illnesses, helping you focus on recovery without financial stress.',
      illnesses: [
        'Cancer (various stages)',
        'Heart Attack - First Time',
        'Coronary Artery Bypass Surgery',
        'Kidney Failure',
        'Stroke',
        'Major Organ Transplant',
        'Multiple Sclerosis',
        'Permanent Paralysis',
        'Aorta Graft Surgery',
        'Alzheimer\'s Disease',
        'Parkinson\'s Disease',
        'Blindness',
        'Deafness',
        'Loss of Speech',
        'Coma'
      ],
      comparison: [
        { aspect: 'Payment Type', health: 'Indemnity (actual expenses)', critical: 'Lump sum' },
        { aspect: 'Usage', health: 'Only for medical bills', critical: 'Any purpose' },
        { aspect: 'Coverage', health: 'All illnesses (with limits)', critical: 'Specific illnesses only' },
        { aspect: 'Premium', health: 'Higher for comprehensive', critical: 'Lower for specified covers' },
        { aspect: 'Waiting Period', health: '30 days', critical: '90 days' },
        { aspect: 'Survival Period', health: 'None', critical: '30 days (post diagnosis)' }
      ],
      pros: [
        'Lump sum payment on diagnosis',
        'Money can be used for any purpose',
        'Supplement health insurance',
        'Lower premium than comprehensive health',
        'Coverage up to age 65-70',
        'Tax benefits under 80D'
      ],
      cons: [
        'Only specific illnesses covered',
        'Survival period condition',
        'Higher waiting period',
        'Pre-existing disease exclusion',
        'One-time payout policy'
      ],
      tips: [
        'Buy when young and healthy',
        'Coverage of 3-5 years income recommended',
        'Check illness definitions carefully',
        'Consider family history',
        'Combine with health insurance',
        'Understand survival period clause'
      ]
    },
    personal: {
      title: 'Personal Accident Insurance',
      tagline: 'Coverage when you need it most',
      description: 'Personal accident insurance provides compensation in case of accidental death, permanent total disability, permanent partial disability, or temporary disability.',
      coverage: [
        {
          type: 'Accidental Death',
          payout: '100% of sum insured',
          description: 'Payment to nominee in case of death due to accident'
        },
        {
          type: 'Permanent Total Disability',
          payout: '100% of sum insured',
          description: 'Loss of both limbs, eyesight, or permanent incapacitation'
        },
        {
          type: 'Permanent Partial Disability',
          payout: 'Percentage of sum insured',
          description: 'Loss of one limb, one eye, or partial disability'
        },
        {
          type: 'Temporary Total Disability',
          payout: 'Weekly benefit',
          description: 'Weekly compensation during recovery period'
        }
      ],
      features: [
        {
          icon: <FaWheelchair />,
          title: 'Disability Coverage',
          description: 'Coverage for permanent and temporary disability'
        },
        {
          icon: <FaMoneyBillWave />,
          title: 'Income Replacement',
          description: 'Regular income during temporary disability'
        },
        {
          icon: <FaAmbulance />,
          title: 'Medical Expenses',
          description: 'Coverage for accident-related medical costs'
        },
        {
          icon: <FaHeartbeat />,
          title: 'Education Grant',
          description: 'Children\'s education support in case of death'
        }
      ],
      pros: [
        '24x7 coverage worldwide',
        'Affordable premiums',
        'No medical checkup for lower sums',
        'Coverage for disabilities',
        'Income replacement benefit',
        'Can be standalone or rider'
      ],
      cons: [
        'Only accidental events covered',
        'Exclusions for adventure sports',
        'Alcohol/drug-related exclusions',
        'Partial disability assessment issues',
        'Suicide not covered'
      ],
      tips: [
        'Coverage of 5-10 times annual income',
        'Check disability definitions',
        'Opt for family floater',
        'Consider as rider on life insurance',
        'Review coverage periodically'
      ]
    },
    cyber: {
      title: 'Cyber Insurance',
      tagline: 'Protect your digital life',
      description: 'Cyber insurance protects individuals and families against financial losses from cyber crimes like identity theft, phishing, cyber stalking, and online fraud.',
      coverage: [
        {
          icon: <FaLaptop />,
          title: 'Identity Theft',
          description: 'Coverage for expenses to restore identity'
        },
        {
          icon: <FaMoneyBillWave />,
          title: 'Financial Fraud',
          description: 'Reimbursement for online financial fraud'
        },
        {
          icon: <FaDownload />,
          title: 'Cyber Extortion',
          description: 'Coverage for ransomware and extortion'
        },
        {
          icon: <FaUpload />,
          title: 'Data Restoration',
          description: 'Cost to restore lost digital data'
        },
        {
          icon: <FaShieldAlt />,
          title: 'Cyber Stalking',
          description: 'Legal and counselling expenses'
        },
        {
          icon: <FaFileInvoice />,
          title: 'Legal Expenses',
          description: 'Coverage for legal costs in cyber cases'
        }
      ],
      inclusions: [
        'Identity theft restoration',
        'Online banking fraud',
        'Phishing attacks',
        'SIM swap fraud',
        'Credit card fraud',
        'Ransomware attacks',
        'Cyber stalking',
        'Social media compromise',
        'Data loss restoration',
        'Legal consultation'
      ],
      exclusions: [
        'Losses from own negligence',
        'Business/commercial losses',
        'Intentional acts',
        'War/terrorism',
        'Pre-existing cyber incidents',
        'Loss of tangible property'
      ],
      pros: [
        'Specialized cyber protection',
        'Covers modern digital risks',
        '24x7 cyber assistance',
        'Affordable premiums',
        'Legal support included',
        'Peace of mind online'
      ],
      cons: [
        'Limited awareness',
        'Lower coverage limits',
        'Claim documentation required',
        'Not all banks included',
        'Geographic restrictions'
      ],
      tips: [
        'Check coverage for your bank',
        'Understand claim process',
        'Keep digital evidence',
        'Enable two-factor authentication',
        'Review policy annually',
        'Combine with home insurance'
      ]
    }
  };

  // Render all sections for mobile view
  const renderMobileContent = () => {
    return (
      <div className="space-y-6">
        {/* Why General Insurance? */}
        <section id="why-insurance" className="scroll-mt-20">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-[#074a6b] mb-3 flex items-center">
              <span className="text-2xl mr-2 text-[#1a729e]">{tabs[0].icon}</span>
              Why General Insurance?
            </h2>
            <p className="text-sm text-gray-800 mb-4">{content['why-insurance'].description}</p>
            
            <div className="space-y-3 mb-4">
              {content['why-insurance'].reasons.map((reason, index) => (
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

        {/* Health Insurance */}
        <section id="health" className="scroll-mt-20">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-[#074a6b] mb-3 flex items-center">
              <span className="text-2xl mr-2 text-[#1a729e]">{tabs[1].icon}</span>
              Health Insurance
            </h2>
            <p className="text-sm text-gray-800 mb-2">{content.health.tagline}</p>
            <p className="text-xs text-gray-600 mb-4">{content.health.description}</p>
            
            <div className="space-y-3 mb-4">
              {content.health.keyFeatures.slice(0, 4).map((feature, index) => (
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

            <h3 className="font-semibold text-[#074a6b] text-sm mb-2">Popular Plan Types:</h3>
            <div className="space-y-2 mb-4">
              {content.health.types.slice(0, 3).map((type, index) => (
                <div key={index} className="border border-gray-200 p-2 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-xs text-[#0080bf]">{type.name}</span>
                    <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded">{type.suitableFor}</span>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1">{type.features}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-green-50 p-2 rounded-lg">
                <h4 className="font-semibold text-green-800 text-xs mb-1 flex items-center">
                  <FaCheckCircle className="mr-1 text-green-600" /> Inclusions
                </h4>
                <ul className="space-y-1">
                  {content.health.inclusions.slice(0, 4).map((item, idx) => (
                    <li key={idx} className="text-[10px] flex items-start">
                      <span className="text-green-500 mr-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 p-2 rounded-lg">
                <h4 className="font-semibold text-red-800 text-xs mb-1 flex items-center">
                  <FaTimesCircle className="mr-1 text-red-600" /> Exclusions
                </h4>
                <ul className="space-y-1">
                  {content.health.exclusions.slice(0, 4).map((item, idx) => (
                    <li key={idx} className="text-[10px] flex items-start">
                      <span className="text-red-500 mr-1">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-[#0080bf] text-xs mb-1 flex items-center">
                <FaLightbulb className="mr-1 text-[#0080bf]" /> Pro Tips
              </h4>
              <ul className="space-y-1">
                {content.health.tips.slice(0, 3).map((tip, index) => (
                  <li key={index} className="text-[10px] text-gray-800 flex items-start">
                    <span className="mr-1">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Motor Insurance */}
        <section id="motor" className="scroll-mt-20">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-[#074a6b] mb-3 flex items-center">
              <span className="text-2xl mr-2 text-[#1a729e]">{tabs[2].icon}</span>
              Motor Insurance
            </h2>
            <p className="text-sm text-gray-800 mb-2">{content.motor.tagline}</p>
            <p className="text-xs text-gray-600 mb-4">{content.motor.description}</p>
            
            <h3 className="font-semibold text-[#074a6b] text-sm mb-2">Policy Types:</h3>
            <div className="space-y-2 mb-4">
              {content.motor.types.map((type, index) => (
                <div key={index} className="bg-gray-50 p-2 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-xs text-[#074a6b]">{type.name}</span>
                    <span className="text-[10px] bg-[rgb(208,239,255)] text-[#0080bf] px-2 py-0.5 rounded">Premium: {type.premium}</span>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1">{type.features}</p>
                </div>
              ))}
            </div>

            <h3 className="font-semibold text-[#074a6b] text-sm mb-2">Popular Add-ons:</h3>
            <div className="space-y-2 mb-4">
              {content.motor.addOns.slice(0, 3).map((addon, index) => (
                <div key={index} className="border-l-2 border-[#0080bf] pl-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-xs text-[#0080bf]">{addon.name}</span>
                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded">+{addon.extraPremium}</span>
                  </div>
                  <p className="text-[10px] text-gray-500">{addon.benefit}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-[#0080bf] text-xs mb-1 flex items-center">
                <FaLightbulb className="mr-1 text-[#0080bf]" /> Tips
              </h4>
              <ul className="space-y-1">
                {content.motor.tips.slice(0, 3).map((tip, index) => (
                  <li key={index} className="text-[10px] text-gray-800 flex items-start">
                    <span className="mr-1">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Home Insurance */}
        <section id="home" className="scroll-mt-20">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-[#074a6b] mb-3 flex items-center">
              <span className="text-2xl mr-2 text-[#1a729e]">{tabs[3].icon}</span>
              Home Insurance
            </h2>
            <p className="text-sm text-gray-800 mb-2">{content.home.tagline}</p>
            <p className="text-xs text-gray-600 mb-4">{content.home.description}</p>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              {content.home.coverage.slice(0, 4).map((item, index) => (
                <div key={index} className="bg-blue-50 p-2 rounded-lg">
                  <span className="text-lg block mb-1 text-[#1a729e]">{item.icon}</span>
                  <h4 className="font-medium text-xs text-[#074a6b]">{item.title}</h4>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-3">
              {content.home.types.map((type, index) => (
                <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <div>
                    <span className="text-xs font-medium text-[#074a6b]">{type.name}</span>
                    <p className="text-[10px] text-gray-500">{type.suitableFor}</p>
                  </div>
                  <span className="text-[10px] bg-[rgb(208,239,255)] px-2 py-1 rounded">{type.premium}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-[#0080bf] text-xs mb-1 flex items-center">
                <FaLightbulb className="mr-1 text-[#0080bf]" /> Tips
              </h4>
              <ul className="space-y-1">
                {content.home.tips.slice(0, 3).map((tip, index) => (
                  <li key={index} className="text-[10px] text-gray-800 flex items-start">
                    <span className="mr-1">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Travel Insurance */}
        <section id="travel" className="scroll-mt-20">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-[#074a6b] mb-3 flex items-center">
              <span className="text-2xl mr-2 text-[#1a729e]">{tabs[4].icon}</span>
              Travel Insurance
            </h2>
            <p className="text-sm text-gray-800 mb-2">{content.travel.tagline}</p>
            <p className="text-xs text-gray-600 mb-4">{content.travel.description}</p>
            
            <div className="space-y-2 mb-4">
              {content.travel.coverage.slice(0, 4).map((item, index) => (
                <div key={index} className="bg-blue-50 p-2 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-lg mr-2 text-[#1a729e]">{item.icon}</span>
                    <div>
                      <h4 className="font-medium text-xs text-[#074a6b]">{item.title}</h4>
                      <p className="text-[10px] text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-[#0080bf] text-xs mb-1 flex items-center">
                <FaLightbulb className="mr-1 text-[#0080bf]" /> Tips
              </h4>
              <ul className="space-y-1">
                {content.travel.tips.slice(0, 3).map((tip, index) => (
                  <li key={index} className="text-[10px] text-gray-800 flex items-start">
                    <span className="mr-1">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Critical Illness */}
        <section id="critical" className="scroll-mt-20">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-[#074a6b] mb-3 flex items-center">
              <span className="text-2xl mr-2 text-[#1a729e]">{tabs[5].icon}</span>
              Critical Illness Insurance
            </h2>
            <p className="text-sm text-gray-800 mb-2">{content.critical.tagline}</p>
            <p className="text-xs text-gray-600 mb-4">{content.critical.description}</p>
            
            <div className="bg-blue-50 p-3 rounded-lg mb-3">
              <h4 className="font-semibold text-[#074a6b] text-xs mb-1">Illnesses Covered:</h4>
              <div className="flex flex-wrap gap-1">
                {content.critical.illnesses.slice(0, 6).map((illness, idx) => (
                  <span key={idx} className="bg-white text-[#0080bf] text-[10px] px-2 py-1 rounded-full border border-[#0080bf]">
                    {illness}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-1 mb-3">
              <h4 className="font-semibold text-xs text-[#074a6b]">Health vs Critical Illness:</h4>
              {content.critical.comparison.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex justify-between text-[10px] border-b border-gray-100 py-1">
                  <span className="text-gray-500">{item.aspect}:</span>
                  <div className="text-right">
                    <span className="text-gray-800 ml-1 block">{item.health}</span>
                    <span className="text-[#0080bf] ml-1 block">vs {item.critical}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-[#0080bf] text-xs mb-1 flex items-center">
                <FaLightbulb className="mr-1 text-[#0080bf]" /> Tips
              </h4>
              <ul className="space-y-1">
                {content.critical.tips.slice(0, 3).map((tip, index) => (
                  <li key={index} className="text-[10px] text-gray-800 flex items-start">
                    <span className="mr-1">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Personal Accident */}
        <section id="personal" className="scroll-mt-20">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-[#074a6b] mb-3 flex items-center">
              <span className="text-2xl mr-2 text-[#1a729e]">{tabs[6].icon}</span>
              Personal Accident Insurance
            </h2>
            <p className="text-sm text-gray-800 mb-2">{content.personal.tagline}</p>
            <p className="text-xs text-gray-600 mb-4">{content.personal.description}</p>
            
            <div className="space-y-2 mb-4">
              {content.personal.coverage.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-[#074a6b]">{item.type}</span>
                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded">{item.payout}</span>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-[#0080bf] text-xs mb-1 flex items-center">
                <FaLightbulb className="mr-1 text-[#0080bf]" /> Tips
              </h4>
              <ul className="space-y-1">
                {content.personal.tips.slice(0, 3).map((tip, index) => (
                  <li key={index} className="text-[10px] text-gray-800 flex items-start">
                    <span className="mr-1">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Cyber Insurance */}
        <section id="cyber" className="scroll-mt-20">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-[#074a6b] mb-3 flex items-center">
              <span className="text-2xl mr-2 text-[#1a729e]">{tabs[7].icon}</span>
              Cyber Insurance
            </h2>
            <p className="text-sm text-gray-800 mb-2">{content.cyber.tagline}</p>
            <p className="text-xs text-gray-600 mb-4">{content.cyber.description}</p>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              {content.cyber.coverage.slice(0, 4).map((item, index) => (
                <div key={index} className="bg-blue-50 p-2 rounded-lg">
                  <span className="text-lg block mb-1 text-[#1a729e]">{item.icon}</span>
                  <h4 className="font-medium text-xs text-[#074a6b]">{item.title}</h4>
                  <p className="text-[10px] text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-[#0080bf] text-xs mb-1 flex items-center">
                <FaLightbulb className="mr-1 text-[#0080bf]" /> Tips
              </h4>
              <ul className="space-y-1">
                {content.cyber.tips.slice(0, 3).map((tip, index) => (
                  <li key={index} className="text-[10px] text-gray-800 flex items-start">
                    <span className="mr-1">•</span>
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
      case 'why-insurance':
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

      case 'health':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{currentContent.title}</h2>
                <p className="text-lg text-[#0080bf] font-medium">{currentContent.tagline}</p>
              </div>
              <span className="bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full flex items-center">
                <FaHeartbeat className="mr-2" /> Essential Coverage
              </span>
            </div>
            <p className="text-lg text-gray-600">{currentContent.description}</p>
            
            <div>
              <h3 className="text-xl font-semibold text-[#074a6b] mb-4 flex items-center">
                <FaStar className="mr-2 text-[#1a729e]" /> Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentContent.keyFeatures.map((feature, index) => (
                  <div key={index} className="bg-blue-50 p-5 rounded-lg">
                    <div className="text-3xl mb-3 text-[#1a729e]">{feature.icon}</div>
                    <h3 className="font-semibold text-[#074a6b] mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Types of Health Plans</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Plan Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Coverage</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Suitable For</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {currentContent.types.map((type, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{type.name}</td>
                        <td className="px-4 py-3 text-sm">{type.coverage}</td>
                        <td className="px-4 py-3 text-sm">{type.suitableFor}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{type.features}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                  <FaCheckCircle className="mr-2 text-green-600" /> What's Covered?
                </h3>
                <ul className="space-y-2">
                  {currentContent.inclusions.slice(0, 8).map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
                  <FaTimesCircle className="mr-2 text-red-600" /> What's Not Covered?
                </h3>
                <ul className="space-y-2">
                  {currentContent.exclusions.slice(0, 8).map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-red-500 mr-2">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                  <FaCheckCircle className="mr-2 text-green-600" /> Pros
                </h3>
                <ul className="space-y-2">
                  {currentContent.pros.map((pro, idx) => (
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
                  {currentContent.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-red-500 mr-2">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-[#0080bf] mb-3 flex items-center">
                <FaLightbulb className="mr-2 text-[#0080bf]" /> Pro Tips
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentContent.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-800">
                    <span className="mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'motor':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{currentContent.title}</h2>
              <p className="text-lg text-[#0080bf] font-medium">{currentContent.tagline}</p>
              <p className="text-lg text-gray-600 mt-4">{currentContent.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Policy Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentContent.types.map((type, index) => (
                  <div key={index} className="border border-gray-200 p-5 rounded-lg hover:shadow-md transition">
                    <h4 className="font-semibold text-[#074a6b] text-lg mb-2">{type.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{type.features}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Coverage: {type.coverage}</span>
                      <span className="bg-[rgb(208,239,255)] text-[#0080bf] px-3 py-1 rounded-full text-sm">
                        Premium: {type.premium}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Popular Add-on Covers</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Add-on Cover</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Benefit</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Extra Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {currentContent.addOns.map((addon, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{addon.name}</td>
                        <td className="px-4 py-3 text-sm">{addon.benefit}</td>
                        <td className="px-4 py-3 text-sm text-green-600 font-semibold">{addon.extraPremium}</td>
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
                  {currentContent.pros.map((pro, idx) => (
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
                  {currentContent.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-red-500 mr-2">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-[#0080bf] mb-3 flex items-center">
                <FaLightbulb className="mr-2 text-[#0080bf]" /> Pro Tips
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentContent.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-800">
                    <span className="mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'home':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{currentContent.title}</h2>
              <p className="text-lg text-[#0080bf] font-medium">{currentContent.tagline}</p>
              <p className="text-lg text-gray-600 mt-4">{currentContent.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[#074a6b] mb-4">What's Covered?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentContent.coverage.map((item, index) => (
                  <div key={index} className="bg-blue-50 p-5 rounded-lg">
                    <div className="text-3xl mb-3 text-[#1a729e]">{item.icon}</div>
                    <h3 className="font-semibold text-[#074a6b] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Policy Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentContent.types.map((type, index) => (
                  <div key={index} className="border border-gray-200 p-5 rounded-lg">
                    <h4 className="font-semibold text-[#074a6b] text-lg mb-2">{type.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">Cover: {type.cover}</p>
                    <p className="text-sm text-gray-600 mb-3">Best for: {type.suitableFor}</p>
                    <div className="bg-[rgb(208,239,255)] text-[#0080bf] px-3 py-2 rounded-lg text-center">
                      Premium: {type.premium}
                    </div>
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
                  {currentContent.pros.map((pro, idx) => (
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
                  {currentContent.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-red-500 mr-2">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-[#0080bf] mb-3 flex items-center">
                <FaLightbulb className="mr-2 text-[#0080bf]" /> Pro Tips
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentContent.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-800">
                    <span className="mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'travel':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{currentContent.title}</h2>
              <p className="text-lg text-[#0080bf] font-medium">{currentContent.tagline}</p>
              <p className="text-lg text-gray-600 mt-4">{currentContent.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Types of Travel Insurance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentContent.types.map((type, index) => (
                  <div key={index} className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition">
                    <h4 className="font-semibold text-[#074a6b] mb-2">{type.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">Coverage: {type.coverage}</p>
                    <p className="text-sm text-gray-600 mb-3">{type.features}</p>
                    <div className="bg-[rgb(208,239,255)] text-[#0080bf] px-3 py-1 rounded-full inline-block">
                      Premium: {type.premium}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Coverage Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentContent.coverage.map((item, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg flex items-start">
                    <span className="text-2xl mr-3 text-[#1a729e]">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-[#074a6b] mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
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
                  {currentContent.pros.map((pro, idx) => (
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
                  {currentContent.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-red-500 mr-2">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-[#0080bf] mb-3 flex items-center">
                <FaLightbulb className="mr-2 text-[#0080bf]" /> Pro Tips
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentContent.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-800">
                    <span className="mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'critical':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{currentContent.title}</h2>
              <p className="text-lg text-[#0080bf] font-medium">{currentContent.tagline}</p>
              <p className="text-lg text-gray-600 mt-4">{currentContent.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Illnesses Covered</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {currentContent.illnesses.map((illness, index) => (
                  <div key={index} className="bg-blue-50 p-3 rounded-lg text-center">
                    <span className="text-sm text-[#074a6b]">{illness}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Health Insurance vs Critical Illness</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Aspect</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Health Insurance</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Critical Illness</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {currentContent.comparison.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{item.aspect}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{item.health}</td>
                        <td className="px-4 py-3 text-sm text-[#0080bf]">{item.critical}</td>
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
                  {currentContent.pros.map((pro, idx) => (
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
                  {currentContent.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-red-500 mr-2">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-[#0080bf] mb-3 flex items-center">
                <FaLightbulb className="mr-2 text-[#0080bf]" /> Pro Tips
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentContent.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-800">
                    <span className="mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'personal':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{currentContent.title}</h2>
              <p className="text-lg text-[#0080bf] font-medium">{currentContent.tagline}</p>
              <p className="text-lg text-gray-600 mt-4">{currentContent.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Coverage Structure</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Coverage Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Payout</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {currentContent.coverage.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{item.type}</td>
                        <td className="px-4 py-3 text-sm text-green-600 font-semibold">{item.payout}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl mb-2 text-[#1a729e]">{feature.icon}</div>
                    <h4 className="font-semibold text-[#074a6b] mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
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
                  {currentContent.pros.map((pro, idx) => (
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
                  {currentContent.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-red-500 mr-2">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-[#0080bf] mb-3 flex items-center">
                <FaLightbulb className="mr-2 text-[#0080bf]" /> Pro Tips
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentContent.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-800">
                    <span className="mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'cyber':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{currentContent.title}</h2>
              <p className="text-lg text-[#0080bf] font-medium">{currentContent.tagline}</p>
              <p className="text-lg text-gray-600 mt-4">{currentContent.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Coverage Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentContent.coverage.map((item, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg flex items-start">
                    <span className="text-2xl mr-3 text-[#1a729e]">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-[#074a6b] mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                  <FaCheckCircle className="mr-2 text-green-600" /> What's Included?
                </h3>
                <ul className="space-y-2">
                  {currentContent.inclusions.slice(0, 8).map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
                  <FaTimesCircle className="mr-2 text-red-600" /> What's Excluded?
                </h3>
                <ul className="space-y-2">
                  {currentContent.exclusions.slice(0, 6).map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-red-500 mr-2">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                  <FaCheckCircle className="mr-2 text-green-600" /> Pros
                </h3>
                <ul className="space-y-2">
                  {currentContent.pros.map((pro, idx) => (
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
                  {currentContent.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-red-500 mr-2">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-[#0080bf] mb-3 flex items-center">
                <FaLightbulb className="mr-2 text-[#0080bf]" /> Pro Tips
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentContent.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-800">
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
        <title>General Insurance | Complete Guide to All Insurance Types</title>
        <meta name="description" content="Complete guide to general insurance - Health Insurance, Motor Insurance, Home Insurance, Travel Insurance, Critical Illness, Personal Accident, and Cyber Insurance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#074a6b]">General Insurance</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-1 sm:mt-2">Your complete guide to understanding general insurance</p>
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

export default GeneralInsurance;