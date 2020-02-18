import React from 'react';

function ImageCarousel() {
	return (
		<div className="Gallery-container">
			<div className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-slide-to="0" className="active" />
					<li data-slide-to="1" />
					<li data-slide-to="2" />
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="/media/home/1.jpg" className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item">
						<img src="/media/home/2.jpg" className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item">
						<img src="/media/home/3.jpg" className="d-block w-100" alt="..." />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ImageCarousel;
