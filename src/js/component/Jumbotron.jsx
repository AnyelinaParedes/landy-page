import PropTypes from "prop-types";
import React from "react";
const Jumbotron = (props) => {
	return (
		<div className="Jumbotron bg-light p-5 my-4">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>

			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					{props.descriptionButton}
				</a>
			</p>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	descriptionButton: PropTypes.string,
};

export default Jumbotron;
