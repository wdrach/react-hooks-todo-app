import React from "react";
import { connect } from "react-redux";
import { useFirestore } from "react-redux-firebase";

function Todo({todo, auth}) {
	const firestore = useFirestore();

	let buttons = (<div></div>);

	if (!auth.isEmpty) {
		buttons = (
			<div>
				<button onClick={() => firestore.update(`todos/${todo.id}`, {...todo, highPriority: !todo.highPriority})}>{todo.highPriority ? "High Priority" : "Low Priority"}</button>
				<button onClick={() => firestore.update(`todos/${todo.id}`, {...todo, isCompleted: !todo.isCompleted})}>{todo.isCompleted ? "Not done" : "Done"}</button>
				<button onClick={() => firestore.delete(`todos/${todo.id}`)}>x</button>
			</div>
		)
	}

	return (
		<div
			className="todo"
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
		>
			{todo.text}
			{buttons}
		</div>
	);
}

const mapStateToProps = ({firebase: {auth}}) => ({auth});
  
export default connect(mapStateToProps)(Todo);