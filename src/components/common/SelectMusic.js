import React from 'react';
import {render} from 'react-dom';
import '../../styles/SelectMusic.scss';

const MUSIC_LIST = {
	ETHNIC_01: 'ethnic_01',
	HEALING_01: 'healing_01',
	HEALING_04: 'healing_04',
	HEALING_05: 'healing_05',
	HEALING_06: 'healing_06',
};

class SelectMusic extends React.Component {
	constructor(props) {
        super(props);
        this.onClickEvent = this.props.onClickEvent.bind(this);
        this.onChangeEvent = this.props.onChangeEvent.bind(this);
	}

    
	render() {
        let options = [];
        Object.keys(MUSIC_LIST).forEach((_key) => {
            options.push(<option value={MUSIC_LIST[_key]}>{_key}</option>);
        });

        const isMusicSelectMode = this.props.isMusicSelectMode;
        const mask = isMusicSelectMode ? <div className="mask" onClick={ this.onClickEvent }></div> : null;
        const select_music_form = isMusicSelectMode ? (
            <label className="music-form">
                Pick your favorite music:
                <select value={ this.props.selectedMusic } onChange={ this.onChangeEvent }>
                    {options}
                </select>
            </label>
        ) : null;


        return (
            <div>
                <input name="a" type="text" value={ this.props.selectedMusic } disabled="disabled" />
                <button id="music" onClick={ this.onClickEvent }> Select Music </button>
                {select_music_form}
                {mask}
            </div>
		);
	}
}

export default SelectMusic;
