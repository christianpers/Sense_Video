export default class SceneRefract{

	constructor(){

		this.scene = new THREE.Scene();

		this.lastMousePos = new THREE.Vector2(0.0,0.0);

		this.timestamp = Date.now();

		const resUniforms = {};
		resUniforms.u_res = {value: new THREE.Vector2(window.innerWidth, window.innerHeight)};

		const interactiveUniforms = {};
		interactiveUniforms.u_mouse = {value: this.lastMousePos};
		interactiveUniforms.u_time = {value: Date.now() - this.timestamp};

		var bg = THREE.ImageUtils.loadTexture('assets/newtest/layer1.jpg');

		bg.format = THREE.RGBAFormat;

		const textureUniforms = {};
		textureUniforms.uTexture = {value: bg};
		
		const uniformsObj = Object.assign({}, interactiveUniforms, resUniforms, textureUniforms);

		var material = new THREE.ShaderMaterial({
			uniforms: uniformsObj,
			vertexShader: require("../../shaders/noise.vert"),
			fragmentShader: require("../../shaders/refract.frag")
		});

		material.depthWrite = false;

		var plane = new THREE.PlaneBufferGeometry(window.innerWidth, window.innerHeight);

		this.quad = new THREE.Mesh( plane, material );
		this.quad.position.z = 0;
		this.scene.add( this.quad );

		window.addEventListener('mousemove', this.onMouseMove.bind(this));
	}



	onMouseMove(e){

		this.lastMousePos.x = e.clientX;
		this.lastMousePos.y = e.clientY;

		
	}
	

	update(audioData, sceneVals){

		this.quad.material.uniforms.u_mouse.value = this.lastMousePos;
		this.quad.material.uniforms.u_time.value = (Date.now() - this.timestamp) / 10000;
		this.quad.material.uniforms.u_res.value = new THREE.Vector2(window.innerWidth, window.innerHeight);

		


	}
}
