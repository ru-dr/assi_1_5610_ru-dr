"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/app/store/counterReducer";
import { add } from "@/app/store/addReducer";
import {
  addTodo,
  deleteTodo,
  updateTodo,
  setTodo,
} from "@/app/store/todosReducer";

export default function Lab4() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        Lab 4 - React State Management
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">User Events</h2>
        <ClickEvent />
        <PassingDataOnEvent />
        <PassingFunctions />
        <EventObject />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Component State</h2>
        <Counter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariable />
        <ObjectStateVariable />
        <ArrayStateVariable />
        <ParentStateComponent />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Application State - Redux
        </h2>
        <ReduxExamples />
      </section>
    </div>
  );
}

function ClickEvent() {
  const [message, setMessage] = useState("");

  const hello = () => {
    setMessage("Hello World!");
  };

  const lifeIs = (good) => {
    setMessage(`Life is ${good}`);
  };

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-semibold mb-3">Handling Click Events</h3>
      <div className="space-y-2">
        <button
          onClick={hello}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
        >
          Click Hello
        </button>
        <button
          onClick={() => lifeIs("Good!")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
        >
          Click Good
        </button>
        <button
          onClick={() => lifeIs("Great!")}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Click Great
        </button>
      </div>
      {message && (
        <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-800 rounded">
          {message}
        </div>
      )}
    </div>
  );
}

function PassingDataOnEvent() {
  const [message, setMessage] = useState("");

  const displayMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-semibold mb-3">
        Passing Data when Handling Events
      </h3>
      <div className="space-y-2">
        <button
          onClick={() => displayMessage("Hello from Button 1")}
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 mr-2"
        >
          Button 1
        </button>
        <button
          onClick={() => displayMessage("Hello from Button 2")}
          className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
        >
          Button 2
        </button>
      </div>
      {message && <div className="mt-3 p-3 bg-gray-100 rounded">{message}</div>}
    </div>
  );
}

function PassingFunctions() {
  const [count, setCount] = useState(0);

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-semibold mb-3">
        Passing Functions as Attributes
      </h3>
      <div className="mb-3">
        <p className="text-lg font-mono">Count: {count}</p>
      </div>
      <CounterButtons
        increment={() => setCount(count + 1)}
        decrement={() => setCount(count - 1)}
      />
    </div>
  );
}

function CounterButtons({ increment, decrement }) {
  return (
    <div className="space-x-2">
      <button
        onClick={increment}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Increment
      </button>
      <button
        onClick={decrement}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Decrement
      </button>
    </div>
  );
}

function EventObject() {
  const [event, setEvent] = useState(null);

  const handleClick = (e) => {
    setEvent({
      type: e.type,
      target: e.target.tagName,
      clientX: e.clientX,
      clientY: e.clientY,
    });
  };

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-semibold mb-3">The Event Object</h3>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
      >
        Click to See Event Details
      </button>
      {event && (
        <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-800 rounded font-mono text-sm">
          <div>Event Type: {event.type}</div>
          <div>Target: {event.target}</div>
          <div>
            Position: ({event.clientX}, {event.clientY})
          </div>
        </div>
      )}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(7);

  return (
    <div className="mb-6 ">
      <h3 className="text-xl font-semibold mb-3">Integer State Variables</h3>
      <div className="mb-3">
        <p className="text-lg font-mono">Count: {count}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => setCount(count + 1)}
          id="wd-counter-up-click"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          id="wd-counter-down-click"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

function BooleanStateVariables() {
  const [done, setDone] = useState(true);

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-semibold mb-3">Boolean State Variables</h3>
      <div className="mb-3">
        <p className="text-lg">Done: {done ? "true" : "false"}</p>
      </div>
      <button
        onClick={() => setDone(!done)}
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
      >
        Toggle Done
      </button>
    </div>
  );
}

function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-semibold mb-3">String State Variables</h3>
      <div className="mb-3">
        <p className="text-lg">First Name: {firstName}</p>
      </div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="px-3 py-2 border rounded w-full max-w-md bg-white dark:bg-gray-800 dark:border-gray-600"
        placeholder="Enter first name"
      />
    </div>
  );
}

function DateStateVariable() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-semibold mb-3">Date State Variables</h3>
      <div className="mb-3">
        <p className="text-lg">Current Date: {date.toLocaleDateString()}</p>
        <p className="text-lg">Current Time: {date.toLocaleTimeString()}</p>
      </div>
      <button
        onClick={() => setDate(new Date())}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Update Date/Time
      </button>
    </div>
  );
}

