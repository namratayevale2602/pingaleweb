// pages/general-insurance-products.js
"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  FaHeartbeat,
  FaCar,
  FaHome,
  FaUmbrellaBeach,
  FaBriefcaseMedical,
  FaWheelchair,
  FaLaptop,
  FaWallet,
  FaShieldAlt,
  FaAmbulance,
  FaHospital,
  FaFire,
  FaWater,
  FaExclamationTriangle,
  FaFileInvoice,
  FaMoneyBillWave,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaLightbulb,
  FaUsers,
  FaStar,
  FaArrowUp,
  FaArrowDown,
  FaSyncAlt,
  FaDownload,
  FaUpload,
  FaPlane,
  FaMotorcycle,
  FaTruck,
  FaTooth,
  FaEye,
  FaBriefcase,
  FaBaby,
  FaFemale,
  FaMale,
  FaUserTie,
  FaUserGraduate,
  FaUserFriends,
  FaPiggyBank,
  FaChartLine,
  FaCoins,
  FaPercent,
  FaCalendarAlt,
  FaUniversity,
  FaGift,
  FaRocket
} from 'react-icons/fa';

const GeneralInsuranceProducts = () => {
  const [activeTab, setActiveTab] = useState('health');
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
    { id: 'health', label: 'Health Insurance', icon: <FaHeartbeat /> },
    { id: 'motor', label: 'Motor Insurance', icon: <FaCar /> },
    { id: 'home', label: 'Home Insurance', icon: <FaHome /> },
    { id: 'travel', label: 'Travel Insurance', icon: <FaUmbrellaBeach /> },
    { id: 'critical', label: 'Critical Illness', icon: <FaBriefcaseMedical /> },
    { id: 'accident', label: 'Personal Accident', icon: <FaWheelchair /> },
  ];

  const products = {
    health: {
      title: 'Health Insurance Products',
      tagline: 'Comprehensive health coverage for you and your family',
      description: 'Health insurance plans that cover hospitalization, pre & post-hospitalization expenses, day care procedures, and more with cashless treatment at network hospitals.',
      categories: [
        {
          name: 'Individual Health Plans',
          coverage: '₹3L - ₹1Cr',
          premium: '₹5,000 - ₹25,000/year',
          features: 'Coverage for single individual, no claim bonus, cumulative bonus',
          suitableFor: 'Singles, young professionals',
          icon: <FaMale />
        },
        {
          name: 'Family Floater Plans',
          coverage: '₹5L - ₹1Cr',
          premium: '₹8,000 - ₹40,000/year',
          features: 'Coverage for entire family, shared sum insured, maternity options',
          suitableFor: 'Families with 2-6 members',
          icon: <FaUserFriends />
        },
        {
          name: 'Senior Citizen Plans',
          coverage: '₹3L - ₹10L',
          premium: '₹15,000 - ₹50,000/year',
          features: 'Higher coverage for age-related ailments, no upper age limit in some plans',
          suitableFor: 'Age 60+ years',
          icon: <FaUserTie />
        },
        {
          name: 'Maternity Plans',
          coverage: '₹50k - ₹3L',
          premium: '₹10,000 - ₹30,000/year',
          features: 'Coverage for delivery, newborn baby cover, vaccination',
          suitableFor: 'Young couples planning family',
          icon: <FaBaby />
        },
        {
          name: 'Arogya Sanjeevani',
          coverage: '₹1L - ₹10L',
          premium: '₹3,000 - ₹25,000/year',
          features: 'Standard health policy, affordable premium, fixed benefits',
          suitableFor: 'Budget-conscious buyers',
          icon: <FaHeartbeat />
        },
        {
          name: 'Top-up / Super Top-up',
          coverage: '₹5L - ₹1Cr',
          premium: '₹1,500 - ₹10,000/year',
          features: 'Extra cover above base policy, cost-effective',
          suitableFor: 'Those needing high coverage',
          icon: <FaArrowUp />
        }
      ],
      topInsurers: [
        { name: 'Star Health Insurance', claimRatio: '92%', network: '14,000+ hospitals' },
        { name: 'HDFC Ergo', claimRatio: '94%', network: '12,000+ hospitals' },
        { name: 'ICICI Lombard', claimRatio: '93%', network: '7,000+ hospitals' },
        { name: 'New India Assurance', claimRatio: '91%', network: '8,000+ hospitals' },
        { name: 'Care Health Insurance', claimRatio: '90%', network: '9,000+ hospitals' }
      ],
      pros: [
        'Cashless treatment at network hospitals',
        'Tax benefits under Section 80D',
        'Coverage for pre-existing diseases after waiting period',
        'No claim bonus increases sum insured',
        'Day care procedures covered',
        'Lifelong renewability'
      ],
      cons: [
        'Waiting period for pre-existing conditions',
        'Co-payment clause in some plans',
        'Room rent limits',
        'Sub-limits on specific treatments',
        'Premium increases with age'
      ],
      tips: [
        'Buy health insurance when young for lower premiums',
        'Compare at least 3-4 plans before buying',
        'Check network hospitals in your area',
        'Opt for higher sum insured (min ₹5L)',
        'Disclose all pre-existing conditions',
        'Consider super top-up for extra coverage'
      ],
      features: [
        { name: 'Cashless Hospitalization', value: 'Yes - Network Hospitals' },
        { name: 'Pre-hospitalization', value: '30-60 days covered' },
        { name: 'Post-hospitalization', value: '60-90 days covered' },
        { name: 'Day Care Procedures', value: '150+ procedures' },
        { name: 'Ambulance Cover', value: '₹1,000 - ₹2,500 per trip' },
        { name: 'No Claim Bonus', value: 'Up to 100% increase' }
      ],
      premiumFactors: [
        'Age - Higher age = Higher premium',
        'Sum Insured - Higher cover = Higher premium',
        'City of residence - Metro cities have higher rates',
        'Family size - More members = Higher premium',
        'Medical history - Pre-existing diseases increase premium',
        'Smoking/Tobacco use - Higher premium'
      ]
    },
    motor: {
      title: 'Motor Insurance Products',
      tagline: 'Protect your vehicle on Indian roads',
      description: 'Motor insurance covers your car or two-wheeler against accidents, theft, natural calamities, and third-party liability. Mandatory as per Motor Vehicles Act.',
      categories: [
        {
          name: 'Comprehensive Car Insurance',
          vehicleType: 'Cars',
          coverage: 'IDV + TP Liability',
          premium: '3-5% of IDV',
          features: 'Own damage + Third party + Theft + Natural calamities',
          suitableFor: 'New cars, financed cars',
          icon: <FaCar />
        },
        {
          name: 'Third Party Car Insurance',
          vehicleType: 'Cars',
          coverage: 'TP Liability only',
          premium: '₹2,000 - ₹8,000',
          features: 'Covers third party injury/death/property, mandatory by law',
          suitableFor: 'Old cars, budget conscious',
          icon: <FaCar />
        },
        {
          name: 'Comprehensive Bike Insurance',
          vehicleType: 'Two-wheelers',
          coverage: 'IDV + TP Liability',
          premium: '₹1,000 - ₹5,000',
          features: 'Own damage + Third party + Theft + Accessories cover',
          suitableFor: 'New bikes, premium bikes',
          icon: <FaMotorcycle />
        },
        {
          name: 'Third Party Bike Insurance',
          vehicleType: 'Two-wheelers',
          coverage: 'TP Liability only',
          premium: '₹500 - ₹1,500',
          features: 'Covers third party liability, legal compliance',
          suitableFor: 'Old bikes, basic coverage',
          icon: <FaMotorcycle />
        },
        {
          name: 'Commercial Vehicle Insurance',
          vehicleType: 'Trucks, Taxis',
          coverage: 'IDV + TP + Goods',
          premium: '₹10,000 - ₹50,000',
          features: 'Coverage for goods in transit, driver cover, fleet discount',
          suitableFor: 'Business owners, fleet operators',
          icon: <FaTruck />
        },
        {
          name: 'Pay-as-you-drive Insurance',
          vehicleType: 'Cars/Bikes',
          coverage: 'Based on usage',
          premium: 'Variable',
          features: 'Premium based on kilometers driven, telematics-based',
          suitableFor: 'Occasional drivers',
          icon: <FaClock />
        }
      ],
      addOns: [
        {
          name: 'Zero Depreciation Cover',
          benefit: 'Full claim without depreciation deduction',
          premium: '15-20% extra'
        },
        {
          name: 'Engine Protector',
          benefit: 'Covers engine damage due to water flooding',
          premium: '₹500-1000 extra'
        },
        {
          name: 'Roadside Assistance',
          benefit: '24x7 help for flat tyre, fuel, towing',
          premium: '₹200-500 extra'
        },
        {
          name: 'NCB Protection',
          benefit: 'No Claim Bonus protected even after claim',
          premium: '₹300-800 extra'
        },
        {
          name: 'Consumables Cover',
          benefit: 'Covers nuts, bolts, oil, coolant etc.',
          premium: '₹400-1000 extra'
        },
        {
          name: 'Key Replacement',
          benefit: 'Coverage for lost/damaged keys',
          premium: '₹200-500 extra'
        }
      ],
      idvFactors: [
        'Age of vehicle - Depreciation reduces IDV',
        'Make & Model - Premium cars have higher IDV',
        'Registration year - Newer vehicles have higher IDV',
        'Variant - Higher variant = Higher IDV',
        'Accessories - Optional accessories increase IDV'
      ],
      pros: [
        'Mandatory legal compliance',
        'Protection against third-party claims',
        'Coverage against theft and natural calamities',
        'No Claim Bonus discount on renewal',
        'Add-on covers for comprehensive protection',
        'Transferable on vehicle sale'
      ],
      cons: [
        'Depreciation deducted in claims (without zero dep)',
        'IDV decreases each year',
        'No cover for mechanical breakdown',
        'Claim affects NCB',
        'Geographical restrictions'
      ],
      tips: [
        'Buy comprehensive policy for new vehicles',
        'Opt for zero depreciation add-on for first 3-5 years',
        'Maintain NCB for renewal discounts',
        'Compare IDV offered by different insurers',
        'Renew before expiry to avoid inspection',
        'Check garage network for cashless repairs'
      ]
    },
    home: {
      title: 'Home Insurance Products',
      tagline: 'Secure your home and belongings',
      description: 'Home insurance protects your house structure and contents against fire, theft, natural calamities, and other unforeseen events. Affordable premium for comprehensive coverage.',
      categories: [
        {
          name: 'Bundled Home Package',
          coverage: 'Structure + Contents',
          sumInsured: '₹20L - ₹1Cr+',
          premium: '₹2,000 - ₹10,000/year',
          features: 'Complete protection for building and belongings',
          suitableFor: 'Homeowners',
          icon: <FaHome />
        },
        {
          name: 'Structure Only Policy',
          coverage: 'Building only',
          sumInsured: 'Construction cost',
          premium: '₹0.3-0.6 per thousand',
          features: 'Coverage for walls, roof, floor, permanent fixtures',
          suitableFor: 'Owners with less contents',
          icon: <FaHome />
        },
        {
          name: 'Contents Only Policy',
          coverage: 'Household items',
          sumInsured: '₹5L - ₹50L',
          premium: '₹0.8-1.5 per thousand',
          features: 'Coverage for furniture, electronics, valuables',
          suitableFor: 'Tenants',
          icon: <FaWallet />
        },
        {
          name: 'Rental Income Protection',
          coverage: 'Loss of rent',
          sumInsured: 'Annual rent',
          premium: '₹1,000 - ₹5,000',
          features: 'Coverage if property becomes uninhabitable',
          suitableFor: 'Landlords',
          icon: <FaMoneyBillWave />
        },
        {
          name: 'Home Loan Protection',
          coverage: 'Outstanding loan',
          sumInsured: 'Loan amount',
          premium: '₹0.5-1 per thousand',
          features: 'Covers loan repayment in case of death',
          suitableFor: 'Home loan borrowers',
          icon: <FaUniversity />
        },
        {
          name: 'Vacant Home Insurance',
          coverage: 'Structure only',
          sumInsured: 'Property value',
          premium: 'Higher than occupied',
          features: 'Coverage for vacant/unoccupied properties',
          suitableFor: 'Vacation homes, properties for sale',
          icon: <FaHome />
        }
      ],
      perils: [
        'Fire & Lightning',
        'Earthquake',
        'Flood & Inundation',
        'Storm & Cyclone',
        'Theft & Burglary',
        'Riots & Strikes',
        'Aircraft Damage',
        'Malicious Damage',
        'Impact by Vehicles',
        'Bursting of Pipes'
      ],
      pros: [
        'Comprehensive protection at affordable cost',
        'Coverage against multiple natural calamities',
        'Personal liability cover included',
        'Alternative accommodation cover',
        'Coverage for valuables like jewelry',
        'Tax benefits in some cases'
      ],
      cons: [
        'Policy exclusions need careful reading',
        'Underinsurance penalty',
        'Depreciation on contents',
        'Geographical restrictions',
        'Claim documentation can be extensive'
      ],
      tips: [
        'Insure for full reconstruction cost, not market value',
        'Keep inventory of contents with bills/photos',
        'Opt for earthquake cover in seismic zones',
        'Review coverage annually',
        'Disclose high-value items separately',
        'Consider tenant insurance if renting'
      ]
    },
    travel: {
      title: 'Travel Insurance Products',
      tagline: 'Travel safe anywhere in the world',
      description: 'Travel insurance provides coverage during domestic and international trips against medical emergencies, trip cancellations, lost baggage, flight delays, and more.',
      categories: [
        {
          name: 'Domestic Travel Insurance',
          coverage: 'Within India',
          sumInsured: '₹2L - ₹10L',
          premium: '₹50 - ₹500',
          features: 'Medical expenses, baggage loss, trip delay',
          suitableFor: 'Domestic tourists, business travelers',
          icon: <FaPlane />
        },
        {
          name: 'International Travel Insurance',
          coverage: 'Worldwide',
          sumInsured: '₹50k - ₹1M',
          premium: '₹300 - ₹3,000',
          features: 'Medical coverage, evacuation, passport loss',
          suitableFor: 'International tourists',
          icon: <FaPlane />
        },
        {
          name: 'Student Travel Insurance',
          coverage: 'Study abroad',
          sumInsured: '₹100k - ₹500k',
          premium: '₹5,000 - ₹15,000',
          features: 'Long-term coverage, study interruption, sponsor protection',
          suitableFor: 'Students studying abroad',
          icon: <FaUserGraduate />
        },
        {
          name: 'Senior Citizen Travel',
          coverage: 'International',
          sumInsured: '₹50k - ₹200k',
          premium: '₹5,000 - ₹20,000',
          features: 'Enhanced medical coverage, pre-existing condition cover',
          suitableFor: 'Travelers aged 60+',
          icon: <FaUserTie />
        },
        {
          name: 'Business Travel Insurance',
          coverage: 'Business trips',
          sumInsured: '₹100k - ₹500k',
          premium: '₹1,000 - ₹5,000',
          features: 'Laptop cover, business equipment, liability',
          suitableFor: 'Corporate travelers',
          icon: <FaBriefcase />
        },
        {
          name: 'Family Travel Insurance',
          coverage: 'Family package',
          sumInsured: '₹200k - ₹1M',
          premium: '₹2,000 - ₹10,000',
          features: 'Coverage for spouse & children, group discount',
          suitableFor: 'Families traveling together',
          icon: <FaUserFriends />
        }
      ],
      coverage: [
        { item: 'Medical Expenses', limit: 'Up to sum insured' },
        { item: 'Emergency Evacuation', limit: 'Up to sum insured' },
        { item: 'Trip Cancellation', limit: '75-100% of trip cost' },
        { item: 'Trip Delay', limit: '₹5,000 - ₹20,000' },
        { item: 'Lost Baggage', limit: '₹500 - ₹2,000' },
        { item: 'Passport Loss', limit: '₹10,000 - ₹50,000' },
        { item: 'Personal Liability', limit: '₹100k - ₹500k' },
        { item: 'Adventure Sports', limit: 'Add-on required' }
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
        'Check medical coverage limits for destination',
        'Opt for comprehensive plan',
        'Keep policy document and emergency numbers handy',
        'Declare pre-existing conditions',
        'Check adventure sports coverage if needed'
      ]
    },
    critical: {
      title: 'Critical Illness Insurance',
      tagline: 'Financial protection against major illnesses',
      description: 'Critical illness insurance provides a lump sum payment upon diagnosis of specified life-threatening illnesses, helping you focus on recovery without financial stress.',
      categories: [
        {
          name: 'Standalone Critical Illness',
          coverage: 'Lump sum on diagnosis',
          sumInsured: '₹5L - ₹50L',
          premium: '₹2,000 - ₹20,000/year',
          features: 'Coverage for 10-30 critical illnesses',
          suitableFor: 'Those with family history',
          icon: <FaBriefcaseMedical />
        },
        {
          name: 'Critical Illness Rider',
          coverage: 'Add-on with life/health',
          sumInsured: '₹5L - ₹25L',
          premium: '₹1,000 - ₹10,000/year',
          features: 'Attached to base policy, lower premium',
          suitableFor: 'Cost-conscious buyers',
          icon: <FaBriefcaseMedical />
        },
        {
          name: 'Cancer Insurance',
          coverage: 'Specific cancer cover',
          sumInsured: '₹5L - ₹50L',
          premium: '₹2,000 - ₹15,000/year',
          features: 'Coverage for various cancer stages',
          suitableFor: 'Cancer-specific protection',
          icon: <FaHospital />
        },
        {
          name: 'Heart Care Insurance',
          coverage: 'Cardiac ailments',
          sumInsured: '₹3L - ₹20L',
          premium: '₹1,500 - ₹10,000/year',
          features: 'Coverage for heart attack, bypass, angioplasty',
          suitableFor: 'Those with heart disease history',
          icon: <FaHeartbeat />
        }
      ],
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
        { aspect: 'Premium', health: 'Higher for comprehensive', critical: 'Lower for specified covers' }
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
        'Survival period condition (usually 30 days)',
        'Higher waiting period (90 days)',
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
    accident: {
      title: 'Personal Accident Insurance',
      tagline: 'Coverage when you need it most',
      description: 'Personal accident insurance provides compensation in case of accidental death, permanent total disability, permanent partial disability, or temporary disability.',
      categories: [
        {
          name: 'Individual PA Plan',
          coverage: 'Accident cover',
          sumInsured: '₹5L - ₹50L',
          premium: '₹500 - ₹5,000/year',
          features: 'Coverage for death, disability, medical expenses',
          suitableFor: 'Working professionals',
          icon: <FaMale />
        },
        {
          name: 'Family PA Plan',
          coverage: 'Coverage for family',
          sumInsured: '₹10L - ₹1Cr',
          premium: '₹1,000 - ₹8,000/year',
          features: 'Coverage for self, spouse, children',
          suitableFor: 'Families',
          icon: <FaUserFriends />
        },
        {
          name: 'Student PA Plan',
          coverage: 'Students',
          sumInsured: '₹2L - ₹10L',
          premium: '₹200 - ₹1,000/year',
          features: 'Coverage for school/college accidents',
          suitableFor: 'Students',
          icon: <FaUserGraduate />
        },
        {
          name: 'Senior Citizen PA',
          coverage: 'Age 60+',
          sumInsured: '₹2L - ₹10L',
          premium: '₹800 - ₹3,000/year',
          features: 'Coverage for falls, fractures, accidents',
          suitableFor: 'Elderly',
          icon: <FaUserTie />
        },
        {
          name: 'Group PA Plan',
          coverage: 'Employee groups',
          sumInsured: '₹2L - ₹20L',
          premium: '₹200 - ₹1,000 per employee',
          features: 'Bulk discount, employer-sponsored',
          suitableFor: 'Companies, organizations',
          icon: <FaUsers />
        },
        {
          name: 'Women PA Plan',
          coverage: 'Women-specific',
          sumInsured: '₹5L - ₹25L',
          premium: '₹500 - ₹3,000/year',
          features: 'Coverage for specific risks, lower premiums',
          suitableFor: 'Women',
          icon: <FaFemale />
        }
      ],
      coverage: [
        { type: 'Accidental Death', payout: '100% of sum insured' },
        { type: 'Permanent Total Disability', payout: '100% of sum insured' },
        { type: 'Permanent Partial Disability', payout: 'Percentage of sum insured' },
        { type: 'Temporary Total Disability', payout: 'Weekly benefit (1-2% of SI)' },
        { type: 'Accidental Medical Expenses', payout: '10-20% of SI' },
        { type: 'Education Grant', payout: '₹50,000 - ₹2L per child' },
        { type: 'Broken Bones/Fractures', payout: 'Fixed amount' }
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
        'Partial disability assessment subjective',
        'Suicide not covered'
      ],
      tips: [
        'Coverage of 5-10 times annual income recommended',
        'Check disability definitions carefully',
        'Opt for family floater',
        'Consider as rider on life insurance',
        'Review coverage periodically',
        'Understand permanent vs temporary disability'
      ]
    },
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
                  <FaStar className="mr-1 text-[#1a729e]" /> Popular Plans
                </h3>
                <div className="space-y-3 mb-4">
                  {product.categories?.slice(0, 3).map((cat, idx) => (
                    <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-start">
                        <span className="text-xl mr-2 text-[#1a729e]">{cat.icon}</span>
                        <div>
                          <h4 className="font-semibold text-[#0080bf] text-sm mb-1">{cat.name}</h4>
                          <div className="grid grid-cols-2 gap-1 text-[10px]">
                            <span className="text-gray-500">Cover: {cat.coverage || cat.sumInsured}</span>
                            <span className="text-gray-500">Premium: {cat.premium}</span>
                          </div>
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

    const renderHealthContent = () => (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
            <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          </div>
          <span className="bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full flex items-center">
            <FaHeartbeat className="mr-2" /> 80D Tax Benefit
          </span>
        </div>
        <p className="text-lg text-gray-600">{product.description}</p>
        
        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4 flex items-center">
            <FaStar className="mr-2 text-[#1a729e]" /> Health Insurance Plans
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Plan Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Coverage</th>
                  {/* <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Premium</th> */}
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Features</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Suitable For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.categories.map((cat, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{cat.name}</td>
                    <td className="px-4 py-3 text-sm">{cat.coverage}</td>
                    {/* <td className="px-4 py-3 text-sm text-green-600 font-semibold">{cat.premium}</td> */}
                    <td className="px-4 py-3 text-sm text-gray-600">{cat.features}</td>
                    <td className="px-4 py-3 text-sm">{cat.suitableFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Top Health Insurers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.topInsurers.map((insurer, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-semibold text-[#074a6b]">{insurer.name}</p>
                  <p className="text-xs text-gray-500">Network: {insurer.network}</p>
                </div>
                {/* <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Claim: {insurer.claimRatio}
                </div> */}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((feature, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg flex justify-between">
                <span className="font-medium text-[#074a6b]">{feature.name}:</span>
                <span className="text-[#0080bf] font-semibold">{feature.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-2 flex items-center">
            <FaCoins className="mr-2" /> Premium Factors
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {product.premiumFactors.map((factor, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-800">
                <span className="mr-2">•</span>
                {factor}
              </li>
            ))}
          </ul>
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

    const renderMotorContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4 flex items-center">
            <FaCar className="mr-2 text-[#1a729e]" /> Motor Insurance Plans
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Plan Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Vehicle</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Coverage</th>
                  {/* <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Premium</th> */}
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.categories.map((cat, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{cat.name}</td>
                    <td className="px-4 py-3 text-sm">{cat.vehicleType}</td>
                    <td className="px-4 py-3 text-sm">{cat.coverage}</td>
                    {/* <td className="px-4 py-3 text-sm text-green-600 font-semibold">{cat.premium}</td> */}
                    <td className="px-4 py-3 text-sm text-gray-600">{cat.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                  {/* <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Extra Premium</th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.addOns.map((addon, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{addon.name}</td>
                    <td className="px-4 py-3 text-sm">{addon.benefit}</td>
                    {/* <td className="px-4 py-3 text-sm text-green-600 font-semibold">{addon.premium}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0080bf] mb-2 flex items-center">
            <FaCoins className="mr-2" /> IDV Factors
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {product.idvFactors.map((factor, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-800">
                <span className="mr-2">•</span>
                {factor}
              </li>
            ))}
          </ul>
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

    const renderHomeContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Home Insurance Plans</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Plan Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Coverage</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Sum Insured</th>
                  {/* <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Premium</th> */}
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Suitable For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.categories.map((cat, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{cat.name}</td>
                    <td className="px-4 py-3 text-sm">{cat.coverage}</td>
                    <td className="px-4 py-3 text-sm">{cat.sumInsured}</td>
                    {/* <td className="px-4 py-3 text-sm text-green-600 font-semibold">{cat.premium}</td> */}
                    <td className="px-4 py-3 text-sm">{cat.suitableFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Perils Covered</h3>
          <div className="flex flex-wrap gap-2">
            {product.perils.map((peril, index) => (
              <span key={index} className="bg-[rgb(208,239,255)] text-[#0080bf] text-sm px-3 py-1 rounded-full">
                {peril}
              </span>
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

    const renderTravelContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Travel Insurance Plans</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Plan Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Coverage</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Sum Insured</th>
                  {/* <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Premium</th> */}
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.categories.map((cat, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{cat.name}</td>
                    <td className="px-4 py-3 text-sm">{cat.coverage}</td>
                    <td className="px-4 py-3 text-sm">{cat.sumInsured}</td>
                    {/* <td className="px-4 py-3 text-sm text-green-600 font-semibold">{cat.premium}</td> */}
                    <td className="px-4 py-3 text-sm text-gray-600">{cat.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Coverage Details</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Coverage Item</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Typical Limit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.coverage.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{item.item}</td>
                    <td className="px-4 py-3 text-sm">{item.limit}</td>
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

    const renderCriticalContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Critical Illness Plans</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Plan Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Coverage</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Sum Insured</th>
                  {/* <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Premium</th> */}
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.categories.map((cat, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{cat.name}</td>
                    <td className="px-4 py-3 text-sm">{cat.coverage}</td>
                    <td className="px-4 py-3 text-sm">{cat.sumInsured}</td>
                    {/* <td className="px-4 py-3 text-sm text-green-600 font-semibold">{cat.premium}</td> */}
                    <td className="px-4 py-3 text-sm text-gray-600">{cat.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Illnesses Covered</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {product.illnesses.map((illness, index) => (
              <div key={index} className="bg-blue-50 p-2 rounded-lg text-center text-sm text-[#074a6b]">
                {illness}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Health vs Critical Illness</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left text-sm font-semibold text-[#074a6b] pb-2">Aspect</th>
                  <th className="text-left text-sm font-semibold text-[#074a6b] pb-2">Health Insurance</th>
                  <th className="text-left text-sm font-semibold text-[#074a6b] pb-2">Critical Illness</th>
                </tr>
              </thead>
              <tbody>
                {product.comparison.map((item, index) => (
                  <tr key={index}>
                    <td className="py-1 text-sm font-medium">{item.aspect}</td>
                    <td className="py-1 text-sm">{item.health}</td>
                    <td className="py-1 text-sm text-[#0080bf]">{item.critical}</td>
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

    const renderAccidentContent = () => (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[#074a6b] mb-2">{product.title}</h2>
          <p className="text-lg text-[#0080bf] font-medium">{product.tagline}</p>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Personal Accident Plans</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Plan Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Coverage</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Sum Insured</th>
                  {/* <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Premium</th> */}
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.categories.map((cat, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{cat.name}</td>
                    <td className="px-4 py-3 text-sm">{cat.coverage}</td>
                    <td className="px-4 py-3 text-sm">{cat.sumInsured}</td>
                    {/* <td className="px-4 py-3 text-sm text-green-600 font-semibold">{cat.premium}</td> */}
                    <td className="px-4 py-3 text-sm text-gray-600">{cat.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#074a6b] mb-4">Coverage Structure</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Coverage Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#074a6b]">Payout</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.coverage.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-[#074a6b]">{item.type}</td>
                    <td className="px-4 py-3 text-sm text-green-600">{item.payout}</td>
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
      case 'health':
        return renderHealthContent();
      case 'motor':
        return renderMotorContent();
      case 'home':
        return renderHomeContent();
      case 'travel':
        return renderTravelContent();
      case 'critical':
        return renderCriticalContent();
      case 'accident':
        return renderAccidentContent();
      default:
        return renderHealthContent();
    }
  };

  return (
    <>
      <Head>
        <title>General Insurance Products | Complete Guide to All Insurance Types</title>
        <meta name="description" content="Explore all types of general insurance products - Health Insurance, Motor Insurance, Home Insurance, Travel Insurance, Critical Illness, Personal Accident, Cyber Insurance and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#074a6b]">General Insurance Products</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-1 sm:mt-2">Complete guide to all types of general insurance products</p>
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

export default GeneralInsuranceProducts;