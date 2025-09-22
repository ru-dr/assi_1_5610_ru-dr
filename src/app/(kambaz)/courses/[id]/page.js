import Link from 'next/link';

export default function CourseDetail({ params }) {
  const courseId = params.id;
  
  const coursesData = {
    1: {
      id: 1,
      title: "CS5610 Web Development",
      description: "Full-stack web development using modern technologies",
      instructor: "Prof. Johnson"
    },
    2: {
      id: 2,
      title: "CS5800 Algorithms",
      description: "Data structures and algorithmic problem solving",
      instructor: "Prof. Smith"
    },
    3: {
      id: 3,
      title: "CS6750 Human Computer Interaction",
      description: "Design and evaluation of user interfaces",
      instructor: "Prof. Brown"
    },
    4: {
      id: 4,
      title: "CS5500 Software Engineering",
      description: "Software development methodologies and practices",
      instructor: "Prof. Davis"
    }
  };

  const course = coursesData[parseInt(courseId)];

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

  const renderCourseNav = () => (
    <div className="bg-gray-100 dark:bg-[#0a0a0a] p-4 border-r border-gray-300 dark:border-gray-600 w-48">
      <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
        {course ? course.title : 'Loading...'}
      </h3>
      <ul className="space-y-2">
        <li>
          <Link 
            href={`/courses/${courseId}`}
            className="block w-full text-left p-2 rounded bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100"
          >
            🏠 Home
          </Link>
        </li>
        <li>
          <Link 
            href={`/courses/${courseId}/modules`}
            className="block w-full text-left p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            📚 Modules
          </Link>
        </li>
        <li>
          <Link 
            href={`/courses/${courseId}/piazza`}
            className="block w-full text-left p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            💬 Piazza
          </Link>
        </li>
        <li>
          <Link 
            href={`/courses/${courseId}/zoom`}
            className="block w-full text-left p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            📹 Zoom
          </Link>
        </li>
        <li>
          <Link 
            href={`/courses/${courseId}/quizzes`}
            className="block w-full text-left p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            📝 Quizzes
          </Link>
        </li>
        <li>
          <Link 
            href={`/courses/${courseId}/assignments`}
            className="block w-full text-left p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            📋 Assignments
          </Link>
        </li>
        <li>
          <Link 
            href={`/courses/${courseId}/grades`}
            className="block w-full text-left p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            📊 Grades
          </Link>
        </li>
      </ul>
    </div>
  );

  const renderHome = () => (
    <div className="p-6">
      <div className="mb-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">Import</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600">Publish All</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">View Progress</button>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Course Status</h3>
        <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded border border-yellow-300 dark:border-yellow-700">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">Course is currently unpublished. Students cannot access course content.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white dark:bg-[#0a0a0a] p-4 rounded border border-gray-300 dark:border-gray-600">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Week 1 - Introduction</h3>
          <ul className="ml-4 space-y-1 text-gray-700 dark:text-gray-300">
            <li>• Course Introduction</li>
            <li>• Basic Concepts</li>
            <li>• Fundamentals</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-[#0a0a0a] p-4 rounded border border-gray-300 dark:border-gray-600">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Week 2 - Core Topics</h3>
          <ul className="ml-4 space-y-1 text-gray-700 dark:text-gray-300">
            <li>• Core Concepts</li>
            <li>• Practical Applications</li>
            <li>• Hands-on Practice</li>
          </ul>
        </div>
      </div>
    </div>
  );

  if (!course) {
    return (
      <div className="flex min-h-screen bg-white dark:bg-[#0a0a0a] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Course Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">The course you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/courses" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0a0a0a]">
      {renderNavigation()}
      <div className="flex flex-1 bg-white dark:bg-[#0a0a0a]">
        {renderCourseNav()}
        <div className="flex-1 text-gray-900 dark:text-gray-100">
          {renderHome()}
        </div>
      </div>
    </div>
  );
}