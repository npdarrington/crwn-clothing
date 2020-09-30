import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
	<section>
		<h1>HATS PAGE</h1>
	</section>
);

function App() {
	return (
		<section className='App'>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/hats' component={HatsPage} />
			</Switch>
		</section>
	);
}

export default App;
