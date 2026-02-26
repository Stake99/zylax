import Link from 'next/link';
import { Service } from '@/types/service';
import Button from '@/components/ui/Button';

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Service Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {service.title}
      </h1>

      {/* Full Description */}
      <div className="mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          {service.fullDescription}
        </p>
      </div>

      {/* Benefits Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Key Benefits
        </h2>
        <ul className="space-y-3">
          {service.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Use Cases Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Common Use Cases
        </h2>
        <ul className="space-y-3">
          {service.useCases.map((useCase, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="text-gray-700">{useCase}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Contact us today to learn how our {service.title.toLowerCase()} services can help protect your organization.
        </p>
        <Link href="/contact">
          <Button variant="primary">
            Contact Us
          </Button>
        </Link>
      </section>
    </div>
  );
}
