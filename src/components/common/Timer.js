import React from 'react';
import {render} from 'react-dom';

const ONE_MiN = 60;

class Timer extends React.Component {
	constructor(props) {
		super(props);
	}

	__frmt_time(u_time) {
		return ('00' + u_time).slice(-2);
	}

	_prt_time(cur_time) {
		const min = Math.floor(cur_time / ONE_MiN);
		const sec = cur_time % ONE_MiN;
		const time_formatted_str = this.__frmt_time(min) + ':' + this.__frmt_time(sec); 

		return time_formatted_str;
	}

	render() {

		return (
			<div id="timer">
				<p>{ this._prt_time(this.props.now) }</p>
			</div>
		);
	}
}
export default Timer;
