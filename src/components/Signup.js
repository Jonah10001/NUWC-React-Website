import React, { Component } from 'react';
import '../signup.css'
import shebelieves from '../assets/img/shebelieves.jpg'

class Signup extends Component {
	render() {
		return (
			<body className = "shebelieves">
				<center className = "event">
					<h1>Come and Support the Women's National Team!</h1>
					<p>Join us in supporting the USWNT as they play against Japan in the She Believes Cup!</p>
					<img src={shebelieves} alt="Women's Soccer Event"></img>
					<p>Date: Sunday 02/19/2022</p>
					<p>Time: 2:30PM</p>
					<p>Location: Tech M152</p>
					<p>Don't miss out on the chance to show your support and have a great time!</p>
					<p>Plus, baked goods will be provided!</p>
				</center>
			</body>
		);
	}
}

export default Signup;