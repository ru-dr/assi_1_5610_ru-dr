"use client";
import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "./helloReducer";
import counterReducer from "./counterReducer";
import addReducer from "./addReducer";
import todosReducer from "./todosReducer";
import coursesReducer from "./coursesReducer";
import modulesReducer from "./modulesReducer";
import assignmentsReducer from "./assignmentsReducer";
import usersReducer from "./usersReducer";
import enrollmentsReducer from "./enrollmentsReducer";

const store = configureStore({
  reducer: {
    hello: helloReducer,
    counter: counterReducer,
    add: addReducer,
    todos: todosReducer,
    courses: coursesReducer,
    modules: modulesReducer,
    assignments: assignmentsReducer,
    users: usersReducer,
    enrollments: enrollmentsReducer,
  },
});

export default store;
