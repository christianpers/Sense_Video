export default class SceneClouds{
	
	constructor(enableRenderCallback, callbackScope){

		this.nrClouds = 1000;
		this.totDepth = 4000;

		this.scene = new THREE.Scene();

		this.start_time = Date.now();

		this.render = false;

		this.rotation = 0;

		this.geometry = new THREE.Geometry();

		this.lastCubemapUpdate = 0;

		var jsonLoader = new THREE.JSONLoader();
        jsonLoader.load( "assets/imports/test.js", this.onLoaded.bind(this) );

		this.texture = THREE.ImageUtils.loadTexture( 'assets/cloud10.png', null, () => enableRenderCallback.call(callbackScope) );
		this.texture.magFilter = THREE.LinearFilter;
		this.texture.minFilter = THREE.LinearMipMapLinearFilter;

		var fog = new THREE.Fog( '#e206db', 0, 600 );

		this.material = new THREE.ShaderMaterial( {

			uniforms: {

				"map": { type: "t", value: this.texture },
				"fogColor" : { type: "c", value: fog.color },
				"fogNear" : { type: "f", value: fog.near },
				"fogFar" : { type: "f", value: fog.far },

			},
			vertexShader: require("../../shaders/cloud.vert"),
			fragmentShader: require("../../shaders/cloud.frag"),
			depthWrite: false,
			depthTest: true,
			transparent: true

		} );

		for ( var i = 0; i < this.nrClouds; i++ ) {

			var plane = new THREE.Mesh( new THREE.PlaneGeometry( 64, 64 ), this.material );


			plane.position.x = Math.random() * 2000 - 100;
			plane.position.y = - Math.random() * Math.random() * 200 - 15;
			plane.position.z = Math.random() * this.totDepth;
			plane.rotation.z = Math.random() * Math.PI;
			plane.scale.x = plane.scale.y = Math.random() * Math.random() * 2.5 + 1;

			// THREE.GeometryUtils.merge( this.geometry, plane );

			let mesh = new THREE.Mesh( plane, this.material );
			this.scene.add( plane );

			// this.clouds.push(plane);

		}

		// this.video = document.createElement( 'video' );
		// this.video.src = "assets/test.mp4";
		// this.video.load(); // must call after setting/changing source
		// this.video.play();
		// this.video.loop = true;
		// const videoImage = document.createElement( 'canvas' );
		// videoImage.width = 480;
		// videoImage.height = 480;

		// this.videoImageContext = videoImage.getContext( '2d' );
		// // background color if no video present
		// this.videoImageContext.fillStyle = '#000000';
		// this.videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

		// this.videoTexture = new THREE.Texture( videoImage );
		// this.videoTexture.minFilter = THREE.LinearFilter;
		// this.videoTexture.magFilter = THREE.LinearFilter;

		// const resUniforms = {};
		// resUniforms.u_res = {value: new THREE.Vector2(400, 400)};

		// const textureUniforms = {};
		// textureUniforms.uTexture = {value: this.videoTexture};
		
		// const uniformsObj = Object.assign({}, resUniforms, textureUniforms);

		// var material = new THREE.ShaderMaterial({
		// 	uniforms: uniformsObj,
		// 	vertexShader: require("../../shaders/noise.vert"),
		// 	fragmentShader: require("../../shaders/gif.frag")
		// });

		// // var plane = new THREE.PlaneBufferGeometry(400, 400);
		// var movieMaterial = new THREE.MeshBasicMaterial( { map: this.videoTexture, opacity: .5, transparent: true, side:THREE.DoubleSide } );
		// // movieMaterial.depthWrite = false
		// var movieGeometry = new THREE.PlaneGeometry( 200, 200, 1, 1 );

		// // var materialTest = new THREE.MeshBasicMaterial( { color: 0x0000ff } );

		// this.quad = new THREE.Mesh( movieGeometry, movieMaterial );
		// this.quad.position.y = 0;
		// this.quad.position.z = 1000;
		// this.scene.add( this.quad );
	}

	onLoaded(geometry, materials){

		this.cubeCamera = new THREE.CubeCamera(1, 10000, 128);
		// console.log(this.cubeCamera.renderTarget.texture);
		// this.cubeCamera.renderTarget.texture.minFilter = THREE.LinearMipMapLinearFilter;
		// this.cubeCamera.renderTarget.texture.magFilter = THREE.LinearMipMapLinearFilter;
		this.scene.add(this.cubeCamera);

		var light = new THREE.AmbientLight( 0xFFFFFF, 1.0 ); // soft white light
		this.scene.add( light );

		var material = new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: this.cubeCamera.renderTarget.texture } );
		
		// var material = new THREE.ShaderMaterial({
		// 	vertexShader: require("../../shaders/import.vert"),
		// 	fragmentShader: require("../../shaders/import.frag")
		// });

		
		this.mesh = new THREE.Mesh( geometry, material );

		this.mesh.position.z = this.totDepth;
		this.mesh.position.y = -55;
		this.mesh.scale.x = 2;
		this.mesh.scale.y = 2;
		this.mesh.scale.z = 2;

		this.scene.add(this.mesh);

		this.mesh.visible = false;


		// var plane = new THREE.Mesh( new THREE.PlaneGeometry( 200, 200, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0xffff00, opacity: 0.25 } ) );
		// plane.visible = true;
		// plane.position.z = this.totDepth - 500;
		// this.scene.add( plane );

		this.render = true;
	}

	update(renderer, pos){

		if (!this.render) return;

		this.rotation += .5;
		this.mesh.rotation.y = (this.rotation + .02) * Math.PI / 180;
		// this.mesh.rotation.x = (this.rotation / 50) * Math.PI / 180;
		// this.mesh.rotation.z = this.rotation+Math.random() * Math.PI / 180;

		this.mesh.visible = false;
		this.mesh.position.z = pos-70;

		const now = Date.now();
		const delta = now - this.lastCubemapUpdate;
		if (delta > 1000) {
			this.cubeCamera.position.copy( {x: 0, y: -40, z: pos} );
			this.cubeCamera.updateCubeMap(renderer, this.scene);
			
			this.lastCubemapUpdate = now;
		}

		// var reversePos = ( ( now - this.start_time ) * .3 ) % this.totDepth;
		// this.quad.position.z = reversePos;

		// if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
			
		// 	this.videoImageContext.drawImage(this.video, 0, 0);
		// 	this.videoTexture.needsUpdate = true;
		// 	// this.quad.position.z = 1000;
		// }
		

		// this.mesh.visible = true;
	}

	renderTexture(renderer, camera, FBO){

		this.mesh.visible = false;

		renderer.render(this.scene, camera, FBO, true);

		this.mesh.visible = true;
	}

}