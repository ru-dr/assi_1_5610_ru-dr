"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
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
  CheckCircle,
  Calendar as CalendarIcon,
  ChevronDown,
  ChevronRight,
  Bell,
  BarChart2,
  Link as LinkIcon,
} from "lucide-react";
import { getCourseById } from "../coursesData";

export default function CourseHome() {
  const params = useParams();
  const courseId = params.id;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedModules, setExpandedModules] = useState({
    1: true,
    2: true,
    3: true,
  });

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
    { name: "Home", icon: Home, href: `/courses/${courseId}`, active: true },
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
    { name: "Grades", icon: BarChart3, href: `/courses/${courseId}/grades` },
    { name: "People", icon: Users, href: `/courses/${courseId}/people` },
  ];

  const todoItems = [
    {
      id: 1,
      title: "Q6",
      course: course.title,
      points: 18,
      dueDate: "Nov 10 at 11:59pm",
    },
    {
      id: 2,
      title: "Lecture Wed 05 & 07",
      course: course.title,
      dueDate: "Nov 12 at 3pm",
    },
    {
      id: 3,
      title: "Assignment 1",
      course: course.title,
      dueDate: "Nov 14 at 1pm",
    },
    {
      id: 4,
      title: "Quiz 3",
      course: course.title,
      dueDate: "Nov 14 at 2pm",
    },
  ];

  const recentFeedback = [
    { id: 1, title: "Q2", course: course.fullName, score: "22 out of 23" },
    { id: 2, title: "Q1", course: course.fullName, score: "27 out of 29" },
    { id: 3, title: "A1", course: course.fullName, score: "99.68%" },
  ];

  const modules = [
    {
      id: 1,
      title: "Resources",
      items: [
        { type: "link", title: "Syllabus", icon: "🔗" },
        { type: "document", title: "Office Hours" },
        { type: "document", title: "Piazza Hours" },
        { type: "link", title: "Piazza", icon: "🔗" },
        { type: "document", title: "Final Project" },
        { type: "link", title: "WebDev TA", icon: "🔗" },
      ],
    },
    {
      id: 2,
      title: "GITHUB",
      items: [
        { type: "link", title: "Jose's GitHub username: jannunzi", icon: "🔗" },
      ],
    },
    {
      id: 3,
      title: "TEXTBOOK",
      items: [
        {
          type: "link",
          title: "Developing Full Stack Next.js Web Applications",
          icon: "🔗",
        },
      ],
    },
  ];

  const toggleModule = (moduleId) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

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
            <p className="text-sm text-gray-600">Modules</p>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="flex h-full">
            <div className="flex-1 p-6 bg-gray-50">
              {modules.map((module) => (
                <div
                  key={module.id}
                  className="bg-white border border-gray-300 mb-4"
                >
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full flex items-center p-4 bg-gray-200 hover:bg-gray-300 text-left"
                  >
                    <div className="flex items-center space-x-2">
                      {expandedModules[module.id] ? (
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                      )}
                      <h3 className="font-semibold text-gray-800">
                        {module.title}
                      </h3>
                    </div>
                  </button>

                  {expandedModules[module.id] && (
                    <div className="border-t border-gray-200">
                      {module.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-3 py-3 px-6 hover:bg-gray-50 border-b border-gray-200 last:border-b-0 border-l-4 border-l-green-600"
                        >
                          {item.type === "link" ? (
                            <>
                              <LinkIcon className="w-4 h-4 text-gray-600" />
                              <Link
                                href="#"
                                className="text-red-600 hover:underline text-sm flex-1"
                              >
                                {item.title}
                              </Link>
                              <span className="text-gray-400 text-sm">⤴</span>
                            </>
                          ) : (
                            <>
                              <FileText className="w-4 h-4 text-gray-600" />
                              <span className="text-gray-800 text-sm flex-1">
                                {item.title}
                              </span>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="w-80 bg-white border-l border-gray-300 overflow-y-auto">
              <div className="p-4 border-b border-gray-200 space-y-2">
                <button
                  onClick={() => {
                    const allExpanded =
                      Object.keys(expandedModules).length > 0 &&
                      Object.values(expandedModules).every((v) => v);
                    if (allExpanded) {
                      setExpandedModules({});
                    } else {
                      setExpandedModules({ 1: true, 2: true, 3: true });
                    }
                  }}
                  className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded text-left"
                >
                  {Object.keys(expandedModules).length > 0 &&
                  Object.values(expandedModules).every((v) => v)
                    ? "Collapse All"
                    : "Expand All"}
                </button>
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
                <div className="space-y-4">
                  {todoItems.map((item) => (
                    <div
                      key={item.id}
                      className="border-l-2 border-red-600 pl-3 relative"
                    >
                      <button
                        className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full flex items-center justify-center hover:bg-gray-50"
                        title="Dismiss"
                      >
                        <X className="w-3 h-3 text-gray-400 hover:text-gray-700" />
                      </button>
                      <div className="text-sm">
                        <div className="flex items-start space-x-1">
                          <CalendarIcon className="w-3.5 h-3.5 text-gray-500 mt-0.5 flex-shrink-0" />
                          <Link
                            href="#"
                            className="text-red-600 hover:underline font-medium"
                          >
                            {item.title}
                          </Link>
                        </div>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                          {item.course}
                        </p>
                        {item.points && (
                          <p className="text-xs text-gray-600 mt-0.5">
                            {item.points} points
                          </p>
                        )}
                        {item.dueDate && (
                          <p className="text-xs text-gray-600 mt-0.5">
                            {item.dueDate}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Recent Feedback
                </h3>
                <div className="space-y-3">
                  {recentFeedback.map((item) => (
                    <div key={item.id} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <div className="text-sm">
                        <Link
                          href="#"
                          className="text-red-600 hover:underline font-medium"
                        >
                          {item.title}
                        </Link>
                        <p className="text-xs text-gray-600 mt-1">
                          {item.course}
                        </p>
                        <p className="text-xs text-gray-600 mt-0.5">
                          {item.score}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
