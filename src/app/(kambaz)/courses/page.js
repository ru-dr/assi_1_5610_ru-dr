'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Courses() {
  const [courseView, setCourseView] = useState('home');
  const [selectedAssignment, setSelectedAssignment] = useState(null);

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
      <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">CS5610 Web Development</h3>
      <ul className="space-y-2">
        <li>
          <button 
            onClick={() => {setCourseView('home'); setSelectedAssignment(null);}}
            className={`block w-full text-left p-2 rounded ${
              courseView === 'home' 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' 
                : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            🏠 Home
          </button>
        </li>
        <li>
          <button 
            onClick={() => {setCourseView('modules'); setSelectedAssignment(null);}}
            className={`block w-full text-left p-2 rounded ${
              courseView === 'modules' 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' 
                : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            📚 Modules
          </button>
        </li>
        <li>
          <button 
            onClick={() => {setCourseView('piazza'); setSelectedAssignment(null);}}
            className={`block w-full text-left p-2 rounded ${
              courseView === 'piazza' 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' 
                : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            💬 Piazza
          </button>
        </li>
        <li>
          <button 
            onClick={() => {setCourseView('zoom'); setSelectedAssignment(null);}}
            className={`block w-full text-left p-2 rounded ${
              courseView === 'zoom' 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' 
                : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            📹 Zoom
          </button>
        </li>
        <li>
          <button 
            onClick={() => {setCourseView('quizzes'); setSelectedAssignment(null);}}
            className={`block w-full text-left p-2 rounded ${
              courseView === 'quizzes' 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' 
                : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            📝 Quizzes
          </button>
        </li>
        <li>
          <button 
            onClick={() => {setCourseView('assignments'); setSelectedAssignment(null);}}
            className={`block w-full text-left p-2 rounded ${
              courseView === 'assignments' 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' 
                : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            📋 Assignments
          </button>
        </li>
        <li>
          <button 
            onClick={() => {setCourseView('grades'); setSelectedAssignment(null);}}
            className={`block w-full text-left p-2 rounded ${
              courseView === 'grades' 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' 
                : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            📊 Grades
          </button>
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
            <li>• HTML Basics</li>
            <li>• CSS Fundamentals</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-[#0a0a0a] p-4 rounded border border-gray-300 dark:border-gray-600">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Week 2 - JavaScript</h3>
          <ul className="ml-4 space-y-1 text-gray-700 dark:text-gray-300">
            <li>• JavaScript Basics</li>
            <li>• DOM Manipulation</li>
            <li>• Event Handling</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderModules = () => (
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
              <li>📖 HTML Basics Reading</li>
            </ul>
          </div>
        </div>
        
        <div className="border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-[#0a0a0a]">
          <div className="bg-gray-100 dark:bg-[#171717] p-4 border-b border-gray-300 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Module 2: Web Fundamentals</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>📄 CSS Fundamentals</li>
              <li>📺 JavaScript Introduction</li>
              <li>🔗 Practice Exercises</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPiazza = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Piazza - Discussion Forum</h2>
      
      <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded border border-orange-300 dark:border-orange-700 mb-6">
        <p className="text-sm text-orange-800 dark:text-orange-200">
          📢 Welcome to the CS5610 discussion forum! Ask questions and collaborate with your classmates.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-white dark:bg-[#171717] p-4 rounded border border-gray-300 dark:border-gray-600">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">📌 Assignment 1 Questions</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">Posted by Student A - 2 hours ago</p>
          <p className="text-gray-700 dark:text-gray-300">Can someone help clarify the HTML requirements for A1?</p>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">3 replies • 12 views</div>
        </div>
        
        <div className="bg-white dark:bg-[#171717] p-4 rounded border border-gray-300 dark:border-gray-600">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">💡 CSS Best Practices</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">Posted by TA - 1 day ago</p>
          <p className="text-gray-700 dark:text-gray-300">Here are some CSS best practices for your upcoming assignments...</p>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">8 replies • 45 views</div>
        </div>
      </div>
    </div>
  );

  const renderZoom = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Zoom - Virtual Classroom</h2>
      
      <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded border border-blue-300 dark:border-blue-700 mb-6">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          🎥 Join our virtual classroom for lectures, office hours, and study sessions.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white dark:bg-[#171717] p-4 rounded border border-gray-300 dark:border-gray-600">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">📅 Upcoming Sessions</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">Weekly Lecture</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Monday 6:00 PM - 8:45 PM</p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Join</button>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">Office Hours</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Wednesday 2:00 PM - 4:00 PM</p>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Join</button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#171717] p-4 rounded border border-gray-300 dark:border-gray-600">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">📼 Recorded Sessions</h3>
          <div className="space-y-2">
            <div className="p-2 border-l-4 border-blue-400">
              <p className="text-gray-900 dark:text-gray-100">Week 1 - Course Introduction</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Duration: 2h 45m</p>
            </div>
            <div className="p-2 border-l-4 border-blue-400">
              <p className="text-gray-900 dark:text-gray-100">Week 2 - HTML Fundamentals</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Duration: 2h 30m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuizzes = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Quizzes</h2>
      
      <div className="mb-6">
        <button className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600">+ Quiz</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Import</button>
      </div>

      <div className="space-y-4">
        <div className="bg-white dark:bg-[#171717] p-4 rounded border border-gray-300 dark:border-gray-600">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">📝 Q1 - HTML Basics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Due: September 20, 2025 at 11:59 PM</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Points: 20 | Questions: 10 | Time Limit: 30 minutes</p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">✅ Available</p>
            </div>
            <div className="space-x-2">
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm">Edit</button>
              <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm">Delete</button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#171717] p-4 rounded border border-gray-300 dark:border-gray-600">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">📝 Q2 - CSS Fundamentals</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Due: September 27, 2025 at 11:59 PM</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Points: 25 | Questions: 12 | Time Limit: 45 minutes</p>
              <p className="text-sm text-orange-600 dark:text-orange-400 mt-1">⏳ Not yet available</p>
            </div>
            <div className="space-x-2">
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm">Edit</button>
              <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGrades = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Grades</h2>
      
      <div className="mb-6">
        <div className="bg-gray-100 dark:bg-[#171717] p-4 rounded border border-gray-300 dark:border-gray-600">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Course Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-600 dark:text-gray-400">Current Grade</p>
              <p className="text-xl font-bold text-green-600 dark:text-green-400">92.5%</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Total Points</p>
              <p className="text-xl font-bold text-gray-900 dark:text-gray-100">185/200</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Letter Grade</p>
              <p className="text-xl font-bold text-blue-600 dark:text-blue-400">A-</p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#171717]">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-3 text-left border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">Assignment</th>
              <th className="p-3 text-left border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">Due Date</th>
              <th className="p-3 text-left border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">Points</th>
              <th className="p-3 text-left border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-3 text-gray-900 dark:text-gray-100">A1 - ENV + HTML</td>
              <td className="p-3 text-gray-600 dark:text-gray-400">Sep 23, 2025</td>
              <td className="p-3 text-gray-600 dark:text-gray-400">100</td>
              <td className="p-3 text-green-600 dark:text-green-400 font-semibold">95/100</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-3 text-gray-900 dark:text-gray-100">Q1 - HTML Basics</td>
              <td className="p-3 text-gray-600 dark:text-gray-400">Sep 20, 2025</td>
              <td className="p-3 text-gray-600 dark:text-gray-400">20</td>
              <td className="p-3 text-green-600 dark:text-green-400 font-semibold">18/20</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-3 text-gray-900 dark:text-gray-100">A2 - CSS + BOOTSTRAP</td>
              <td className="p-3 text-gray-600 dark:text-gray-400">Sep 30, 2025</td>
              <td className="p-3 text-gray-600 dark:text-gray-400">100</td>
              <td className="p-3 text-gray-500 dark:text-gray-400">-</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-3 text-gray-900 dark:text-gray-100">Q2 - CSS Fundamentals</td>
              <td className="p-3 text-gray-600 dark:text-gray-400">Sep 27, 2025</td>
              <td className="p-3 text-gray-600 dark:text-gray-400">25</td>
              <td className="p-3 text-gray-500 dark:text-gray-400">-</td>
            </tr>
          </tbody>
        </table>
      </div>
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
              <button 
                onClick={() => setSelectedAssignment('a1')}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                A1 - ENV + HTML
              </button>
              <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">Not available until Sep 18 at 12:00am</span>
            </li>
            <li>
              <button 
                onClick={() => setSelectedAssignment('a2')}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                A2 - CSS + BOOTSTRAP
              </button>
              <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">Due Sep 23 at 11:59pm</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">📝 QUIZZES</h3>
          <ul className="ml-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Q1 - HTML <span className="text-gray-500 dark:text-gray-400 text-sm">Due Sep 20 at 11:59pm</span></li>
            <li>Q2 - CSS <span className="text-gray-500 dark:text-gray-400 text-sm">Due Sep 27 at 11:59pm</span></li>
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

  const renderAssignmentEditor = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Assignment Editor</h2>
      
      <form className="space-y-6 max-w-2xl">
        <div>
          <label htmlFor="assignmentName" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Assignment Name</label>
          <input 
            type="text" 
            id="assignmentName" 
            defaultValue="A1 - ENV + HTML"
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          />
        </div>

        <div>
          <label htmlFor="assignmentDescription" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Description</label>
          <textarea 
            id="assignmentDescription" 
            rows="4"
            defaultValue="This assignment covers environment setup and basic HTML concepts. Students will create their first web page using proper HTML structure and semantic elements."
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          />
        </div>

        <div>
          <label htmlFor="points" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Points</label>
          <input 
            type="number" 
            id="points" 
            defaultValue="100"
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-32 bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          />
        </div>

        <div>
          <label htmlFor="assignmentGroup" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Assignment Group</label>
          <select id="assignmentGroup" className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
            <option>PROJECT</option>
          </select>
        </div>

        <div>
          <label htmlFor="displayGrade" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Display Grade as</label>
          <select id="displayGrade" className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100">
            <option>Percentage</option>
            <option>Points</option>
            <option>Letter Grade</option>
          </select>
        </div>

        <div>
          <label htmlFor="submissionType" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Submission Type</label>
          <select id="submissionType" className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100">
            <option>Online</option>
            <option>On Paper</option>
            <option>No Submission</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Online Entry Options</label>
          <div className="space-y-2">
            <label className="flex items-center text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="mr-2" defaultChecked />
              Text Entry
            </label>
            <label className="flex items-center text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="mr-2" />
              Website URL
            </label>
            <label className="flex items-center text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="mr-2" defaultChecked />
              File Upload
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="assignTo" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Assign to</label>
          <input 
            type="text" 
            id="assignTo" 
            defaultValue="Everyone"
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="dueDate" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Due</label>
            <input 
              type="date" 
              id="dueDate" 
              defaultValue="2025-09-23"
              className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <label htmlFor="availableFrom" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Available from</label>
            <input 
              type="date" 
              id="availableFrom" 
              defaultValue="2025-09-18"
              className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <label htmlFor="availableUntil" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Until</label>
            <input 
              type="date" 
              id="availableUntil" 
              defaultValue="2025-09-30"
              className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        <div className="space-x-4">
          <button type="button" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Save</button>
          <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0a0a0a]">
      {renderNavigation()}
      <div className="flex flex-1 bg-white dark:bg-[#0a0a0a]">
        {renderCourseNav()}
        <div className="flex-1 text-gray-900 dark:text-gray-100">
          {selectedAssignment ? (
            <div>
              <button 
                onClick={() => setSelectedAssignment(null)}
                className="m-6 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                ← Back to Assignments
              </button>
              {renderAssignmentEditor()}
            </div>
          ) : (
            <>
              {courseView === 'home' && renderHome()}
              {courseView === 'modules' && renderModules()}
              {courseView === 'assignments' && renderAssignments()}
              {courseView === 'piazza' && renderPiazza()}
              {courseView === 'zoom' && renderZoom()}
              {courseView === 'quizzes' && renderQuizzes()}
              {courseView === 'grades' && renderGrades()}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
