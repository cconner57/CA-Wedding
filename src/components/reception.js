import React, { Fragment } from 'react';

function Location() {
	return (
		<Fragment>
			<div className="Reception-container">
				<div className="Reception-location">
					<div className="Reception-text">
						<h4>Ceremony &amp; Reception</h4>
						<h5>Wedgewood La Verne</h5>
						<p>Time: TBA</p>
						<p>6300 Country Club Drive</p>
						<p>La Verne, Ca 91750</p>
						<a href="https://maps.apple.com/?address=6300%20Country%20Club%20Dr,%20La%20Verne,%20CA%20%2091750,%20United%20States&auid=10642440379529879294&ll=34.139874,-117.768236&lsp=9902&q=Sierra%20La%20Verne%20by%20Wedgewood%20Weddings&_ext=ChoKBQgEEOIBCgQIBRADCgUIBhDfAQoECAoQABImKXEdPjVUEUFAMReeR7GDcV3AOe/yY5F6EkFAQY3vNt7RcF3AUAM%3D">Click for Directions</a>
					</div>
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13209.24886026702!2d-117.7679308!3d34.1383536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe452ea9c719ae746!2sSierra%20La%20Verne%20Wedgewood%20Weddings!5e0!3m2!1sen!2sus!4v1581910801052!5m2!1sen!2sus" />
				</div>
			</div>
		</Fragment>
	);
}

export default Location;
