'use strict';
import './main.scss';
import SceneMain from "./js/SceneMain";
import SceneSelector from './js/SceneSelector';

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

		const scenePresets = [];

		const sceneOne = {
			title: 'Scene one',
			boxOne: {
				width: .5,
				height: .5,
				texture: 1.0,
				scale: 1.0,
				textureFlip: 0.5
			},
			boxTwo: {
				width: .5,
				height: .5,
				texture: 1.0,
				scale: 1.0,
				textureFlip: .0
			},
			boxThree: {
				width: .5,
				height: .5,
				texture: 1.0,
				scale: 1.0,
				textureFlip: 1.0
			},
			boxFour: {
				width: .5,
				height: .5,
				texture: 1.0,
				scale: 1.0,
				textureFlip: 0.0
			},
			cameraSpeed : {
				cloudNormal: .03,
				cloudReverse: .03
			},
			cameraRotation: {
				cloudNormal: {
					rotation: true,
					axis: 'z',
					speed: .01
				},
				cloudReverse: {
					rotation: false,
					axis: 'z',
					speed: .01
				}
			}
		}

		const sceneTwo = {
			title: 'Scene two',
			boxOne: {
				width: 1,
				height: .5,
				texture: 0.0,
				scale: 1.0,
				textureFlip: 0.0
			},
			boxTwo: {
				width: .5,
				height: .5,
				texture: .5,
				scale: 1.0,
				textureFlip: 0.0
			},
			boxThree: {
				width: .5,
				height: .5,
				texture: 1.0,
				scale: 1.1,
				textureFlip: 0.0
			},
			cameraSpeed : {
				cloudNormal: .2,
				cloudReverse: .1
			},
			cameraRotation: {
				cloudNormal: {
					rotation: true,
					axis: 'z',
					speed: -.01
				},
				cloudReverse: {
					rotation: false,
					axis: 'z',
					speed: .01
				}
			}
		}
		
		scenePresets.push(sceneOne, sceneTwo);
		
		
		this.sceneSelector = new SceneSelector(scenePresets);
		container.appendChild(this.sceneSelector.containerEl);

		this.sceneMain = new SceneMain(container, this.sceneSelector);
		// this.main = new Main(new Data());

		this.onResize();
		window.addEventListener('resize', () => {
			this.onResize();
		});

		this.reqFrame();

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






