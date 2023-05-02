import React from "react";
import "./todo.css";

const Todo = (props) => {
  return (
    <li id={props.id}>
      <input type="checkbox" />
      <span className="todo-text">{props.todo}</span>
      <i
        className="fa-solid fa-trash todo-icon"
        onClick={(e) => {
          props.onDelete(props.id);
        }}
      ></i>
      <span className="todo-date">{props.date}</span>
    </li>
  );
};

export default Todo;
