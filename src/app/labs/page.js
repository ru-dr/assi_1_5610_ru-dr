import Link from 'next/link';

export default function Labs() {
  const labs = [
    {
      id: 'lab1',
      title: 'Lab 1 - HTML Elements Practice',
      description: 'Complete HTML elements practice including forms, tables, lists, images, and more'
    },
    {
      id: 'lab2',
      title: 'Lab 2 - CSS Styling Fundamentals',
      description: 'Learn CSS selectors, properties, flexbox, grid layouts, and responsive design techniques'
    },
    {
      id: 'lab3',
      title: 'Lab 3 - JavaScript Basics', 
      description: 'Practice JavaScript fundamentals including variables, functions, DOM manipulation, and events'
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-8">Labs</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Welcome to the Labs section. Here you can access different lab assignments and practice exercises.
      </p>
      
      <div className="grid gap-6">
        {labs.map((lab) => (
          <Link 
            key={lab.id}
            href={`/labs/${lab.id}`}
            className="block border border-gray-300 dark:border-gray-600 rounded-lg p-6 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 transition-all cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-3">{lab.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{lab.description}</p>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-blue-900 dark:text-blue-300">Quick Navigation</h3>
        <div className="flex flex-wrap gap-2">
          <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Home</Link>
          <span className="text-gray-400">•</span>
          <Link href="/dashboard" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Kambaz</Link>
        </div>
      </div>
    </div>
  );
}