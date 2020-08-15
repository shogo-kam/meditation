import React from 'react';
import {render} from 'react-dom';
import Timer from './common/Timer';
import Button from './common/Button';
import moment from 'moment';

const MAX_T = 3600; // 60 min
const MIN_T = 0;

class Root extends React.Component {
	constructor(props) {
		super(props);
		this.increaseMinute = this.increaseMinute.bind(this);
		this.decreaseMinute = this.decreaseMinute.bind(this);
		this.state = {
			now: 600
		}; 
	}

	increaseMinute() {
		if (this.state.now >= MAX_T) {
			return;
		}

		this.setState({
			now: this.state.now += 1
		});
	}

	decreaseMinute() {
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
				<Button onClickEvent={this.increaseMinute } />
				<Timer now={ this.state.now } />
				<Button onClickEvent={this.decreaseMinute } />
			</div>
		);
	}
}

export default Root;