import React from "react";

import { connect } from "react-redux"
import { AppBar, Avatar, Button, Toolbar } from "react95";
import { toggleAbout } from "../redux/Window/window.actions";
import Theme from "./Theme";

function Header({auth, toggleAbout}) {
    return (
        <AppBar>
            <Toolbar style={{height: 50}}>
				<Button variant="menu" onClick={toggleAbout}>About</Button>
				<Button variant="menu" disabled>File</Button>
				{!auth.isEmpty ? (
					<span style={{width: '100%'}}>
						<Theme />
						<Avatar size={50} style={{background: '#3498db', position: 'absolute', right: '10px', top: '2px'}}>
							{auth.email.slice(0, 1).toUpperCase()}
						</Avatar>
					</span>
				) : (
					<Avatar size={50} style={{background: '#e74c3c', position: 'absolute', right: '10px', top: '2px'}}>
						?
					</Avatar>
				)}
            </Toolbar>
        </AppBar>
    );
}

const mapStateToProps = ({firebase: {auth, profile}}) => ({auth, profile});

const mapDispatchToProps = dispatch => {
    return {
        toggleAbout: () => toggleAbout()(dispatch),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);