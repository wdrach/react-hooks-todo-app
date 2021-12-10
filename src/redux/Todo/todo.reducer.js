import { ADD_TODO, COMPLETE_TODO, REFRESH_TODOS, REMOVE_TODO } from './todo.types';

const INITIAL_STATE = {
    todos: [
      {
        text: "Complete coding challenge",
        isCompleted: true
      },
      {
        text: "Give Will a job",
        isCompleted: false
      },
      {
        text: "Pay Will lots of money",
        isCompleted: false
      }
    ]
};

const reducer = (state = INITIAL_STATE, action) => {
    // don't edit the state directly
    const todos = [...state.todos];
    switch (action.type) {
        case ADD_TODO:
          todos.push(action.todo)
            return {
              ...state, todos,
            };
        case REMOVE_TODO:
          todos.splice(action.index, 1);
            return {
              ...state, todos,
            };
        case COMPLETE_TODO:
          todos[action.index] = {...todos[action.index], isCompleted: !todos[action.index].isCompleted};
          return {
            ...state, todos,
          };
        case REFRESH_TODOS:
          return {
              ...state, todos: action.todos,
          };
          default: return state;
    }
};

export default reducer;