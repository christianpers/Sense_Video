import SceneClouds from './scenes/SceneClouds';
import SceneCloudsMesh from './scenes/SceneCloudsMesh';
import SceneImport from './scenes/SceneImport';
import SceneCloudsOverlay from './scenes/SceneCloudsOverlay';
import Timeline from '../timeline';
import SceneNoise from './scenes/SceneNoise';
import SceneTwitter from './scenes/SceneTwitter';
import AudioPlayer from './framework/AudioPlayer';
import SpectrumAnalyzer from './framework/SpectrumAnalyzer';
import SceneGif from './scenes/SceneGif';
import SceneCube from './scenes/SceneCube';

export default class SceneMain {
	constructor(container, sceneSelector) {

		this.increase = Math.PI * 2 / 500;
		this.counter = 0;

		this.mouseX = 0;
		this.mouseY = 0;

		this.normalRotation = 0;
		this.reverseRotation = 0;

		this.sceneSelector = sceneSelector;

		this.introDuration = 1;
		this.introStartTime = Date.now();

		this.cubeCameraUpdateInterval = 1000;
		this.cubeCameraLastUpdate = Date.now();

		this.cloudsImportLoaded = false;

		this._audioCtx = new AudioContext();

		this.audioPlayer = new AudioPlayer(this._audioCtx, this.onAudioLoaded, this);
		this.audioPlayer.load('assets/audio.mp3');

		this.spectrumAnalyzer = new SpectrumAnalyzer();
		this.spectrumAnalyzer.init(this._audioCtx);

		this.currentSceneSettings = {renderOverlay: false, cameraSpeed: {}};



		this.FBO = new THREE.WebGLRenderTarget(
							window.innerWidth,
							window.innerHeight,
							{
								minFilter: THREE.LinearFilter,
								magFilter: THREE.NearestFilter,
								format: THREE.RGBFormat
							}
						);

		this.FBOStill = new THREE.WebGLRenderTarget(
							window.innerWidth,
							window.innerHeight,
							{
								minFilter: THREE.LinearFilter,
								magFilter: THREE.NearestFilter,
								format: THREE.RGBFormat
							}
						);

		this.FBOReverse = new THREE.WebGLRenderTarget(
							window.innerWidth,
							window.innerHeight,
							{
								minFilter: THREE.LinearFilter,
								magFilter: THREE.NearestFilter,
								format: THREE.RGBFormat
							}
						);

		this.FBOGirl = new THREE.WebGLRenderTarget(
							window.innerWidth,
							window.innerHeight,
							{
								minFilter: THREE.LinearFilter,
								magFilter: THREE.NearestFilter,
								format: THREE.RGBFormat
							}
						);

		this.FBOBg = new THREE.WebGLRenderTarget(
							window.innerWidth,
							window.innerHeight,
							{
								minFilter: THREE.LinearFilter,
								magFilter: THREE.NearestFilter,
								format: THREE.RGBFormat
							}
						);

		this.FBOTwitter = new THREE.WebGLRenderTarget(
							window.innerWidth,
							window.innerHeight,
							{
								minFilter: THREE.LinearFilter,
								magFilter: THREE.NearestFilter,
								format: THREE.RGBFormat
							}
						);

		const sceneVals = this.getCurrentActiveSceneVals();

		this.sceneCloudsMesh = new SceneCloudsMesh(sceneVals.grid, this.sceneSelector.initObj, this.FBO, this.FBOStill, this.FBOReverse, this.FBOGirl);
		this.sceneClouds = new SceneClouds(this.enableRender, this);
		this.sceneImport = new SceneImport(this.FBO);
		this.sceneCloudsOverlay = new SceneCloudsOverlay(sceneVals.overlay, this.sceneSelector.initObj, this.FBO, this.FBOStill, this.FBOReverse, this.FBOGirl, this.FBOBg);

		this.sceneTwitter = new SceneTwitter();
		this.sceneNoise = new SceneNoise(this.FBO, this.FBOReverse, this.sceneSelector.initObj);
		this.sceneGif = new SceneGif();
		this.start_time = Date.now();

		this.sceneCubeTest = new SceneCube();

		this.windowHalfX;
		this.windowHalfY;

		this.container = container;


		this.doRender = false;

		this.container.style.opacity = 1;

		this.createBgCanvas();

		this.twitterCamera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 3000 );
		this.twitterCamera.position.set(0,150,400);
		// this.twitterCamera.position.z = 0;
		// this.twitterCamera.position.y = 0;

