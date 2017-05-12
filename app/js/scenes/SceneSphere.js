export default class SceneSphere{
	
	constructor(){

		this.scene = new THREE.Scene();

		this.start_time = Date.now();

		 // urls of the images,
        // one per half axis
       

        // wrap it up into the object that we need
        var texture = THREE.ImageUtils.loadTexture('assets/test2.jpg');

    	

        const textureUniforms = {};
		textureUniforms.texture = {value: texture};

		const resUniforms = {};
		resUniforms.u_res = {value: new THREE.Vector2(window.innerWidth, window.innerHeight)};
		// // textureUniforms.uTextureReverse = {value: FBOReverse.texture};
		// // textureUniforms.uTextureGirl = {value: FBOGirl.texture};

		const uniformsObj = Object.assign({}, textureUniforms, resUniforms);

		// var ambientLight = new THREE.AmbientLight(0x333333);
		// this.scene.add(ambientLight);

		var geometry = new THREE.SphereGeometry(2000, 120, 80);
		// var material = new THREE.MeshBasicMaterial();
		// material.map = THREE.ImageUtils.loadTexture("assets/test2.jpg");
		// material.side = THREE.BackSide;

		
		var material = new THREE.ShaderMaterial({
			uniforms: uniformsObj,
			vertexShader: require("../../shaders/noise.vert"),
			fragmentShader: require("../../shaders/base.frag")
		});

		material.side = THREE.BackSide;
		var skydome = new THREE.Mesh(geometry, material);

		this.scene.add(skydome);

	}

	
	update(renderer, pos){

		
	}

	
}