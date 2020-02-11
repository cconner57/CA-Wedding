import React, { useState } from 'react';

function RSVP() {
	const [ rsvpForm, setRSVPForm ] = useState({
		name: '',
		song: '',
		attending: ''
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		document.querySelector('.RSVP-show').style.display = 'none';
		document.querySelector('.RSVP-form').style.height = '125px'
		// const form = e.target;
		// const data = new FormData(form);
		// const xhr = new XMLHttpRequest();
		// xhr.open(form.method, form.action);
		// xhr.setRequestHeader('Accept', 'application/json');
		// xhr.onreadystatechange = () => {
		// 	if (xhr.readyState !== XMLHttpRequest.DONE) return;
		// };
		// xhr.send(data);

		document.querySelector('.RSVP-submit').style.display = 'block';
	};

	// action="https://formspree.io/mnqdgwjv" method="POST"

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
					<form onSubmit={handleSubmit} >
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
								className="RSVP-radio"
								type="radio"
								name="attending"
								value="accept"
								onChange={(e) => setRSVPForm(e.target.value)}
							/>
							<label className="RSVP-label mr-3" htmlFor="inlineRadio1">
								Accept
							</label>

							<input
								className="RSVP-radio"
								type="radio"
								name="attending"
								value="decline"
								onChange={(e) => setRSVPForm(e.target.value)}
							/>
							<label className="RSVP-label" htmlFor="inlineRadio2">
								Decline
							</label>
						</div>
						<div>
							<button type="submit" className="RSVP-button">
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
