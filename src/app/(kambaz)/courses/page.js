"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Star, X, ArrowUpDown } from "lucide-react";

function SidebarHandler({ setSidebarOpen }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("sidebar") === "true") {
      setSidebarOpen(true);
      router.replace("/courses", { scroll: false });
    }
  }, [searchParams, router, setSidebarOpen]);

  return null;
}

function CoursesContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const courses = [
    {
      id: 1,
      favorite: false,
      color: "bg-blue-500",
      name: "CS5010 Program Design Paradigms (Boston) Fall 2025",
      nickname: "",
      term: "202610_1 Fall 2025 Semeste...",
      enrolled: "Student",
      published: "Yes",
    },
    {
      id: 2,
      favorite: false,
      color: "bg-purple-900",
      name: "CS5610 18616 Web Development SEC 04 Fall 2025 [BOS-1-TR]",
      nickname: "",
      term: "202610_1 Fall 2025 Semeste...",
      enrolled: "Student",
      published: "Yes",
    },
    {
      id: 3,
      favorite: false,
      color: "bg-gray-700",
      name: "Fall 2025 - Career Preparation/Co-op Acceptance Procedures/Co-o...",
      nickname: "",
      term: "",
      enrolled: "Student",
      published: "Yes",
    },
    {
      id: 4,
      favorite: false,
      color: "bg-green-700",
      name: "Khoury College New Master's Student Welcome Page",
      nickname: "",
      term: "Group Courses Term",
      enrolled: "Student",
      published: "Yes",
    },
    {
      id: 5,
      favorite: false,
      color: "bg-gray-400",
      name: "CS5011 18546 Recitation For CS 5010 SEC 12 Fall 2025 [BOS-1-TR]",
      nickname: "",
      term: "202610_1 Fall 2025 Semeste...",
      enrolled: "Student",
      published: "No",
    },
  ];

  const pastCourses = [
    {
      id: 6,
      favorite: false,
      color: "bg-teal-600",
      name: "Master's and Professional Doctorate Orientation",
      nickname: "",
      term: "Group Courses Term",
      enrolled: "Student",
      published: "Yes",
    },
  ];

  return (
    <div className="bg-white min-h-screen relative">
      <Suspense fallback={null}>
        <SidebarHandler setSidebarOpen={setSidebarOpen} />
      </Suspense>
      <div
        className={`fixed top-0 h-full w-80 bg-white border-r border-gray-300 p-4 z-40 transition-all duration-300 ease-in-out shadow-lg ${
          sidebarOpen ? "left-[100px]" : "left-[-320px]"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Courses</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-600 hover:text-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-6">
          <Link
            href="/courses"
            className="text-red-600 hover:underline text-sm font-medium"
          >
            All Courses
          </Link>
        </div>

        <div className="space-y-2">
          <Link
            href="/courses/1"
            className={`block p-2 rounded text-sm ${
              pathname === "/courses/1"
                ? "bg-red-50 border-l-4 border-red-600"
                : "hover:bg-gray-100"
            }`}
          >
            <div className="font-medium text-gray-900">
              CS5010 Program Design Paradigms (Boston) Fall 2025
            </div>
            <div className="text-xs text-gray-600">
              Term: 202610_1 Fall 2025 Semester Full Term
            </div>
          </Link>

          <Link
            href="/courses/2"
            className={`block p-2 rounded text-sm ${
              pathname === "/courses/2"
                ? "bg-red-50 border-l-4 border-red-600"
                : "hover:bg-gray-100"
            }`}
          >
            <div className="font-medium text-gray-900">
              CS5610 18616 Web Development SEC 04 Fall 2025 [BOS-1-TR]
            </div>
            <div className="text-xs text-gray-600">
              Term: 202610_1 Fall 2025 Semester Full Term
            </div>
          </Link>

          <Link
            href="/courses/3"
            className={`block p-2 rounded text-sm ${
              pathname === "/courses/3"
                ? "bg-red-50 border-l-4 border-red-600"
                : "hover:bg-gray-100"
            }`}
          >
            <div className="font-medium text-gray-900">
              Fall 2025 - Career Preparation/Co-op Acceptance Procedures/Co-op
              Success Resources
            </div>
            <div className="text-xs text-gray-600">
              Career.Prep.Coop.Success.FA...
            </div>
          </Link>

          <Link
            href="/courses/4"
            className={`block p-2 rounded text-sm ${
              pathname === "/courses/4"
                ? "bg-red-50 border-l-4 border-red-600"
                : "hover:bg-gray-100"
            }`}
          >
            <div className="font-medium text-gray-900">
              Khoury College New Master&apos;s Student Welcome Page
            </div>
            <div className="text-xs text-gray-600">
              Term: Group Courses Term
            </div>
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Welcome to your courses! To customize the list of courses, click on
            the &quot;All Courses&quot; link and star the courses to display.
          </p>
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-normal text-gray-800 mb-6">All Courses</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Favorite</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Course</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Nickname</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Term</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Enrolled as</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Published</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr
                  key={course.id}
                  className={`border-b border-gray-200 hover:bg-gray-50 ${index === courses.length - 1 ? "bg-gray-100" : ""}`}
                >
                  <td className="py-3 px-4">
                    <button className="text-gray-400 hover:text-yellow-500">
                      <Star className="w-5 h-5" />
                    </button>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-1 h-8 ${course.color}`}></div>
                      <Link
                        href={`/courses/${course.id}`}
                        className="text-red-600 hover:underline text-sm"
                      >
                        {course.name}
                      </Link>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {course.nickname}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {course.term}
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <Link href="#" className="text-blue-600 hover:underline">
                      {course.enrolled}
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <span
                      className={
                        course.published === "Yes"
                          ? "text-gray-700"
                          : "text-red-600"
                      }
                    >
                      {course.published}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-normal text-gray-800 mt-8 mb-4">
          Past Enrollments
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Favorite</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Course</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Nickname</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Term</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Enrolled as</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Published</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {pastCourses.map((course) => (
                <tr
                  key={course.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">
                    <button className="text-gray-400 hover:text-yellow-500">
                      <Star className="w-5 h-5" />
                    </button>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-1 h-8 ${course.color}`}></div>
                      <Link
                        href={`/courses/${course.id}`}
                        className="text-red-600 hover:underline text-sm"
                      >
                        {course.name}
                      </Link>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {course.nickname}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {course.term}
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <Link href="#" className="text-blue-600 hover:underline">
                      {course.enrolled}
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {course.published}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function Courses() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CoursesContent />
    </Suspense>
  );
}
