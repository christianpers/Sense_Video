export default class SceneCloudsMesh{
	
	constructor(sceneVals, FBO, FBOStill, FBOReverse, FBOGirl){
		
		this.scene = new THREE.Scene();

		this.currentStillTexture = FBO.texture;
		
		this.mixVal = 1.0;

		const boxUniforms = this.getShaderUniforms(sceneVals);

		const textureUniforms = {};
		textureUniforms.uTexture = {value: FBO.texture};
		textureUniforms.uTextureReverse = {value: FBOReverse.texture};
		textureUniforms.uTextureGirl = {value: FBOGirl.texture};

		const resUniforms = {};
		resUniforms.resX = {value: window.innerWidth};
		resUniforms.resY = {value: window.innerHeight};

		const uniformsObj = Object.assign({}, boxUniforms, textureUniforms, resUniforms);


	
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

	update(sceneVals){

		// const now = Date.now();
		// const delta = now - this.currentTime;

		const boxUniforms = this.getShaderUniforms(sceneVals);

		Object.keys(boxUniforms).forEach(t => {

			this.quad.material.uniforms[t].value = boxUniforms[t].value;
		});

		// if (delta > this.threshold){
		// 	this.currentTime = now;


			// const sceneVals = this.getCurrentActiveSceneVals();

			// this.quad.material.uniforms.normalX.value = sceneVals.normalX;
			// this.quad.material.uniforms.normalY.value = sceneVals.normalY;
			// this.quad.material.uniforms.normalW.value = sceneVals.normalW;
			// this.quad.material.uniforms.normalH.value = sceneVals.normalH;
			// this.quad.material.uniforms.normalActive.value = sceneVals.normalActive;

			// this.quad.material.uniforms.reverseX.value = sceneVals.reverseX;
			// this.quad.material.uniforms.reverseY.value = sceneVals.reverseY;
			// this.quad.material.uniforms.reverseW.value = sceneVals.reverseW;
			// this.quad.material.uniforms.reverseH.value = sceneVals.reverseH;
			// this.quad.material.uniforms.reverseActive.value = sceneVals.reverseActive;

			// this.quad.material.uniforms.girlX.value = sceneVals.girlX;
			// this.quad.material.uniforms.girlY.value = sceneVals.girlY;
			// this.quad.material.uniforms.girlW.value = sceneVals.girlW;
			// this.quad.material.uniforms.girlH.value = sceneVals.girlH;
			// this.quad.material.uniforms.girlActive.value = sceneVals.girlActive;

			// this.quad.materials.uniforms.

			// this.quad.material.uniforms.uTopLeft.value = Math.random();
			// this.quad.material.uniforms.uMixVal.value = this.mixVal;

			// console.log(this.mixVal);
		// }

	}

}