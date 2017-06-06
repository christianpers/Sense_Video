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

	var _SceneSelector = __webpack_require__(33);

	var _SceneSelector2 = _interopRequireDefault(_SceneSelector);

	var _scenes = __webpack_require__(35);

	var _scenes2 = _interopRequireDefault(_scenes);

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

			var sceneInit = {
				grid: [3, 3],
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
				}
			};

			this.sceneSelector = new _SceneSelector2.default(_scenes2.default, sceneInit);
			container.appendChild(this.sceneSelector.containerEl);

			this.sceneMain = new _SceneMain2.default(container, this.sceneSelector);
			// this.main = new Main(new Data());

			this.onResize();
			window.addEventListener('resize', function () {
				_this.onResize();
			});

			// this.createAudio();
			this.reqFrame();
		}

		_createClass(Starter, [{
			key: 'createAudio',
			value: function createAudio() {

				this.audioEl = document.createElement('audio');
				this.audioEl.src = 'assets/audio.mp3';
				this.audioEl.addEventListener('playing', this.onPlaying.bind(this));
				// this.audioEl.play();
			}
		}, {
			key: 'onPlaying',
			value: function onPlaying() {
				console.log('sdfsdfsdfs');

				// this.reqFrame();
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

	var _SceneNoise = __webpack_require__(17);

	var _SceneNoise2 = _interopRequireDefault(_SceneNoise);

	var _SceneTwitter = __webpack_require__(20);

	var _SceneTwitter2 = _interopRequireDefault(_SceneTwitter);

	var _AudioPlayer = __webpack_require__(21);

	var _AudioPlayer2 = _interopRequireDefault(_AudioPlayer);

	var _SpectrumAnalyzer = __webpack_require__(22);

	var _SpectrumAnalyzer2 = _interopRequireDefault(_SpectrumAnalyzer);

	var _SceneGif = __webpack_require__(23);

	var _SceneGif2 = _interopRequireDefault(_SceneGif);

	var _SceneCube = __webpack_require__(25);

	var _SceneCube2 = _interopRequireDefault(_SceneCube);

	var _SceneSphere = __webpack_require__(27);

	var _SceneSphere2 = _interopRequireDefault(_SceneSphere);

	var _SceneRefract = __webpack_require__(28);

	var _SceneRefract2 = _interopRequireDefault(_SceneRefract);

	var _SceneHero = __webpack_require__(30);

	var _SceneHero2 = _interopRequireDefault(_SceneHero);

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

			this.introDuration = 1;
			this.introStartTime = Date.now();

			this.cubeCameraUpdateInterval = 1000;
			this.cubeCameraLastUpdate = Date.now();

			this.cloudsImportLoaded = false;

			this.bassAudioLoaded = false;
			this.drumsAudioLoaded = false;
			this.voicesAudioLoaded = false;
			this.mainAudioLoaded = false;

			this._bassAudioCtx = new AudioContext();
			this._drumsAudioCtx = new AudioContext();
			this._voicesAudioCtx = new AudioContext();
			this._mainAudioCtx = new AudioContext();

			this.bassAudioPlayer = new _AudioPlayer2.default(this._bassAudioCtx, this.onBassLoaded, this);
			this.bassAudioPlayer.load('assets/stems/bass.mp3');

			this.drumsAudioPlayer = new _AudioPlayer2.default(this._drumsAudioCtx, this.onDrumsLoaded, this);
			this.drumsAudioPlayer.load('assets/stems/drums.mp3');

			this.voicesAudioPlayer = new _AudioPlayer2.default(this._voicesAudioCtx, this.onVoicesLoaded, this);
			this.voicesAudioPlayer.load('assets/stems/voices.mp3');

			this.mainAudioPlayer = new _AudioPlayer2.default(this._mainAudioCtx, this.onMainAudioLoaded, this);
			this.mainAudioPlayer.load('assets/audio.mp3');

			// this.spectrumAnalyzer = new SpectrumAnalyzer();
			// this.spectrumAnalyzer.init(this._audioCtx);

			this.bassAnalyser = new _SpectrumAnalyzer2.default();
			this.bassAnalyser.init(this._bassAudioCtx);

			this.drumsAnalyser = new _SpectrumAnalyzer2.default();
			this.drumsAnalyser.init(this._drumsAudioCtx);

			this.voicesAnalyser = new _SpectrumAnalyzer2.default();
			this.voicesAnalyser.init(this._voicesAudioCtx);

			this.currentSceneSettings = { renderOverlay: false, cameraSpeed: {} };

			var SceneBaseVals = function SceneBaseVals() {
				this.voronoiOneSize = 10;
				this.voronoiTwoSize = 10;
				// this.voronoiOneOffset = 1;
				// this.voronoiTwoOffset = 1;
				this.voronoiOneSpeed = 3.0;
				this.voronoiTwoSpeed = 3.42;
				// this.bOffsetMultiplier = 0.01;
				// this.xFract = 1.0;
				// this.yFract = 8.0;
				// this.useYFract = true;
				this.refractX = 2.0;
				this.refractY = 2.0;
				this.refractFreq = .115;
			};

			this.sceneBaseGui = new SceneBaseVals();

			this.gui = new dat.GUI();

			this.gui.add(this.sceneBaseGui, 'voronoiOneSize', 10.0, 40.0).step(1);
			this.gui.add(this.sceneBaseGui, 'voronoiTwoSize', 10.0, 40.0).step(1);
			// this.gui.add(this.sceneBaseGui, 'voronoiOneOffset', 0.1, 4.0).step(.001);
			// this.gui.add(this.sceneBaseGui, 'voronoiTwoOffset', 0.1, 4.0).step(.001);
			this.gui.add(this.sceneBaseGui, 'voronoiOneSpeed', 1.0, 10.0).step(.01);
			this.gui.add(this.sceneBaseGui, 'voronoiTwoSpeed', 1.0, 10.0).step(.01);

			this.gui.add(this.sceneBaseGui, 'refractX', 1.0, 20.0).step(.1);

			this.gui.add(this.sceneBaseGui, 'refractY', 1.0, 20.0).step(.1);

			this.gui.add(this.sceneBaseGui, 'refractFreq', 0.0, 2.0).step(.0001);

			// this.gui.add(this.sceneBaseGui, 'gOffsetMultiplier', 0.0, 1.0).step(.00001);
			// this.gui.add(this.sceneBaseGui, 'bOffsetMultiplier', 0.0, 1.0).step(.00001);
			// this.gui.add(this.sceneBaseGui, 'xFract', 1.0, 20.0).step(1.0);
			// this.gui.add(this.sceneBaseGui, 'yFract', 1.0, 20.0).step(1.0);
			// this.gui.add(this.sceneBaseGui, 'useYFract');


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

			this.FBOTwitter = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, {
				minFilter: THREE.LinearFilter,
				magFilter: THREE.NearestFilter,
				format: THREE.RGBFormat
			});

			var sceneVals = this.getCurrentActiveSceneVals();

			this.sceneCloudsMesh = new _SceneCloudsMesh2.default(sceneVals.grid, this.sceneSelector.initObj, this.FBO, this.FBOStill, this.FBOReverse, this.FBOGirl);
			this.sceneClouds = new _SceneClouds2.default(this.enableRender, this);
			this.sceneImport = new _SceneImport2.default(this.FBO);
			this.sceneCloudsOverlay = new _SceneCloudsOverlay2.default(sceneVals.overlay, this.sceneSelector.initObj, this.FBO, this.FBOStill, this.FBOReverse, this.FBOGirl, this.FBOBg);

			this.sceneTwitter = new _SceneTwitter2.default();
			this.sceneNoise = new _SceneNoise2.default(this.FBO, this.FBOReverse, this.sceneSelector.initObj);
			this.sceneGif = new _SceneGif2.default();
			this.start_time = Date.now();

			this.sceneCubeTest = new _SceneCube2.default();

			this.sceneSphere = new _SceneSphere2.default(this.sceneBaseGui, this.FBO);
			this.sceneRefract = new _SceneRefract2.default(this.sceneBaseGui);

			this.sceneHero = new _SceneHero2.default();

			this.windowHalfX;
			this.windowHalfY;

			this.container = container;

			this.doRender = false;

			this.container.style.opacity = 1;

			// this.createBgCanvas();

			this.twitterCamera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 3000);
			this.twitterCamera.position.set(0, 150, 400);
			// this.twitterCamera.position.z = 0;
			// this.twitterCamera.position.y = 0;

			this.staticCamera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 6000);
			this.staticCamera.position.set(0, 500, 1000);
			this.staticCamera.lookAt(this.sceneCubeTest.scene.position);

			this.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 3000);
			this.camera.position.z = this.sceneClouds.totDepth;
			this.camera.position.y = -220;

			this.reverseCamera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 3000);
			this.reverseCamera.position.z = 0;
			this.reverseCamera.position.y = -40;

			this.importCamera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 3000);
			this.importCamera.position.z = 10;
			this.importCamera.position.y = 14;

			this.orthoCamera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -10000, 10000);

			this.renderer = new THREE.WebGLRenderer({ opacity: 1, antialias: false, alpha: true });
			this.renderer.setSize(window.innerWidth, window.innerHeight);
			this.renderer.autoClear = false;
			// this.renderer.setClearColorHex( 0x000000, 1 );
			// this.renderer.setClearColor( '#f644ac' );
			// this.renderer.sortObjects = false;
			// this.renderer.setClearColor('#6fd271');
			this.renderer.setClearColor(0x000000, 1);
			this.container.appendChild(this.renderer.domElement);

			this.controls = new THREE.OrbitControls(this.staticCamera, this.renderer.domElement);
			this.controls.enableZoom = false;

			this.currentTime = Date.now();
		}

		_createClass(SceneMain, [{
			key: 'onMainAudioLoaded',
			value: function onMainAudioLoaded() {

				this.mainAudioLoaded = true;

				if (this.bassAudioLoaded && this.drumsAudioLoaded && this.voicesAudioLoaded) {
					this.initAudio();
				}
			}
		}, {
			key: 'onVoicesLoaded',
			value: function onVoicesLoaded() {

				this.voicesAudioLoaded = true;

				if (this.bassAudioLoaded && this.drumsAudioLoaded && this.mainAudioLoaded) {
					this.initAudio();
				}
			}
		}, {
			key: 'onDrumsLoaded',
			value: function onDrumsLoaded() {

				this.drumsAudioLoaded = true;

				if (this.bassAudioLoaded && this.voicesAudioLoaded && this.mainAudioLoaded) {
					this.initAudio();
				}
			}
		}, {
			key: 'onBassLoaded',
			value: function onBassLoaded() {

				this.bassAudioLoaded = true;
				if (this.drumsAudioLoaded && this.voicesAudioLoaded && this.mainAudioLoaded) {
					this.initAudio();
				}
			}
		}, {
			key: 'initAudio',
			value: function initAudio() {

				this.mainAudioPlayer.play(undefined, .5);
				this.bassAudioPlayer.play(undefined, 0);
				this.drumsAudioPlayer.play(undefined, 0);
				this.voicesAudioPlayer.play(undefined, 0);

				this.bassAnalyser.connect(this.bassAudioPlayer.getSourceNode());
				this.drumsAnalyser.connect(this.drumsAudioPlayer.getSourceNode());
				this.voicesAnalyser.connect(this.voicesAudioPlayer.getSourceNode());

				if (this.cloudsImportLoaded) this.doRender = true;
			}
		}, {
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

				this.cloudsImportLoaded = true;

				// if (this.audioPlayer.isLoaded)
				// 	this.doRender = true;
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

				if (!sceneItem || !this.sceneSelector.playTimeline) {
					sceneItem = this.sceneSelector.currentItem;
				}

				var currentX = 0;
				var currentY = 0;
				this.currentSceneSettings.renderOverlay = false;
				Object.keys(sceneItem).forEach(function (t) {

					if (t === 'grid') {
						ret.grid[t] = sceneItem[t];
					}

					if (t.indexOf('box') > -1 && t !== 'boxOverlay') {
						var vals = {};
						vals.texture = sceneItem[t].texture;
						vals.scale = sceneItem[t].scale;
						vals.rotation = sceneItem[t].rotation;
						if (sceneItem[t].hasOwnProperty('specialTextureCoeff')) {
							vals.textureCoeff = sceneItem[t].specialTextureCoeff;
						}

						ret.grid[t] = vals;
					}

					if (t === 'boxOverlay') {
						_this.currentSceneSettings.renderOverlay = true;
						var _vals = {};
						_vals.texture = sceneItem[t].texture;
						_vals.scale = sceneItem[t].scale;
						_vals.rotation = sceneItem[t].rotation;
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

				var audioDataBass = this.bassAnalyser.getAudioData();
				var audioDataDrums = this.drumsAnalyser.getAudioData();
				var audioDataVoices = this.voicesAnalyser.getAudioData();

				var now = Date.now();
				var introDelta = now - this.introStartTime;
				var introRemain = Math.abs(introDelta / this.introDuration - 1);
				if (introDelta > this.introDuration) {
					introRemain = 0;
				}

				var sceneVals = this.getCurrentActiveSceneVals();

				// this.sceneCloudsMesh.update(sceneVals.grid, introRemain);
				if (this.currentSceneSettings.renderOverlay) {
					this.sceneCloudsOverlay.update(sceneVals.overlay);
				}

				var position = (now - this.start_time) * 0.05 % this.sceneClouds.totDepth;

				var cloudCameraDestY = -40;
				this.camera.position.y -= (this.camera.position.y - cloudCameraDestY) * .005;

				// var position = 1000;

				// const updateCubeDelta = now - this.cubeCameraLastUpdate;
				// if (updateCubeDelta > 1000) {
				// 	this.sceneImport.update(this.renderer, this.sceneClouds.scene, -position + this.sceneClouds.totDepth, true);
				// 	this.cubeCameraLastUpdate = now;
				// } else {
				// 	this.sceneImport.update(this.renderer, this.sceneClouds.scene, -position + this.sceneClouds.totDepth, false);


				// }

				// this.sceneClouds.update(this.renderer, -position + this.sceneClouds.totDepth);

				// this.sceneNoise.update(audioData, sceneVals.grid);

				// var timer = - new Date().getTime() * 0.0005; 
				// this.staticCamera.position.x = 200 * Math.cos(timer);
				// this.staticCamera.position.y = 200 * Math.sin(timer);
				this.sceneSphere.update();
				this.sceneRefract.update();
				this.sceneHero.update(audioDataBass, audioDataDrums, audioDataVoices);
				this.controls.update();
			}
		}, {
			key: 'render',
			value: function render() {

				if (!this.doRender) return;

				var now = Date.now();

				var position = (now - this.start_time) * .05 % this.sceneClouds.totDepth;

				this.camera.position.z = -position + this.sceneClouds.totDepth;

				var reversePos = (now - this.start_time) * .08 % this.sceneClouds.totDepth;

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
				// this.staticCamera.lookAt(this.sceneCubeTest.scene.position);
				// this.renderer.render( this.sceneCubeTest.scene, this.staticCamera );

				// this.renderer.render( this.sceneRefract.scene, this.orthoCamera, this.FBO, true );


				this.renderer.render(this.sceneSphere.scene, this.staticCamera);
				// this.renderer.clearDepth();
				if (this.sceneHero.render) {
					this.renderer.render(this.sceneHero.scene, this.staticCamera);
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
			this.totDepth = 4000;

			this.scene = new THREE.Scene();

			this.start_time = Date.now();

			this.render = false;

			this.rotation = 0;

			this.geometry = new THREE.Geometry();

			this.lastCubemapUpdate = 0;

			var jsonLoader = new THREE.JSONLoader();
			jsonLoader.load("assets/imports/test.js", this.onLoaded.bind(this));

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

			// this.video = document.createElement( 'video' );
			// this.video.src = "assets/test.mp4";
			// this.video.load(); // must call after setting/changing source
			// this.video.play();
			// this.video.loop = true;
			// const videoImage = document.createElement( 'canvas' );
			// videoImage.width = 480;
			// videoImage.height = 480;

			// this.videoImageContext = videoImage.getContext( '2d' );
			// // background color if no video present
			// this.videoImageContext.fillStyle = '#000000';
			// this.videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

			// this.videoTexture = new THREE.Texture( videoImage );
			// this.videoTexture.minFilter = THREE.LinearFilter;
			// this.videoTexture.magFilter = THREE.LinearFilter;

			// const resUniforms = {};
			// resUniforms.u_res = {value: new THREE.Vector2(400, 400)};

			// const textureUniforms = {};
			// textureUniforms.uTexture = {value: this.videoTexture};

			// const uniformsObj = Object.assign({}, resUniforms, textureUniforms);

			// var material = new THREE.ShaderMaterial({
			// 	uniforms: uniformsObj,
			// 	vertexShader: require("../../shaders/noise.vert"),
			// 	fragmentShader: require("../../shaders/gif.frag")
			// });

			// // var plane = new THREE.PlaneBufferGeometry(400, 400);
			// var movieMaterial = new THREE.MeshBasicMaterial( { map: this.videoTexture, opacity: .5, transparent: true, side:THREE.DoubleSide } );
			// // movieMaterial.depthWrite = false
			// var movieGeometry = new THREE.PlaneGeometry( 200, 200, 1, 1 );

			// // var materialTest = new THREE.MeshBasicMaterial( { color: 0x0000ff } );

			// this.quad = new THREE.Mesh( movieGeometry, movieMaterial );
			// this.quad.position.y = 0;
			// this.quad.position.z = 1000;
			// this.scene.add( this.quad );
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

				this.mesh.position.z = this.totDepth;
				this.mesh.position.y = -55;
				this.mesh.scale.x = 2;
				this.mesh.scale.y = 2;
				this.mesh.scale.z = 2;

				this.scene.add(this.mesh);

				this.mesh.visible = false;

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
				// this.mesh.rotation.x = (this.rotation / 50) * Math.PI / 180;
				// this.mesh.rotation.z = this.rotation+Math.random() * Math.PI / 180;

				this.mesh.visible = false;
				this.mesh.position.z = pos - 70;

				var now = Date.now();
				var delta = now - this.lastCubemapUpdate;
				if (delta > 1000) {
					this.cubeCamera.position.copy({ x: 0, y: -40, z: pos });
					this.cubeCamera.updateCubeMap(renderer, this.scene);

					this.lastCubemapUpdate = now;
				}

				// var reversePos = ( ( now - this.start_time ) * .3 ) % this.totDepth;
				// this.quad.position.z = reversePos;

				// if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {

				// 	this.videoImageContext.drawImage(this.video, 0, 0);
				// 	this.videoTexture.needsUpdate = true;
				// 	// this.quad.position.z = 1000;
				// }


				// this.mesh.visible = true;
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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SceneImport = function () {
		function SceneImport(FBO, FBOTwitter, sceneInitObj) {
			_classCallCheck(this, SceneImport);

			this.scene = new THREE.Scene();

			this.lastMousePos = new THREE.Vector2(0.0, 0.0);

			this.timestamp = Date.now();

			var boxUniforms = this.getInitShaderUniforms(sceneInitObj);

			var audioUniforms = {};
			audioUniforms.audio_high = { value: 0 };
			audioUniforms.audio_deep = { value: 0 };

			var resUniforms = {};
			resUniforms.u_res = { value: new THREE.Vector2(window.innerWidth, window.innerHeight) };

			var interactiveUniforms = {};
			interactiveUniforms.u_mouse = { value: this.lastMousePos };
			interactiveUniforms.u_time = { value: Date.now() - this.timestamp };

			var textureUniforms = {};
			textureUniforms.uTexture = { value: FBO.texture };
			textureUniforms.uTwitterTexture = { value: FBOTwitter.texture };
			// textureUniforms.uTextureReverse = {value: FBOReverse.texture};
			// textureUniforms.uTextureGirl = {value: FBOGirl.texture};

			var uniformsObj = Object.assign({}, boxUniforms, interactiveUniforms, resUniforms, textureUniforms, audioUniforms);

			var material = new THREE.ShaderMaterial({
				uniforms: uniformsObj,
				vertexShader: __webpack_require__(18),
				fragmentShader: __webpack_require__(19)
			});

			material.depthWrite = false;

			var plane = new THREE.PlaneBufferGeometry(window.innerWidth, window.innerHeight);

			this.quad = new THREE.Mesh(plane, material);
			this.quad.position.z = 0;
			this.scene.add(this.quad);

			window.addEventListener('mousemove', this.onMouseMove.bind(this));
		}

		_createClass(SceneImport, [{
			key: "getInitShaderUniforms",
			value: function getInitShaderUniforms(sceneInit) {

				var initUniforms = {};
				var gridUniform = {};
				Object.keys(sceneInit).forEach(function (t) {

					if (t === 'grid') {

						gridUniform[t] = { value: new THREE.Vector2(sceneInit[t][0], sceneInit[t][1]) };
					} else {
						var strTexture = t + 'Texture';
						initUniforms[strTexture] = { value: -1 };

						var strScale = t + 'Scale';
						initUniforms[strScale] = { value: 0 };

						var strRotation = t + 'RotDegree';
						initUniforms[strRotation] = { value: 0 };

						var textureCoeffStr = t + 'Coeff';
						initUniforms[textureCoeffStr] = { value: 0 };
					}
				});

				// const uniforms = {};
				// Object.keys(sceneVals).forEach(t => {

				// 	const strTexture = t + 'Texture';
				// 	uniforms[strTexture] = {value: sceneVals[t].texture};

				// 	const strScale = t + 'Scale';
				// 	uniforms[strScale] = {value: sceneVals[t].scale};

				// 	const strRotation = t + 'RotDegree';
				// 	uniforms[strRotation] = {value: sceneVals[t].rotation};

				// 	if (sceneVals[t].hasOwnProperty('textureCoeff')) {
				// 		const textureCoeffStr = t + 'Coeff';
				// 		uniforms[textureCoeffStr] = {value: sceneVals[t].textureCoeff};
				// 	}


				// });


				return Object.assign({}, initUniforms, gridUniform);
			}
		}, {
			key: "getShaderUniforms",
			value: function getShaderUniforms(sceneVals) {

				var uniforms = {};
				var gridUniform = {};
				Object.keys(sceneVals).forEach(function (t) {

					if (t === 'grid') {

						gridUniform[t] = { value: new THREE.Vector2(sceneVals[t][0], sceneVals[t][1]) };
					} else {

						var strTexture = t + 'Texture';
						uniforms[strTexture] = { value: sceneVals[t].texture };

						var strScale = t + 'Scale';
						uniforms[strScale] = { value: sceneVals[t].scale };

						var strRotation = t + 'RotDegree';
						uniforms[strRotation] = { value: sceneVals[t].rotation };

						if (sceneVals[t].hasOwnProperty('textureCoeff')) {
							var textureCoeffStr = t + 'Coeff';
							uniforms[textureCoeffStr] = { value: sceneVals[t].textureCoeff };
						}
					}
				});

				return Object.assign({}, uniforms, gridUniform);
			}
		}, {
			key: "onMouseMove",
			value: function onMouseMove(e) {

				this.lastMousePos.x = e.clientX;
				this.lastMousePos.y = e.clientY;
			}
		}, {
			key: "update",
			value: function update(audioData, sceneVals) {
				var _this = this;

				var boxUniforms = this.getShaderUniforms(sceneVals);

				Object.keys(boxUniforms).forEach(function (t) {

					_this.quad.material.uniforms[t].value = boxUniforms[t].value;
				});

				this.quad.material.uniforms.u_mouse.value = this.lastMousePos;
				this.quad.material.uniforms.u_time.value = (Date.now() - this.timestamp) / 10000;
				// console.log(this.quad.material.uniforms);
				this.quad.material.uniforms.u_res.value = new THREE.Vector2(window.innerWidth, window.innerHeight);

				this.quad.material.uniforms.audio_high.value = audioData[6];
				this.quad.material.uniforms.audio_deep.value = audioData[3];
			}
		}]);

		return SceneImport;
	}();

	exports.default = SceneImport;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "#define GLSLIFY 1\nvarying vec3 pos;\nvoid main() {\n\n\tpos = position;\n\t\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}"

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "#ifdef GL_ES\nprecision mediump float;\n#define GLSLIFY 1\n#endif\n\n#define PI 3.14159265359\n#define TWO_PI 6.28318530718\n\nuniform vec2 u_res;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform sampler2D uTexture;\nuniform sampler2D uTwitterTexture;\nuniform float audio_deep;\nuniform float audio_high;\nuniform vec2 grid;\n\nuniform float boxOneTexture;\nuniform float boxOneScale;\nuniform float boxOneRotDegree;\nuniform float boxOneCoeff;\n\nuniform float boxTwoTexture;\nuniform float boxTwoScale;\nuniform float boxTwoRotDegree;\nuniform float boxTwoCoeff;\n\nuniform float boxThreeTexture;\nuniform float boxThreeScale;\nuniform float boxThreeRotDegree;\nuniform float boxThreeCoeff;\n\nuniform float boxFourTexture;\nuniform float boxFourScale;\nuniform float boxFourRotDegree;\nuniform float boxFourCoeff;\n\nuniform float boxFiveTexture;\nuniform float boxFiveScale;\nuniform float boxFiveRotDegree;\nuniform float boxFiveCoeff;\n\nuniform float boxSixTexture;\nuniform float boxSixScale;\nuniform float boxSixRotDegree;\nuniform float boxSixCoeff;\n\nuniform float boxSevenTexture;\nuniform float boxSevenScale;\nuniform float boxSevenRotDegree;\nuniform float boxSevenCoeff;\n\nuniform float boxEightTexture;\nuniform float boxEightScale;\nuniform float boxEightRotDegree;\nuniform float boxEightCoeff;\n\nuniform float boxNineTexture;\nuniform float boxNineScale;\nuniform float boxNineRotDegree;\nuniform float boxNineCoeff;\n\n\n// 2D Random\nfloat random (in vec2 st) { \n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))\n                 * 43758.5453123);\n}\n\n// 2D Noise based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    // Smooth Interpolation\n\n    // Cubic Hermine Curve.  Same as SmoothStep()\n    vec2 u = f*f*(3.0-2.0*f);\n    // u = smoothstep(0.,1.,f);\n\n    // Mix 4 coorners porcentages\n    return mix(a, b, u.x) + \n            (c - a)* u.y * (1.0 - u.x) + \n            (d - b) * u.x * u.y;\n}\n\nvec2 rotate2D (vec2 _st, float _angle) {\n    _st -= 0.5;\n    _st =  mat2(cos(_angle),-sin(_angle),\n                sin(_angle),cos(_angle)) * _st;\n    _st += 0.5;\n    return _st;\n}\n\nfloat plot(vec2 st, float pct){\n  return  smoothstep( pct-0.01, pct, st.y) - \n          smoothstep( pct, pct+0.01, st.y);\n}\n\nvec3 colorA = vec3(0.149,0.141,0.912);\nvec3 colorB = vec3(1.000,0.833,0.224);\n\nvec3 hsb2rgb( in vec3 c ){\n    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),\n                             6.0)-3.0)-1.0, \n                     0.0, \n                     1.0 );\n    rgb = rgb*rgb*(3.0-2.0*rgb);\n    return c.z * mix(vec3(1.0), rgb, c.y);\n}\n\nfloat circle(in vec2 _st, in float _radius, float _radiusBlur){\n    vec2 dist = _st-vec2(0.5);\n  return 1.-smoothstep(_radius-(_radius*_radiusBlur),\n                         _radius+(_radius*_radiusBlur),\n                         dot(dist,dist)*4.0);\n}\n\nfloat box(in vec2 _st){\n\n  vec2 bl = smoothstep(vec2(0.0), vec2(.0),_st);       // bottom-left\n  vec2 tr = smoothstep(vec2(0.0), vec2(.0),1.0-_st);   // top-right\n  // color = vec3(bl.x * bl.y * tr.x * tr.y);\n  return bl.x * bl.y * tr.x * tr.y;\n}\n\n// YUV to RGB matrix\nmat3 yuv2rgb = mat3(1.0, 0.0, 1.13983, \n                    1.0, -0.39465, -0.58060, \n                    1.0, 2.03211, 0.0);\n\n// RGB to YUV matrix\nmat3 rgb2yuv = mat3(0.2126, 0.7152, 0.0722,\n                    -0.09991, -0.33609, 0.43600, \n                    0.615, -0.5586, -0.05639);\n\nmat2 scale(vec2 _scale){\n    return mat2(_scale.x,0.0,\n                0.0,_scale.y);\n}\n\n\nvoid main() {\n\tvec2 st = gl_FragCoord.xy/u_res.xy;\n    vec2 origSt = st;\n    \n\n    vec2 mouse = u_mouse.xy / u_res.xy;\n    // mouse.y -= 1.0;\n\n    vec3 textureColor = texture2D( uTexture, st ).rgb;\n\n    st *= grid;\n\n    vec2 fractSt = fract(st);\n\n    vec2 intSt = floor(st);\n\n    if (intSt.x == 0.0 && intSt.y == 0.0) {\n        fractSt = rotate2D(fractSt, boxOneRotDegree * PI);\n    }\n\n    if (intSt.x == 0.0 && intSt.y == 1.0) {\n        fractSt = rotate2D(fractSt, boxTwoRotDegree * PI);\n    }\n\n    if (intSt.x == 0.0 && intSt.y == 2.0) {\n        fractSt = rotate2D(fractSt, boxThreeRotDegree * PI);\n    }\n\n\n    if (intSt.x == 1.0 && intSt.y == 0.0) {\n        fractSt = rotate2D(fractSt, boxFourRotDegree * PI);\n    }\n\n    if (intSt.x == 1.0 && intSt.y == 1.0) {\n        fractSt = rotate2D(fractSt, boxFiveRotDegree * PI);\n    }\n\n    if (intSt.x == 1.0 && intSt.y == 2.0) {\n        fractSt = rotate2D(fractSt, boxSixRotDegree * PI);\n    }\n\n\n    if (intSt.x == 2.0 && intSt.y == 0.0) {\n        fractSt = rotate2D(fractSt, boxSevenRotDegree * PI);\n    }\n\n    if (intSt.x == 2.0 && intSt.y == 1.0) {\n        fractSt = rotate2D(fractSt, boxEightRotDegree * PI);\n    }\n\n    if (intSt.x == 2.0 && intSt.y == 2.0) {\n        fractSt = rotate2D(fractSt, boxNineRotDegree * PI);\n    }\n\n    textureColor = texture2D( uTexture,fractSt ).rgb;\n    \n\n    // st.x *= u_res.x/u_res.y;\n\n    // vec3 color = vec3(0.0);\n\n    // // Cell positions\n    // vec2 point[5];\n    // point[0] = vec2(0.83,0.75);\n    // point[1] = vec2(0.60 + abs(cos(u_time *PI)/10.0),0.07 + abs(sin(u_time *PI)/.8));\n    // point[2] = vec2(0.28 + sin(u_time *PI)/2.0,0.64 + cos(u_time *PI/3.0));\n    // point[3] =  vec2(0.31 + sin(u_time *PI)/1.5,0.26 + sin(u_time *PI/.5));\n    // point[4] = vec2(abs(sin(u_time *PI)/1.0), abs(sin(u_time *PI)/1.0));\n    \n    // float m_dist = 1.0;  // minimun distance\n\n    // // Iterate through the points positions\n    // for (int i = 0; i < 5; i++) {\n    //     float dist = distance(st, point[i]);\n        \n    //     // Keep the closer distance\n    //     m_dist = min(m_dist, dist);\n    // }\n    \n    // // Draw the min distance (distance field)\n    // color += m_dist;\n\n    // color += textureColor;\n\n    // color *= hsb2rgb(vec3(1.0, .5, max(.7, audio_high)));\n\n    \n    vec3 color = textureColor;\n\n    \n    gl_FragColor = vec4(color,1.0);\n}"

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SceneTwitter = function () {
		function SceneTwitter(FBO) {
			_classCallCheck(this, SceneTwitter);

			this.scene = new THREE.Scene();

			this.lastMousePos = new THREE.Vector2(0.0, 0.0);

			this.timestamp = Date.now();

			var canvas1 = document.createElement('canvas');
			var context1 = canvas1.getContext('2d');
			canvas1.height = 256;
			canvas1.width = 512;
			context1.font = "Bold 20px Futura";
			context1.fillStyle = "rgba(255,255,255,1.0)";
			context1.fillText('Hello, world!', 100, 40);

			// canvas contents will be used for a texture
			var texture1 = new THREE.Texture(canvas1);
			texture1.needsUpdate = true;

			var material1 = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });
			material1.transparent = true;

			var mesh1 = new THREE.Mesh(new THREE.PlaneGeometry(canvas1.width, canvas1.height), material1);
			mesh1.position.set(0, 50, 0);
			this.scene.add(mesh1);

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

		_createClass(SceneTwitter, [{
			key: 'update',
			value: function update() {}
		}]);

		return SceneTwitter;
	}();

	exports.default = SceneTwitter;

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AudioPlayer = function () {
		function AudioPlayer(ctx, onBufferLoadedCallback, callbackScope) {
			_classCallCheck(this, AudioPlayer);

			this._ctx = ctx;
			this._buffer = null;
			this._sourceNode = null;
			this._gainNode = null;
			this.paused = false;
			this.pausedTimestamp = undefined;
			this.startedTimestamp = undefined;
			this.triggeredPlay = false;

			this.isLoaded = false;

			this._onBufferLoadedCallback = onBufferLoadedCallback;
			this._callbackScope = callbackScope;
		}

		_createClass(AudioPlayer, [{
			key: 'load',
			value: function load(url) {

				var request = new XMLHttpRequest();
				request.open('GET', url, true);
				request.responseType = 'arraybuffer';
				var self = this;
				request.onload = function () {
					self._ctx.decodeAudioData(request.response, self.onBufferLoaded.bind(self), self.onBufferError.bind(self));
				};
				request.send();
			}
		}, {
			key: 'onBufferError',
			value: function onBufferError() {}
		}, {
			key: 'onBufferLoaded',
			value: function onBufferLoaded(buffer) {

				this._buffer = buffer;
				this.isLoaded = true;
				this._onBufferLoadedCallback.call(this._callbackScope);
			}
		}, {
			key: 'pause',
			value: function pause() {

				this._sourceNode.stop(0);
				this.pausedTimestamp = Date.now() - this.startedTimestamp;
				this.paused = true;
			}
		}, {
			key: 'reset',
			value: function reset() {

				this.pausedTimestamp = undefined;
			}
		}, {
			key: 'getSourceNode',
			value: function getSourceNode() {

				return this._sourceNode;
			}
		}, {
			key: 'play',
			value: function play(wait, vol) {

				this.triggeredPlay = true;

				this._gainNode = this._ctx.createGain();
				this._gainNode.gain.value = vol;

				this._sourceNode = this._ctx.createBufferSource();
				this._sourceNode.connect(this._gainNode);
				this._gainNode.connect(this._ctx.destination);
				// this._sourceNode.connect(this._ctx.destination);
				this._sourceNode.buffer = this._buffer;
				this.paused = false;

				if (this.pausedTimestamp !== undefined) {
					this.startedTimestamp = Date.now() - this.pausedTimestamp;
					this._sourceNode.start(0, this.pausedTimestamp / 1000);
				} else {

					if (wait) {
						var self = this;
						setTimeout(function () {
							self.startedTimestamp = Date.now();
							self._sourceNode.start(0);
						}, wait);
					} else {
						this.startedTimestamp = Date.now();
						this._sourceNode.start(0);
					}
				}
			}
		}]);

		return AudioPlayer;
	}();

	exports.default = AudioPlayer;

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//SpectrumAnalyzer.js

	var SpectrumAnalyzer = function () {
		function SpectrumAnalyzer() {
			_classCallCheck(this, SpectrumAnalyzer);

			this.node = null;
			this._parentEl = null;
			this._canvasObj = {};
			this._audioCtx = null;
			this._processArray = [];

			this._subbands = [];

			this.colorTheme = [];

			this._currMaxVal = 20;

			this._audioDataOut = [];
			this.subbandWidthTable = [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12];
			this._currentSubbandTotWidth = 0;

			this.SUBBANDS = 64;
			this.HISTORY_SIZE = 43;
		}

		_createClass(SpectrumAnalyzer, [{
			key: 'init',
			value: function init(ctx) {

				this.node = ctx.createAnalyser();
				this.node.fftSize = 2048;
				this.node.maxDecibels = -30;
				this.node.minDecibels = -100;
				this._audioCtx = ctx;
				// this._parentEl = parent;
				// this._canvasObj = this.createCanvasObj();
				this._processArray = new Uint8Array(this.node.frequencyBinCount);

				for (var i = 0; i < this.SUBBANDS; i++) {
					var historyArr = [];
					for (var k = 0; k < this.HISTORY_SIZE; k++) {
						var val = 0;
						historyArr.push(val);
					}

					var obj = {
						current: {
							sum: 0
						},
						history: {
							arr: historyArr,
							sum: 0
						},
						idx: i
					};
					this._subbands.push(obj);
				}

				this._scriptNode = this._audioCtx.createScriptProcessor(this.node.frequencyBinCount, 2, 1);
				// debugger;
				this._scriptNode.addEventListener('audioprocess', this._onAudioProcess.bind(this));
			}
		}, {
			key: '_onAudioProcess',
			value: function _onAudioProcess() {
				this.update();

				// this.render();
				this._audioDataOut = this.createAudioData();
			}
		}, {
			key: 'getAudioData',
			value: function getAudioData() {

				var audioData = [];
				if (this._audioDataOut.length > 8) {
					var subbands = [1, 2, 4, 6, 8, 20, 30, 40, 50, 60];

					for (var i = 0; i < subbands.length; i++) {
						audioData[i] = this._audioDataOut[0][subbands[i]];
					}

					// console.log(audioData);
				}

				return audioData.slice(0);
			}
		}, {
			key: 'connect',
			value: function connect(node) {

				node.connect(this.node);
				node.connect(this._scriptNode);

				this._scriptNode.connect(this._audioCtx.destination);
			}
		}, {
			key: 'disconnect',
			value: function disconnect(node) {

				node.disconnect(this.node);
				node.disconnect(this._scriptNode);

				this._scriptNode.disconnect(this._audioCtx.destination);
			}
		}, {
			key: 'update',
			value: function update() {

				this.node.getByteFrequencyData(this._processArray);
			}
		}, {
			key: 'createAudioData',
			value: function createAudioData() {

				var ret = [];

				this.calcSubbandEnergy();
				this.calcSubbandHistoryAverage();
				this.shiftHistory();

				var subbandRangeAverageSum = 0;
				var subbandRangeCurrentSum = 0;

				var currentRow = new Float32Array(this.SUBBANDS);
				for (var i = 0; i < this._subbands.length; i++) {

					var currentSum = this._subbands[i].current.sum;
					var averageSum = this._subbands[i].history.sum;

					// ret[i] = {};
					// ret[i].current = currentSum;
					currentRow[i] = currentSum;
				}

				ret.push(currentRow);

				// var historyRows = [];
				for (var i = 0; i < 11; i++) {
					var historySubband = new Float32Array(this.SUBBANDS);
					for (var x = 0; x < this._subbands.length; x++) {
						historySubband[x] = this._subbands[x].history.arr[i];
					}
					ret.push(historySubband);
					// historyRows[i] = historySubband;
				}

				return ret;
			}
		}, {
			key: 'getFreqFromFFTIdx',
			value: function getFreqFromFFTIdx(idx) {

				var ret = false;

				if (idx < 512) {
					ret = idx * this._audioCtx.sampleRate / this.node.frequencyBinCount;
				}

				return ret;
			}
		}, {
			key: 'calcSubbandEnergy',
			value: function calcSubbandEnergy() {

				this._currentSubbandTotWidth = 0;

				for (var i = 0; i < this._subbands.length; i++) {

					var subbandSize = this.subbandWidthTable[i];

					var obj = this._subbands[i].current;
					obj.sum = 0;
					obj.width = subbandSize;

					var range = this._currentSubbandTotWidth;

					for (var k = range; k < range + subbandSize; k++) {
						obj.sum += this._processArray[k];
						// console.log(k);
					}
					var startFreq = this.getFreqFromFFTIdx(range);
					var endFreq = this.getFreqFromFFTIdx(range + subbandSize);

					obj.sum *= subbandSize / (this.node.fftSize / 2);

					this._currentSubbandTotWidth += obj.width;
				}
			}
		}, {
			key: 'calcSubbandHistoryAverage',
			value: function calcSubbandHistoryAverage() {

				for (var i = 0; i < this._subbands.length; i++) {

					var subbandHistory = this._subbands[i].history.arr;
					var subbandHistorySum = this._subbands[i].history.sum;

					for (var k = 0; k < subbandHistory.length - 1; k++) {
						subbandHistorySum += subbandHistory[k];
					}
					subbandHistorySum *= 1 / subbandHistory.length;

					this._subbands[i].history.sum = subbandHistorySum;
				}
			}
		}, {
			key: 'shiftHistory',
			value: function shiftHistory() {

				var subbandTempArr = this._subbands.slice();

				for (var i = 0; i < this._subbands.length; i++) {

					var historyArr = this._subbands[i].history.arr;
					historyArr.unshift(subbandTempArr[i].current.sum);
					if (historyArr.length > this.HISTORY_SIZE) historyArr.pop();
				}
			}
		}]);

		return SpectrumAnalyzer;
	}();

	// function SpectrumAnalyzer(){

	// 	this.node = null;
	// 	this._parentEl = null;
	// 	this._canvasObj = {};
	// 	this._audioCtx = null;
	// 	this._processArray = [];

	// 	this._subbands = [];


	// 	this.colorTheme = [];

	// 	this._currMaxVal = 20;

	// 	this._audioDataOut = [];
	// 	this.subbandWidthTable = [2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12];
	// 	this._currentSubbandTotWidth = 0;

	// 	// console.log(this._subbandsHistory);

	// };

	// var p = SpectrumAnalyzer.prototype;

	// SpectrumAnalyzer.SUBBANDS = 64;
	// SpectrumAnalyzer.HISTORY_SIZE = 43;

	// p.init = function(ctx){

	// 	this.node = ctx.createAnalyser();
	// 	this.node.fftSize = 2048;
	// 	this.node.maxDecibels = -30;
	// 	this.node.minDecibels = -100;
	// 	this._audioCtx = ctx;
	// 	// this._parentEl = parent;
	// 	// this._canvasObj = this.createCanvasObj();
	// 	this._processArray = new Uint8Array(this.node.frequencyBinCount);


	// 	for (var i=0; i<SpectrumAnalyzer.SUBBANDS;i++){
	// 		var historyArr = [];
	// 		for (var k=0;k<SpectrumAnalyzer.HISTORY_SIZE;k++){
	// 			var val = 0;
	// 			historyArr.push(val);
	// 		}

	// 		var obj = {
	// 			current:{
	// 				sum: 0
	// 			},
	// 			history:{
	// 				arr : historyArr,
	// 				sum : 0 
	// 			},
	// 			idx:i
	// 		};
	// 		this._subbands.push(obj);

	// 	}


	// 	this._scriptNode = this._audioCtx.createScriptProcessor(this.node.frequencyBinCount,2,1);
	// 	// debugger;
	// 	this._scriptNode.addEventListener('audioprocess', this._onAudioProcess.bind(this));

	// };

	// p.createCanvasObj = function(){

	// 	var canvas = document.createElement('canvas');
	// 	canvas.className = "waveformAnalyser";
	// 	canvas.height = this._parentEl.clientHeight;
	// 	canvas.width = this._parentEl.clientWidth;
	// 	this._parentEl.appendChild(canvas);
	// 	var context = canvas.getContext("2d");

	// 	return {el: canvas, ctx: context};

	// };

	// p._onAudioProcess = function(e){

	// 	// debugger;

	// 	this.update();

	// 	// this.render();
	// 	this._audioDataOut = this.createAudioData();
	// };

	// p.getAudioData = function(){

	// 	// return this._audioDataOut.slice(0);


	// 	var audioData = [];
	// 	if (this._audioDataOut.length > 8){
	// 		var subbands = [1, 2, 4, 6, 8, 20, 30, 40, 50, 60];


	// 		for (var i=0;i<subbands.length;i++){
	// 			audioData[i] = this._audioDataOut[0][subbands[i]];
	// 		}

	// 		// console.log(audioData);
	// 	}

	// 	return audioData.slice(0);
	// };

	// p.connect = function(node){

	// 	node.connect(this.node);
	// 	node.connect(this._scriptNode);

	// 	this._scriptNode.connect(this._audioCtx.destination);

	// };

	// p.disconnect = function(node){

	// 	node.disconnect(this.node);
	// 	node.disconnect(this._scriptNode);

	// 	this._scriptNode.disconnect(this._audioCtx.destination);
	// };

	// p.update = function(){

	// 	// this.node.getFloatFrequencyData(this._processArray);
	// 	this.node.getByteFrequencyData(this._processArray);

	// 	// console.log(this._processArray);

	// };

	// p.createAudioData = function(){

	// 	// var ret = new Float32Array(SpectrumAnalyzer.SUBBANDS*3);
	// 	var ret = [];

	// 	this.calcSubbandEnergy();
	// 	this.calcSubbandHistoryAverage();
	// 	this.shiftHistory();

	// 	var subbandRangeAverageSum = 0;
	// 	var subbandRangeCurrentSum = 0;


	// 	var currentRow = new Float32Array(SpectrumAnalyzer.SUBBANDS);
	// 	for (var i=0;i<this._subbands.length;i++){

	// 		var currentSum = this._subbands[i].current.sum;
	// 		var averageSum = this._subbands[i].history.sum;

	// 		// ret[i] = {};
	// 		// ret[i].current = currentSum;
	// 		currentRow[i] = currentSum;


	// 	}

	// 	ret.push(currentRow);

	// 	// var historyRows = [];
	// 	for (var i=0;i<11;i++){
	// 		var historySubband = new Float32Array(SpectrumAnalyzer.SUBBANDS);
	// 		for (var x=0;x<this._subbands.length;x++){
	// 			historySubband[x] = this._subbands[x].history.arr[i]
	// 		}
	// 		ret.push(historySubband)
	// 		// historyRows[i] = historySubband;
	// 	}


	// 	return ret;
	// 	// debugger;
	// 	// window.onAudioData(ret);
	// };

	// p.getFreqFromFFTIdx = function(idx){

	// 	var ret = false;

	// 	if (idx < 512){
	// 		ret = idx * this._audioCtx.sampleRate / this.node.frequencyBinCount;
	// 	}

	// 	return ret;
	// };

	// p.render = function(){

	// 	var ctx = this._canvasObj.ctx;
	// 	var canvas = this._canvasObj.el;

	// 	this.calcSubbandEnergy();
	// 	this.calcSubbandHistoryAverage();
	// 	this.shiftHistory();

	// 	var subbandWidth = canvas.width / this._subbands.length;

	// 	ctx.clearRect(0,0,canvas.width, canvas.height);

	// 	var subbandRangeAverageSum = 0;
	// 	var subbandRangeCurrentSum = 0;

	// 	var wHeight = window.innerHeight * 2;

	// 	for (var i=0;i<this._subbands.length;i++){

	// 		var currentSum = this._subbands[i].current.sum;
	// 		var averageSum = this._subbands[i].history.sum;

	// 		if (currentSum > this._currMaxVal)
	// 			this._currMaxVal = currentSum;

	// 		var relHeightCurrent = currentSum / this._currMaxVal;
	// 		relHeightCurrent = relHeightCurrent * wHeight;

	// 		var relHeightAverage = averageSum / this._currMaxVal;
	// 		relHeightAverage = relHeightAverage * wHeight;

	// 		ctx.font = '10px Arial';
	// 		ctx.fillStyle = this.colorTheme[1];
	// 		ctx.fillText(i+1,subbandWidth*i+subbandWidth/4, 20);

	// 		ctx.fillStyle = this.colorTheme[2];
	// 		ctx.fillRect(subbandWidth*i, canvas.height, subbandWidth, -relHeightCurrent);

	// 		ctx.fillStyle = this.colorTheme[3];
	// 		ctx.fillRect(subbandWidth*i, canvas.height, subbandWidth, -relHeightAverage);

	// 	}

	// };


	// p.calcSubbandEnergy = function(){


	// 	this._currentSubbandTotWidth = 0;


	// 	for (var i=0;i<this._subbands.length;i++){

	// 		var subbandSize = this.subbandWidthTable[i];

	// 		var obj = this._subbands[i].current;
	// 		obj.sum = 0;
	// 		obj.width = subbandSize;


	// 		var range = this._currentSubbandTotWidth;


	// 		for (var k=range;k<range+subbandSize;k++){
	// 			obj.sum += this._processArray[k];
	// 			// console.log(k);

	// 		}
	// 		var startFreq = this.getFreqFromFFTIdx(range);
	// 		var endFreq = this.getFreqFromFFTIdx(range+subbandSize);


	// 		obj.sum *= subbandSize/(this.node.fftSize/2);

	// 		this._currentSubbandTotWidth += obj.width;

	// 	}
	// };

	// p.calcSubbandHistoryAverage = function(){

	// 	for (var i=0;i<this._subbands.length;i++){

	// 		var subbandHistory = this._subbands[i].history.arr;
	// 		var subbandHistorySum = this._subbands[i].history.sum;

	// 		for (var k=0;k<subbandHistory.length-1;k++){
	// 			subbandHistorySum += subbandHistory[k];

	// 		}
	// 		subbandHistorySum *= 1/subbandHistory.length;

	// 		this._subbands[i].history.sum = subbandHistorySum;


	// 	}

	// };


	// p.shiftHistory = function(){


	// 	var subbandTempArr = this._subbands.slice();

	// 	for (var i=0;i<this._subbands.length;i++){

	// 		var historyArr = this._subbands[i].history.arr;
	// 		historyArr.unshift(subbandTempArr[i].current.sum);
	// 		if (historyArr.length > SpectrumAnalyzer.HISTORY_SIZE)
	// 			historyArr.pop();


	// 	}


	// };

	// module.exports = SpectrumAnalyzer;


	exports.default = SpectrumAnalyzer;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SceneGif = function () {
		function SceneGif() {
			_classCallCheck(this, SceneGif);

			this.scene = new THREE.Scene();

			this.video = document.createElement('video');
			this.video.src = "assets/giphy.mp4";
			this.video.load(); // must call after setting/changing source
			this.video.play();
			this.video.loop = true;
			var videoImage = document.createElement('canvas');
			videoImage.width = 480;
			videoImage.height = 480;

			this.videoImageContext = videoImage.getContext('2d');
			// background color if no video present
			this.videoImageContext.fillStyle = '#000000';
			this.videoImageContext.fillRect(0, 0, videoImage.width, videoImage.height);

			this.videoTexture = new THREE.Texture(videoImage);
			this.videoTexture.minFilter = THREE.LinearFilter;
			this.videoTexture.magFilter = THREE.LinearFilter;

			var resUniforms = {};
			resUniforms.u_res = { value: new THREE.Vector2(400, 400) };

			var textureUniforms = {};
			textureUniforms.uTexture = { value: this.videoTexture };

			var uniformsObj = Object.assign({}, resUniforms, textureUniforms);

			var material = new THREE.ShaderMaterial({
				uniforms: uniformsObj,
				vertexShader: __webpack_require__(18),
				fragmentShader: __webpack_require__(24)
			});

			// var plane = new THREE.PlaneBufferGeometry(400, 400);
			var movieMaterial = new THREE.MeshBasicMaterial({ map: this.videoTexture, transparent: true, overdraw: true, side: THREE.DoubleSide });
			movieMaterial.depthWrite = false;
			var movieGeometry = new THREE.PlaneGeometry(200, 200, 4, 4);

			this.quad = new THREE.Mesh(movieGeometry, movieMaterial);
			this.quad.position.y = 0;
			this.quad.position.z = 1000;
			this.scene.add(this.quad);
		}

		_createClass(SceneGif, [{
			key: 'update',
			value: function update() {
				if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {

					this.videoImageContext.drawImage(this.video, 0, 0);
					this.videoTexture.needsUpdate = true;
				}
			}
		}]);

		return SceneGif;
	}();

	exports.default = SceneGif;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "#ifdef GL_ES\nprecision mediump float;\n#define GLSLIFY 1\n#endif\n\n#define PI 3.14159265359\n#define TWO_PI 6.28318530718\n\nuniform vec2 u_res;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform sampler2D uTexture;\n\nvoid main() {\n\tvec2 st = gl_FragCoord.xy/u_res.xy;\n    vec2 origSt = st;\n    \n    vec3 textureColor = texture2D( uTexture, st ).rgb;\n    \n    gl_FragColor = vec4(textureColor,1.0);\n}"

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SceneCube = function () {
		function SceneCube() {
			_classCallCheck(this, SceneCube);

			this.scene = new THREE.Scene();

			this.start_time = Date.now();

			// urls of the images,
			// one per half axis
			var urls = ['assets/Yokohama3/posx.jpg', 'assets/Yokohama3/negx.jpg', 'assets/Yokohama3/posy.jpg', 'assets/Yokohama3/negy.jpg', 'assets/Yokohama3/posz.jpg', 'assets/Yokohama3/negz.jpg'];

			// wrap it up into the object that we need
			var cubemap = THREE.ImageUtils.loadTextureCube(urls);

			// set the format, likely RGB
			// unless you've gone crazy
			cubemap.format = THREE.RGBFormat;

			// following code from https://github.com/mrdoob/three.js/blob/master/examples/webgl_materials_cubemap.html
			// var shader = THREE.ShaderUtils.lib[ "cube" ];
			// shader.uniforms[ "tCube" ].texture = cubemap;

			var textureUniforms = {};
			textureUniforms.tCube = { value: cubemap };
			// textureUniforms.uTextureReverse = {value: FBOReverse.texture};
			// textureUniforms.uTextureGirl = {value: FBOGirl.texture};

			var uniformsObj = Object.assign({}, textureUniforms);

			// var material = new THREE.ShaderMaterial({
			// 	uniforms: uniformsObj,
			// 	vertexShader: require("../../shaders/cube.vert"),
			// 	fragmentShader: require("../../shaders/cube.frag"),
			// 	depthWrite: false
			// });

			// var geometry = new THREE.CubeGeometry( 50, 50, 50 );
			//       // var skybox = new THREE.Mesh( new THREE.CubeGeometry( 100000, 100000, 100000, 1, 1, 1, null, true ), material );
			//       // skybox.flipSided = true;
			//       var skybox = new THREE.Mesh( geometry, material );

			// skybox
			var shader = THREE.ShaderLib["cube"];
			shader.uniforms["tCube"].value = cubemap;
			var material = new THREE.ShaderMaterial({
				fragmentShader: shader.fragmentShader,
				vertexShader: shader.vertexShader,
				uniforms: shader.uniforms,
				depthWrite: false,
				side: THREE.BackSide
			});

			var skybox = new THREE.Mesh(new THREE.CubeGeometry(5000, 5000, 5000), material);

			this.scene.add(skybox);

			// const uniformsObj = {};

			var materialBase = new THREE.ShaderMaterial({
				uniforms: uniformsObj,
				vertexShader: __webpack_require__(18),
				fragmentShader: __webpack_require__(26)
			});

			material.depthWrite = false;

			var plane = new THREE.PlaneBufferGeometry(window.innerWidth / 2, window.innerHeight / 2);

			this.quad = new THREE.Mesh(plane, materialBase);
			// this.quad.position.x = 300;
			this.quad.position.y = -480;
			this.quad.position.z = -4000;
			this.scene.add(this.quad);
		}

		_createClass(SceneCube, [{
			key: 'update',
			value: function update(renderer, pos) {}
		}]);

		return SceneCube;
	}();

	exports.default = SceneCube;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform vec2 u_res;\n\nuniform sampler2D texture_one;\nuniform sampler2D texture_two;\nuniform sampler2D texture_three;\nuniform sampler2D texture_tubes;\n\nuniform float voronoiOneSize;\nuniform float voronoiTwoSize;\nuniform float voronoiOneOffset;\nuniform float voronoiTwoOffset;\nuniform float voronoiOneSpeed;\nuniform float voronoiTwoSpeed;\n\nuniform float u_time;\n\nvarying vec3 pos;\n\nvec2 random2( vec2 p ) {\n    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);\n}\n\n\nvoid main() {\n\n\tvec3 pos_norm = normalize(pos);\n\n\t// float s = .2;\n\t// float t = .2;\n\t// float r = 2000.0;\n\n\t// float x = r * cos(s) * sin(t);\n\t// float y = r * sin(s) * sin(t);\n\t// float z = r * cos(t);\n\n\n\tvec3 targetPoints[4];\n\n\ttargetPoints[0] = vec3(10.0, 100.0, 200.0);\n\ttargetPoints[1] = vec3(100.0, 1000.0, 10.0);\n\ttargetPoints[2] = vec3(1.0, 10.0, 1000.0);\n\ttargetPoints[3] = vec3(100.0, 300.0, 400.0);\n\n\n\t// vec3 testPoint = vec3(10.0, 10.0, 200.0);\n\n\t// vec3 testPointNorm = normalize(testPoint);\n\n\t// vec3 point = vec3(x, y, z);\n\n    vec2 coord = vec2(((atan(pos_norm.z, pos_norm.x) + .0001) / 3.14159265 + 1.0) * 0.5, asin(pos_norm.y) / 3.14159265 + 0.5 );\n\n    // Scale \n    vec2 scaledCoordOne = coord * voronoiOneSize;\n    vec2 scaledCoordTwo = coord * voronoiTwoSize;\n\n    vec3 voronoiOne = vec3(.0);\n    vec3 voronoiTwo = vec3(.0);\n\n\n    vec2 i_st_one = floor(scaledCoordOne);\n    vec2 f_st_one = fract(scaledCoordOne);\n\n    vec2 i_st_two = floor(scaledCoordTwo);\n    vec2 f_st_two = fract(scaledCoordTwo);\n\n    // vec2 point = random2(i_st);\n    // vec3 spherePoint = vec3(point, 2000.0);\n    // vec3 normSpherePoint = normalize(spherePoint);\n    // vec2 sphereCoord = vec2(((atan(normSpherePoint.z, normSpherePoint.x) + .0001) / 3.14159265 + 1.0) * 0.5, asin(normSpherePoint.y) / 3.14159265 + 0.5 );\n\n\n    float m_dist = 5.;  // minimun distance\n    vec2 m_point;\n    \n    for (int j=-1; j<=1; j++ ) {\n        for (int i=-1; i<=1; i++ ) {\n            vec2 neighbor = vec2(float(i),float(j));\n            vec2 point = random2(i_st_one + neighbor);\n            // vec3 spherePoint = vec3(point, 200.0);\n            point = 0.5 + 0.5*sin((u_time * voronoiOneSpeed) + 6.2831*point);\n            vec2 diff = neighbor + point - f_st_one;\n            float dist = length(diff);\n\n            if( dist < m_dist ) {\n                m_dist = dist;\n                m_point = point;\n            }\n        }\n    }\n\n    voronoiOne += dot(m_point, vec2(.0, 4.0));\n\n    for (int j=-1; j<=1; j++ ) {\n        for (int i=-1; i<=1; i++ ) {\n            vec2 neighbor = vec2(float(i),float(j));\n            vec2 point = random2(i_st_two + neighbor);\n            // vec3 spherePoint = vec3(point, 200.0);\n            point = 0.5 + 0.5*sin((u_time * voronoiTwoSpeed) + 6.2831*point);\n            vec2 diff = neighbor + point - f_st_two;\n            float dist = length(diff);\n\n            if( dist < m_dist ) {\n                m_dist = dist;\n                m_point = point;\n            }\n        }\n    }\n\n    // Assign a color using the closest point position\n    \n    voronoiTwo += dot(m_point, vec2(.0, 4.0));\n\n\n    // float m_dist = 1.;  // minimun distance\n\n    // Iterate through the points positions\n    // for (int i = 0; i < 4; i++) {\n\n    // \tvec3 targetPointNorm = normalize(targetPoints[i]);\n\n    // \tvec2 spherePoint = vec2(((atan(targetPointNorm.z, targetPointNorm.x) + .0001) / 3.14159265 + 1.0) * 0.5, asin(targetPointNorm.y) / 3.14159265 + 0.5 );\n\n    // \tfloat dist = distance(coord, spherePoint);\n    \n    // \tm_dist = min(m_dist, dist);\n    // }\n\n    // vec3 color = vec3(.0);\n\n    // color += m_dist;\n\n    float midNormalizedX = (.5 - abs((f_st_one.x - .5))) * 2.0; \n    float yCoord = coord.y + sin(u_time * 2.0) * (midNormalizedX / 120.0);\n\n    float midNormalizedY = (.5 - abs((f_st_one.y - .5))) * 1.5; \n    float xCoord = coord.x + sin(u_time * 5.0) * (midNormalizedY / 120.0);\n\n\n\n\tvec4 textureColorOne = texture2D( texture_one, coord ).rgba;\n\tvec4 textureColorTwo = texture2D( texture_two, coord ).rgba;\n\tvec4 textureColorThree = texture2D( texture_three, coord ).rgba;\n\tvec4 textureTubes = texture2D( texture_tubes, vec2(xCoord, yCoord) ).rgba;\n\n\t// vec3 invertedColor = vec3(1.0 - color.r, 1.0 - color.g, 1.0 - color.b);\n\n\tvec4 finalColorOne = mix(vec4(textureColorOne.rgb, 1.0), vec4(textureColorTwo.rgb, 1.0), clamp(1.0 - voronoiOne.r, 0.0, 1.0));\n\tvec4 finalColorTwo = mix(vec4(textureColorOne.rgb, 1.0), vec4(textureColorThree.rgb, 1.0), clamp(1.0 - voronoiTwo.r, 0.0, 1.0));\n\n    gl_FragColor = mix(mix(finalColorTwo, finalColorOne, finalColorOne.a - .5), textureTubes, textureTubes.a);\n\t// gl_FragColor = vec4(finalColorTwo.rgb/2.0 + finalColorOne.rgb/2.0, 1.0) + textureTubes;\n\t// gl_FragColor = vec4(voronoiTwo + voronoiOne, 1.0);\n\n\t// gl_FragColor = vec4(1.0 - color.r , 1.0 - color.g, 1.0 - color.b, 1.0);\n\n}\n\n"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SceneSphere = function () {
		function SceneSphere(gui, FBO) {
			_classCallCheck(this, SceneSphere);

			this.scene = new THREE.Scene();

			this.start_time = Date.now();

			// urls of the images,
			// one per half axis
			this.timestamp = Date.now();

			this.gui = gui;

			// wrap it up into the object that we need
			var layer1 = THREE.ImageUtils.loadTexture('assets/newtest/layer1.jpg');
			var layer2 = THREE.ImageUtils.loadTexture('assets/newtest/layer2.jpg');
			var layer3 = THREE.ImageUtils.loadTexture('assets/newtest/layer3.jpg');
			var tubes = THREE.ImageUtils.loadTexture('assets/newtest/tubes.png');

			layer1.format = THREE.RGBAFormat;
			layer2.format = THREE.RGBAFormat;
			layer3.format = THREE.RGBAFormat;
			tubes.format = THREE.RGBAFormat;

			var textureUniforms = {};
			textureUniforms.texture_one = { value: layer1 };
			textureUniforms.texture_two = { value: layer2 };
			textureUniforms.texture_three = { value: layer3 };
			textureUniforms.texture_tubes = { value: tubes };

			var resUniforms = {};
			resUniforms.u_res = { value: new THREE.Vector2(window.innerWidth, window.innerHeight) };
			// // textureUniforms.uTextureReverse = {value: FBOReverse.texture};
			// // textureUniforms.uTextureGirl = {value: FBOGirl.texture};
			resUniforms.u_time = { value: Date.now() - this.timestamp };

			var interactiveUniforms = {};

			for (var key in this.gui) {
				interactiveUniforms[key] = { value: this.gui[key] };
			}

			var uniformsObj = Object.assign({}, textureUniforms, resUniforms, interactiveUniforms);

			// var ambientLight = new THREE.AmbientLight(0x333333);
			// this.scene.add(ambientLight);

			var geometry = new THREE.SphereGeometry(4000, 120, 80);
			// var material = new THREE.MeshBasicMaterial();
			// material.map = THREE.ImageUtils.loadTexture("assets/test2.jpg");
			// material.side = THREE.BackSide;


			var material = new THREE.ShaderMaterial({
				uniforms: uniformsObj,
				vertexShader: __webpack_require__(18),
				fragmentShader: __webpack_require__(26)
			});

			material.side = THREE.BackSide;
			this.skydome = new THREE.Mesh(geometry, material);

			this.scene.add(this.skydome);
		}

		_createClass(SceneSphere, [{
			key: 'update',
			value: function update(renderer, pos) {

				this.skydome.material.uniforms.u_time.value = (Date.now() - this.timestamp) / 10000;

				for (var key in this.gui) {
					this.skydome.material.uniforms[key].value = this.gui[key];
				}
			}
		}]);

		return SceneSphere;
	}();

	exports.default = SceneSphere;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SceneRefract = function () {
		function SceneRefract(gui) {
			_classCallCheck(this, SceneRefract);

			this.scene = new THREE.Scene();

			this.lastMousePos = new THREE.Vector2(0.0, 0.0);

			this.timestamp = Date.now();

			this.gui = gui;

			var resUniforms = {};
			resUniforms.u_res = { value: new THREE.Vector2(window.innerWidth, window.innerHeight) };

			var interactiveUniforms = {};
			interactiveUniforms.u_mouse = { value: this.lastMousePos };
			interactiveUniforms.u_time = { value: Date.now() - this.timestamp };

			var bg = THREE.ImageUtils.loadTexture('assets/newtest/layer1.jpg');

			bg.format = THREE.RGBAFormat;

			var textureUniforms = {};
			textureUniforms.uTexture = { value: bg };

			for (var key in this.gui) {
				interactiveUniforms[key] = { value: this.gui[key] };
			}

			var uniformsObj = Object.assign({}, interactiveUniforms, resUniforms, textureUniforms);

			var material = new THREE.ShaderMaterial({
				uniforms: uniformsObj,
				vertexShader: __webpack_require__(18),
				fragmentShader: __webpack_require__(29)
			});

			material.depthWrite = false;

			var plane = new THREE.PlaneBufferGeometry(window.innerWidth, window.innerHeight);

			this.quad = new THREE.Mesh(plane, material);
			this.quad.position.z = 0;
			this.scene.add(this.quad);

			window.addEventListener('mousemove', this.onMouseMove.bind(this));
		}

		_createClass(SceneRefract, [{
			key: "onMouseMove",
			value: function onMouseMove(e) {

				this.lastMousePos.x = e.clientX;
				this.lastMousePos.y = e.clientY;
			}
		}, {
			key: "update",
			value: function update(audioData, sceneVals) {

				this.quad.material.uniforms.u_mouse.value = this.lastMousePos;
				this.quad.material.uniforms.u_time.value = (Date.now() - this.timestamp) / 10000;
				this.quad.material.uniforms.u_res.value = new THREE.Vector2(window.innerWidth, window.innerHeight);

				for (var key in this.gui) {
					this.quad.material.uniforms[key].value = this.gui[key];
				}
			}
		}]);

		return SceneRefract;
	}();

	exports.default = SceneRefract;

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform sampler2D uTexture;\nuniform vec2 u_res;\nuniform float u_time;\n\nuniform float refractX;\nuniform float refractY;\nuniform float refractFreq;\n\n\nvec4 spline(float x, vec4 c1, vec4 c2, vec4 c3, vec4 c4, vec4 c5, vec4 c6, vec4 c7, vec4 c8, vec4 c9)\n{\n  float w1, w2, w3, w4, w5, w6, w7, w8, w9;\n  w1 = 0.0;\n  w2 = 0.0;\n  w3 = 0.0;\n  w4 = 0.0;\n  w5 = 0.0;\n  w6 = 0.0;\n  w7 = 0.0;\n  w8 = 0.0;\n  w9 = 0.0;\n  float tmp = x * 8.0;\n  if (tmp<=1.0) {\n    w1 = 1.0 - tmp;\n    w2 = tmp;\n  }\n  else if (tmp<=2.0) {\n    tmp = tmp - 1.0;\n    w2 = 1.0 - tmp;\n    w3 = tmp;\n  }\n  else if (tmp<=3.0) {\n    tmp = tmp - 2.0;\n    w3 = 1.0-tmp;\n    w4 = tmp;\n  }\n  else if (tmp<=4.0) {\n    tmp = tmp - 3.0;\n    w4 = 1.0-tmp;\n    w5 = tmp;\n  }\n  else if (tmp<=5.0) {\n    tmp = tmp - 4.0;\n    w5 = 1.0-tmp;\n    w6 = tmp;\n  }\n  else if (tmp<=6.0) {\n    tmp = tmp - 5.0;\n    w6 = 1.0-tmp;\n    w7 = tmp;\n  }\n  else if (tmp<=7.0) {\n    tmp = tmp - 6.0;\n    w7 = 1.0 - tmp;\n    w8 = tmp;\n  }\n  else \n  {\n    //tmp = saturate(tmp - 7.0);\n    // http://www.ozone3d.net/blogs/lab/20080709/saturate-function-in-glsl/\n    tmp = clamp(tmp - 7.0, 0.0, 1.0);\n    w8 = 1.0-tmp;\n    w9 = tmp;\n  }\n  return w1*c1 + w2*c2 + w3*c3 + w4*c4 + w5*c5 + w6*c6 + w7*c7 + w8*c8 + w9*c9;\n}\n\n\nvec2 random2( vec2 p ) {\n    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);\n}\n\n \nvoid main() {\n\n\tfloat PixelX = refractX;\n\tfloat PixelY = refractY;\n\tfloat Freq = refractFreq;\n\n\tvec2 st = gl_FragCoord.xy/u_res.xy;\n\n\tvec2 uv = st;\n\tvec3 tc = vec3(1.0, 0.0, 0.0);\n\n\tfloat DeltaX = PixelX / u_res.x;\n\tfloat DeltaY = PixelY / u_res.y;\n\tvec2 ox = vec2(DeltaX,0.0);\n\tvec2 oy = vec2(0.0,DeltaY);\n\tvec2 PP = uv - oy;\n\tvec4 C00 = texture2D(uTexture,PP - ox);\n\tvec4 C01 = texture2D(uTexture,PP);\n\tvec4 C02 = texture2D(uTexture,PP + ox);\n\tPP = uv;\n\tvec4 C10 = texture2D(uTexture,PP - ox);\n\tvec4 C11 = texture2D(uTexture,PP);\n\tvec4 C12 = texture2D(uTexture,PP + ox);\n\tPP = uv + oy;\n\tvec4 C20 = texture2D(uTexture,PP - ox);\n\tvec4 C21 = texture2D(uTexture,PP);\n\tvec4 C22 = texture2D(uTexture,PP + ox);\n\n\tfloat n = random2(Freq * uv).y;\n\tn = mod(n, 0.111111)/0.111111;\n\tvec4 result = spline(n,C00,C01,C02,C10,C11,C12,C20,C21,C22);\n\ttc = mix(result.rgb, vec3(1.0, 0.0, .8), .1);\n\n\tgl_FragColor = vec4(tc, 1.0);\n\n\t// gl_FragColor = texture2D(uTexture, st);\n\n}\n"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SceneHero = function () {
		function SceneHero(gui) {
			_classCallCheck(this, SceneHero);

			this.scene = new THREE.Scene();

			this.lastMousePos = new THREE.Vector2(0.0, 0.0);

			this.timestamp = Date.now();

			this.gui = gui;

			this.render = false;

			var jsonLoader = new THREE.JSONLoader();
			jsonLoader.load("assets/imports/mech-flower.js", this.onLoaded.bind(this));

			window.addEventListener('mousemove', this.onMouseMove.bind(this));
		}

		_createClass(SceneHero, [{
			key: "onLoaded",
			value: function onLoaded(geometry, materials) {

				// this.scene.add(this.cubeCamera);

				var resUniforms = {};
				resUniforms.u_res = { value: new THREE.Vector2(window.innerWidth, window.innerHeight) };

				var interactiveUniforms = {};
				interactiveUniforms.u_mouse = { value: this.lastMousePos };
				interactiveUniforms.u_time = { value: Date.now() - this.timestamp };
				interactiveUniforms.audioVal = { value: 0 };
				interactiveUniforms.color = { value: new THREE.Vector3(1.0, .2, 1.0) };
				interactiveUniforms.noiseOffset = { value: new THREE.Vector2(200.0, 100.0) };
				// interactiveUniforms.drumsVal = {value: 0};
				// interactiveUniforms.voicesVal = {value: 0};

				var textureUniforms = {};

				var uniformsObj = Object.assign({}, interactiveUniforms, resUniforms, textureUniforms);

				var material = new THREE.ShaderMaterial({
					uniforms: uniformsObj,
					vertexShader: __webpack_require__(31),
					fragmentShader: __webpack_require__(32)
				});

				this.mesh = new THREE.Mesh(geometry, material);

				// this.mesh.position.y = -55;
				this.mesh.scale.x = .5;
				this.mesh.scale.y = .5;
				this.mesh.scale.z = .5;
				this.mesh.position.y = -130;
				this.mesh.position.z = 0;

				this.scene.add(this.mesh);

				var resUniformsVoices = {};
				resUniformsVoices.u_res = { value: new THREE.Vector2(window.innerWidth, window.innerHeight) };

				var interactiveUniformsVoices = {};
				interactiveUniformsVoices.u_mouse = { value: this.lastMousePos };
				interactiveUniformsVoices.u_time = { value: Date.now() - this.timestamp };
				interactiveUniformsVoices.audioVal = { value: 0 };
				interactiveUniformsVoices.color = { value: new THREE.Vector3(0.0, 0.0, 1.0) };
				interactiveUniformsVoices.noiseOffset = { value: new THREE.Vector2(200.0, 100.0) };
				// interactiveUniforms.drumsVal = {value: 0};
				// interactiveUniforms.voicesVal = {value: 0};

				var textureUniformsVoices = {};

				var uniformsObjVoices = Object.assign({}, interactiveUniformsVoices, resUniformsVoices, textureUniformsVoices);

				var materialVoices = new THREE.ShaderMaterial({
					uniforms: uniformsObjVoices,
					vertexShader: __webpack_require__(31),
					fragmentShader: __webpack_require__(32)
				});

				this.meshVoices = new THREE.Mesh(geometry, materialVoices);

				this.meshVoices.scale.x = .5;
				this.meshVoices.scale.y = .2;
				this.meshVoices.scale.z = .5;
				this.meshVoices.position.y = -130;
				this.meshVoices.position.z = 0;

				this.scene.add(this.meshVoices);

				// this.mesh.visible = false;


				// var plane = new THREE.Mesh( new THREE.PlaneGeometry( 200, 200, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0xffff00, opacity: 0.25 } ) );
				// plane.visible = true;
				// plane.position.z = this.totDepth - 500;
				// this.scene.add( plane );

				this.render = true;
			}
		}, {
			key: "onMouseMove",
			value: function onMouseMove(e) {

				this.lastMousePos.x = e.clientX;
				this.lastMousePos.y = e.clientY;
			}
		}, {
			key: "update",
			value: function update(audioDataBass, audioDataDrums, audioDataVoices) {

				var bass = audioDataBass[5];
				var drums = audioDataDrums[5];
				var voices = audioDataVoices[3];
				// console.log(audioDataBass);
				// this.quad.material.uniforms.u_mouse.value = this.lastMousePos;
				var time = (Date.now() - this.timestamp) / 1000;
				if (this.mesh) {
					this.mesh.material.uniforms.u_time.value = time;
					this.mesh.material.uniforms.audioVal.value = drums;

					this.meshVoices.material.uniforms.u_time.value = time * 10.0;
					this.meshVoices.material.uniforms.audioVal.value = voices;
				}
				// this.quad.material.uniforms.u_res.value = new THREE.Vector2(window.innerWidth, window.innerHeight);

				// for (const key in this.gui) {
				// 	this.quad.material.uniforms[key].value = this.gui[key];
				// }

			}
		}]);

		return SceneHero;
	}();

	exports.default = SceneHero;

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform float u_time;\nuniform float audioVal;\nuniform vec3 color;\nuniform vec3 noiseOffset;\n\nvarying vec3 vColor;\n\n// 2D Random\nfloat random (in vec2 st) { \n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))\n                 * 43758.5453123);\n}\n\n// 2D Noise based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    // Smooth Interpolation\n\n    // Cubic Hermine Curve.  Same as SmoothStep()\n    vec2 u = f*f*(3.0-2.0*f);\n    // u = smoothstep(0.,1.,f);\n\n    // Mix 4 coorners porcentages\n    return mix(a, b, u.x) + \n            (c - a)* u.y * (1.0 - u.x) + \n            (d - b) * u.x * u.y;\n}\n\nvoid main() {\n\n\t// transform normal to camera space and normalize it\n    vec3 n = normalize(normalMatrix * normal);\n\n    vec3 l_dir = vec3(0.0, 2.0, 0.0);\n \n    // compute the intensity as the dot product\n    // the max prevents negative intensity values\n    float intensity = max(dot(n, l_dir), 0.0);\n \n    // Compute the color per vertex\n    // DataOut.color = intensity * diffuse;\n    vColor = intensity * color;\n\n    float noiseData = noise(vec2(audioVal, audioVal));\n\n    float noiseVal = noise(vec2(u_time));\n\n    vec3 pos = position;\n    pos.xyz *= noiseData + .5;\n    pos.x -= noiseVal * noiseOffset.x;\n    pos.y += noiseVal * noiseOffset.y;\n    // pos.z += sin(u_time) * 50.0;\n\t\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );\n\n}"

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "#ifdef GL_ES\nprecision mediump float;\n#define GLSLIFY 1\n#endif\n\n#define PI 3.14159265359\n#define TWO_PI 6.28318530718\n\nuniform vec2 u_res;\nuniform vec2 u_mouse;\n// uniform float u_time;\nuniform sampler2D uTexture;\n\nvarying vec3 vColor;\n\nvoid main() {\n\tvec2 st = gl_FragCoord.xy/u_res.xy;\n    vec2 origSt = st;\n    \n    gl_FragColor = vec4(vColor, 1.0);\n}"

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _SceneSelectorItem = __webpack_require__(34);

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
/* 34 */
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

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var sceneA = {
		title: 'Scene A',
		grid: [3, 3],
		boxOne: {
			texture: 0.0,
			scale: 1.0,
			rotation: 1.0
		},
		boxTwo: {
			texture: 0.0,
			scale: 1.0,
			rotation: 0.0
		},
		boxThree: {
			texture: 0.0,
			scale: 1.0,
			rotation: 0.0
		},
		boxFour: {
			texture: 0.0,
			scale: 1.0,
			rotation: 0.0
		},
		boxFive: {
			texture: 0.0,
			scale: 1.0,
			rotation: .5
		},
		boxSix: {
			texture: 0.0,
			scale: 1.0,
			rotation: 0.0
		},
		boxSeven: {
			texture: .5,
			scale: 1.0,
			rotation: .3,
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
		}
	};

	var sceneB = {
		title: 'Scene B',
		grid: [3, 2],
		boxOne: {
			texture: 0.0,
			scale: 1.0,
			rotation: 1.0
		},
		boxTwo: {
			texture: 0.0,
			scale: 1.0,
			rotation: 0.0
		},
		boxThree: {
			texture: 0.0,
			scale: 1.0,
			rotation: 0.0
		},
		boxFour: {
			texture: 0.0,
			scale: 1.0,
			rotation: 0.0
		},
		boxFive: {
			texture: 0.0,
			scale: 1.0,
			rotation: .5
		},
		boxSix: {
			texture: 0.0,
			scale: 1.0,
			rotation: 0.0
		}
	};

	var sceneC = {
		title: 'Scene C',
		grid: [1, 2],
		boxOne: {
			texture: 0.0,
			scale: 1.0,
			rotation: 0.0
		},
		boxTwo: {
			texture: 0.0,
			scale: 1.0,
			rotation: 0.0
		}
	};

	var sceneD = {
		title: 'Scene D',
		grid: [1, 1],
		boxOne: {
			texture: 0.0,
			scale: 1.0,
			rotation: 0.0
		}
	};

	var scenes = [sceneA, sceneB, sceneC, sceneD];

	exports.default = scenes;

/***/ }
/******/ ]);