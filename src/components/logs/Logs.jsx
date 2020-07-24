import React, { useState, useEffect } from 'react';
import LogsItem from './LogsItem';
import Spinner from '../layouts/Spinner';

const Logs = () => {
	const [logs, setLogs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getLogs();
	}, []);

	if (loading) {
		// return <h1 className="text-center">Loading</h1>;
		return <Spinner></Spinner>;
	}

	const getLogs = async () => {
		setLoading(true);
		const res = await fetch('/logs');
		const data = await res.json();
		setLogs(data);
		setLoading(false);
	};
	return (
		<ul className="list-group">
			{!loading && logs.length === 0 ? (
				<p className="lead">No Logs</p>
			) : (
				logs.map((log) => <LogsItem log={log} key={log.id}></LogsItem>)
			)}
		</ul>
	);
};

export default Logs;
