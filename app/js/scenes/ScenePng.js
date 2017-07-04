export default class ScenePng{

	constructor(texturePath){

		this.scene = new THREE.Scene();

		this.texture = THREE.ImageUtils.loadTexture( 'assets/' + texturePath, null );
		this.texture.magFilter = THREE.LinearFilter;
		this.texture.minFilter = THREE.LinearFilter;
		this.texture.needsUpdate = true;

		// const resUniforms = {};
		// resUniforms.u_res = {value: new THREE.Vector2(200, 200)};

		// const textureUniforms = {};
		// textureUniforms.uTexture = {value: this.texture};
		
		// const uniformsObj = Object.assign({}, resUniforms, textureUniforms);

		// var material = new THREE.ShaderMaterial({
		// 	uniforms: uniformsObj,
		// 	vertexShader: require("../../shaders/noise.vert"),
		// 	fragmentShader: require("../../shaders/png.frag")
		// });

		var material = new THREE.MeshBasicMaterial( { map: this.texture, transparent: true, overdraw: true, side:THREE.DoubleSide } );
		material.depthWrite = false

		// var plane = new THREE.PlaneBufferGeometry(400, 400);
		const geometry = new THREE.PlaneGeometry( 100, 100, 4, 4 );

		this.quad = new THREE.Mesh( geometry, material );
		this.quad.position.y = Math.random() > .5 ? -1000 * Math.random() : 1000 * Math.random();
		this.quad.position.z = Math.random() > .5 ? -1000 * Math.random() : 100 * Math.random();
		this.quad.position.x = Math.random() > .5 ? -1000 * Math.random() : 1000 * Math.random();
		this.scene.add( this.quad );

	}



	update(){
		

	}
}
