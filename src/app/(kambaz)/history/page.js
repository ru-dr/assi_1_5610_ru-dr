import Link from "next/link";

export default function History() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">History</h1>
        <p className="text-gray-600 mb-6">
          This page is currently under construction. History features will be
          available soon.
        </p>
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
