
import Link from "next/link";
import PageSEO from "@/components/seo/PageSEO";
import JsonLd from "@/components/seo/JsonLd";
import GeneralInsurance from "@/components/genralinsurance/GeneralInsurance";

export default function Calculators() {

  const { metadata, jsonLdData } = PageSEO({ 
    pageKey: 'mutualFundProduct',
    includeJsonLd: true
  })

  return (
    <>
      
       {jsonLdData.map((data, index) => (
        <JsonLd key={index} data={data} />
      ))}

      <main>
        <GeneralInsurance />
       
      </main>

    </>
  );
}

export async function generateMetadata() {
  const { metadata } = PageSEO({ pageKey: 'mutualFundProduct' })
  return metadata
}