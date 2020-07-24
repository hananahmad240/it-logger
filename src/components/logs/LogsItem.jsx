import React from 'react';
import PropTypes from 'prop-types';
// import Moment from 'react-moment';
import moment from 'moment';

const LogsItem = ({ log }) => {
	return (
		<li className="list-group-item">
			<div>
				<a
					href="#edit-log-modal"
					className={log.attention ? 'text-red' : 'text-blue'}
				>
					{log.message}
				</a>
				<br />
				<span className="gray-text">
					<span className="black-text">ID # {log.id}</span>
					last updated by{' '}
					<span className="black-text">
						{log.tech} on{' '}
						{moment(new Date(log.date)).format('YYYY-MM-DD hh:mm:ss a')}
					</span>
				</span>
				<a href="#!" className="float-right">
					<i className="fas fa-trash"></i>
				</a>
			</div>
		</li>
	);
};
LogsItem.propTypes = {
	log: PropTypes.object.isRequired,
};

export default LogsItem;
