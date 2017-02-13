varying vec2 vUv;
varying vec3 vPos;
varying vec3 vNormal;


void main() {

	vUv = uv;
	vNormal = normalMatrix * normal;
	vPos = vec3(modelMatrix * vec4(position, 1.0));
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

}