function ObjectStateVariable() {
  const [person, setPerson] = useState({ name: "John", age: 25 });

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-semibold mb-3">Object State Variables</h3>
      <div className="mb-3">
        <p className="text-lg">Name: {person.name}</p>
        <p className="text-lg">Age: {person.age}</p>
      </div>
      <div className="space-y-2 mb-3">
        <input
          type="text"
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          className="px-3 py-2 border border-gray-300 rounded w-full max-w-md bg-white dark:bg-gray-800 dark:border-gray-600"
          placeholder="Name"
        />
        <input
          type="number"
          value={person.age}
          onChange={(e) =>
            setPerson({ ...person, age: parseInt(e.target.value) })
          }
          className="px-3 py-2 border border-gray-300 rounded w-full max-w-md bg-white dark:bg-gray-800 dark:border-gray-600"
          placeholder="Age"
        />
      </div>
    </div>
  );
}

function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index) => {
    setArray(array.filter((item, i) => i !== index));
  };

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-semibold mb-3">Array State Variables</h3>
      <div className="mb-3">
        <p className="text-lg mb-2">Array: [{array.join(", ")}]</p>
        <ul className="space-y-1">
          {array.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="font-mono">{item}</span>
              <button
                onClick={() => deleteElement(index)}
                className="px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={addElement}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add Element
      </button>
    </div>
  );
}

function ParentStateComponent() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-semibold mb-3">
        Sharing State Between Components
      </h3>
      <div className="mb-3">
        <p className="text-lg font-mono">Parent Counter: {counter}</p>
      </div>
      <div className="space-y-4">
        <ChildStateComponent counter={counter} setCounter={setCounter} />
        <ChildStateComponent counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
}

function ChildStateComponent({ counter, setCounter }) {
  return (
    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded">
      <p className="mb-2">Child Component - Counter: {counter}</p>
      <div className="space-x-2">
        <button
          onClick={() => setCounter(counter + 1)}
          className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

function ReduxExamples() {
  return (
    <div className="space-y-6">
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <TodoList />
    </div>
  );
}

function HelloRedux() {
  const message = useSelector((state) => state.hello.message);

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-semibold mb-3">Hello World Redux</h3>
      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
        <p className="text-lg">{message}</p>
      </div>
    </div>
  );
}

function CounterRedux() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-semibold mb-3">
        Counter Redux - Dispatching Events
      </h3>
      <div className="mb-3">
        <p className="text-lg font-mono">Count: {count}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => dispatch(increment())}
          id="wd-counter-redux-increment-click"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          id="wd-counter-redux-decrement-click"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  const sum = useSelector((state) => state.add.sum);
  const dispatch = useDispatch();

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-semibold mb-3">Passing Data to Reducers</h3>
      <div className="mb-3">
        <p className="text-lg font-mono">
          {a} + {b} = {sum}
        </p>
      </div>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value) || 0)}
        className="px-3 py-2 border border-gray-300 rounded bg-white dark:bg-gray-800 dark:border-gray-600 mr-2"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value) || 0)}
        className="px-3 py-2 border border-gray-300 rounded bg-white dark:bg-gray-800 dark:border-gray-600 mr-2"
      />
      <button
        onClick={() => dispatch(add({ a, b }))}
        id="wd-add-redux-click"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
}

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const todo = useSelector((state) => state.todos.todo);
  const dispatch = useDispatch();

  return (
    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-semibold mb-3">Todo List with Redux</h3>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Create New Todo</h4>
        <div className="flex gap-2">
          <input
            type="text"
            value={todo.title}
            onChange={(e) =>
              dispatch(setTodo({ ...todo, title: e.target.value }))
            }
            className="flex-1 px-3 py-2 border border-gray-300 rounded bg-white dark:bg-gray-800 dark:border-gray-600"
            placeholder="Enter todo title"
          />
          <button
            onClick={() => dispatch(addTodo(todo))}
            id="wd-add-todo-click"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add
          </button>
          <button
            onClick={() => dispatch(updateTodo(todo))}
            id="wd-update-todo-click"
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Update
          </button>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Todo Items</h4>
        <ul className="space-y-2">
          {todos.map((item) => (
            <TodoItem key={item.id} todo={item} dispatch={dispatch} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function TodoItem({ todo, dispatch }) {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleUpdate = () => {
    dispatch(updateTodo({ ...todo, title: editTitle }));
    setEditing(false);
  };

  return (
    <li className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded">
      {editing ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="flex-1 px-2 py-1 border border-gray-300 rounded bg-white dark:bg-gray-800 dark:border-gray-600"
          />
          <button
            onClick={handleUpdate}
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={() => setEditing(false)}
            className="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            id="wd-delete-todo-click"
            className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
          >
            Delete
          </button>
          <button
            onClick={() => dispatch(setTodo(todo))}
            id="wd-set-todo-click"
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
          >
            Edit
          </button>
          <span className="flex-1">{todo.title}</span>
        </>
      )}
    </li>
  );
}
