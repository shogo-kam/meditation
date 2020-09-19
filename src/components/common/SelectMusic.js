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
	}

   	handleChange(event) {
        	this.setState({value: event.target.value});
      	}
    
	render() {

        // for (let key in MUSIC_LIST ) {
        //     alert('key:' + key + ' value:' + MUSIC_LIST[key]);
        // }

        const select_music_form = (
        	<label>
                Pick your favorite flavor:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                </label>
        );

        const isMusicSelectMode = this.props.isMusicSelectMode;
        const mask = isMusicSelectMode ? <div className="mask" onClick={ this.props.onClickEvent.bind(this) }> {select_music_form} </div> : null;

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
