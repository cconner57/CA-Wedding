import React from 'react';
import ImageCarousel from './ImageCarousel';

function Home() {
	// let countdown = () => {
	// 	let future = Date.parse('January 19, 2021');
	// 	let now = new Date();
	// 	let difference = future - now;

	// 	let days = Math.floor(difference / (1000 * 60 * 60 * 24));

	// 	document.querySelector('.countdown').innerHTML = `<h4> ${days} days left</h4>`;
	// };
	// setInterval(countdown, 1000);

	return (
		<div className="container card">
			<div className="countdown" />
			<ImageCarousel />
			<div className="Home-description">
				<h1>Brief description of event + date</h1>
			</div>
			<div>
				<h1>Wedding Party?</h1>
			</div>
		</div>
	);
}

export default Home;
