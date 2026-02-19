// data/insuranceData.js
// Remove all icon imports - we'll handle icons in the component

// Separate data by category for better organization
const autoInsurance = {
  'car-insurance': {
    id: 'car-insurance',
    slug: 'car-insurance',
    title: 'Car Insurance',
    category: 'Auto Insurance',
    iconName: 'Car',
    color: '#074a6b',
    lightColor: '#e6f0f5',
    gradient: 'from-[#074a6b] to-[#1a729e]',
    tagline: 'Protect your ride, protect your peace of mind',
    description: 'Comprehensive coverage for your car against accidents, theft, natural disasters, and third-party liabilities.',
    coverage: [
      'Own Damage Cover: Protection against accidents, fire, theft, natural calamities',
      'Third-Party Liability: Legal liability for injury/death of third party or damage to property',
      'Personal Accident Cover: Coverage for driver owner up to ₹15 lakhs',
      'Zero Depreciation Cover: Full claim without depreciation deduction',
      'Engine Protect Cover: Protection for engine damage due to water ingression',
      'Roadside Assistance: 24/7 emergency towing and roadside help'
    ],
    exclusions: [
      'Normal wear and tear',
      'Mechanical/electrical breakdown',
      'Driving without valid license',
      'Under influence of alcohol/drugs'
    ],
    addons: [
      { name: 'Zero Depreciation', price: '₹2,000-5,000/year' },
      { name: 'Engine Protect', price: '₹1,500-3,000/year' },
      { name: 'Roadside Assistance', price: '₹500-1,000/year' }
    ],
    faqs: [
      { q: 'What is IDV in car insurance?', a: 'Insured Declared Value is the maximum sum assured you get if your car is stolen or damaged beyond repair.' },
      { q: 'Is third-party insurance mandatory?', a: 'Yes, third-party car insurance is mandatory by law in India.' }
    ],
    documents: ['RC Copy', 'Driving License', 'Previous Insurance Policy', 'Pollution Certificate'],
    meta: {
      description: 'Get comprehensive car insurance coverage at the best rates',
      keywords: 'car insurance, auto insurance, vehicle insurance'
    }
  },

  'motorcycle-insurance': {
    id: 'motorcycle-insurance',
    slug: 'motorcycle-insurance',
    title: 'Motorcycle Insurance',
    category: 'Auto Insurance',
    iconName: 'Bike',
    color: '#2ba5ea',
    lightColor: '#e8f4fd',
    gradient: 'from-[#2ba5ea] to-[#0080bf]',
    tagline: 'Two wheels, complete protection',
    description: 'Specialized coverage for motorcycles and scooters against accidents, theft, and third-party liabilities.',
    coverage: [
      'Own Damage Cover: Protection against accidents, fire, theft',
      'Third-Party Liability: Coverage for injury/damage to third party',
      'Personal Accident Cover: Coverage for rider up to ₹15 lakhs',
      'Pillion Rider Cover: Coverage for pillion passenger',
      'Accessories Cover: Protection for custom parts and accessories',
      'Roadside Assistance: 24/7 breakdown support'
    ],
    exclusions: [
      'Racing or speed contests',
      'Normal wear and tear',
      'Driving without helmet',
      'Commercial use'
    ],
    addons: [
      { name: 'Pillion Cover', price: '₹250-500/year' },
      { name: 'Accessories Cover', price: '₹500-1,000/year' },
      { name: 'Roadside Assist', price: '₹300-600/year' }
    ],
    faqs: [
      { q: 'Is bike insurance mandatory?', a: 'Yes, at least third-party insurance is mandatory for all two-wheelers.' }
    ],
    documents: ['RC Copy', 'Driving License', 'Previous Policy'],
    meta: {
      description: 'Protect your two-wheeler with comprehensive motorcycle insurance',
      keywords: 'bike insurance, motorcycle insurance, two-wheeler insurance'
    }
  },
  'rv-insurance': {
    id: 'rv-insurance',
    slug: 'rv-insurance',
    title: 'RV Insurance',
    category: 'Auto Insurance',
    iconName: 'Bike',
    color: '#2ba5ea',
    lightColor: '#e8f4fd',
    gradient: 'from-[#2ba5ea] to-[#0080bf]',
    tagline: 'Two wheels, complete protection',
    description: 'Specialized coverage for motorcycles and scooters against accidents, theft, and third-party liabilities.',
    coverage: [
      'Own Damage Cover: Protection against accidents, fire, theft',
      'Third-Party Liability: Coverage for injury/damage to third party',
      'Personal Accident Cover: Coverage for rider up to ₹15 lakhs',
      'Pillion Rider Cover: Coverage for pillion passenger',
      'Accessories Cover: Protection for custom parts and accessories',
      'Roadside Assistance: 24/7 breakdown support'
    ],
    exclusions: [
      'Racing or speed contests',
      'Normal wear and tear',
      'Driving without helmet',
      'Commercial use'
    ],
    addons: [
      { name: 'Pillion Cover', price: '₹250-500/year' },
      { name: 'Accessories Cover', price: '₹500-1,000/year' },
      { name: 'Roadside Assist', price: '₹300-600/year' }
    ],
    faqs: [
      { q: 'Is bike insurance mandatory?', a: 'Yes, at least third-party insurance is mandatory for all two-wheelers.' }
    ],
    documents: ['RC Copy', 'Driving License', 'Previous Policy'],
    meta: {
      description: 'Protect your two-wheeler with comprehensive motorcycle insurance',
      keywords: 'bike insurance, motorcycle insurance, two-wheeler insurance'
    }
  }
};

