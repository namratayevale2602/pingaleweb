/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Optional: Add more domains if needed
    domains: ['images.unsplash.com'],
  },
  // Ensure static generation works
  output: 'standalone',
  // Add this for better routing
  trailingSlash: false,
};

export default nextConfig;

