import React from "react";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import "./App.css";

import { connect } from "react-redux"

import Auth from "./components/Auth";

function App(props) {
	return (
		<div className="app">
			<div className="todo-list">
				<h1 className="title">Create a Todo with React Hooks</h1>
				{props.todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
					/>
				))}
				<TodoForm />
			</div>
			<Auth />
		</div>
	);
}

const mapStateToProps = state => {
	return {
	    todos: state.todo.todos,
	}
}
  
export default connect(mapStateToProps)(App);