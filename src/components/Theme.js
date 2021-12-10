import React from "react";

import { connect } from "react-redux"
import { useFirebase } from "react-redux-firebase";

function Theme(props) {
	const firebase = useFirebase();

	const updateTheme = () => {
		firebase.updateProfile({darkmode: !props.profile.darkmode});
	};

	return (
		<div className="theme">
			<input type="checkbox" value={props.profile.darkmode ? 'on' : 'off'} onChange={updateTheme} />
		</div>
	);
}

const mapStateToProps = ({firebase: {profile}}) => ({profile});
  
export default connect(mapStateToProps)(Theme);