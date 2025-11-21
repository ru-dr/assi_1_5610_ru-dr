import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modules: [],
  module: {
    id: "",
    title: "",
    status: "Not Started",
    lessons: [],
  },
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, { payload }) => {
      state.modules = payload.map(m => ({
        ...m,
        id: m._id || m.id,
        title: m.name || m.title,
        course: m.course,
      }));
    },
    addModule: (state, { payload: module }) => {
      const newModule = {
        ...module,
        id: module._id || module.id || new Date().getTime().toString(),
        title: module.name || module.title,
        lessons: module.lessons || [],
      };
      state.modules = [...state.modules, newModule];
      state.module = {
        id: "",
        title: "",
        status: "Not Started",
        lessons: [],
      };
    },
    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter((m) => m.id !== moduleId && m._id !== moduleId);
    },
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m) =>
        (m.id === module.id || m._id === module._id) ? module : m,
      );
      state.module = {
        id: "",
        title: "",
        status: "Not Started",
        lessons: [],
      };
    },
    setModule: (state, { payload: module }) => {
      state.module = module;
    },
  },
});

export const { addModule, deleteModule, updateModule, setModule, setModules } =
  modulesSlice.actions;
export default modulesSlice.reducer;
