import React, { useState } from "react";
import { connect } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { Button, TextField, Window, WindowContent, WindowHeader } from "react95";
import { toggleLogin } from "../redux/Window/window.actions";

function Auth({toggleLogin}) {
    const firebase = useFirebase();
    
    // this could technically happen in redux, but since we only use it here
    // it seems fine to use the internal state
    const [state, setState] = useState({});

    const handleLogin = e => {
        e.preventDefault();

        firebase.login(state)
            .then(() => console.log('success!'))
            .catch((err) => {
                if (err.code === 'auth/user-not-found') {
                    firebase.createUser(state);
                    toggleLogin();
                } else {
                    setState({...state, error: true})
                }
            });
    };

    return (
        <Window style={{position: 'absolute', top: '25vh', left: '10vw', width: '500px'}}>
            <WindowHeader>
                <span>login.exe</span>
                <Button onClick={toggleLogin} style={{position: 'absolute', top: '10px', right: '10px'}}>X</Button>
            </WindowHeader>
            <WindowContent>
                {state.error && (<span style={{color: 'red'}}>Incorrect email or password</span>)}
                <form onSubmit={handleLogin}>
                    Email
                    <TextField value={state.email} onChange={(e) => setState({...state, email: e.target.value})}/>
                    Password
                    <TextField value={state.password} type="password" onChange={(e) => setState({...state, password: e.target.value})}/>
                    <Button type="submit">Log In</Button>
                    <Button type="submit">Sign Up</Button>
                </form>
            </WindowContent>
        </Window>
    );
}

const mapStateToProps = ({firebase: {auth, profile}}) => ({auth, profile});

const mapDispatchToProps = dispatch => {
    return {
        toggleLogin: () => toggleLogin()(dispatch),
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Auth);