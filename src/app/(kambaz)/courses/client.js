/**
 * Courses Client
 * API client for courses, modules, and assignments operations
 */

import axios from 'axios';

const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || '';

console.log('🔗 API Server:', HTTP_SERVER);
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;

// ============================================
// COURSES
// ============================================

/**
 * Get all courses
 */
export const fetchAllCourses = async () => {
  try {
    console.log('📡 Fetching all courses from:', COURSES_API);
    const { data } = await axios.get(COURSES_API);
    console.log('✅ Courses fetched:', data);
    return data.data || data;
  } catch (error) {
    console.error('❌ fetchAllCourses error:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * Get courses for current user (enrolled courses)
 */
export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/current/courses`
  );
  return data.data || data; // Handle both wrapped and unwrapped responses
};

/**
 * Get course by ID
 */
export const findCourseById = async (courseId) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}`);
  return data;
};

/**
 * Create new course (for current user)
 */
export const createCourse = async (course) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses`,
    course
  );
  return data.data || data;
};

/**
 * Update course
 */
export const updateCourse = async (course) => {
  const { data } = await axiosWithCredentials.put(
    `${COURSES_API}/${course._id}`,
    course
  );
  return data.data || data;
};

/**
 * Delete course
 */
export const deleteCourse = async (courseId) => {
  const { data } = await axiosWithCredentials.delete(
    `${COURSES_API}/${courseId}`
  );
  return data.data || data;
};

// ============================================
// MODULES
// ============================================

/**
 * Get all modules for a course
 */
export const findModulesForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

/**
 * Get module by ID
 */
export const findModuleById = async (moduleId) => {
  const response = await axios.get(`${MODULES_API}/${moduleId}`);
  return response.data;
};

/**
 * Create new module for a course
 */
export const createModuleForCourse = async (courseId, module) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};

/**
 * Update module
 */
export const updateModule = async (module) => {
  const { data } = await axiosWithCredentials.put(
    `${MODULES_API}/${module._id}`,
    module
  );
  return data;
};

/**
 * Delete module
 */
export const deleteModule = async (moduleId) => {
  const response = await axiosWithCredentials.delete(
    `${MODULES_API}/${moduleId}`
  );
  return response.data;
};

// ============================================
// ASSIGNMENTS
// ============================================

/**
 * Get all assignments for a course
 */
export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

/**
 * Get assignment by ID
 */
export const findAssignmentById = async (assignmentId) => {
  const response = await axios.get(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};

/**
 * Create new assignment for a course
 */
export const createAssignmentForCourse = async (courseId, assignment) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

/**
 * Update assignment
 */
export const updateAssignment = async (assignment) => {
  const { data } = await axiosWithCredentials.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment
  );
  return data;
};

/**
 * Delete assignment
 */
export const deleteAssignment = async (assignmentId) => {
  const response = await axiosWithCredentials.delete(
    `${ASSIGNMENTS_API}/${assignmentId}`
  );
  return response.data;
};

// ============================================
// ENROLLMENTS
// ============================================

/**
 * Enroll in a course
 */
export const enrollInCourse = async (courseId) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/enroll`
  );
  return response.data;
};

/**
 * Unenroll from a course
 */
export const unenrollFromCourse = async (courseId) => {
  const response = await axiosWithCredentials.delete(
    `${COURSES_API}/${courseId}/enroll`
  );
  return response.data;
};

/**
 * Get current user's enrollments
 */
export const findMyEnrollments = async () => {
  const response = await axiosWithCredentials.get(
    `${USERS_API}/current/enrollments`
  );
  return response.data;
};

/**
 * Check if enrolled in a course
 */
export const checkEnrollment = async (courseId) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/enrolled`
  );
  return response.data;
};

/**
 * Get all users enrolled in a course
 */
export const findUsersForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/users`);
  return response.data;
};