const homeInsurance = {
  'homeowners-insurance': {
    id: 'homeowners-insurance',
    slug: 'homeowners-insurance',
    title: 'Homeowners Insurance',
    category: 'Home Insurance',
    iconName: 'Building',
    color: '#0080bf',
    lightColor: '#e6f3fa',
    gradient: 'from-[#0080bf] to-[#2ba5ea]',
    tagline: 'Your home deserves the best protection',
    description: 'Complete protection for your home structure and valuable belongings against unforeseen events.',
    coverage: [
      'Building Structure: Coverage for walls, roof, floors, fixtures',
      'Contents Cover: Protection for furniture, electronics, valuables',
      'Theft/Burglary: Coverage for stolen items',
      'Natural Calamities: Protection against fire, flood, earthquake',
      'Third-Party Liability: Coverage for damage to neighbor property',
      'Alternative Accommodation: Living expenses if home becomes uninhabitable'
    ],
    exclusions: [
      'Normal wear and tear',
      'Pre-existing damage',
      'War or nuclear risks',
      'Intentional damage'
    ],
    addons: [
      { name: 'Jewellery Cover', price: '₹1,000-3,000/year' },
      { name: 'Electronic Equipment', price: '₹500-2,000/year' },
      { name: 'Earthquake Cover', price: '₹2,000-5,000/year' }
    ],
    faqs: [
      { q: 'Is home insurance mandatory for home loans?', a: 'Most banks require home insurance for loan approval.' }
    ],
    documents: ['Property Papers', 'Valuation Report', 'Previous Policy'],
    meta: {
      description: 'Secure your home with comprehensive homeowners insurance',
      keywords: 'home insurance, house insurance, property insurance'
    }
  },
  'renters-insurance': {
    id: 'renters-insurance',
    slug: 'renters-insurance',
    title: 'Renters Insurance',
    category: 'Home Insurance',
    iconName: 'Building',
    color: '#0080bf',
    lightColor: '#e6f3fa',
    gradient: 'from-[#0080bf] to-[#2ba5ea]',
    tagline: 'Your home deserves the best protection',
    description: 'Complete protection for your home structure and valuable belongings against unforeseen events.',
    coverage: [
      'Building Structure: Coverage for walls, roof, floors, fixtures',
      'Contents Cover: Protection for furniture, electronics, valuables',
      'Theft/Burglary: Coverage for stolen items',
      'Natural Calamities: Protection against fire, flood, earthquake',
      'Third-Party Liability: Coverage for damage to neighbor property',
      'Alternative Accommodation: Living expenses if home becomes uninhabitable'
    ],
    exclusions: [
      'Normal wear and tear',
      'Pre-existing damage',
      'War or nuclear risks',
      'Intentional damage'
    ],
    addons: [
      { name: 'Jewellery Cover', price: '₹1,000-3,000/year' },
      { name: 'Electronic Equipment', price: '₹500-2,000/year' },
      { name: 'Earthquake Cover', price: '₹2,000-5,000/year' }
    ],
    faqs: [
      { q: 'Is home insurance mandatory for home loans?', a: 'Most banks require home insurance for loan approval.' }
    ],
    documents: ['Property Papers', 'Valuation Report', 'Previous Policy'],
    meta: {
      description: 'Secure your home with comprehensive homeowners insurance',
      keywords: 'home insurance, house insurance, property insurance'
    }
  },
  'condo-insurance': {
    id: 'condo-insurance',
    slug: 'condo-insurance',
    title: 'Condo Insurance',
    category: 'Home Insurance',
    iconName: 'Building',
    color: '#0080bf',
    lightColor: '#e6f3fa',
    gradient: 'from-[#0080bf] to-[#2ba5ea]',
    tagline: 'Your home deserves the best protection',
    description: 'Complete protection for your home structure and valuable belongings against unforeseen events.',
    coverage: [
      'Building Structure: Coverage for walls, roof, floors, fixtures',
      'Contents Cover: Protection for furniture, electronics, valuables',
      'Theft/Burglary: Coverage for stolen items',
      'Natural Calamities: Protection against fire, flood, earthquake',
      'Third-Party Liability: Coverage for damage to neighbor property',
      'Alternative Accommodation: Living expenses if home becomes uninhabitable'
    ],
    exclusions: [
      'Normal wear and tear',
      'Pre-existing damage',
      'War or nuclear risks',
      'Intentional damage'
    ],
    addons: [
      { name: 'Jewellery Cover', price: '₹1,000-3,000/year' },
      { name: 'Electronic Equipment', price: '₹500-2,000/year' },
      { name: 'Earthquake Cover', price: '₹2,000-5,000/year' }
    ],
    faqs: [
      { q: 'Is home insurance mandatory for home loans?', a: 'Most banks require home insurance for loan approval.' }
    ],
    documents: ['Property Papers', 'Valuation Report', 'Previous Policy'],
    meta: {
      description: 'Secure your home with comprehensive homeowners insurance',
      keywords: 'home insurance, house insurance, property insurance'
    }
  }
};

