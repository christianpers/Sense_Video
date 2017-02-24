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

		const sceneInit = {
			boxOne: {
				width: .5,
				height: .33,
				texture: 1.0,
				scale: 1.0,
				translateX: 0.5,
				translateY: 0.2,
				textureRotation: 90,
				specialTextureCoeff: 1.2
			},
			boxTwo: {
				width: .5,
				height: .33,
				texture: 1.0,
				scale: 1.0,
				translateX: -0.5,
				translateY: 0.2,
				textureRotation: 90,
				specialTextureCoeff: 1.2
			},
			boxThree: {
				width: .5,
				height: .33,
				texture: 1.0,
				scale: 1.0,
				translateX: 0.0,
				translateY: -0.3,
				textureRotation: 90,
				specialTextureCoeff: 1.2
			},
			boxFour: {
				width: .5,
				height: .33,
				texture: 1.0,
				scale: 1.0,
				translateX: 0.0,
				translateY: -0.2,
				textureRotation: 270,
				specialTextureCoeff: 1.2
			},
			boxFive: {
				width: .5,
				height: .33,
				texture: 0.0,
				scale: 1.0,
				translateX: 0.0,
				translateY: .0,
				textureRotation: 0,
				specialTextureCoeff: 1.2
			},
			boxSix: {
				width: .5,
				height: .33,
				texture: .5,
				scale: 1.0,
				translateX: 0.0,
				translateY: .0,
				textureRotation: 0,
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

		const sceneOneA = {
			title: 'Scene One A',
			boxOne: {
				width: 1.0,
				height: 1.0,
				texture: 0.0,
				scale: 0.0,
				translateX: 0.0,
				translateY: 0.0,
				textureRotation: 0.0,
				specialTextureCoeff: .2
			},

			cameraSpeed : {
				cloudNormal: .05,
				cloudReverse: .01
			},
			cameraRotation: {
				cloudNormal: {
					rotation: true,
					axis: 'z',
					speed: -.002
				},
				cloudReverse: {
					rotation: false,
					axis: 'z',
					speed: .001
				}
			}
		}
		const sceneOneB = {
			title: 'Scene One B',
			boxOne: {
				width: 1.0,
				height: 1.0,
				texture: 0.0,
				scale: 0.0,
				translateX: 0.0,
				translateY: 0.0,
				textureRotation: 180,
				specialTextureCoeff: 1.5
			},

			cameraSpeed : {
				cloudNormal: .05,
				cloudReverse: .01
			},
			cameraRotation: {
				cloudNormal: {
					rotation: true,
					axis: 'z',
					speed: -.002
				},
				cloudReverse: {
					rotation: false,
					axis: 'z',
					speed: .001
				}
			}
		}
		const sceneOneC = {
			title: 'Scene One C',
			boxOne: {
				width: 1.0,
				height: 0.5,
				texture: .5,
				scale: 0.0,
				translateX: 0.0,
				translateY: 0.0,
				textureRotation: 0,
				specialTextureCoeff: .4
			},

			boxTwo: {
				width: 1.0,
				height: 0.5,
				texture: 0.0,
				scale: 0.0,
				translateX: 0.0,
				translateY: 0.0,
				textureRotation: 180,
				specialTextureCoeff: .2
			},

			cameraSpeed : {
				cloudNormal: .1,
				cloudReverse: .1
			},
			cameraRotation: {
				cloudNormal: {
					rotation: false,
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

		const sceneOneD = {
			title: 'Scene One D',
			boxOne: {
				width: 1.0,
				height: 0.5,
				texture: 0.0,
				scale: 0.0,
				translateX: 0.0,
				translateY: 0.0,
				textureRotation: 180,
				specialTextureCoeff: .2
			},

			boxTwo: {
				width: 1.0,
				height: 0.5,
				texture: .5,
				scale: 0.0,
				translateX: 0.0,
				translateY: 0.0,
				textureRotation: 0,
				specialTextureCoeff: .4
			},

			cameraSpeed : {
				cloudNormal: .1,
				cloudReverse: .1
			},
			cameraRotation: {
				cloudNormal: {
					rotation: false,
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

		const sceneOneE = {
			title: 'Scene One E',
			boxOne: {
				width: 1.0,
				height: 1.0,
				texture: .5,
				scale: 0.0,
				translateX: 0.0,
				translateY: 0.0,
				textureRotation: 180,
				specialTextureCoeff: .4
			},

			boxOverlay: {
				x: .05,
				y: .1,
				width: .9,
				height: .8,
				texture: 0.5,
				scale: 0.0,
				translateX: 0.0,
				translateY: 0.0,
				textureRotation: 0.0,
				specialTextureCoeff: .2
			},

			cameraSpeed : {
				cloudNormal: .1,
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

		const sceneOneF = {
			title: 'Scene One F',
			boxOne: {
				width: 1.0,
				height: 1.0,
				texture: 1.5,
				scale: 0.0,
				translateX: 0.0,
				translateY: 0.0,
				textureRotation: 0,
				specialTextureCoeff: 0.2
			},

			boxOverlay: {
				x: .05,
				y: .1,
				width: .9,
				height: .8,
				texture: 0.5,
				scale: 0.0,
				translateX: 0.0,
				translateY: 0.0,
				textureRotation: 0.0,
				specialTextureCoeff: .2
			},

			cameraSpeed : {
				cloudNormal: .1,
				cloudReverse: .1
			},
			cameraRotation: {
				cloudNormal: {
					rotation: false,
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

		const sceneOneG = {
			title: 'Scene One G',
			boxOne: {
				width: 1.0,
				height: 1.0,
				texture: 1.5,
				scale: 0.0,
				translateX: 0.0,
				translateY: 0.0,
				textureRotation: 0,
				specialTextureCoeff: 0.2
			},

			boxOverlay: {
				x: .05,
				y: .1,
				width: .9,
				height: .8,
				texture: 1.5,
				scale: 0.0,
				translateX: 0.0,
				translateY: 0.0,
				textureRotation: 10,
				specialTextureCoeff: .7
			},

			cameraSpeed : {
				cloudNormal: .1,
				cloudReverse: .1
			},
			cameraRotation: {
				cloudNormal: {
					rotation: false,
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

		const sceneOneH = {
			title: 'Scene One H',
			boxOne: {
				width: 1.0,
				height: 1.0,
				texture: 1.5,
				scale: 0.0,
				translateX: 0.0,
				translateY: -0.4,
				textureRotation: 0.0,
				specialTextureCoeff: .4
			},
			boxOverlay: {
				x: .05,
				y: .1,
				width: .9,
				height: .8,
				texture: 1.5,
				scale: 0.0,
				translateX: 0.0,
				translateY: 0.0,
				textureRotation: -10,
				specialTextureCoeff: .7
			},

			cameraSpeed : {
				cloudNormal: .1,
				cloudReverse: .1
			},
			cameraRotation: {
				cloudNormal: {
					rotation: false,
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

		const sceneOneI = {
			title: 'Scene one I',
			boxOne: {
				width: 1.0,
				height: 1.0,
				texture: 0.0,
				scale: 0.1,
				translateX: 1.0,
				translateY: 0.0,
				textureRotation: 0,
				specialTextureCoeff: 0.2
			},

			boxOverlay: {
				x: .05,
				y: .1,
				width: .9,
				height: .8,
				texture: 0.0,
				scale: 0.1,
				translateX: 0.0,
				translateY: 1.0,
				textureRotation: 180,
				specialTextureCoeff: .2
			},

			cameraSpeed : {
				cloudNormal: .1,
				cloudReverse: .1
			},
			cameraRotation: {
				cloudNormal: {
					rotation: false,
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

		const sceneOneJ = {
			title: 'Scene One J',
			boxOne: {
				width: 1.0,
				height: 1.0,
				texture: 0.0,
				scale: 0.1,
				translateX: 0.2,
				translateY: -0.3,
				textureRotation: 50,
				specialTextureCoeff: .2
			},
			boxOverlay: {
				x: .1,
				y: .1,
				width: .8,
				height: .8,
				texture: 0.2,
				scale: 0.0,
				translateX: 0.2,
				translateY: -0.0,
				textureRotation: 0.0,
				specialTextureCoeff: .2
			},
			cameraSpeed : {
				cloudNormal: .01,
				cloudReverse: .01
			},
			cameraRotation: {
				cloudNormal: {
					rotation: true,
					axis: 'z',
					speed: -.002
				},
				cloudReverse: {
					rotation: false,
					axis: 'z',
					speed: .001
				}
			}
		}

		const sceneOneK = {
			title: 'Scene one K',
			boxOne: {
				width: 1.0,
				height: 0.5,
				texture: 0.0,
				scale: 0.15,
				translateX: 0.2,
				translateY: 0.0,
				textureRotation: 280,
				specialTextureCoeff: .2
			},
			boxTwo: {
				width: 1.0,
				height: 0.5,
				texture: 1.0,
				scale: 0.15,
				translateX: 0.2,
				translateY: 0.0,
				textureRotation: 270,
				specialTextureCoeff: .2
			},
			boxOverlay: {
				x: .05,
				y: .05,
				width: 0.9,
				height: 0.9,
				texture: 0.2,
				scale: 0.0,
				translateX: 0.2,
				translateY: -0.0,
				textureRotation: 0.0,
				specialTextureCoeff: .2
			},
			cameraSpeed : {
				cloudNormal: .01,
				cloudReverse: .01
			},
			cameraRotation: {
				cloudNormal: {
					rotation: true,
					axis: 'z',
					speed: -.002
				},
				cloudReverse: {
					rotation: false,
					axis: 'z',
					speed: .001
				}
			}
		}

		const sceneTwo = {
			title: 'Scene one B',
			boxOne: {
				width: 1.0,
				height: 0.5,
				texture: 0.0,
				scale: 0.15,
				translateX: 0.2,
				translateY: 0.0,
				textureRotation: 280,
				specialTextureCoeff: .2
			},
			boxTwo: {
				width: 1.0,
				height: 0.5,
				texture: 1.0,
				scale: 0.15,
				translateX: 0.2,
				translateY: 0.0,
				textureRotation: 270,
				specialTextureCoeff: .2
			},
			boxOverlay: {
				x: .05,
				y: .05,
				width: 0.9,
				height: 0.9,
				texture: 0.2,
				scale: 0.0,
				translateX: 0.2,
				translateY: -0.0,
				textureRotation: 0.0,
				specialTextureCoeff: .2
			},
			cameraSpeed : {
				cloudNormal: .01,
				cloudReverse: .01
			},
			cameraRotation: {
				cloudNormal: {
					rotation: true,
					axis: 'z',
					speed: -.002
				},
				cloudReverse: {
					rotation: false,
					axis: 'z',
					speed: .001
				}
			}
		}

		const sceneThree = {
			title: 'Scene Three',
			boxOne: {
				width: 1,
				height: 1,
				texture: 1.5,
				scale: 1.0,
				translateX: 0.0,
				translateY: 0.0,
				textureRotation: 0,
				specialTextureCoeff: .2
			},
			boxOverlay: {
				x: .1,
				y: .1,
				width: .8,
				height: .8,
				texture: 1.5,
				scale: 0.5,
				translateX: 0.2,
				translateY: 0.0,
				textureRotation: 20,
				specialTextureCoeff: .2
			},
			cameraRotation: {
				cloudNormal: {
					rotation: false,
					axis: 'z',
					speed: -.01
				},
				cloudReverse: {
					rotation: false,
					axis: 'z',
					speed: .01
				}
			},
			cameraSpeed : {
				cloudNormal: .03,
				cloudReverse: .03
			}
		}

		const sceneFour = {
			title: 'Scene Four',
			boxOne: {
				width: 1,
				height: 1,
				texture: 1.0,
				scale: 1.0,
				translateX: 0.0,
				translateY: 0.0,
				textureRotation: 0,
				specialTextureCoeff: 2
			},
			cameraRotation: {
				cloudNormal: {
					rotation: false,
					axis: 'z',
					speed: -.1
				},
				cloudReverse: {
					rotation: false,
					axis: 'z',
					speed: .1
				}
			},
			cameraSpeed : {
				cloudNormal: .03,
				cloudReverse: .03
			}
		}

		const sceneFive = {
			title: 'Scene five',
			boxOne: {
				width: .5,
				height: 1.0,
				texture: 1.0,
				scale: 1.0,
				translateX: 0.2,
				translateY: 0.0,
				textureRotation: 0,
				specialTextureCoeff: .4
			},
			boxTwo: {
				width: .5,
				height: 1.0,
				texture: .5,
				scale: 0.5,
				translateX: 0.0,
				translateY: 0.0,
				textureRotation: 0,
				specialTextureCoeff: .4
			},
			cameraSpeed : {
				cloudNormal: .1,
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

		scenePresets.push(sceneOneA, sceneOneB, sceneOneC, sceneOneD, sceneOneE, sceneOneF, sceneOneG, sceneOneH, sceneOneI, sceneOneJ, sceneOneK, sceneTwo, sceneThree, sceneFour, sceneFive);

		this.sceneSelector = new SceneSelector(scenePresets, sceneInit);
		container.appendChild(this.sceneSelector.containerEl);

		this.sceneMain = new SceneMain(container, this.sceneSelector);
		// this.main = new Main(new Data());

		this.onResize();
		window.addEventListener('resize', () => {
			this.onResize();
		});

		this.reqFrame();

		this.createAudio();

	}

	createAudio() {

		this.audioEl = document.createElement('audio');
		this.audioEl.src = 'assets/audio.mp3';

		this.audioEl.play();
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
