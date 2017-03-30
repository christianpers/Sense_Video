export default class SceneImport{

	constructor(FBO, FBOTwitter, sceneInitObj){

		this.scene = new THREE.Scene();

		this.lastMousePos = new THREE.Vector2(0.0,0.0);

		this.timestamp = Date.now();

		const boxUniforms = this.getInitShaderUniforms(sceneInitObj);

		const audioUniforms = {};
		audioUniforms.audio_high = {value: 0};
		audioUniforms.audio_deep = {value: 0};

		const resUniforms = {};
		resUniforms.u_res = {value: new THREE.Vector2(window.innerWidth, window.innerHeight)};

		const interactiveUniforms = {};
		interactiveUniforms.u_mouse = {value: this.lastMousePos};
		interactiveUniforms.u_time = {value: Date.now() - this.timestamp};

		const textureUniforms = {};
		textureUniforms.uTexture = {value: FBO.texture};
		textureUniforms.uTwitterTexture = {value: FBOTwitter.texture};
		// textureUniforms.uTextureReverse = {value: FBOReverse.texture};
		// textureUniforms.uTextureGirl = {value: FBOGirl.texture};

		const uniformsObj = Object.assign({}, boxUniforms, interactiveUniforms, resUniforms, textureUniforms, audioUniforms);

		var material = new THREE.ShaderMaterial({
			uniforms: uniformsObj,
			vertexShader: require("../../shaders/noise.vert"),
			fragmentShader: require("../../shaders/noise_boxes.frag")
		});

		material.depthWrite = false;

		var plane = new THREE.PlaneBufferGeometry(window.innerWidth, window.innerHeight);

		this.quad = new THREE.Mesh( plane, material );
		this.quad.position.z = 0;
		this.scene.add( this.quad );

		window.addEventListener('mousemove', this.onMouseMove.bind(this));
	}

	getInitShaderUniforms(sceneInit) {

		const initUniforms = {};
		let gridUniform = {};
		Object.keys(sceneInit).forEach(t => {

			if (t === 'grid') {

				gridUniform[t] = {value: new THREE.Vector2(sceneInit[t][0], sceneInit[t][1])};
			} else {
				const strTexture = t + 'Texture';
				initUniforms[strTexture] = {value: -1};

				const strScale = t + 'Scale';
				initUniforms[strScale] = {value: 0};

				const strRotation = t + 'RotDegree';
				initUniforms[strRotation] = {value: 0};

				const textureCoeffStr = t + 'Coeff';
				initUniforms[textureCoeffStr] = {value: 0};
			}

			
		});


		// const uniforms = {};
		// Object.keys(sceneVals).forEach(t => {

		// 	const strTexture = t + 'Texture';
		// 	uniforms[strTexture] = {value: sceneVals[t].texture};

		// 	const strScale = t + 'Scale';
		// 	uniforms[strScale] = {value: sceneVals[t].scale};

		// 	const strRotation = t + 'RotDegree';
		// 	uniforms[strRotation] = {value: sceneVals[t].rotation};

		// 	if (sceneVals[t].hasOwnProperty('textureCoeff')) {
		// 		const textureCoeffStr = t + 'Coeff';
		// 		uniforms[textureCoeffStr] = {value: sceneVals[t].textureCoeff};
		// 	}
			

		// });



		return Object.assign({}, initUniforms, gridUniform);

	}

	getShaderUniforms(sceneVals) {

		const uniforms = {};
		const gridUniform = {};
		Object.keys(sceneVals).forEach(t => {

			if (t === 'grid') {

				gridUniform[t] = {value: new THREE.Vector2(sceneVals[t][0], sceneVals[t][1])};
			} else {

				const strTexture = t + 'Texture';
				uniforms[strTexture] = {value: sceneVals[t].texture};

				const strScale = t + 'Scale';
				uniforms[strScale] = {value: sceneVals[t].scale};

				const strRotation = t + 'RotDegree';
				uniforms[strRotation] = {value: sceneVals[t].rotation};

				if (sceneVals[t].hasOwnProperty('textureCoeff')) {
					const textureCoeffStr = t + 'Coeff';
					uniforms[textureCoeffStr] = {value: sceneVals[t].textureCoeff};
				}
			}
	
		});

		return Object.assign({}, uniforms, gridUniform);

	}


	onMouseMove(e){

		this.lastMousePos.x = e.clientX;
		this.lastMousePos.y = e.clientY;

		
	}
	

	update(audioData, sceneVals){

		const boxUniforms = this.getShaderUniforms(sceneVals);

		Object.keys(boxUniforms).forEach(t => {

			this.quad.material.uniforms[t].value = boxUniforms[t].value;

		});

		this.quad.material.uniforms.u_mouse.value = this.lastMousePos;
		this.quad.material.uniforms.u_time.value = (Date.now() - this.timestamp) / 10000;
		// console.log(this.quad.material.uniforms);
		this.quad.material.uniforms.u_res.value = new THREE.Vector2(window.innerWidth, window.innerHeight);

		this.quad.material.uniforms.audio_high.value = audioData[6];
		this.quad.material.uniforms.audio_deep.value = audioData[3];
		


	}
}
