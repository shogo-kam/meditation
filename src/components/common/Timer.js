import React from 'react';
import {render} from 'react-dom';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {time:'10:00'};
	}

	render() {
		return (
			<div>
				<p>{ this.state.time }</p>
			</div>
		);
	}
}
export default Timer;
