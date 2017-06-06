export default class AudioPlayer{

	constructor(ctx, onBufferLoadedCallback, callbackScope) {

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

	load(url){

		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.responseType = 'arraybuffer';
		var self = this;
		request.onload = function() {
		    self._ctx.decodeAudioData(request.response, self.onBufferLoaded.bind(self), self.onBufferError.bind(self));
		};
		request.send();
	}

	onBufferError(){


		
	}

	onBufferLoaded(buffer){

		this._buffer = buffer;
		this.isLoaded = true;
		this._onBufferLoadedCallback.call(this._callbackScope);
	}

	pause(){

		this._sourceNode.stop(0);
		this.pausedTimestamp = Date.now() - this.startedTimestamp;
		this.paused = true;
	}

	reset(){

		this.pausedTimestamp = undefined;
	}

	getSourceNode(){

		return this._sourceNode;
	}

	play(wait, vol){

		this.triggeredPlay = true;

		this._gainNode = this._ctx.createGain();
		this._gainNode.gain.value = vol;

		this._sourceNode = this._ctx.createBufferSource();
		this._sourceNode.connect(this._gainNode);
		this._gainNode.connect(this._ctx.destination);
		// this._sourceNode.connect(this._ctx.destination);
		this._sourceNode.buffer = this._buffer;
		this.paused = false;

		if (this.pausedTimestamp !== undefined){
			this.startedTimestamp = Date.now() - this.pausedTimestamp;
			this._sourceNode.start(0, this.pausedTimestamp / 1000);
		}else{

			if (wait){
				var self = this;
				setTimeout(function(){
					self.startedTimestamp = Date.now();
					self._sourceNode.start(0);

				}, wait);
			}else{
				this.startedTimestamp = Date.now();
				this._sourceNode.start(0);
			}
			
		}
	}
}