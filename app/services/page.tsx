import { Metadata } from 'next';
import Image from 'next/image';
import ServiceCard from '@/components/services/ServiceCard';
import { getAllServices } from '@/lib/services';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Cybersecurity Services - Professional Security Solutions | Zylax Systems',
  description: 'Comprehensive cybersecurity services including network security, data protection, endpoint security, and compliance consulting. Protect your organization with expert security solutions.',
  keywords: ['cybersecurity services', 'network security', 'data protection', 'endpoint security', 'compliance consulting', 'security solutions'],
  ogImage: '/images/og-services.jpg',
  ogType: 'website',
  canonical: 'https://zylaxsystems.com/services',
  twitterCard: 'summary_large_image',
});

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <div className="min-h-screen">
      {/* Page Header with Background */}
      <section className="relative bg-cyber-darker text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cybersecurity website background images (1).jpg"
            alt="Services Background"
            fill
            className="object-cover opacity-20"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-darker/90 to-cyber-dark/90" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-cyber-blue text-sm font-semibold tracking-wider uppercase mb-2">
            WHAT WE PROVIDE
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl drop-shadow-lg">
            Comprehensive cybersecurity solutions tailored to protect your organization from evolving threats
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cybersecurity website background images (2).jpg"
            alt="Services Grid Background"
            fill
            className="object-cover"
            quality={85}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
              Expert Security Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto drop-shadow-md">
              Our team of certified security professionals delivers industry-leading cybersecurity services 
              to help organizations identify vulnerabilities, respond to incidents, and maintain compliance 
              with regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with Image */}
      <section className="relative bg-cyber-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/displays/shamin-haky-Uhx-gHPpCDg-unsplash.jpg"
            alt="CTA Background"
            fill
            className="object-cover opacity-30"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-dark/90 to-cyber-darker/90" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-2xl">
            Ready to Strengthen Your Security?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Contact us today to discuss how our cybersecurity services can protect your organization 
            and help you achieve your security goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-cyber-blue text-cyber-dark px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
