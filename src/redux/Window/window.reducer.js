import { TOGGLE_ABOUT, TOGGLE_LOGIN, TOGGLE_START, TOGGLE_TODOS } from './window.types';

const INITIAL_STATE = {
  login: false,
  start: false,
  todos: true,
  about: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_LOGIN:
          return {...state, login: !state.login};
        case TOGGLE_START:
          return {...state, start: !state.start};
        case TOGGLE_TODOS:
          return {...state, todos: !state.todos};
        case TOGGLE_ABOUT:
          return {...state, about: !state.about};
          default: return state;
    }
};

export default reducer;