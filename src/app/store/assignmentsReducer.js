import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
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
    setAssignments: (state, { payload }) => {
      state.assignments = payload.map(a => ({
        ...a,
        id: a._id || a.id,
        course: a.course,
      }));
    },
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        ...assignment,
        id: assignment._id || assignment.id || new Date().getTime().toString(),
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
        (a) => a.id !== assignmentId && a._id !== assignmentId,
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a) =>
        (a.id === assignment.id || a._id === assignment._id) ? assignment : a,
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
  setAssignments,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
