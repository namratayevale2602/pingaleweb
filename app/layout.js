import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata = {
  title: {
    default: 'Pingle Insurance',
    template: '%s | Pingle Insurance'
  },
  description: 'Your website description for search engines - make it compelling and include keywords',
  keywords: ['next.js', 'react', 'web development', 'your keywords'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pingle Insurance',
    description: 'Your website description',
    url: 'http://localhost:3000',
    siteName: 'Pingle Insurance',
    images: [
      {
        url: 'http://localhost:3000/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your website preview image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pingle Insurance',
    description: 'Your website description',
    images: ['http://localhost:3000/twitter-image.jpg'],
    creator: '@yourtwitterhandle',
  },
  robots: {
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Header />
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}