import React from 'react';
import {render} from 'react-dom';
import Timer from './common/Timer';
import Button from './common/Button';
import moment from 'moment';

const MAX_T = 3600; // 60 min
const MIN_T = 0;
const DEF_T = 600;

class Root extends React.Component {
	constructor(props) {
		super(props);
		this.increaseMinute = this.increaseMinute.bind(this);
		this.decreaseMinute = this.decreaseMinute.bind(this);
		this.increaseSecond = this.increaseSecond.bind(this);
		this.decreaseSecond = this.decreaseSecond.bind(this);
		this.state = {
			now: DEF_T
		}; 
	}

	increaseMinute() {
		if (this.state.now >= 3540) {
			return this.setState({
				now: this.state.now = MAX_T
			});
		}

		this.setState({
			now: this.state.now += 60
		});
	}

	decreaseMinute() {
		if (this.state.now <= 60) {
			return this.setState({
				now: this.state.now = MIN_T
			});
		}

		this.setState({
			now: this.state.now -= 60
		});
	}

	increaseSecond() {
		if (this.state.now >= MAX_T) {
			return;
		}

		this.setState({
			now: this.state.now += 1
		});
	}

	decreaseSecond() {
		if (this.state.now <= MIN_T) {
			return;
		}

		this.setState({
			now: this.state.now -= 1
		});
	}

	render() {
		return (
			<div>
				<Timer now={ this.state.now } />
				<Button mode="secup" onClickEvent={this.increaseSecond } />
				<Button mode="secdown" onClickEvent={this.decreaseSecond } />
				<Button mode="minup" onClickEvent={this.increaseMinute } />
				<Button mode="mindown" onClickEvent={this.decreaseMinute } />
			</div>
		);
	}
}

export default Root;