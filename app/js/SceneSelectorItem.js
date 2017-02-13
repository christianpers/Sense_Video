
export default class SceneSelectorItem{

	constructor(parentEl, onClickCallback, callbackScope, itemObj){

		this.onClickCallback = onClickCallback;
		this.callbackScope = callbackScope;
		this.itemObj = itemObj;

		this.containerEl = document.createElement('div');
		this.containerEl.classList.add('item-container');

		this.selectBtn = document.createElement('div');
		this.selectBtn.classList.add('select');
		this.containerEl.appendChild(this.selectBtn);
		this.selectBtn.innerHTML = itemObj.title;



		this.onClickBound = this.onClick.bind(this);

		this.selectBtn.addEventListener('click', this.onClickBound);

		parentEl.appendChild(this.containerEl);


	}

	onClick(e) {


		this.onClickCallback.call(this.callbackScope, this.itemObj);

	}

	

}