import { ADD_TODO, REMOVE_TODO, REFRESH_TODOS, COMPLETE_TODO } from './todo.types';

export const addTodo = (todo) => (dispatch) => {
    dispatch({
        type: ADD_TODO,
        todo
    });
};

export const removeTodo = (index) => (dispatch) => {
    dispatch({
        type: REMOVE_TODO,
        index
    });
};

export const refreshTodos = (todos) => (dispatch) => {
    dispatch({
       type: REFRESH_TODOS,
       todos
    });
};

export const completeTodo = (index) => (dispatch) => {
    dispatch({
        type: COMPLETE_TODO,
        index
    });
};