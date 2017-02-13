varying vec2 vUv;
varying vec2 flippedUv;
uniform float xFlip;
uniform float yFlip;


void main() {

	vUv = uv;
	flippedUv = vec2(1.0 - vUv.x, 1.0 - vUv.y);
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

}