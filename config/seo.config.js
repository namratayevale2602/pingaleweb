// Base SEO configuration that applies to all pages
const baseSEO = {
  siteName: 'Pingle Insurance',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.pingleinsurance.com',
  defaultImage: '/insurance-og-image.jpg',
  twitterHandle: '@pingleinsurance',
  locale: 'en_US',
  facebookAppId: 'your-facebook-app-id', // Optional
}

// Page-specific SEO configurations
export const seoConfig = {
  // Homepage
  home: {
    title: 'Pingle Insurance - Secure Your Family\'s Future with Best Life Insurance',
    description: 'Pingle Insurance offers comprehensive life insurance solutions including term insurance, ULIPs, child plans, retirement plans, and health riders. Get affordable coverage and financial protection for your loved ones.',
    keywords: ['life insurance company', 'term insurance', 'ULIP plans', 'child insurance', 'retirement planning', 'health insurance riders', 'family financial protection'],
    image: '/home-insurance-og-image.jpg',
    type: 'website',
    path: '/',
    priority: 1.0,
    changeFrequency: 'daily',
  },
  
  // About Us page
  about: {
    title: 'About Pingle Insurance - Our Mission to Protect Families',
    description: 'Learn about Pingle Insurance - our mission to provide affordable life insurance solutions, our experienced team, and our commitment to securing your family\'s financial future.',
    keywords: ['about Pingle Insurance', 'insurance company mission', 'life insurance team', 'financial protection experts'],
    image: '/about-insurance-og-image.jpg',
    type: 'website',
    path: '/aboutus',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  
  // Insurance Calculators page
  calculator: {
    title: 'Life Insurance Calculators - Plan Your Financial Future',
    description: 'Use our free life insurance calculators to determine your coverage needs, calculate premiums, plan for retirement, and secure your family\'s financial future.',
    keywords: ['life insurance calculator', 'coverage calculator', 'premium calculator', 'retirement planner', 'financial planning tools'],
    image: '/calculator-insurance-og-image.jpg',
    type: 'website',  
    path: '/calculators',
    priority: 0.8,
    changeFrequency: 'monthly',
  },

  // Individual calculator pages
  'calculator-future-wealth': {
    title: 'Future Wealth Calculator - Project Your Insurance Investment Growth',
    description: 'Calculate how your insurance investments can grow over time. Plan your family\'s financial future with our wealth projection tool for ULIPs and endowment plans.',
    keywords: ['insurance wealth calculator', 'ULIP returns', 'endowment plan growth', 'investment projection', 'insurance savings calculator'],
    image: '/future-wealth-insurance-og-image.jpg',
    type: 'website',
    path: '/calculators/future-wealth',
    priority: 0.7,
    changeFrequency: 'monthly',
  },

  'calculator-sip': {
    title: 'SIP Calculator - Plan Your Insurance Premium Investments',
    description: 'Calculate monthly insurance premiums and investment returns for ULIP plans. Plan systematic investments in market-linked insurance products with our free calculator.',
    keywords: ['insurance SIP calculator', 'ULIP premium calculator', 'monthly insurance investment', 'systematic investment plan insurance', 'market-linked insurance'],
    image: '/sip-insurance-og-image.jpg',
    type: 'website',
    path: '/calculators/sip',
    priority: 0.7,
    changeFrequency: 'monthly',
  },

  'calculator-swpm': {
    title: 'SWP Calculator - Systematic Withdrawal for Retirement Income',
    description: 'Plan your retirement income from insurance savings with our SWP calculator. Calculate regular payouts from money-back policies and retirement plans.',
    keywords: ['insurance SWP calculator', 'retirement income planner', 'money-back policy payouts', 'pension calculator', 'regular income from insurance'],
    image: '/swp-insurance-og-image.jpg',
    type: 'website',
    path: '/calculators/swp',
    priority: 0.7,
    changeFrequency: 'monthly',
  },

  'calculator-goal': {
    title: 'Financial Goal Calculator - Plan Life Milestones',
    description: 'Calculate the insurance coverage needed for your life goals - children\'s education, marriage, home purchase, and retirement. Plan your financial milestones with precision.',
    keywords: ['financial goal planner', 'education goal calculator', 'marriage fund planner', 'life milestone planning', 'insurance goal calculator'],
    image: '/goal-insurance-og-image.jpg',
    type: 'website',
    path: '/calculators/goal',
    priority: 0.7,
    changeFrequency: 'monthly',
  },

  'calculator-home-loan-recovery': {
    title: 'Home Loan Protection Calculator - Secure Your Mortgage',
    description: 'Calculate the term insurance coverage needed to protect your home loan. Ensure your family never loses their home with our loan protection calculator.',
    keywords: ['home loan protection', 'mortgage insurance calculator', 'term insurance for loan', 'loan coverage calculator', 'home loan security'],
    image: '/home-loan-insurance-og-image.jpg',
    type: 'website',
    path: '/calculators/home-loan-recovery',
    priority: 0.7,
    changeFrequency: 'monthly',
  },

  'calculator-retirement-corpus': {
    title: 'Retirement Planning Calculator - Secure Your Golden Years',
    description: 'Calculate the retirement corpus needed for a comfortable life after 60. Plan your pension and annuity options with our retirement planning tool.',
    keywords: ['retirement calculator', 'pension planner', 'annuity calculator', 'retirement corpus', 'golden years planning', 'post-retirement income'],
    image: '/retirement-insurance-og-image.jpg',
    type: 'website',
    path: '/calculators/retirement-corpus',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  
  // Blog listing page
  blog: {
    title: 'Insurance Blog - Expert Insights on Life Insurance & Financial Planning',
    description: 'Explore expert articles on life insurance, financial planning, tax saving tips, and family protection strategies from Pingle Insurance experts.',
    keywords: ['insurance blog', 'life insurance articles', 'financial planning tips', 'tax saving insurance', 'family protection advice'],
    image: '/blog-insurance-og-image.jpg',
    type: 'website',
    path: '/blog',
    priority: 0.9,
    changeFrequency: 'daily',
  },
  
  // Contact page
  contact: {
    title: 'Contact Pingle Insurance - Get Expert Insurance Advice',
    description: 'Contact our insurance advisors for personalized life insurance solutions. Get free quotes, compare policies, and secure your family\'s future today.',
    keywords: ['contact insurance agent', 'life insurance inquiry', 'get insurance quote', 'insurance consultation', 'talk to insurance advisor'],
    image: '/contact-insurance-og-image.jpg',
    type: 'website',
    path: '/contactus',
    priority: 0.6,
    changeFrequency: 'yearly',
  },

  // Insurance Explainer page
  insurance: {
    title: 'Life Insurance - Complete Guide to Financial Protection',
    description: 'Comprehensive guide to understanding life insurance: Why you need it, types of policies, benefits, importance, and how to choose the right coverage for your family\'s financial security.',
    keywords: ['life insurance explained', 'why buy life insurance', 'types of life insurance policies', 'term vs whole life', 'insurance benefits guide', 'family financial protection', 'life insurance basics'],
    image: '/insurance-explainer-og-image.jpg',
    type: 'website',
    path: '/insurance',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  
  // Insurance Products page
  insuranceProduct: {
    title: 'Life Insurance Products - Compare All Policy Types',
    description: 'Explore and compare all types of life insurance products - Term Insurance, Whole Life, Endowment Plans, ULIPs, Money-Back Policies, Child Plans, Retirement Plans, and Health Riders. Find the perfect policy for your needs.',
    keywords: ['life insurance products', 'term insurance plans', 'whole life policies', 'endowment plans', 'ULIP investment plans', 'money-back policies', 'child insurance plans', 'retirement pension plans', 'health insurance riders', 'compare insurance policies'],
    image: '/insurance-products-og-image.jpg',
    type: 'website',
    path: '/insurance/products',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  
  // Mutual Fund Explainer page (for insurance company with mutual fund offerings)
  mutualFund: {
    title: 'Mutual Funds - Complete Guide',
    description: 'Learn how mutual funds complement your insurance portfolio: Why invest in mutual funds alongside insurance, types of funds, SIP strategies, STP, SWP, power of compounding, and tax benefits through ELSS.',
    keywords: ['mutual funds for insurance holders', 'ULIP vs mutual funds', 'SIP investing', 'STP strategy', 'SWP income planning', 'power of compounding', 'ELSS tax saving', 'debt funds for stability', 'investment diversification'],
    image: '/mutual-fund-insurance-og-image.jpg',
    type: 'website',
    path: '/mutual-funds/guide',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  
  // Mutual Fund Products page (for insurance company with mutual fund offerings)
  mutualFundProduct: {
    title: 'Mutual Fund Products - Investment Options for Insurance Holders',
    description: 'Explore mutual fund options available to insurance policyholders - Equity Funds for growth, Debt Funds for stability, Hybrid Funds for balance, ELSS for tax savings, and Liquid Funds for emergency needs.',
    keywords: ['mutual fund products', 'equity funds', 'debt funds', 'hybrid funds', 'index funds', 'ELSS tax saving funds', 'liquid funds', 'international funds', 'sectoral funds', 'investment options', 'fund comparison'],
    image: '/mutual-fund-products-og-image.jpg',
    type: 'website',
    path: '/mutual-funds/products',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  
  // Term Insurance specific page (if you have dedicated pages)
  termInsurance: {
    title: 'Term Insurance - Pure Protection at Lowest Cost',
    description: 'Buy term insurance online for comprehensive financial protection. Get high coverage at affordable premiums, tax benefits, and optional riders for critical illness and accident cover.',
    keywords: ['term insurance', 'pure protection plan', 'lowest premium life insurance', 'term plan online', 'term insurance with riders', 'income replacement insurance'],
    image: '/term-insurance-og-image.jpg',
    type: 'website',
    path: '/insurance/term',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  
  // ULIP specific page
  ulip: {
    title: 'ULIP Plans - Insurance with Market-Linked Returns',
    description: 'Explore Unit Linked Insurance Plans (ULIPs) that combine life cover with market investments. Get tax benefits, fund switching options, and long-term wealth creation.',
    keywords: ['ULIP plans', 'unit linked insurance', 'market-linked insurance', 'insurance with investment', 'ULIP tax benefits', 'fund switching insurance'],
    image: '/ulip-insurance-og-image.jpg',
    type: 'website',
    path: '/insurance/ulip',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  
  // Child Plan specific page
  childPlan: {
    title: 'Child Insurance Plans - Secure Your Child\'s Future',
    description: 'Protect your child\'s dreams with our child insurance plans. Get education fund, marriage corpus, and premium waiver benefits. Start planning today.',
    keywords: ['child insurance plan', 'education savings plan', 'child future protection', 'marriage fund', 'premium waiver benefit', 'children investment plan'],
    image: '/child-plan-og-image.jpg',
    type: 'website',
    path: '/insurance/child-plan',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  
  // Retirement Plan specific page
  retirementPlan: {
    title: 'Retirement Plans - Build Your Pension Corpus',
    description: 'Plan for a comfortable retirement with our pension plans. Get regular income post-retirement, lump sum options, and tax benefits under Section 80C.',
    keywords: ['retirement plan', 'pension policy', 'annuity plan', 'retirement corpus', 'post-retirement income', 'old age security'],
    image: '/retirement-plan-og-image.jpg',
    type: 'website',
    path: '/insurance/retirement',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  
  // Health Riders page
  healthRiders: {
    title: 'Health Riders - Enhance Your Life Insurance Cover',
    description: 'Add health riders to your life insurance policy for comprehensive protection. Get critical illness cover, accident benefit, waiver of premium, and surgical care.',
    keywords: ['health riders', 'critical illness cover', 'accident benefit', 'waiver of premium', 'insurance add-ons', 'health protection'],
    image: '/health-riders-og-image.jpg',
    type: 'website',
    path: '/insurance/health-riders',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  
  // Privacy Policy
  privacy: {
    title: 'Privacy Policy - Pingle Insurance',
    description: 'Read our privacy policy to understand how we collect, use, and protect your personal and financial information as an insurance provider.',
    keywords: ['insurance privacy policy', 'data protection', 'information security', 'privacy terms insurance'],
    image: '/privacy-insurance-og-image.jpg',
    type: 'website',
    path: '/privacy',
    priority: 0.3,
    changeFrequency: 'yearly',
    robots: {
      index: true,
      follow: true,
    },
  },
  
  // Terms of Service
  terms: {
    title: 'Terms of Service - Pingle Insurance',
    description: 'Review our terms of service for purchasing insurance policies, claim procedures, and using our website services.',
    keywords: ['insurance terms', 'policy conditions', 'terms and conditions insurance', 'legal insurance'],
    image: '/terms-insurance-og-image.jpg',
    type: 'website',
    path: '/terms',
    priority: 0.3,
    changeFrequency: 'yearly',
  },
  
  // Claim Process page
  claimProcess: {
    title: 'Insurance Claim Process - Easy & Hassle-Free',
    description: 'Learn about our simple insurance claim process. File a claim, track status, and get support for a smooth, hassle-free experience.',
    keywords: ['insurance claim', 'claim process', 'file insurance claim', 'claim settlement', 'claim support'],
    image: '/claim-process-og-image.jpg',
    type: 'website',
    path: '/claims',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  
  // 404 page
  notFound: {
    title: '404 - Page Not Found | Pingle Insurance',
    description: 'The insurance information page you are looking for does not exist or has been moved. Please explore our other insurance resources.',
    keywords: ['404 error', 'page not found', 'insurance page not available'],
    image: '/404-insurance-og-image.jpg',
    type: 'website',
    path: '/404',
    robots: {
      index: false,
      follow: true,
    },
  },
}

// Blog post SEO generator (for insurance blog posts)
export const generateBlogPostSEO = (post) => {
  return {
    title: post.title,
    description: post.excerpt || post.description,
    keywords: post.tags || ['life insurance', 'financial planning', 'insurance tips'],
    image: post.image || '/blog-insurance-default-og-image.jpg',
    type: 'article',
    path: `/blog/${post.slug}`,
    publishedTime: post.publishedTime || post.date,
    modifiedTime: post.modifiedTime || post.date,
    authors: [post.author?.name || 'Pingle Insurance Team'],
    tags: post.tags || [],
    priority: 0.7,
    changeFrequency: 'weekly',
  }
}

// Insurance product page SEO generator (for dynamic insurance products)
export const generateInsuranceProductSEO = (product) => {
  return {
    title: product.name,
    description: product.shortDescription || product.description,
    keywords: product.tags || ['insurance product', 'life insurance', 'policy'],
    image: product.image || '/insurance-product-default-og-image.jpg',
    type: 'product',
    path: `/insurance/products/${product.slug}`,
    price: product.premium,
    currency: product.currency || 'INR',
    availability: product.available ? 'InStock' : 'OutOfStock',
    priority: 0.6,
    changeFrequency: 'weekly',
  }
}

export default baseSEO