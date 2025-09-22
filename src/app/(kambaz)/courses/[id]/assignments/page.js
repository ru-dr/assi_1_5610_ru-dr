import Link from 'next/link';

export default function CourseAssignments({ params }) {
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
            className="block w-full text-left p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
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
            className="block w-full text-left p-2 rounded bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100"
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

  const renderAssignments = () => (
    <div className="p-6">
      <div className="mb-6">
        <input 
          type="text" 
          placeholder="Search for Assignments" 
          className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full max-w-md bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
        />
      </div>
      
      <div className="mb-4 space-x-2">
        <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">+ Group</button>
        <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">+ Assignment</button>
        <select className="border border-gray-300 dark:border-gray-600 px-2 py-1 rounded text-sm bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100">
          <option>Publish All</option>
          <option>Unpublish All</option>
        </select>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">📚 ASSIGNMENTS</h3>
          <ul className="ml-4 space-y-2">
            <li>
              <Link 
                href={`/courses/${courseId}/assignments/a1`}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Assignment 1
              </Link>
              <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">Not available until Sep 18 at 12:00am</span>
            </li>
            <li>
              <Link 
                href={`/courses/${courseId}/assignments/a2`}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Assignment 2
              </Link>
              <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">Due Sep 23 at 11:59pm</span>
            </li>
            <li>
              <Link 
                href={`/courses/${courseId}/assignments/a3`}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Assignment 3
              </Link>
              <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">Due Sep 30 at 11:59pm</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">📝 QUIZZES</h3>
          <ul className="ml-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Quiz 1 <span className="text-gray-500 dark:text-gray-400 text-sm">Due Sep 20 at 11:59pm</span></li>
            <li>Quiz 2 <span className="text-gray-500 dark:text-gray-400 text-sm">Due Sep 27 at 11:59pm</span></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">🎯 EXAMS</h3>
          <ul className="ml-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Midterm Exam <span className="text-gray-500 dark:text-gray-400 text-sm">Due Oct 15 at 11:59pm</span></li>
            <li>Final Exam <span className="text-gray-500 dark:text-gray-400 text-sm">Due Dec 10 at 11:59pm</span></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">📁 PROJECT</h3>
          <ul className="ml-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Final Project <span className="text-gray-500 dark:text-gray-400 text-sm">Due Dec 15 at 11:59pm</span></li>
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
          {renderAssignments()}
        </div>
      </div>
    </div>
  );
}