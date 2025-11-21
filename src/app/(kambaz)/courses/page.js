"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Star, X, ArrowUpDown } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setCourses } from "../../store/coursesReducer";
import * as coursesClient from "./client";

function SidebarHandler({ setSidebarOpen }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("sidebar") === "true") {
      setSidebarOpen(true);
      router.replace("/courses", { scroll: false });
    }
  }, [searchParams, router, setSidebarOpen]);

  return null;
}

function CoursesContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const allCourses = await coursesClient.fetchAllCourses();
        dispatch(setCourses(allCourses));
      } catch (err) {
        console.error('Error fetching courses:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading courses...</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen relative">
      <Suspense fallback={null}>
        <SidebarHandler setSidebarOpen={setSidebarOpen} />
      </Suspense>
      <div
        className={`fixed top-0 h-full w-80 bg-white border-r border-gray-300 p-4 z-40 transition-all duration-300 ease-in-out shadow-lg ${
          sidebarOpen ? "left-[100px]" : "left-[-320px]"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Courses</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-600 hover:text-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-6">
          <Link
            href="/courses"
            className="text-red-600 hover:underline text-sm font-medium"
          >
            All Courses
          </Link>
        </div>

        <div className="space-y-2">
          {courses.map((course) => (
            <Link
              key={course._id}
              href={`/courses/${course._id}`}
              className={`block p-2 rounded text-sm ${
                pathname === `/courses/${course._id}`
                  ? "bg-red-50 border-l-4 border-red-600"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className="font-medium text-gray-900">
                {course.fullName || course.name}
              </div>
              <div className="text-xs text-gray-600">
                {course.term || 'N/A'}
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <h1 className="text-2xl font-normal text-gray-800 mb-6">All Courses</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Favorite</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Course</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Code</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Term</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Instructor</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">
                  <button className="flex items-center space-x-1">
                    <span>Credits</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr
                  key={course._id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">
                    <button className="text-gray-400 hover:text-yellow-500">
                      <Star className="w-5 h-5" />
                    </button>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-1 h-8 ${course.color || 'bg-blue-500'}`}></div>
                      <Link
                        href={`/courses/${course._id}`}
                        className="text-red-600 hover:underline text-sm"
                      >
                        {course.fullName || course.name}
                      </Link>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {course.code || course.number}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {course.term || 'N/A'}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {course.instructor || 'N/A'}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {course.credits || 4}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function Courses() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CoursesContent />
    </Suspense>
  );
}
