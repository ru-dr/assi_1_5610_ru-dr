import Link from "next/link";

export default function Help() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center px-6 py-12">
        <div className="mb-8">
          <h1 className="text-7xl font-bold text-gray-800 mb-2">❓</h1>
          <div className="w-32 h-1 bg-red-600 mx-auto mb-8"></div>
        </div>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Help</h2>
        <p className="text-gray-600 mb-4 max-w-md mx-auto">
          This page is currently under construction.
        </p>
        <div className="bg-white/80 rounded-lg shadow-lg p-6 mb-8 max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Need Assistance?
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            For immediate help, please contact:
          </p>
          <ul className="text-left text-sm text-gray-600 space-y-2">
            <li>📧 Technical Support: support@northeastern.edu</li>
            <li>📚 Academic Advising: advising@northeastern.edu</li>
            <li>💻 IT Help Desk: helpdesk@northeastern.edu</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="inline-block px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors shadow-md hover:shadow-lg"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
