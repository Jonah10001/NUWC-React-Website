import React, { Component } from 'react';
import '../nextevent.css'
import fifaSingles from '../assets/img/fifa-singles.png'

class NextEvent extends Component {
	render() {
		return (
			<body className = "shebelieves">
				<center className = "event">
					<h1>Sign up for the Fifa Singles tournament this Sunday in Kresge!</h1>
					<div class="content">
						<div>
							<img class="poster" src={fifaSingles} alt="Fifa Singles Tournament"></img>
						</div>
						<div class="info">
							<p>Date: Sunday 04/09/2023 </p>
							<p>Time: 10:00AM - 1:00PM</p>
							<p>Location: Kresge 2415</p>
							<p>Don't miss out on the chance to win major prizes!</p>
							<p>Sign up <a href="https://docs.google.com/forms/d/e/1FAIpQLSfzLhMolgeqEkeYEXLNyycoCJ23Qg83AHcR6xanZjRCER6Vsg/viewform">here</a>!</p>
						</div>
					</div>
				</center>
			</body>
		);
	}
}

export default NextEvent;