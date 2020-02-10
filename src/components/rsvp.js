import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function RSVP() {
	const [ rsvpForm, setRSVPForm ] = useState({
		name: '',
		song: '',
		attending: ''
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		document.querySelector('.RSVP-show').style.display = 'none';

		var template_params = {
			reply_to: 'chris.conner57@gmail.com',
			name: rsvpForm.name,
			song: rsvpForm.song,
			attending: rsvpForm.attending
		};

		var service_id = 'chris_conner57_gmail_com';
		var template_id = 'template_dWqH2k70_clone';

		emailjs.send(service_id, template_id, template_params);

		emailjs.sendForm('gmail', 'template_dWqH2k70', e.target, 'user_f3DauivAi5VTbaLdtvUKS');

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
					<form onSubmit={handleSubmit}>
						<input type="hidden" name="form-name" value="contact" />
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
