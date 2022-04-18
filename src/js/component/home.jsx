import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron
					title="A warm Welcome"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					descriptionButton="Call to action!"
				/>
				<div className="row">
					<div className="col-md-3">
						<Card
							title="Card title "
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							buttonTittle="Find Out More"
							image={"https://picsum.photos/200"}
						/>
					</div>

					<div className="col-md-3">
						<Card
							title="Card title "
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							buttonTittle="Find Out More"
							image={"https://picsum.photos/200"}
						/>
					</div>

					<div className="col-md-3">
						<Card
							title="Card title "
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							buttonTittle="Find Out More"
							image={"https://picsum.photos/200"}
						/>
					</div>

					<div className="col-md-3">
						<Card
							title="Card title "
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							buttonTittle="Find Out More"
							image={"https://picsum.photos/200"}
						/>
					</div>
				</div>
			</div>
			<Footer description="Copyright © Your Website 2019" />
		</>
	);
};

export default Home;
