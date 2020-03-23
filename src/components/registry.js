import React from 'react';

function Registry() {
	return (
		<div className='Registry-container'>
			<h4>Registry</h4>
			<div className='Registry'>
				<a
					className='shadow-lg'
					href='https://www.amazon.com/wedding/share/chrisandallison'
					target='_blank'
					rel='noopener noreferrer'>
					<img src='/media/registry/amazon-logo.png' alt='Amazon' />
					<button>See registry!</button>
				</a>
				<a
					className='shadow-lg'
					href='https://www.amazon.com/wedding/share/chrisandallison'
					target='_blank'
					rel='noopener noreferrer'>
					<img
						src='/media/registry/bed-bath-beyond-logo.png'
						alt='Bed Bath and Beyond'
					/>
					<button>See registry!</button>
				</a>
				<a
					className='shadow-lg'
					href='https://www.amazon.com/wedding/share/chrisandallison'
					target='_blank'
					rel='noopener noreferrer'>
					<img src='/media/registry/target-logo.png' alt='Target' />
					<button>See registry!</button>
				</a>
			</div>
		</div>
	);
}

export default Registry;
