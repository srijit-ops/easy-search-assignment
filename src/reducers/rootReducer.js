import {
  add_task,
  update_status,
  delete_task,
  filter_task,
} from "../actions/actionTypes";

const initialState = {
  todos: [],
  filter: "All",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_task:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case update_status:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (action.payload.todoId === todo.id) {
            return { ...todo, completed: !todo.completed };
          }
          return { ...todo };
        }),
      };
    case delete_task: {
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload.delId;
        }),
      };
    }
    case filter_task: {
      return {
        ...state,
        filter: action.payload.filter,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
