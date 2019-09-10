import React, { useState, useReducer } from "react";

//component
import Todo from "./Todo";

//reducer
import { initialState, todoReducer } from "../reducers/reducer";

const TodoList = () => {
  //set state for data used in todo
  const [newTodo, setNewTodo] = useState();
  //set up reducer hook
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state.item);

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };
  return (
    <div>
      <Todo item={state.item} />
      <input
        type="text"
        name="newTodo"
        value={newTodo}
        placeholder="Add your task"
        onChange={handleChanges}
      />
      <button onClick={() => dispatch({ type: "ADD_TODO" })}>Add Todo</button>
      <button onClick="">Clear Completed</button>
    </div>
  );
};

export default TodoList;
