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
  Search,
  Plus,
  GripVertical,
  Ellipsis,
} from "lucide-react";

export default function Assignments() {
  const params = useParams();
  const courseId = params.id;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
      active: true,
    },
    { name: "Quizzes", icon: HelpCircle, href: `/courses/${courseId}/quizzes` },
    { name: "Grades", icon: BarChart3, href: `/courses/${courseId}/grades` },
    { name: "People", icon: Users, href: `/courses/${courseId}/people` },
  ];

  const assignments = [
    { id: "A2", title: "A2", dueDate: "Oct 6 at 11:59pm", points: 375 },
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
        <div className="bg-white border-b border-gray-300 px-4 py-3 flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 rounded mr-3"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-red-600 font-medium">{course.fullName}</h1>
            <p className="text-sm text-gray-600">Assignments</p>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for Assignment"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 text-sm text-gray-700 bg-gray-200 hover:bg-gray-300 rounded flex items-center">
                <Plus className="w-4 h-4 mr-1" />
                Group
              </button>
              <button className="px-4 py-2 text-sm text-white bg-red-600 hover:bg-red-700 rounded flex items-center">
                <Plus className="w-4 h-4 mr-1" />
                Assignment
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-300">
            <div className="flex items-center justify-between p-4 bg-gray-200 border-b border-gray-300">
              <h2 className="font-semibold text-gray-800">
                ▼ Upcoming Assignments
              </h2>
            </div>
            <div>
              {assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="flex items-center border-b border-gray-200 hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3 p-4 flex-1 border-l-4 border-green-600">
                    <GripVertical className="w-4 h-4 text-gray-400" />
                    <FileText className="w-5 h-5 text-gray-600" />
                    <div className="flex-1">
                      <Link
                        href={`/courses/${courseId}/assignments/${assignment.id}`}
                        className="text-red-600 hover:underline font-medium"
                      >
                        {assignment.title}
                      </Link>
                      <div className="text-xs text-gray-600 mt-1">
                        {assignment.availableFrom && (
                          <span>
                            Available until {assignment.availableFrom} |{" "}
                          </span>
                        )}
                        {assignment.notAvailableUntil && (
                          <span className="text-red-600">
                            Not available until {assignment.notAvailableUntil}{" "}
                            |{" "}
                          </span>
                        )}
                        <span>
                          Due {assignment.dueDate} | {assignment.points} pts
                        </span>
                      </div>
                    </div>
                    <Ellipsis className="w-5 h-5 text-gray-600 cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
