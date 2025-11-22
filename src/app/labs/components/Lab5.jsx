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
  const [todoId, setTodoId] = useState("");
  const [newTodoTitle, setNewTodoTitle] = useState("My Custom Task");
  const [fetchedTodo, setFetchedTodo] = useState(null);
  const [error, setError] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  const handleFetchTodos = async () => {
    try {
      setError("");
      const data = await client.fetchTodos();
      setTodos(data);
      setFetchedTodo(null);
      // Set first todo ID as default if available
      if (data.length > 0 && !todoId) {
        setTodoId(data[0].id);
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  const handleFetchTodoById = async () => {
    try {
      setError("");
      const todo = await client.fetchTodoById(todoId);
      setFetchedTodo(todo);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      setFetchedTodo(null);
    }
  };

  const handleFetchCompletedTodos = async () => {
    try {
      setError("");
      const data = await client.fetchCompletedTodos();
      setTodos(data);
      setFetchedTodo(null);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  const handleCreateTodo = async () => {
    try {
      setError("");
      const data = await client.createTodo();
      setTodos(data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      setError("");
      const data = await client.deleteTodoById(id);
      setTodos(data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  const handleStartEdit = (todo) => {
    setEditingTodoId(todo.id);
    setEditingTitle(todo.title);
  };

  const handleCancelEdit = () => {
    setEditingTodoId(null);
    setEditingTitle("");
  };

  const handleSaveEdit = async (id) => {
    try {
      setError("");
      const data = await client.updateTodoTitle(id, editingTitle);
      setTodos(data);
      setEditingTodoId(null);
      setEditingTitle("");
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  const handlePostTodo = async () => {
    try {
      setError("");
      const newTodo = await client.postTodo({
        title: newTodoTitle,
        completed: false,
      });
      setTodos([...todos, newTodo]);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  const handleDeleteTodoREST = async (id) => {
    try {
      setError("");
      await client.deleteTodo(id);
      setTodos(todos.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  // Load todos on mount
  useEffect(() => {
    handleFetchTodos();
  }, []);

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      
      {/* Error Display */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-800 rounded text-red-700 dark:text-red-400">
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Action Buttons */}
      <div className="mb-4 space-y-2">
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={handleFetchTodos}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            id="wd-retrieve-todos"
          >
            📋 Get All Todos
          </button>
          <button
            onClick={handleFetchCompletedTodos}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            id="wd-retrieve-completed-todos"
          >
            ✅ Get Completed Todos
          </button>
          <button
            onClick={handleCreateTodo}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            id="wd-create-todo"
          >
            ➕ Create Default Todo
          </button>
        </div>
      </div>

      {/* Get Todo by ID */}
      <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded">
        <h4 className="font-semibold mb-2">🔍 Get Todo by ID</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Enter a 5-character alphanumeric ID (e.g., A3K7M, XY12Z)
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            value={todoId}
            onChange={(e) => setTodoId(e.target.value.toUpperCase())}
            placeholder="Enter Todo ID"
            maxLength={5}
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 font-mono uppercase"
            id="wd-todo-id"
          />
          <button
            onClick={handleFetchTodoById}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            id="wd-retrieve-todo-by-id"
          >
            Get Todo
          </button>
        </div>
        
        {fetchedTodo && (
          <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
            <div className="text-sm">
              <div><strong>ID:</strong> <span className="font-mono">{fetchedTodo.id}</span></div>
              <div><strong>Title:</strong> {fetchedTodo.title}</div>
              <div><strong>Completed:</strong> {fetchedTodo.completed ? '✅ Yes' : '❌ No'}</div>
            </div>
          </div>
        )}
      </div>

      {/* Post Custom Todo */}
      <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded">
        <h4 className="font-semibold mb-2">✍️ Create Custom Todo (POST)</h4>
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="Enter todo title"
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
          />
          <button
            onClick={handlePostTodo}
            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
            id="wd-post-todo"
          >
            Post Todo
          </button>
        </div>
      </div>

      {/* Todos List */}
      {todos.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Todos List ({todos.length})</h3>
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-start justify-between p-3 bg-gray-100 dark:bg-gray-800 rounded gap-3"
              >
                <div className="flex-1 min-w-0">
                  {editingTodoId === todo.id ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={editingTitle}
                        onChange={(e) => setEditingTitle(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
                        placeholder="Enter new title"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleSaveEdit(todo.id)}
                          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                        >
                          💾 Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
                        >
                          ❌ Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-sm text-gray-500 dark:text-gray-400 ${todo.completed ? "line-through" : ""}`}>
                        #{todo.id}
                      </span>
                      <span className={todo.completed ? "line-through opacity-60" : ""}>
                        {todo.title}
                      </span>
                      {todo.completed && (
                        <span className="text-green-500 text-sm">✓</span>
                      )}
                    </div>
                  )}
                </div>
                
                {editingTodoId !== todo.id && (
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => handleStartEdit(todo)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm whitespace-nowrap"
                      id={`wd-update-todo-${todo.id}`}
                      title="Edit this todo's title"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm whitespace-nowrap"
                      id={`wd-delete-todo-get-${todo.id}`}
                      title="Delete using GET method (returns all todos)"
                    >
                      🗑️ Del
                    </button>
                    <button
                      onClick={() => handleDeleteTodoREST(todo.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm whitespace-nowrap"
                      id={`wd-delete-todo-${todo.id}`}
                      title="Delete using DELETE method (RESTful)"
                    >
                      ❌
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
