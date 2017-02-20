export default class SceneImport{
	
	constructor(FBO){

		this.scene = new THREE.Scene();

		this.render = false;

		var jsonLoader = new THREE.JSONLoader();
        jsonLoader.load( "assets/imports/test.js", this.onLoaded.bind(this) );

        this.rotation = 0;

        this.FBO = FBO;

        this.rotWorldMatrix;

	}

	onLoaded(geometry, materials){

		// THREE.GeometryUtils.center( geometry );

		// geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, 0, 0) );
		this.cubeCamera = new THREE.CubeCamera(1, 10000, 128);
		// this.cubeCamera.renderTarget.texture.minFilter = THREE.LinearMipMapLinearFilter;
		// console.log(this.cubeCamera.renderTarget.texture);

		// this.cubeCamera.renderTarget.texture.generateMipMaps = false;

		// var options = { format: THREE.RGBAFormat, magFilter: THREE.LinearFilter, minFilter: THREE.NearestFilter };

		// this.cubeCamera.renderTarget = new THREE.WebGLRenderTargetCube( 128, 128, options );
		// this.cubeCamera.renderTarget.texture.generateMipmaps = false;

		this.scene.add(this.cubeCamera);

		var material = new THREE.ShaderMaterial({
			uniforms: {
				// uTexture: {value: this.FBO.texture},
				"uTexCube" : { type: "t", value: this.cubeCamera.renderTarget.texture },
				"uTextureBg" : {value: this.FBO.texture}

				
			},
			vertexShader: require("../../shaders/import.vert"),
			fragmentShader: require("../../shaders/import.frag")
		});

		// var material = new THREE.MeshLambertMaterial( { envMap: this.cubeCamera.renderTarget.texture, transparent: false, emissive:0xFFFFFF } );
		// var material = new THREE.MeshBasicMaterial( {
		// 			envMap: this.cubeCamera.renderTarget.texture
		// 		} );
		
		// var material = new THREE.ShaderMaterial({
		// 	vertexShader: require("../../shaders/import.vert"),
		// 	fragmentShader: require("../../shaders/import.frag")
		// });

		
		this.mesh = new THREE.Mesh( geometry, material );

		const center = {x: 0, y: 0, z: 0};
		// this.mesh.position.set( center.x, center.y, center.z );
		// this.mesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation( -center.x, -center.y, -center.z ) );

		var light = new THREE.AmbientLight( 0xFFFFFF, 1.0 ); // soft white light
		this.scene.add( light );

		var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );

		// this.scene.add( directionalLight );

		// this.mesh.position.z = 2000 - 20;
		// this.mesh.position.y = -55;
		// this.mesh.rotation.y = 20* Math.PI / 180;
		// this.mesh.scale.y = .1;
		// this.mesh.scale.z = .1;

		// this.pivot = new THREE.Object3D();
		// console.log(new THREE.Vector3(0,0,0));
		// this.pivot.position = new THREE.Vector3(0,0,0);
		// this.pivot.add(this.mesh);
		// this.scene.add(pivot);

		this.scene.add(this.mesh);

	
		this.render = true;
	}

// Rotate an object around an arbitrary axis in world space       
// function rotateAroundWorldAxis(object, axis, radians) {
//     rotWorldMatrix = new THREE.Matrix4();
//     rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);

//     // old code for Three.JS pre r54:
//     //  rotWorldMatrix.multiply(object.matrix);
//     // new code for Three.JS r55+:
//     rotWorldMatrix.multiply(object.matrix);                // pre-multiply

//     object.matrix = rotWorldMatrix;

//     // old code for Three.js pre r49:
//     // object.rotation.getRotationFromMatrix(object.matrix, object.scale);
//     // old code for Three.js pre r59:
//     // object.rotation.setEulerFromRotationMatrix(object.matrix);
//     // code for r59+:
//     object.rotation.setFromRotationMatrix(object.matrix);
// }
	rotateAroundWorldAxis(object, axis, radians) {

		this.rotWorldMatrix = new THREE.Matrix4();
		this.rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
		this.rotWorldMatrix.multiply(object.matrix);

		object.matrix = this.rotWorldMatrix;

		object.rotation.setFromRotationMatrix(object.matrix);

	}

	update(renderer, scene, pos, updateCube){

		console.log('update');

		if (!this.render) return;

		const translate = 3;

		this.rotation = 0.5;

		const yAxis = new THREE.Vector3(0,1,0);

		this.rotateAroundWorldAxis(this.mesh, yAxis, this.rotation * Math.PI / 180);
		
		// this.mesh.position.z += translate;
		// this.mesh.position.x = translate;
		// this.mesh.position.y += translate;
		// this.mesh.translate.z += translate;
		// this.mesh.translate.y += translate;
		// this.mesh.translate.x += translate;
		// this.mesh.center();
		// this.mesh.rotation.y = this.rotation * Math.PI / 180;
		
		
		// this.mesh.translate.x -= translate;
		// this.mesh.translate.z -= translate;
		// this.mesh.translate.y -= translate;
		// this.mesh.translate.x -= translate;
		// this.mesh.position.z -= translate;
		// this.mesh.position.x -= translate;
		// this.mesh.position.z -= translate;

		// this.pivot.rotation.y += 0.05;

		if (updateCube) {
			this.cubeCamera.position.copy( {x: 0, y: -40, z: pos} );
			this.cubeCamera.updateCubeMap(renderer, scene, this.mesh.position);
		}
		


	}
}