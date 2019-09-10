import React, { useState, useReducer } from "react";

//reducer
import { initialState, todoReducer } from "../reducers/reducer";

const TodoForm = () => {
  const [input, NewInput] = useState();
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="todo-form">
      <input type="text" name="item" placeholder="Add your task" onChange="" />
      <button onClick={() => dispatch({ type: "ADD_TODO" })}>Add Todo</button>
      <button onClick="">Clear Completed</button>
    </div>
  );
};
export default TodoForm;
