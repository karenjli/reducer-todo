import React from "react";

const Todo = props => {
  return (
    <div
      className="todo"
      onClick={() => {
        props.onClick(props.todo.id);
      }}
    >
      <p style={props.style}>{props.todo.item}</p>
    </div>
  );
};

export default Todo;
