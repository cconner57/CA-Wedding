import React from 'react';
import './gallery.css'

function Gallery() {
	return (
		<div className="container card">
			<h2 class="card-header">Engagement Photos</h2>
			<div className="row-fluid">
				<img class="img-thumbnail overflow-hidden c-image" src="/media/gallery/3.jpg" />
				<img class="img-thumbnail overflow-hidden c-image" src="/media/gallery/6.jpg" />
				<img class="img-thumbnail overflow-hidden c-image" src="/media/gallery/1.jpg" />
				<img class="img-thumbnail overflow-hidden c-image" src="/media/gallery/5.jpg" />
				<img class="img-thumbnail overflow-hidden c-image" src="/media/gallery/2.jpg" />
				<img class="img-thumbnail overflow-hidden c-image" src="/media/gallery/4.jpg" />
			</div>
			<hr />
			<h2 class="card-header">Wedding Photos</h2>
			<div className="row-fluid">
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
			</div>
			<hr />
			<h2 class="card-header">Instragram Photos</h2>
			<div className="row-fluid">
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
				<img class="img-thumbnail overflow-hidden c-image" src="https://placeimg.com/640/480/animals" />
			</div>
		</div>
	);
}

export default Gallery;
