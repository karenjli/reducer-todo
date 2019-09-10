import React, { useState, useReducer } from "react";

//component
import Todo from "./Todo";

//reducer
import { initialState, todoReducer } from "../reducers/reducer";

const TodoList = () => {
  //set state for data used in todo
  const [input, setNewInput] = useState();
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const onChange = event => {
    setNewInput(event.target.value);
  };

  return (
    <div>
      {state.itemList.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onClick={id => {
            dispatch({
              type: "TOGGLE_TODO",
              payload: id,
            });
          }}
          style={
            todo.completed === true ? { textDecoration: "line-through" } : null
          }
        />
      ))}
      <div className="todo-form">
        <input
          type="text"
          name="item"
          placeholder="Add your task"
          onChange={onChange}
        />
        <div className="btn">
          <button
            onClick={() => {
              dispatch({
                type: "ADD_TODO",
                payload: [
                  ...state.itemList,
                  { item: input, completed: false, id: new Date() },
                ],
              });
              setNewInput("");
            }}
          >
            Add Todo
          </button>
          <button
            onClick={() => {
              dispatch({
                type: "DELETE_COMPLETED",
                payload: state.itemList.filter(
                  item => item.completed === false,
                ),
              });
            }}
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
