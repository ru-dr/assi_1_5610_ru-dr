'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Account() {
  const [accountView, setAccountView] = useState('signin');

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
            <Link href="/account" className="block bg-gray-300 dark:bg-gray-700 p-2 rounded">
              👤 Account
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="block hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors">
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

  const renderAccountNav = () => (
    <div className="bg-gray-100 dark:bg-[#0a0a0a] p-4 border-r border-gray-300 dark:border-gray-600 w-48">
      <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Account</h3>
      <ul className="space-y-2">
        <li>
          <button 
            onClick={() => setAccountView('signin')}
            className={`block w-full text-left p-2 rounded ${
              accountView === 'signin' 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' 
                : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Signin
          </button>
        </li>
        <li>
          <button 
            onClick={() => setAccountView('signup')}
            className={`block w-full text-left p-2 rounded ${
              accountView === 'signup' 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' 
                : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Signup
          </button>
        </li>
        <li>
          <button 
            onClick={() => setAccountView('profile')}
            className={`block w-full text-left p-2 rounded ${
              accountView === 'profile' 
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' 
                : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Profile
          </button>
        </li>
      </ul>
    </div>
  );

  const renderSignin = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Signin</h2>
      <form className="space-y-4 max-w-md">
        <div>
          <label htmlFor="signinUsername" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username:</label>
          <input 
            type="text" 
            id="signinUsername" 
            name="username" 
            defaultValue="john_doe"
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label htmlFor="signinPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password:</label>
          <input 
            type="password" 
            id="signinPassword" 
            name="password" 
            defaultValue="password123"
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          />
        </div>
        <div className="space-x-4">
          <button 
            type="button"
            onClick={() => setAccountView('profile')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Signin
          </button>
          <button 
            type="button"
            onClick={() => setAccountView('signup')}
            className="text-blue-500 hover:text-blue-700"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );

  const renderSignup = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Signup</h2>
      <form className="space-y-4 max-w-md">
        <div>
          <label htmlFor="signupUsername" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username:</label>
          <input 
            type="text" 
            id="signupUsername" 
            name="username" 
            defaultValue="new_user"
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label htmlFor="signupPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password:</label>
          <input 
            type="password" 
            id="signupPassword" 
            name="password" 
            defaultValue="newpassword"
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label htmlFor="verifyPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Verify Password:</label>
          <input 
            type="password" 
            id="verifyPassword" 
            name="verifyPassword" 
            defaultValue="newpassword"
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          />
        </div>
        <div className="space-x-4">
          <button 
            type="button"
            onClick={() => setAccountView('profile')}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Signup
          </button>
          <button 
            type="button"
            onClick={() => setAccountView('signin')}
            className="text-blue-500 hover:text-blue-700"
          >
            Signin
          </button>
        </div>
      </form>
    </div>
  );

  const renderProfile = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Profile</h2>
      <form className="space-y-4 max-w-md">
        <div>
          <label htmlFor="profileUsername" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username:</label>
          <input 
            type="text" 
            id="profileUsername" 
            name="username" 
            defaultValue="john_doe"
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name:</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            defaultValue="John"
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name:</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            defaultValue="Doe"
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label htmlFor="profilePassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password:</label>
          <input 
            type="password" 
            id="profilePassword" 
            name="password" 
            defaultValue="password123"
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label htmlFor="profileDob" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date of Birth:</label>
          <input 
            type="date" 
            id="profileDob" 
            name="dob" 
            defaultValue="1990-01-15"
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label htmlFor="profileEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email:</label>
          <input 
            type="email" 
            id="profileEmail" 
            name="email" 
            defaultValue="john.doe@example.com"
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Role:</label>
          <select 
            id="role" 
            name="role" 
            defaultValue="student"
            className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded w-full bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
            <option value="ta">Teaching Assistant</option>
          </select>
        </div>
        <div>
          <button 
            type="button"
            onClick={() => setAccountView('signin')}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Signout
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0a0a0a]">
      {renderNavigation()}
      <div className="flex flex-1 bg-white dark:bg-[#0a0a0a]">
        {renderAccountNav()}
        <div className="flex-1 p-4 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
          {accountView === 'signin' && renderSignin()}
          {accountView === 'signup' && renderSignup()}
          {accountView === 'profile' && renderProfile()}
        </div>
      </div>
    </div>
  );
}
