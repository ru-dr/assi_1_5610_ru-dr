import Link from "next/link";

export default function Help() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Help</h1>
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Need Assistance?
          </h2>
          <p className="text-gray-600 mb-4">
            This page is currently under construction. For immediate help,
            please contact:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Technical Support: support@northeastern.edu</li>
            <li>Academic Advising: advising@northeastern.edu</li>
            <li>IT Help Desk: helpdesk@northeastern.edu</li>
          </ul>
        </div>
        <Link
          href="/dashboard"
          className="inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
