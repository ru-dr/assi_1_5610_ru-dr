/**
 * Account Client
 * API client for user authentication and profile operations
 */

import axios from 'axios';

const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || 'http://localhost:4000';
const USERS_API = `${HTTP_SERVER}/api/users`;

/**
 * Sign in with username and password
 */
export const signin = async (credentials) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signin`,
    credentials
  );
  return response.data.data || response.data;
};

/**
 * Sign up new user
 */
export const signup = async (user) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signup`,
    user
  );
  return response.data.data || response.data;
};

/**
 * Sign out current user
 */
export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};

/**
 * Get current user profile
 */
export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data.data || response.data;
};

/**
 * Update user profile
 */
export const updateUser = async (user) => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/${user._id}`,
    user
  );
  return response.data.data || response.data;
};

/**
 * Find all users (admin)
 */
export const findAllUsers = async () => {
  const response = await axiosWithCredentials.get(USERS_API);
  return response.data;
};

/**
 * Find user by ID
 */
export const findUserById = async (userId) => {
  const response = await axiosWithCredentials.get(`${USERS_API}/${userId}`);
  return response.data;
};

/**
 * Delete user
 */
export const deleteUser = async (userId) => {
  const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}`);
  return response.data;
};
