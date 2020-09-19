import React from 'react';
import {render} from 'react-dom';
import '../../styles/SelectMusic.scss';

class SelectMusic extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
        const isMusicSelectMode = this.props.isMusicSelectMode;

        const mask = isMusicSelectMode ? <div className="mask" onClick={ this.props.onClickEvent.bind(this) }></div> : null;

        return (
            <div>
                <input name="a" type="text" value={ isMusicSelectMode } disabled="disabled" />
                <button id="music" onClick={ this.props.onClickEvent.bind(this) }> Select Music </button>
            
                {mask}
            </div>
		);
	}
}

export default SelectMusic;