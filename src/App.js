import React from "react";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import "./App.css";

import { compose } from "redux"
import { connect } from "react-redux"

import Auth from "./components/Auth";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { firestoreConnect } from "react-redux-firebase";

function App(props) {
	return (
		<div className="app">
			<Header />
			<div className="todo-list">
				<h1 className="title">Create a Todo with React Hooks</h1>
				{props.todos.map((todo, index) => (
					<Todo
						key={todo.id}
						index={index}
						todo={todo}
					/>
				))}
				<TodoForm />
			</div>
			<Auth />
			<Footer />
		</div>
	);
}

export default compose(
	firestoreConnect(() => ([{
		collection: 'todos',
		orderBy: ['highPriority', 'desc'],
	}])),
	connect(({firestore: {ordered}}) => ({
	  todos: (ordered && ordered.todos) || []
	}))
  )(App)