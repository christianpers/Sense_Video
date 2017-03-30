export default class SceneTwitter{

	constructor(FBO){

		this.scene = new THREE.Scene();

		this.lastMousePos = new THREE.Vector2(0.0,0.0);

		this.timestamp = Date.now();

		var canvas1 = document.createElement('canvas');
		var context1 = canvas1.getContext('2d');
		canvas1.height= 256;
		canvas1.width=512;
		context1.font = "Bold 20px Futura";
		context1.fillStyle = "rgba(255,255,255,1.0)";
		context1.fillText('Hello, world!', 100, 40);

		
		// canvas contents will be used for a texture
		var texture1 = new THREE.Texture(canvas1) 
		texture1.needsUpdate = true;
		  
		var material1 = new THREE.MeshBasicMaterial( {map: texture1, side:THREE.DoubleSide } );
		material1.transparent = true;

		var mesh1 = new THREE.Mesh(
		    new THREE.PlaneGeometry(canvas1.width, canvas1.height),
		    material1
		  );
		mesh1.position.set(0,50,0);
		this.scene.add( mesh1 );

		// const resUniforms = {};
		// resUniforms.u_res = {value: new THREE.Vector2(window.innerWidth, window.innerHeight)};

		// const interactiveUniforms = {};
		// interactiveUniforms.u_mouse = {value: this.lastMousePos};
		// interactiveUniforms.u_time = {value: Date.now() - this.timestamp};

		// const textureUniforms = {};
		// textureUniforms.uTexture = {value: FBO.texture};
		// // textureUniforms.uTextureReverse = {value: FBOReverse.texture};
		// // textureUniforms.uTextureGirl = {value: FBOGirl.texture};

		// const uniformsObj = Object.assign({}, interactiveUniforms, resUniforms, textureUniforms);

		// var material = new THREE.ShaderMaterial({
		// 	uniforms: uniformsObj,
		// 	vertexShader: require("../../shaders/twitter.vert"),
		// 	fragmentShader: require("../../shaders/noise_intro.frag")
		// });

		// var plane = new THREE.PlaneBufferGeometry(window.innerWidth, window.innerHeight);

		// this.quad = new THREE.Mesh( plane, material );
		// this.quad.position.z = 0;
		// this.scene.add( this.quad );

	}

	

	update(){

		


	}
}
