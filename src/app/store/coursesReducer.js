import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  course: {
    _id: "",
    name: "",
    number: "",
    startDate: "",
    endDate: "",
    department: "",
    credits: 4,
    description: "",
  },
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    addNewCourse: (state, action) => {
      state.courses = [...state.courses, action.payload];
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course) => course._id !== action.payload,
      );
    },
    updateCourse: (state, action) => {
      state.courses = state.courses.map((course) =>
        course._id === action.payload._id ? action.payload : course,
      );
    },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
  },
});

export const { addNewCourse, deleteCourse, updateCourse, setCourse, setCourses } =
  coursesSlice.actions;
export default coursesSlice.reducer;
