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
        this.state = {
            value: 'grapefruit'
        };
        this.onClickEvent = this.props.onClickEvent.bind(this);
        this.handleChange = this.handleChange.bind(this);
	}

    handleChange(event) {
        this.setState({value: event.target.value});
        this.onClickEvent();
    }
    
	render() {

        // for (let key in MUSIC_LIST ) {
        //     alert('key:' + key + ' value:' + MUSIC_LIST[key]);
        // }

        const isMusicSelectMode = this.props.isMusicSelectMode;
        const mask = isMusicSelectMode ? <div className="mask" onClick={ this.onClickEvent }></div> : null;
        const select_music_form = isMusicSelectMode ? (
            <label className="music-form">
                Pick your favorite flavor:
                <select value={ this.state.value } onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
        ) : null;


        return (
            <div>
                <input name="a" type="text" value={ isMusicSelectMode } disabled="disabled" />
                <button id="music" onClick={ this.onClickEvent }> Select Music </button>
                {select_music_form}
                {mask}
            </div>
		);
	}
}

export default SelectMusic;
