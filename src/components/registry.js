import React from 'react';

function Registry() {
	return (
		<div className="Registry-container">
			<div className="registry-title">
				<h4>Registry</h4>
			</div>
			<div className="registry">
				<a
					className="shadow-lg"
					href="https://www.amazon.com/wedding/share/chrisandallison"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="/media/registry/amazon-logo.png" />
					<button>See our registry!</button>
				</a>
				<a
					className="shadow-lg"
					href="https://www.amazon.com/wedding/share/chrisandallison"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="/media/registry/bed-bath-beyond-logo.png" />
					<button>See our registry!</button>
				</a>
				<a
					className="shadow-lg"
					href="https://www.amazon.com/wedding/share/chrisandallison"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="/media/registry/target-logo.png" />
					<button>See our registry!</button>
				</a>
			</div>
		</div>
	);
}

export default Registry;
