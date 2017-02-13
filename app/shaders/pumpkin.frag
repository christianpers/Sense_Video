uniform sampler2D map;

varying vec2 vUv;

void main() {

	float depth = gl_FragCoord.z / gl_FragCoord.w;
	
	vec4 textureColor = texture2D( map, vUv );
	gl_FragColor = texture2D( map, vUv );
	// gl_FragColor.w *= pow( gl_FragCoord.z, 20.0 );
	
	// vec4 color = mix( textureColor, vec4( fogColor, gl_FragColor.w ), fogFactor );

	// gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 1.0) * color;

}