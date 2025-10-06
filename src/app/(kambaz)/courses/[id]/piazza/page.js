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

export default function CoursePiazza() {
  const params = useParams();
  const courseId = params.id;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Get course data based on ID
  const course = getCourseById(courseId);

  // Fallback if course not found
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
      active: true,
    },
    { name: "Zoom Meetings", icon: Video, href: `/courses/${courseId}/zoom` },
    {
      name: "Assignments",
      icon: FileText,
      href: `/courses/${courseId}/assignments`,
    },
    { name: "Quizzes", icon: HelpCircle, href: `/courses/${courseId}/quizzes` },
    { name: "Grades", icon: BarChart3, href: `/courses/${courseId}/grades` },
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
              <span className="text-gray-700">Piazza</span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-orange-100 p-4 rounded border border-orange-300 mb-6">
            <p className="text-sm text-orange-800">
              📢 Welcome to the {course.fullName} discussion forum! Ask
              questions and collaborate with your classmates.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border border-gray-300 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                📌 Assignment Questions
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Posted by Student A - 2 hours ago
              </p>
              <p className="text-gray-700">
                Can someone help clarify the requirements for the latest
                assignment?
              </p>
              <div className="text-sm text-gray-500 mt-2">
                3 replies • 12 views
              </div>
            </div>
            <div className="bg-white p-4 rounded border border-gray-300 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                💡 Study Group Formation
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Posted by Student B - 5 hours ago
              </p>
              <p className="text-gray-700">
                Looking for students interested in forming a study group for the
                midterm exam.
              </p>
              <div className="text-sm text-gray-500 mt-2">
                7 replies • 28 views
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
