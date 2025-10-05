import Link from "next/link";

export default function Calendar() {
  const events = [
    {
      id: 1,
      title: "A1 - ENV + HTML Due",
      date: "2025-09-23",
      type: "assignment",
      course: "CS5610",
    },
    {
      id: 2,
      title: "Q1 - HTML Quiz",
      date: "2025-09-20",
      type: "quiz",
      course: "CS5610",
    },
    {
      id: 3,
      title: "Midterm Exam",
      date: "2025-10-15",
      type: "exam",
      course: "CS5800",
    },
    {
      id: 4,
      title: "Project Proposal Due",
      date: "2025-10-30",
      type: "project",
      course: "CS6750",
    },
  ];

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
              className="block hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors"
            >
              📚 Courses
            </Link>
          </li>
          <li>
            <Link
              href="/calendar"
              className="block bg-gray-300 dark:bg-gray-700 p-2 rounded"
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

  const getEventTypeColor = (type) => {
    switch (type) {
      case "assignment":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
      case "quiz":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      case "exam":
        return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200";
      case "project":
        return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200";
      default:
        return "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200";
    }
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0a0a0a]">
      {renderNavigation()}
      <div className="flex-1 p-6 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Calendar
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-600 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {event.title}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${getEventTypeColor(event.type)}`}
                    >
                      {event.type.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    📅 {event.date} | 📚 {event.course}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Quick Actions
            </h2>
            <div className="bg-white dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-600 rounded-lg p-4">
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600">
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    📝 Add Event
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Create a new calendar event
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600">
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    📊 View Month
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Switch to monthly view
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600">
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    🔄 Sync with Course
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Import course deadlines
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            This Week
          </h2>
          <div className="bg-white dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
            <div className="grid grid-cols-7 gap-0">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="p-3 border-r border-gray-200 dark:border-gray-600 last:border-r-0 bg-gray-50 dark:bg-gray-700"
                >
                  <div className="font-medium text-center text-gray-900 dark:text-gray-100">
                    {day}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-0">
              {Array.from({ length: 7 }, (_, i) => i + 15).map((date) => (
                <div
                  key={date}
                  className="h-24 p-2 border-r border-t border-gray-200 dark:border-gray-600 last:border-r-0"
                >
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {date}
                  </div>
                  {date === 20 && (
                    <div className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-1 rounded mt-1">
                      Q1 Quiz
                    </div>
                  )}
                  {date === 23 && (
                    <div className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-1 rounded mt-1">
                      A1 Due
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
