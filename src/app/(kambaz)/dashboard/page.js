"use client";

import Link from "next/link";
import { MoreVertical, Plus, Trash2, Edit } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  addNewCourse,
  deleteCourse as deleteCoursefromStore,
  updateCourse as updateCourseInStore,
  setCourses,
} from "../../store/coursesReducer";
import * as coursesClient from "../courses/client";

export default function Dashboard() {
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrollments, setEnrollments] = useState([]);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [newCourse, setNewCourse] = useState({
    name: "",
    number: "",
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    department: "",
    credits: 4,
    description: "",
  });

  // Fetch courses and enrollments on component mount
  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Refetch courses when toggle changes
  useEffect(() => {
    fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAllCourses]);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);
      let fetchedCourses;
      if (showAllCourses) {
        fetchedCourses = await coursesClient.fetchAllCourses();
      } else {
        try {
          fetchedCourses = await coursesClient.findMyCourses();
        } catch (err) {
          // If 401 (not authenticated), fallback to all courses
          if (err.response?.status === 401) {
            fetchedCourses = await coursesClient.fetchAllCourses();
            setShowAllCourses(true);
          } else {
            throw err;
          }
        }
      }
      dispatch(setCourses(fetchedCourses || []));
    } catch (err) {
      console.error('Error fetching courses:', err);
      dispatch(setCourses([]));
      setError('Failed to load courses. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchEnrollments = async () => {
    try {
      const userEnrollments = await coursesClient.findMyEnrollments();
      setEnrollments(userEnrollments.map(e => e.course));
    } catch (err) {
      // Silently fail if not authenticated - user can still browse courses
      if (err.response?.status !== 401) {
        console.error('Error fetching enrollments:', err);
      }
    }
  };

  const handleAddCourse = async () => {
    try {
      const createdCourse = await coursesClient.createCourse(newCourse);
      dispatch(setCourses([...courses, createdCourse]));
      setShowAddForm(false);
      setNewCourse({
        name: "",
        number: "",
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        department: "",
        credits: 4,
        description: "",
      });
    } catch (err) {
      console.error('Error creating course:', err);
      alert('Failed to create course. Please try again.');
    }
  };

  const handleDeleteCourse = async (courseId, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this course?")) {
      try {
        await coursesClient.deleteCourse(courseId);
        dispatch(setCourses(courses.filter(c => c._id !== courseId)));
      } catch (err) {
        console.error('Error deleting course:', err);
        alert('Failed to delete course. Please try again.');
      }
    }
  };

  const handleEditCourse = (course, e) => {
    e.preventDefault();
    e.stopPropagation();
    setEditingCourse(course);
  };

  const handleUpdateCourse = async () => {
    try {
      const updatedCourse = await coursesClient.updateCourse(editingCourse);
      dispatch(setCourses(courses.map(c => 
        c._id === updatedCourse._id ? updatedCourse : c
      )));
      setEditingCourse(null);
    } catch (err) {
      console.error('Error updating course:', err);
      alert('Failed to update course. Please try again.');
    }
  };

  const handleEnroll = async (courseId, e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await coursesClient.enrollInCourse(courseId);
      // Update enrollments state immediately
      setEnrollments([...enrollments, courseId]);
      
      // Refetch both enrollments and courses to ensure sync
      await fetchEnrollments();
      await fetchCourses();
      
      alert('Successfully enrolled in course!');
    } catch (err) {
      console.error('Error enrolling:', err);
      if (err.response?.status === 401) {
        alert('Please sign in to enroll in courses.');
      } else {
        alert('Failed to enroll in course.');
      }
    }
  };

  const handleUnenroll = async (courseId, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (confirm('Are you sure you want to unenroll from this course?')) {
      try {
        await coursesClient.unenrollFromCourse(courseId);
        // Update enrollments state immediately
        setEnrollments(enrollments.filter(id => id !== courseId));
        
        // Refetch both enrollments and courses to ensure sync
        await fetchEnrollments();
        await fetchCourses();
        
        alert('Successfully unenrolled from course.');
      } catch (err) {
        console.error('Error unenrolling:', err);
        if (err.response?.status === 401) {
          alert('Please sign in to unenroll from courses.');
        } else {
          alert('Failed to unenroll from course.');
        }
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingCourse(null);
  };

  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading courses...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={fetchCourses}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-3 sm:p-6">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-normal text-gray-800">
              Dashboard
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              {showAllCourses ? 'All Courses (Enrolled & Not Enrolled)' : 'My Enrolled Courses Only'}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowAllCourses(!showAllCourses)}
              className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              {showAllCourses ? 'Show My Courses' : 'Show All Courses'}
            </button>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              id="wd-add-new-course-click"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <Plus className="w-5 h-5" />
              Add Course
            </button>
          </div>
        </div>

        {showAddForm && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Add New Course
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Course Code (e.g., CS5610)"
                value={newCourse.number}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, number: e.target.value, code: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <input
                type="text"
                placeholder="Course Name"
                value={newCourse.name}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, name: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <input
                type="date"
                placeholder="Start Date"
                value={newCourse.startDate}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, startDate: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <input
                type="date"
                placeholder="End Date"
                value={newCourse.endDate}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, endDate: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <input
                type="text"
                placeholder="Department"
                value={newCourse.department}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, department: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <input
                type="number"
                placeholder="Credits"
                value={newCourse.credits}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, credits: parseInt(e.target.value) })
                }
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <textarea
                placeholder="Description"
                value={newCourse.description}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, description: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black col-span-2"
                rows="3"
              />
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleAddCourse}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save Course
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

        {editingCourse && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4 text-black">
                Edit Course
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Course Code (e.g., CS5610)"
                  value={editingCourse.code || editingCourse.number || ''}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, code: e.target.value, number: e.target.value })
                  }
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <input
                  type="text"
                  placeholder="Course Name"
                  value={editingCourse.name || ''}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, name: e.target.value })
                  }
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <input
                  type="date"
                  value={editingCourse.startDate?.split('T')[0] || ''}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, startDate: e.target.value })
                  }
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <input
                  type="date"
                  value={editingCourse.endDate?.split('T')[0] || ''}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, endDate: e.target.value })
                  }
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <input
                  type="text"
                  placeholder="Department"
                  value={editingCourse.department || ''}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, department: e.target.value })
                  }
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <input
                  type="number"
                  placeholder="Credits"
                  value={editingCourse.credits || 4}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, credits: parseInt(e.target.value) })
                  }
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <textarea
                  placeholder="Description"
                  value={editingCourse.description || ''}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, description: e.target.value })
                  }
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black col-span-2"
                  rows="3"
                />
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={handleUpdateCourse}
                  id="wd-update-course-click"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Update Course
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {courses.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                {showAllCourses ? 'No courses available.' : 'No enrolled courses yet.'}
              </p>
              {!showAllCourses && (
                <button
                  onClick={() => setShowAllCourses(true)}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Browse All Courses
                </button>
              )}
            </div>
          ) : (
            courses.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded overflow-hidden hover:shadow-lg transition-shadow relative"
              >
                <Link href={`/courses/${course._id}`}>
                  <div className="h-32 bg-blue-500 relative">
                    <button className="absolute top-2 right-2 p-1 text-white hover:bg-black/20 rounded">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                    {enrollments.includes(course._id) && (
                      <div className="absolute top-2 left-2 px-2 py-1 bg-green-600 text-white text-xs rounded">
                        ✓ Enrolled
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-blue-600 font-medium text-sm mb-1 hover:underline">
                      {course.code || course.number || course.name}
                    </h3>
                    <p className="text-xs text-gray-600 mb-1">
                      {course.fullName || course.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {course.startDate ? new Date(course.startDate).toLocaleDateString() : 'N/A'}
                    </p>
                  </div>
                </Link>
                <div className="border-t border-gray-200 px-4 py-2 flex justify-between items-center bg-white">
                  <div className="flex space-x-2 items-center">
                    {enrollments.includes(course._id) ? (
                      <button
                        onClick={(e) => handleUnenroll(course._id, e)}
                        className="px-3 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
                        title="Click to Unenroll"
                      >
                        Unenroll
                      </button>
                    ) : (
                      <button
                        onClick={(e) => handleEnroll(course._id, e)}
                        className="px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700"
                        title="Click to Enroll"
                      >
                        Enroll
                      </button>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={(e) => handleEditCourse(course, e)}
                      id="wd-edit-course-click"
                      className="text-blue-500 hover:text-blue-700 p-1"
                      title="Edit Course"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => handleDeleteCourse(course._id, e)}
                      id="wd-delete-course-click"
                      className="text-red-500 hover:text-red-700 p-1"
                      title="Delete Course"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
