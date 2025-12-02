"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { getCourseNavigation } from "@/app/(kambaz)/data/courseNavigationData";
import { setCourses } from "@/app/store/coursesReducer";
import * as coursesClient from "@/app/(kambaz)/courses/client";
import {
  Menu,
  X,
  Search,
  User,
  Filter,
} from "lucide-react";

export default function CoursePeople() {
  const params = useParams();
  const courseId = params.id;
  const dispatch = useDispatch();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrolledUsers, setEnrolledUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("ALL");
  const [selectedUser, setSelectedUser] = useState(null);

  const courses = useSelector((state) => state.courses.courses);
  const [course, setCourse] = useState(null);

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
          // If not in store, fetch all courses
          const allCourses = await coursesClient.fetchAllCourses();
          dispatch(setCourses(allCourses));

          const foundCourse = allCourses.find(
            (c) => c._id === courseId || c.id === courseId
          );

          setCourse(foundCourse);
        }

        // Fetch enrolled users for this course
        const users = await coursesClient.findUsersForCourse(courseId);
        setEnrolledUsers(users);
        setError(null);
      } catch (err) {
        console.error("Error loading data:", err);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [courseId, courses, dispatch]);

  const courseNav = getCourseNavigation(courseId);

  // Filter users based on search query and role
  const filteredUsers = enrolledUsers.filter((user) => {
    const matchesSearch =
      searchQuery === "" ||
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      user.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole =
      roleFilter === "ALL" ||
      user.role === roleFilter ||
      user.enrollmentRole === roleFilter;

    return matchesSearch && matchesRole;
  });

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
            {course.fullName || course.name}
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
                  item.href === `/courses/${courseId}/people`
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
        <div className="bg-white border-b border-gray-300 px-3 sm:px-4 py-3 flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 rounded mr-2 sm:mr-3"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          <div className="min-w-0">
            <h1 className="text-red-600 font-medium text-sm sm:text-base truncate">
              {course.fullName || course.name}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600">People</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {/* Filters */}
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search people..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 bg-white text-black"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="ALL">All Roles</option>
                  <option value="STUDENT">Students</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="TA">Teaching Assistants</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Users Table */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full" id="wd-people-table">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                        Login ID
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                        Section
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                        Role
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                        Last Activity
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                        Total Activity
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredUsers.length === 0 ? (
                      <tr>
                        <td
                          colSpan="6"
                          className="px-4 py-8 text-center text-gray-500"
                        >
                          No users enrolled in this course
                        </td>
                      </tr>
                    ) : (
                      filteredUsers.map((user) => (
                        <tr
                          key={user._id}
                          className={`wd-people-row hover:bg-gray-50 cursor-pointer ${
                            selectedUser?._id === user._id ? "bg-blue-50" : ""
                          }`}
                          onClick={() => setSelectedUser(user)}
                        >
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-gray-500" />
                              </div>
                              <div>
                                <button
                                  className="wd-first-name text-red-600 hover:underline font-medium text-left"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedUser(user);
                                  }}
                                >
                                  {user.firstName} {user.lastName}
                                </button>
                                <p className="text-xs text-gray-500">
                                  {user.email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            {user.loginId || "N/A"}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            {user.section || "N/A"}
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`px-2 py-1 text-xs rounded ${
                                user.role === "FACULTY" ||
                                user.enrollmentRole === "FACULTY"
                                  ? "bg-purple-100 text-purple-800"
                                  : user.role === "TA" ||
                                    user.enrollmentRole === "TA"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {user.enrollmentRole || user.role}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            {user.lastActivity || "N/A"}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            {user.totalActivity || "N/A"}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                Showing {filteredUsers.length} of {enrolledUsers.length} enrolled
                users
              </p>
            </div>

            {/* User Details Panel */}
            {selectedUser && (
              <div className="w-full lg:w-80">
                <div className="bg-white rounded-lg shadow p-6 sticky top-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                      User Details
                    </h2>
                    <button
                      onClick={() => setSelectedUser(null)}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {selectedUser.firstName} {selectedUser.lastName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        @{selectedUser.username}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Email
                      </label>
                      <p className="text-gray-900">{selectedUser.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Role in Course
                      </label>
                      <p className="text-gray-900">
                        {selectedUser.enrollmentRole || selectedUser.role}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Login ID
                      </label>
                      <p className="text-gray-900">
                        {selectedUser.loginId || "N/A"}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Section
                      </label>
                      <p className="text-gray-900">
                        {selectedUser.section || "N/A"}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Last Activity
                      </label>
                      <p className="text-gray-900">
                        {selectedUser.lastActivity || "N/A"}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Total Activity
                      </label>
                      <p className="text-gray-900">
                        {selectedUser.totalActivity || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
