import { notFound } from "next/navigation";
import dynamic from 'next/dynamic';
import { seoConfig } from '@/config/seo.config';
import baseSEO from '@/config/seo.config';
import PageSEO from "@/components/seo/PageSEO";
import JsonLd from "@/components/seo/JsonLd";

// Dynamic imports for all calculator components
const FutureWealthCalculator = dynamic(() => import("../component/FutureWealthCalculator"));
const SIPCalculator = dynamic(() => import("../component/SIPCalculator"));
const SIPtoSWPCalculator = dynamic(() => import("../component/SipSwpCalculator"));
const GoalCalculator = dynamic(() => import("../component/GoalCalculator"));
const HomeLoanRecoveryCalculator = dynamic(() => import("../component/HomeLoanRecoveryCalculator"));
const RetirementCorpusCalculator = dynamic(() => import("../component/RetirementCorpusCalculator"));

// Map of slugs to components - only component mapping, no SEO data
const calculatorComponents = {
  'future-wealth': FutureWealthCalculator,
  'sip': SIPCalculator,
  'swp': SIPtoSWPCalculator,
  'goal': GoalCalculator,
  'home-loan-recovery': HomeLoanRecoveryCalculator,
  'retirement-corpus': RetirementCorpusCalculator,
};

// Map slugs to config keys for SEO
const slugToConfigKey = {
  'future-wealth': 'calculator-future-wealth',
  'sip': 'calculator-sip',
  'swp': 'calculator-swpm',
  'goal': 'calculator-goal',
  'home-loan-recovery': 'calculator-home-loan-recovery',
  'retirement-corpus': 'calculator-retirement-corpus',
};

export default async function CalculatorPage({ params }) {
  const { slug } = await params;
  
  const CalculatorComponent = calculatorComponents[slug];
  
  if (!CalculatorComponent) {
    notFound();
  }

  // Get SEO config for this calculator
  const configKey = slugToConfigKey[slug];
  const calculatorConfig = seoConfig[configKey];

  // Get SEO metadata and JSON-LD data from PageSEO
  const { metadata, jsonLdData } = PageSEO({
    pageKey: 'calculator',
    dynamicData: {
      type: 'calculator',
      data: calculatorConfig || {
        title: `${slug.replace('-', ' ')} Calculator`,
        description: `Calculate your ${slug.replace('-', ' ')} easily with our free online tool.`,
        path: `/calculators/${slug}`,
      },
    },
    includeJsonLd: true,
    jsonLdTypes: ['website', 'breadcrumb', 'organization'],
  });

  return (
    <>
      {/* Render JSON-LD structured data */}
      {jsonLdData?.map((data, index) => (
        <JsonLd key={index} data={data} />
      ))}
      
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb navigation */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="/" className="text-[#074a6b] hover:underline">Home</a>
              </li>
              <li>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li>
                <a href="/calculators" className="text-[#074a6b] hover:underline">Calculators</a>
              </li>
              <li>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li className="text-[#1a729e] capitalize">
                {calculatorConfig?.title?.replace(' Calculator', '') || slug.replace('-', ' ')}
              </li>
            </ol>
          </nav>
          
         
          
          {/* Calculator component */}
          <CalculatorComponent />
        </div>
      </main>
    </>
  );
}

// Generate metadata using config/seo.config.js
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  // Get config key for this slug
  const configKey = slugToConfigKey[slug];
  
  // Get SEO config from seo.config.js
  const calculatorConfig = seoConfig[configKey];
  
  if (!calculatorConfig) {
    return {
      title: `Calculator Not Found | ${baseSEO.siteName}`,
      description: 'The requested calculator could not be found.',
    };
  }

  // Build metadata from config
  const baseUrl = baseSEO.siteUrl;
  const fullUrl = `${baseUrl}${calculatorConfig.path}`;
  const imageUrl = calculatorConfig.image?.startsWith('http') 
    ? calculatorConfig.image 
    : `${baseUrl}${calculatorConfig.image || baseSEO.defaultImage}`;

  return {
    title: calculatorConfig.title,
    description: calculatorConfig.description,
    keywords: calculatorConfig.keywords?.join(', ') || '',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: calculatorConfig.title,
      description: calculatorConfig.description,
      url: fullUrl,
      siteName: baseSEO.siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: calculatorConfig.title,
        },
      ],
      locale: baseSEO.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: calculatorConfig.title,
      description: calculatorConfig.description,
      images: [imageUrl],
      creator: baseSEO.twitterHandle,
    },
    robots: calculatorConfig.robots || {
      index: true,
      follow: true,
    },
  };
}

// Generate static params for all calculators
export async function generateStaticParams() {
  return Object.keys(calculatorComponents).map((slug) => ({
    slug,
  }));
}