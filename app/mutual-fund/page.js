

import Link from "next/link";
import PageSEO from "@/components/seo/PageSEO";
import JsonLd from "@/components/seo/JsonLd";
import MutualFundExplainer from "@/components/mutualfund/MutualFund";

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
        <MutualFundExplainer />
       
      </main>

    </>
  );
}

export async function generateMetadata() {
  const { metadata } = PageSEO({ pageKey: 'contact' })
  return metadata
}