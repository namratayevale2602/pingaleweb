import { getPageSEO, getDynamicPageSEO, generateJsonLd } from '@/lib/seo-helper'
import JsonLd from './JsonLd'

export default function PageSEO({ 
  pageKey, 
  dynamicData = null,
  customOverrides = {},
  includeJsonLd = true,
  jsonLdTypes = ['website', 'breadcrumb', 'organization']
}) {
  // Generate metadata based on page type
  let metadata
  let jsonLdData = []
  
  if (dynamicData && dynamicData.type) {
    // For dynamic pages (blog, product, etc.)
    metadata = getDynamicPageSEO(dynamicData.type, dynamicData.data, customOverrides)
    
    // Generate JSON-LD for dynamic pages
    if (includeJsonLd) {
      if (dynamicData.type === 'blog') {
        const articleJsonLd = generateJsonLd('article', { 
          ...dynamicData.data, 
          path: metadata.alternates?.canonical || `/blog/${dynamicData.data.slug}`
        })
        if (articleJsonLd) jsonLdData.push(articleJsonLd)
      } else if (dynamicData.type === 'product') {
        const productJsonLd = generateJsonLd('product', dynamicData.data)
        if (productJsonLd) jsonLdData.push(productJsonLd)
      }
    }
  } else {
    // For static pages
    metadata = getPageSEO(pageKey, customOverrides)
  }
  
  // Add breadcrumb JSON-LD if included
  if (includeJsonLd && jsonLdTypes.includes('breadcrumb')) {
    const breadcrumbItems = getBreadcrumbItems(pageKey, dynamicData)
    if (breadcrumbItems.length > 0) {
      const breadcrumbJsonLd = generateJsonLd('breadcrumb', { items: breadcrumbItems })
      if (breadcrumbJsonLd) jsonLdData.push(breadcrumbJsonLd)
    }
  }
  
  // Add organization JSON-LD if included
  if (includeJsonLd && jsonLdTypes.includes('organization')) {
    const orgJsonLd = generateJsonLd('organization', {})
    if (orgJsonLd) jsonLdData.push(orgJsonLd)
  }
  
  // Add website JSON-LD if included
  if (includeJsonLd && jsonLdTypes.includes('website') && !dynamicData) {
    const websiteJsonLd = generateJsonLd('website', {
      name: metadata?.title || baseSEO.siteName,
      description: metadata?.description || '',
      url: metadata?.alternates?.canonical || baseSEO.siteUrl,
    })
    if (websiteJsonLd) jsonLdData.push(websiteJsonLd)
  }
  
  return { metadata, jsonLdData }
}

// Helper function to get breadcrumb items
function getBreadcrumbItems(pageKey, dynamicData = null) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  
  const breadcrumbMap = {
    home: [
      { name: 'Home', url: '/' }
    ],
    about: [
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/aboutus' }
    ],
    blog: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' }
    ],
    contact: [
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' }
    ],
    privacy: [
      { name: 'Home', url: '/' },
      { name: 'Privacy Policy', url: '/privacy' }
    ],
    terms: [
      { name: 'Home', url: '/' },
      { name: 'Terms of Service', url: '/terms' }
    ],
  }
  
  // Handle dynamic pages
  if (dynamicData) {
    if (dynamicData.type === 'blog') {
      return [
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: dynamicData.data.title, url: `/blog/${dynamicData.data.slug}` }
      ]
    }
    if (dynamicData.type === 'product') {
      return [
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: dynamicData.data.name, url: `/products/${dynamicData.data.slug}` }
      ]
    }
  }
  
  return breadcrumbMap[pageKey] || breadcrumbMap.home || []
}