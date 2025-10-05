import Link from "next/link";

export default function CourseZoom({ params }) {
  const courseId = params.id;

  // Static course data
  const coursesData = {
    1: { id: 1, title: "CS5610 Web Development", instructor: "Prof. Johnson" },
    2: { id: 2, title: "CS5800 Algorithms", instructor: "Prof. Smith" },
    3: {
      id: 3,
      title: "CS6750 Human Computer Interaction",
      instructor: "Prof. Brown",
    },
    4: {
      id: 4,
      title: "CS5500 Software Engineering",
      instructor: "Prof. Davis",
    },
  };

  const course = coursesData[parseInt(courseId)];

  const renderNavigation = () => (
    <nav className="w-64 bg-gray-100 dark:bg-[#0a0a0a] text-gray-900 dark:text-white p-4 border-r border-gray-300 dark:border-gray-600">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Kambaz</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="https://northeastern.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors"
            >
              🏫 NEU
            </a>
          </li>
          <li>
            <Link
              href="/account"
              className="block hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors"
            >
              👤 Account
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="block hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors"
            >
              📊 Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/courses"
              className="block bg-gray-300 dark:bg-gray-700 p-2 rounded"
            >
              📚 Courses
            </Link>
          </li>
          <li>
            <Link
              href="/calendar"
              className="block hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors"
            >
              📅 Calendar
            </Link>
          </li>
          <li>
            <Link
              href="/inbox"
              className="block hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors"
            >
              📧 Inbox
            </Link>
          </li>
          <li>
            <Link
              href="/labs"
              className="block hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors"
            >
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
        {course ? course.title : "Loading..."}
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
            className="block w-full text-left p-2 rounded bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100"
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

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0a0a0a]">
      {renderNavigation()}
      <div className="flex flex-1 bg-white dark:bg-[#0a0a0a]">
        {renderCourseNav()}
        <div className="flex-1 text-gray-900 dark:text-gray-100 p-6">
          <h2 className="text-2xl font-bold mb-6">Zoom - Virtual Classroom</h2>
          <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded border border-blue-300 dark:border-blue-700 mb-6">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              🎥 Join our virtual classroom for lectures, office hours, and
              study sessions.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white dark:bg-[#171717] p-4 rounded border border-gray-300 dark:border-gray-600">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                📅 Upcoming Sessions
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">
                      Weekly Lecture
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Monday 6:00 PM - 8:45 PM
                    </p>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
