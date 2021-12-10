import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from 'react-redux'
import store from './redux/store';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA77ridGPYFc8FmE-KY1qOvyBmIBc9-2vY",
    authDomain: "wdrach-react-todo.firebaseapp.com",
    projectId: "wdrach-react-todo",
    storageBucket: "wdrach-react-todo.appspot.com",
    messagingSenderId: "980856951435",
    appId: "1:980856951435:web:c89de01a8a453dd1f3ba8e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
