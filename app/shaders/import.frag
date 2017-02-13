varying vec2 vUv;
uniform samplerCube uTexCube;
uniform sampler2D uTextureBg;
varying vec3 vPos;
varying vec3 vNormal;

void main() {

	// vec4 textureColor = texture2D( uTexture, vUv );
	// // vec4 textureStillColor = texture2D( uTexture, flippedUv );
	// if (vUv.x < .2 || vUv.x > .8 || vUv.y < .2 || vUv.y > .8){

	// 	// textureColor = textureStillColor;
	// 	float gray = 0.299*textureColor.r + 0.587*textureColor.g + 0.114*textureColor.b;
	
	// 	vec3 blackWhiteColor = vec3(gray, gray, gray);

	// 	vec3 finalColor = mix(textureColor.rgb, blackWhiteColor, 1.0);

	// 	gl_FragColor = vec4(finalColor, 1.0);
	// } else {

		


	// 	gl_FragColor = textureColor;
	// }

	

	// vec3 c = textureCube(uTexCube, vPos).rgb;

	// vec3 finalColor = c;

	// gl_FragColor = vec4(finalColor,1.0);

	
	vec3 I = normalize(vPos - cameraPosition);
    vec3 R = reflect(I, normalize(vNormal));
    vec3 color = textureCube(uTexCube, R).rgb;



    if (color == vec3(0.0, 0.0, 0.0)){
    	color = vec3(226.0/255.0, 6.0/255.0, 219.0/255.0);
    }

    vec3 finalColor = color;

    gl_FragColor = vec4(finalColor, 1.0);

}