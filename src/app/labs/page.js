import Link from 'next/link';

export default function Labs() {
  const labs = [
    {
      id: 'lab1',
      title: 'Lab 1 - HTML Elements Practice',
      description: 'Complete HTML elements practice including forms, tables, lists, images, and more',
      status: 'active'
    },
    {
      id: 'lab2',
      title: 'Lab 2 - Coming Soon',
      description: 'This lab is currently under development',
      status: 'coming-soon'
    },
    {
      id: 'lab3',
      title: 'Lab 3 - Coming Soon', 
      description: 'This lab is currently under development',
      status: 'coming-soon'
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
          <div key={lab.id} className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">{lab.title}</h2>
              <span className={`px-3 py-1 rounded-full text-sm ${
                lab.status === 'active' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
              }`}>
                {lab.status === 'active' ? 'Available' : 'Coming Soon'}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{lab.description}</p>
            
            {lab.status === 'active' ? (
              <Link 
                href={`/labs/${lab.id}`}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
              >
                View Lab
              </Link>
            ) : (
              <Link 
                href={`/labs/${lab.id}`}
                className="inline-block bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded transition-colors"
              >
                Preview
              </Link>
            )}
          </div>
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