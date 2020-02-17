import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Gallery from './components/gallery';
import Reception from './components/reception';
import RSVP from './components/rsvp';
import Registry from './components/registry';
import Home from './components/home';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/gallery" component={Gallery} />
				<Route path="/reception" component={Reception} />
				<Route path="/registry" component={Registry} />
				<Route path="/rsvp" component={RSVP} />
				<Route path="/" component={Home} />
			</Switch>
		</Router>
	);
}

export default App;