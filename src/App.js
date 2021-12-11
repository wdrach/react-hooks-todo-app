// lib imports
import React from "react";
import { styleReset, List, Window, WindowHeader, WindowContent, Button } from 'react95';
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux"
import { createGlobalStyle, ThemeProvider } from "styled-components";

// local imports
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

import { toggleTodos } from "./redux/Window/window.actions";

import "./App.css";

// react 95 styling stuff
import original from "react95/dist/themes/original";
import dark from 'react95/dist/themes/powerShell';
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

function App({todos, profile, about, todoWindow, toggleTodos}) {
    const theme = profile.darkmode ? dark : original;
    return (
        <div style={{background: theme.flatLight, height: '100vh'}}>
        <GlobalStyles />
                <ThemeProvider theme={theme}>
                <Header />
                {about && (<About />)}
                {todoWindow && (
                <div style={{width: '100%'}}>
                    <Window style={{width: '50%', minWidth: '563px', margin: '100px 25%'}}>
                        <WindowHeader>
                            todos.exe
                            <Button onClick={toggleTodos} style={{position: 'absolute', top: '10px', right: '10px'}}>
                                X
                            </Button>
                        </WindowHeader>
                        <WindowContent>
                            <List style={{width: '100%'}}>
                                {todos.map((todo, index) => (
                                    <Todo
                                        key={todo.id}
                                        index={index}
                                        todo={todo}
                                    />
                                ))}
                            </List>
                        </WindowContent>
                        <TodoForm />
                    </Window>
                </div>
                )}
                <Footer />
            </ThemeProvider>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodos: () => toggleTodos()(dispatch),
    };
}

export default compose(
    firestoreConnect(() => ([{
        collection: 'todos',
        orderBy: ['highPriority', 'desc']
    }])),
    connect(({firestore: {ordered}, firebase: {profile}, windows: {todos, about}}) => ({
      todos: (ordered && ordered.todos) || [],
      profile,
      todoWindow: todos,
      about,
    }), mapDispatchToProps)
  )(App)