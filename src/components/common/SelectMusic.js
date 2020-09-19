import React from 'react';
import {render} from 'react-dom';

class SelectMusic extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
        const isMusicSelectMode = this.props.isMusicSelectMode;

        const mask = <div> aaa </div>
        const lodingMask = isMusicSelectMode ?
                        <div> aaa </div> : mask;

        return (
            <div>
                <input name="a" type="text" value={ isMusicSelectMode } disabled="disabled" />
                <button id="music" onClick={ this.props.onClickEvent.bind(this) }> Select Music </button>
            
                {lodingMask}
            </div>
		);
	}
}

export default SelectMusic;