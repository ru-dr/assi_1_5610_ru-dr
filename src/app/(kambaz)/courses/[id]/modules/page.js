"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getCourseById } from "../../coursesData";
import {
  Menu,
  X,
  Home,
  ChevronDown,
  ChevronRight,
  FileText,
  Users,
  MessageSquare,
  BarChart3,
  Video,
  HelpCircle,
  Bell,
  Tv,
  Calendar,
  GripVertical,
  Ellipsis,
} from "lucide-react";

export default function CourseModules() {
  const params = useParams();
  const courseId = params.id;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedModules, setExpandedModules] = useState([0, 1, 2, 3]);

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

  const toggleModule = (index) => {
    setExpandedModules((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const courseNav = [
    { name: "Home", icon: Home, href: `/courses/${courseId}` },
    {
      name: "Modules",
      icon: FileText,
      href: `/courses/${courseId}/modules`,
      active: true,
    },
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
    { name: "Grades", icon: BarChart3, href: `/courses/${courseId}/grades` },
    { name: "People", icon: Users, href: `/courses/${courseId}/people` },
  ];

  const modules = [
    {
      title: "Module 0: Technical Resources and Syllabus",
      lessons: [{ title: "Technical Resources", icon: FileText }],
    },
    {
      title: "Module 1: Design Explorations and Testing",
      lessons: [{ title: "The Essence of Objects", icon: FileText }],
    },
    {
      title: "Module 2: Review of Java",
      lessons: [{ title: "Java Safari", icon: FileText }],
    },
    {
      title: "Module 3: Interface and Class Design",
      lessons: [{ title: "Interface and Class Design", icon: FileText }],
    },
    {
      title: "Module 4: Abstraction",
      lessons: [],
    },
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
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
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
              <span className="text-gray-700">Modules</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50">
              Collapse All
            </button>
            <button
              className="p-2 text-gray-600 hover:bg-gray-50 rounded"
              title="View Course Stream"
            >
              <Tv className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-600 hover:bg-gray-50 rounded"
              title="Course Analytics"
            >
              <BarChart3 className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-600 hover:bg-gray-50 rounded"
              title="View Course Calendar"
            >
              <Calendar className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-600 hover:bg-gray-50 rounded"
              title="View Course Notifications"
            >
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="flex h-full">
            <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-300 mb-4"
                >
                  <button
                    onClick={() => toggleModule(index)}
                    className="w-full flex items-center p-4 hover:bg-gray-50 text-left"
                  >
                    <div className="flex items-center space-x-2">
                      {expandedModules.includes(index) ? (
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                      )}
                      <h3 className="font-semibold text-gray-800">
                        {module.title}
                      </h3>
                    </div>
                  </button>

                  {expandedModules.includes(index) && (
                    <div className="border-t border-gray-200">
                      {module.lessons.map((lesson, lessonIndex) => {
                        const LessonIcon = lesson.icon;
                        return (
                          <div
                            key={lessonIndex}
                            className="flex items-center space-x-3 py-3 px-6 hover:bg-gray-50 border-b border-gray-200 last:border-b-0"
                          >
                            <LessonIcon className="w-4 h-4 text-gray-600" />
                            <span className="text-gray-800 text-sm flex-1">
                              {lesson.title}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="w-80 bg-white border-l border-gray-300 overflow-y-auto">
              <div className="p-4 border-b border-gray-200 space-y-2">
                <button
                  onClick={() => setExpandedModules([])}
                  className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded text-left"
                >
                  Collapse All
                </button>
                <button className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded text-left flex items-center">
                  <Tv className="w-4 h-4 mr-2" />
                  View Course Stream
                </button>
                <button className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded text-left flex items-center">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Course Analytics
                </button>
                <button className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded text-left flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
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
