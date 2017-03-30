export default class SceneGif{

	constructor(){

		this.scene = new THREE.Scene();

		this.video = document.createElement( 'video' );
		this.video.src = "assets/giphy.mp4";
		this.video.load(); // must call after setting/changing source
		this.video.play();
		this.video.loop = true;
		const videoImage = document.createElement( 'canvas' );
		videoImage.width = 480;
		videoImage.height = 480;

		this.videoImageContext = videoImage.getContext( '2d' );
		// background color if no video present
		this.videoImageContext.fillStyle = '#000000';
		this.videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

		this.videoTexture = new THREE.Texture( videoImage );
		this.videoTexture.minFilter = THREE.LinearFilter;
		this.videoTexture.magFilter = THREE.LinearFilter;

		const resUniforms = {};
		resUniforms.u_res = {value: new THREE.Vector2(400, 400)};

		const textureUniforms = {};
		textureUniforms.uTexture = {value: this.videoTexture};
		
		const uniformsObj = Object.assign({}, resUniforms, textureUniforms);

		var material = new THREE.ShaderMaterial({
			uniforms: uniformsObj,
			vertexShader: require("../../shaders/noise.vert"),
			fragmentShader: require("../../shaders/gif.frag")
		});

		// var plane = new THREE.PlaneBufferGeometry(400, 400);
		var movieMaterial = new THREE.MeshBasicMaterial( { map: this.videoTexture, transparent: true, overdraw: true, side:THREE.DoubleSide } );
		movieMaterial.depthWrite = false
		var movieGeometry = new THREE.PlaneGeometry( 200, 200, 4, 4 );

		this.quad = new THREE.Mesh( movieGeometry, movieMaterial );
		this.quad.position.y = 0;
		this.quad.position.z = 1000;
		this.scene.add( this.quad );

	}

	update(){
		if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
			
			this.videoImageContext.drawImage(this.video, 0, 0);
			this.videoTexture.needsUpdate = true;
		}

	}
}
