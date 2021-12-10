import React from "react";

import { connect } from "react-redux"

function Footer() {
	return (
		<div className="footer">
            I'm not a header
		</div>
	);
}

const mapStateToProps = () => ({})
  
export default connect(mapStateToProps)(Footer);