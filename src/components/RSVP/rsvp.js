import React, { useState } from 'react';
import './rsvp.css';

function RSVP() {
	const [ name, setName ] = useState('');
	const [ value, setState ] = useState(null);

	const handleChange = (event) => {
		setState(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};
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
			<form onSubmit={handleSubmit}>
				<p class="form">
					<input type="text" name="Name" onChange={handleChange} autocomplete="off" required />
					<label for="nameInput" class="label-name">
						<span className="content-name">First &amp; Last Name</span>
					</label>
				</p>
				<label>
					Attending:
					<input type="radio" id="radio-1" name="attending" value="yes" onChange={handleChange} />Accept
					<input type="radio" id="radio-1" name="attending" value="no" onChange={handleChange} />Decline
				</label>
				<p>
					<input type="submit" value="Submit" />
				</p>
			</form>
		</div>
	);
}

export default RSVP;
