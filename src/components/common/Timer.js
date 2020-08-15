import React from 'react';
import {render} from 'react-dom';

const ONE_MiN = 60;

class Timer extends React.Component {
	constructor(props) {
		super(props);
	}

	// TODO: 値が 0 の時の 00 表記,
	render() {
		const min = Math.floor(this.props.now / ONE_MiN);
		const sec = (this.props.now % ONE_MiN);

		return (
			<div id="timer">
				<p>{ ('00' + min).slice(-2) + ":" + ('00' + sec).slice(-2) }</p>
			</div>
		);
	}
}
export default Timer;
