import React, { useState } from 'react';
// import axios from 'axios';

function RSVP() {
	const [ rsvpForm, setRSVPForm ] = useState({
		name: '',
		song: '',
		attending: ''
	});

	const handleSubmit = (e) => {
		// e.preventDefault();
		document.querySelector('.RSVP-show').style.display = 'none';
		document.querySelector('.RSVP-submit').style.display = 'block';
	};

	return (
		<div className="container mx-auto">
			<div className="RSVP-form shadow-lg mt-5">
				<div className="RSVP-show">
					<div className="RSVP-info">
						<h4>Kindly Respond By</h4>
						<h4>
							November 18<sup>th</sup>, 2020
						</h4>
					</div>
					<hr />
					<form id="send-to-sheet" name="RSVP" onSubmit={handleSubmit}>
						<div className="">
							<input
								type="text"
								className="input-name"
								name="name"
								placeholder="First &amp; Last Name"
								required
								onChange={(e) => setRSVPForm(e.target.value)}
							/>
						</div>
						<div className="">
							<textarea
								type="textarea"
								className="input-song"
								name="song"
								placeholder="Song request"
								onChange={(e) => setRSVPForm(e.target.value)}
							/>
						</div>
						<div className="form-check form-check-inline">
							<label className="pr-3">Attending:</label>

							<input
								className="form-check-input"
								type="radio"
								name="attending"
								value="accept"
								onChange={(e) => setRSVPForm(e.target.value)}
							/>
							<label className="form-check-label mr-3" for="inlineRadio1">
								Accept
							</label>

							<input
								className="form-check-input"
								type="radio"
								name="attending"
								value="decline"
								onChange={(e) => setRSVPForm(e.target.value)}
							/>
							<label className="form-check-label" for="inlineRadio2">
								Decline
							</label>
						</div>
						<div>
							<button type="submit" className="btn btn-light mt-2 border">
								Submit
							</button>
						</div>
					</form>
				</div>
				<div className="RSVP-submit">
					<h4>RSVP Sent</h4>
					<h5>Thank you, {rsvpForm.name}</h5>
				</div>
			</div>
		</div>
	);
}

export default RSVP;
