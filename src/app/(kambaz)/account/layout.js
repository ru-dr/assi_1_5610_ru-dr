"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function AccountLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const accountMenuItems = [
    { name: "Signin", href: "/account/signin" },
    { name: "Signup", href: "/account/signup" },
    { name: "Profile", href: "/account/profile" },
  ];

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const user = await client.profile();
      setCurrentUser(user);
    } catch (err) {
      setCurrentUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await client.signout();
      setCurrentUser(null);
      router.push("/account/signin");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const getInitials = (user) => {
    if (!user) return "??";
    if (user.firstName && user.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }
    return user.username?.substring(0, 2).toUpperCase() || "??";
  };

  const getDisplayName = (user) => {
    if (!user) return "Guest User";
    if (user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
    return user.username;
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white">
      <aside className="w-full md:w-64 bg-white border-r border-gray-300 overflow-y-auto md:block">
        <div className="p-4">
          {!loading && (
            <div className="mb-6 text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-3xl font-semibold text-blue-600">
                  {getInitials(currentUser)}
                </span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                {getDisplayName(currentUser)}
              </h2>
              {currentUser ? (
                <button 
                  onClick={handleLogout}
                  className="mt-2 px-4 py-1 text-sm text-white bg-red-600 hover:bg-red-700 rounded"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/account/signin"
                  className="mt-2 inline-block px-4 py-1 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded"
                >
                  Sign In
                </Link>
              )}
            </div>
          )}
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
