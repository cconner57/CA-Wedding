import React from 'react';
import './gallery.css';

function Gallery() {
	return (
		<div className="container">
			<div className="engagement-photos">
				<h2>Engagement Photos</h2>
				<img src="https://placeimg.com/640/480/animals" />
				<img src="https://placeimg.com/640/480/animals" />
				<img src="https://placeimg.com/640/480/animals" />
			</div>
			<hr />
			<div className="wedding-photos">
				<h2>Wedding Photos</h2>
				<img src="https://placeimg.com/640/480/animals" />
				<img src="https://placeimg.com/640/480/animals" />
				<img src="https://placeimg.com/640/480/animals" />
				<img src="https://placeimg.com/640/480/animals" />
			</div>
			<hr />
			<div className="instagram-photos">
				<h2>Instragram Photos</h2>
				<img src="https://placeimg.com/640/480/animals" />
				<img src="https://placeimg.com/640/480/animals" />
				<img src="https://placeimg.com/640/480/animals" />
				<img src="https://placeimg.com/640/480/animals" />
				<img src="https://placeimg.com/640/480/animals" />
			</div>
		</div>
	);
}

export default Gallery;
