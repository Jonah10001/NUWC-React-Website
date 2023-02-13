import React, { Component } from 'react';
import '../contact.css'
import pres from '../assets/img/prab.png'
import vp from '../assets/img/abe.jpg'
import sec from '../assets/img/joshua.png'

//import grouppic from '../assets/img/grouppic.jpeg';

class Contact extends Component {
	render() {
		return (
			<div>

				<div className="container" id="footerfix">
					<div class='page-wrap'>
						<section class='contact-content'>
							<h1>President</h1>
							<img src={pres} class = 'profilepic' alt = "Prabav Jain"/>
							<p>Prabav Jain</p>
							<small> <a class="contact-email" href="mailto: PrabavJain2023@u.northwestern.edu" target="_blank">PrabavJain2023@u.northwestern.edu</a></small>
						</section>
						<section class='contact-content'>
							<h1>Vice President</h1>
							<img src={vp} class = 'profilepic' alt = "Carson Burton"/>
							<p>Abraham Cruz</p>
							<small> <a class="contact-email" href="mailto: AbrahamCruz2023@u.northwestern.edu" target="_blank">AbrahamCruz2023@u.northwestern.edu</a></small>
						</section>
						<section class='contact-content'>
							<h1>Treasurer</h1>
							<img src={sec} class = 'profilepic' alt = "Chase Moralejo"/>
							<p>Josh Linero</p>
							<small> <a class="contact-email" href="mailto: JoshLinero2024@u.northwestern.edu" target="_blank">JoshLinero2024@u.northwestern.edu</a></small>
						</section>
						<br /> <br />
					</div>


				</div><br /> <br /> <br /> <br />
			</div>
		);
	}
} 

export default Contact;
