import React from 'react';

function ImageCarousel() {
	const images = () => [ '/media/home/1.jpg', '/media/home/2.jpg', '/media/home/3.jpg' ];

	return (
		<div className="slideshow-container">
			<div className="mySlides fade">
				<div className="numbertext">1 / 3</div>
				<img src={images[0]} />
				<div className="text">Caption Text</div>
			</div>
			<div class="mySlides fade">
				<div class="numbertext">2 / 3</div>
				<img src={images[1]} />
				<div class="text">Caption Two</div>
			</div>

			<div class="mySlides fade">
				<div class="numbertext">3 / 3</div>
				<img src={images[2]} />
				<div class="text">Caption Three</div>
			</div>
			<br />
			<div className="Carousel-Indicator">
				<span class="dot" onclick="currentSlide(1)" />
				<span class="dot" onclick="currentSlide(2)" />
				<span class="dot" onclick="currentSlide(3)" />
			</div>
		</div>
	);
}

export default ImageCarousel;
