'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function CourseModules() {
  const params = useParams();
  const courseId = params.id;

  const coursesData = {
    1: { title: "CS5610 Web Development" },
    2: { title: "CS5800 Algorithms" },
    3: { title: "CS6750 Human Computer Interaction" },
    4: { title: "CS5500 Software Engineering" }
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
            className="block w-full text-left p-2 rounded bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100"
          >
            📚 Modules
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
            href={`/courses/${courseId}/grades`}
            className="block w-full text-left p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            📊 Grades
          </Link>
        </li>
      </ul>
    </div>
  );

  if (!course) {
    return (
      <div className="flex min-h-screen bg-white dark:bg-[#0a0a0a] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Course Not Found</h1>
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
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Modules</h2>
            
            <div className="space-y-6">
              <div className="border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-[#0a0a0a]">
                <div className="bg-gray-100 dark:bg-[#171717] p-4 border-b border-gray-300 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Module 1: Getting Started</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>📄 Course Syllabus</li>
                    <li>📺 Welcome Video</li>
                    <li>📖 Introduction Reading</li>
                  </ul>
                </div>
              </div>
              
              <div className="border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-[#0a0a0a]">
                <div className="bg-gray-100 dark:bg-[#171717] p-4 border-b border-gray-300 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Module 2: Core Concepts</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>📄 Core Fundamentals</li>
                    <li>📺 Lecture Videos</li>
                    <li>🔗 Practice Exercises</li>
                  </ul>
                </div>
              </div>

              <div className="border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-[#0a0a0a]">
                <div className="bg-gray-100 dark:bg-[#171717] p-4 border-b border-gray-300 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Module 3: Advanced Topics</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>📄 Advanced Concepts</li>
                    <li>📺 Expert Sessions</li>
                    <li>🔗 Practical Projects</li>
                    <li>📋 Assessment Materials</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}