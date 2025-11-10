import { createSlice } from "@reduxjs/toolkit";
import { assignmentsData } from "../(kambaz)/data/assignmentsData";

const flattenAssignments = () => {
  const flat = [];
  Object.keys(assignmentsData).forEach((courseId) => {
    assignmentsData[courseId].forEach((assignment) => {
      flat.push({ ...assignment, course: courseId });
    });
  });
  return flat;
};

const initialState = {
  assignments: flattenAssignments(),
  assignment: {
    id: "",
    title: "",
    dueDate: "",
    points: 100,
    availableFrom: "",
    description: "",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        ...assignment,
        id: new Date().getTime().toString(),
      };
      state.assignments = [...state.assignments, newAssignment];
      state.assignment = {
        id: "",
        title: "",
        dueDate: "",
        points: 100,
        availableFrom: "",
        description: "",
      };
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a) => a.id !== assignmentId,
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a) =>
        a.id === assignment.id ? assignment : a,
      );
      state.assignment = {
        id: "",
        title: "",
        dueDate: "",
        points: 100,
        availableFrom: "",
        description: "",
      };
    },
    setAssignment: (state, { payload: assignment }) => {
      state.assignment = assignment;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
