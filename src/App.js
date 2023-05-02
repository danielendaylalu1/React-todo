import React, { useState } from "react";
import "./App.css";
import Header from "./componenets/Header";
import Form from "./componenets/Form";
import Todo from "./componenets/Todo";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Header />
      <Form
        onSave={(todo) => {
          setTodos((prevValue) => {
            return [...prevValue, todo];
          });
        }}
      />
      <ul className="todos">
        {todos.map((todo, index) => {
          return (
            <Todo
              key={uuidv4()}
              id={index}
              todo={todo.todoText}
              date={todo.todoDate}
              onDelete={(item) => {
                setTodos((prevValue) => {
                  return todos.filter((todo, index) => {
                    return index !== item;
                  });
                });
                console.log(todos);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
