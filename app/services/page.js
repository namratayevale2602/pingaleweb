import Link from "next/link";
import PageSEO from "@/components/seo/PageSEO";
import JsonLd from "@/components/seo/JsonLd";
import Services from "@/components/services/Services";

export default function Home() {

  const { metadata, jsonLdData } = PageSEO({ 
    pageKey: 'about',
    includeJsonLd: true
  })

  return (
    <>
      
       {jsonLdData.map((data, index) => (
        <JsonLd key={index} data={data} />
      ))}

      <main>
        <Services />
       
      </main>

    </>
  );
}

export async function generateMetadata() {
  const { metadata } = PageSEO({ pageKey: 'about' })
  return metadata
}