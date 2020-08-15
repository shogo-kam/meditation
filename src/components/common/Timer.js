import React from 'react';
import {render} from 'react-dom';

const ONE_MiN = 60;

class Timer extends React.Component {
	constructor(props) {
		super(props);
	}

	// TODO: 値が 0 の時の 00 表記,
	render() {
		let min = Math.floor(this.props.now / ONE_MiN);
		let sec = (this.props.now % ONE_MiN);

		return (
			<div id="timer">
				<p>{ min + ":" + sec }</p>
			</div>
		);
	}
}
export default Timer;
