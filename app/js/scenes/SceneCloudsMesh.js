export default class SceneCloudsMesh{
	
	constructor(sceneVals, sceneInitObj, FBO, FBOStill, FBOReverse, FBOGirl){
		
		this.scene = new THREE.Scene();

		this.currentStillTexture = FBO.texture;
		
		this.mixVal = 1.0;

		const boxUniforms = this.getInitShaderUniforms(sceneVals, sceneInitObj);
		// const boxUniforms = this.getShaderUniforms(sceneVals);

		console.log(boxUniforms);

		const textureUniforms = {};
		textureUniforms.uTexture = {value: FBO.texture};
		textureUniforms.uTextureReverse = {value: FBOReverse.texture};
		textureUniforms.uTextureGirl = {value: FBOGirl.texture};

		const resUniforms = {};
		resUniforms.resX = {value: window.innerWidth};
		resUniforms.resY = {value: window.innerHeight};

		const introUniforms = {};
		introUniforms.introVal = {value: 1.0};

		const randomUniforms = {};
		randomUniforms.randomVal = {value: Math.random()};

		const uniformsObj = Object.assign({}, boxUniforms, textureUniforms, resUniforms, introUniforms, randomUniforms);


	
		var material = new THREE.ShaderMaterial({
			uniforms: uniformsObj,
			vertexShader: require("../../shaders/cloud.vert"),
			fragmentShader: require("../../shaders/cloudMesh.frag")
		});

		var plane = new THREE.PlaneBufferGeometry(window.innerWidth, window.innerHeight);

		this.quad = new THREE.Mesh( plane, material );
		this.quad.position.z = 0;
		this.scene.add( this.quad );

		this.threshold = 100;
		this.currentTime = Date.now();	
	}

	getInitShaderUniforms(sceneVals, sceneInit) {

		const initUniforms = {};
		Object.keys(sceneInit).forEach(t => {

			const strX = t + 'X';
			initUniforms[strX] = {value: 0};

			const strY = t + 'Y';
			initUniforms[strY] = {value: 0};

			const strW = t + 'W';
			initUniforms[strW] = {value: 0};

			const strH = t + 'H';
			initUniforms[strH] = {value: 0};

			const strTexture = t + 'Texture';
			initUniforms[strTexture] = {value: -1};

			const strScale = t + 'Scale';
			initUniforms[strScale] = {value: 0};

			const strTranslateX = t + 'TranslateX';
			initUniforms[strTranslateX] = {value: 0};

			const strTranslateY = t + 'TranslateY';
			initUniforms[strTranslateY] = {value: 0};

			const strRotation = t + 'RotDegree';
			initUniforms[strRotation] = {value: 0};
		})


		const uniforms = {};
		Object.keys(sceneVals).forEach(t => {

			const strX = t + 'X';
			uniforms[strX] = {value: sceneVals[t].x};

			const strY = t + 'Y';
			uniforms[strY] = {value: sceneVals[t].y};

			const strW = t + 'W';
			uniforms[strW] = {value: sceneVals[t].w};

			const strH = t + 'H';
			uniforms[strH] = {value: sceneVals[t].h};

			const strTexture = t + 'Texture';
			uniforms[strTexture] = {value: sceneVals[t].texture};

			const strScale = t + 'Scale';
			uniforms[strScale] = {value: sceneVals[t].scale};

			const strTranslateX = t + 'TranslateX';
			uniforms[strTranslateX] = {value: sceneVals[t].translateX};

			const strTranslateY = t + 'TranslateY';
			uniforms[strTranslateY] = {value: sceneVals[t].translateY};

			const strRotation = t + 'RotDegree';
			uniforms[strRotation] = {value: sceneVals[t].rotation};

		});

		return Object.assign({}, initUniforms, uniforms);

	}

	getShaderUniforms(sceneVals) {

		const uniforms = {};
		Object.keys(sceneVals).forEach(t => {

			const strX = t + 'X';
			uniforms[strX] = {value: sceneVals[t].x};

			const strY = t + 'Y';
			uniforms[strY] = {value: sceneVals[t].y};

			const strW = t + 'W';
			uniforms[strW] = {value: sceneVals[t].w};

			const strH = t + 'H';
			uniforms[strH] = {value: sceneVals[t].h};

			const strTexture = t + 'Texture';
			uniforms[strTexture] = {value: sceneVals[t].texture};

			const strScale = t + 'Scale';
			uniforms[strScale] = {value: sceneVals[t].scale};

			const strTranslateX = t + 'TranslateX';
			uniforms[strTranslateX] = {value: sceneVals[t].translateX};

			const strTranslateY = t + 'TranslateY';
			uniforms[strTranslateY] = {value: sceneVals[t].translateY};

			const strRotation = t + 'RotDegree';
			uniforms[strRotation] = {value: sceneVals[t].rotation};



	
		});

		return uniforms;

	}

	update(sceneVals, introVal){

		// const now = Date.now();
		// const delta = now - this.currentTime;

		const boxUniforms = this.getShaderUniforms(sceneVals);

		Object.keys(boxUniforms).forEach(t => {

			this.quad.material.uniforms[t].value = boxUniforms[t].value;
		});

		this.quad.material.uniforms.introVal.value = introVal;
		this.quad.material.uniforms.randomVal.value = Math.random() -.5;

		
	}

}