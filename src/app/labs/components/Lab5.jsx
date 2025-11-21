"use client";
import React, { useState, useEffect } from "react";
import * as client from "../client";

export default function Lab5() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Lab 5 - RESTful Web APIs</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
        <WelcomeComponent />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Path Parameters</h2>
        <PathParameters />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Query Parameters</h2>
        <QueryParameters />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Working with Objects</h2>
        <WorkingWithObjects />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Working with Arrays</h2>
        <WorkingWithArrays />
      </section>
    </div>
  );
}

function WelcomeComponent() {
  const [welcome, setWelcome] = useState("");

  useEffect(() => {
    const fetchWelcome = async () => {
      try {
        const message = await client.fetchWelcomeMessage();
        setWelcome(message);
      } catch (error) {
        console.error("Error fetching welcome:", error);
      }
    };
    fetchWelcome();
  }, []);

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <p className="text-lg mb-3" id="wd-lab5-welcome">
        {welcome}
      </p>
      <a
        href={`${process.env.NEXT_PUBLIC_HTTP_SERVER}/lab5/welcome`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block"
        id="wd-lab5-welcome-link"
      >
        View in Browser
      </a>
    </div>
  );
}

function PathParameters() {
  const [pathA, setPathA] = useState("34");
  const [pathB, setPathB] = useState("23");
  const [pathResult, setPathResult] = useState("");

  const handlePathAdd = async () => {
    try {
      const result = await client.addPathParams(pathA, pathB);
      setPathResult(`${pathA} + ${pathB} = ${result}`);
    } catch (error) {
      console.error('Path Add Error:', error);
      setPathResult(`Error: ${error.response?.data?.message || error.message || 'Network error - check if backend is running on port 4000'}`);
    }
  };

  const handlePathSubtract = async () => {
    try {
      const result = await client.subtractPathParams(pathA, pathB);
      setPathResult(`${pathA} - ${pathB} = ${result}`);
    } catch (error) {
      console.error('Path Subtract Error:', error);
      setPathResult(`Error: ${error.response?.data?.message || error.message || 'Network error'}`);
    }
  };

  const handlePathMultiply = async () => {
    try {
      const result = await client.multiplyPathParams(pathA, pathB);
      setPathResult(`${pathA} × ${pathB} = ${result}`);
    } catch (error) {
      console.error('Path Multiply Error:', error);
      setPathResult(`Error: ${error.response?.data?.message || error.message || 'Network error'}`);
    }
  };

  const handlePathDivide = async () => {
    try {
      const result = await client.dividePathParams(pathA, pathB);
      setPathResult(`${pathA} ÷ ${pathB} = ${result}`);
    } catch (error) {
      console.error('Path Divide Error:', error);
      setPathResult(`Error: ${error.response?.data?.message || error.message || 'Network error'}`);
    }
  };

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Number A:</label>
          <input
            type="number"
            value={pathA}
            onChange={(e) => setPathA(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
            id="wd-path-parameter-a"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Number B:</label>
          <input
            type="number"
            value={pathB}
            onChange={(e) => setPathB(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
            id="wd-path-parameter-b"
          />
        </div>
      </div>
      <div className="space-x-2 mb-3">
        <button
          onClick={handlePathAdd}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          id="wd-path-parameter-add"
        >
          Add
        </button>
        <button
          onClick={handlePathSubtract}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          id="wd-path-parameter-subtract"
        >
          Subtract
        </button>
        <button
          onClick={handlePathMultiply}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          id="wd-path-parameter-multiply"
        >
          Multiply
        </button>
        <button
          onClick={handlePathDivide}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          id="wd-path-parameter-divide"
        >
          Divide
        </button>
      </div>
      {pathResult && (
        <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-800 rounded">
          {pathResult}
        </div>
      )}
    </div>
  );
}

function QueryParameters() {
  const [queryA, setQueryA] = useState("34");
  const [queryB, setQueryB] = useState("23");
  const [operation, setOperation] = useState("add");
  const [queryResult, setQueryResult] = useState("");

  const handleCalculator = async () => {
    try {
      const result = await client.calculator(queryA, queryB, operation);
      setQueryResult(`${queryA} ${operation} ${queryB} = ${result}`);
    } catch (error) {
      console.error('Calculator Error:', error);
      setQueryResult(`Error: ${error.response?.data?.message || error.message || 'Network error'}`);
    }
  };

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Number A:</label>
          <input
            type="number"
            value={queryA}
            onChange={(e) => setQueryA(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
            id="wd-query-parameter-a"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Number B:</label>
          <input
            type="number"
            value={queryB}
            onChange={(e) => setQueryB(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
            id="wd-query-parameter-b"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Operation:</label>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
          >
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </div>
      </div>
      <button
        onClick={handleCalculator}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-3"
        id="wd-query-parameter-calculate"
      >
        Calculate
      </button>
      {queryResult && (
        <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-800 rounded">
          {queryResult}
        </div>
      )}
    </div>
  );
}

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState(null);
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [module, setModule] = useState(null);

  const handleFetchAssignment = async () => {
    const data = await client.fetchAssignment();
    setAssignment(data);
  };

  const handleFetchAssignmentTitle = async () => {
    const title = await client.fetchAssignmentTitle();
    alert(`Assignment Title: ${title}`);
  };

  const handleUpdateAssignmentTitle = async () => {
    const updated = await client.updateAssignmentTitle(assignmentTitle);
    setAssignment(updated);
  };

  const handleFetchModule = async () => {
    const data = await client.fetchModule();
    setModule(data);
  };

  const handleFetchModuleName = async () => {
    const name = await client.fetchModuleName();
    alert(`Module Name: ${name}`);
  };

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Assignment</h3>
        <div className="space-x-2 mb-3">
          <button
            onClick={handleFetchAssignment}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            id="wd-retrieve-assignment"
          >
            Get Assignment
          </button>
          <button
            onClick={handleFetchAssignmentTitle}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            id="wd-retrieve-assignment-title"
          >
            Get Title
          </button>
        </div>
        {assignment && (
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded mb-3">
            <pre className="text-sm">{JSON.stringify(assignment, null, 2)}</pre>
          </div>
        )}
        <div className="flex gap-2">
          <input
            type="text"
            value={assignmentTitle}
            onChange={(e) => setAssignmentTitle(e.target.value)}
            placeholder="New title"
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
          />
          <button
            onClick={handleUpdateAssignmentTitle}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            id="wd-update-assignment-title"
          >
            Update Title
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Module</h3>
        <div className="space-x-2 mb-3">
          <button
            onClick={handleFetchModule}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            id="wd-retrieve-module"
          >
            Get Module
          </button>
          <button
            onClick={handleFetchModuleName}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            id="wd-retrieve-module-name"
          >
            Get Module Name
          </button>
        </div>
        {module && (
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded">
            <pre className="text-sm">{JSON.stringify(module, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

function WorkingWithArrays() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState("1");
  const [newTodoTitle, setNewTodoTitle] = useState("New Task");

  const handleFetchTodos = async () => {
    const data = await client.fetchTodos();
    setTodos(data);
  };

  const handleFetchTodoById = async () => {
    const todo = await client.fetchTodoById(todoId);
    alert(`Todo: ${JSON.stringify(todo)}`);
  };

  const handleFetchCompletedTodos = async () => {
    const data = await client.fetchCompletedTodos();
    setTodos(data);
  };

  const handleCreateTodo = async () => {
    const data = await client.createTodo();
    setTodos(data);
  };

  const handleDeleteTodo = async (id) => {
    const data = await client.deleteTodoById(id);
    setTodos(data);
  };

  const handleUpdateTodoTitle = async (id) => {
    const data = await client.updateTodoTitle(id, newTodoTitle);
    setTodos(data);
  };

  const handlePostTodo = async () => {
    const newTodo = await client.postTodo({
      title: newTodoTitle,
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodoREST = async (id) => {
    await client.deleteTodo(id);
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <div className="space-x-2 mb-4">
        <button
          onClick={handleFetchTodos}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          id="wd-retrieve-todos"
        >
          Get Todos
        </button>
        <button
          onClick={handleFetchCompletedTodos}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          id="wd-retrieve-completed-todos"
        >
          Get Completed
        </button>
        <button
          onClick={handleCreateTodo}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          id="wd-create-todo"
        >
          Create Todo
        </button>
        <button
          onClick={handlePostTodo}
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
          id="wd-post-todo"
        >
          Post Todo
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={todoId}
          onChange={(e) => setTodoId(e.target.value)}
          placeholder="Todo ID"
          className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
          id="wd-todo-id"
        />
        <button
          onClick={handleFetchTodoById}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          id="wd-retrieve-todo-by-id"
        >
          Get by ID
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="New todo title"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
        />
      </div>

      {todos.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Todos List</h3>
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800 rounded"
              >
                <div>
                  <span className={todo.completed ? "line-through opacity-60" : ""}>
                    {todo.title}
                  </span>
                  {todo.completed && (
                    <span className="ml-2 text-green-500 text-sm">✓</span>
                  )}
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleUpdateTodoTitle(todo.id)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                    id={`wd-update-todo-${todo.id}`}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
                    id={`wd-delete-todo-get-${todo.id}`}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleDeleteTodoREST(todo.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                    id={`wd-delete-todo-${todo.id}`}
                  >
                    Delete REST
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
