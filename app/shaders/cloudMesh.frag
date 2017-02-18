varying vec2 vUv;
varying vec2 flippedUv;
varying vec2 flippedX;
varying vec2 flippedY;
uniform sampler2D uTexture;
uniform sampler2D uTextureReverse;
uniform sampler2D uTextureGirl;
uniform float resX;
uniform float resY;
uniform float introVal;
uniform float randomVal;

uniform float boxOneX;
uniform float boxOneY;
uniform float boxOneW;
uniform float boxOneH;
uniform float boxOneTexture;
uniform float boxOneScale;
uniform float boxOneTranslateX;
uniform float boxOneTranslateY;
uniform float boxOneRotDegree;

uniform float boxTwoX;
uniform float boxTwoY;
uniform float boxTwoW;
uniform float boxTwoH;
uniform float boxTwoTexture;
uniform float boxTwoScale;
uniform float boxTwoTranslateX;
uniform float boxTwoTranslateY;
uniform float boxTwoRotDegree;

uniform float boxThreeX;
uniform float boxThreeY;
uniform float boxThreeW;
uniform float boxThreeH;
uniform float boxThreeTexture;
uniform float boxThreeScale;
uniform float boxThreeTranslateX;
uniform float boxThreeTranslateY;
uniform float boxThreeRotDegree;

uniform float boxFourX;
uniform float boxFourY;
uniform float boxFourW;
uniform float boxFourH;
uniform float boxFourTexture;
uniform float boxFourScale;
uniform float boxFourTranslateX;
uniform float boxFourTranslateY;
uniform float boxFourRotDegree;

float degreeToRadian(float degree){
	return degree * (3.14159265359 / 180.0);
}

