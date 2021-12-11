import { TOGGLE_START, TOGGLE_LOGIN, TOGGLE_TODOS, TOGGLE_ABOUT } from './window.types';

export const toggleStart = () => (dispatch) => {
    dispatch({
        type: TOGGLE_START
    })
};

export const toggleLogin = () => (dispatch) => {
    dispatch({
        type: TOGGLE_LOGIN
    })
};

export const toggleTodos = () => (dispatch) => {
    dispatch({
        type: TOGGLE_TODOS
    });
};

export const toggleAbout = () => (dispatch) => {
    dispatch({
        type: TOGGLE_ABOUT
    });
};