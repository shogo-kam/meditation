import React from 'react';
import {render} from 'react-dom';
import Timer from './common/Timer';

class Root extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Timer />
			</div>
		);
	}
}

export default Root;