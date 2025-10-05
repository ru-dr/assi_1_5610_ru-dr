import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center px-6 py-12">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-800 mb-2">404</h1>
          <div className="w-32 h-1 bg-red-600 mx-auto mb-8"></div>
        </div>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
          >
            Go to Home
          </Link>
          <Link
            href="/dashboard"
            className="inline-block px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors shadow-md hover:shadow-lg"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
