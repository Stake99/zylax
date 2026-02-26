import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import CTASection from '@/components/home/CTASection';
import TrustIndicators from '@/components/home/TrustIndicators';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Zylax Systems - Cybersecurity Services',
  description: 'We provide comprehensive cybersecurity solutions designed to protect businesses from digital threats, data breaches, and system downtime.',
  keywords: ['cybersecurity', 'network security', 'data protection', 'endpoint security', 'CCTV systems', 'alarm systems', 'security services'],
  ogImage: '/images/og-home.jpg',
  ogType: 'website',
  canonical: 'https://zylaxsystems.com',
  twitterCard: 'summary_large_image',
});

export default function Home() {
  return (
    <>
      <HeroSection
        title="Protect Your Digital Assets"
        subtitle="We provide comprehensive cybersecurity solutions designed to protect businesses from digital threats, data breaches, and system downtime."
        ctaText="Get Started"
        ctaLink="/contact"
      />
      <ServicesOverview />
      <TrustIndicators />
      <CTASection />
    </>
  );
}
