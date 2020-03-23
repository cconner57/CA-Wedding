import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className='navbar-container'>
			<div className='navbar-top'>
				<img src='/media/navbar/floral-left.png' alt='flowers' />
				<Link to='/' className='navbar-name'>
					<h3>Chris &amp; Allison</h3>
				</Link>
				<img src='/media/navbar/floral-right.png' alt='flowers' />
			</div>
			<div className='navbar-row'>
				<Link to='/reception' className='navbar-link'>
					<p>Reception</p>
				</Link>
				<Link to='/gallery' className='navbar-link'>
					<p>Gallery</p>
				</Link>
				<Link to='/registry' className='navbar-link'>
					<p>Registry</p>
				</Link>
				<Link to='/rsvp' className='navbar-link'>
					<p>RSVP</p>
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
