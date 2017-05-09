
const sceneA = {
	title: 'Scene A',
	grid: [3, 3],
	boxOne: {
		texture: 0.0,
		scale: 1.0,
		rotation: 1.0
	},
	boxTwo: {
		texture: 0.0,
		scale: 1.0,
		rotation: 0.0
	},
	boxThree: {
		texture: 0.0,
		scale: 1.0,
		rotation: 0.0
	},
	boxFour: {
		texture: 0.0,
		scale: 1.0,
		rotation: 0.0
	},
	boxFive: {
		texture: 0.0,
		scale: 1.0,
		rotation: .5
	},
	boxSix: {
		texture: 0.0,
		scale: 1.0,
		rotation: 0.0
	},
	boxSeven: {
		texture: .5,
		scale: 1.0,
		rotation: .3,
		specialTextureCoeff: 1.2
	},
	boxEight: {
		texture: .5,
		scale: 1.0,
		rotation: 0,
		specialTextureCoeff: 1.2
	},
	boxNine: {
		texture: .5,
		scale: 1.0,
		rotation: 0,
		specialTextureCoeff: 1.2
	}
}

const sceneB = {
	title: 'Scene B',
	grid: [3, 2],
	boxOne: {
		texture: 0.0,
		scale: 1.0,
		rotation: 1.0
	},
	boxTwo: {
		texture: 0.0,
		scale: 1.0,
		rotation: 0.0
	},
	boxThree: {
		texture: 0.0,
		scale: 1.0,
		rotation: 0.0
	},
	boxFour: {
		texture: 0.0,
		scale: 1.0,
		rotation: 0.0
	},
	boxFive: {
		texture: 0.0,
		scale: 1.0,
		rotation: .5
	},
	boxSix: {
		texture: 0.0,
		scale: 1.0,
		rotation: 0.0
	}
}

const sceneC = {
	title: 'Scene C',
	grid: [1, 2],
	boxOne: {
		texture: 0.0,
		scale: 1.0,
		rotation: 0.0
	},
	boxTwo: {
		texture: 0.0,
		scale: 1.0,
		rotation: 0.0
	}
}

const sceneD = {
	title: 'Scene D',
	grid: [1, 1],
	boxOne: {
		texture: 0.0,
		scale: 1.0,
		rotation: 0.0
	}
}

const scenes = [sceneA, sceneB, sceneC, sceneD];

export default scenes;
