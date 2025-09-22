import Link from 'next/link';

export default function Signup() {
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
          <Link 
            href="/account/signin"
            className="block w-full text-left p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            Signin
          </Link>
        </li>
        <li>
          <Link 
            href="/account/signup"
            className="block w-full text-left p-2 rounded bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100"
          >
            Signup
          </Link>
        </li>
        <li>
          <Link 
            href="/account/profile"
            className="block w-full text-left p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0a0a0a]">
      {renderNavigation()}
      <div className="flex flex-1 bg-white dark:bg-[#0a0a0a]">
        {renderAccountNav()}
        <div className="flex-1 p-4 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
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
                <Link 
                  href="/account/profile"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 inline-block"
                >
                  Signup
                </Link>
                <Link 
                  href="/account/signin"
                  className="text-blue-500 hover:text-blue-700 inline-block px-4 py-2"
                >
                  Signin
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}