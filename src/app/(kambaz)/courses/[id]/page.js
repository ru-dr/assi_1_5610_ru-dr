"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import {
  Menu,
  X,
  BarChart2,
  Calendar as CalendarIcon,
  Bell,
} from "lucide-react";
import { getCourseNavigation } from "@/app/(kambaz)/data/courseNavigationData";

export default function CourseHome() {
  const params = useParams();
  const courseId = params.id;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const courses = useSelector((state) => state.courses.courses);
  const course = courses.find((c) => c._id === courseId || c.id === courseId);

  const courseNav = getCourseNavigation(courseId);

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

  return (
    <div className="flex h-screen bg-gray-50">
      <div
        className={`fixed top-14 md:top-0 h-[calc(100%-3.5rem)] md:h-full w-64 bg-white border-r border-gray-300 z-40 transition-all duration-300 ease-in-out shadow-lg ${
          sidebarOpen ? "left-0 md:left-[100px]" : "left-[-256px]"
        }`}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="font-semibold text-sm text-gray-900">
            {course.fullName || course.name}
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
                  item.href === `/courses/${courseId}`
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
        <div className="bg-white border-b border-gray-300 px-3 sm:px-4 py-3 flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 rounded mr-2 sm:mr-3"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          <div className="min-w-0">
            <h1 className="text-red-600 font-medium text-sm sm:text-base truncate">
              {course.fullName || course.name}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600">Home</p>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="flex h-full">
            <div className="flex-1 p-3 sm:p-6 bg-gray-50 overflow-y-auto">
              <div className="bg-white border border-gray-300 p-6 rounded">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {course.code || course.number} - {course.name}
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Course:</strong> {course.fullName || course.name}</p>
                  <p><strong>Term:</strong> {course.term || 'N/A'}</p>
                  <p><strong>Instructor:</strong> {course.instructor || 'N/A'}</p>
                  <p><strong>Credits:</strong> {course.credits || 4}</p>
                  {course.description && (
                    <div>
                      <strong>Description:</strong>
                      <p className="mt-1">{course.description}</p>
                    </div>
                  )}
                  {course.startDate && course.endDate && (
                    <p><strong>Duration:</strong> {new Date(course.startDate).toLocaleDateString()} - {new Date(course.endDate).toLocaleDateString()}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-80 bg-white border-l border-gray-300 overflow-y-auto">
              <div className="p-4 border-b border-gray-200 space-y-2">
                <button className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded text-left flex items-center">
                  <BarChart2 className="w-4 h-4 mr-2" />
                  View Course Stream
                </button>
                <button className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded text-left flex items-center">
                  <BarChart2 className="w-4 h-4 mr-2" />
                  Course Analytics
                </button>
                <button className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded text-left flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  View Course Calendar
                </button>
                <button className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded text-left flex items-center">
                  <Bell className="w-4 h-4 mr-2" />
                  View Course Notifications
                </button>
              </div>

              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">To Do</h3>
                <p className="text-sm text-gray-500">Nothing for now</p>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Recent Feedback
                </h3>
                <p className="text-sm text-gray-500">Nothing for now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
