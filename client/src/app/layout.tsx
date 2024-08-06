import '../styles/globals.css'

import React from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['travel', 'vacation', 'holiday', 'tour', 'adventure', 'explore'],
  title: 'Odyssey Travel - Your Gateway to Unforgettable Journeys',
  creator: 'Vasilije',
  description:
    'Embark on a journey of a lifetime with Odyssey Travel. Discover amazing destinations, plan unforgettable vacations, and create lasting memories with our expert travel services. Explore our curated tours and personalized packages.',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/favicons/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicons/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicons/favicon.ico',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
