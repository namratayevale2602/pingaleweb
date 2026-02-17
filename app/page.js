import PageSEO from "@/components/seo/PageSEO";
import JsonLd from "@/components/seo/JsonLd";
import Link from "next/link";
import Hero from "./home/component/Hero";
import HeroStory from "./home/component/StorySection";
import ThreeDProtection from "./home/component/ThreeDProtection";
import WhyTrustUs from "./home/component/WhyTrustUs";

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
       <WhyTrustUs />
      </main>

    </>
  );
}


// Export metadata for Next.js
export async function generateMetadata() {
  const { metadata } = PageSEO({ pageKey: 'home' })
  return metadata
}