import Link from "next/link";

export default function Inbox() {
  const messages = [
    {
      id: 1,
      from: "Prof. Johnson",
      subject: "Assignment 1 Feedback",
      preview:
        "Great work on your HTML structure. Here are some suggestions for improvement...",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      from: "CS5610 Notifications",
      subject: "New Module Available",
      preview:
        "Module 3: JavaScript Fundamentals is now available for viewing...",
      time: "1 day ago",
      unread: true,
    },
    {
      id: 3,
      from: "Teaching Assistant",
      subject: "Office Hours Reminder",
      preview:
        "Reminder: Office hours this week are Tuesday 2-4 PM and Thursday 10-12 PM...",
      time: "2 days ago",
      unread: false,
    },
    {
      id: 4,
      from: "Kambaz System",
      subject: "Grade Posted",
      preview:
        "Your grade for Quiz Q1 has been posted. Check your gradebook for details...",
      time: "3 days ago",
      unread: false,
    },
    {
      id: 5,
      from: "Study Group",
      subject: "Weekly Study Session",
      preview:
        "Join us this Friday at 3 PM in the library for our weekly study session...",
      time: "1 week ago",
      unread: false,
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
              className="block hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors"
            >
              📅 Calendar
            </Link>
          </li>
          <li>
            <Link
              href="/inbox"
              className="block bg-gray-300 dark:bg-gray-700 p-2 rounded"
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

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0a0a0a]">
      {renderNavigation()}
      <div className="flex-1 p-6 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Inbox
          </h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            ✏️ Compose
          </button>
        </div>

        <div className="flex gap-6">
          <div className="w-1/3">
            <div className="bg-white dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-600 rounded-lg">
              <div className="p-4 border-b border-gray-300 dark:border-gray-600">
                <h2 className="font-semibold text-gray-900 dark:text-gray-100">
                  Folders
                </h2>
              </div>
              <div className="p-2">
                <ul className="space-y-1">
                  <li>
                    <button className="w-full text-left p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100">
                      📥 Inbox (2)
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                      📤 Sent
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                      📋 Drafts
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                      🗑️ Trash
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-600 rounded-lg">
              <div className="p-4 border-b border-gray-300 dark:border-gray-600">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-gray-900 dark:text-gray-100">
                    Messages
                  </h2>
                  <div className="flex space-x-2">
                    <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                      🔄
                    </button>
                    <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                      🗑️
                    </button>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-600">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                      message.unread ? "bg-blue-50 dark:bg-blue-950" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          {message.unread && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                          <p
                            className={`text-sm font-medium ${
                              message.unread
                                ? "text-gray-900 dark:text-gray-100"
                                : "text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {message.from}
                          </p>
                        </div>
                        <p
                          className={`text-sm mb-1 ${
                            message.unread
                              ? "font-semibold text-gray-900 dark:text-gray-100"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {message.subject}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                          {message.preview}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-500 ml-2 flex-shrink-0">
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-white dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-600 rounded-lg p-4">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="p-3 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="text-lg mb-1">📝</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    New Message
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Compose a message
                  </div>
                </button>
                <button className="p-3 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="text-lg mb-1">👥</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Contact Instructor
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Send to professor
                  </div>
                </button>
                <button className="p-3 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="text-lg mb-1">🔔</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Notifications
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Manage alerts
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
