"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { getCourseNavigation } from "@/app/(kambaz)/data/courseNavigationData";
import {
  addModule as addModuleAction,
  deleteModule as deleteModuleAction,
  updateModule as updateModuleAction,
  setModules,
} from "@/app/store/modulesReducer";
import * as coursesClient from "@/app/(kambaz)/courses/client";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
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
  FileText,
  BarChart3,
} from "lucide-react";

export default function CourseModules() {
  const params = useParams();
  const courseId = params.id;
  const dispatch = useDispatch();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedModules, setExpandedModules] = useState([0, 1, 2, 3]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingModule, setEditingModule] = useState(null);
  const [newModuleTitle, setNewModuleTitle] = useState("");

  const courses = useSelector((state) => state.courses.courses);
  const allModules = useSelector((state) => state.modules.modules);
  const course = courses.find((c) => c._id === courseId || c.id === courseId);
  const modules = allModules.filter((module) => module.course === courseId);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch modules from backend on mount
  useEffect(() => {
    const fetchModules = async () => {
      try {
        setLoading(true);
        const data = await coursesClient.findModulesForCourse(courseId);
        dispatch(setModules(data));
        setError(null);
      } catch (err) {
        console.error('Error fetching modules:', err);
        setError('Failed to load modules');
      } finally {
        setLoading(false);
      }
    };
    fetchModules();
  }, [courseId, dispatch]);

  const courseNav = getCourseNavigation(courseId);

  const handleAddModule = async () => {
    if (newModuleTitle.trim()) {
      try {
        const newModule = await coursesClient.createModuleForCourse(courseId, {
          name: newModuleTitle,
          description: "New module",
          course: courseId,
        });
        dispatch(addModuleAction({
          ...newModule,
          title: newModule.name,
          status: "Not Started",
          lessons: [],
        }));
        setNewModuleTitle("");
        setShowAddForm(false);
      } catch (err) {
        console.error('Error creating module:', err);
        alert('Failed to create module');
      }
    }
  };

  const handleDeleteModule = async (moduleId) => {
    if (confirm("Are you sure you want to delete this module?")) {
      try {
        await coursesClient.deleteModule(moduleId);
        dispatch(deleteModuleAction(moduleId));
      } catch (err) {
        console.error('Error deleting module:', err);
        alert('Failed to delete module');
      }
    }
  };

  const handleEditModule = (module) => {
    setEditingModule({ ...module });
  };

  const handleUpdateModule = async () => {
    try {
      const updated = await coursesClient.updateModule({
        _id: editingModule._id || editingModule.id,
        name: editingModule.title,
        description: editingModule.description || "Updated module",
        course: courseId,
      });
      dispatch(updateModuleAction({
        ...editingModule,
        ...updated,
        title: updated.name,
      }));
      setEditingModule(null);
    } catch (err) {
      console.error('Error updating module:', err);
      alert('Failed to update module');
    }
  };

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
  return (
    <div className="flex h-screen bg-gray-50">
      <div
        className={`fixed top-14 md:top-0 h-[calc(100%-3.5rem)] md:h-full w-64 bg-white border-r border-gray-300 z-40 transition-all duration-300 ease-in-out shadow-lg ${
          sidebarOpen ? "left-0 md:left-[100px]" : "left-[-256px]"
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
                  item.href === `/courses/${courseId}/modules`
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
        <div className="bg-white border-b border-gray-300 px-3 sm:px-4 py-3 flex items-center justify-between overflow-x-auto">
          <div className="flex items-center space-x-2 sm:space-x-4 min-w-0">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-600 hover:text-gray-800 flex-shrink-0"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div className="text-xs sm:text-sm min-w-0">
              <span className="text-red-600 font-medium truncate block">
                {course.fullName}
              </span>
              <span className="text-gray-400 mx-1 hidden sm:inline">›</span>
              <span className="text-gray-700 hidden sm:inline">Modules</span>
            </div>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <button
              onClick={() => setExpandedModules([])}
              className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded border border-gray-300 whitespace-nowrap"
            >
              {expandedModules.length > 0 ? "Collapse" : "Expand"}
            </button>
            <button className="hidden sm:inline-block px-3 py-1.5 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded border border-gray-300">
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
            <button
              className="px-3 py-1.5 text-sm text-white bg-red-600 hover:bg-red-700 rounded flex items-center gap-1"
              onClick={() => setShowAddForm(!showAddForm)}
              id="wd-add-module-btn"
            >
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
          <div className="flex-1 overflow-y-auto p-3 sm:p-6 bg-gray-50">
            {loading && (
              <div className="bg-white border border-gray-300 mb-4 rounded p-8 text-center">
                <p className="text-gray-600">Loading modules...</p>
              </div>
            )}
            {error && (
              <div className="bg-red-50 border border-red-300 mb-4 rounded p-4">
                <p className="text-red-600">{error}</p>
              </div>
            )}
            {showAddForm && (
              <div className="bg-white border border-gray-300 mb-4 rounded p-4">
                <h3 className="font-semibold mb-3 text-black">
                  Add New Module
                </h3>
                <input
                  type="text"
                  value={newModuleTitle}
                  onChange={(e) => setNewModuleTitle(e.target.value)}
                  placeholder="Module Title"
                  className="w-full px-3 py-2 border border-gray-300 rounded mb-3 bg-white text-black"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleAddModule}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setShowAddForm(false);
                      setNewModuleTitle("");
                    }}
                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {editingModule && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg p-6 max-w-md w-full">
                  <h3 className="font-semibold mb-3 text-black">Edit Module</h3>
                  <input
                    type="text"
                    value={editingModule.title}
                    onChange={(e) =>
                      setEditingModule({
                        ...editingModule,
                        title: e.target.value,
                      })
                    }
                    placeholder="Module Title"
                    className="w-full px-3 py-2 border border-gray-300 rounded mb-3 bg-white text-black"
                  />
                  <select
                    value={editingModule.status}
                    onChange={(e) =>
                      setEditingModule({
                        ...editingModule,
                        status: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded mb-3 bg-white text-black"
                  >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                  <div className="flex gap-2">
                    <button
                      onClick={handleUpdateModule}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => setEditingModule(null)}
                      className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div id="wd-modules">
              {!loading && modules.length === 0 && (
                <div className="bg-white border border-gray-300 rounded p-8 text-center">
                  <p className="text-gray-600 mb-2">No modules yet</p>
                  <p className="text-sm text-gray-500">Click "+ Module" to create your first module</p>
                </div>
              )}
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="wd-module bg-white border border-gray-300 mb-4 rounded"
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
                        <h3 className="wd-title font-semibold text-gray-900">
                          {module.title || module.name}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleEditModule(module)}
                          className="p-1 hover:bg-gray-300 rounded"
                        >
                          <Edit className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          onClick={() => handleDeleteModule(module.id)}
                          className="p-1 hover:bg-gray-300 rounded"
                        >
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
                    <div className="wd-lessons">
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
          </div>

          <div className="hidden xl:block w-80 bg-white border-l border-gray-300 overflow-y-auto">
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
