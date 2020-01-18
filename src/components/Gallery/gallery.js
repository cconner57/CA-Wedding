import React from 'react';
import './gallery.css'

function Gallery() {
	return (
		<div className="container card">
			<h2 class="card-header">Engagement Photos</h2>
			<div className="d-flex flex-row justify-content-center">
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
			</div>
			<hr />
			<h2 class="card-header">Wedding Photos</h2>
			<div className="d-flex flex-row justify-content-center">
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
			</div>
			<hr />
			<h2 class="card-header">Instragram Photos</h2>
			<div className="d-flex flex-row justify-content-center">
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
			</div>
		</div>
	);
}

export default Gallery;
