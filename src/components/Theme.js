import React from "react";

import { connect } from "react-redux"
import { useFirebase } from "react-redux-firebase";
import { Checkbox } from "react95";

function Theme({auth, profile}) {
    const firebase = useFirebase();

    const updateTheme = () => {
        firebase.updateProfile({darkmode: !profile.darkmode});
    };

    if (auth.isEmpty) return null;

    return (
        <Checkbox
            style={{position: 'absolute', right: '70px', top: '10px'}}
            name='darkmode'
            value={profile.darkmode ? 'on' : 'off'}
            onChange={updateTheme}
            label='Dark Mode'
        />
    );
}

const mapStateToProps = ({firebase: {profile, auth}}) => ({profile, auth});
  
export default connect(mapStateToProps)(Theme);