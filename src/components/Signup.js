import React, { Component } from 'react';
import '../signup.css'
import shebelieves from '../assets/img/shebelieves.jpg'

class Signup extends Component {
	render() {
		return (
			<body className = "shebelieves">
				<center className = "event">
					<h1>Come and Support the Women's Soccer Event</h1>
					<p>Join us in supporting the women's soccer team as they play their next big game!</p>
					<img src={shebelieves} alt="Women's Soccer Event"></img>
					<p>Date: Thursday 02/19/2022</p>
					<p>Time: 2:30PM</p>
					<p>Location: Tech M152</p>
					<p>Don't miss out on the chance to show your support and have a great time!</p>
				</center>
			</body>
		);
	}
}

export default Signup;