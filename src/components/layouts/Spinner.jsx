import React from 'react';
import spinner from './spinner.gif';
const Spinner = () => {
	return (
		<div className="spinner">
			<img
				src={spinner}
				alt="Loading"
				style={{
					width: '200px',
					height: '200px',
				}}
			/>
		</div>
	);
};

export default Spinner;
