import ethnic_01 from '../resources/ethnic_01.mp3';
import healing_01 from '../resources/healing_01.mp3';
import healing_04 from '../resources/healing_04.mp3';
import healing_05 from '../resources/healing_05.mp3';
import healing_06 from '../resources/healing_06.mp3';

class AudioResources {
	constructor() {
		this.selectedMusic = ethnic_01;
	}

	getSelectedMusic() {
		return this.selectedMusic;
	}

	selectMusic(_musicName) {
		const music = {
			'ethnic_01': ethnic_01,
			'healing_01': healing_01,
			'healing_04': healing_04,
			'healing_05': healing_05,
			'healing_06': healing_06,
		}

		this.selectedMusic = music[_musicName];
	}
}
export default AudioResources;
