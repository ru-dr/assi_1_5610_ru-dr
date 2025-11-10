"use client";

import Link from "next/link";
import { MoreVertical, Plus, Trash2, Edit } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  addNewCourse,
  deleteCourse,
  updateCourse,
  setCourse,
} from "../../store/coursesReducer";

export default function Dashboard() {
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [newCourse, setNewCourse] = useState({
    code: "",
    name: "",
    fullName: "",
    title: "",
    term: "",
    color: "bg-blue-500",
    image: null,
    instructor: "",
  });

  const handleAddCourse = () => {
    dispatch(addNewCourse(newCourse));
    setShowAddForm(false);
    setNewCourse({
      code: "",
      name: "",
      fullName: "",
      title: "",
      term: "",
      color: "bg-blue-500",
      image: null,
      instructor: "",
    });
  };

  const handleDeleteCourse = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this course?")) {
      dispatch(deleteCourse(id));
    }
  };

  const handleEditCourse = (course, e) => {
    e.preventDefault();
    e.stopPropagation();
    setEditingCourse(course);
  };

  const handleUpdateCourse = () => {
    dispatch(updateCourse(editingCourse));
    setEditingCourse(null);
  };

  const handleCancelEdit = () => {
    setEditingCourse(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-3 sm:p-6">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-normal text-gray-800">
            Dashboard
          </h1>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            id="wd-add-new-course-click"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <Plus className="w-5 h-5" />
            Add Course
          </button>
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
                value={newCourse.code}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, code: e.target.value })
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
                type="text"
                placeholder="Full Name"
                value={newCourse.fullName}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, fullName: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <input
                type="text"
                placeholder="Course Title"
                value={newCourse.title}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, title: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <input
                type="text"
                placeholder="Term"
                value={newCourse.term}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, term: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <input
                type="text"
                placeholder="Instructor"
                value={newCourse.instructor}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, instructor: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <select
                value={newCourse.color}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, color: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              >
                <option value="bg-blue-500">Blue</option>
                <option value="bg-purple-900">Purple</option>
                <option value="bg-green-700">Green</option>
                <option value="bg-red-500">Red</option>
                <option value="bg-yellow-500">Yellow</option>
              </select>
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
                  placeholder="Course Code"
                  value={editingCourse.code}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, code: e.target.value })
                  }
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <input
                  type="text"
                  placeholder="Course Name"
                  value={editingCourse.name}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, name: e.target.value })
                  }
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={editingCourse.fullName}
                  onChange={(e) =>
                    setEditingCourse({
                      ...editingCourse,
                      fullName: e.target.value,
                    })
                  }
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <input
                  type="text"
                  placeholder="Course Title"
                  value={editingCourse.title}
                  onChange={(e) =>
                    setEditingCourse({
                      ...editingCourse,
                      title: e.target.value,
                    })
                  }
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <input
                  type="text"
                  placeholder="Term"
                  value={editingCourse.term}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, term: e.target.value })
                  }
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <input
                  type="text"
                  placeholder="Instructor"
                  value={editingCourse.instructor}
                  onChange={(e) =>
                    setEditingCourse({
                      ...editingCourse,
                      instructor: e.target.value,
                    })
                  }
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <select
                  value={editingCourse.color}
                  onChange={(e) =>
                    setEditingCourse({
                      ...editingCourse,
                      color: e.target.value,
                    })
                  }
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                >
                  <option value="bg-blue-500">Blue</option>
                  <option value="bg-purple-900">Purple</option>
                  <option value="bg-green-700">Green</option>
                  <option value="bg-red-500">Red</option>
                  <option value="bg-yellow-500">Yellow</option>
                </select>
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
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded overflow-hidden hover:shadow-lg transition-shadow relative"
            >
              <Link href={`/courses/${course.id}`}>
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
                  <p className="text-xs text-gray-600 mb-1">
                    {course.fullName}
                  </p>
                  <p className="text-xs text-gray-500">{course.term}</p>
                </div>
              </Link>
              <div className="border-t border-gray-200 px-4 py-2 flex justify-between items-center bg-white">
                <div className="flex space-x-3">
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
                    onClick={(e) => handleDeleteCourse(course.id, e)}
                    id="wd-delete-course-click"
                    className="text-red-500 hover:text-red-700 p-1"
                    title="Delete Course"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
