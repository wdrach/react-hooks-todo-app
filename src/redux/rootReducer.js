import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
import windowReducer from './Window/window.reducer';

const rootReducer = combineReducers({
    windows: windowReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export default rootReducer;