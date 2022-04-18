import propTypes from "prop-types";
import React from "react";
const Footer = (props) => {
	return (
		<footer className="d-flex flex-wrap bg-dark d-flex justify-content-center mt-5 py-4 ">
			<p className=" text-white ">{props.description}</p>
		</footer>
	);
};

Footer.prototypes = {
	description: propTypes.string,
};

export default Footer;
