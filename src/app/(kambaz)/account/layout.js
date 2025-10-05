"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountLayout({ children }) {
  const pathname = usePathname();

  const accountMenuItems = [
    { name: "Signin", href: "/account/signin" },
    { name: "Signup", href: "/account/signup" },
    { name: "Profile", href: "/account/profile" },
    { name: "Notifications", href: "/account/notifications" },
    { name: "Files", href: "/account/files" },
    { name: "Settings", href: "/account/settings" },
    { name: "ePortfolios", href: "/account/eportfolios" },
    { name: "The Hub", href: "/account/hub" },
    { name: "Pearson Access", href: "/account/pearson" },
    { name: "Namecoach", href: "/account/namecoach" },
    { name: "Qwickly Course Tools", href: "/account/qwickly" },
    { name: "Follett Discover (Bookstore)", href: "/account/bookstore" },
    { name: "Course Evaluations", href: "/account/evaluations" },
    { name: "Harmonize Settings", href: "/account/harmonize" },
    { name: "Global Announcements", href: "/account/announcements" },
  ];

  return (
    <div className="flex h-screen bg-white">
      <aside className="w-64 bg-white border-r border-gray-300 overflow-y-auto">
        <div className="p-4">
          <div className="mb-6 text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-3xl font-semibold text-blue-600">RP</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              Rudra Jayeshkumar Patel
            </h2>
            <button className="mt-2 px-4 py-1 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded">
              Logout
            </button>
          </div>
          <nav className="space-y-1">
            {accountMenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-sm rounded ${
                  pathname === item.href
                    ? "bg-gray-100 text-red-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
            <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded w-full">
              <span>🌓</span>
              <span>Use High Contrast UI</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded w-full">
              <span>📖</span>
              <span>Use a Dyslexia Friendly Font</span>
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
