export default function JsonLd({ type = 'Website', data }) {
  const getJsonLd = () => {
    switch(type) {
      case 'Website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: data.name || 'Your Website Name',
          url: data.url || 'http://localhost:3000',
          description: data.description || 'Your website description',
        }
      
      case 'Article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.title,
          description: data.excerpt,
          image: data.image,
          datePublished: data.publishedTime,
          dateModified: data.modifiedTime || data.publishedTime,
          author: {
            '@type': 'Person',
            name: data.author,
            url: data.authorUrl,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Your Organization Name',
            logo: {
              '@type': 'ImageObject',
              url: 'http://localhost:3000/logo.png',
            },
          },
        }
      
      case 'Breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }
      
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: data.name || 'Your Organization',
          url: data.url || 'http://localhost:3000',
          logo: data.logo || 'http://localhost:3000/logo.png',
          sameAs: data.socialLinks || [],
        }
      
      default:
        return null
    }
  }

  const jsonLd = getJsonLd()
  
  if (!jsonLd) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}