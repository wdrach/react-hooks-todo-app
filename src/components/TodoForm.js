import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/Todo/todo.actions";

function TodoForm({ addTodo }) {
	const [value, setValue] = useState("");
	
	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		addTodo({text: value});
		setValue("");
	};
	
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

const mapStateToProps = () => ({});
  
const mapDispatchToProps = dispatch => {
	return {
		addTodo: (todo) => addTodo(todo)(dispatch),
	};
}
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);