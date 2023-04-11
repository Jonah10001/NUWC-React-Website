import React, { Component } from 'react';
import '../nextevent.css'
import fifaSingles from '../assets/img/fifa-singles.png'
import bibimbap from '../assets/img/bibimbap.jpg'
import blowUpGoal from '../assets/img/blowup_goal.jpg'
import koreanDance from '../assets/img/korean_dance.jpg'

class NextEvent extends Component {
	render() {
		return (
			<body className = "shebelieves">
				<center className = "event">
					<h1>Come out to NUWC's annual cultural event this Wednesday on Deering Meadow!</h1>
					<div class="content">
						<div>
							<img class="poster" src={bibimbap} alt="Fifa Singles Tournament"></img>
							<img class="poster" src={blowUpGoal} alt="Fifa Singles Tournament"></img>
							<img class="poster" src={koreanDance} alt="Fifa Singles Tournament"></img>
						</div>
						<div class="info">
							<p>Date: Wednesday 04/12/2023 </p>
							<p>Time: 11:00AM - 4:00PM</p>
							<p>Location: Dearing Meadow</p>
							<p>Experience all things Korea as we highlight our first Asian host nation in five years!</p>
							<p>Music, Food, Games, and Beverages will be provided</p>
						</div>
					</div>
				</center>
			</body>
		);
	}
}

export default NextEvent;