export const initialState = {
  itemList: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, itemList: action.payload };
    default:
      return state;
    case "TOGGLE_TODO":
      return {
        ...state,
        itemList: state.itemList.map(item => {
          return item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item;
        }),
      };
  }
};
