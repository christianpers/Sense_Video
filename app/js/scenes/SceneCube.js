export default class SceneCube{
	
	constructor(){

		this.scene = new THREE.Scene();

		this.start_time = Date.now();

		 // urls of the images,
        // one per half axis
        var urls = [
              'assets/Yokohama3/posx.jpg',
              'assets/Yokohama3/negx.jpg',
              'assets/Yokohama3/posy.jpg',
              'assets/Yokohama3/negy.jpg',
              'assets/Yokohama3/posz.jpg',
              'assets/Yokohama3/negz.jpg'
            ];

        // wrap it up into the object that we need
        var cubemap = THREE.ImageUtils.loadTextureCube(urls);

        
        // set the format, likely RGB
        // unless you've gone crazy
        cubemap.format = THREE.RGBFormat;

        // following code from https://github.com/mrdoob/three.js/blob/master/examples/webgl_materials_cubemap.html
        // var shader = THREE.ShaderUtils.lib[ "cube" ];
        // shader.uniforms[ "tCube" ].texture = cubemap;

        const textureUniforms = {};
		textureUniforms.tCube = {value: cubemap};
		// textureUniforms.uTextureReverse = {value: FBOReverse.texture};
		// textureUniforms.uTextureGirl = {value: FBOGirl.texture};

		const uniformsObj = Object.assign({}, textureUniforms);

		var material = new THREE.ShaderMaterial({
			uniforms: uniformsObj,
			vertexShader: require("../../shaders/cube.vert"),
			fragmentShader: require("../../shaders/cube.frag"),
			depthWrite: false
		});

		var geometry = new THREE.CubeGeometry( 5000, 5000, 5000 );
        // var skybox = new THREE.Mesh( new THREE.CubeGeometry( 100000, 100000, 100000, 1, 1, 1, null, true ), material );
        // skybox.flipSided = true;
        var skybox = new THREE.Mesh( geometry, material );

		this.scene.add(skybox);

		


	}

	
	update(renderer, pos){

		
	}

	
}