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
import { setCourses } from "@/app/store/coursesReducer";
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
  const [addingLessonToModule, setAddingLessonToModule] = useState(null);
  const [newLessonName, setNewLessonName] = useState("");
  const [editingLesson, setEditingLesson] = useState(null);

  const courses = useSelector((state) => state.courses.courses);
  const allModules = useSelector((state) => state.modules.modules);
  const [course, setCourse] = useState(null);
  const modules = allModules.filter((module) => module.course === courseId);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch course and modules from backend on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Check if course exists in Redux store
        const existingCourse = courses.find(
          (c) => c._id === courseId || c.id === courseId
        );

        if (existingCourse) {
          setCourse(existingCourse);
        } else {
          // If not in store, fetch all courses and find the one we need
          const allCourses = await coursesClient.fetchAllCourses();
          dispatch(setCourses(allCourses));
          
          const foundCourse = allCourses.find(
            (c) => c._id === courseId || c.id === courseId
          );
          
          setCourse(foundCourse);
        }

        // Fetch modules
        const data = await coursesClient.findModulesForCourse(courseId);
        dispatch(setModules(data));
        setError(null);
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, [courseId, courses, dispatch]);

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
    setEditingModule({ 
      ...module, 
      title: module.name || module.title,
      status: module.status || "Not Started"
    });
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

  const handleAddLesson = async (moduleId) => {
    if (newLessonName.trim()) {
      try {
        const moduleToUpdate = modules.find(m => (m._id || m.id) === moduleId);
        const updatedLessons = [...(moduleToUpdate.lessons || []), { 
          _id: Date.now().toString(), 
          name: newLessonName 
        }];
        
        const updated = await coursesClient.updateModule({
          _id: moduleId,
          name: moduleToUpdate.name,
          lessons: updatedLessons,
          course: courseId,
        });
        
        dispatch(updateModuleAction({
          ...moduleToUpdate,
          ...updated,
          title: updated.name,
          lessons: updatedLessons,
        }));
        
        setAddingLessonToModule(null);
        setNewLessonName("");
      } catch (err) {
        console.error('Error adding lesson:', err);
        alert('Failed to add lesson');
      }
    }
  };

  const handleDeleteLesson = async (moduleId, lessonId) => {
    if (confirm("Are you sure you want to delete this lesson?")) {
      try {
        const moduleToUpdate = modules.find(m => (m._id || m.id) === moduleId);
        const updatedLessons = (moduleToUpdate.lessons || []).filter(l => l._id !== lessonId);
        
        const updated = await coursesClient.updateModule({
          _id: moduleId,
          name: moduleToUpdate.name,
          lessons: updatedLessons,
          course: courseId,
        });
        
        dispatch(updateModuleAction({
          ...moduleToUpdate,
          ...updated,
          title: updated.name,
          lessons: updatedLessons,
        }));
      } catch (err) {
        console.error('Error deleting lesson:', err);
        alert('Failed to delete lesson');
      }
    }
  };

  const handleEditLesson = (moduleId, lesson) => {
    setEditingLesson({ moduleId, ...lesson });
  };

  const handleUpdateLesson = async () => {
    try {
      const moduleToUpdate = modules.find(m => (m._id || m.id) === editingLesson.moduleId);
      const updatedLessons = (moduleToUpdate.lessons || []).map(l => 
        l._id === editingLesson._id ? { ...l, name: editingLesson.name } : l
      );
      
      const updated = await coursesClient.updateModule({
        _id: editingLesson.moduleId,
        name: moduleToUpdate.name,
        lessons: updatedLessons,
        course: courseId,
      });
      
      dispatch(updateModuleAction({
        ...moduleToUpdate,
        ...updated,
        title: updated.name,
        lessons: updatedLessons,
      }));
      
      setEditingLesson(null);
    } catch (err) {
      console.error('Error updating lesson:', err);
      alert('Failed to update lesson');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-gray-50">
      {/* Module Add Form */}
      {showAddForm && (
        <div className="mb-4 p-4 bg-white rounded shadow">
          <input
            type="text"
            value={newModuleTitle}
            onChange={(e) => setNewModuleTitle(e.target.value)}
            placeholder="Module Title"
            className="w-full px-3 py-2 border rounded mb-2"
          />
          <div className="flex gap-2">
            <button
              onClick={handleAddModule}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Add Module
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Module Edit Modal */}
      {editingModule && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Edit Module</h3>
            <input
              type="text"
              value={editingModule.title}
              onChange={(e) => setEditingModule({ ...editingModule, title: e.target.value })}
              placeholder="Module Title"
              className="w-full px-3 py-2 border rounded mb-2"
            />
            <input
              type="text"
              value={editingModule.description || ''}
              onChange={(e) => setEditingModule({ ...editingModule, description: e.target.value })}
              placeholder="Description"
              className="w-full px-3 py-2 border rounded mb-4"
            />
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

      {/* Lesson Edit Modal */}
      {editingLesson && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Edit Lesson</h3>
            <input
              type="text"
              value={editingLesson.name}
              onChange={(e) => setEditingLesson({ ...editingLesson, name: e.target.value })}
              placeholder="Lesson Name"
              className="w-full px-3 py-2 border rounded mb-4"
            />
            <div className="flex gap-2">
              <button
                onClick={handleUpdateLesson}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Update
              </button>
              <button
                onClick={() => setEditingLesson(null)}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modules List */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Modules</h2>
          <button
            onClick={() => setShowAddForm(true)}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Module
          </button>
        </div>

        <div className="space-y-2">
          {modules.map((module, index) => (
            <div key={module._id || module.id} className="bg-white rounded shadow">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2 flex-1">
                  <button onClick={() => toggleModule(index)}>
                    {expandedModules.includes(index) ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                  <GripVertical className="w-5 h-5 text-gray-400" />
                  <span className="font-semibold">{module.title || module.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEditModule(module)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Edit className="w-4 h-4 text-blue-600" />
                  </button>
                  <button
                    onClick={() => handleDeleteModule(module._id || module.id)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                  <EllipsisVertical className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              {expandedModules.includes(index) && (
                <div className="p-4">
                  <div className="space-y-2">
                    {(module.lessons || []).map((lesson) => (
                      <div key={lesson._id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                        <div className="flex items-center gap-2">
                          <GripVertical className="w-4 h-4 text-gray-400" />
                          <FileText className="w-4 h-4 text-green-600" />
                          <span>{lesson.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEditLesson(module._id || module.id, lesson)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Edit className="w-3 h-3 text-blue-600" />
                          </button>
                          <button
                            onClick={() => handleDeleteLesson(module._id || module.id, lesson._id)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Trash2 className="w-3 h-3 text-red-600" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {addingLessonToModule === (module._id || module.id) ? (
                    <div className="mt-2 flex gap-2">
                      <input
                        type="text"
                        value={newLessonName}
                        onChange={(e) => setNewLessonName(e.target.value)}
                        placeholder="Lesson Name"
                        className="flex-1 px-3 py-1 border rounded text-sm"
                      />
                      <button
                        onClick={() => handleAddLesson(module._id || module.id)}
                        className="px-3 py-1 bg-green-600 text-white rounded text-sm"
                      >
                        Add
                      </button>
                      <button
                        onClick={() => {
                          setAddingLessonToModule(null);
                          setNewLessonName("");
                        }}
                        className="px-3 py-1 bg-gray-400 text-white rounded text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setAddingLessonToModule(module._id || module.id)}
                      className="mt-2 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" />
                      Add Lesson
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
