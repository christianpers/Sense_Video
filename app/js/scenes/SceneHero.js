export default class SceneHero{

	constructor(gui){

		this.scene = new THREE.Scene();

		this.lastMousePos = new THREE.Vector2(0.0,0.0);

		this.timestamp = Date.now();

		this.gui = gui;

		this.render = false;

		var jsonLoader = new THREE.JSONLoader();
        jsonLoader.load( "assets/imports/mech-flower.js", this.onLoaded.bind(this) );

		window.addEventListener('mousemove', this.onMouseMove.bind(this));
	}

	onLoaded(geometry, materials){

		// this.scene.add(this.cubeCamera);

		const resUniforms = {};
		resUniforms.u_res = {value: new THREE.Vector2(window.innerWidth, window.innerHeight)};

		const interactiveUniforms = {};
		interactiveUniforms.u_mouse = {value: this.lastMousePos};
		interactiveUniforms.u_time = {value: Date.now() - this.timestamp};
		interactiveUniforms.audioVal = {value: 0};
		interactiveUniforms.color = {value: new THREE.Vector3(1.0, .2, 1.0)};
		interactiveUniforms.noiseOffset = {value: new THREE.Vector2(200.0, 100.0)};
		// interactiveUniforms.drumsVal = {value: 0};
		// interactiveUniforms.voicesVal = {value: 0};

		const textureUniforms = {};
	
		const uniformsObj = Object.assign({}, interactiveUniforms, resUniforms, textureUniforms);

		
		const material = new THREE.ShaderMaterial({
			uniforms: uniformsObj,
			vertexShader: require("../../shaders/heroImport.vert"),
			fragmentShader: require("../../shaders/heroImport.frag"),
			// transparent: true
		});

		
		this.mesh = new THREE.Mesh( geometry, material );

		// this.mesh.position.y = -55;
		this.mesh.scale.x = .5;
		this.mesh.scale.y = .5;
		this.mesh.scale.z = .5;
		this.mesh.position.y = -130;
		this.mesh.position.z = 0;

		this.scene.add(this.mesh);

		const resUniformsVoices = {};
		resUniformsVoices.u_res = {value: new THREE.Vector2(window.innerWidth, window.innerHeight)};

		const interactiveUniformsVoices = {};
		interactiveUniformsVoices.u_mouse = {value: this.lastMousePos};
		interactiveUniformsVoices.u_time = {value: Date.now() - this.timestamp};
		interactiveUniformsVoices.audioVal = {value: 0};
		interactiveUniformsVoices.color = {value: new THREE.Vector3(0.0, 0.0, 1.0)};
		interactiveUniformsVoices.noiseOffset = {value: new THREE.Vector2(200.0, 100.0)};
		// interactiveUniforms.drumsVal = {value: 0};
		// interactiveUniforms.voicesVal = {value: 0};

		const textureUniformsVoices = {};
	
		const uniformsObjVoices = Object.assign({}, interactiveUniformsVoices, resUniformsVoices, textureUniformsVoices);

		
		const materialVoices = new THREE.ShaderMaterial({
			uniforms: uniformsObjVoices,
			vertexShader: require("../../shaders/heroImport.vert"),
			fragmentShader: require("../../shaders/heroImport.frag"),
			// transparent: true
		});

		this.meshVoices = new THREE.Mesh( geometry, materialVoices );

		this.meshVoices.scale.x = .5;
		this.meshVoices.scale.y = .2;
		this.meshVoices.scale.z = .5;
		this.meshVoices.position.y = -130;
		this.meshVoices.position.z = 0;
		
		this.scene.add(this.meshVoices);

		// this.mesh.visible = false;


		// var plane = new THREE.Mesh( new THREE.PlaneGeometry( 200, 200, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0xffff00, opacity: 0.25 } ) );
		// plane.visible = true;
		// plane.position.z = this.totDepth - 500;
		// this.scene.add( plane );

		this.render = true;
	}

	onMouseMove(e){

		this.lastMousePos.x = e.clientX;
		this.lastMousePos.y = e.clientY;

		
	}
	

	update(audioDataBass, audioDataDrums, audioDataVoices){

		const bass = audioDataBass[5];
		const drums = audioDataDrums[5];
		const voices = audioDataVoices[3];
		// console.log(audioDataBass);
		// this.quad.material.uniforms.u_mouse.value = this.lastMousePos;
		const time = (Date.now() - this.timestamp) / 1000;
		if (this.mesh){
			this.mesh.material.uniforms.u_time.value = time;
			this.mesh.material.uniforms.audioVal.value = drums;
			

			this.meshVoices.material.uniforms.u_time.value = time * 10.0;
			this.meshVoices.material.uniforms.audioVal.value = voices;
		}
		// this.quad.material.uniforms.u_res.value = new THREE.Vector2(window.innerWidth, window.innerHeight);

		// for (const key in this.gui) {
		// 	this.quad.material.uniforms[key].value = this.gui[key];
		// }


	}
}
