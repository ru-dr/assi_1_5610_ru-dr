"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { getCourseNavigation } from "@/app/(kambaz)/data/courseNavigationData";
import {
  addAssignment as addAssignmentAction,
  deleteAssignment as deleteAssignmentAction,
  updateAssignment as updateAssignmentAction,
  setAssignments,
} from "@/app/store/assignmentsReducer";
import * as coursesClient from "@/app/(kambaz)/courses/client";
import {
  Menu,
  X,
  Search,
  Plus,
  GripVertical,
  Ellipsis,
  FileText,
  Edit,
  Trash2,
} from "lucide-react";

export default function Assignments() {
  const params = useParams();
  const courseId = params.id;
  const dispatch = useDispatch();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingAssignment, setEditingAssignment] = useState(null);
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    dueDate: "",
    points: 100,
    availableFrom: "",
    description: "",
  });

  const courses = useSelector((state) => state.courses.courses);
  const allAssignments = useSelector((state) => state.assignments.assignments);
  const course = courses.find((c) => c._id === courseId || c.id === courseId);
  const assignments = allAssignments.filter((a) => a.course === courseId);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch assignments from backend on mount
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        setLoading(true);
        const data = await coursesClient.findAssignmentsForCourse(courseId);
        dispatch(setAssignments(data));
        setError(null);
      } catch (err) {
        console.error('Error fetching assignments:', err);
        setError('Failed to load assignments');
      } finally {
        setLoading(false);
      }
    };
    fetchAssignments();
  }, [courseId, dispatch]);

  const courseNav = getCourseNavigation(courseId);

  const handleAddAssignment = async () => {
    if (newAssignment.title.trim()) {
      try {
        const created = await coursesClient.createAssignmentForCourse(courseId, {
          title: newAssignment.title,
          description: newAssignment.description,
          points: newAssignment.points,
          dueDate: newAssignment.dueDate,
          availableFrom: newAssignment.availableFrom,
          course: courseId,
        });
        dispatch(addAssignmentAction({
          ...created,
          course: courseId,
        }));
        setNewAssignment({
          title: "",
          dueDate: "",
          points: 100,
          availableFrom: "",
          description: "",
        });
        setShowAddForm(false);
      } catch (err) {
        console.error('Error creating assignment:', err);
        alert('Failed to create assignment');
      }
    }
  };

  const handleDeleteAssignment = async (assignmentId) => {
    if (confirm("Are you sure you want to delete this assignment?")) {
      try {
        await coursesClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignmentAction(assignmentId));
      } catch (err) {
        console.error('Error deleting assignment:', err);
        alert('Failed to delete assignment');
      }
    }
  };

  const handleEditAssignment = (assignment) => {
    setEditingAssignment({ ...assignment });
  };

  const handleUpdateAssignment = async () => {
    try {
      const updated = await coursesClient.updateAssignment({
        _id: editingAssignment._id || editingAssignment.id,
        title: editingAssignment.title,
        description: editingAssignment.description,
        points: editingAssignment.points,
        dueDate: editingAssignment.dueDate,
        availableFrom: editingAssignment.availableFrom,
        course: courseId,
      });
      dispatch(updateAssignmentAction({
        ...editingAssignment,
        ...updated,
      }));
      setEditingAssignment(null);
    } catch (err) {
      console.error('Error updating assignment:', err);
      alert('Failed to update assignment');
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
                  item.href === `/courses/${courseId}/assignments`
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
        <div className="bg-white border-b border-gray-300 px-3 sm:px-4 py-3 flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 rounded mr-2 sm:mr-3"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          <div className="min-w-0">
            <h1 className="text-red-600 font-medium text-sm sm:text-base truncate">
              {course.fullName}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600">Assignments</p>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-3 sm:p-6">
          {loading && (
            <div className="bg-white border border-gray-300 mb-4 rounded p-8 text-center">
              <p className="text-gray-600">Loading assignments...</p>
            </div>
          )}
          {error && (
            <div className="bg-red-50 border border-red-300 mb-4 rounded p-4">
              <p className="text-red-600">{error}</p>
            </div>
          )}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                id="wd-search-assignment"
                type="text"
                placeholder="Search for Assignment"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-2">
              <button
                id="wd-add-assignment-group"
                className="flex-1 sm:flex-none px-4 py-2 text-sm text-gray-700 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center"
              >
                <Plus className="w-4 h-4 mr-1" />
                Group
              </button>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                id="wd-add-assignment"
                className="flex-1 sm:flex-none px-4 py-2 text-sm text-white bg-red-600 hover:bg-red-700 rounded flex items-center justify-center"
              >
                <Plus className="w-4 h-4 mr-1" />
                Assignment
              </button>
            </div>
          </div>

          {showAddForm && (
            <div className="bg-white border border-gray-300 rounded p-6 mb-4">
              <h2 className="text-xl font-semibold mb-4 text-black">
                Add New Assignment
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Assignment Title"
                  value={newAssignment.title}
                  onChange={(e) =>
                    setNewAssignment({
                      ...newAssignment,
                      title: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <textarea
                  placeholder="Description"
                  value={newAssignment.description}
                  onChange={(e) =>
                    setNewAssignment({
                      ...newAssignment,
                      description: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black"
                  rows="3"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="number"
                    placeholder="Points"
                    value={newAssignment.points}
                    onChange={(e) =>
                      setNewAssignment({
                        ...newAssignment,
                        points: parseInt(e.target.value),
                      })
                    }
                    className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                  />
                  <input
                    type="text"
                    placeholder="Due Date (e.g., Nov 20 at 11:59pm)"
                    value={newAssignment.dueDate}
                    onChange={(e) =>
                      setNewAssignment({
                        ...newAssignment,
                        dueDate: e.target.value,
                      })
                    }
                    className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                  />
                  <input
                    type="text"
                    placeholder="Available From (e.g., Nov 10 at 12:00am)"
                    value={newAssignment.availableFrom}
                    onChange={(e) =>
                      setNewAssignment({
                        ...newAssignment,
                        availableFrom: e.target.value,
                      })
                    }
                    className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={handleAddAssignment}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Save Assignment
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

          {editingAssignment && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4 text-black">
                  Edit Assignment
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Assignment Title"
                    value={editingAssignment.title}
                    onChange={(e) =>
                      setEditingAssignment({
                        ...editingAssignment,
                        title: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black"
                  />
                  <textarea
                    placeholder="Description"
                    value={editingAssignment.description}
                    onChange={(e) =>
                      setEditingAssignment({
                        ...editingAssignment,
                        description: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black"
                    rows="3"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="number"
                      placeholder="Points"
                      value={editingAssignment.points}
                      onChange={(e) =>
                        setEditingAssignment({
                          ...editingAssignment,
                          points: parseInt(e.target.value),
                        })
                      }
                      className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                    />
                    <input
                      type="text"
                      placeholder="Due Date"
                      value={editingAssignment.dueDate}
                      onChange={(e) =>
                        setEditingAssignment({
                          ...editingAssignment,
                          dueDate: e.target.value,
                        })
                      }
                      className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                    />
                    <input
                      type="text"
                      placeholder="Available From"
                      value={editingAssignment.availableFrom}
                      onChange={(e) =>
                        setEditingAssignment({
                          ...editingAssignment,
                          availableFrom: e.target.value,
                        })
                      }
                      className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                    />
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={handleUpdateAssignment}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Update Assignment
                  </button>
                  <button
                    onClick={() => setEditingAssignment(null)}
                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          <div id="wd-assignments" className="bg-white border border-gray-300">
            <div className="flex items-center justify-between p-4 bg-gray-200 border-b border-gray-300">
              <h2
                id="wd-assignments-title"
                className="font-semibold text-gray-800"
              >
                ▼ Upcoming Assignments
              </h2>
            </div>
            <div id="wd-assignment-list">
              {!loading && assignments.length === 0 && (
                <div className="p-8 text-center">
                  <p className="text-gray-600 mb-2">No assignments yet</p>
                  <p className="text-sm text-gray-500">Click "+ Assignment" to create your first assignment</p>
                </div>
              )}
              {assignments.map((assignment) => (
                <div
                  key={assignment._id || assignment.id}
                  className="wd-assignment-list-item flex items-center border-b border-gray-200 hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3 p-4 flex-1 border-l-4 border-green-600">
                    <GripVertical className="w-4 h-4 text-gray-400" />
                    <FileText className="w-5 h-5 text-gray-600" />
                    <div className="flex-1">
                      <Link
                        href={`/courses/${courseId}/assignments/${assignment._id || assignment.id}`}
                        className="wd-assignment-link text-red-600 hover:underline font-medium"
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
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditAssignment(assignment)}
                        className="p-1 hover:bg-gray-200 rounded"
                        title="Edit Assignment"
                      >
                        <Edit className="w-4 h-4 text-blue-600" />
                      </button>
                      <button
                        onClick={() => handleDeleteAssignment(assignment._id || assignment.id)}
                        className="p-1 hover:bg-gray-200 rounded"
                        title="Delete Assignment"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                      <Ellipsis className="w-5 h-5 text-gray-600 cursor-pointer" />
                    </div>
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
