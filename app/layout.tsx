import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'MVP Studio - Transform Your Idea Into Reality',
    template: '%s | MVP Studio',
  },
  description: 'Expert MVP development and product design services. Launch your startup in 21 days with our rapid prototyping and full-stack development.',
  keywords: [
    'MVP development',
    'startup MVP',
    'product design',
    'rapid prototyping',
    'full-stack development',
    'launch startup',
    'app development',
    'web development',
    'SaaS development',
    'MVP studio',
  ],
  authors: [{ name: 'MVP Studio', url: 'https://www.mvpstudio.in' }],
  creator: 'MVP Studio',
  publisher: 'MVP Studio',
  icons: {
    icon: '/browser.png',
    apple: '/browser.png',
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://www.mvpstudio.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MVP Studio - Transform Your Idea Into Reality',
    description: 'Expert MVP development and product design services. Launch your startup in 21 days with our rapid prototyping and full-stack development.',
    url: 'https://www.mvpstudio.in',
    siteName: 'MVP Studio',
    images: [
      {
        url: '/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'MVP Studio - Transform Your Idea Into Reality',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVP Studio - Transform Your Idea Into Reality',
    description: 'Expert MVP development and product design services. Launch your startup in 21 days with our rapid prototyping and full-stack development.',
    images: ['/opengraph.png'],
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
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.mvpstudio.in/#organization',
      name: 'MVP Studio',
      url: 'https://www.mvpstudio.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.mvpstudio.in/mvplogo.png',
      },
      sameAs: [],
      description:
        'Expert MVP development and product design services. Launch your startup in 21 days.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.mvpstudio.in/#website',
      url: 'https://www.mvpstudio.in',
      name: 'MVP Studio',
      publisher: { '@id': 'https://www.mvpstudio.in/#organization' },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.mvpstudio.in/#service',
      name: 'MVP Development',
      provider: { '@id': 'https://www.mvpstudio.in/#organization' },
      description:
        'Transform your startup idea into a production-ready MVP in 21 days with expert development and design.',
      areaServed: 'Worldwide',
      serviceType: 'Software Development',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
