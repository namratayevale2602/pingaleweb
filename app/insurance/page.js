

import Link from "next/link";
import PageSEO from "@/components/seo/PageSEO";
import JsonLd from "@/components/seo/JsonLd";
import InsuranceExplainer from "@/components/insurance/insurance";

export default function Calculators() {

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
        <InsuranceExplainer />
       
      </main>

    </>
  );
}

export async function generateMetadata() {
  const { metadata } = PageSEO({ pageKey: 'contact' })
  return metadata
}