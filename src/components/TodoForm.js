import React, { useState } from "react";
import { connect } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { TextField } from "react95";

function TodoForm({ auth }) {
    const [val, setVal] = useState();

    const firestore = useFirestore();
    
    const handleSubmit = e => {
        e.preventDefault();
        firestore.add('todos', {text: val, highPriority: false, isCompleted: false, user: auth.email});
        setVal('');
    };

    if (auth.isEmpty) return null;
    
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                value={val}
                onChange={(e) => setVal(e.target.value)}
                className="input"
                placeholder=" Enter your task"
            />
        </form>
    );
}

const mapStateToProps = ({firebase: {auth}}) => ({auth});
  
export default connect(mapStateToProps)(TodoForm);