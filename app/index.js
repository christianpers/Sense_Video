'use strict';
import './main.scss';
import SceneMain from "./js/SceneMain";
import SceneSelector from './js/SceneSelector';
import scenes from './scenes';

class Starter {
	constructor() {
		let canvas = document.createElement("canvas");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.className = "Main-Canvas";
		canvas.id = 'gl';
		var container = document.body.querySelector('.container')

		function transformProp() {
		  var testEl = document.createElement('div');
		  if(testEl.style.transform == null) {
		    var vendors = ['Webkit', 'Moz', 'ms'];
		    for(var vendor in vendors) {
		      if(testEl.style[ vendors[vendor] + 'Transform' ] !== undefined) {
		        return vendors[vendor] + 'Transform';
		      }
		    }
		  }
		  return 'transform';
		};

		window.NS = {};
		window.NS.GL = {};
		window.NS.GL.params = {};
		window.NS.GL.params.detail = 32;
		window.NS.transform = transformProp();
		window.NS.iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

		if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

		const sceneInit = {
			grid: [3,3],
			boxOne: {
				texture: 1.0,
				scale: 1.0,
				rotation: 90,
				specialTextureCoeff: 1.2
			},
			boxTwo: {
				texture: 1.0,
				scale: 1.0,
				rotation: 90,
				specialTextureCoeff: 1.2
			},
			boxThree: {
				texture: 1.0,
				scale: 1.0,
				rotation: 90,
				specialTextureCoeff: 1.2
			},
			boxFour: {
				texture: 1.0,
				scale: 1.0,
				rotation: 270,
				specialTextureCoeff: 1.2
			},
			boxFive: {
				texture: 0.0,
				scale: 1.0,
				rotation: 0,
				specialTextureCoeff: 1.2
			},
			boxSix: {
				texture: .5,
				scale: 1.0,
				rotation: 0,
				specialTextureCoeff: 1.2
			},
			boxSeven: {
				texture: .5,
				scale: 1.0,
				rotation: 0,
				specialTextureCoeff: 1.2
			},
			boxEight: {
				texture: .5,
				scale: 1.0,
				rotation: 0,
				specialTextureCoeff: 1.2
			},
			boxNine: {
				texture: .5,
				scale: 1.0,
				rotation: 0,
				specialTextureCoeff: 1.2
			},
			boxOverlay: {
				x: .1,
				y: .1,
				width: .8,
				height: .8,
				texture: 0.0,
				scale: 0.0,
				translateX: 0.0,
				translateY: 0.0,
				textureRotation: 0,
				specialTextureCoeff: .2
			},
		}

		
		this.sceneSelector = new SceneSelector(scenes, sceneInit);
		container.appendChild(this.sceneSelector.containerEl);

		this.sceneMain = new SceneMain(container, this.sceneSelector);
		// this.main = new Main(new Data());

		this.onResize();
		window.addEventListener('resize', () => {
			this.onResize();
		});

		

		// this.createAudio();
		this.reqFrame();

	}

	createAudio() {

		this.audioEl = document.createElement('audio');
		this.audioEl.src = 'assets/audio.mp3';
		this.audioEl.addEventListener('playing', this.onPlaying.bind(this));
		// this.audioEl.play();
	}

	onPlaying() {
		console.log('sdfsdfsdfs');

		// this.reqFrame();
	}

	reqFrame() {

		requestAnimationFrame(() => {
			this.reqFrame();
		});

		this.sceneMain.loop();
		// this.main.update();
	}

	onResize() {
		var w = window.innerWidth;
		var h = window.innerHeight;
		this.sceneMain.onResize(w,h);
		// this.main.onResize(w,h);
	}

};

if(document.body) new Starter();
else {
	window.addEventListener("load", new Starter());
}
