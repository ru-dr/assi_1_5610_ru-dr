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
  Plus,
  Search,
  GripVertical,
  EllipsisVertical,
  Check,
  Ban,
  Link as LinkIcon,
  Tv,
  Calendar,
  Bell,
  Edit,
  Trash2,
  CheckCircle,
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
      id: 1,
      title: "Week 0 - INTRO",
      status: "Completed",
      lessons: [
        {
          id: 1,
          type: "assignment",
          title: "LEARNING MODULE",
          points: 0,
          due: null,
        },
        {
          id: 2,
          type: "assignment",
          title: "LEARNING OBJECTIVES",
          points: 0,
          due: null,
        },
        {
          id: 3,
          type: "reading",
          title: "READING",
          points: 0,
          due: null,
        },
        {
          id: 4,
          type: "assignment",
          title: "SLIDES",
          points: 0,
          due: null,
        },
      ],
    },
    {
      id: 2,
      title: "Week 1 - COURSE INTRO, HTML, CSS, BOOTSTRAP",
      status: "Completed",
      lessons: [
        {
          id: 5,
          type: "assignment",
          title: "LEARNING OBJECTIVES",
          points: 0,
          due: null,
        },
        {
          id: 6,
          type: "reading",
          title: "READING",
          points: 0,
          due: null,
        },
        {
          id: 7,
          type: "assignment",
          title: "SLIDES",
          points: 0,
          due: null,
        },
        {
          id: 8,
          type: "assignment",
          title: "HTML",
          points: 0,
          due: null,
        },
        {
          id: 9,
          type: "assignment",
          title: "CSS",
          points: 0,
          due: null,
        },
      ],
    },
    {
      id: 3,
      title: "Week 2 - FORMATTING USER INTERFACES WITH HTML AND CSS",
      status: "In Progress",
      lessons: [
        {
          id: 10,
          type: "assignment",
          title: "LEARNING OBJECTIVES",
          points: 0,
          due: null,
        },
        {
          id: 11,
          type: "reading",
          title: "LESSON",
          points: 0,
          due: null,
        },
      ],
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
              <span className="text-gray-700">Modules</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setExpandedModules([])}
              className="px-3 py-1.5 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded border border-gray-300"
            >
              {expandedModules.length > 0 ? "Collapse All" : "Expand All"}
            </button>
            <button className="px-3 py-1.5 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded border border-gray-300">
              View Progress
            </button>
            <div className="relative group">
              <button className="px-3 py-1.5 text-sm text-white bg-red-600 hover:bg-red-700 rounded flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                Publish All
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="hidden group-hover:block absolute top-full left-0 mt-1 w-64 bg-white border border-gray-300 rounded shadow-lg z-50">
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Publish all
                </button>
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2">
                  <Ban className="w-4 h-4" />
                  Unpublish all
                </button>
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Publish all modules and items
                </button>
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2">
                  <Ban className="w-4 h-4" />
                  Unpublish all modules and items
                </button>
              </div>
            </div>
            <button className="px-3 py-1.5 text-sm text-white bg-red-600 hover:bg-red-700 rounded flex items-center gap-1">
              <Plus className="w-4 h-4" />
              Module
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
          <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 mb-4 rounded"
              >
                <div className="bg-gray-200 border-b border-gray-300">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-3">
                      <GripVertical className="w-5 h-5 text-gray-500" />
                      <button
                        onClick={() => toggleModule(index)}
                        className="flex items-center space-x-2"
                      >
                        {expandedModules.includes(index) ? (
                          <ChevronDown className="w-5 h-5 text-gray-700" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-700" />
                        )}
                      </button>
                      <h3 className="font-semibold text-gray-900">
                        {module.title}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 hover:bg-gray-300 rounded">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-300 rounded">
                        <Trash2 className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-300 rounded">
                        <Plus className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-300 rounded">
                        <EllipsisVertical className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {expandedModules.includes(index) && (
                  <div>
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className="flex items-center justify-between py-3 px-6 hover:bg-gray-50 border-b border-gray-200 last:border-b-0 border-l-4 border-l-green-600"
                      >
                        <div className="flex items-center space-x-3">
                          <GripVertical className="w-4 h-4 text-gray-400" />
                          <FileText className="w-5 h-5 text-gray-600" />
                          <span className="text-gray-800 text-sm">
                            {lesson.title}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-1 hover:bg-gray-200 rounded">
                            <Edit className="w-4 h-4 text-gray-500" />
                          </button>
                          <button className="p-1 hover:bg-gray-200 rounded">
                            <Trash2 className="w-4 h-4 text-gray-500" />
                          </button>
                          <button className="p-1 hover:bg-gray-200 rounded">
                            <EllipsisVertical className="w-4 h-4 text-gray-500" />
                          </button>
                        </div>
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
                onClick={() => setExpandedModules([])}
                className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded text-left"
              >
                {expandedModules.length > 0 ? "Collapse All" : "Expand All"}
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
  );
}
