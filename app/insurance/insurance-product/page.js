import Link from "next/link";
import PageSEO from "@/components/seo/PageSEO";
import JsonLd from "@/components/seo/JsonLd";
import LifeInsuranceProducts from "@/components/insurance/life-insurance-products";

export default function Calculators() {

  const { metadata, jsonLdData } = PageSEO({ 
    pageKey: 'insuranceProduct',
    includeJsonLd: true
  })

  return (
    <>
      
       {jsonLdData.map((data, index) => (
        <JsonLd key={index} data={data} />
      ))}

      <main>
        <LifeInsuranceProducts />
       
      </main>

    </>
  );
}

export async function generateMetadata() {
  const { metadata } = PageSEO({ pageKey: 'insuranceProduct' })
  return metadata
}