import SceneSelectorItem from './SceneSelectorItem';

export default class SceneSelector{

	constructor(items, initObj){

		this.containerEl = document.createElement('div');
		this.containerEl.classList.add('selector-container');

		this.currentItem = items[0];

		this.initObj = initObj;

		this.items = [];
		for (var i=0; i<items.length; i++){

			var itemObj = items[i];
			var item = new SceneSelectorItem(this.containerEl, this.onTypeClick, this, itemObj);
			this.items.push(itemObj);
		}

	}

	onTypeClick(itemObj) {

		console.log('on type click', itemObj);

		this.currentItem = itemObj;
	}

	

}