		this.staticCamera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 6000 );
		this.staticCamera.position.set(0, 500, 1000);
    	this.staticCamera.lookAt(this.sceneCubeTest.scene.position);

		this.camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 3000 );
		this.camera.position.z = this.sceneClouds.totDepth;
		this.camera.position.y = -220;

		this.reverseCamera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 3000 );
		this.reverseCamera.position.z = 0;
		this.reverseCamera.position.y = -40;

		this.importCamera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 3000 );
		this.importCamera.position.z = 10;
		this.importCamera.position.y = 14;

		this.orthoCamera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -10000, 10000);

		this.renderer = new THREE.WebGLRenderer( { opacity: .06, antialias: false, alpha: true } );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		// this.renderer.autoClear = false;
		// this.renderer.setClearColorHex( 0x000000, 1 );
		// this.renderer.setClearColor( '#f644ac' );
		this.renderer.sortObjects = false;
		// this.renderer.setClearColor('#6fd271');
		this.renderer.setClearColor( 0x000000, 0 );
		this.container.appendChild( this.renderer.domElement );


		this.controls = new THREE.OrbitControls( this.staticCamera, this.renderer.domElement );

		this.currentTime = Date.now();

	}

	onAudioLoaded(){

		if (this.cloudsImportLoaded)
			this.doRender = true;

		// this.audioPlayer.play();
		// this.spectrumAnalyzer.connect(this.audioPlayer.getSourceNode());
	
	}


	createBgCanvas() {

		var canvas = document.createElement( 'canvas' );
		canvas.width = 32;
		canvas.height = window.innerHeight;

		var context = canvas.getContext( '2d' );

		var gradient = context.createLinearGradient( 0, 0, 0, canvas.height );
		gradient.addColorStop(0, "#1e4877");
		gradient.addColorStop(0.5, "#4584b4");

		context.fillStyle = gradient;
		context.fillRect(0, 0, canvas.width, canvas.height);

		this.container.style.background = 'url(' + canvas.toDataURL('image/png') + ')';
		this.container.style.backgroundSize = '32px 100%';

	}

	enableRender(){

		this.cloudsImportLoaded = true;

		if (this.audioPlayer.isLoaded)
			this.doRender = true;
	}

	getSceneFromTimeline() {

		if (!this.start_time) {
			return Timeline.init.scene;
		}

		const now = Date.now();
		const startDelta = (now - this.start_time)/1000;

		for (var i=0; i< Timeline.schedules.length;i++){
			if (startDelta <= Timeline.schedules[i].time){
				return Timeline.schedules[i].scene;
			}
		}

		return Timeline.schedules[Timeline.schedules.length-1].scene;
	}


	getCurrentActiveSceneVals() {

		const ret = {overlay: {}, grid: {}};

		// if (Timeline.active) {
		const scene = this.getSceneFromTimeline();



		let sceneItem = this.sceneSelector.items[scene];

		if (!sceneItem || !this.sceneSelector.playTimeline) {
			sceneItem = this.sceneSelector.currentItem;
		}

		let currentX = 0;
		let currentY = 0;
		this.currentSceneSettings.renderOverlay = false;
		Object.keys(sceneItem).forEach(t => {

			if (t === 'grid') {
				ret.grid[t] = sceneItem[t];
			}

			if (t.indexOf('box') > -1 && t !== 'boxOverlay') {
				const vals = {};
				vals.texture = sceneItem[t].texture;
				vals.scale = sceneItem[t].scale;
				vals.rotation = sceneItem[t].rotation;
				if (sceneItem[t].hasOwnProperty('specialTextureCoeff')) {
					vals.textureCoeff = sceneItem[t].specialTextureCoeff;
				}

				ret.grid[t] = vals;
			}

			if (t === 'boxOverlay') {
				this.currentSceneSettings.renderOverlay = true;
				const vals = {};
				vals.texture = sceneItem[t].texture;
				vals.scale = sceneItem[t].scale;
				vals.rotation = sceneItem[t].rotation;
				if (sceneItem[t].hasOwnProperty('specialTextureCoeff')) {
					vals.textureCoeff = sceneItem[t].specialTextureCoeff;
				}

				ret.overlay[t] = vals;
			}

			if (t === 'cameraSpeed') {
				this.currentSceneSettings.cameraSpeed = sceneItem[t];
			}
			if (t === 'cameraRotation') {
				this.currentSceneSettings.cameraRotation = sceneItem[t];
			}
		});

		return ret;
	}

	loop(){

		this.update();
		this.render();
	}

	update() {

		const audioData = this.spectrumAnalyzer.getAudioData();
		
		const now = Date.now();
		const introDelta = now - this.introStartTime;
		let introRemain = Math.abs((introDelta / this.introDuration) - 1);
		if (introDelta > this.introDuration) {
			introRemain = 0;
		}

		const sceneVals = this.getCurrentActiveSceneVals();


		// this.sceneCloudsMesh.update(sceneVals.grid, introRemain);
		if (this.currentSceneSettings.renderOverlay) {
			this.sceneCloudsOverlay.update(sceneVals.overlay);
		}

		var position = ( ( now - this.start_time ) * 0.05 ) % this.sceneClouds.totDepth;

		const cloudCameraDestY = -40;
		this.camera.position.y -= (this.camera.position.y - cloudCameraDestY) * .005;


	
		// var position = 1000;

		// const updateCubeDelta = now - this.cubeCameraLastUpdate;
		// if (updateCubeDelta > 1000) {
		// 	this.sceneImport.update(this.renderer, this.sceneClouds.scene, -position + this.sceneClouds.totDepth, true);
		// 	this.cubeCameraLastUpdate = now;
		// } else {
		// 	this.sceneImport.update(this.renderer, this.sceneClouds.scene, -position + this.sceneClouds.totDepth, false);

			
		// }

		this.sceneClouds.update(this.renderer, -position + this.sceneClouds.totDepth);

		this.sceneNoise.update(audioData, sceneVals.grid);

		this.controls.update();
	}

	render() {

		if (!this.doRender) return;

		const now = Date.now();

		var position = ( ( now - this.start_time ) * .05 ) % this.sceneClouds.totDepth;

		this.camera.position.z = - position + this.sceneClouds.totDepth;
		
		var reversePos = ( ( now - this.start_time ) * .08 ) % this.sceneClouds.totDepth;

		var reversePos = reversePos;
		if (reversePos > this.sceneClouds.totDepth) {
			reversePos = 0;
		}
		this.reverseCamera.position.z = reversePos;
		
		this.renderer.clear();
		
		// this.renderer.render( this.sceneClouds.scene, this.camera, this.FBO, true );
		// this.renderer.render( this.sceneClouds.scene, this.reverseCamera, this.FBOReverse, true );
		// this.renderer.render( this.sceneImport.scene, this.importCamera, this.FBOGirl, true );

		// this.renderer.render( this.sceneNoise.scene, this.orthoCamera );

		// this.staticCamera.position.y = 150;
		// this.staticCamera.position.z = 0;

		// this.staticCamera.position.x = Math.sin(now / 10000) * 900;
  //       this.staticCamera.position.z = Math.cos(now / 10000) * 900;
		// const origin = new THREE.Vector3();
		this.staticCamera.lookAt(this.sceneCubeTest.scene.position);
		this.renderer.render( this.sceneCubeTest.scene, this.staticCamera );

		
	}

	onResize(w,h) {

		this.windowHalfX = w/2;
		this.windowHalfY = h/2;

		this.camera.aspect = w / h;
		this.camera.updateProjectionMatrix();

		this.renderer.setSize( w,h );


	}
}
