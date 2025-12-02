"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    addEnrollment: (state, action) => {
      state.enrollments = [...state.enrollments, action.payload];
    },
    removeEnrollment: (state, action) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === userId && e.course === courseId)
      );
    },
    clearEnrollments: (state) => {
      state.enrollments = [];
    },
  },
});

export const {
  setEnrollments,
  addEnrollment,
  removeEnrollment,
  clearEnrollments,
} = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;
