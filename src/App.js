import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, About, Work, Contacts, Yape } from './pages/';

import { Nav } from './components/nav';

function PageContent() {
	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/about' exact component={About} />
			<Route path='/work' exact component={Work} />
			<Route path='/work/yape' exact component={Yape} />

			<Route path='/contacts' exact component={Contacts} />
		</Switch>
	);
}

export default function App() {
	return (
		<Router>
			<Nav />

			<PageContent />
		</Router>
	);
}
