import React from "react";
import { connect } from "react-redux";
import { completeTodo, removeTodo } from "../redux/Todo/todo.actions";

function Todo({ todo, index, completeTodo, removeTodo }) {
	return (
		<div
			className="todo"
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
		>
			{todo.text}
			
			<div>
				<button onClick={() => completeTodo(index)}>{todo.isCompleted ? "Not done" : "Done"}</button>
				<button onClick={() => removeTodo(index)}>x</button>
			</div>
		</div>
	);
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
	return {
		removeTodo: (i) => removeTodo(i)(dispatch),
		completeTodo: (i) => completeTodo(i)(dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);