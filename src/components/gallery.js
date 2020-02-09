import React from 'react';

const photos = [
	'/media/gallery/1.jpg',
	'/media/gallery/2.jpg',
	'/media/gallery/3.jpg',
	'/media/gallery/4.jpg',
	'/media/gallery/5.jpg',
	'/media/gallery/6.jpg'
];

function Gallery() {
	const galleryCard = photos.map((i) => {
		return <img key={i} class="img-thumbnail overflow-hidden c-image" src={i} />;
	});

	return (
		<div className="container card">
			<h2 class="card-header">Engagement Photos</h2>
			<div className="row-fluid">{galleryCard}</div>
			<hr />
		</div>
	);
}

export default Gallery;
