import React, { useEffect } from 'react';

function Home() {
	useEffect(() => {
		const today = new Date();
		const wedDay = new Date('01/18/2021');

		const difference = wedDay - today;
		const days = Math.ceil(difference / (1000 * 3600 * 24));

		document.querySelector(
			'.countdown'
		).innerHTML = `<p>${days} Days Until Our Wedding</p>`;
	});

	return (
		<div className='Home-container'>
			<h2>Come Celebrate Our Wedding!</h2>
			<div className='Home-body'>
				<img src='/media/engagement.jpeg' alt='Engagement' />
				<p>Monday, January 18, 2021</p>
				<p>
					Chris and Allison joyfully request the pleasure of your company as we
					speak our vows and join in marriage in the presence of friends and
					family.
				</p>
			</div>
			<div className='countdown' />
		</div>
	);
}

export default Home;
