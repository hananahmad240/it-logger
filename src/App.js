import React, { useEffect, Fragment } from 'react';
import './App.css';

import Navbar from './components/layouts/Navbar';
import Search from './components/layouts/Search';
import Logs from './components/logs/Logs';

const App = () => {
	useEffect(() => {}, []);
	return (
		<Fragment>
			<Navbar></Navbar>

			<div className="container">
				<Search></Search>
				<Logs></Logs>
			</div>
		</Fragment>
	);
};

export default App;
