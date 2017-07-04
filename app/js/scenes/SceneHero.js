export default class SceneHero{

	constructor(){

		this.scene = new THREE.Scene();

		this.lastMousePos = new THREE.Vector2(0.0,0.0);

		this.timestamp = Date.now();

		this.render = false;

		this.meshes = [];

		const interactiveUniformsOne = {};
		interactiveUniformsOne.u_mouse = {value: this.lastMousePos};
		interactiveUniformsOne.u_time = {value: Date.now() - this.timestamp};
		interactiveUniformsOne.audioVal = {value: 0};
		interactiveUniformsOne.color = {value: new THREE.Vector3(1.0, 1.0, 1.0)};
		interactiveUniformsOne.noiseOffset = {value: new THREE.Vector2(200.0, 100.0)};
		interactiveUniformsOne.u_res = {value: new THREE.Vector2(window.innerWidth, window.innerHeight)};

		const interactiveUniformsTwo = {};
		interactiveUniformsTwo.u_mouse = {value: this.lastMousePos};
		interactiveUniformsTwo.u_time = {value: Date.now() - this.timestamp};
		interactiveUniformsTwo.audioVal = {value: 0};
		interactiveUniformsTwo.color = {value: new THREE.Vector3(1.0, 1.0, 1.0)};
		interactiveUniformsTwo.noiseOffset = {value: new THREE.Vector2(200.0, 100.0)};

		const interactiveUniformsThree = {};
		interactiveUniformsThree.u_mouse = {value: this.lastMousePos};
		interactiveUniformsThree.u_time = {value: Date.now() - this.timestamp};
		interactiveUniformsThree.audioVal = {value: 0};
		interactiveUniformsThree.color = {value: new THREE.Vector3(1.0, 1.0, 1.0)};
		interactiveUniformsThree.noiseOffset = {value: new THREE.Vector2(200.0, 100.0)};

		this.imports = [{
			path: 'assets/imports/mech-flower.js',
			interactiveUniforms: interactiveUniformsOne,
			backSide: true
		}];

		// this.imports = [{
		// 	path: 'assets/imports/1.js',
		// 	interactiveUniforms: interactiveUniformsOne,
		// 	backSide: true
		// }, {
		// 	path: 'assets/imports/2.js',
		// 	interactiveUniforms: interactiveUniformsTwo,
		// 	backSide: true
		// }, {
		// 	path: 'assets/imports/3.js',
		// 	interactiveUniforms: interactiveUniformsThree,
		// 	backSide: false
		// }];

		this.imports.forEach((t, i) => {
			const jsonLoader = new THREE.JSONLoader();
       		jsonLoader.load( t.path, this.onLoaded.bind(this, i) );
		});

		window.addEventListener('mousemove', this.onMouseMove.bind(this));
	}

	onLoaded(idx, geometry, materials){

		
		// this.scene.add(this.cubeCamera);

		const resUniforms = {};
		resUniforms.u_res = {value: new THREE.Vector2(window.innerWidth, window.innerHeight)};

		const settings = this.imports[idx];

		const interactiveUniforms = settings.interactiveUniforms;

		var layer1 = THREE.ImageUtils.loadTexture('assets/newtest/layer1_lowres.jpg');

		layer1.format = THREE.RGBAFormat;

		const textureUniforms = {};

		textureUniforms.refl_texture = {value: layer1};
	
		const uniformsObj = Object.assign({}, interactiveUniforms, resUniforms, textureUniforms);

		// console.log(geometry);

		
		const material = new THREE.ShaderMaterial({
			uniforms: uniformsObj,
			vertexShader: require("../../shaders/heroImport.vert"),
			fragmentShader: require("../../shaders/heroImport.frag"),
			transparent: true
		});

		if (settings.backSide)
			material.side = THREE.BackSide;

		const modifier = new Float32Array(geometry.vertices.length);

		const faces = geometry.faces;
		const vertices = geometry.vertices;

		const extra = [];
		const finalVertices = [];

		for (let i = 0; i < faces.length; i++){
			const v0 = vertices[faces[i].a];
			const v1 = vertices[faces[i].b];
			const v2 = vertices[faces[i].c];

			const verts = [v0, v1, v2];



			verts.forEach(t => {
				finalVertices.push(t.x);
				finalVertices.push(t.y);
				finalVertices.push(t.z);

				const random = Math.random();

				extra.push(random);
			});

			

			// verts.forEach(t => {

			

			// });
		}

		
		

		// for (let i = 0; i < vertices.length; i++) {

		// 	extra.push(Math.random());
		// 	finalVertices.push(vertices[0].x);
		// 	finalVertices.push(vertices[0].y);
		// 	finalVertices.push(vertices[0].z);
		// }

		// console.log(finalVertices);
		console.log(geometry);

		const extraArray = new Float32Array(extra);

		const vertArray = new Float32Array(finalVertices);

		const finalGeometry = new THREE.BufferGeometry();

		// finalGeometry.fromGeometry(geometry);
		finalGeometry.addAttribute('position', new THREE.BufferAttribute(vertArray, 3));
		finalGeometry.addAttribute('extra', new THREE.BufferAttribute(extraArray, 1));

		const mesh = new THREE.Mesh( finalGeometry, material );

		// this.mesh.position.y = -55;
		mesh.scale.x = 0.8;
		mesh.scale.y = 0.8;
		mesh.scale.z = 0.8;
		mesh.position.y = -100;
		mesh.position.z = 0;
		mesh.rotation.y = Math.PI;
		// mesh.rotation.z = Math.PI / 2;

		this.meshes.push(mesh);

		this.scene.add(mesh);

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

		const audioVals = [bass, drums, voices];
		// console.log(audioDataBass);
		// this.quad.material.uniforms.u_mouse.value = this.lastMousePos;
		const time = (Date.now() - this.timestamp) / 1000;

		this.meshes.forEach((t, i) => {

			t.material.uniforms.u_time.value = time / (i + 1);
			t.material.uniforms.audioVal.value = audioVals[i];
			t.material.uniforms.u_mouse.value = this.lastMousePos;

		})
		// if (this.mesh){
		// 	this.mesh.material.uniforms.u_time.value = time;
		// 	this.mesh.material.uniforms.audioVal.value = drums;
			

		// 	this.meshVoices.material.uniforms.u_time.value = time * 10.0;
		// 	this.meshVoices.material.uniforms.audioVal.value = voices;
		// }
		


	}
}