const lifeHealthInsurance = {
  'life-insurance': {
    id: 'life-insurance',
    slug: 'life-insurance',
    title: 'Life Insurance',
    category: 'Life & Health',
    iconName: 'Heart',
    color: '#1a729e',
    lightColor: '#e3eef7',
    gradient: 'from-[#1a729e] to-[#074a6b]',
    tagline: 'Ensure your loved ones are always taken care of',
    description: 'Financial protection for your family when you\'re no longer there. Provides lump sum payment to nominees.',
    coverage: [
      'Death Benefit: Lump sum payment to family',
      'Maturity Benefit: For endowment/ULIP plans',
      'Critical Illness Rider: Additional payout on diagnosis',
      'Accident Benefit: Extra coverage for accidental death',
      'Waiver of Premium: Premium waived on disability',
      'Terminal Illness Benefit: Early payout on terminal illness'
    ],
    exclusions: [
      'Suicide in first year',
      'Death due to hazardous activities',
      'Pre-existing conditions (in some plans)',
      'War/terrorism (in some policies)'
    ],
    addons: [
      { name: 'Critical Illness Rider', price: '+15-25% premium' },
      { name: 'Accident Benefit', price: '+10-15% premium' },
      { name: 'Waiver of Premium', price: '+5-10% premium' }
    ],
    faqs: [
      { q: 'How much life insurance do I need?', a: 'Typically 10-15 times your annual income.' }
    ],
    documents: ['Age Proof', 'Income Proof', 'Medical Reports', 'Nominee Details'],
    meta: {
      description: 'Secure your family\'s future with comprehensive life insurance',
      keywords: 'life insurance, term insurance, financial protection'
    }
  },

  'health-insurance': {
    id: 'health-insurance',
    slug: 'health-insurance',
    title: 'Health Insurance',
    category: 'Life & Health',
    iconName: 'HeartPulse',
    color: '#0080bf',
    lightColor: '#e6f3fa',
    gradient: 'from-[#0080bf] to-[#2ba5ea]',
    tagline: 'Quality healthcare without financial worry',
    description: 'Coverage for medical expenses including hospitalization, surgeries, and treatments.',
    coverage: [
      'Hospitalization Expenses: Room rent, ICU, doctor fees',
      'Pre & Post Hospitalization: 30/60 days before/after',
      'Day Care Procedures: Treatments not requiring 24hr stay',
      'Ambulance Charges: Up to ₹2,000 per hospitalization',
      'No Claim Bonus: Increased cover for every claim-free year',
      'Cashless Treatment: At network hospitals',
      'Pre-existing Diseases: Covered after waiting period',
      'Health Check-ups: Free annual check-up'
    ],
    exclusions: [
      'Pre-existing diseases (initial 2-4 years)',
      'Cosmetic surgery',
      'Dental treatment',
      'Alternative treatments (unless specified)'
    ],
    addons: [
      { name: 'Maternity Cover', price: '+20-30% premium' },
      { name: 'OPD Cover', price: '+15-25% premium' },
      { name: 'Personal Accident', price: '+10-15% premium' }
    ],
    faqs: [
      { q: 'What is the waiting period?', a: 'Usually 2-4 years for pre-existing conditions, 30 days for new illnesses.' }
    ],
    documents: ['ID Proof', 'Medical History', 'Previous Policy', 'Family Details'],
    meta: {
      description: 'Get comprehensive health insurance coverage for you and your family',
      keywords: 'health insurance, medical insurance, hospitalization cover'
    }
  },
  'disability-insurance': {
    id: 'disability-insurance',
    slug: 'disability-insurance',
    title: 'Disability Insurance',
    category: 'Life & Health',
    iconName: 'HeartPulse',
    color: '#0080bf',
    lightColor: '#e6f3fa',
    gradient: 'from-[#0080bf] to-[#2ba5ea]',
    tagline: 'Quality healthcare without financial worry',
    description: 'Coverage for medical expenses including hospitalization, surgeries, and treatments.',
    coverage: [
      'Hospitalization Expenses: Room rent, ICU, doctor fees',
      'Pre & Post Hospitalization: 30/60 days before/after',
      'Day Care Procedures: Treatments not requiring 24hr stay',
      'Ambulance Charges: Up to ₹2,000 per hospitalization',
      'No Claim Bonus: Increased cover for every claim-free year',
      'Cashless Treatment: At network hospitals',
      'Pre-existing Diseases: Covered after waiting period',
      'Health Check-ups: Free annual check-up'
    ],
    exclusions: [
      'Pre-existing diseases (initial 2-4 years)',
      'Cosmetic surgery',
      'Dental treatment',
      'Alternative treatments (unless specified)'
    ],
    addons: [
      { name: 'Maternity Cover', price: '+20-30% premium' },
      { name: 'OPD Cover', price: '+15-25% premium' },
      { name: 'Personal Accident', price: '+10-15% premium' }
    ],
    faqs: [
      { q: 'What is the waiting period?', a: 'Usually 2-4 years for pre-existing conditions, 30 days for new illnesses.' }
    ],
    documents: ['ID Proof', 'Medical History', 'Previous Policy', 'Family Details'],
    meta: {
      description: 'Get comprehensive health insurance coverage for you and your family',
      keywords: 'health insurance, medical insurance, hospitalization cover'
    }
  }
};

