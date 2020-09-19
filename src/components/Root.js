import React from 'react';
import Timer from './common/Timer';
import Button from './common/Button';
import AudioResources from '../common/AudioResources';
import SelectMusic from './common/SelectMusic';

const MAX_T = 3600; // 60 min
const MIN_T = 0;
const DEF_T = 600;
const TIMER_MODE = {
	STOP: 'stop',
	START: 'start',
};

class Root extends React.Component {
	constructor(props) {
		super(props);
		this.increaseMinute = this.increaseMinute.bind(this);
		this.decreaseMinute = this.decreaseMinute.bind(this);
		this.increaseSecond = this.increaseSecond.bind(this);
		this.decreaseSecond = this.decreaseSecond.bind(this);
		this.start			= this.start.bind(this);
		this.stop			= this.stop.bind(this);
		this.showMusicSelectFrame = this.showMusicSelectFrame.bind(this);
		this.state = {
			now: DEF_T,
			timerMode: TIMER_MODE.STOP,
			isMusicSelectMode: false,
		};
		this.audioResources = new AudioResources();
		this.music = new Audio(this.audioResources.getSelectedMusic());
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

	start() {
		if(this.state.timerMode == TIMER_MODE.STOP) {
			this.timerID = setInterval(
				() => this.tick(),
				1000
			);
			this.setState({
				timerMode: TIMER_MODE.START
			});
		}
	}

	stop() {
		if(this.state.timerMode == TIMER_MODE.START) {
			clearInterval(this.timerID);
		}
		this.setState({
			timerMode: TIMER_MODE.STOP
		});
	}

	tick() {
		if (this.state.now <= MIN_T){ 
			return;
		}
		this.setState({
			now: this.state.now -=1
		});
	}

	showMusicSelectFrame() {
		this.setState({
			isMusicSelectMode: ! this.state.isMusicSelectMode
		});
	}

	render() {
		const buttons = {
			secupButton: {
				start: null,
				stop: <Button mode="secup" onClickEvent={ this.increaseSecond } />,
			},
			secdownButton: {
				start: null,
				stop: <Button mode="secdown" onClickEvent={ this.decreaseSecond } />,
			},
			minupButton: {
				start: null,
				stop: <Button mode="minup" onClickEvent={ this.increaseMinute } />,
			},
			mindownButton: {
				start: null,
				stop: <Button mode="mindown" onClickEvent={ this.decreaseMinute } />,
			},
			startButton: {
				start: null,
				stop: <Button mode="start"  onClickEvent ={this.start} />,
			},
			stopButton: {
				start: <Button mode="stop"  onClickEvent ={this.stop} />,
				stop: null,
			},
		};

		const timerMode = this.state.timerMode;
		if(timerMode == TIMER_MODE.START) {
			this.music.play();
		} else {
			this.music.pause();
		}

		return (
			<div>
				<Timer now={ this.state.now } />
				{buttons.secupButton[timerMode]}
				{buttons.secdownButton[timerMode]}
				{buttons.minupButton[timerMode]}
				{buttons.mindownButton[timerMode]}
				{buttons.startButton[timerMode]}
				{buttons.stopButton[timerMode]}
				<SelectMusic isMusicSelectMode= { this.state.isMusicSelectMode } onClickEvent={ this.showMusicSelectFrame } />
			</div>
		);
	}
}

export default Root;