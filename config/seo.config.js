// Base SEO configuration that applies to all pages
const baseSEO = {
  siteName: 'Pingle Web',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  defaultImage: '/og-image.jpg',
  twitterHandle: '@pingleweb',
  locale: 'en_US',
  facebookAppId: 'your-facebook-app-id', // Optional
}

// Page-specific SEO configurations
export const seoConfig = {
  // Homepage
  home: {
    title: 'Digital Solutions for Modern Business',
    description: 'Pingle Web provides innovative digital solutions including web development, SEO optimization, and custom software development for businesses of all sizes.',
    keywords: ['web development company', 'SEO services', 'digital solutions', 'Next.js development', 'React development'],
    image: '/home-og-image.jpg',
    type: 'website',
    path: '/',
    priority: 1.0,
    changeFrequency: 'daily',
  },
  
  // About Us page
  about: {
    title: 'About Us - Our Story and Mission',
    description: 'Learn about Pingle Web - our mission, vision, and the team behind your digital success. We are passionate about creating exceptional web experiences.',
    keywords: ['about Pingle Web', 'web development team', 'digital agency', 'our mission'],
    image: '/about-og-image.jpg',
    type: 'website',
    path: '/aboutus',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  
  // Blog listing page
  blog: {
    title: 'Blog - Web Development & SEO Insights',
    description: 'Explore the latest insights, tutorials, and news about web development, SEO, and digital marketing from the Pingle Web team.',
    keywords: ['web development blog', 'SEO tips', 'digital marketing insights', 'Next.js tutorials'],
    image: '/blog-og-image.jpg',
    type: 'website',
    path: '/blog',
    priority: 0.9,
    changeFrequency: 'daily',
  },
  
  // Contact page
  contact: {
    title: 'Contact Us - Get in Touch',
    description: 'Contact Pingle Web for your web development, SEO, and digital marketing needs. We\'re here to help your business grow online.',
    keywords: ['contact Pingle Web', 'web development inquiry', 'SEO consultation', 'get in touch'],
    image: '/contact-og-image.jpg',
    type: 'website',
    path: '/contactus',
    priority: 0.6,
    changeFrequency: 'yearly',
  },
  
  // Privacy Policy
  privacy: {
    title: 'Privacy Policy',
    description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
    keywords: ['privacy policy', 'data protection', 'privacy terms'],
    image: '/privacy-og-image.jpg',
    type: 'website',
    path: '/privacy',
    priority: 0.3,
    changeFrequency: 'yearly',
    robots: {
      index: true,
      follow: true,
    },
  },
  
  // Terms of Service
  terms: {
    title: 'Terms of Service',
    description: 'Review our terms of service and conditions for using our website and services.',
    keywords: ['terms of service', 'terms and conditions', 'legal'],
    image: '/terms-og-image.jpg',
    type: 'website',
    path: '/terms',
    priority: 0.3,
    changeFrequency: 'yearly',
  },
  
  // 404 page
  notFound: {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist or has been moved.',
    keywords: ['404 error', 'page not found'],
    image: '/404-og-image.jpg',
    type: 'website',
    path: '/404',
    robots: {
      index: false,
      follow: true,
    },
  },
}

// Blog post SEO generator (for dynamic pages)
export const generateBlogPostSEO = (post) => {
  return {
    title: post.title,
    description: post.excerpt || post.description,
    keywords: post.tags || ['blog post', 'web development'],
    image: post.image || '/blog-default-og-image.jpg',
    type: 'article',
    path: `/blog/${post.slug}`,
    publishedTime: post.publishedTime || post.date,
    modifiedTime: post.modifiedTime || post.date,
    authors: [post.author?.name || 'Pingle Web Team'],
    tags: post.tags || [],
    priority: 0.7,
    changeFrequency: 'weekly',
  }
}

// Product page SEO generator (example for e-commerce)
export const generateProductSEO = (product) => {
  return {
    title: product.name,
    description: product.shortDescription || product.description,
    keywords: product.tags || ['product', 'ecommerce'],
    image: product.image || '/product-default-og-image.jpg',
    type: 'product',
    path: `/products/${product.slug}`,
    price: product.price,
    currency: product.currency || 'USD',
    availability: product.inStock ? 'InStock' : 'OutOfStock',
    priority: 0.6,
    changeFrequency: 'weekly',
  }
}

export default baseSEO