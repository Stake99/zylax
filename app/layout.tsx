import type { Metadata } from 'next'
import { Orbitron, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/navigation/Header'
import Footer from '@/components/shared/Footer'
import { generatePageMetadata } from '@/lib/metadata'

// Modern tech font for headings - cryptic/cyber aesthetic
const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

// Modern body font with technical feel
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://zylaxsystems.com'),
  ...generatePageMetadata({
    title: 'Zylax Systems - Cybersecurity Services',
    description: 'We provide comprehensive cybersecurity solutions designed to protect businesses from digital threats, data breaches, and system downtime.',
    keywords: ['cybersecurity', 'security services', 'network security', 'data protection', 'risk assessment', 'CCTV systems', 'alarm systems'],
    ogImage: '/images/og-default.jpg',
    ogType: 'website',
    canonical: 'https://zylaxsystems.com',
    twitterCard: 'summary_large_image',
  }),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${spaceGrotesk.variable}`}>
      <body className={spaceGrotesk.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
