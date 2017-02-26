/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(1);

	var _SceneMain = __webpack_require__(5);

	var _SceneMain2 = _interopRequireDefault(_SceneMain);

	var _SceneSelector = __webpack_require__(17);

	var _SceneSelector2 = _interopRequireDefault(_SceneSelector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Starter = function () {
		function Starter() {
			var _this = this;

			_classCallCheck(this, Starter);

			var canvas = document.createElement("canvas");
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			canvas.className = "Main-Canvas";
			canvas.id = 'gl';
			var container = document.body.querySelector('.container');

			function transformProp() {
				var testEl = document.createElement('div');
				if (testEl.style.transform == null) {
					var vendors = ['Webkit', 'Moz', 'ms'];
					for (var vendor in vendors) {
						if (testEl.style[vendors[vendor] + 'Transform'] !== undefined) {
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

			if (!Detector.webgl) Detector.addGetWebGLMessage();

			var scenePresets = [];

			var sceneInit = {
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
				}
			};

			var sceneOneA = {
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

				cameraSpeed: {
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
			};
			var sceneOneB = {
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

				cameraSpeed: {
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
			};
			var sceneOneC = {
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

				cameraSpeed: {
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
			};

			var sceneOneD = {
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

				cameraSpeed: {
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
			};

			var sceneOneE = {
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

				cameraSpeed: {
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
			};

			var sceneOneF = {
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

				cameraSpeed: {
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
			};

			var sceneOneG = {
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

				cameraSpeed: {
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
			};

			var sceneOneH = {
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

				cameraSpeed: {
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
			};

			var sceneOneI = {
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

				cameraSpeed: {
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
			};

			var sceneOneJ = {
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
				cameraSpeed: {
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
			};

			var sceneOneK = {
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
				cameraSpeed: {
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
			};

			var sceneTwo = {
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
				cameraSpeed: {
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
			};

			var sceneThree = {
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
				cameraSpeed: {
					cloudNormal: .03,
					cloudReverse: .03
				}
			};

			var sceneFour = {
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
				cameraSpeed: {
					cloudNormal: .03,
					cloudReverse: .03
				}
			};

			var sceneFive = {
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
				cameraSpeed: {
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
			};

			scenePresets.push(sceneOneA, sceneOneB, sceneOneC, sceneOneD, sceneOneE, sceneOneF, sceneOneG, sceneOneH, sceneOneI, sceneOneJ, sceneOneK, sceneTwo, sceneThree, sceneFour, sceneFive);

			this.sceneSelector = new _SceneSelector2.default(scenePresets, sceneInit);
			container.appendChild(this.sceneSelector.containerEl);

			this.sceneMain = new _SceneMain2.default(container, this.sceneSelector);
			// this.main = new Main(new Data());

			this.onResize();
			window.addEventListener('resize', function () {
				_this.onResize();
			});

			this.createAudio();
		}

		_createClass(Starter, [{
			key: 'createAudio',
			value: function createAudio() {

				this.audioEl = document.createElement('audio');
				this.audioEl.src = 'assets/audio.mp3';
				this.audioEl.addEventListener('playing', this.onPlaying.bind(this));
				this.audioEl.play();
			}
		}, {
			key: 'onPlaying',
			value: function onPlaying() {
				console.log('sdfsdfsdfs');

				this.reqFrame();
			}
		}, {
			key: 'reqFrame',
			value: function reqFrame() {
				var _this2 = this;

				requestAnimationFrame(function () {
					_this2.reqFrame();
				});

				this.sceneMain.loop();
				// this.main.update();
			}
		}, {
			key: 'onResize',
			value: function onResize() {
				var w = window.innerWidth;
				var h = window.innerHeight;
				this.sceneMain.onResize(w, h);
				// this.main.onResize(w,h);
			}
		}]);

		return Starter;
	}();

	;

	if (document.body) new Starter();else {
		window.addEventListener("load", new Starter());
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/sass-loader/index.js?sourceMap!./main.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/sass-loader/index.js?sourceMap!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html, body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  position: static;\n  background: #fff; }\n\nbody {\n  height: 100%; }\n\n* {\n  box-sizing: border-box; }\n\na {\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.8); }\n\nhtml {\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  text-size-adjust: none; }\n\nh1, h2, h3, h4, h5, text, p {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-webkit-font-smoothing: antialiased;\n  font-family: Arial; }\n\n.selector-container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 200px;\n  height: 400px;\n  padding: 20px; }\n  .selector-container .item-container {\n    margin-bottom: 10px; }\n  .selector-container .select {\n    padding: 10px;\n    background: white;\n    cursor: pointer;\n    font-size: 12px; }\n  .selector-container .timeline-toggler {\n    background: rgba(255, 255, 255, 0.6);\n    color: black;\n    border: 2px solid rgba(220, 20, 100, 0.8);\n    font-weight: 700;\n    position: fixed;\n    left: 20px; }\n\n.mainLoader {\n  position: absolute;\n  z-index: 10;\n  width: 200px;\n  height: 200px;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -100px; }\n\n.logo {\n  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);\n  color: transparent;\n  font-family: Arial;\n  font-weight: lighter;\n  position: fixed;\n  right: 14px;\n  top: 6px;\n  z-index: 20;\n  margin: 0;\n  font-size: 32px;\n  opacity: 1; }\n  @media only screen and (max-width: 767px) {\n    .logo {\n      top: 10px; } }\n\n.closeBtn {\n  position: fixed;\n  top: 52px;\n  right: 40px;\n  width: 50px;\n  height: 50px;\n  text-indent: -9999px;\n  padding: 0 4px;\n  z-index: 10;\n  cursor: pointer; }\n  @media only screen and (max-width: 767px) {\n    .closeBtn {\n      right: 10px;\n      width: 30px;\n      height: 30px; } }\n\n.container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0; }\n\n.Main-Canvas {\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  position: absolute;\n  z-index: 0; }\n\n.imageContainer {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%; }\n  .imageContainer > img {\n    height: 100%;\n    margin: 0 auto;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    transform: scale(0);\n    -webkit-transform: scale(0);\n    opacity: 0; }\n\n.nav {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  font-family: \"Arial\";\n  padding: 10px;\n  z-index: 5;\n  color: rgba(0, 0, 0, 0.8);\n  z-index: 10;\n  opacity: 1; }\n  .nav .nav-item {\n    cursor: pointer;\n    padding: 10px;\n    font-size: 10px;\n    position: relative;\n    left: 0;\n    transition: transform .5s;\n    -webkit-transition: transform .5s; }\n    .nav .nav-item:hover {\n      background: white; }\n    @media only screen and (max-width: 767px) {\n      .nav .nav-item {\n        display: block;\n        padding: 4px;\n        margin-bottom: 10px;\n        transform: translate(-200px, 0);\n        background: white; }\n        .nav .nav-item:hover {\n          background: transparent; } }\n  .nav .menuBurger {\n    display: none;\n    width: 39px;\n    height: 35px;\n    text-indent: -9999px;\n    padding: 0 4px;\n    margin-top: 0;\n    margin-bottom: 10px; }\n    @media only screen and (max-width: 767px) {\n      .nav .menuBurger {\n        display: block; } }\n\n.overlay {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  display: none;\n  -webkit-transition: opacity .6s, transform .6s;\n  /* Android 2.1+, Chrome 1-25, iOS 3.2-6.1, Safari 3.2-6  */\n  transition: opacity .6s, transform .6s;\n  /* Chrome 26, Firefox 16+, iOS 7+, IE 10+, Opera, Safari 6.1+  */\n  color: rgba(0, 0, 0, 0.8);\n  -webkit-transform: scale(0.8);\n  /* Chrome, Opera 15+, Safari 3.1+ */\n  transform: scale(0.8);\n  /* Firefox 16+, IE 10+, Opera */\n  padding: 40px 100px; }\n  .overlay .overlayTitle {\n    text-align: center;\n    font-size: 32px; }\n\n.touchLayer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.contact {\n  padding-top: 20%;\n  text-align: center; }\n  .contact > h1 {\n    font-size: 60px;\n    color: rgba(0, 0, 0, 0.8); }\n  @media only screen and (max-width: 767px) {\n    .contact {\n      padding: 40% 0;\n      margin-top: 0; }\n      .contact > h1 {\n        font-size: 20px; } }\n\n.about {\n  margin-top: 100px; }\n  .about .overlayDescr {\n    line-height: 22px;\n    width: 50%; }\n  @media only screen and (max-width: 767px) {\n    .about {\n      padding: 0px 10px;\n      font-size: 10px;\n      line-height: 0px;\n      padding-top: 40px;\n      margin-top: 16%; }\n      .about .overlayDescr {\n        line-height: 18px;\n        font-size: 14px;\n        width: 90%; } }\n\n.projects {\n  padding: 0;\n  margin-top: 80px; }\n  .projects .projectsContainer {\n    width: 80%;\n    margin: 20px auto;\n    position: relative; }\n  .projects .projectDetailWrapper {\n    opacity: 0;\n    display: none;\n    height: 100%;\n    width: 100%;\n    z-index: 8;\n    position: relative;\n    transition: opacity .5s;\n    -webkit-transition: opacity .5s; }\n    .projects .projectDetailWrapper .projectDescr {\n      width: 100%;\n      text-align: center;\n      padding: 0 10%;\n      font-size: 12px;\n      line-height: 20px; }\n    .projects .projectDetailWrapper .projectSlider {\n      margin: 20px auto;\n      position: relative; }\n      .projects .projectDetailWrapper .projectSlider .sliderNav {\n        width: 20px;\n        height: 20px;\n        position: absolute;\n        top: 50%;\n        margin-top: -10px;\n        cursor: pointer;\n        transition: transform .2s;\n        -webkit-transition: transform .2s;\n        transform: scale(1);\n        -webkit-transform: scale(1); }\n        .projects .projectDetailWrapper .projectSlider .sliderNav:hover {\n          transform: scale(1.2);\n          -webkit-transform: scale(1.2); }\n        .projects .projectDetailWrapper .projectSlider .sliderNav.sliderNext {\n          right: -30px; }\n        .projects .projectDetailWrapper .projectSlider .sliderNav.sliderPrev {\n          left: -30px; }\n      .projects .projectDetailWrapper .projectSlider .sliderContainer {\n        position: absolute;\n        overflow: hidden;\n        height: 100%; }\n      .projects .projectDetailWrapper .projectSlider .sliderItem {\n        position: absolute;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        transition: transform .5s, opacity .5s;\n        -webkit-transition: transform .5s, opacity .5s;\n        z-index: 2; }\n        .projects .projectDetailWrapper .projectSlider .sliderItem > img {\n          width: 100%;\n          height: auto; }\n  .projects .projectItem {\n    background: rgba(0, 0, 0, 0.2);\n    position: absolute;\n    top: 0;\n    left: 0;\n    cursor: pointer;\n    transition: opacity .4s, transform .3s;\n    -webkit-transition: opacity .4s, transform .3s; }\n    .projects .projectItem > .touchLayer {\n      z-index: 2; }\n    .projects .projectItem .projectItemLoader {\n      z-index: 3; }\n    .projects .projectItem .itemCaption {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      color: white;\n      background: rgba(0, 0, 0, 0.6);\n      z-index: 1;\n      opacity: 0;\n      transition: opacity .4s;\n      -webkit-transition: opacity .4s;\n      padding-top: 22%; }\n      .projects .projectItem .itemCaption > h5 {\n        font-size: 20px;\n        text-align: center;\n        text-transform: uppercase; }\n      .projects .projectItem .itemCaption .projectOpenBtn {\n        font-size: 16px;\n        color: white; }\n    .projects .projectItem > img {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      transform: scale(1);\n      -webkit-transform: scale(1);\n      opacity: 1;\n      z-index: 0; }\n  @media only screen and (max-width: 767px) {\n    .projects {\n      padding-top: 40px;\n      margin-top: 0; } }\n", "", {"version":3,"sources":["/./app/main.scss"],"names":[],"mappings":"AAGA;EACC,YAAW;EACX,aAAY;EAEZ,UAAS;EACT,WAAU;EAGV,iBAAiB;EACjB,iBAAiB,EACjB;;AAED;EACC,aAAa,EACb;;AAED;EACC,uBAAuB,EACvB;;AAED;EACC,sBAAsB;EACtB,0BAAW,EACX;;AAED;EACC,+BAA+B;EAC/B,4BAA4B;EAC5B,uBAAuB,EACvB;;AAED;EACC,oCAAoC;EACpC,4CAA4C;EAC5C,mBAAmB,EACnB;;AAED;EACC,mBAAmB;EAChB,OAAO;EACP,SAAS;EACT,aAAa;EACb,cAAc;EACd,cAAc,EAsBjB;EA5BD;IAQK,oBAAoB,EACpB;EATL;IAWK,cAAc;IACd,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB,EAEhB;EAhBL;IAmBK,qCAAgB;IAChB,aAAa;IACb,0CAAsB;IACtB,iBAAiB;IACjB,gBAAgB;IAChB,WAAW,EAGX;;AAGL;EACC,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,cAAc;EACd,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,oBAAoB,EACpB;;AAED;EACC,kDAA6B;EAC1B,mBAAW;EACX,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,YAAY;EACZ,SAAS;EACT,YAAY;EACZ,UAAU;EACV,gBAAgB;EAChB,WAAW,EAId;EAHG;IAZJ;MAaK,UAAU,EAEd,EAAA;;AAED;EACC,gBAAgB;EAChB,UAAU;EACV,YAAY;EAEZ,YAAY;EACT,aAAa;EACb,qBAAqB;EACrB,eAAe;EACf,YAAY;EACZ,gBAAgB,EAQnB;EALA;IAbD;MAcE,YAAY;MACZ,YAAY;MACT,aAAa,EAEjB,EAAA;;AAED;EACC,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,YAAW;EACX,aAAY;EACZ,WAAW,EAEX;;AAED;EACC,YAAW;EACX,aAAY;EACZ,SAAQ;EACR,UAAS;EACT,mBAAmB;EACnB,WAAW,EACX;;AAED;EACC,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,aAAa,EAab;EAjBD;IAME,aAAa;IACb,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,OAAO;IACP,UAAU;IACV,oBAAgB;IAChB,4BAAwB;IACxB,WAAW,EAEX;;AAKF;EACC,gBAAgB;EACb,SAAS;EACT,UAAU;EACV,qBAAqB;EACrB,cAAc;EACd,WAAW;EACX,0BAAW;EACX,YAAY;EACZ,WAAW,EAyCd;EAlDD;IAYE,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,mBAAmB;IACnB,QAAQ;IACR,0BAA0B;IAC1B,kCAAkC,EAelC;IAjCF;MAoBG,kBAAkB,EAClB;IAED;MAvBF;QAwBG,eAAe;QACf,aAAa;QACb,oBAAoB;QACpB,gCAAoB;QACpB,kBAAkB,EAKnB;QAjCF;UA8BI,wBAAwB,EACxB,EAAA;EA/BJ;IAoCE,cAAc;IACd,YAAY;IACT,aAAa;IACb,qBAAqB;IACrB,eAAe;IACf,cAAc;IACd,oBAAoB,EAMvB;IAJA;MA5CF;QA6CG,eAAe,EAGhB,EAAA;;AAIF;EACC,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,QAAQ;EACR,OAAO;EACP,WAAW;EACX,cAAc;EACd,+CAA+C;EAAG,2DAA2D;EAC1G,uCAAuC;EAAG,iEAAiE;EAC3G,0BAAW;EACX,8BAAwB;EAAQ,oCAAoC;EAEpE,sBAAgB;EAAO,gCAAgC;EAEvD,oBAAoB,EAWvB;EA3BD;IAmBK,mBAAmB;IACnB,gBAAgB,EAEhB;;AAOL;EACC,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa,EACb;;AAED;EACC,iBAAiB;EACjB,mBAAmB,EAcnB;EAhBD;IAIE,gBAAgB;IAChB,0BAAW,EACX;EAED;IARD;MAUE,eAAe;MACZ,cAAc,EAKlB;MAhBD;QAaG,gBAAgB,EAChB,EAAA;;AAIH;EAEC,kBAAkB,EAkBlB;EApBD;IAIK,kBAAkB;IAClB,WAAW,EACX;EAED;IARJ;MASK,kBAAkB;MAClB,gBAAgB;MAChB,iBAAiB;MACjB,kBAAkB;MAClB,gBAAgB,EAOpB;MApBD;QAeM,kBAAkB;QAClB,gBAAgB;QAChB,WAAW,EACX,EAAA;;AAIN;EAEC,WAAW;EACX,iBAAiB,EAgIjB;EAnID;IAKE,WAAW;IACX,kBAAkB;IAClB,mBAAmB,EACnB;EARF;IAUE,WAAW;IACX,cAAc;IACd,aAAa;IACV,YAAY;IAEZ,WAAW;IACX,mBAAmB;IACnB,wBAAwB;IACxB,gCAAgC,EAwDnC;IA1EF;MAqBM,YAAY;MACZ,mBAAmB;MACnB,eAAe;MACf,gBAAgB;MAChB,kBAAkB,EAClB;IA1BN;MA6BG,kBAAkB;MACf,mBAAmB,EA0CnB;MAxEN;QAgCO,YAAY;QACZ,aAAa;QACb,mBAAmB;QACnB,SAAS;QACT,kBAAkB;QAClB,gBAAgB;QAChB,0BAA0B;QAC1B,kCAAkC;QAClC,oBAAgB;QAChB,4BAAwB,EAWxB;QApDP;UA2CQ,sBAAgB;UAChB,8BAAwB,EACxB;QA7CR;UA+CQ,aAAa,EACb;QAhDR;UAkDQ,YAAY,EACZ;MAnDR;QAsDO,mBAAmB;QACnB,iBAAiB;QACjB,aAAa,EACb;MAzDP;QA4DO,mBAAmB;QACnB,OAAO;QACP,YAAY;QACZ,aAAa;QACb,uCAAuC;QACvC,+CAA+C;QAC/C,WAAW,EAKX;QAvEP;UAoEQ,YAAY;UACf,aAAa,EACV;EAtER;IA4EE,+BAAgB;IAChB,mBAAmB;IACnB,OAAO;IACP,QAAQ;IACR,gBAAgB;IAChB,uCAAuC;IACvC,+CAA+C,EA2C/C;IA7HF;MAoFG,WAAW,EACX;IArFH;MAuFG,WAAW,EACX;IAxFH;MA0FG,mBAAmB;MACnB,OAAO;MACP,QAAQ;MACR,YAAY;MACZ,aAAa;MACb,aAAa;MACb,+BAAgB;MAChB,WAAW;MACX,WAAW;MACX,wBAAwB;MACxB,gCAAgC;MAChC,iBAAiB,EAYjB;MAjHH;QAwGI,gBAAgB;QAChB,mBAAmB;QACnB,0BAA0B,EAC1B;MA3GJ;QA6GI,gBAAgB;QACb,aAAa,EAEhB;IAhHJ;MAmHG,mBAAmB;MAChB,OAAO;MACP,QAAQ;MACR,YAAY;MACZ,aAAa;MACb,oBAAgB;MAChB,4BAAwB;MACxB,WAAW;MACX,WAAW,EACd;EAEF;IA9HD;MA+HE,kBAAkB;MACf,cAAc,EAGlB,EAAA","file":"main.scss","sourcesContent":["$mobile      : 'only screen and (max-width : 767px)';\n\n\nhtml, body {\n\twidth:100%;\n\theight:100%;\n\n\tmargin:0;\n\tpadding:0;\n\n\t// overflow:hidden;\n\tposition: static;\n\tbackground: #fff;\n}\n\nbody{\n\theight: 100%;\n}\n\n*{\n\tbox-sizing: border-box;\n}\n\na{\n\ttext-decoration: none;\n\tcolor: rgba(0,0,0,.8);\n}\n\nhtml {\n\t-webkit-text-size-adjust: none;\n\t-moz-text-size-adjust: none;\n\ttext-size-adjust: none;\n}\n\nh1,h2,h3,h4,h5,text,p {\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-webkit-font-smoothing: antialiased;\n\tfont-family: Arial;\n}\n\n.selector-container{\n\tposition: absolute;\n    top: 0;\n    right: 0;\n    width: 200px;\n    height: 400px;\n    padding: 20px;\n    .item-container{\n    \tmargin-bottom: 10px;\n    }\n    .select{\n    \tpadding: 10px;\n    \tbackground: white;\n    \tcursor: pointer;\n    \tfont-size: 12px;\n\n    }\n\n    .timeline-toggler{\n    \tbackground: rgba(255,255,255,.6);\n    \tcolor: black;\n    \tborder: 2px solid rgba(220, 20, 100, .8);\n    \tfont-weight: 700;\n    \tposition: fixed;\n    \tleft: 20px;\n    \t\n\n    }\n}\n\n.mainLoader{\n\tposition: absolute;\n\tz-index: 10;\n\twidth: 200px;\n\theight: 200px;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-top: -100px;\n\tmargin-left: -100px;\n}\n\n.logo{\n\t-webkit-text-stroke: 1px rgba(255,255,255,.5);\n    color: rgba(0,0,0,0);\n    font-family: Arial;\n    font-weight: lighter;\n    position: fixed;\n    right: 14px;\n    top: 6px;\n    z-index: 20;\n    margin: 0;\n    font-size: 32px;\n    opacity: 1;\n    @media #{$mobile}{\n    \ttop: 10px;\n    }\n}\n\n.closeBtn{\n\tposition: fixed;\n\ttop: 52px;\n\tright: 40px;\n\t// display: none;\n\twidth: 50px;\n    height: 50px;\n    text-indent: -9999px;\n    padding: 0 4px;\n    z-index: 10;\n    cursor: pointer;\n\n   \n\t@media #{$mobile}{\n\t\tright: 10px;\n\t\twidth: 30px;\n    \theight: 30px;\n\t}\n}\n\n.container{\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth:100%;\n\theight:100%;\n\topacity: 0;\n\n}\n\n.Main-Canvas {\n\twidth:100%;\n\theight:100%;\n\ttop:0px;\n\tleft:0px;\n\tposition: absolute;\n\tz-index: 0;\n}\n\n.imageContainer{\n\tposition: absolute;\n\tz-index: 2;\n\twidth: 100%;\n\theight: 100%;\n\t> img{\n\t\theight: 100%;\n\t\tmargin: 0 auto;\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 50%;\n\t\ttransform: scale(0);\n\t\t-webkit-transform: scale(0);\n\t\topacity: 0;\n\n\t}\n}\n\n\n\n.nav{\n\tposition: fixed;\n    top: 0px;\n    left: 0px;\n    font-family: \"Arial\";\n    padding: 10px;\n    z-index: 5;\n    color: rgba(0,0,0,.8);\n    z-index: 10;\n    opacity: 1;\n\n\t.nav-item{\n\t\tcursor: pointer;\n\t\tpadding: 10px;\n\t\tfont-size: 10px;\n\t\tposition: relative;\n\t\tleft: 0;\n\t\ttransition: transform .5s;\n\t\t-webkit-transition: transform .5s;\n\t\t&:hover{\n\t\t\tbackground: white;\n\t\t}\n\n\t\t@media #{$mobile}{\n\t\t\tdisplay: block;\n\t\t\tpadding: 4px;\n\t\t\tmargin-bottom: 10px;\n\t\t\ttransform: translate(-200px, 0);\n\t\t\tbackground: white;\n\t\t\t&:hover{\n\t\t\t\tbackground: transparent;\n\t\t\t}\n\t\t}\n\t}\n\n\t.menuBurger{\n\t\tdisplay: none;\n\t\twidth: 39px;\n\t    height: 35px;\n\t    text-indent: -9999px;\n\t    padding: 0 4px;\n\t    margin-top: 0;\n\t    margin-bottom: 10px;\n\n\t\t@media #{$mobile}{\n\t\t\tdisplay: block;\n\t\t}\n\n\t}\n\n}\n\n.overlay{\n\tposition: absolute;\n\tz-index: 1;\n\twidth: 100%;\n\theight: 100%;\n\tleft: 0;\n\ttop: 0;\n\topacity: 0;\n\tdisplay: none;\n\t-webkit-transition: opacity .6s, transform .6s;  /* Android 2.1+, Chrome 1-25, iOS 3.2-6.1, Safari 3.2-6  */\n    transition: opacity .6s, transform .6s;  /* Chrome 26, Firefox 16+, iOS 7+, IE 10+, Opera, Safari 6.1+  */\n    color: rgba(0,0,0,.8);\n    -webkit-transform: scale(0.8);  /* Chrome, Opera 15+, Safari 3.1+ */\n    //   -ms-transform: scale(0.8);  /* IE 9 */\n    transform: scale(.8);  /* Firefox 16+, IE 10+, Opera */\n    // background: rgba(0,0,0,.3);\n    padding: 40px 100px;\n    // background: rgba(255,255,255,.6);\n    .overlayTitle{\n    \ttext-align: center;\n    \tfont-size: 32px;\n\n    }\n    \n\n\n\t\n}\n\n.touchLayer{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.contact{\n\tpadding-top: 20%;\n\ttext-align: center;\n\t> h1{\n\t\tfont-size: 60px;\n\t\tcolor: rgba(0,0,0,.8);\n\t}\n\n\t@media #{$mobile}{\n\t\t// padding-top: 40px;\n\t\tpadding: 40% 0;\n    \tmargin-top: 0;\n\t\t> h1 {\n\t\t\tfont-size: 20px;\n\t\t}\n\t}\n}\n\n.about{\n\t// background: rgba(250, 40, 40, .7);\n\tmargin-top: 100px;\n\t.overlayDescr{\n    \tline-height: 22px;\n    \twidth: 50%;\n    }\n\n    @media #{$mobile}{\n    \tpadding: 0px 10px;\n\t    font-size: 10px;\n\t    line-height: 0px;\n\t    padding-top: 40px;\n    \tmargin-top: 16%;\n    \t.overlayDescr{\n    \t\tline-height: 18px;\n    \t\tfont-size: 14px;\n    \t\twidth: 90%;\n    \t}\n    }\n}\n\n.projects{\n\t// background: rgba(250, 40, 240, .7);\n\tpadding: 0;\n\tmargin-top: 80px;\n\t.projectsContainer{\n\t\twidth: 80%;\n\t\tmargin: 20px auto;\n\t\tposition: relative;\n\t}\n\t.projectDetailWrapper{\n\t\topacity: 0;\n\t\tdisplay: none;\n\t\theight: 100%;\n\t    width: 100%;\n\t    // background: rgba(0,0,0,.1);\n\t    z-index: 8;\n\t    position: relative;\n\t    transition: opacity .5s;\n\t    -webkit-transition: opacity .5s;\n\t    \n\t    .projectDescr{\n\t    \twidth: 100%;\n\t\t    text-align: center;\n\t\t    padding: 0 10%;\n\t\t    font-size: 12px;\n    \t\tline-height: 20px;\n\t    }\n\t    .projectSlider{\n\t   \t\t\n\t\t\tmargin: 20px auto;\n   \t\t\tposition: relative;\n\t\t    .sliderNav{\n\t\t    \twidth: 20px;\n\t\t    \theight: 20px;\n\t\t    \tposition: absolute;\n\t\t    \ttop: 50%;\n\t\t    \tmargin-top: -10px;\n\t\t    \tcursor: pointer;\n\t\t    \ttransition: transform .2s;\n\t\t    \t-webkit-transition: transform .2s;\n\t\t    \ttransform: scale(1.0);\n\t\t    \t-webkit-transform: scale(1.0);\n\t\t    \t&:hover{\n\t\t    \t\ttransform: scale(1.2);\n\t\t    \t\t-webkit-transform: scale(1.2);\n\t\t    \t}\n\t\t    \t&.sliderNext{\n\t\t    \t\tright: -30px;\n\t\t    \t}\n\t\t    \t&.sliderPrev{\n\t\t    \t\tleft: -30px;\n\t\t    \t}\n\t\t    }\n\t\t    .sliderContainer{\n\t\t    \tposition: absolute;\n\t\t    \toverflow: hidden;\n\t\t    \theight: 100%;\n\t\t    }\n\t\t    \n\t    \t.sliderItem{\n\t    \t\tposition: absolute;\n\t    \t\ttop: 0;\n\t    \t\twidth: 100%;\n\t    \t\theight: 100%;\n\t    \t\ttransition: transform .5s, opacity .5s;\n\t    \t\t-webkit-transition: transform .5s, opacity .5s;\n\t    \t\tz-index: 2;\n\t    \t\t> img{\n\t    \t\t\twidth: 100%;\n\t\t\t\t\theight: auto;\n\t    \t\t}\n\t\t    }\n\t    }\n\n\t}\n\t.projectItem{\n\t\tbackground: rgba(0,0,0,.2);\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tcursor: pointer;\n\t\ttransition: opacity .4s, transform .3s;\n\t\t-webkit-transition: opacity .4s, transform .3s;\n\t\t> .touchLayer{\n\t\t\tz-index: 2;\n\t\t}\n\t\t.projectItemLoader{\n\t\t\tz-index: 3;\n\t\t}\n\t\t.itemCaption{\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tcolor: white;\n\t\t\tbackground: rgba(0,0,0,.6);\n\t\t\tz-index: 1;\n\t\t\topacity: 0;\n\t\t\ttransition: opacity .4s;\n\t\t\t-webkit-transition: opacity .4s;\n\t\t\tpadding-top: 22%;\n\n\t\t\t> h5{\n\t\t\t\tfont-size: 20px;\n\t\t\t\ttext-align: center;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\t\t\t.projectOpenBtn{\n\t\t\t\tfont-size: 16px;\n    \t\t\tcolor: white;\n    \t\t\t\n\t\t\t}\n\t\t}\n\t\t> img{\n\t\t\tposition: absolute;\n\t\t    top: 0;\n\t\t    left: 0;\n\t\t    width: 100%;\n\t\t    height: 100%;\n\t\t    transform: scale(1);\n\t\t    -webkit-transform: scale(1);\n\t\t    opacity: 1;\n\t\t    z-index: 0;\n\t\t}\n\t}\n\t@media #{$mobile}{\n\t\tpadding-top: 40px;\n    \tmargin-top: 0;\n\t}\n\n}\n\n\n\n\n"],"sourceRoot":"webpack://"}]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _SceneClouds = __webpack_require__(6);

	var _SceneClouds2 = _interopRequireDefault(_SceneClouds);

	var _SceneCloudsMesh = __webpack_require__(9);

	var _SceneCloudsMesh2 = _interopRequireDefault(_SceneCloudsMesh);

	var _SceneImport = __webpack_require__(11);

	var _SceneImport2 = _interopRequireDefault(_SceneImport);

	var _SceneCloudsOverlay = __webpack_require__(14);

	var _SceneCloudsOverlay2 = _interopRequireDefault(_SceneCloudsOverlay);

	var _timeline = __webpack_require__(16);

	var _timeline2 = _interopRequireDefault(_timeline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SceneMain = function () {
		function SceneMain(container, sceneSelector) {
			_classCallCheck(this, SceneMain);

			this.increase = Math.PI * 2 / 500;
			this.counter = 0;

			this.mouseX = 0;
			this.mouseY = 0;

			this.normalRotation = 0;
			this.reverseRotation = 0;

			this.sceneSelector = sceneSelector;

			this.introDuration = 250;
			this.introStartTime = Date.now();

			this.cubeCameraUpdateInterval = 1000;
			this.cubeCameraLastUpdate = Date.now();

			this.currentSceneSettings = { renderOverlay: false, cameraSpeed: {} };

			this.FBO = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, {
				minFilter: THREE.LinearFilter,
				magFilter: THREE.NearestFilter,
				format: THREE.RGBFormat
			});

			this.FBOStill = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, {
				minFilter: THREE.LinearFilter,
				magFilter: THREE.NearestFilter,
				format: THREE.RGBFormat
			});

			this.FBOReverse = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, {
				minFilter: THREE.LinearFilter,
				magFilter: THREE.NearestFilter,
				format: THREE.RGBFormat
			});

			this.FBOGirl = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, {
				minFilter: THREE.LinearFilter,
				magFilter: THREE.NearestFilter,
				format: THREE.RGBFormat
			});

			this.FBOBg = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, {
				minFilter: THREE.LinearFilter,
				magFilter: THREE.NearestFilter,
				format: THREE.RGBFormat
			});

			var sceneVals = this.getCurrentActiveSceneVals();

			this.sceneCloudsMesh = new _SceneCloudsMesh2.default(sceneVals.grid, this.sceneSelector.initObj, this.FBO, this.FBOStill, this.FBOReverse, this.FBOGirl);
			this.sceneClouds = new _SceneClouds2.default(this.enableRender, this);
			this.sceneImport = new _SceneImport2.default(this.FBO);
			this.sceneCloudsOverlay = new _SceneCloudsOverlay2.default(sceneVals.overlay, this.sceneSelector.initObj, this.FBO, this.FBOStill, this.FBOReverse, this.FBOGirl, this.FBOBg);

			this.start_time = Date.now();

			this.windowHalfX;
			this.windowHalfY;

			this.container = container;

			this.doRender = false;

			this.container.style.opacity = 1;

			this.createBgCanvas();

			this.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 3000);
			this.camera.position.z = this.sceneClouds.totDepth;
			this.camera.position.y = -40;

			this.reverseCamera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 3000);
			this.reverseCamera.position.z = 0;
			this.reverseCamera.position.y = -40;

			this.importCamera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 3000);
			this.importCamera.position.z = 10;
			this.importCamera.position.y = 14;

			this.orthoCamera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -10000, 10000);

			this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
			this.renderer.setSize(window.innerWidth, window.innerHeight);
			this.renderer.autoClear = false;
			// this.renderer.setClearColorHex( 0x000000, 1 );
			// this.renderer.setClearColor( '#e206db' );
			this.renderer.setClearColor('#d370d0');
			this.container.appendChild(this.renderer.domElement);

			this.currentTime = Date.now();
		}

		_createClass(SceneMain, [{
			key: 'createBgCanvas',
			value: function createBgCanvas() {

				var canvas = document.createElement('canvas');
				canvas.width = 32;
				canvas.height = window.innerHeight;

				var context = canvas.getContext('2d');

				var gradient = context.createLinearGradient(0, 0, 0, canvas.height);
				gradient.addColorStop(0, "#1e4877");
				gradient.addColorStop(0.5, "#4584b4");

				context.fillStyle = gradient;
				context.fillRect(0, 0, canvas.width, canvas.height);

				this.container.style.background = 'url(' + canvas.toDataURL('image/png') + ')';
				this.container.style.backgroundSize = '32px 100%';
			}
		}, {
			key: 'enableRender',
			value: function enableRender() {

				this.doRender = true;
			}
		}, {
			key: 'getSceneFromTimeline',
			value: function getSceneFromTimeline() {

				if (!this.start_time) {
					return _timeline2.default.init.scene;
				}

				var now = Date.now();
				var startDelta = (now - this.start_time) / 1000;

				for (var i = 0; i < _timeline2.default.schedules.length; i++) {
					if (startDelta <= _timeline2.default.schedules[i].time) {
						return _timeline2.default.schedules[i].scene;
					}
				}

				return _timeline2.default.schedules[_timeline2.default.schedules.length - 1].scene;
			}
		}, {
			key: 'getCurrentActiveSceneVals',
			value: function getCurrentActiveSceneVals() {
				var _this = this;

				var ret = { overlay: {}, grid: {} };

				// if (Timeline.active) {
				var scene = this.getSceneFromTimeline();

				var sceneItem = this.sceneSelector.items[scene];

				// console.log(sceneItem);


				// } else {
				if (!sceneItem || !this.sceneSelector.playTimeline) {
					sceneItem = this.sceneSelector.currentItem;
				}

				// }


				var currentX = 0;
				var currentY = 0;
				this.currentSceneSettings.renderOverlay = false;
				Object.keys(sceneItem).forEach(function (t) {

					if (t.indexOf('box') > -1 && t !== 'boxOverlay') {
						var vals = {};
						vals.x = currentX;
						vals.y = currentY;
						vals.w = sceneItem[t].width;
						vals.h = sceneItem[t].height;
						vals.texture = sceneItem[t].texture;
						vals.scale = sceneItem[t].scale;
						vals.translateX = sceneItem[t].translateX;
						vals.translateY = sceneItem[t].translateY;
						vals.rotation = sceneItem[t].textureRotation;
						if (sceneItem[t].hasOwnProperty('specialTextureCoeff')) {
							vals.textureCoeff = sceneItem[t].specialTextureCoeff;
						}

						currentX += vals.w;
						if (currentX >= 0.99) {

							currentX = 0;
							currentY += sceneItem[t].height;
						}

						ret.grid[t] = vals;
					}

					if (t === 'boxOverlay') {
						_this.currentSceneSettings.renderOverlay = true;
						var _vals = {};
						_vals.x = sceneItem[t].x;
						_vals.y = sceneItem[t].y;
						_vals.w = sceneItem[t].width;
						_vals.h = sceneItem[t].height;
						_vals.texture = sceneItem[t].texture;
						_vals.scale = sceneItem[t].scale;
						_vals.translateX = sceneItem[t].translateX;
						_vals.translateY = sceneItem[t].translateY;
						_vals.rotation = sceneItem[t].textureRotation;
						if (sceneItem[t].hasOwnProperty('specialTextureCoeff')) {
							_vals.textureCoeff = sceneItem[t].specialTextureCoeff;
						}

						ret.overlay[t] = _vals;
					}

					if (t === 'cameraSpeed') {
						_this.currentSceneSettings.cameraSpeed = sceneItem[t];
					}
					if (t === 'cameraRotation') {
						_this.currentSceneSettings.cameraRotation = sceneItem[t];
					}
				});

				return ret;
			}
		}, {
			key: 'loop',
			value: function loop() {

				this.update();
				this.render();
			}
		}, {
			key: 'update',
			value: function update() {

				var now = Date.now();
				var introDelta = now - this.introStartTime;
				var introRemain = Math.abs(introDelta / this.introDuration - 1);
				if (introDelta > this.introDuration) {
					introRemain = 0;
				}

				var sceneVals = this.getCurrentActiveSceneVals();

				this.sceneCloudsMesh.update(sceneVals.grid, introRemain);
				if (this.currentSceneSettings.renderOverlay) {
					this.sceneCloudsOverlay.update(sceneVals.overlay);
				}

				// var position = ( ( Date.now() - this.start_time ) * 0.03 ) % this.sceneClouds.totDepth;
				var position = 1000;

				var updateCubeDelta = now - this.cubeCameraLastUpdate;
				if (updateCubeDelta > 1000) {
					this.sceneImport.update(this.renderer, this.sceneClouds.scene, -position + this.sceneClouds.totDepth, true);
					this.cubeCameraLastUpdate = now;
				} else {
					this.sceneImport.update(this.renderer, this.sceneClouds.scene, -position + this.sceneClouds.totDepth, false);

					// this.sceneClouds.update(this.renderer, -position + this.sceneClouds.totDepth);
				}
			}
		}, {
			key: 'render',
			value: function render() {

				if (!this.doRender) return;

				var now = Date.now();

				var position = (now - this.start_time) * this.currentSceneSettings.cameraSpeed.cloudNormal % this.sceneClouds.totDepth;

				this.camera.position.z = -position + this.sceneClouds.totDepth;
				if (this.currentSceneSettings.cameraRotation.cloudNormal.rotation) {
					this.camera.rotation[this.currentSceneSettings.cameraRotation.cloudNormal.axis] = this.normalRotation += this.currentSceneSettings.cameraRotation.cloudNormal.speed;
				}

				var reversePos = (now - this.start_time) * this.currentSceneSettings.cameraSpeed.cloudReverse % this.sceneClouds.totDepth;

				var reversePos = reversePos;
				if (reversePos > this.sceneClouds.totDepth) {
					reversePos = 0;
				}
				this.reverseCamera.position.z = reversePos;
				if (this.currentSceneSettings.cameraRotation.cloudReverse.rotation) {
					this.camera.rotation[this.currentSceneSettings.cameraRotation.cloudReverse.axis] = this.reverseRotation += this.currentSceneSettings.cameraRotation.cloudReverse.speed;
				}

				if (!this.sceneImport.render) return;

				// this.sceneClouds.renderTexture(this.renderer, this.camera, this.FBO);


				this.renderer.clear();
				// this.renderer.render( this.sceneImport.scene, this.importCamera );
				this.renderer.render(this.sceneClouds.scene, this.camera, this.FBO, true);
				this.renderer.render(this.sceneClouds.scene, this.reverseCamera, this.FBOReverse, true);
				// this.renderer.render( this.sceneCloudsMesh.scene, this.orthoCamera );
				// this.renderer.clear();
				// this.renderer.render( this.sceneClouds.scene, this.camera );
				// this.renderer.clearDepth();
				this.renderer.render(this.sceneImport.scene, this.importCamera, this.FBOGirl, true);

				if (!this.currentSceneSettings.renderOverlay) {
					this.renderer.render(this.sceneCloudsMesh.scene, this.orthoCamera);
				} else {
					this.renderer.render(this.sceneCloudsMesh.scene, this.orthoCamera, this.FBOBg, true);
					this.renderer.render(this.sceneCloudsOverlay.scene, this.orthoCamera);
				}
			}
		}, {
			key: 'onResize',
			value: function onResize(w, h) {

				this.windowHalfX = w / 2;
				this.windowHalfY = h / 2;

				this.camera.aspect = w / h;
				this.camera.updateProjectionMatrix();

				this.renderer.setSize(w, h);
			}
		}]);

		return SceneMain;
	}();

	exports.default = SceneMain;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SceneClouds = function () {
		function SceneClouds(enableRenderCallback, callbackScope) {
			_classCallCheck(this, SceneClouds);

			this.nrClouds = 1000;
			this.totDepth = 2000;

			this.scene = new THREE.Scene();

			this.render = false;

			this.rotation = 0;

			this.geometry = new THREE.Geometry();

			// var jsonLoader = new THREE.JSONLoader();
			//       jsonLoader.load( "assets/imports/test.js", this.onLoaded.bind(this) );

			this.texture = THREE.ImageUtils.loadTexture('assets/cloud10.png', null, function () {
				return enableRenderCallback.call(callbackScope);
			});
			this.texture.magFilter = THREE.LinearFilter;
			this.texture.minFilter = THREE.LinearMipMapLinearFilter;

			var fog = new THREE.Fog('#e206db', 0, 600);

			this.material = new THREE.ShaderMaterial({

				uniforms: {

					"map": { type: "t", value: this.texture },
					"fogColor": { type: "c", value: fog.color },
					"fogNear": { type: "f", value: fog.near },
					"fogFar": { type: "f", value: fog.far }

				},
				vertexShader: __webpack_require__(7),
				fragmentShader: __webpack_require__(8),
				depthWrite: false,
				depthTest: true,
				transparent: true

			});

			for (var i = 0; i < this.nrClouds; i++) {

				var plane = new THREE.Mesh(new THREE.PlaneGeometry(64, 64), this.material);

				plane.position.x = Math.random() * 2000 - 100;
				plane.position.y = -Math.random() * Math.random() * 200 - 15;
				plane.position.z = Math.random() * this.totDepth;
				plane.rotation.z = Math.random() * Math.PI;
				plane.scale.x = plane.scale.y = Math.random() * Math.random() * 2.5 + 1;

				// THREE.GeometryUtils.merge( this.geometry, plane );

				var mesh = new THREE.Mesh(plane, this.material);
				this.scene.add(plane);

				// this.clouds.push(plane);
			}
		}

		_createClass(SceneClouds, [{
			key: 'onLoaded',
			value: function onLoaded(geometry, materials) {

				this.cubeCamera = new THREE.CubeCamera(1, 10000, 128);
				// console.log(this.cubeCamera.renderTarget.texture);
				// this.cubeCamera.renderTarget.texture.minFilter = THREE.LinearMipMapLinearFilter;
				// this.cubeCamera.renderTarget.texture.magFilter = THREE.LinearMipMapLinearFilter;
				this.scene.add(this.cubeCamera);

				var light = new THREE.AmbientLight(0xFFFFFF, 1.0); // soft white light
				this.scene.add(light);

				var material = new THREE.MeshLambertMaterial({ color: 0xffffff, envMap: this.cubeCamera.renderTarget.texture });

				// var material = new THREE.ShaderMaterial({
				// 	vertexShader: require("../../shaders/import.vert"),
				// 	fragmentShader: require("../../shaders/import.frag")
				// });


				this.mesh = new THREE.Mesh(geometry, material);

				this.mesh.position.z = this.totDepth - 10;
				this.mesh.position.y = -50;
				// this.mesh.scale.x = 2;
				// this.mesh.scale.y = 2;
				// this.mesh.scale.z = 2;

				this.scene.add(this.mesh);

				// var plane = new THREE.Mesh( new THREE.PlaneGeometry( 200, 200, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0xffff00, opacity: 0.25 } ) );
				// plane.visible = true;
				// plane.position.z = this.totDepth - 500;
				// this.scene.add( plane );

				this.render = true;
			}
		}, {
			key: 'update',
			value: function update(renderer, pos) {

				if (!this.render) return;

				this.rotation += .5;
				this.mesh.rotation.y = (this.rotation + .02) * Math.PI / 180;
				this.mesh.rotation.x = this.rotation / 10 * Math.PI / 180;
				// this.mesh.rotation.z = this.rotation+Math.random() * Math.PI / 180;

				this.mesh.visible = false;
				this.mesh.position.z = pos - 50;
				this.cubeCamera.position.copy({ x: 0, y: -40, z: pos });
				this.cubeCamera.updateCubeMap(renderer, this.scene);

				this.mesh.visible = true;
			}
		}, {
			key: 'renderTexture',
			value: function renderTexture(renderer, camera, FBO) {

				this.mesh.visible = false;

				renderer.render(this.scene, camera, FBO, true);

				this.mesh.visible = true;
			}
		}]);

		return SceneClouds;
	}();

	exports.default = SceneClouds;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec2 flippedUv;\nvarying vec2 flippedX;\nvarying vec2 flippedY;\nuniform float xFlip;\nuniform float yFlip;\n\n\nvoid main() {\n\n\tvec2 testUv = uv;\n\ttestUv = testUv - vec2(.5, .5);\n\tfloat rot = 4.71239;\n\tmat2 m = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));\n   \ttestUv = m * uv;\n    \n    testUv = testUv + vec2(.5, .5);\n\tvUv = uv;\n\tflippedUv = testUv;\n\tflippedX = vec2(1.0 - vUv.x, vUv.y);\n\tflippedY = vec2(vUv.x, 1.0 - vUv.y);\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform sampler2D map;\n\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\tvec4 textureColor = texture2D( map, vUv );\n\ttextureColor.w *= pow( gl_FragCoord.z, 60.0 );\n\t\n\tvec4 color = mix( textureColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n\n\t\n\tgl_FragColor = color;\n\n}\n\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SceneCloudsMesh = function () {
		function SceneCloudsMesh(sceneVals, sceneInitObj, FBO, FBOStill, FBOReverse, FBOGirl) {
			_classCallCheck(this, SceneCloudsMesh);

			this.scene = new THREE.Scene();

			this.currentStillTexture = FBO.texture;

			this.mixVal = 1.0;

			var boxUniforms = this.getInitShaderUniforms(sceneVals, sceneInitObj);
			// const boxUniforms = this.getShaderUniforms(sceneVals);


			var textureUniforms = {};
			textureUniforms.uTexture = { value: FBO.texture };
			textureUniforms.uTextureReverse = { value: FBOReverse.texture };
			textureUniforms.uTextureGirl = { value: FBOGirl.texture };

			var resUniforms = {};
			resUniforms.resX = { value: window.innerWidth };
			resUniforms.resY = { value: window.innerHeight };

			var introUniforms = {};
			introUniforms.introVal = { value: 1.0 };

			var randomUniforms = {};
			randomUniforms.randomVal = { value: Math.sin(Date.now()) };

			var uniformsObj = Object.assign({}, boxUniforms, textureUniforms, resUniforms, introUniforms, randomUniforms);

			var material = new THREE.ShaderMaterial({
				uniforms: uniformsObj,
				vertexShader: __webpack_require__(7),
				fragmentShader: __webpack_require__(10)
			});

			var plane = new THREE.PlaneBufferGeometry(window.innerWidth, window.innerHeight);

			this.quad = new THREE.Mesh(plane, material);
			this.quad.position.z = 0;
			this.scene.add(this.quad);

			this.threshold = 100;
			this.currentTime = Date.now();
		}

		_createClass(SceneCloudsMesh, [{
			key: "getInitShaderUniforms",
			value: function getInitShaderUniforms(sceneVals, sceneInit) {

				var initUniforms = {};
				Object.keys(sceneInit).forEach(function (t) {

					var strX = t + 'X';
					initUniforms[strX] = { value: 0 };

					var strY = t + 'Y';
					initUniforms[strY] = { value: 0 };

					var strW = t + 'W';
					initUniforms[strW] = { value: 0 };

					var strH = t + 'H';
					initUniforms[strH] = { value: 0 };

					var strTexture = t + 'Texture';
					initUniforms[strTexture] = { value: -1 };

					var strScale = t + 'Scale';
					initUniforms[strScale] = { value: 0 };

					var strTranslateX = t + 'TranslateX';
					initUniforms[strTranslateX] = { value: 0 };

					var strTranslateY = t + 'TranslateY';
					initUniforms[strTranslateY] = { value: 0 };

					var strRotation = t + 'RotDegree';
					initUniforms[strRotation] = { value: 0 };

					var textureCoeffStr = t + 'Coeff';
					initUniforms[textureCoeffStr] = { value: 0 };
				});

				var uniforms = {};
				Object.keys(sceneVals).forEach(function (t) {

					var strX = t + 'X';
					uniforms[strX] = { value: sceneVals[t].x };

					var strY = t + 'Y';
					uniforms[strY] = { value: sceneVals[t].y };

					var strW = t + 'W';
					uniforms[strW] = { value: sceneVals[t].w };

					var strH = t + 'H';
					uniforms[strH] = { value: sceneVals[t].h };

					var strTexture = t + 'Texture';
					uniforms[strTexture] = { value: sceneVals[t].texture };

					var strScale = t + 'Scale';
					uniforms[strScale] = { value: sceneVals[t].scale };

					var strTranslateX = t + 'TranslateX';
					uniforms[strTranslateX] = { value: sceneVals[t].translateX };

					var strTranslateY = t + 'TranslateY';
					uniforms[strTranslateY] = { value: sceneVals[t].translateY };

					var strRotation = t + 'RotDegree';
					uniforms[strRotation] = { value: sceneVals[t].rotation };

					if (sceneVals[t].hasOwnProperty('textureCoeff')) {
						var textureCoeffStr = t + 'Coeff';
						uniforms[textureCoeffStr] = { value: sceneVals[t].textureCoeff };
					}
				});

				return Object.assign({}, initUniforms, uniforms);
			}
		}, {
			key: "getShaderUniforms",
			value: function getShaderUniforms(sceneVals) {

				var uniforms = {};
				Object.keys(sceneVals).forEach(function (t) {

					var strX = t + 'X';
					uniforms[strX] = { value: sceneVals[t].x };

					var strY = t + 'Y';
					uniforms[strY] = { value: sceneVals[t].y };

					var strW = t + 'W';
					uniforms[strW] = { value: sceneVals[t].w };

					var strH = t + 'H';
					uniforms[strH] = { value: sceneVals[t].h };

					var strTexture = t + 'Texture';
					uniforms[strTexture] = { value: sceneVals[t].texture };

					var strScale = t + 'Scale';
					uniforms[strScale] = { value: sceneVals[t].scale };

					var strTranslateX = t + 'TranslateX';
					uniforms[strTranslateX] = { value: sceneVals[t].translateX };

					var strTranslateY = t + 'TranslateY';
					uniforms[strTranslateY] = { value: sceneVals[t].translateY };

					var strRotation = t + 'RotDegree';
					uniforms[strRotation] = { value: sceneVals[t].rotation };

					if (sceneVals[t].hasOwnProperty('textureCoeff')) {
						var textureCoeffStr = t + 'Coeff';
						uniforms[textureCoeffStr] = { value: sceneVals[t].textureCoeff };
					}
				});

				return uniforms;
			}
		}, {
			key: "update",
			value: function update(sceneVals, introVal) {
				var _this = this;

				// const now = Date.now();
				// const delta = now - this.currentTime;

				var boxUniforms = this.getShaderUniforms(sceneVals);

				Object.keys(boxUniforms).forEach(function (t) {

					_this.quad.material.uniforms[t].value = boxUniforms[t].value;
				});

				this.quad.material.uniforms.introVal.value = introVal;
				this.quad.material.uniforms.randomVal.value = { value: Math.sin(Date.now()) };
			}
		}]);

		return SceneCloudsMesh;
	}();

	exports.default = SceneCloudsMesh;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec2 flippedUv;\nvarying vec2 flippedX;\nvarying vec2 flippedY;\nuniform sampler2D uTexture;\nuniform sampler2D uTextureReverse;\nuniform sampler2D uTextureGirl;\nuniform float resX;\nuniform float resY;\nuniform float introVal;\nuniform float randomVal;\n\nuniform float boxOneX;\nuniform float boxOneY;\nuniform float boxOneW;\nuniform float boxOneH;\nuniform float boxOneTexture;\nuniform float boxOneScale;\nuniform float boxOneTranslateX;\nuniform float boxOneTranslateY;\nuniform float boxOneRotDegree;\nuniform float boxOneCoeff;\n\nuniform float boxTwoX;\nuniform float boxTwoY;\nuniform float boxTwoW;\nuniform float boxTwoH;\nuniform float boxTwoTexture;\nuniform float boxTwoScale;\nuniform float boxTwoTranslateX;\nuniform float boxTwoTranslateY;\nuniform float boxTwoRotDegree;\nuniform float boxTwoCoeff;\n\nuniform float boxThreeX;\nuniform float boxThreeY;\nuniform float boxThreeW;\nuniform float boxThreeH;\nuniform float boxThreeTexture;\nuniform float boxThreeScale;\nuniform float boxThreeTranslateX;\nuniform float boxThreeTranslateY;\nuniform float boxThreeRotDegree;\nuniform float boxThreeCoeff;\n\nuniform float boxFourX;\nuniform float boxFourY;\nuniform float boxFourW;\nuniform float boxFourH;\nuniform float boxFourTexture;\nuniform float boxFourScale;\nuniform float boxFourTranslateX;\nuniform float boxFourTranslateY;\nuniform float boxFourRotDegree;\nuniform float boxFourCoeff;\n\nuniform float boxFiveX;\nuniform float boxFiveY;\nuniform float boxFiveW;\nuniform float boxFiveH;\nuniform float boxFiveTexture;\nuniform float boxFiveScale;\nuniform float boxFiveTranslateX;\nuniform float boxFiveTranslateY;\nuniform float boxFiveRotDegree;\nuniform float boxFiveCoeff;\n\nuniform float boxSixX;\nuniform float boxSixY;\nuniform float boxSixW;\nuniform float boxSixH;\nuniform float boxSixTexture;\nuniform float boxSixScale;\nuniform float boxSixTranslateX;\nuniform float boxSixTranslateY;\nuniform float boxSixRotDegree;\nuniform float boxSixCoeff;\n\nfloat degreeToRadian(float degree){\n\treturn degree * (3.14159265359 / 180.0);\n}\n\nvoid main() {\n\n\tvec4 finalColor;\n\tvec4 textureColor = texture2D( uTexture, vUv );\n\tvec4 textureReverseColor = texture2D( uTextureReverse, vUv );\n\tvec4 textureGirlColor = texture2D( uTextureGirl, vUv );\n\n\tvec2 iRes = vec2(resX, resY);\n\n\tvec2 uv = gl_FragCoord.xy / iRes.xy;\n\n\tvec2 ratio = vec2((iRes.x/2.0) / iRes.x, (iRes.y/2.0) / iRes.y);\n\n\tvec4 purple = vec4(242.0/255.0, 29.0/255.0, 199.0/255.0, 1.0) * vec4(.67);\n\t\n\tif ((vUv.x >= boxOneX && vUv.x <= (boxOneX + boxOneW)) && (vUv.y >= boxOneY && vUv.y <= (boxOneY + boxOneH))){\n\n\t\tuv.x += boxOneTranslateX;\n\t\tuv.y += boxOneTranslateY;\n\t    \n\t\tfloat rot = boxOneRotDegree * (3.14159265359 / 180.0);\n\n\t\tuv = uv - vec2(.5, .5);\n\n\t\tmat2 m = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));\n\t\tuv  = m * uv;\n\n\t\tuv = uv + vec2(.5, .5);\n\n\t\tif (boxOneTexture == 0.0) {\n\t\t\tvec4 cloudColor = texture2D(uTexture, uv);\n\t\t\tvec4 fuckedColor = (purple - (cloudColor - vec4(boxOneCoeff))) * vec4(40.0);\n\t\t\tfinalColor = mix(cloudColor, fuckedColor, boxOneScale);\n\t\t\t// finalColor = texture2D(uTexture, uv);\n\t\t} else if (boxOneTexture == 0.5) {\n\t\t\tvec4 cloudColor = texture2D(uTextureReverse, uv);\n\t\t\tvec4 fuckedColor = (purple - (cloudColor - vec4(boxOneCoeff))) * vec4(40.0);\n\t\t\tfinalColor = mix(cloudColor, fuckedColor, boxOneScale);\n\n\t\t} else if (boxOneTexture == 1.0) {\n\t\t\tfinalColor = texture2D(uTextureGirl, uv);\n\t\t\t\n\t\t} else if (boxOneTexture == 1.5) {\n\t\t\tvec4 girlColor = texture2D(uTextureGirl, uv);\n\t\t\tvec4 cloudColor = texture2D(uTexture, uv);\n\t\t\tfinalColor = (girlColor - (cloudColor - vec4(boxOneCoeff))) * vec4(40.0);\n\t\t}\n\t} \n\telse if ((vUv.x >= boxTwoX && vUv.x <= (boxTwoX + boxTwoW)) && (vUv.y >= boxTwoY && vUv.y <= (boxTwoY + boxTwoH))){\n\n\t\tuv.x += boxTwoTranslateX;\n\t\tuv.y += boxTwoTranslateY;\n\t    \n\t\tfloat rot = boxTwoRotDegree * (3.14159265359 / 180.0);\n\n\t\tuv = uv - vec2(.5, .5);\n\n\t\tmat2 m = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));\n\t\tuv  = m * uv;\n\n\t\tuv = uv + vec2(.5, .5);\n\n\t\tif (boxTwoTexture == 0.0) {\n\t\t\tvec4 cloudColor = texture2D(uTexture, uv);\n\t\t\tvec4 fuckedColor = (purple - (cloudColor - vec4(boxTwoCoeff))) * vec4(40.0);\n\t\t\tfinalColor = mix(cloudColor, fuckedColor, boxTwoScale);\n\t\t\t// finalColor = texture2D(uTexture, uv);\n\t\t} else if (boxTwoTexture == 0.5) {\n\t\t\tvec4 cloudColor = texture2D(uTextureReverse, uv);\n\t\t\tvec4 fuckedColor = (purple - (cloudColor - vec4(boxTwoCoeff))) * vec4(40.0);\n\t\t\tfinalColor = mix(cloudColor, fuckedColor, boxTwoScale);\n\n\t\t} else if (boxTwoTexture == 1.0) {\n\t\t\tfinalColor = texture2D(uTextureGirl, uv);\n\t\t\t\n\t\t} else if (boxTwoTexture == 1.5) {\n\t\t\tvec4 girlColor = texture2D(uTextureGirl, uv);\n\t\t\tvec4 cloudColor = texture2D(uTexture, uv);\n\t\t\tfinalColor = (girlColor - (cloudColor - vec4(boxTwoCoeff/12.0))) * vec4(40.0);\n\t\t}\n\t\t\n\t}\n\telse if ((vUv.x >= boxThreeX && vUv.x <= (boxThreeX + boxThreeW)) && (vUv.y >= boxThreeY && vUv.y <= (boxThreeY + boxThreeH))){\n\t\tuv.x += boxThreeTranslateX;\n\t\tuv.y += boxThreeTranslateY;\n\t    \n\t\tfloat rot = boxThreeRotDegree * (3.14159265359 / 180.0);\n\n\t\tuv = uv - vec2(.5, .5);\n\n\t\tmat2 m = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));\n\t\tuv  = m * uv;\n\n\t\tuv = uv + vec2(.5, .5);\n\n\t\tif (boxThreeTexture == 0.0) {\n\t\t\tvec4 cloudColor = texture2D(uTexture, uv);\n\t\t\tvec4 fuckedColor = (purple - (cloudColor - vec4(boxThreeCoeff))) * vec4(40.0);\n\t\t\tfinalColor = mix(cloudColor, fuckedColor, boxThreeScale);\n\t\t\t// finalColor = texture2D(uTexture, uv);\n\t\t} else if (boxThreeTexture == 0.5) {\n\t\t\tvec4 cloudColor = texture2D(uTextureReverse, uv);\n\t\t\tvec4 fuckedColor = (purple - (cloudColor - vec4(boxThreeCoeff))) * vec4(40.0);\n\t\t\tfinalColor = mix(cloudColor, fuckedColor, boxThreeScale);\n\n\t\t} else if (boxThreeTexture == 1.0) {\n\t\t\tfinalColor = texture2D(uTextureGirl, uv);\n\t\t\t\n\t\t} else if (boxThreeTexture == 1.5) {\n\t\t\tvec4 girlColor = texture2D(uTextureGirl, uv);\n\t\t\tvec4 cloudColor = texture2D(uTexture, uv);\n\t\t\tfinalColor = (girlColor - (cloudColor - vec4(boxThreeCoeff/12.0))) * vec4(40.0);\n\t\t}\n\t}\n\telse if ((vUv.x >= boxFourX && vUv.x <= (boxFourX + boxFourW)) && (vUv.y >= boxFourY && vUv.y <= (boxFourY + boxFourH))){\n\t\tuv.x += boxFourTranslateX;\n\t\tuv.y += boxFourTranslateY;\n\t    \n\t\tfloat rot = boxFourRotDegree * (3.14159265359 / 180.0);\n\n\t\tuv = uv - vec2(.5, .5);\n\n\t\tmat2 m = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));\n\t\tuv  = m * uv;\n\n\t\tuv = uv + vec2(.5, .5);\n\n\t\tif (boxFourTexture == 0.0) {\n\t\t\tvec4 cloudColor = texture2D(uTexture, uv);\n\t\t\tvec4 fuckedColor = (purple - (cloudColor - vec4(boxFourCoeff))) * vec4(40.0);\n\t\t\tfinalColor = mix(cloudColor, fuckedColor, boxFourScale);\n\t\t\t// finalColor = texture2D(uTexture, uv);\n\t\t} else if (boxFourTexture == 0.5) {\n\t\t\tvec4 cloudColor = texture2D(uTextureReverse, uv);\n\t\t\tvec4 fuckedColor = (purple - (cloudColor - vec4(boxFourCoeff))) * vec4(40.0);\n\t\t\tfinalColor = mix(cloudColor, fuckedColor, boxFourScale);\n\n\t\t} else if (boxFourTexture == 1.0) {\n\t\t\tfinalColor = texture2D(uTextureGirl, uv);\n\t\t\t\n\t\t} else if (boxFourTexture == 1.5) {\n\t\t\tvec4 girlColor = texture2D(uTextureGirl, uv);\n\t\t\tvec4 cloudColor = texture2D(uTexture, uv);\n\t\t\tfinalColor = (girlColor - (cloudColor - vec4(boxFourCoeff/12.0))) * vec4(40.0);\n\t\t}\n\n\t}\n\telse if ((vUv.x >= boxFiveX && vUv.x <= (boxFiveX + boxFiveW)) && (vUv.y >= boxFiveY && vUv.y <= (boxFiveY + boxFiveH))){\n\t\tuv.x += boxFiveTranslateX;\n\t\tuv.y += boxFiveTranslateY;\n\t    \n\t\tfloat rot = boxFiveRotDegree * (3.14159265359 / 180.0);\n\n\t\tuv = uv - vec2(.5, .5);\n\n\t\tmat2 m = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));\n\t\tuv  = m * uv;\n\n\t\tuv = uv + vec2(.5, .5);\n\n\t\tif (boxFiveTexture == 0.0) {\n\t\t\tvec4 cloudColor = texture2D(uTexture, uv);\n\t\t\tvec4 fuckedColor = (purple - (cloudColor - vec4(boxFiveCoeff))) * vec4(40.0);\n\t\t\tfinalColor = mix(cloudColor, fuckedColor, boxFiveScale);\n\t\t\t// finalColor = texture2D(uTexture, uv);\n\t\t} else if (boxFiveTexture == 0.5) {\n\t\t\tvec4 cloudColor = texture2D(uTextureReverse, uv);\n\t\t\tvec4 fuckedColor = (purple - (cloudColor - vec4(boxFiveCoeff))) * vec4(40.0);\n\t\t\tfinalColor = mix(cloudColor, fuckedColor, boxFiveScale);\n\n\t\t} else if (boxFiveTexture == 1.0) {\n\t\t\tfinalColor = texture2D(uTextureGirl, uv);\n\t\t\t\n\t\t} else if (boxFiveTexture == 1.5) {\n\t\t\tvec4 girlColor = texture2D(uTextureGirl, uv);\n\t\t\tvec4 cloudColor = texture2D(uTexture, uv);\n\t\t\tfinalColor = (girlColor - (cloudColor - vec4(boxFiveCoeff/12.0))) * vec4(40.0);\n\t\t}\n\t}\n\telse if ((vUv.x >= boxSixX && vUv.x <= (boxSixX + boxSixW)) && (vUv.y >= boxSixY && vUv.y <= (boxSixY + boxSixH))){\n\t\tuv.x += boxSixTranslateX;\n\t\tuv.y += boxSixTranslateY;\n\t    \n\t\tfloat rot = boxSixRotDegree * (3.14159265359 / 180.0);\n\n\t\tuv = uv - vec2(.5, .5);\n\n\t\tmat2 m = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));\n\t\tuv  = m * uv;\n\n\t\tuv = uv + vec2(.5, .5);\n\n\t\tif (boxSixTexture == 0.0) {\n\t\t\tvec4 cloudColor = texture2D(uTexture, uv);\n\t\t\tvec4 fuckedColor = (purple - (cloudColor - vec4(boxSixCoeff))) * vec4(40.0);\n\t\t\tfinalColor = mix(cloudColor, fuckedColor, boxSixScale);\n\t\t\t// finalColor = texture2D(uTexture, uv);\n\t\t} else if (boxSixTexture == 0.5) {\n\t\t\tvec4 cloudColor = texture2D(uTextureReverse, uv);\n\t\t\tvec4 fuckedColor = (purple - (cloudColor - vec4(boxSixCoeff))) * vec4(40.0);\n\t\t\tfinalColor = mix(cloudColor, fuckedColor, boxSixScale);\n\n\t\t} else if (boxSixTexture == 1.0) {\n\t\t\tfinalColor = texture2D(uTextureGirl, uv);\n\t\t\t\n\t\t} else if (boxSixTexture == 1.5) {\n\t\t\tvec4 girlColor = texture2D(uTextureGirl, uv);\n\t\t\tvec4 cloudColor = texture2D(uTexture, uv);\n\t\t\tfinalColor = (girlColor - (cloudColor - vec4(boxSixCoeff/12.0))) * vec4(40.0);\n\t\t}\n\n\t}\n\telse {\n\t\tfinalColor = textureReverseColor;\n\t}\n\t\n\n\n\t// \t// vec3 tempColor = mix(textureGirlColor.rgb, textureReverseColor.rgb, .8);\n\t// \t// finalColor = vec4(tempColor, 1.0);\n\t// \t// textureGirlColor.a = .0;\n\t// \t// textureGirlColor.r *= .5;\n\t// \t// textureGirlColor.g *= .5;\n\t// \t// textureGirlColor.b *= .5;\n\t// \t// finalColor = textureReverseColor * textureGirlColor;\n\t// \tfinalColor = mix(textureReverseColor, textureGirlColor, .4);\n\t// \t// finalColor = textureGirlColor;\n\t\t\n\n\t// \t// ----- B/W ----- \n\tfloat gray = 0.299*finalColor.r + 0.587*finalColor.g + 0.114*finalColor.b;\n\n\tvec3 blackWhiteColor = vec3(gray);\n\n\tvec3 color = mix(finalColor.rgb, blackWhiteColor, introVal);\n\n\tgl_FragColor = vec4(color, 1.0);\n\t\n\n\t// gl_FragColor = finalColor;\n}"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SceneImport = function () {
		function SceneImport(FBO) {
			_classCallCheck(this, SceneImport);

			this.scene = new THREE.Scene();

			this.render = false;

			var jsonLoader = new THREE.JSONLoader();
			jsonLoader.load("assets/imports/test.js", this.onLoaded.bind(this));

			this.rotation = 0;

			this.FBO = FBO;

			this.rotWorldMatrix;
		}

		_createClass(SceneImport, [{
			key: "onLoaded",
			value: function onLoaded(geometry, materials) {

				// THREE.GeometryUtils.center( geometry );

				// geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, 0, 0) );
				this.cubeCamera = new THREE.CubeCamera(1, 10000, 128);
				// this.cubeCamera.renderTarget.texture.minFilter = THREE.LinearMipMapLinearFilter;
				// console.log(this.cubeCamera.renderTarget.texture);

				// this.cubeCamera.renderTarget.texture.generateMipMaps = false;

				// var options = { format: THREE.RGBAFormat, magFilter: THREE.LinearFilter, minFilter: THREE.NearestFilter };

				// this.cubeCamera.renderTarget = new THREE.WebGLRenderTargetCube( 128, 128, options );
				// this.cubeCamera.renderTarget.texture.generateMipmaps = false;

				this.scene.add(this.cubeCamera);

				var material = new THREE.ShaderMaterial({
					uniforms: {
						// uTexture: {value: this.FBO.texture},
						"uTexCube": { type: "t", value: this.cubeCamera.renderTarget.texture },
						"uTextureBg": { value: this.FBO.texture }

					},
					vertexShader: __webpack_require__(12),
					fragmentShader: __webpack_require__(13)
				});

				// var material = new THREE.MeshLambertMaterial( { envMap: this.cubeCamera.renderTarget.texture, transparent: false, emissive:0xFFFFFF } );
				// var material = new THREE.MeshBasicMaterial( {
				// 			envMap: this.cubeCamera.renderTarget.texture
				// 		} );

				// var material = new THREE.ShaderMaterial({
				// 	vertexShader: require("../../shaders/import.vert"),
				// 	fragmentShader: require("../../shaders/import.frag")
				// });


				this.mesh = new THREE.Mesh(geometry, material);

				var center = { x: 0, y: 0, z: 0 };
				// this.mesh.position.set( center.x, center.y, center.z );
				// this.mesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation( -center.x, -center.y, -center.z ) );

				var light = new THREE.AmbientLight(0xFFFFFF, 1.0); // soft white light
				this.scene.add(light);

				var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);

				// this.scene.add( directionalLight );

				// this.mesh.position.z = 2000 - 20;
				// this.mesh.position.y = -55;
				// this.mesh.rotation.y = 20* Math.PI / 180;
				// this.mesh.scale.y = .1;
				// this.mesh.scale.z = .1;

				// this.pivot = new THREE.Object3D();
				// console.log(new THREE.Vector3(0,0,0));
				// this.pivot.position = new THREE.Vector3(0,0,0);
				// this.pivot.add(this.mesh);
				// this.scene.add(pivot);

				this.scene.add(this.mesh);

				this.render = true;
			}

			// Rotate an object around an arbitrary axis in world space
			// function rotateAroundWorldAxis(object, axis, radians) {
			//     rotWorldMatrix = new THREE.Matrix4();
			//     rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);

			//     // old code for Three.JS pre r54:
			//     //  rotWorldMatrix.multiply(object.matrix);
			//     // new code for Three.JS r55+:
			//     rotWorldMatrix.multiply(object.matrix);                // pre-multiply

			//     object.matrix = rotWorldMatrix;

			//     // old code for Three.js pre r49:
			//     // object.rotation.getRotationFromMatrix(object.matrix, object.scale);
			//     // old code for Three.js pre r59:
			//     // object.rotation.setEulerFromRotationMatrix(object.matrix);
			//     // code for r59+:
			//     object.rotation.setFromRotationMatrix(object.matrix);
			// }

		}, {
			key: "rotateAroundWorldAxis",
			value: function rotateAroundWorldAxis(object, axis, radians) {

				this.rotWorldMatrix = new THREE.Matrix4();
				this.rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
				this.rotWorldMatrix.multiply(object.matrix);

				object.matrix = this.rotWorldMatrix;

				object.rotation.setFromRotationMatrix(object.matrix);
			}
		}, {
			key: "update",
			value: function update(renderer, scene, pos, updateCube) {

				if (!this.render) return;

				var translate = 3;

				this.rotation = 0.5;

				var yAxis = new THREE.Vector3(0, 1, 0);

				this.rotateAroundWorldAxis(this.mesh, yAxis, this.rotation * Math.PI / 180);

				// this.mesh.position.z += translate;
				// this.mesh.position.x = translate;
				// this.mesh.position.y += translate;
				// this.mesh.translate.z += translate;
				// this.mesh.translate.y += translate;
				// this.mesh.translate.x += translate;
				// this.mesh.center();
				// this.mesh.rotation.y = this.rotation * Math.PI / 180;


				// this.mesh.translate.x -= translate;
				// this.mesh.translate.z -= translate;
				// this.mesh.translate.y -= translate;
				// this.mesh.translate.x -= translate;
				// this.mesh.position.z -= translate;
				// this.mesh.position.x -= translate;
				// this.mesh.position.z -= translate;

				// this.pivot.rotation.y += 0.05;

				if (updateCube) {
					this.cubeCamera.position.copy({ x: 0, y: -40, z: pos });
					this.cubeCamera.updateCubeMap(renderer, scene, this.mesh.position);
				}
			}
		}]);

		return SceneImport;
	}();

	exports.default = SceneImport;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec3 vPos;\nvarying vec3 vNormal;\n\n\nvoid main() {\n\n\tvUv = uv;\n\tvNormal = normalMatrix * normal;\n\tvPos = vec3(modelMatrix * vec4(position, 1.0));\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}"

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\nuniform samplerCube uTexCube;\nuniform sampler2D uTextureBg;\nvarying vec3 vPos;\nvarying vec3 vNormal;\n\nvoid main() {\n\n\t// vec4 textureColor = texture2D( uTexture, vUv );\n\t// // vec4 textureStillColor = texture2D( uTexture, flippedUv );\n\t// if (vUv.x < .2 || vUv.x > .8 || vUv.y < .2 || vUv.y > .8){\n\n\t// \t// textureColor = textureStillColor;\n\t// \tfloat gray = 0.299*textureColor.r + 0.587*textureColor.g + 0.114*textureColor.b;\n\t\n\t// \tvec3 blackWhiteColor = vec3(gray, gray, gray);\n\n\t// \tvec3 finalColor = mix(textureColor.rgb, blackWhiteColor, 1.0);\n\n\t// \tgl_FragColor = vec4(finalColor, 1.0);\n\t// } else {\n\n\t\t\n\n\n\t// \tgl_FragColor = textureColor;\n\t// }\n\n\t\n\n\t// vec3 c = textureCube(uTexCube, vPos).rgb;\n\n\t// vec3 finalColor = c;\n\n\t// gl_FragColor = vec4(finalColor,1.0);\n\n\t\n\tvec3 I = normalize(vPos - cameraPosition);\n    vec3 R = reflect(I, normalize(vNormal));\n    vec3 color = textureCube(uTexCube, R).rgb;\n\n\n\n    if (color == vec3(0.0, 0.0, 0.0)){\n    \tcolor = vec3(226.0/255.0, 6.0/255.0, 219.0/255.0);\n    }\n\n    vec3 finalColor = color;\n\n    gl_FragColor = vec4(finalColor, 1.0);\n\n}"

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SceneCloudsOverlay = function () {
		function SceneCloudsOverlay(sceneVals, sceneInitObj, FBO, FBOStill, FBOReverse, FBOGirl, FBOBG) {
			_classCallCheck(this, SceneCloudsOverlay);

			this.scene = new THREE.Scene();

			this.currentStillTexture = FBO.texture;

			this.mixVal = 1.0;

			var boxUniforms = this.getInitShaderUniforms(sceneVals, sceneInitObj);

			var textureUniforms = {};
			textureUniforms.uTexture = { value: FBO.texture };
			textureUniforms.uTextureReverse = { value: FBOReverse.texture };
			textureUniforms.uTextureGirl = { value: FBOGirl.texture };
			textureUniforms.uTextureBg = { value: FBOBG.texture };

			var resUniforms = {};
			resUniforms.resX = { value: window.innerWidth };
			resUniforms.resY = { value: window.innerHeight };

			var uniformsObj = Object.assign({}, boxUniforms, textureUniforms, resUniforms);

			var material = new THREE.ShaderMaterial({
				uniforms: uniformsObj,
				vertexShader: __webpack_require__(7),
				fragmentShader: __webpack_require__(15)
			});

			var plane = new THREE.PlaneBufferGeometry(window.innerWidth, window.innerHeight);

			this.quad = new THREE.Mesh(plane, material);
			this.quad.position.z = 0;
			this.scene.add(this.quad);

			this.threshold = 100;
			this.currentTime = Date.now();
		}

		_createClass(SceneCloudsOverlay, [{
			key: "getInitShaderUniforms",
			value: function getInitShaderUniforms(sceneVals, sceneInit) {

				var initUniforms = {};
				Object.keys(sceneInit).forEach(function (t) {

					var strX = t + 'X';
					initUniforms[strX] = { value: 0 };

					var strY = t + 'Y';
					initUniforms[strY] = { value: 0 };

					var strW = t + 'W';
					initUniforms[strW] = { value: 0 };

					var strH = t + 'H';
					initUniforms[strH] = { value: 0 };

					var strTexture = t + 'Texture';
					initUniforms[strTexture] = { value: -1 };

					var strScale = t + 'Scale';
					initUniforms[strScale] = { value: 0 };

					var strTranslateX = t + 'TranslateX';
					initUniforms[strTranslateX] = { value: 0 };

					var strTranslateY = t + 'TranslateY';
					initUniforms[strTranslateY] = { value: 0 };

					var strRotation = t + 'RotDegree';
					initUniforms[strRotation] = { value: 0 };

					var textureCoeffStr = t + 'Coeff';
					initUniforms[textureCoeffStr] = { value: 0 };
				});

				var uniforms = {};
				Object.keys(sceneVals).forEach(function (t) {

					var strX = t + 'X';
					uniforms[strX] = { value: sceneVals[t].x };

					var strY = t + 'Y';
					uniforms[strY] = { value: sceneVals[t].y };

					var strW = t + 'W';
					uniforms[strW] = { value: sceneVals[t].w };

					var strH = t + 'H';
					uniforms[strH] = { value: sceneVals[t].h };

					var strTexture = t + 'Texture';
					uniforms[strTexture] = { value: sceneVals[t].texture };

					var strScale = t + 'Scale';
					uniforms[strScale] = { value: sceneVals[t].scale };

					var strTranslateX = t + 'TranslateX';
					uniforms[strTranslateX] = { value: sceneVals[t].translateX };

					var strTranslateY = t + 'TranslateY';
					uniforms[strTranslateY] = { value: sceneVals[t].translateY };

					var strRotation = t + 'RotDegree';
					uniforms[strRotation] = { value: sceneVals[t].rotation };

					if (sceneVals[t].hasOwnProperty('textureCoeff')) {
						var textureCoeffStr = t + 'Coeff';
						uniforms[textureCoeffStr] = { value: sceneVals[t].textureCoeff };
					}
				});

				return Object.assign({}, initUniforms, uniforms);
			}
		}, {
			key: "getShaderUniforms",
			value: function getShaderUniforms(sceneVals) {

				var uniforms = {};
				Object.keys(sceneVals).forEach(function (t) {

					var strX = t + 'X';
					uniforms[strX] = { value: sceneVals[t].x };

					var strY = t + 'Y';
					uniforms[strY] = { value: sceneVals[t].y };

					var strW = t + 'W';
					uniforms[strW] = { value: sceneVals[t].w };

					var strH = t + 'H';
					uniforms[strH] = { value: sceneVals[t].h };

					var strTexture = t + 'Texture';
					uniforms[strTexture] = { value: sceneVals[t].texture };

					var strScale = t + 'Scale';
					uniforms[strScale] = { value: sceneVals[t].scale };

					var strTranslateX = t + 'TranslateX';
					uniforms[strTranslateX] = { value: sceneVals[t].translateX };

					var strTranslateY = t + 'TranslateY';
					uniforms[strTranslateY] = { value: sceneVals[t].translateY };

					var strRotation = t + 'RotDegree';
					uniforms[strRotation] = { value: sceneVals[t].rotation };

					if (sceneVals[t].hasOwnProperty('textureCoeff')) {
						var textureCoeffStr = t + 'Coeff';
						uniforms[textureCoeffStr] = { value: sceneVals[t].textureCoeff };
					}
				});

				return uniforms;
			}
		}, {
			key: "update",
			value: function update(sceneVals) {
				var _this = this;

				var boxUniforms = this.getShaderUniforms(sceneVals);

				Object.keys(boxUniforms).forEach(function (t) {

					_this.quad.material.uniforms[t].value = boxUniforms[t].value;
				});
			}
		}]);

		return SceneCloudsOverlay;
	}();

	exports.default = SceneCloudsOverlay;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec2 flippedUv;\nuniform sampler2D uTexture;\nuniform sampler2D uTextureReverse;\nuniform sampler2D uTextureGirl;\nuniform sampler2D uTextureBg;\nuniform float resX;\nuniform float resY;\n\nuniform float boxOverlayX;\nuniform float boxOverlayY;\nuniform float boxOverlayW;\nuniform float boxOverlayH;\nuniform float boxOverlayTexture;\nuniform float boxOverlayScale;\nuniform float boxOverlayTranslateX;\nuniform float boxOverlayTranslateY;\nuniform float boxOverlayRotDegree;\nuniform float boxOverlayCoeff;\n\nvoid main() {\n\n\tvec4 finalColor;\n\tvec4 textureColor = texture2D( uTexture, vUv );\n\tvec4 textureReverseColor = texture2D( uTextureReverse, vUv );\n\tvec4 textureGirlColor = texture2D( uTextureGirl, vUv );\n\tvec4 bgColor = texture2D(uTextureBg, vUv);\n\n\tvec2 iRes = vec2(resX, resY);\n\n\tvec2 uv = gl_FragCoord.xy / iRes.xy;\n\n\tvec2 ratio = vec2((iRes.x/2.0) / iRes.x, (iRes.y/2.0) / iRes.y);\n\n\tvec4 purple = vec4(242.0/255.0, 29.0/255.0, 199.0/255.0, 1.0) * vec4(.67);\n\n\t\n\tif ((vUv.x >= boxOverlayX && vUv.x <= (boxOverlayX + boxOverlayW)) && (vUv.y >= boxOverlayY && vUv.y <= (boxOverlayY + boxOverlayH))){\n\n\t\tuv.x += boxOverlayTranslateX;\n\t\tuv.y += boxOverlayTranslateY;\n\t    \n\t\tfloat rot = boxOverlayRotDegree * (3.14159265359 / 180.0);\n\n\t\tuv = uv - vec2(.5, .5);\n\n\t\tmat2 m = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));\n\t\tuv  = m * uv;\n\n\t\tuv = uv + vec2(.5, .5);\n\n\t\tif (boxOverlayTexture == 0.0) {\n\t\t\tvec4 cloudColor = texture2D(uTexture, uv);\n\t\t\tvec4 fuckedColor = (purple - (cloudColor - vec4(boxOverlayCoeff))) * vec4(40.0);\n\t\t\tfinalColor = mix(cloudColor, fuckedColor, boxOverlayScale);\n\t\t\t// finalColor = texture2D(uTexture, uv);\n\t\t} else if (boxOverlayTexture == 0.5) {\n\t\t\tvec4 cloudColor = texture2D(uTextureReverse, uv);\n\t\t\tvec4 fuckedColor = (purple - (cloudColor - vec4(boxOverlayCoeff))) * vec4(40.0);\n\t\t\tfinalColor = mix(cloudColor, fuckedColor, boxOverlayScale);\n\n\t\t} else if (boxOverlayTexture == 1.0) {\n\t\t\tfinalColor = texture2D(uTextureGirl, uv);\n\t\t\t\n\t\t} else if (boxOverlayTexture == 1.5) {\n\t\t\tvec4 girlColor = texture2D(uTextureGirl, uv);\n\t\t\tvec4 cloudColor = texture2D(uTexture, uv);\n\t\t\tfinalColor = (girlColor - (cloudColor - vec4(boxOverlayCoeff))) * vec4(40.0);\n\t\t}\n\t}\n\telse {\n\t\tfinalColor = bgColor;\n\t}\n\t\n\n\tgl_FragColor = finalColor;\n}"

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Timeline = {
		active: true,
		init: {
			scene: 'SceneA'
		},
		schedules: [{
			time: 7.8,
			scene: 0
		}, {
			time: 13,
			scene: 1
		}, {
			time: 18.4,
			scene: 2
		}, {
			time: 23.7,
			scene: 3
		}, {
			time: 29,
			scene: 4
		}, {
			time: 36,
			scene: 6
		}, {
			time: 42,
			scene: 7
		}, {
			time: 50,
			scene: 8
		}, {
			time: 55,
			scene: 9
		}, {
			time: 62,
			scene: 10
		}, {
			time: 20,
			scene: 3
		}, {
			time: 22,
			scene: 0
		}, {
			time: 23,
			scene: 3
		}, {
			time: 26,
			scene: 2
		}, {
			time: 28,
			scene: 3
		}, {
			time: 34,
			scene: 0
		}]
	};

	exports.default = Timeline;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _SceneSelectorItem = __webpack_require__(18);

	var _SceneSelectorItem2 = _interopRequireDefault(_SceneSelectorItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SceneSelector = function () {
		function SceneSelector(items, initObj) {
			_classCallCheck(this, SceneSelector);

			var getUrlParameter = function getUrlParameter(name) {
				name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
				var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
				var results = regex.exec(location.search);
				return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
			};

			this.containerEl = document.createElement('div');
			this.containerEl.classList.add('selector-container');

			this.playTimeline = getUrlParameter('timeline') === 'active';

			this.toggleTimelineEl = document.createElement('div');
			this.toggleTimelineEl.classList.add('timeline-toggler');
			this.toggleTimelineEl.classList.add('select');
			if (this.playTimeline) {
				this.toggleTimelineEl.innerHTML = 'Disable Timeline';
			} else {
				this.toggleTimelineEl.innerHTML = 'Use Timeline';
			}
			this.toggleTimelineEl.addEventListener('click', this.onToggleClick.bind(this));

			this.containerEl.appendChild(this.toggleTimelineEl);

			this.currentItem = items[0];

			this.initObj = initObj;

			this.items = [];
			for (var i = 0; i < items.length; i++) {

				var itemObj = items[i];
				var item = new _SceneSelectorItem2.default(this.containerEl, this.onTypeClick, this, itemObj);
				this.items.push(itemObj);
			}
		}

		_createClass(SceneSelector, [{
			key: 'onToggleClick',
			value: function onToggleClick() {

				var url = document.location.protocol + '//' + document.location.host + document.location.pathname;

				if (!this.playTimeline) window.location.href = url + '?timeline=active';else {
					window.location.href = url;
				}
			}
		}, {
			key: 'onTypeClick',
			value: function onTypeClick(itemObj) {

				console.log('on type click', itemObj);

				this.currentItem = itemObj;
			}
		}]);

		return SceneSelector;
	}();

	exports.default = SceneSelector;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SceneSelectorItem = function () {
		function SceneSelectorItem(parentEl, onClickCallback, callbackScope, itemObj) {
			_classCallCheck(this, SceneSelectorItem);

			this.onClickCallback = onClickCallback;
			this.callbackScope = callbackScope;
			this.itemObj = itemObj;

			this.containerEl = document.createElement('div');
			this.containerEl.classList.add('item-container');

			this.selectBtn = document.createElement('div');
			this.selectBtn.classList.add('select');
			this.containerEl.appendChild(this.selectBtn);
			this.selectBtn.innerHTML = itemObj.title;

			this.onClickBound = this.onClick.bind(this);

			this.selectBtn.addEventListener('click', this.onClickBound);

			parentEl.appendChild(this.containerEl);
		}

		_createClass(SceneSelectorItem, [{
			key: 'onClick',
			value: function onClick(e) {

				this.onClickCallback.call(this.callbackScope, this.itemObj);
			}
		}]);

		return SceneSelectorItem;
	}();

	exports.default = SceneSelectorItem;

/***/ }
/******/ ]);