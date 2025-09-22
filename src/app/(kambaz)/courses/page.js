'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Courses() {
  const courses = [
    { 
      id: 1, 
      title: "CS5610 Web Development", 
      image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Full-stack web development using modern technologies",
      instructor: "Prof. Johnson"
    },
    { 
      id: 2, 
      title: "CS5800 Algorithms", 
      image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Data structures and algorithmic problem solving",
      instructor: "Prof. Smith"
    },
    { 
      id: 3, 
      title: "CS6750 Human Computer Interaction", 
      image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Design and evaluation of user interfaces",
      instructor: "Prof. Brown"
    },
    { 
      id: 4, 
      title: "CS5500 Software Engineering", 
      image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Software development methodologies and practices",
      instructor: "Prof. Davis"
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
            <Link href="/dashboard" className="block hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors">
              📊 Dashboard
            </Link>
          </li>
          <li>
            <Link href="/courses" className="block bg-gray-300 dark:bg-gray-700 p-2 rounded">
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
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">All Courses</h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-6">Select a course to view details</h2>
        
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
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{course.instructor}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{course.description}</p>
                <Link 
                  href={`/courses/${course.id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Enter Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
