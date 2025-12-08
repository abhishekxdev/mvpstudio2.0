import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MVP Studio - Transform Your Idea Into Reality',
  description: 'Expert MVP development and product design services. Launch your startup in 21 days with our rapid prototyping and full-stack development.',
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
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  )
}
