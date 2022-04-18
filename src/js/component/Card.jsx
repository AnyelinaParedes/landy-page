import PropTypes from "prop-types";
import React from "react";
const Card = (props) => {
	return (
		<div className="card mb-4">
			<img src={props.image} className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href="#" className="btn btn-primary">
					{props.buttonTittle}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonTittle: PropTypes.string,
	image: PropTypes.any,
};

export default Card;
