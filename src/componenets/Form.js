import React, { useState } from "react";
import "./form.css";

const Form = (props) => {
  const [todo, setTodos] = useState({ todoText: "", todoDate: "" });
  return (
    <div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          props.onSave(todo);
          setTodos({ todoText: "", todoDate: "" });
        }}
      >
        <input
          onChange={(e) => {
            const newTodoText = e.target.value;
            setTodos((prevValue) => {
              return { ...prevValue, todoText: newTodoText };
            });
          }}
          type="text"
          placeholder="todo"
          name="todo"
          value={todo.todoText}
        />
        <input
          onChange={(e) => {
            const newTodoDate = e.target.value;
            setTodos((prevValue) => {
              return { ...prevValue, todoDate: newTodoDate };
            });
          }}
          type="date"
          placeholder=""
          name="date"
          value={todo.todoDate}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
