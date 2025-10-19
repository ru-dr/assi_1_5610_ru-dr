"use client";

import Link from "next/link";
import { MoreVertical } from "lucide-react";
import { coursesData } from "@/app/(kambaz)/data/coursesData";

export default function Dashboard() {
  const courses = coursesData;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-3 sm:p-6">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-normal text-gray-800">Dashboard</h1>
          <button className="p-2 hover:bg-gray-200 rounded">
            <MoreVertical className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="bg-white rounded overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div
                className={`h-32 ${course.color || "bg-gray-200"} relative`}
                style={
                  course.image
                    ? {
                        backgroundImage: `url(${course.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : {}
                }
              >
                <button className="absolute top-2 right-2 p-1 text-white hover:bg-black/20 rounded">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-blue-600 font-medium text-sm mb-1 hover:underline">
                  {course.code}
                </h3>
                <p className="text-xs text-gray-600 mb-1">{course.fullName}</p>
                <p className="text-xs text-gray-500">{course.term}</p>
              </div>
              <div className="border-t border-gray-200 px-4 py-2 flex justify-end space-x-3 bg-white">
                <button className="text-gray-400 hover:text-gray-600 p-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-gray-600 p-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-gray-600 p-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
