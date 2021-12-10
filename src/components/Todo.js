import React from "react";
import { connect } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { completeTodo, removeTodo } from "../redux/Todo/todo.actions";

function Todo({todo, index}) {
	const firestore = useFirestore();

	return (
		<div
			className="todo"
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
		>
			{todo.text}
			
			<div>
				<button onClick={() => firestore.update(`todos/${todo.id}`, {...todo, highPriority: !todo.highPriority})}>{todo.highPriority ? "High Priority" : "Low Priority"}</button>
				<button onClick={() => firestore.update(`todos/${todo.id}`, {...todo, isCompleted: !todo.isCompleted})}>{todo.isCompleted ? "Not done" : "Done"}</button>
				<button onClick={() => firestore.delete(`todos/${todo.id}`)}>x</button>
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