import React, { useState } from 'react';
import './rsvp.css';
// import axios from 'axios';

function RSVP() {
	const [ name, setName ] = useState('');
	const [ value, setValue ] = useState(null);

	const handleChange = (event) => {
		setName(event.target.value);
		setValue(event.target.value);
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
			<form name="RSVP" onSubmit={handleSubmit}>
				<div className="rsvp-name">
					<input type="text" name="Name" onChange={handleChange} autoComplete="off" required />
					<label htmlFor="nameInput" className="label-name">
						<span className="content-name">First &amp; Last Name</span>
					</label>
				</div>
				<div className="rsvp-attending">
					<label>
						Attending:
						<input type="radio" id="radio-1" name="Attending" value="yes" onChange={handleChange} />Accept
						<input type="radio" id="radio-1" name="Attending" value="no" onChange={handleChange} />Decline
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
