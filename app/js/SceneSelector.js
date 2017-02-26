import SceneSelectorItem from './SceneSelectorItem';

export default class SceneSelector{

	constructor(items, initObj){

		const getUrlParameter = (name) => {
			name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
			var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
			var results = regex.exec(location.search);
			return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
		};

		this.containerEl = document.createElement('div');
		this.containerEl.classList.add('selector-container');

		this.playTimeline = getUrlParameter('timeline') === 'active';

		this.toggleTimelineEl = document.createElement('div');
		this.toggleTimelineEl.classList.add('timeline-toggler');
		this.toggleTimelineEl.classList.add('select');
		if (this.playTimeline) {
			this.toggleTimelineEl.innerHTML = 'Disable Timeline';
		} else {
			this.toggleTimelineEl.innerHTML = 'Use Timeline';
		}
		this.toggleTimelineEl.addEventListener('click', this.onToggleClick.bind(this));

		this.containerEl.appendChild(this.toggleTimelineEl);

		this.currentItem = items[0];

		this.initObj = initObj;

		this.items = [];
		for (var i=0; i<items.length; i++){

			var itemObj = items[i];
			var item = new SceneSelectorItem(this.containerEl, this.onTypeClick, this, itemObj);
			this.items.push(itemObj);
		}

		

	}

	onToggleClick() {

		const url = document.location.protocol + '//' +
		document.location.host +
		document.location.pathname;

		

	
		if (!this.playTimeline)
			window.location.href = url + '?timeline=active';
		else{
			window.location.href = url;
		}

	}

	onTypeClick(itemObj) {

		console.log('on type click', itemObj);

		this.currentItem = itemObj;
	}

	

}