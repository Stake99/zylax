import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllServices, getServiceBySlug } from '@/lib/services';
import ServiceDetail from '@/components/services/ServiceDetail';
import { generatePageMetadata } from '@/lib/metadata';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

/**
 * Generate static params for all services at build time
 * This enables static generation for all service detail pages
 */
export async function generateStaticParams() {
  const services = getAllServices();
  
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/**
 * Generate dynamic metadata based on service data
 */
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }
  
  return generatePageMetadata({
    title: `${service.title} - Professional Cybersecurity Services`,
    description: `${service.description} Expert ${service.title.toLowerCase()} services to protect your organization from cyber threats and ensure compliance.`,
    keywords: [service.title, service.category, 'cybersecurity', 'security services'],
    ogImage: `/images/og-service-${service.slug}.jpg`,
    ogType: 'article',
    canonical: `https://secureguard.com/services/${service.slug}`,
    twitterCard: 'summary_large_image',
  });
}

/**
 * Service detail page component
 * Fetches service data and renders ServiceDetail component
 * Returns 404 if service slug is not found
 */
export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  
  // Return 404 if service not found
  if (!service) {
    notFound();
  }
  
  return <ServiceDetail service={service} />;
}