// Business Insurance Data
const businessInsurance = {
  // Small Business
  'general-liability': {
    id: 'general-liability',
    slug: 'general-liability',
    title: 'General Liability Insurance',
    category: 'Small Business',
    iconName: 'Shield',
    color: '#074a6b',
    lightColor: '#e6f0f5',
    gradient: 'from-[#074a6b] to-[#1a729e]',
    tagline: 'Protect your business from common claims',
    description: 'Comprehensive coverage protecting your business from bodily injury, property damage, and personal injury claims.',
    coverage: [
      'Bodily Injury: Medical expenses if someone is injured at your business',
      'Property Damage: Damage to someone else\'s property caused by your business',
      'Personal Injury: Protection against libel, slander, and defamation claims',
      'Advertising Injury: Claims related to your advertising activities',
      'Medical Payments: Immediate medical expenses regardless of fault',
      'Legal Defense: Coverage for court costs and attorney fees'
    ],
    exclusions: [
      'Intentional acts',
      'Professional errors (covered by Professional Liability)',
      'Employee injuries (covered by Workers Comp)',
      'Auto accidents (covered by Commercial Auto)'
    ],
    addons: [
      { name: 'Employment Practices Liability', price: '+15-25% premium' },
      { name: 'Cyber Liability Extension', price: '+10-20% premium' },
      { name: 'Hired Auto Coverage', price: '+5-15% premium' }
    ],
    faqs: [
      { q: 'Who needs General Liability insurance?', a: 'Every business needs it - from home-based to large corporations. It protects against common risks.' },
      { q: 'How much coverage do I need?', a: 'Most businesses start with ₹1Cr per occurrence and ₹2Cr aggregate.' }
    ],
    documents: ['Business Registration Proof', 'PAN Card', 'Address Proof', 'Previous Policy (if any)'],
    meta: {
      description: 'Protect your business with comprehensive general liability insurance',
      keywords: 'general liability, business insurance, commercial liability'
    }
  },

  'professional-liability': {
    id: 'professional-liability',
    slug: 'professional-liability',
    title: 'Professional Liability Insurance',
    category: 'Small Business',
    iconName: 'Briefcase',
    color: '#2ba5ea',
    lightColor: '#e8f4fd',
    gradient: 'from-[#2ba5ea] to-[#0080bf]',
    tagline: 'Errors and omissions coverage for professionals',
    description: 'Also known as Errors & Omissions (E&O) insurance, this protects against claims of negligence or inadequate work.',
    coverage: [
      'Professional Negligence: Claims of mistakes in your professional services',
      'Errors & Omissions: Protection against missed deadlines or incomplete work',
      'Breach of Contract: Defense against contract violation claims',
      'Copyright Infringement: Unintentional use of others\' intellectual property',
      'Legal Defense Costs: Attorney fees and court expenses',
      'Settlement Costs: Coverage for settlements within policy limits'
    ],
    exclusions: [
      'Criminal acts',
      'Intentional wrongdoing',
      'Bodily injury (covered by General Liability)',
      'Property damage (covered by General Liability)'
    ],
    addons: [
      { name: 'Cyber Liability', price: '+20-30% premium' },
      { name: 'Media Liability', price: '+15-25% premium' },
      { name: 'Prior Acts Coverage', price: '+10-20% premium' }
    ],
    faqs: [
      { q: 'What professionals need this insurance?', a: 'Doctors, lawyers, architects, consultants, IT professionals, and any service-based business.' },
      { q: 'What\'s the difference from General Liability?', a: 'General Liability covers physical injuries, Professional Liability covers professional mistakes.' }
    ],
    documents: ['Professional License/Certificate', 'Client Contracts', 'Business Registration', 'Previous Claims History'],
    meta: {
      description: 'Protect your professional practice with errors and omissions insurance',
      keywords: 'professional liability, errors and omissions, E&O insurance'
    }
  },

  'workers-compensation': {
    id: 'workers-compensation',
    slug: 'workers-compensation',
    title: 'Workers Compensation Insurance',
    category: 'Small Business',
    iconName: 'Users',
    color: '#1a729e',
    lightColor: '#e3eef7',
    gradient: 'from-[#1a729e] to-[#074a6b]',
    tagline: 'Protect your employees and your business',
    description: 'Mandatory coverage that provides medical benefits and wage replacement to employees injured on the job.',
    coverage: [
      'Medical Expenses: Full coverage for work-related injuries',
      'Lost Wages: Partial wage replacement during recovery',
      'Disability Benefits: Permanent or temporary disability coverage',
      'Rehabilitation Costs: Physical therapy and vocational training',
      'Death Benefits: Financial support to employee\'s family',
      'Legal Protection: Employer\'s liability coverage'
    ],
    exclusions: [
      'Intentional self-injury',
      'Injuries while intoxicated',
      'Horseplay or fighting',
      'Independent contractors'
    ],
    addons: [
      { name: 'Employer\'s Liability', price: 'Included in base' },
      { name: 'Stop Gap Liability', price: '+5-10% premium' }
    ],
    faqs: [
      { q: 'Is workers compensation mandatory?', a: 'Yes, in most jurisdictions if you have employees, you must carry workers compensation.' },
      { q: 'Who is covered?', a: 'Full-time, part-time, and seasonal employees. Independent contractors are usually excluded.' }
    ],
    documents: ['Employee List', 'Payroll Records', 'Business PAN', 'Nature of Business Details'],
    meta: {
      description: 'Meet legal requirements and protect your employees with workers compensation',
      keywords: 'workers compensation, work injury insurance, employee protection'
    }
  },

  // Commercial
  'commercial-auto': {
    id: 'commercial-auto',
    slug: 'commercial-auto',
    title: 'Commercial Auto Insurance',
    category: 'Commercial',
    iconName: 'Car',
    color: '#0080bf',
    lightColor: '#e6f3fa',
    gradient: 'from-[#0080bf] to-[#2ba5ea]',
    tagline: 'Protect your business vehicles',
    description: 'Coverage for vehicles used for business purposes, from delivery vans to company cars.',
    coverage: [
      'Liability Coverage: Bodily injury and property damage to others',
      'Physical Damage: Collision and comprehensive coverage',
      'Medical Payments: Medical expenses for drivers and passengers',
      'Uninsured Motorist: Protection against uninsured drivers',
      'Cargo Coverage: Goods being transported',
      'Hired Auto: Vehicles you rent or lease'
    ],
    exclusions: [
      'Personal use (personal auto policy required)',
      'Wear and tear',
      'Intentional damage',
      'Racing or speed contests'
    ],
    addons: [
      { name: 'Cargo Insurance', price: '₹5,000-15,000/year' },
      { name: 'Equipment Coverage', price: '₹3,000-8,000/year' },
      { name: 'Roadside Assistance', price: '₹1,000-2,000/year' }
    ],
    faqs: [
      { q: 'Do I need commercial auto if I use my personal car for business?', a: 'Yes, personal auto policies typically exclude business use.' },
      { q: 'What vehicles need commercial coverage?', a: 'Any vehicle used for business - delivery vans, company cars, trucks, or employee vehicles used for work.' }
    ],
    documents: ['Vehicle RC', 'Driver\'s Licenses', 'Business Proof', 'Vehicle Photos'],
    meta: {
      description: 'Comprehensive coverage for your business vehicles',
      keywords: 'commercial auto, business vehicle insurance, fleet insurance'
    }
  },

  'commercial-property': {
    id: 'commercial-property',
    slug: 'commercial-property',
    title: 'Commercial Property Insurance',
    category: 'Commercial',
    iconName: 'Building',
    color: '#074a6b',
    lightColor: '#e6f0f5',
    gradient: 'from-[#074a6b] to-[#1a729e]',
    tagline: 'Protect your business assets and property',
    description: 'Coverage for your business building, equipment, inventory, and other physical assets.',
    coverage: [
      'Building Coverage: Office, warehouse, or retail space',
      'Business Personal Property: Furniture, equipment, inventory',
      'Business Interruption: Lost income during repairs',
      'Equipment Breakdown: Machinery and computer systems',
      'Valuable Papers: Important documents and records',
      'Outdoor Property: Signs, fences, landscaping'
    ],
    exclusions: [
      'Flood and earthquake (need separate coverage)',
      'Wear and tear',
      'Employee theft (covered by crime insurance)',
      'Acts of war'
    ],
    addons: [
      { name: 'Equipment Breakdown', price: '+5-10% premium' },
      { name: 'Inflation Guard', price: '+2-5% premium' },
      { name: 'Ordinance or Law', price: '+5-8% premium' }
    ],
    faqs: [
      { q: 'How much coverage do I need?', a: 'Coverage should equal the replacement cost of your building and contents.' },
      { q: 'Are my business contents covered?', a: 'Yes, including furniture, equipment, inventory, and supplies.' }
    ],
    documents: ['Property Deed/Lease', 'Asset List with Values', 'Property Photos', 'Valuation Report'],
    meta: {
      description: 'Comprehensive protection for your business property and assets',
      keywords: 'commercial property, business property insurance, asset protection'
    }
  },

  'cyber-liability': {
    id: 'cyber-liability',
    slug: 'cyber-liability',
    title: 'Cyber Liability Insurance',
    category: 'Commercial',
    iconName: 'Shield',
    color: '#2ba5ea',
    lightColor: '#e8f4fd',
    gradient: 'from-[#2ba5ea] to-[#0080bf]',
    tagline: 'Protect your business from digital threats',
    description: 'Coverage against data breaches, cyber attacks, and other digital risks.',
    coverage: [
      'Data Breach Response: Notification costs and credit monitoring',
      'Cyber Extortion: Ransomware and cyber threats',
      'Business Interruption: Lost income from system downtime',
      'Data Recovery: Restoring lost or corrupted data',
      'Legal Defense: Regulatory fines and defense costs',
      'Privacy Liability: Failure to protect sensitive information'
    ],
    exclusions: [
      'Prior known breaches',
      'Intentional acts',
      'Physical property damage',
      'War and terrorism'
    ],
    addons: [
      { name: 'Social Engineering Fraud', price: '+10-15% premium' },
      { name: 'Regulatory Defense', price: '+5-10% premium' },
      { name: 'Cyber Crime', price: '+15-20% premium' }
    ],
    faqs: [
      { q: 'Who needs cyber liability insurance?', a: 'Any business that stores customer data, accepts online payments, or uses digital systems.' },
      { q: 'What does it cover?', a: 'Data breach response, legal costs, customer notification, and business interruption from cyber attacks.' }
    ],
    documents: ['IT Security Policies', 'Data Inventory', 'Previous Incidents', 'Business Continuity Plan'],
    meta: {
      description: 'Protect your business from cyber threats and data breaches',
      keywords: 'cyber liability, data breach insurance, cyber security insurance'
    }
  }
};

// Combine all insurance data
export const insuranceData = {
  ...autoInsurance,
  ...homeInsurance,
  ...lifeHealthInsurance,
  ...businessInsurance
};

export const getAllInsuranceSlugs = () => {
  return Object.keys(insuranceData).map(slug => ({
    params: { slug }
  }));
};

export const getInsuranceBySlug = (slug) => {
  return insuranceData[slug] || null;
};

export const getAllInsuranceItems = () => {
  return Object.values(insuranceData); // Returns array of insurance objects, not slugs
};

export const getInsuranceByCategory = () => {
  const grouped = {};
  Object.values(insuranceData).forEach(item => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
  });
  return grouped;
};