void main() {

	vec4 finalColor;
	vec4 textureColor = texture2D( uTexture, vUv );
	vec4 textureReverseColor = texture2D( uTextureReverse, vUv );
	vec4 textureGirlColor = texture2D( uTextureGirl, vUv );

	vec2 iRes = vec2(resX, resY);

	vec2 uv = gl_FragCoord.xy / iRes.xy;

	vec2 ratio = vec2((iRes.x/2.0) / iRes.x, (iRes.y/2.0) / iRes.y);
	
	if ((vUv.x >= boxOneX && vUv.x <= (boxOneX + boxOneW)) && (vUv.y >= boxOneY && vUv.y <= (boxOneY + boxOneH))){

		uv.x += boxOneTranslateX;
		uv.y += boxOneTranslateY;
	    
		float rot = boxOneRotDegree * (3.14159265359 / 180.0);

		uv = uv - vec2(.5, .5);

		mat2 m = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));
		uv  = m * uv;

		uv = uv + vec2(.5, .5);

		if (boxOneTexture == 0.0) {
			finalColor = texture2D(uTexture, uv);
		} else if (boxOneTexture == 0.5) {
			finalColor = texture2D(uTextureReverse, uv);
		} else if (boxOneTexture == 1.0) {
			// finalColor = texture2D(uTextureGirl, uv);
			vec4 girlColor = texture2D(uTextureGirl, uv);
			vec4 cloudColor = texture2D(uTexture, uv);
			finalColor = (girlColor - (cloudColor - vec4(randomVal/12.0))) * vec4(40.0);
		}
	} 
	else if ((vUv.x >= boxTwoX && vUv.x <= (boxTwoX + boxTwoW)) && (vUv.y >= boxTwoY && vUv.y <= (boxTwoY + boxTwoH))){

		uv.x += boxTwoTranslateX;
		uv.y += boxTwoTranslateY;
	    
		float rot = boxTwoRotDegree * (3.14159265359 / 180.0);

		uv = uv - vec2(.5, .5);

		mat2 m = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));
		uv  = m * uv;

		uv = uv + vec2(.5, .5);

		if (boxTwoTexture == 0.0) {
			finalColor = texture2D(uTexture, uv);
		} else if (boxTwoTexture == 0.5) {
			finalColor = texture2D(uTextureReverse, uv);
		} else if (boxTwoTexture == 1.0) {
			// finalColor = texture2D(uTextureGirl, uv);
			vec4 girlColor = texture2D(uTextureGirl, uv);
			vec4 cloudColor = texture2D(uTexture, uv);
			finalColor = cloudColor * girlColor;
		}
		
	}
	else if ((vUv.x >= boxThreeX && vUv.x <= (boxThreeX + boxThreeW)) && (vUv.y >= boxThreeY && vUv.y <= (boxThreeY + boxThreeH))){
		uv.x += boxThreeTranslateX;
		uv.y += boxThreeTranslateY;
	    
		float rot = boxThreeRotDegree * (3.14159265359 / 180.0);

		uv = uv - vec2(.5, .5);

		mat2 m = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));
		uv  = m * uv;

		uv = uv + vec2(.5, .5);

		if (boxThreeTexture == 0.0) {
			finalColor = texture2D(uTexture, uv);
		} else if (boxThreeTexture == 0.5) {
			finalColor = texture2D(uTextureReverse, uv);
		} else if (boxThreeTexture == 1.0) {
			// finalColor = texture2D(uTextureGirl, uv);
			vec4 girlColor = texture2D(uTextureGirl, uv);
			vec4 cloudColor = texture2D(uTexture, uv);
			finalColor = cloudColor * girlColor;
		}
	}
	else if ((vUv.x >= boxFourX && vUv.x <= (boxFourX + boxFourW)) && (vUv.y >= boxFourY && vUv.y <= (boxFourY + boxFourH))){
		uv.x += boxFourTranslateX;
		uv.y += boxFourTranslateY;
	    
		float rot = boxFourRotDegree * (3.14159265359 / 180.0);

		uv = uv - vec2(.5, .5);

		mat2 m = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));
		uv  = m * uv;

		uv = uv + vec2(.5, .5);

		if (boxFourTexture == 0.0) {
			finalColor = texture2D(uTexture, uv);
		} else if (boxFourTexture == 0.5) {
			finalColor = texture2D(uTextureReverse, uv);
		} else if (boxFourTexture == 1.0) {
			vec4 girlColor = texture2D(uTextureGirl, uv);
			vec4 cloudColor = texture2D(uTexture, uv);
			finalColor = cloudColor * girlColor;
		}


		// vec3 tempColor = mix(textureGirlColor.rgb, textureReverseColor.rgb, .8);
		// finalColor = vec4(tempColor, 1.0);
		// textureGirlColor.a = .0;
		// textureGirlColor.r *= .5;
		// textureGirlColor.g *= .5;
		// textureGirlColor.b *= .5;
		// finalColor = textureReverseColor * textureGirlColor;
		// finalColor = mix(textureReverseColor, textureGirlColor, .4);
		// finalColor = textureGirlColor;
	}
	else {
		finalColor = textureReverseColor;
	}
	


	// 	// vec3 tempColor = mix(textureGirlColor.rgb, textureReverseColor.rgb, .8);
	// 	// finalColor = vec4(tempColor, 1.0);
	// 	// textureGirlColor.a = .0;
	// 	// textureGirlColor.r *= .5;
	// 	// textureGirlColor.g *= .5;
	// 	// textureGirlColor.b *= .5;
	// 	// finalColor = textureReverseColor * textureGirlColor;
	// 	finalColor = mix(textureReverseColor, textureGirlColor, .4);
	// 	// finalColor = textureGirlColor;
		

	// 	// ----- B/W ----- 
	float gray = 0.299*finalColor.r + 0.587*finalColor.g + 0.114*finalColor.b;

	vec3 blackWhiteColor = vec3(gray);

	vec3 color = mix(finalColor.rgb, blackWhiteColor, introVal);

	gl_FragColor = vec4(color, 1.0);
	

	// gl_FragColor = finalColor;
}