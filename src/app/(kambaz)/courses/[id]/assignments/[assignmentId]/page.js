"use client";

import { use, useState } from "react";
import Link from "next/link";
import { getCourseById } from "@/app/(kambaz)/data/coursesData";
import { getCourseNavigation } from "@/app/(kambaz)/data/courseNavigationData";
import {
  getAssignmentById,
  assignmentGroupOptions,
  displayGradeOptions,
  submissionTypeOptions,
  onlineEntryOptionsData,
} from "@/app/(kambaz)/data/assignmentsData";
import { Menu, X } from "lucide-react";

export default function AssignmentEditor({ params }) {
  const { id: courseId, assignmentId } = use(params);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const course = getCourseById(courseId);
  const courseNav = getCourseNavigation(courseId);
  const assignmentData = getAssignmentById(courseId, assignmentId);

  const [formData, setFormData] = useState({
    assignmentName: assignmentData?.title || "",
    description:
      assignmentData?.description || "This is assignment 2 description.",
    points: assignmentData?.points || 375,
    assignmentGroup: "ASSIGNMENTS",
    displayGradeAs: "Percentage",
    submissionType: "Online",
    onlineEntryOptions: ["Website URL"],
    dueDate: "2025-10-06",
    availableFrom: "2025-09-30",
    until: "2025-10-06",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (option) => {
    setFormData((prev) => {
      const currentOptions = prev.onlineEntryOptions;
      const newOptions = currentOptions.includes(option)
        ? currentOptions.filter((opt) => opt !== option)
        : [...currentOptions, option];
      return {
        ...prev,
        onlineEntryOptions: newOptions,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  if (!course) {
    return (
      <div className="flex min-h-screen bg-white items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Course Not Found
          </h1>
          <Link
            href="/courses"
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Back to Courses
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
        <div className="bg-white border-b border-gray-300 px-4 py-3 flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 rounded mr-3"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-red-600 font-medium">{course.fullName}</h1>
            <p className="text-sm text-gray-600">Edit Assignment</p>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="max-w-full mx-auto p-3 sm:p-6">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <h1 className="text-xl sm:text-2xl font-normal text-gray-900">
                  Edit Assignment
                </h1>
                <div className="flex space-x-2">
                  <Link
                    href={`/courses/${courseId}/assignments`}
                    className="flex-1 sm:flex-none px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300 text-center"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                  >
                    Save
                  </button>
                </div>
              </div>

              <div className="bg-white border border-gray-300 rounded-lg mb-4">
                <div className="p-6 space-y-4">
                  <div>
                    <label
                      htmlFor="assignmentName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Assignment Name
                    </label>
                    <input
                      type="text"
                      id="assignmentName"
                      name="assignmentName"
                      value={formData.assignmentName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded text-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows="6"
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded text-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                      placeholder="Enter assignment description..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="points"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Points
                      </label>
                      <input
                        type="number"
                        id="points"
                        name="points"
                        value={formData.points}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded text-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="assignmentGroup"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Assignment Group
                      </label>
                      <select
                        id="assignmentGroup"
                        name="assignmentGroup"
                        value={formData.assignmentGroup}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded text-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {assignmentGroupOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="displayGradeAs"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Display Grade as
                    </label>
                    <select
                      id="displayGradeAs"
                      name="displayGradeAs"
                      value={formData.displayGradeAs}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded text-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {displayGradeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="submissionType"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Submission Type
                    </label>
                    <select
                      id="submissionType"
                      name="submissionType"
                      value={formData.submissionType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded text-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {submissionTypeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {formData.submissionType === "Online" && (
                    <div className="ml-6 space-y-2">
                      <p className="text-sm font-semibold text-gray-700 mb-2">
                        Online Entry Options
                      </p>
                      <div className="space-y-2">
                        {onlineEntryOptionsData.map((option) => (
                          <label
                            key={option}
                            className="flex items-center text-sm text-gray-700"
                          >
                            <input
                              type="checkbox"
                              checked={formData.onlineEntryOptions.includes(
                                option,
                              )}
                              onChange={() => handleCheckboxChange(option)}
                              className="mr-2"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white border border-gray-300 rounded-lg mb-4">
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Assign
                  </h2>

                  <div className="border border-gray-300 rounded p-4 space-y-4">
                    <div>
                      <label
                        htmlFor="assignTo"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Assign to
                      </label>
                      <input
                        type="text"
                        id="assignTo"
                        defaultValue="Everyone"
                        className="w-full border border-gray-300 rounded text-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="dueDate"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Due
                      </label>
                      <input
                        type="date"
                        id="dueDate"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded text-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 [color-scheme:light]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="availableFrom"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Available from
                        </label>
                        <input
                          type="date"
                          id="availableFrom"
                          name="availableFrom"
                          value={formData.availableFrom}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded text-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 [color-scheme:light]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="until"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Until
                        </label>
                        <input
                          type="date"
                          id="until"
                          name="until"
                          value={formData.until}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded text-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 [color-scheme:light]"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-4 px-4 py-2 text-sm text-blue-600 hover:underline"
                  >
                    + Add
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                <div className="flex space-x-2">
                  <Link
                    href={`/courses/${courseId}/assignments`}
                    className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                  >
                    Save
                  </button>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 text-sm text-gray-700 hover:underline"
                >
                  Save & Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
