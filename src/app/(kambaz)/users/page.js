"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import {
  setUsers,
  addUser,
  updateUser as updateUserInStore,
  deleteUser as deleteUserFromStore,
} from "@/app/store/usersReducer";
import * as accountClient from "@/app/(kambaz)/account/client";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  User,
  X,
  Filter,
} from "lucide-react";

export default function UsersPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("ALL");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    role: "STUDENT",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await accountClient.findAllUsers();
      dispatch(setUsers(data));
      setError(null);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  // Filter users based on search query and role
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      searchQuery === "" ||
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = roleFilter === "ALL" || user.role === roleFilter;
    
    return matchesSearch && matchesRole;
  });

  const handleAddUser = async () => {
    if (!newUser.username || !newUser.password || !newUser.firstName || !newUser.lastName || !newUser.email) {
      alert("Please fill in all required fields");
      return;
    }
    try {
      const createdUser = await accountClient.createUser(newUser);
      dispatch(addUser(createdUser));
      setNewUser({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        role: "STUDENT",
      });
      setShowAddForm(false);
    } catch (err) {
      console.error("Error creating user:", err);
      alert(err.response?.data?.message || "Failed to create user");
    }
  };

  const handleDeleteUser = async (userId) => {
    if (confirm("Are you sure you want to delete this user?")) {
      try {
        await accountClient.deleteUser(userId);
        dispatch(deleteUserFromStore(userId));
        if (selectedUser?._id === userId) {
          setSelectedUser(null);
        }
      } catch (err) {
        console.error("Error deleting user:", err);
        alert("Failed to delete user");
      }
    }
  };

  const handleEditUser = (user) => {
    setEditingUser({ ...user });
  };

  const handleUpdateUser = async () => {
    try {
      const updatedUser = await accountClient.updateUser(editingUser);
      dispatch(updateUserInStore(updatedUser));
      if (selectedUser?._id === updatedUser._id) {
        setSelectedUser(updatedUser);
      }
      setEditingUser(null);
    } catch (err) {
      console.error("Error updating user:", err);
      alert("Failed to update user");
    }
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading users...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Users</h1>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            id="wd-add-people-click"
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            <Plus className="w-5 h-5" />
            People
          </button>
        </div>

        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* Add User Form */}
        {showAddForm && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-black">Add New User</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Username *"
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <input
                type="password"
                placeholder="Password *"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <input
                type="text"
                placeholder="First Name *"
                value={newUser.firstName}
                onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <input
                type="text"
                placeholder="Last Name *"
                value={newUser.lastName}
                onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <input
                type="email"
                placeholder="Email *"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <input
                type="date"
                placeholder="Date of Birth"
                value={newUser.dob}
                onChange={(e) => setNewUser({ ...newUser, dob: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <select
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              >
                <option value="STUDENT">Student</option>
                <option value="FACULTY">Faculty</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleAddUser}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Create User
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

        {/* Edit User Modal */}
        {editingUser && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
              <h2 className="text-xl font-semibold mb-4 text-black">Edit User</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={editingUser.firstName || ""}
                  onChange={(e) => setEditingUser({ ...editingUser, firstName: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={editingUser.lastName || ""}
                  onChange={(e) => setEditingUser({ ...editingUser, lastName: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={editingUser.email || ""}
                  onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <input
                  type="date"
                  placeholder="Date of Birth"
                  value={editingUser.dob?.split('T')[0] || ""}
                  onChange={(e) => setEditingUser({ ...editingUser, dob: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <select
                  value={editingUser.role || "STUDENT"}
                  onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                >
                  <option value="STUDENT">Student</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="ADMIN">Admin</option>
                </select>
                <input
                  type="text"
                  placeholder="Login ID"
                  value={editingUser.loginId || ""}
                  onChange={(e) => setEditingUser({ ...editingUser, loginId: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
                <input
                  type="text"
                  placeholder="Section"
                  value={editingUser.section || ""}
                  onChange={(e) => setEditingUser({ ...editingUser, section: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                />
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={handleUpdateUser}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Update User
                </button>
                <button
                  onClick={() => setEditingUser(null)}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Users List */}
          <div className="flex-1">
            {/* Filters */}
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name, username, or email..."
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
                    <option value="ADMIN">Admin</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Login ID</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Section</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Role</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Last Activity</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                        No users found
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map((user) => (
                      <tr
                        key={user._id}
                        className={`hover:bg-gray-50 cursor-pointer ${
                          selectedUser?._id === user._id ? "bg-blue-50" : ""
                        }`}
                      >
                        <td className="px-4 py-3">
                          <button
                            onClick={() => handleSelectUser(user)}
                            className="text-red-600 hover:underline font-medium text-left"
                          >
                            {user.firstName} {user.lastName}
                          </button>
                          <p className="text-xs text-gray-500">{user.email}</p>
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
                              user.role === "FACULTY"
                                ? "bg-purple-100 text-purple-800"
                                : user.role === "ADMIN"
                                ? "bg-red-100 text-red-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {user.lastActivity || "N/A"}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEditUser(user);
                              }}
                              className="p-1 hover:bg-gray-200 rounded"
                              title="Edit User"
                            >
                              <Edit className="w-4 h-4 text-blue-600" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteUser(user._id);
                              }}
                              className="p-1 hover:bg-gray-200 rounded"
                              title="Delete User"
                            >
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Showing {filteredUsers.length} of {users.length} users
            </p>
          </div>

          {/* User Details Panel */}
          {selectedUser && (
            <div className="w-full lg:w-96">
              <div className="bg-white rounded-lg shadow p-6 sticky top-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">User Details</h2>
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
                    <p className="text-sm text-gray-500">@{selectedUser.username}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="text-gray-900">{selectedUser.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Role</label>
                    <p className="text-gray-900">{selectedUser.role}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Login ID</label>
                    <p className="text-gray-900">{selectedUser.loginId || "N/A"}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Section</label>
                    <p className="text-gray-900">{selectedUser.section || "N/A"}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Date of Birth</label>
                    <p className="text-gray-900">{selectedUser.dob || "N/A"}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Last Activity</label>
                    <p className="text-gray-900">{selectedUser.lastActivity || "N/A"}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Total Activity</label>
                    <p className="text-gray-900">{selectedUser.totalActivity || "N/A"}</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  <button
                    onClick={() => handleEditUser(selectedUser)}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(selectedUser._id)}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
