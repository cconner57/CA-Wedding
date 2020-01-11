import React, { useState } from 'react';
import './rsvp.css';

function RSVP() {
	

	// https://script.google.com/macros/s/AKfycbzvCd37m4u6YBwNmFzBimhGqg3CHQwN9kwSiCazfSxYkaPa__6I/exec

	return (
		<div className="rsvp-form">
			<h1>C &amp; A</h1>
			<div className="rsvp-info">
				<h4>Monday, January 18 2021</h4>
				<h4>Wedgewood Wedding</h4>
				<h4>Sierra La Verne</h4>
				<h5>Kindly Reply By 'Enter Date'</h5>
			</div>
			<hr />
			<form name="RSVP" method="POST" data-netlify="true">
				<div className="rsvp-name">
					<input type="text" name="Name" autoComplete="off" required />
					<label htmlFor="nameInput" className="label-name">
						<span className="content-name">First &amp; Last Name</span>
					</label>
				</div>
				<div className="rsvp-attending">
					<label>
						Attending:
						<input type="radio" id="radio-1" name="Attending" value="yes" />Accept
						<input type="radio" id="radio-1" name="Attending" value="no" />Decline
					</label>
				</div>
				<div>
					<input type="submit" value="Submit" />
				</div>
			</form>
		</div>
	);
}

export default RSVP;
