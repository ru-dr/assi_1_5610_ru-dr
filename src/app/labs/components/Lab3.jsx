"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Lab3() {
  const variableScalars = {
    integerVariable: 123,
    floatingPointNumber: 234.345,
    stringVariable: "Hello World",
  };

  const booleanVariable = true;
  const booleanFalse = false;

  const [todos, setTodos] = useState([
    { id: 1, title: "Buy milk", done: false },
    { id: 2, title: "Feed the pets", done: true },
    { id: 3, title: "Have lunch", done: false },
    { id: 4, title: "Exercise", done: false },
  ]);

  const numberArray1 = [1, 2, 3, 4, 5];
  const stringArray1 = ["string1", "string2"];

  const variableArray1 = [
    variableScalars.integerVariable,
    variableScalars.floatingPointNumber,
    variableScalars.stringVariable,
  ];

  const json = {
    integerVariable: 123,
    floatingPointNumber: 234.345,
    stringVariable: "Hello World",
    booleanVariable: true,
    nestedObject: {
      a: "A",
      b: "B",
      c: "C",
    },
    arrayVariable: [1, 2, 3],
  };

  function add(a, b) {
    return a + b;
  }

  const subtract = (a, b) => {
    return a - b;
  };

  const multiply = (a, b) => a * b;

  const todos1 = todos;
  const todos2 = [...todos];
  const todosWithNewItem = [
    ...todos,
    {
      id: 5,
      title: "New Todo",
      done: false,
    },
  ];

  const todosAfterDelete = todos.filter((todo) => todo.id !== 1);

  const todosAfterUpdate = todos.map((todo) => {
    if (todo.id === 2) {
      return { ...todo, title: "Feed the cats" };
    } else {
      return todo;
    }
  });

  const { integerVariable, floatingPointNumber, stringVariable } =
    variableScalars;
  const [firstNumber, secondNumber, ...restNumbers] = numberArray1;

  const destructFunction = ({ id, title, done }) => {
    return `${id} - ${title} - ${done}`;
  };

  const fourthItem = numberArray1[3];
  const arrayLength = numberArray1.length;
  const lastItem = numberArray1[numberArray1.length - 1];

  const todoIndexOf3 = todos.findIndex((todo) => todo.id === 3);
  const todosWithIdLessThan3 = todos.filter((todo) => todo.id < 3);
  const todoWith2 = todos.find((todo) => todo.id === 2);

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Lab 3 - JavaScript and React</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Variables and Constants</h2>
        <div className="space-y-2 font-mono text-sm">
          <div>integerVariable = {variableScalars.integerVariable}</div>
          <div>floatingPointNumber = {variableScalars.floatingPointNumber}</div>
          <div>stringVariable = {variableScalars.stringVariable}</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Variable Types</h2>
        <div className="space-y-2 font-mono text-sm">
          <div>integerVariable = {variableScalars.integerVariable}</div>
          <div>
            typeOfIntegerVariable = {typeof variableScalars.integerVariable}
          </div>
          <div>floatingPointNumber = {variableScalars.floatingPointNumber}</div>
          <div>
            typeOfFloatingPointNumber ={" "}
            {typeof variableScalars.floatingPointNumber}
          </div>
          <div>stringVariable = {variableScalars.stringVariable}</div>
          <div>
            typeOfStringVariable = {typeof variableScalars.stringVariable}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Boolean Variables</h2>
        <div className="space-y-2 font-mono text-sm">
          <div>booleanVariable = {booleanVariable.toString()}</div>
          <div>typeOfBooleanVariable = {typeof booleanVariable}</div>
          <div>booleanFalse = {booleanFalse.toString()}</div>
          <div>typeOfBooleanFalse = {typeof booleanFalse}</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">If Else</h2>
        <div className="space-y-2 font-mono text-sm">
          {booleanVariable && <div>true</div>}
          {!booleanVariable && <div>false</div>}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Ternary Conditional Operator
        </h2>
        <div className="space-y-2 font-mono text-sm">
          <div>{booleanVariable ? "true" : "false"}</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Generating Conditional Output
        </h2>
        <div className="space-y-2 font-mono text-sm">
          <div>{booleanVariable ? "Logged in" : "Not logged in"}</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome If Else</h2>
        <div className="space-y-2 text-sm">
          {booleanVariable && <h3>Welcome</h3>}
          {!booleanVariable && <h3>Welcome Stranger</h3>}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Please Login Inline</h2>
        <div className="space-y-2 text-sm">
          {booleanVariable && <h3>Welcome</h3>}
          {!booleanVariable && <h3>Please login</h3>}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Legacy ES5 Function</h2>
        <div className="space-y-2 font-mono text-sm">
          <div>add(1, 2) = {add(1, 2)}</div>
          <div>subtract(5, 2) = {subtract(5, 2)}</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">ES6 Arrow Functions</h2>
        <div className="space-y-2 font-mono text-sm">
          <div>subtract(5, 2) = {subtract(5, 2)}</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Implied Returns</h2>
        <div className="space-y-2 font-mono text-sm">
          <div>multiply(2, 3) = {multiply(2, 3)}</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Template Literals</h2>
        <div className="space-y-2 font-mono text-sm">
          <div>{`integerVariable = ${variableScalars.integerVariable}`}</div>
          <div>{`floatingPointNumber = ${variableScalars.floatingPointNumber}`}</div>
          <div>{`stringVariable = ${variableScalars.stringVariable}`}</div>
          <div>{`2 + 3 = ${2 + 3}`}</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Working with Arrays</h2>
        <div className="space-y-2 font-mono text-sm">
          <div>numberArray1 = [{numberArray1.join(", ")}]</div>
          <div>stringArray1 = [{stringArray1.join(", ")}]</div>
          <div>variableArray1 = [{variableArray1.join(", ")}]</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Array Index and Length</h2>
        <div className="space-y-2 font-mono text-sm">
          <div>numberArray1[0] = {numberArray1[0]}</div>
          <div>numberArray1[1] = {numberArray1[1]}</div>
          <div>numberArray1[2] = {numberArray1[2]}</div>
          <div>numberArray1[3] = {fourthItem}</div>
          <div>numberArray1.length = {arrayLength}</div>
          <div>numberArray1[numberArray1.length - 1] = {lastItem}</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Adding and Removing Data to/from Arrays
        </h2>
        <div className="space-y-2 font-mono text-sm">
          <div>numberArray1 = [{numberArray1.join(", ")}]</div>
          <div>Adding 6 to the end of numberArray1</div>
          <div>numberArray1 = [{[...numberArray1, 6].join(", ")}]</div>
          <div>Removing first element of numberArray1</div>
          <div>numberArray1 = [{numberArray1.slice(1).join(", ")}]</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">For Loops</h2>
        <div className="space-y-2 font-mono text-sm">
          <div>Loop through numberArray1:</div>
          {numberArray1.map((number, index) => (
            <div key={index}>{number}</div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Map Function</h2>
        <div className="space-y-2 font-mono text-sm">
          <div>Map todos:</div>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.id} - {todo.title} - {todo.done.toString()}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Find Function</h2>
        <div className="space-y-2 font-mono text-sm">
          <div>todoWith2 = {JSON.stringify(todoWith2)}</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Find Index Function</h2>
        <div className="space-y-2 font-mono text-sm">
          <div>todoIndexOf3 = {todoIndexOf3}</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Filter Function</h2>
        <div className="space-y-2 font-mono text-sm">
          <div>todosWithIdLessThan3:</div>
          <ul>
            {todosWithIdLessThan3.map((todo) => (
              <li key={todo.id}>
                {todo.id} - {todo.title} - {todo.done.toString()}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          JavaScript Object Notation (JSON)
        </h2>
        <div className="space-y-2 font-mono text-sm">
          <pre>{JSON.stringify(json, null, 2)}</pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Implementing a Simple ToDo List using React.js
        </h2>
        <TodoList todos={todos} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Spread Operator</h2>
        <div className="space-y-2 font-mono text-sm">
          <div>todos1 === todos = {(todos1 === todos).toString()}</div>
          <div>todos2 === todos = {(todos2 === todos).toString()}</div>
          <div>todos with new item:</div>
          <ul>
            {todosWithNewItem.map((todo) => (
              <li key={todo.id}>
                {todo.id} - {todo.title}
              </li>
            ))}
          </ul>
          <div>todos after delete (remove id=1):</div>
          <ul>
            {todosAfterDelete.map((todo) => (
              <li key={todo.id}>
                {todo.id} - {todo.title}
              </li>
            ))}
          </ul>
          <div>todos after update (update id=2):</div>
          <ul>
            {todosAfterUpdate.map((todo) => (
              <li key={todo.id}>
                {todo.id} - {todo.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Destructuring</h2>
        <div className="space-y-2 font-mono text-sm">
          <div>integerVariable = {integerVariable}</div>
          <div>floatingPointNumber = {floatingPointNumber}</div>
          <div>stringVariable = {stringVariable}</div>
          <div>firstNumber = {firstNumber}</div>
          <div>secondNumber = {secondNumber}</div>
          <div>restNumbers = [{restNumbers.join(", ")}]</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Function Destructuring</h2>
        <div className="space-y-2 font-mono text-sm">
          <div>{destructFunction(todos[0])}</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Working with HTML Classes
        </h2>
        <div className="space-y-2">
          <div className="p-2.5 border-4 border-solid border-blue-500 bg-yellow-300 text-black">
            Yellow background
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Red Dangerous Background
        </h2>
        <div className="space-y-2">
          <div className="bg-red-500 text-black p-2.5">
            Dangerous background
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Blue Dynamic Blue Background
        </h2>
        <div className="space-y-2">
          <div className="bg-blue-500 text-black p-2.5">
            Dynamic blue background
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Working with the HTML Style Attribute
        </h2>
        <div className="space-y-2">
          <div
            style={{
              backgroundColor: "yellow",
              color: "black",
              padding: "10px",
            }}
          >
            Yellow background
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Styles: Yellow, Red, Blue Backgrounds
        </h2>
        <div className="space-y-2">
          <div
            style={{
              backgroundColor: "yellow",
              color: "black",
              padding: "10px",
            }}
          >
            Yellow background
          </div>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px",
            }}
          >
            Red background
          </div>
          <div
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px",
            }}
          >
            Blue background
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Parameterizing Components
        </h2>
        <div className="space-y-2">
          <Square color="red" />
          <Square color="blue" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Child Components</h2>
        <div className="space-y-2">
          <Parent>
            <div className="p-2.5 border border-gray-300">Child 1</div>
            <div className="p-2.5 border border-gray-300">Child 2</div>
          </Parent>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Encoding Path Parameters
        </h2>
        <div className="space-y-2 font-mono text-sm">
          <div>Click any of them:</div>
          <div>
            <Link
              href="/labs/add/1/2"
              className="text-blue-600 hover:underline"
            >
              1 + 2
            </Link>
          </div>
          <div>
            <Link
              href="/labs/add/3/4"
              className="text-blue-600 hover:underline"
            >
              3 + 4
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function TodoItem({ todo }) {
  return (
    <li className="py-1">
      {todo.id} - {todo.title} - {todo.done ? "done" : "not done"}
    </li>
  );
}

function TodoList({ todos }) {
  return (
    <ul className="list-disc pl-5">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

function Square({ color }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "100px",
        height: "100px",
        display: "inline-block",
        margin: "10px",
      }}
    />
  );
}

function Parent({ children }) {
  return (
    <div className="border-4 border-solid p-2.5">
      <h4 className="font-semibold mb-2">Parent Component</h4>
      {children}
    </div>
  );
}
