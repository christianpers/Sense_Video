varying vec2 vUv;
varying vec2 flippedUv;
varying vec2 flippedX;
varying vec2 flippedY;
uniform float xFlip;
uniform float yFlip;


void main() {

	vec2 testUv = uv;
	testUv = testUv - vec2(.5, .5);
	float rot = 4.71239;
	mat2 m = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));
   	testUv = m * uv;
    
    testUv = testUv + vec2(.5, .5);
	vUv = uv;
	flippedUv = testUv;
	flippedX = vec2(1.0 - vUv.x, vUv.y);
	flippedY = vec2(vUv.x, 1.0 - vUv.y);
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

}