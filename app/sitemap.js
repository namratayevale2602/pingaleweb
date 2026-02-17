import { seoConfig } from '@/config/seo.config'
import baseSEO from '@/config/seo.config'

export default async function sitemap() {
  const baseUrl = baseSEO.siteUrl
  
  // Get all static routes from seoConfig
  const staticRoutes = Object.values(seoConfig).map(page => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency || 'monthly',
    priority: page.priority || 0.5,
  }))
  
  // Fetch dynamic routes (blog posts)
  const posts = await getBlogPosts()
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedTime || post.date),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  
  return [...staticRoutes, ...postRoutes]
}

async function getBlogPosts() {
  // Fetch your blog posts
  return [
    { slug: 'getting-started-with-nextjs', date: '2024-01-15' },
    // ... more posts
  ]
}