import React from "react";
import { connect } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { Button, ListItem } from "react95";

function Todo({todo, auth}) {
    const firestore = useFirestore();

    let buttons = (<div></div>);

    if (!auth.isEmpty) {
        buttons = (
            <div>
                <Button onClick={() => firestore.update(`todos/${todo.id}`, {...todo, highPriority: !todo.highPriority})}>{todo.highPriority ? "Move To Low Priority" : "Move To High Priority"}</Button>
                <Button onClick={() => firestore.update(`todos/${todo.id}`, {...todo, isCompleted: !todo.isCompleted})}>{todo.isCompleted ? "Not done" : "Done"}</Button>
                <Button onClick={() => firestore.delete(`todos/${todo.id}`)}>x</Button>
            </div>
        )
    }

    return (
        <ListItem
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}
            {buttons}
        </ListItem>
    );
}

const mapStateToProps = ({firebase: {auth}}) => ({auth});
  
export default connect(mapStateToProps)(Todo);