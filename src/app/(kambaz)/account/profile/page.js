"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import * as client from "../client";

export default function Profile() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const user = await client.profile();
      setProfile(user);
    } catch (err) {
      console.error("Profile fetch error:", err);
      if (err.response?.status === 401) {
        router.push("/account/signin");
      } else {
        setError("Failed to load profile");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setError("");
    setSuccess("");
    setSaving(true);

    try {
      const updatedProfile = await client.updateUser(profile);
      setProfile(updatedProfile);
      setSuccess("Profile updated successfully!");
    } catch (err) {
      console.error("Profile update error:", err);
      setError("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  const handleSignout = async () => {
    try {
      await client.signout();
      router.push("/account/signin");
    } catch (err) {
      console.error("Signout error:", err);
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
    setSuccess("");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Please sign in to view your profile</p>
          <button
            onClick={() => router.push("/account/signin")}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-red-600 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Profile</h2>
            <p className="text-red-100">Manage your account information</p>
          </div>

          <div className="px-6 py-6">
            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded" role="alert">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded" role="alert">
                {success}
              </div>
            )}

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={profile.firstName || ""}
                    onChange={handleChange}
                    id="wd-firstname"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-gray-900 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={profile.lastName || ""}
                    onChange={handleChange}
                    id="wd-lastname"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-gray-900 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={profile.username || ""}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded text-gray-500 bg-gray-100 cursor-not-allowed"
                />
                <p className="text-xs text-gray-500 mt-1">Username cannot be changed</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={profile.email || ""}
                  onChange={handleChange}
                  id="wd-email"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-gray-900 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={profile.dob?.split('T')[0] || ""}
                  onChange={handleChange}
                  id="wd-dob"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-gray-900 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <select
                  name="role"
                  value={profile.role || "STUDENT"}
                  onChange={handleChange}
                  id="wd-role"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-gray-900 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="STUDENT">Student</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Login ID
                  </label>
                  <input
                    type="text"
                    name="loginId"
                    value={profile.loginId || ""}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-gray-900 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Section
                  </label>
                  <input
                    type="text"
                    name="section"
                    value={profile.section || ""}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-gray-900 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSave}
                  disabled={saving}
                  id="wd-update-btn"
                  className="flex-1 py-2 px-4 border border-transparent rounded text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-red-400 disabled:cursor-not-allowed"
                >
                  {saving ? "Saving..." : "Update Profile"}
                </button>

                <button
                  onClick={handleSignout}
                  id="wd-signout-btn"
                  className="flex-1 py-2 px-4 border border-gray-300 rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("/dashboard")}
            className="text-red-600 hover:text-red-500"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
