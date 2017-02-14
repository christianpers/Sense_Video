varying vec2 vUv;
varying vec2 flippedUv;
varying vec2 flippedX;
varying vec2 flippedY;
uniform float xFlip;
uniform float yFlip;


void main() {

	vUv = uv;
	flippedUv = vec2(.5 - vUv.x, .5 - vUv.y);
	flippedX = vec2(1.0 - vUv.x, vUv.y);
	flippedY = vec2(vUv.x, 1.0 - vUv.y);
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

}