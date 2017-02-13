uniform sampler2D map;

uniform vec3 fogColor;
uniform float fogNear;
uniform float fogFar;

varying vec2 vUv;

void main() {

	float depth = gl_FragCoord.z / gl_FragCoord.w;
	float fogFactor = smoothstep( fogNear, fogFar, depth );

	vec4 textureColor = texture2D( map, vUv );
	textureColor.w *= pow( gl_FragCoord.z, 60.0 );
	
	vec4 color = mix( textureColor, vec4( fogColor, gl_FragColor.w ), fogFactor );


	
	gl_FragColor = color;

}

