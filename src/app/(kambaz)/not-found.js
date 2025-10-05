import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or
          hasn&apos;t been implemented yet.
        </p>
        <div className="space-x-4">
          <Link
            href="/dashboard"
            className="inline-block px-6 py-3 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition-colors"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded hover:bg-gray-300 transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
