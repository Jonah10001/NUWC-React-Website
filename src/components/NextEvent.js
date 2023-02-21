import React, { Component } from 'react';
import '../nextevent.css'
import shebelieves from '../assets/img/FutsalTournament2023.png'

class NextEvent extends Component {
	render() {
		return (
			<body className = "shebelieves">
				<center className = "event">
					<h1>Come join us at SPAC this Saturday for our annual Futsal Tournament!</h1>
					<div class="content">
						<div>
							<img src={shebelieves} alt="Women's Soccer Event"></img>
						</div>
						<div class="info">
							<p>Date: Saturday 02/25/2023 </p>
							<p>Time: 11:00AM - 4:00PM</p>
							<p>Location: SPAC Basketball Courts</p>
							<p>Don't miss out on the chance to win major prizes!</p>
							<p>Sign up <a href="https://forms.gle/bVJEWZv2xZ5yAQGr9">here</a>!</p>
						</div>
					</div>
				</center>
			</body>
		);
	}
}

export default NextEvent;