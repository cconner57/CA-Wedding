import React from 'react';
import './navbar.css';

import Gallery from '../Gallery/gallery'
import Reception from '../Reception/location'
import RSVP from '../RSVP/rsvp'
import Registry from '../Registry/registry'
import Landing from '../Home/home'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Navbar() {
    return (
		<Router>
			<nav className="navbar sticky-top bg-light justify-content-center m-3 shadow-sm">
				<ul class="nav">
					<li class="nav-item">
						<Link class="nav-link" to="/">Home</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/registry">Registry</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/reception">The Wedding</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/gallery">Photos</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/rsvp">RSVP</Link>
					</li>
				</ul>
			</nav>
			
			<Switch>
				<Route path="/registry">
					<Registry />
				</Route>
				<Route path="/reception">
					<Reception />
				</Route>
				<Route path="/gallery">
					<Gallery />
				</Route>
				<Route path="/rsvp">
					<RSVP />
				</Route>
				<Route path="/">
					<Landing />
				</Route>
			</Switch>
		</Router>
    )
}

export default Navbar;