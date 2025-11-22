"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { getCourseNavigation } from "@/app/(kambaz)/data/courseNavigationData";
import * as coursesClient from "@/app/(kambaz)/courses/client";
import { Menu, X } from "lucide-react";

export default function AssignmentEditor() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id;
  const assignmentId = params.assignmentId;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [assignment, setAssignment] = useState({
    title: "New Assignment",
    description: "This is a new assignment",
    points: 100,
    assignmentGroup: "ASSIGNMENTS",
    displayGradeAs: "Percentage",
    submissionType: "Online",
    onlineEntryOptions: ["Text Entry"],
    assignTo: "Everyone",
    dueDate: "2024-05-13",
    availableFrom: "2024-05-06",
    until: "2024-05-20",
  });

  const courses = useSelector((state) => state.courses.courses);
  const course = courses.find((c) => c._id === courseId || c.id === courseId);
  const courseNav = getCourseNavigation(courseId);

  const [loading, setLoading] = useState(assignmentId !== "new");

  useEffect(() => {
    if (assignmentId !== "new") {
      const fetchAssignment = async () => {
        try {
          setLoading(true);
          const data = await coursesClient.findAssignmentById(assignmentId);
          setAssignment({
            title: data.title || "New Assignment",
            description: data.description || "This is a new assignment",
            points: data.points || 100,
            assignmentGroup: data.assignmentGroup || "ASSIGNMENTS",
            displayGradeAs: data.displayGradeAs || "Percentage",
            submissionType: data.submissionType || "Online",
            onlineEntryOptions: data.onlineEntryOptions || ["Text Entry"],
            assignTo: data.assignTo || "Everyone",
            dueDate: data.dueDate || "2024-05-13",
            availableFrom: data.availableFrom || "2024-05-06",
            until: data.until || "2024-05-20",
          });
        } catch (err) {
          console.error('Error fetching assignment:', err);
        } finally {
          setLoading(false);
        }
      };
      fetchAssignment();
    }
  }, [assignmentId]);

  const handleSave = async () => {
    try {
      if (assignmentId === "new") {
        await coursesClient.createAssignmentForCourse(courseId, {
          ...assignment,
          course: courseId,
        });
      } else {
        await coursesClient.updateAssignment({
          ...assignment,
          _id: assignmentId,
          course: courseId,
        });
      }
      router.push(`/courses/${courseId}/assignments`);
    } catch (err) {
      console.error('Error saving assignment:', err);
      alert('Failed to save assignment');
    }
  };

  const handleCancel = () => {
    router.push(`/courses/${courseId}/assignments`);
  };

  const assignmentGroupOptions = ["ASSIGNMENTS", "QUIZZES", "EXAMS", "PROJECT"];
  const displayGradeOptions = ["Percentage", "Points", "Complete/Incomplete"];
  const submissionTypeOptions = ["Online", "On Paper", "External Tool"];
  const onlineEntryOptions = [
    "Text Entry",
    "Website URL",
    "Media Recordings",
    "Student Annotation",
    "File Uploads",
  ];

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600">Loading assignment...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-300 px-4 py-3">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-gray-100 rounded mr-3"
            >
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
            <div>
              <h1 className="text-red-600 font-medium">
                {course.fullName}
              </h1>
              <p className="text-sm text-gray-600">
                Assignments / {assignmentId === "new" ? "New Assignment" : assignment.title}
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-4xl mx-auto bg-white border border-gray-300 rounded p-6">
            <div className="space-y-6">
              {/* Assignment Name */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Assignment Name
                </label>
                <input
                  type="text"
                  value={assignment.title}
                  onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Description
                </label>
                <textarea
                  value={assignment.description}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      description: e.target.value,
                    })
                  }
                  rows="5"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
              </div>

              {/* Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Points
                  </label>
                  <input
                    type="number"
                    value={assignment.points}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        points: parseInt(e.target.value) || 0,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>

                {/* Assignment Group */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Assignment Group
                  </label>
                  <select
                    value={assignment.assignmentGroup}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        assignmentGroup: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  >
                    {assignmentGroupOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Display Grade As */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Display Grade As
                </label>
                <select
                  value={assignment.displayGradeAs}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      displayGradeAs: e.target.value,
                      })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                >
                  {displayGradeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submission Type */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Submission Type
                </label>
                <select
                  value={assignment.submissionType}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      submissionType: e.target.value,
                      })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                >
                  {submissionTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Online Entry Options */}
              {assignment.submissionType === "Online" && (
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Online Entry Options
                  </label>
                  <div className="space-y-2">
                    {onlineEntryOptions.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={assignment.onlineEntryOptions?.includes(
                            option
                          )}
                          onChange={(e) => {
                            const current = assignment.onlineEntryOptions || [];
                            if (e.target.checked) {
                              setAssignment({
                                ...assignment,
                                onlineEntryOptions: [...current, option],
                              });
                            } else {
                              setAssignment({
                                ...assignment,
                                onlineEntryOptions: current.filter(
                                  (o) => o !== option
                                ),
                              });
                            }
                          }}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label className="ml-2 text-sm text-gray-700">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Assign */}
              <div>
                <label className="block text-sm font-medium mb-4 text-gray-700">Assign</label>
                <div className="border border-gray-300 rounded p-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Assign to
                    </label>
                    <input
                      type="text"
                      value={assignment.assignTo}
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          assignTo: e.target.value,
                          })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Due
                    </label>
                    <input
                      type="date"
                      value={assignment.dueDate}
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          dueDate: e.target.value,
                          })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Available from
                      </label>
                      <input
                        type="date"
                        value={assignment.availableFrom}
                        onChange={(e) =>
                          setAssignment({
                            ...assignment,
                            availableFrom: e.target.value,
                            })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Until
                      </label>
                      <input
                        type="date"
                        value={assignment.until}
                        onChange={(e) =>
                          setAssignment({
                            ...assignment,
                            until: e.target.value,
                            })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2 mt-6 pt-6 border-t border-gray-300">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
