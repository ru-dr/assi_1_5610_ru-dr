import Link from 'next/link';
import Image from 'next/image';

export default function Dashboard() {
  const courses = [
    { 
      id: 1, 
      title: "CS5610 Web Development", 
      image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Full-stack web development using modern technologies"
    },
    { 
      id: 2, 
      title: "CS5800 Algorithms", 
      image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Data structures and algorithmic problem solving"
    },
    { 
      id: 3, 
      title: "CS6750 Human Computer Interaction", 
      image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Design and evaluation of user interfaces"
    },
    { 
      id: 4, 
      title: "CS5500 Software Engineering", 
      image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Software development methodologies and practices"
    },
  ];

  const renderNavigation = () => (
    <nav className="w-64 bg-gray-100 dark:bg-[#0a0a0a] text-gray-900 dark:text-white p-4 border-r border-gray-300 dark:border-gray-600">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Kambaz</h2>
        <ul className="space-y-2">
          <li>
            <a href="https://northeastern.edu" target="_blank" rel="noopener noreferrer" className="block hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors">
              🏫 NEU
            </a>
          </li>
          <li>
            <Link href="/account" className="block hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors">
              👤 Account
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="block bg-gray-300 dark:bg-gray-700 p-2 rounded">
              📊 Dashboard
            </Link>
          </li>
          <li>
            <Link href="/courses" className="block hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors">
              📚 Courses
            </Link>
          </li>
          <li>
            <Link href="/calendar" className="block hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors">
              📅 Calendar
            </Link>
          </li>
          <li>
            <Link href="/inbox" className="block hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors">
              📧 Inbox
            </Link>
          </li>
          <li>
            <Link href="/labs" className="block hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors">
              🧪 Labs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0a0a0a]">
      {renderNavigation()}
      <div className="flex-1 p-6 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Dashboard</h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-6">Published Courses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden bg-white dark:bg-[#0a0a0a] shadow-lg hover:shadow-xl transition-shadow">
              <Image 
                src={course.image} 
                alt={course.title} 
                width={300} 
                height={200} 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">{course.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{course.description}</p>
                <Link 
                  href="/courses"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Go to Course
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Recent Activity</h3>
          <div className="bg-white dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-600 rounded-lg p-4">
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-700 dark:text-gray-300">Assignment A1 submitted for CS5610 Web Development</span>
                <span className="text-sm text-gray-500 dark:text-gray-500">2 hours ago</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-700 dark:text-gray-300">New announcement posted in CS5800 Algorithms</span>
                <span className="text-sm text-gray-500 dark:text-gray-500">1 day ago</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="text-gray-700 dark:text-gray-300">Quiz Q2 available for CS6750 HCI</span>
                <span className="text-sm text-gray-500 dark:text-gray-500">3 days ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}