import React from 'react';
import './navbar.css';

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
						<Link to="/wedding">The Wedding</Link>
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
				<Route path="/wedding">
					<Wedding />
				</Route>
				<Route path="/photos">
					<Photos />
				</Route>
				<Route path="/rsvp">
					<RSVP />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
    )
}

function Story() {
	return <h2>Story</h2>;
}

function Wedding() {
	return <h2>Wedding</h2>;
}

function Photos() {
	return <h2>Photos</h2>;
}

function RSVP() {
	return <h2>RSVP</h2>;
}

function Home() {
	return <h2>Home</h2>;
}

export default Navbar;