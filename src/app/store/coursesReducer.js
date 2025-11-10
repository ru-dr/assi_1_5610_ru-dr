import { createSlice } from "@reduxjs/toolkit";
import { coursesData } from "../(kambaz)/data/coursesData";

const initialState = {
  courses: coursesData,
  course: {
    id: "",
    code: "",
    name: "",
    fullName: "",
    title: "",
    term: "",
    color: "bg-blue-500",
    image: null,
    instructor: "",
  },
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addNewCourse: (state, action) => {
      const newCourseId = new Date().getTime().toString();
      const newCourse = { ...action.payload, id: newCourseId };
      state.courses = [...state.courses, newCourse];
      state.course = {
        id: "",
        code: "",
        name: "",
        fullName: "",
        title: "",
        term: "",
        color: "bg-blue-500",
        image: null,
        instructor: "",
      };
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload,
      );
    },
    updateCourse: (state, action) => {
      state.courses = state.courses.map((course) =>
        course.id === action.payload.id ? action.payload : course,
      );
      state.course = {
        id: "",
        code: "",
        name: "",
        fullName: "",
        title: "",
        term: "",
        color: "bg-blue-500",
        image: null,
        instructor: "",
      };
    },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
  },
});

export const { addNewCourse, deleteCourse, updateCourse, setCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;
