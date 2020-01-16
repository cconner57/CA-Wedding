import React from 'react';

function Gallery() {
	return (
		<div className="container card">
			<h2 class="card-header">Engagement Photos</h2>
			<div className="row">
				<img class="col" src="https://placeimg.com/640/480/animals" />
				<img class="col" src="https://placeimg.com/640/480/animals" />
				<img class="col" src="https://placeimg.com/640/480/animals" />
			</div>
			<hr />
			<h2 class="card-header">Wedding Photos</h2>
			<div className="">
				<img class="rounded" src="https://placeimg.com/640/480/animals" />
				<img class="rounded" src="https://placeimg.com/640/480/animals" />
				<img class="rounded" src="https://placeimg.com/640/480/animals" />
				<img class="rounded" src="https://placeimg.com/640/480/animals" />
			</div>
			<hr />
			<h2 class="card-header">Instragram Photos</h2>
			<div className="">
				<img class="rounded" src="https://placeimg.com/640/480/animals" />
				<img class="rounded" src="https://placeimg.com/640/480/animals" />
				<img class="rounded" src="https://placeimg.com/640/480/animals" />
				<img class="rounded" src="https://placeimg.com/640/480/animals" />
				<img class="rounded" src="https://placeimg.com/640/480/animals" />
			</div>
		</div>
	);
}

export default Gallery;
