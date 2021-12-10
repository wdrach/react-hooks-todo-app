import React from "react";
import { connect } from "react-redux";
import { useFirebase } from "react-redux-firebase";

function Auth(props) {
    const firebase = useFirebase();

	const handleLogin = e => {
		e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        firebase.login({email, password})
            .then(() => console.log('success!'))
            .catch((err) => {
                console.log(err.code);
                if (err.code === 'auth/user-not-found') {
                    firebase.createUser({email, password});
                } else {
                    // todo handle real error
                }
            });
	};

    if (!props.auth.isEmpty) {
        console.log(props.auth)
        return (
            <p>{props.auth.email}</p>
        )
    }
	
	return (
		<form onSubmit={handleLogin}>
			<input
                name="email"
				type="text"
				placeholder="email@mail.com"
			/>
            <input
                name="password"
                type="password"
            />
            <button type="submit">Log In</button>
		</form>
	);
}

const mapStateToProps = ({firebase: {auth, profile}}) => ({auth, profile});
  
export default connect(mapStateToProps)(Auth);