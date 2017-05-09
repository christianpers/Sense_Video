uniform samplerCube tCube;
uniform float tFlip;
varying vec3 vWorldPosition;
 
void main() {

	gl_FragColor = textureCube( tCube, vec3( 1.0 * vWorldPosition.x, vWorldPosition.yz ) );
	// gl_FragColor = vec4(vec3(.5), 1.0);

}