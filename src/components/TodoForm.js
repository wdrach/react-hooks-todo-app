import React, { useState } from "react";
import { connect } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { addTodo } from "../redux/Todo/todo.actions";

function TodoForm({ auth }) {
	// TODO - state is probably unneccesary here
	const [value, setValue] = useState("");

	const firestore = useFirestore();
	
	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		firestore.add('todos', {text: value, highPriority: false, isCompleted: false, user: auth.email});
		setValue("");
	};

	if (auth.isEmpty) return null;
	
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder=" Enter your task"
			/>
		</form>
	);
}

const mapStateToProps = ({firebase: {auth}}) => ({auth});
  
const mapDispatchToProps = dispatch => {
	return {
		addTodo: (todo) => addTodo(todo)(dispatch),
	};
}
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);