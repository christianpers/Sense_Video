export default class SceneCloudsOverlay{
	
	constructor(sceneVals, FBO, FBOStill, FBOReverse, FBOGirl, FBOBG){
		
		this.scene = new THREE.Scene();

		this.currentStillTexture = FBO.texture;
		
		this.mixVal = 1.0;

		const boxUniforms = this.getShaderUniforms(sceneVals);

		const textureUniforms = {};
		textureUniforms.uTexture = {value: FBO.texture};
		textureUniforms.uTextureReverse = {value: FBOReverse.texture};
		textureUniforms.uTextureGirl = {value: FBOGirl.texture};
		textureUniforms.uTextureBg = {value: FBOBG.texture};

		const uniformsObj = Object.assign({}, boxUniforms, textureUniforms);

		console.log(uniformsObj);
		var material = new THREE.ShaderMaterial({
			uniforms: uniformsObj,
			vertexShader: require("../../shaders/cloud.vert"),
			fragmentShader: require("../../shaders/cloudOverlay.frag")
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
		
		});

		return uniforms;

	}

	update(sceneVals){

		
		

	}

}