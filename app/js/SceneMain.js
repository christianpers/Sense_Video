import SceneClouds from './scenes/SceneClouds';
import SceneCloudsMesh from './scenes/SceneCloudsMesh';
import SceneImport from './scenes/SceneImport';
import SceneCloudsOverlay from './scenes/SceneCloudsOverlay';

export default class SceneMain {
	constructor(container, sceneSelector) {

		this.increase = Math.PI * 2 / 500;
		this.counter = 0;
		
		this.mouseX = 0;
		this.mouseY = 0;

		this.normalRotation = 0;
		this.reverseRotation = 0;

		this.sceneSelector = sceneSelector;

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

		const sceneVals = this.getCurrentActiveSceneVals();

		this.sceneCloudsMesh = new SceneCloudsMesh(sceneVals.grid, this.FBO, this.FBOStill, this.FBOReverse, this.FBOGirl);
		this.sceneClouds = new SceneClouds(this.enableRender, this);
		this.sceneImport = new SceneImport(this.FBO);
		this.sceneCloudsOverlay = new SceneCloudsOverlay(sceneVals.overlay, this.FBO, this.FBOStill, this.FBOReverse, this.FBOGirl, this.FBOBg);

		this.start_time = Date.now();

		this.windowHalfX;
		this.windowHalfY;

		this.container = container;

		
		this.doRender = false;
		
		this.container.style.opacity = 1;

		this.createBgCanvas();

		this.camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 3000 );
		this.camera.position.z = this.sceneClouds.totDepth;
		this.camera.position.y = -40;
		
		this.reverseCamera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 3000 );
		this.reverseCamera.position.z = 0;
		this.reverseCamera.position.y = -40;
		
		this.importCamera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 3000 );
		this.importCamera.position.z = 10;
		this.importCamera.position.y = 14;

		this.orthoCamera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -10000, 10000);
		
		this.renderer = new THREE.WebGLRenderer( { antialias: false, alpha: true } );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.renderer.autoClear = false;
		// this.renderer.setClearColorHex( 0x000000, 1 );
		this.renderer.setClearColor( '#e206db' );
		this.container.appendChild( this.renderer.domElement );

		this.currentTime = Date.now();

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


		this.doRender = true;
	}


	getCurrentActiveSceneVals() {

		const ret = {overlay: {}, grid: {}};

		const sceneItem = this.sceneSelector.currentItem;

		let currentX = 0;
		let currentY = 0;
		this.currentSceneSettings.renderOverlay = false;
		Object.keys(sceneItem).forEach(t => {

			if (t.indexOf('box') > -1 && t !== 'boxOverlay') {
				const vals = {};
				vals.x = currentX;
				vals.y = currentY;
				vals.w = sceneItem[t].width;
				vals.h = sceneItem[t].height;
				vals.texture = sceneItem[t].texture;
				vals.scale = sceneItem[t].scale;
				vals.flipX = sceneItem[t].flipX;
				vals.flipY = sceneItem[t].flipY;

				currentX += vals.w;
				if (currentX >= 1.0) {
					currentX = 0;
					currentY = sceneItem[t].height;
				}

				ret.grid[t] = vals;
			}

			if (t === 'boxOverlay') {
				this.currentSceneSettings.renderOverlay = true;
				const vals = {};
				vals.x = sceneItem[t].x;
				vals.y = sceneItem[t].y;
				vals.w = sceneItem[t].width;
				vals.h = sceneItem[t].height;
				vals.texture = sceneItem[t].texture;
				vals.scale = sceneItem[t].scale;
				vals.flipX = sceneItem[t].flipX;
				vals.flipY = sceneItem[t].flipY;

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

		// super.update();

		const sceneVals = this.getCurrentActiveSceneVals();

		this.sceneCloudsMesh.update(sceneVals.grid);

		var position = ( ( Date.now() - this.start_time ) * 0.03 ) % this.sceneClouds.totDepth;

		this.sceneImport.update(this.renderer, this.sceneClouds.scene, -position + this.sceneClouds.totDepth);
		// this.sceneClouds.update(this.renderer, -position + this.sceneClouds.totDepth);
		
	}

	render() {

		if (!this.doRender) return;

		const now = Date.now();
		
		var position = ( ( now - this.start_time ) * this.currentSceneSettings.cameraSpeed.cloudNormal ) % this.sceneClouds.totDepth;

		this.camera.position.z = - position + this.sceneClouds.totDepth;
		if (this.currentSceneSettings.cameraRotation.cloudNormal.rotation){
			this.camera.rotation[this.currentSceneSettings.cameraRotation.cloudNormal.axis] = this.normalRotation += this.currentSceneSettings.cameraRotation.cloudNormal.speed;
		}
		
		var reversePos = ( ( now - this.start_time ) * this.currentSceneSettings.cameraSpeed.cloudReverse ) % this.sceneClouds.totDepth;

		var reversePos = reversePos;
		if (reversePos > this.sceneClouds.totDepth) {
			reversePos = 0;
		}
		this.reverseCamera.position.z = reversePos;
		if (this.currentSceneSettings.cameraRotation.cloudReverse.rotation){
			this.camera.rotation[this.currentSceneSettings.cameraRotation.cloudReverse.axis] = this.reverseRotation += this.currentSceneSettings.cameraRotation.cloudReverse.speed;
		}

		if (!this.sceneImport.render) return;

		// this.sceneClouds.renderTexture(this.renderer, this.camera, this.FBO);


		this.renderer.clear();
		// this.renderer.render( this.sceneImport.scene, this.importCamera );
		this.renderer.render( this.sceneClouds.scene, this.camera, this.FBO, true );
		this.renderer.render( this.sceneClouds.scene, this.reverseCamera, this.FBOReverse, true );
		// this.renderer.render( this.sceneCloudsMesh.scene, this.orthoCamera );
		// this.renderer.clear();
		// this.renderer.render( this.sceneClouds.scene, this.camera );
		// this.renderer.clearDepth();
		this.renderer.render( this.sceneImport.scene, this.importCamera, this.FBOGirl, true );

		if (!this.currentSceneSettings.renderOverlay){
			this.renderer.render( this.sceneCloudsMesh.scene, this.orthoCamera );
		}
		else{
			this.renderer.render( this.sceneCloudsMesh.scene, this.orthoCamera, this.FBOBg, true );
			this.renderer.render( this.sceneCloudsOverlay.scene, this.orthoCamera );
		}
		

	}

	onResize(w,h) {

		this.windowHalfX = w/2;
		this.windowHalfY = h/2;

		this.camera.aspect = w / h;
		this.camera.updateProjectionMatrix();

		this.renderer.setSize( w,h );


	}
}