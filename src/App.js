// import logo from './logo.svg';
import React from "react";
import TodoList from "./Checkbox";
import "./App.css";

function App() {
  return (
    <div className="todo-list">
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
    </div>
  );
}

export default App;
