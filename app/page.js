import PageSEO from "@/components/seo/PageSEO";
import JsonLd from "@/components/seo/JsonLd";
import Link from "next/link";
import Hero from "../components/home/Hero";
import HeroStory from "../components/home/StorySection";
import ThreeDProtection from "../components/home/ThreeDProtection";
import WhyTrustUs from "../components/home/WhyTrustUs";
import YourProcess from "../components/home/YourProcess";
import CTASection from "../components/home/CTASection";
import Calculators from "../components/calculators/Calculators"

export default async function Home() {

  // Get SEO data from central config
  const { metadata, jsonLdData } = PageSEO({ 
    pageKey: 'home',
    includeJsonLd: true,
    jsonLdTypes: ['website', 'breadcrumb', 'organization']
  })

  return (
    <>
      {/* Inject JSON-LD */}
      {jsonLdData && jsonLdData.length > 0 && jsonLdData.map((data, index) => (
        <JsonLd key={index} data={data} />
      ))}

      <main>
       <Hero />
       <HeroStory />
       <ThreeDProtection />
       <Calculators />
       <WhyTrustUs />
       <YourProcess />
       <CTASection />
      </main>

    </>
  );
}


// Export metadata for Next.js
export async function generateMetadata() {
  const { metadata } = PageSEO({ pageKey: 'home' })
  return metadata
}