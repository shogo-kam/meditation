import React from 'react';
import {render} from 'react-dom';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {time: props.now };
	}

	render() {
		return (
			<div id="timer">
				<p>{ this.state.time }</p>
			</div>
		);
	}
}
export default Timer;
