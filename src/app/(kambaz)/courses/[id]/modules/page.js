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
  
  // [Rest of the JSX remains exactly the same as before - the entire return statement]
