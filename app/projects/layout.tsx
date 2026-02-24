import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Projects | MVP Studio - Portfolio & Case Studies',
  description:
    'Explore MVP Studio\'s portfolio of successful projects. From MVPs to full-scale applications, see how we help founders bring their visions to life in 21 days.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Our Projects | MVP Studio',
    description:
      'Explore MVP Studio\'s portfolio of successful projects built for ambitious founders.',
    url: 'https://www.mvpstudio.in/projects',
    type: 'website',
    images: [
      {
        url: '/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'MVP Studio Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Projects | MVP Studio',
    description:
      'Explore MVP Studio\'s portfolio of successful projects built for ambitious founders.',
    images: ['/opengraph.png'],
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
