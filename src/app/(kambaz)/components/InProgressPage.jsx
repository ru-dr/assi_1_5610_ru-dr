"use client";

export default function InProgressPage({ feature }) {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div className="mb-4">
          <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{feature}</h2>
        <p className="text-gray-600">This feature is currently in progress.</p>
        <p className="text-sm text-gray-500 mt-2">Please check back later.</p>
      </div>
    </div>
  );
}
