// app/insurance/[slug]/page.js
import InsuranceDetail from '../component/InsuranceDetailPage';
import { getInsuranceBySlug, getAllInsuranceSlugs } from '../data/insuranceData';

// Force static generation
export const dynamic = 'force-static';
export const revalidate = false; // or set a revalidation time in seconds

// Generate static paths at build time
export async function generateStaticParams() {
  const slugs = getAllInsuranceSlugs();
  console.log('Generated slugs:', slugs); // This will show in Vercel build logs
  return slugs;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const insurance = getInsuranceBySlug(slug); // No need for cache() here
  
  if (!insurance) {
    return {
      title: 'Insurance Not Found',
    };
  }

  return {
    title: `${insurance.title} - Insurance Solutions`,
    description: insurance.meta.description,
  };
}

export default async function InsurancePage({ params }) {
  const { slug } = await params;
  const insurance = getInsuranceBySlug(slug);
  
  if (!insurance) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Insurance Not Found</h1>
          <p className="text-gray-600 mt-2">The insurance type you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }
  
  return <InsuranceDetail insuranceData={insurance} slug={slug} />;
}