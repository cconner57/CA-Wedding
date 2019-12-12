import React from 'react';
import './navbar.css';

import Gallery from '../Gallery/gallery'
import Reception from '../Reception/location'
import RSVP from '../RSVP/rsvp'
import Story from '../Story/story'
import Landing from '../Landing/home'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Navbar() {
    return (
		<Router>
			<nav id="nav-bar">
				<h3>
					<Link to="/">Home</Link>
				</h3>
				<ul id="nav-links">
					<li>
						<Link to="/story">Our Story</Link>
					</li>
					<li>
						<Link to="/reception">The Wedding</Link>
					</li>
					<li>
						<Link to="/photos">Photos</Link>
					</li>
					<li>
						<Link to="/rsvp">RSVP</Link>
					</li>
				</ul>
			</nav>
			
			<Switch>
				<Route path="/story">
					<Story />
				</Route>
				<Route path="/reception">
					<Reception />
				</Route>
				<Route path="/photos">
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