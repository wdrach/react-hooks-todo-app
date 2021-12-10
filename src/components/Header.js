import React from "react";

import { connect } from "react-redux"
import Theme from "./Theme";

function Header() {
	return (
		<div className="header">
            I'm a HEADER
            <Theme />
		</div>
	);
}

const mapStateToProps = () => ({})
  
export default connect(mapStateToProps)(Header);