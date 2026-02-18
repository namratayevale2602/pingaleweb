import Link from "next/link";
import PageSEO from "@/components/seo/PageSEO";
import JsonLd from "@/components/seo/JsonLd";
import AboutUs from "./component/AboutUs";

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
        <AboutUs />
       
      </main>

    </>
  );
}

export async function generateMetadata() {
  const { metadata } = PageSEO({ pageKey: 'about' })
  return metadata
}