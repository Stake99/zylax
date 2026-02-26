import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. The page may have been moved or doesn&apos;t exist.
        </p>
        
        <div className="mb-8">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Homepage
          </Link>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Popular Pages
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
