import { firebaseReducer, firestoreReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import todoReducer from './Todo/todo.reducer';

const rootReducer = combineReducers({
    todo: todoReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export default rootReducer;