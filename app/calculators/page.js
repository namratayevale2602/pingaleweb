import Link from "next/link";
import PageSEO from "@/components/seo/PageSEO";
import JsonLd from "@/components/seo/JsonLd";
import Calculators from "./component/Calculators";


export default function Home() {

  const { metadata, jsonLdData } = PageSEO({ 
    pageKey: 'calculator',
    includeJsonLd: true
  })

  return (
    <>
      
       {jsonLdData.map((data, index) => (
        <JsonLd key={index} data={data} />
      ))}

      <main>
        <Calculators />
       
      </main>

    </>
  );
}

export async function generateMetadata() {
  const { metadata } = PageSEO({ pageKey: 'calculator' })
  return metadata
}