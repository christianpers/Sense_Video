uniform sampler2D texture;
uniform float tFlip;
uniform vec2 u_res;
varying vec3 vWorldPosition;

 
void main() {

	vec2 st = gl_FragCoord.xy/u_res.xy;

	gl_FragColor = texture2D(texture, st);
	// gl_FragColor = textureCube( tCube, vec3( 1.0 * vWorldPosition.x, vWorldPosition.yz ) );
	// gl_FragColor = vec4(vec3(.5), 1.0);

}