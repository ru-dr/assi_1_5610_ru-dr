import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0a]">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          CS5610 Web Development Assignment 1
        </h1>
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
          RUDRA JAYESHKUMAR PATEL
        </p>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-8">
          NUID: 002593056
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link
            href="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg shadow-lg transition-colors"
          >
            <div className="text-3xl mb-3">🎓</div>
            <h2 className="text-xl font-semibold mb-2">kambaz</h2>
            <p className="text-blue-100">
              Learning Management System with Account, Dashboard, Courses, and more
            </p>
          </Link>

          <Link
            href="/labs"
            className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg shadow-lg transition-colors"
          >
            <div className="text-3xl mb-3">🧪</div>
            <h2 className="text-xl font-semibold mb-2">Labs</h2>
            <p className="text-green-100">
              Lab1: HTML Elements Practice, Lab2 & Lab3: Coming Soon
            </p>
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>Assignment covers all required HTML elements and React components</p>
          <p>Built with Next.js 15, React 19, and Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}
