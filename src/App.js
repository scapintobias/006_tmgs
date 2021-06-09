import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useLocation,
} from 'react-router-dom';
import { Home, About, Work, Contacts } from './pages/';
import { Blimp, MrBin, Pharma, Yape } from './projects';
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
				<Route path='/about' exact component={About} />
				<Route path='/work' exact component={Work} />
				<Route path='/work/yape' exact component={Yape} />
				<Route path='/work/blimp' exact component={Blimp} />
				<Route path='/work/mrbin' exact component={MrBin} />
				<Route path='/work/pharma' exact component={Pharma} />

				<Route path='/contacts' exact component={Contacts} />
			</Switch>
		</Router>
	);
}
