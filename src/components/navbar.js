import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
		<div>
			<nav className="navbar bg-light justify-content-center m-3 shadow-sm">
				<ul class="nav">
					<li class="nav-item">
						<Link class="nav-link" to="/">Home</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/reception">Reception</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/gallery">Gallery</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/registry">Registry</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/rsvp">RSVP</Link>
					</li>
				</ul>
			</nav>
		</div>
    )
}

export default Navbar;