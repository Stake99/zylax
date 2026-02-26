import { Metadata } from 'next';
import ServiceCard from '@/components/services/ServiceCard';
import { getAllServices } from '@/lib/services';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Cybersecurity Services - Professional Security Solutions',
  description: 'Comprehensive cybersecurity services including penetration testing, security audits, incident response, and compliance consulting. Protect your organization with expert security solutions.',
  keywords: ['cybersecurity services', 'penetration testing', 'security audits', 'incident response', 'compliance consulting', 'security solutions'],
  ogImage: '/images/og-services.jpg',
  ogType: 'website',
  canonical: 'https://secureguard.com/services',
  twitterCard: 'summary_large_image',
});

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Comprehensive cybersecurity solutions tailored to protect your organization from evolving threats
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Expert Security Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Our team of certified security professionals delivers industry-leading cybersecurity services 
            to help organizations identify vulnerabilities, respond to incidents, and maintain compliance 
            with regulatory requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Strengthen Your Security?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our cybersecurity services can protect your organization 
            and help you achieve your security goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
