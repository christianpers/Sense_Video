export default class SceneSphere{
	
	constructor(){

		this.scene = new THREE.Scene();

		this.start_time = Date.now();

		 // urls of the images,
        // one per half axis
       	this.timestamp = Date.now();

        // wrap it up into the object that we need
        var layer1 = THREE.ImageUtils.loadTexture('assets/newtest/layer1.jpg');
        var layer2 = THREE.ImageUtils.loadTexture('assets/newtest/layer2.jpg');
        var layer3 = THREE.ImageUtils.loadTexture('assets/newtest/layer3.jpg');

        layer1.format = THREE.RGBAFormat;
        layer2.format = THREE.RGBAFormat;
        layer3.format = THREE.RGBAFormat;

    	

        const textureUniforms = {};
		textureUniforms.texture_one = {value: layer1};
		textureUniforms.texture_two = {value: layer2};
		textureUniforms.texture_three = {value: layer3};

		const resUniforms = {};
		resUniforms.u_res = {value: new THREE.Vector2(window.innerWidth, window.innerHeight)};
		// // textureUniforms.uTextureReverse = {value: FBOReverse.texture};
		// // textureUniforms.uTextureGirl = {value: FBOGirl.texture};
		resUniforms.u_time = {value: Date.now() - this.timestamp};

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
			fragmentShader: require("../../shaders/base.frag"),
			transparent: true,
			blending: THREE.AdditiveBlending
		});

		material.side = THREE.BackSide;
		this.skydome = new THREE.Mesh(geometry, material);

		this.scene.add(this.skydome);

	}

	
	update(renderer, pos){

		this.skydome.material.uniforms.u_time.value = (Date.now() - this.timestamp) / 10000;
		
	}

	
}