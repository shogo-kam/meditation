import React from 'react';
import {render} from 'react-dom';

class Button extends React.Component {

	constructor(props) {
        super(props);
	}

	render() {
		return (
            <button
                className={ "simple_btn " + this.props.mode }
                onClick={ this.props.onClickEvent.bind(this) }
            >
            </button>
		);
	}
}
export default Button;
