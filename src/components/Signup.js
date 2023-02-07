import React, { Component } from 'react';
import '../signup.css'
import fifa_tourney from '../assets/img/fifa_tourney.png'

class Signup extends Component {
	render() {
		return (
			<div>
				<div>
					Fifa Tournament coming this Saturday!
				</div>
				<img src={fifa_tourney}></img>
			</div>
		);
	}
}

export default Signup;