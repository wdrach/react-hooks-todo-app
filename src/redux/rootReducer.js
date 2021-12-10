import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
import todoReducer from './Todo/todo.reducer';

const rootReducer = combineReducers({
    todo: todoReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export default rootReducer;