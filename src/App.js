import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useLocation,
} from 'react-router-dom';
import { Home, Info } from './pages/';
import { Yape, Yapesrl } from './projects';
import { Nav } from './components/nav';

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
		window.onbeforeunload = function () {
			window.scrollTo(0, 0);
		};
	}, [pathname]);

	return null;
}

export default function App() {
	return (
		<Router>
			<ScrollToTop />
			<Nav />

			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/about' exact component={Info} />
				<Route path='/yape' exact component={Yape} />
				<Route path='/yapesrl' exact component={Yapesrl} />
			</Switch>
		</Router>
	);
}
