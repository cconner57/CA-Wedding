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
			<nav className="nav-bar">
				<img src="/floral-border.svg" />
				<h3>
					<Link to="/">Home</Link>
				</h3>
				<ul className="nav-links">
					<li>
						<Link to="/story">Our Story</Link>
					</li>
					<li>
						<Link to="/reception">The Wedding</Link>
					</li>
					<li>
						<Link to="/gallery">Photos</Link>
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