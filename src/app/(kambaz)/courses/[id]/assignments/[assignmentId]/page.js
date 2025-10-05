import Link from "next/link";

export default function AssignmentEditor({ params }) {
  const courseId = params.id;
  const assignmentId = params.assignmentId;

  const coursesData = {
    1: {
      id: 1,
      title: "CS5610 Web Development",
      description: "Full-stack web development using modern technologies",
      instructor: "Prof. Johnson",
    },
    2: {
      id: 2,
      title: "CS5800 Algorithms",
      description: "Data structures and algorithmic problem solving",
      instructor: "Prof. Smith",
    },
    3: {
      id: 3,
      title: "CS6750 Human Computer Interaction",
      description: "Design and evaluation of user interfaces",
      instructor: "Prof. Brown",
    },
    4: {
      id: 4,
      title: "CS5500 Software Engineering",
      description: "Software development methodologies and practices",
      instructor: "Prof. Davis",
    },
  };

  // Static assignment data
  const assignmentsData = {
    a1: {
      id: "a1",
      name: "Assignment 1",
      description:
        "This assignment covers the core concepts of the course. Students will demonstrate their understanding through practical implementation.",
      points: 100,
      dueDate: "2025-09-23",
      availableDate: "2025-09-18",
    },
    a2: {
      id: "a2",
      name: "Assignment 2",
      description:
        "Advanced assignment building on previous concepts with more complex requirements and implementation challenges.",
      points: 150,
      dueDate: "2025-09-30",
      availableDate: "2025-09-25",
    },
    a3: {
      id: "a3",
      name: "Assignment 3",
      description:
        "Final project assignment integrating all course concepts into a comprehensive application.",
      points: 200,
      dueDate: "2025-10-07",
      availableDate: "2025-10-02",
    },
  };

  const course = coursesData[parseInt(courseId)];
  const assignment = assignmentsData[assignmentId];

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

  const renderAssignmentEditor = () => (
    <div className="p-6">
      <div className="mb-6">
        <Link
          href={`/courses/${courseId}/assignments`}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          ← Back to Assignments
        </Link>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Assignment Editor
      </h2>

      <form className="space-y-6 max-w-2xl">
        <div>
          <label
            htmlFor="assignmentName"
            className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
          >
            Assignment Name
          </label>
          <input
            type="text"
            id="assignmentName"
            defaultValue={assignment ? assignment.name : "New Assignment"}
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          />
        </div>

        <div>
          <label
            htmlFor="assignmentDescription"
            className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
          >
            Description
          </label>
          <textarea
            id="assignmentDescription"
            rows="4"
            defaultValue={
              assignment ? assignment.description : "Assignment description..."
            }
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="points"
              className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
            >
              Points
            </label>
            <input
              type="number"
              id="points"
              defaultValue={assignment ? assignment.points : 100}
              className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="availableDate"
              className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
            >
              Available Date
            </label>
            <input
              type="date"
              id="availableDate"
              defaultValue={
                assignment ? assignment.availableDate : "2025-09-22"
              }
              className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="dueDate"
              className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
            >
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              defaultValue={assignment ? assignment.dueDate : "2025-09-29"}
              className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="assignmentType"
            className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
          >
            Assignment Type
          </label>
          <select
            id="assignmentType"
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          >
            <option value="assignment">Assignment</option>
            <option value="quiz">Quiz</option>
            <option value="exam">Exam</option>
            <option value="project">Project</option>
          </select>
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded border-gray-300 dark:border-gray-600"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Publish Assignment
            </span>
          </label>
        </div>

        <div className="space-x-4">
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save & Publish
          </button>
          <Link
            href={`/courses/${courseId}/assignments`}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 inline-block"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );

  if (!course) {
    return (
      <div className="flex min-h-screen bg-white dark:bg-[#0a0a0a] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Course Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The course you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/courses"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
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
          {renderAssignmentEditor()}
        </div>
      </div>
    </div>
  );
}
