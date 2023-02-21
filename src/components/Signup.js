import React, { Component } from 'react';

class Signup extends Component {
	render() {
		return (
			<div>
				<h1>Futsal Tournament Sign-Up</h1>
				<form action="[Insert Link to Google Form]" method="post">
					<label for="full-name">Full Name:</label>
					<input type="text" id="full-name" name="full-name" required></input><br></br>
					<label for="team-name">Team Name:</label>
					<input type="text" id="team-name" name="team-name" required></input><br></br>
					<label for="email">Email:</label>
					<input type="email" id="email" name="email" required></input><br></br>
					<label for="phone-number">Phone Number:</label>
					<input type="tel" id="phone-number" name="phone-number" required></input><br></br>
					<input type="submit" value="Submit"></input>
				</form>
			</div>
		);
	}
}

export default Signup;