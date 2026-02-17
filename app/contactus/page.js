import Link from "next/link";
import PageSEO from "@/components/seo/PageSEO";
import JsonLd from "@/components/seo/JsonLd";

export default function Home() {

  const { metadata, jsonLdData } = PageSEO({ 
    pageKey: 'contact',
    includeJsonLd: true
  })

  return (
    <>
      
       {jsonLdData.map((data, index) => (
        <JsonLd key={index} data={data} />
      ))}

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to Pingle Web - Contact Us
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We build amazing web experiences with Next.js and Tailwind CSS, 
              optimized for search engines and user experience.
            </p>
            <Link 
              href="/about" 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Learn More About Us
            </Link>
          </div>
        </section>

       
      </main>

    </>
  );
}

export async function generateMetadata() {
  const { metadata } = PageSEO({ pageKey: 'contact' })
  return metadata
}