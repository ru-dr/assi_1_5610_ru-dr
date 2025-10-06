"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getCourseById } from "../../coursesData";
import {
  Menu,
  X,
  Home,
  FileText,
  Users,
  MessageSquare,
  BarChart3,
  Video,
  HelpCircle,
} from "lucide-react";

export default function CourseGrades() {
  const params = useParams();
  const courseId = params.id;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const course = getCourseById(courseId);

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Course Not Found
          </h1>
          <Link href="/dashboard" className="text-red-600 hover:underline">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const courseNav = [
    { name: "Home", icon: Home, href: `/courses/${courseId}` },
    { name: "Modules", icon: FileText, href: `/courses/${courseId}/modules` },
    {
      name: "Piazza",
      icon: MessageSquare,
      href: `/courses/${courseId}/piazza`,
    },
    { name: "Zoom Meetings", icon: Video, href: `/courses/${courseId}/zoom` },
    {
      name: "Assignments",
      icon: FileText,
      href: `/courses/${courseId}/assignments`,
    },
    { name: "Quizzes", icon: HelpCircle, href: `/courses/${courseId}/quizzes` },
    {
      name: "Grades",
      icon: BarChart3,
      href: `/courses/${courseId}/grades`,
      active: true,
    },
    { name: "People", icon: Users, href: `/courses/${courseId}/people` },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <div
        className={`fixed top-0 h-full w-64 bg-white border-r border-gray-300 z-40 transition-all duration-300 ease-in-out shadow-lg ${
          sidebarOpen ? "left-[100px]" : "left-[-256px]"
        }`}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="font-semibold text-sm text-gray-900">
            {course.fullName}
          </h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <nav className="p-2">
          {courseNav.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded ${
                  item.active
                    ? "bg-white text-gray-900 border-l-4 border-black"
                    : "text-red-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white border-b border-gray-300 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-600 hover:text-gray-800"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="text-sm">
              <span className="text-red-600 font-medium">
                {course.fullName}
              </span>
              <span className="text-gray-400 mx-2">›</span>
              <span className="text-gray-700">Grades</span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-green-100 p-4 rounded border border-green-300 mb-6">
            <p className="text-sm text-green-800">
              📊 View your grades and track your progress throughout the course.
            </p>
          </div>
          <div className="bg-white rounded border border-gray-300 shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Assignment
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                    Score
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                    Out of
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Assignment 1
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900">
                    95
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900">
                    100
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-green-600 font-semibold">
                    95%
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 text-sm text-gray-900">Quiz 1</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900">
                    18
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900">
                    20
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-green-600 font-semibold">
                    90%
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Assignment 2
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900">
                    88
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900">
                    100
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-yellow-600 font-semibold">
                    88%
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-300 bg-gray-50">
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                    Total
                  </td>
                  <td className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                    201
                  </td>
                  <td className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                    220
                  </td>
                  <td className="px-4 py-3 text-center text-sm text-green-600 font-bold">
                    91.4%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
