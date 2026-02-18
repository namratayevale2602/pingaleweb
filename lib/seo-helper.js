import baseSEO from '@/config/seo.config'
import { seoConfig } from '@/config/seo.config'

// Define jsonLdTemplates first before using it
const jsonLdTemplates = {
  website: (data) => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: data.name || baseSEO.siteName,
    url: data.url || baseSEO.siteUrl,
    description: data.description || '',
    ...(data.image && { image: data.image.startsWith('http') ? data.image : `${baseSEO.siteUrl}${data.image}` }),
  }),
  
  article: (data) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    image: data.image?.startsWith('http') ? data.image : `${baseSEO.siteUrl}${data.image || baseSEO.defaultImage}`,
    datePublished: data.publishedTime,
    dateModified: data.modifiedTime || data.publishedTime,
    author: {
      '@type': 'Person',
      name: data.author?.name || baseSEO.siteName,
      url: data.author?.url || baseSEO.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: baseSEO.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${baseSEO.siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseSEO.siteUrl}${data.path || ''}`,
    },
  }),
  
  breadcrumb: (data) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseSEO.siteUrl}${item.url}`,
    })),
  }),
  
  organization: (data) => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: baseSEO.siteName,
    url: baseSEO.siteUrl,
    logo: `${baseSEO.siteUrl}/logo.png`,
    sameAs: data.socialLinks || [
      'https://twitter.com/pingleweb',
      'https://facebook.com/pingleweb',
      'https://linkedin.com/company/pingleweb',
    ],
    contactPoint: data.contactPoint || [{
      '@type': 'ContactPoint',
      telephone: '+1-123-456-7890',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    }],
  }),
  
  product: (data) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
    description: data.description,
    image: data.image?.startsWith('http') ? data.image : `${baseSEO.siteUrl}${data.image}`,
    ...(data.price && {
      offers: {
        '@type': 'Offer',
        price: data.price,
        priceCurrency: data.currency || 'USD',
        availability: data.availability === 'InStock' 
          ? 'https://schema.org/InStock' 
          : 'https://schema.org/OutOfStock',
      },
    }),
    ...(data.brand && {
      brand: {
        '@type': 'Brand',
        name: data.brand,
      },
    }),
  }),
}

// Generate metadata for static pages
export function getPageSEO(pageKey, customOverrides = {}) {
  const pageConfig = seoConfig[pageKey]
  
  if (!pageConfig) {
    console.warn(`SEO config not found for page: ${pageKey}`)
    return generateDefaultSEO()
  }
  
  return generateMetadataFromConfig(pageConfig, customOverrides)
}

// Generate metadata for dynamic pages (blog posts, products, etc.)
export function getDynamicPageSEO(type, data, customOverrides = {}) {
  let pageConfig
  
  switch(type) {
    case 'calculator':
      pageConfig = {
        title: data.title,
        description: data.description,
        keywords: data.keywords || [],
        image: data.image,
        type: 'website',
        path: data.path,
        priority: data.priority || 0.7,
        changeFrequency: data.changeFrequency || 'monthly',
      }
      break
    case 'blog':
      pageConfig = {
        title: data.title,
        description: data.excerpt || data.description,
        keywords: data.tags || [],
        image: data.image,
        type: 'article',
        path: `/blog/${data.slug}`,
        publishedTime: data.publishedTime || data.date,
        modifiedTime: data.modifiedTime || data.date,
        authors: data.author ? [data.author.name] : [],
        tags: data.tags || [],
      }
      break
      
    case 'product':
      pageConfig = {
        title: data.name,
        description: data.shortDescription || data.description,
        keywords: data.tags || [],
        image: data.image,
        type: 'product',
        path: `/products/${data.slug}`,
        price: data.price,
        currency: data.currency || 'USD',
        availability: data.inStock ? 'InStock' : 'OutOfStock',
      }
      break
      
    default:
      pageConfig = data
  }
  
  return generateMetadataFromConfig(pageConfig, customOverrides)
}

// Generate metadata from configuration
function generateMetadataFromConfig(config, overrides = {}) {
  const mergedConfig = { ...config, ...overrides }
  const baseUrl = baseSEO.siteUrl
  const fullUrl = `${baseUrl}${mergedConfig.path || ''}`
  
  // Build keywords string
  const keywords = Array.isArray(mergedConfig.keywords) 
    ? mergedConfig.keywords.join(', ') 
    : mergedConfig.keywords || ''
  
  // Build image URL
  const imageUrl = mergedConfig.image?.startsWith('http') 
    ? mergedConfig.image 
    : `${baseUrl}${mergedConfig.image || baseSEO.defaultImage}`
  
  // Base metadata
  const metadata = {
    metadataBase: new URL(baseUrl),
    title: mergedConfig.title ? `${mergedConfig.title} | ${baseSEO.siteName}` : baseSEO.siteName,
    description: mergedConfig.description,
    keywords: keywords,
    authors: mergedConfig.authors ? [{ name: mergedConfig.authors[0] }] : [{ name: baseSEO.siteName }],
    creator: baseSEO.siteName,
    publisher: baseSEO.siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: mergedConfig.title,
      description: mergedConfig.description,
      url: fullUrl,
      siteName: baseSEO.siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: mergedConfig.title,
        },
      ],
      locale: baseSEO.locale,
      type: mergedConfig.type || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: mergedConfig.title,
      description: mergedConfig.description,
      images: [imageUrl],
      creator: baseSEO.twitterHandle,
    },
    robots: mergedConfig.robots || {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
  
  // Add article-specific metadata
  if (mergedConfig.type === 'article') {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: mergedConfig.publishedTime,
      modifiedTime: mergedConfig.modifiedTime || mergedConfig.publishedTime,
      authors: mergedConfig.authors || [baseSEO.siteName],
      tags: mergedConfig.tags || [],
    }
  }
  
  // Add product-specific metadata
  if (mergedConfig.type === 'product') {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'product',
      ...(mergedConfig.price && {
        'product:price:amount': mergedConfig.price,
        'product:price:currency': mergedConfig.currency || 'USD',
        'product:availability': mergedConfig.availability || 'InStock',
      }),
    }
  }
  
  return metadata
}

// Generate default SEO (fallback)
function generateDefaultSEO() {
  return {
    title: baseSEO.siteName,
    description: 'Welcome to Pingle Web - Your digital solutions partner',
    openGraph: {
      title: baseSEO.siteName,
      description: 'Welcome to Pingle Web - Your digital solutions partner',
      images: [{ url: `${baseSEO.siteUrl}${baseSEO.defaultImage}` }],
    },
  }
}

// Generate JSON-LD structured data
export function generateJsonLd(type, data = {}) {
  // Check if the template exists
  if (!jsonLdTemplates[type]) {
    console.warn(`JSON-LD template not found for type: ${type}`)
    return null
  }
  
  // Call the template function with data
  return jsonLdTemplates[type](data)
}