// app/insurance/[slug]/page.js
import InsuranceDetail from '../component/InsuranceDetailPage';
import { getInsuranceBySlug, getAllInsuranceSlugs } from '../data/insuranceData';
import { cache } from 'react';

// Cache the data fetching
const getCachedInsurance = cache(async (slug) => {
  return getInsuranceBySlug(slug);
});

// Generate static paths at build time
export async function generateStaticParams() {
  const slugs = getAllInsuranceSlugs();
  return slugs;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const insurance = await getCachedInsurance(slug);
  
  if (!insurance) {
    return {
      title: 'Insurance Not Found',
      description: 'The requested insurance type could not be found'
    };
  }

  return {
    title: `${insurance.title} - Insurance Solutions`,
    description: insurance.meta.description,
    keywords: insurance.meta.keywords,
  };
}

export default async function InsurancePage({ params }) {
  const { slug } = await params;
  const insurance = await getCachedInsurance(slug);
  
  return <InsuranceDetail insuranceData={insurance} slug={slug} />;
}