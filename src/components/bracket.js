import React, { Component } from 'react';
import '../bracket.css'

class Bracket extends Component {
	render() {
		return (
			<div class="tournament-bracket">
				<div class="round r-of-8">
					<div class="bracket-game">
					<div class="player top win">
						Team 1
						<div class="score">
						3
						</div>
					</div>
					<div class="player bot loss">
						Team 2
						<div class="score">
						1
						</div>
					</div>
					</div>
					<div class="bracket-game">
					<div class="player top win">
						Team 3
						<div class="score">
						3
						</div>
					</div>
					<div class="player bot loss">
						Team 4
						<div class="score">
						2
						</div>
					</div>
					</div>
					<div class="bracket-game">
					<div class="player top win">
						Team 5
						<div class="score">
						3
						</div>
					</div>
					<div class="player bot loss">
						Team 6
						<div class="score">
						0
						</div>
					</div>
					</div>
					<div class="bracket-game">
					<div class="player top win">
						Team 7
						<div class="score">
						3
						</div>
					</div>
					<div class="player bot loss">
						Team 8
						<div class="score">
						1
						</div>
					</div>
					</div>
				</div>
			</div>
		  );
	}
}

export default Bracket;
