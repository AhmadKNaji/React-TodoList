import React from "react";

export default function TodoList(props) {
  return (
    <div className="todo-item">
        <input type='checkbox' checked={props.elt.completed}/>
        <p>{props.task}</p>
    </div>
  );
}
