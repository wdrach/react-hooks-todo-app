import React from "react";
import { connect } from "react-redux";
import { useFirestore } from "react-redux-firebase";

function TodoForm({ auth }) {
	const firestore = useFirestore();
	
	const handleSubmit = e => {
		e.preventDefault();
		firestore.add('todos', {text: e.target.value, highPriority: false, isCompleted: false, user: auth.email});
		e.target.setValue('');
	};

	if (auth.isEmpty) return null;
	
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				placeholder=" Enter your task"
			/>
		</form>
	);
}

const mapStateToProps = ({firebase: {auth}}) => ({auth});
  
export default connect(mapStateToProps)(TodoForm);