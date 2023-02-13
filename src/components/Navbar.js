import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBIcon, MDBContainer } from 'mdbreact';
import "../navbar.css";
// fix the calendar part on the nav and make it point to the calendar component

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-static-top navbar-expand-lg navbar-dark" color='dark-grey' role="navigation">
				<div className="container">
					<div className="col-md-6">
					<Link className="navbar-brand" to={'/'}>
						NU World Cup
					</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
						aria-controls="#navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					</div>

					<div className="right-side-nav">
						<div className="icons">
						<MDBContainer>
						<a href="https://www.facebook.com/nuworldcup" target="_blank" rel="noopener noreferrer" className="fb-ic mr-3 fa-lg">
							<MDBIcon fab icon="facebook-f" />
						</a>
						<a href="https://www.instagram.com/nuworldcup/" target="_blank" rel="noopener noreferrer" className="ins-ic mr-3 fa-lg pink-text">
							<MDBIcon fab icon="instagram" />
						</a>
						<a href="mailto:northwesternworldup@gmail.com" className="email-ic mr-3 fa-lg white-text">
							<MDBIcon icon="envelope" />
						</a>
						</MDBContainer>
						</div>

						<div className =  "col-md-4">
							<div className="collapse navbar-collapse" id="navbarToggler">
								<ul className="navbar-nav mr-auto spooky-text">
								</ul>
								<ul className="navbar-nav">
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Menu
									</a>
									<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link className="dropdown-item" to={'/signup'}>Next Event</Link>
									<Link className="dropdown-item" to={'/bracket'}>Brackets</Link>
									<Link className="dropdown-item" to={'/calendar'}>Calendar</Link>
									<Link className="dropdown-item" to={'/gallery'}>Gallery</Link>
									<Link className="dropdown-item" to={'/contact'}>Contact Us</Link>
									</div>
								</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
