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
		<div className="container mx-auto">
			<div className="card RSVP-form shadow-lg">
				<h1>Chris &amp; Allison</h1>
				<div className="RSVP-info">
					<h4>Monday, January 18 2021</h4>
					
					<h5>Kindly Reply By 'Enter Date'</h5>
				</div>
				<hr />
				<form>
					<div className="form-group">
						<input type="text" className="form-control" id="Name" aria-describedby="Name" placeholder="First &amp; Last Name" required />		
					</div>
					<div className="form-check form-check-inline">
						<label className="pr-3">Attending:</label>
						<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
						<label className="form-check-label mr-3" for="inlineRadio1">Accept</label>

						<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
						<label className="form-check-label" for="inlineRadio2">Decline</label>
					</div>
					<div>
						<button type="submit" className="btn btn-light mt-2">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default RSVP;
