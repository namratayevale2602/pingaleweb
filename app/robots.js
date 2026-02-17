export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/private/', '/api/'],
      },
    ],
    sitemap: 'http://localhost:3000/sitemap.xml',
    host: 'http://localhost:3000',
  }
}