import { createSlice } from "@reduxjs/toolkit";
import { modulesData } from "../(kambaz)/data/modulesData";

const flattenModules = () => {
  const flat = [];
  Object.keys(modulesData).forEach((courseId) => {
    modulesData[courseId].forEach((module) => {
      flat.push({ ...module, course: courseId });
    });
  });
  return flat;
};

const initialState = {
  modules: flattenModules(),
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
    addModule: (state, { payload: module }) => {
      const newModule = {
        ...module,
        id: new Date().getTime().toString(),
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
      state.modules = state.modules.filter((m) => m.id !== moduleId);
    },
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m) =>
        m.id === module.id ? module : m,
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

export const { addModule, deleteModule, updateModule, setModule } =
  modulesSlice.actions;
export default modulesSlice.reducer;
