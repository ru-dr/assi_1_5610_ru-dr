"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import peopleData from "@/app/(kambaz)/data/peopleData";
import { getCourseById } from "@/app/(kambaz)/data/coursesData";
import { getCourseNavigation } from "@/app/(kambaz)/data/courseNavigationData";

export default function CoursePeople() {
  const params = useParams();
  const courseId = params.id;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("Everyone");

  const course = getCourseById(courseId);
  const courseNav = getCourseNavigation(courseId);

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

  const people = peopleData.map((person) => ({
    ...person,
    section: course.fullName,
    avatar: null,
  }));

  const filteredPeople = people.filter(
    (person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.role.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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
                  item.href === `/courses/${courseId}/people`
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
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
            <p className="text-sm text-gray-600">People</p>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="flex border-b border-gray-300 mb-4">
            <button
              onClick={() => setSelectedTab("Everyone")}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                selectedTab === "Everyone"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-600 hover:text-gray-800"
              }`}
            >
              Everyone
            </button>
            <button
              onClick={() => setSelectedTab("Groups")}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                selectedTab === "Groups"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-600 hover:text-gray-800"
              }`}
            >
              Groups
            </button>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search people"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="ml-4">
              <select className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Roles</option>
                <option>Students</option>
                <option>Teachers</option>
                <option>TAs</option>
              </select>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-300">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Section
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPeople.map((person) => (
                  <tr key={person.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                          {person.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="ml-4">
                          <Link
                            href="#"
                            className="text-red-600 hover:underline font-medium"
                          >
                            {person.name}
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {person.section}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {person.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredPeople.length} of {people.length} people
          </div>
        </div>
      </div>
    </div>
  );
}
