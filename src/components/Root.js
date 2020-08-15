import React from 'react';
import {render} from 'react-dom';
import Timer from './common/Timer';
import Button from './common/Button';
import moment from 'moment';

class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = { now: moment({minutes: 10, seconds:0}).format('mm:ss') }; 
	}

	increaseMinute() {
		this.setState({now: moment().add(1, 'minutes')});
		console.log(`現在のステート ${this.state.now}`);
	}

	decreaseMinute() {
		alert('test2');
	}

	render() {
		return (
			<div>
				<Button mode="up" onClickEvent={this.increaseMinute } />
				<Timer now={ this.state.now } />
				<Button mode="down" onClickEvent={this.decreaseMinute } />
			</div>
		);
	}
}

export default Root;