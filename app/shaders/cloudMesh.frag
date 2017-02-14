varying vec2 vUv;
varying vec2 flippedUv;
varying vec2 flippedX;
varying vec2 flippedY;
uniform sampler2D uTexture;
uniform sampler2D uTextureReverse;
uniform sampler2D uTextureGirl;

uniform float boxOneX;
uniform float boxOneY;
uniform float boxOneW;
uniform float boxOneH;
uniform float boxOneTexture;
uniform float boxOneScale;
uniform float boxOneUVToUse;

uniform float boxTwoX;
uniform float boxTwoY;
uniform float boxTwoW;
uniform float boxTwoH;
uniform float boxTwoTexture;
uniform float boxTwoScale;
uniform float boxTwoUVToUse;

uniform float boxThreeX;
uniform float boxThreeY;
uniform float boxThreeW;
uniform float boxThreeH;
uniform float boxThreeTexture;
uniform float boxThreeScale;
uniform float boxThreeUVToUse;

uniform float boxFourX;
uniform float boxFourY;
uniform float boxFourW;
uniform float boxFourH;
uniform float boxFourTexture;
uniform float boxFourScale;
uniform float boxFourUVToUse;



void main() {

	vec4 finalColor;
	vec4 textureColor = texture2D( uTexture, vUv );
	vec4 textureReverseColor = texture2D( uTextureReverse, vUv );
	vec4 textureGirlColor = texture2D( uTextureGirl, vUv );

	
	if ((vUv.x >= boxOneX && vUv.x <= (boxOneX + boxOneW)) && (vUv.y >= boxOneY && vUv.y <= (boxOneY + boxOneH))){
		if (boxOneTexture == 0.0) {
			if (boxOneUVToUse == 0.0) {
				vec2 scaledUV = vUv * vec2(boxOneScale, boxOneScale);
				finalColor = texture2D(uTexture, scaledUV);
			}
			else if (boxOneUVToUse == 0.5) {
				vec2 scaledUV = flippedX * vec2(boxOneScale, boxOneScale);
				finalColor = texture2D(uTexture, scaledUV);
			}
			else if (boxOneUVToUse == 1.0) {
				vec2 scaledUV = flippedY * vec2(boxOneScale, boxOneScale);
				finalColor = texture2D(uTexture, scaledUV);
			}
			else if (boxOneUVToUse == 1.5) {
				vec2 scaledUV = flippedUv * vec2(boxOneScale, boxOneScale);
				finalColor = texture2D(uTexture, scaledUV);
			}
		} else if (boxOneTexture == 0.5) {
			if (boxOneUVToUse == 0.0) {
				vec2 scaledUV = vUv * vec2(boxOneScale, boxOneScale);
				finalColor = texture2D(uTextureReverse, scaledUV);
			}
			else if (boxOneUVToUse == 0.5) {
				vec2 scaledUV = flippedX * vec2(boxOneScale, boxOneScale);
				finalColor = texture2D(uTextureReverse, scaledUV);
			}
			else if (boxOneUVToUse == 1.0) {
				vec2 scaledUV = flippedY * vec2(boxOneScale, boxOneScale);
				finalColor = texture2D(uTextureReverse, scaledUV);
			}
			else if (boxOneUVToUse == 1.5) {
				vec2 scaledUV = flippedUv * vec2(boxOneScale, boxOneScale);
				finalColor = texture2D(uTextureReverse, scaledUV);
			}
		} else if (boxOneTexture == 1.0) {
			if (boxOneUVToUse == 0.0) {
				vec2 scaledUV = vUv * vec2(boxOneScale, boxOneScale);
				finalColor = texture2D(uTextureGirl, scaledUV);
			}
			else if (boxOneUVToUse == 0.5) {
				vec2 scaledUV = flippedX * vec2(boxOneScale, boxOneScale);
				finalColor = texture2D(uTextureGirl, scaledUV);
			}
			else if (boxOneUVToUse == 1.0) {
				vec2 scaledUV = flippedY * vec2(boxOneScale, boxOneScale);
				finalColor = texture2D(uTextureGirl, scaledUV);
			}
			else if (boxOneUVToUse == 1.5) {
				vec2 scaledUV = flippedUv * vec2(boxOneScale, boxOneScale);
				finalColor = texture2D(uTextureGirl, scaledUV);
			}
		}
	} 
	else if ((vUv.x >= boxTwoX && vUv.x <= (boxTwoX + boxTwoW)) && (vUv.y >= boxTwoY && vUv.y <= (boxTwoY + boxTwoH))){
		if (boxTwoTexture == 0.0) {
			if (boxTwoUVToUse == 0.0) {
				vec2 scaledUV = vUv * vec2(boxTwoScale, boxTwoScale);
				finalColor = texture2D(uTexture, scaledUV);
			}
			else if (boxTwoUVToUse == 0.5) {
				vec2 scaledUV = flippedX * vec2(boxTwoScale, boxTwoScale);
				finalColor = texture2D(uTexture, scaledUV);
			}
			else if (boxTwoUVToUse == 1.0) {
				vec2 scaledUV = flippedY * vec2(boxTwoScale, boxTwoScale);
				finalColor = texture2D(uTexture, scaledUV);
			}
			else if (boxTwoUVToUse == 1.5) {
				vec2 scaledUV = flippedUv * vec2(boxTwoScale, boxTwoScale);
				finalColor = texture2D(uTexture, scaledUV);
			}
		} else if (boxTwoTexture == 0.5) {
			if (boxTwoUVToUse == 0.0) {
				vec2 scaledUV = vUv * vec2(boxTwoScale, boxTwoScale);
				finalColor = texture2D(uTextureReverse, scaledUV);
			}
			else if (boxTwoUVToUse == 0.5) {
				vec2 scaledUV = flippedX * vec2(boxTwoScale, boxTwoScale);
				finalColor = texture2D(uTextureReverse, scaledUV);
			}
			else if (boxTwoUVToUse == 1.0) {
				vec2 scaledUV = flippedY * vec2(boxTwoScale, boxTwoScale);
				finalColor = texture2D(uTextureReverse, scaledUV);
			}
			else if (boxTwoUVToUse == 1.5) {
				vec2 scaledUV = flippedUv * vec2(boxTwoScale, boxTwoScale);
				finalColor = texture2D(uTextureReverse, scaledUV);
			}
		} else if (boxTwoTexture == 1.0) {
			if (boxTwoUVToUse == 0.0) {
				vec2 scaledUV = vUv * vec2(boxTwoScale, boxTwoScale);
				finalColor = texture2D(uTextureGirl, scaledUV);
			}
			else if (boxTwoUVToUse == 0.5) {
				vec2 scaledUV = flippedX * vec2(boxTwoScale, boxTwoScale);
				finalColor = texture2D(uTextureGirl, scaledUV);
			}
			else if (boxTwoUVToUse == 1.0) {
				vec2 scaledUV = flippedY * vec2(boxTwoScale, boxTwoScale);
				finalColor = texture2D(uTextureGirl, scaledUV);
			}
			else if (boxTwoUVToUse == 1.5) {
				vec2 scaledUV = flippedUv * vec2(boxTwoScale, boxTwoScale);
				finalColor = texture2D(uTextureGirl, scaledUV);
			}
		
		}
	}
	else if ((vUv.x >= boxThreeX && vUv.x <= (boxThreeX + boxThreeW)) && (vUv.y >= boxThreeY && vUv.y <= (boxThreeY + boxThreeH))){
		if (boxThreeTexture == 0.0) {
			if (boxThreeUVToUse == 0.0) {
				vec2 scaledUV = vUv * vec2(boxThreeScale, boxThreeScale);
				finalColor = texture2D(uTexture, scaledUV);
			}
			else if (boxThreeUVToUse == 0.5) {
				vec2 scaledUV = flippedX * vec2(boxThreeScale, boxThreeScale);
				finalColor = texture2D(uTexture, scaledUV);
			}
			else if (boxThreeUVToUse == 1.0) {
				vec2 scaledUV = flippedY * vec2(boxThreeScale, boxThreeScale);
				finalColor = texture2D(uTexture, scaledUV);
			}
			else if (boxThreeUVToUse == 1.5) {
				vec2 scaledUV = flippedUv * vec2(boxThreeScale, boxThreeScale);
				finalColor = texture2D(uTexture, scaledUV);
			}
		} else if (boxThreeTexture == 0.5) {
			if (boxThreeUVToUse == 0.0) {
				vec2 scaledUV = vUv * vec2(boxThreeScale, boxThreeScale);
				finalColor = texture2D(uTextureReverse, scaledUV);
			}
			else if (boxThreeUVToUse == 0.5) {
				vec2 scaledUV = flippedX * vec2(boxThreeScale, boxThreeScale);
				finalColor = texture2D(uTextureReverse, scaledUV);
			}
			else if (boxThreeUVToUse == 1.0) {
				vec2 scaledUV = flippedY * vec2(boxThreeScale, boxThreeScale);
				finalColor = texture2D(uTextureReverse, scaledUV);
			}
			else if (boxThreeUVToUse == 1.5) {
				vec2 scaledUV = flippedUv * vec2(boxThreeScale, boxThreeScale);
				finalColor = texture2D(uTextureReverse, scaledUV);
			}
		} else if (boxThreeTexture == 1.0) {
			if (boxThreeUVToUse == 0.0) {
				vec2 scaledUV = vUv * vec2(boxThreeScale, boxThreeScale);
				finalColor = texture2D(uTextureGirl, scaledUV);
			}
			else if (boxThreeUVToUse == 0.5) {
				vec2 scaledUV = flippedX * vec2(boxThreeScale, boxThreeScale);
				finalColor = texture2D(uTextureGirl, scaledUV);
			}
			else if (boxThreeUVToUse == 1.0) {
				vec2 scaledUV = flippedY * vec2(boxThreeScale, boxThreeScale);
				finalColor = texture2D(uTextureGirl, scaledUV);
			}
			else if (boxThreeUVToUse == 1.5) {
				vec2 scaledUV = flippedUv * vec2(boxThreeScale, boxThreeScale);
				finalColor = texture2D(uTextureGirl, scaledUV);
			}
		}
	}
	else if ((vUv.x >= boxFourX && vUv.x <= (boxFourX + boxFourW)) && (vUv.y >= boxFourY && vUv.y <= (boxFourY + boxFourH))){
		if (boxFourTexture == 0.0) {
			if (boxFourUVToUse == 0.0) {
				vec2 scaledUV = vUv * vec2(boxFourScale, boxFourScale);
				finalColor = texture2D(uTexture, scaledUV);
			}
			else if (boxFourUVToUse == 0.5) {
				vec2 scaledUV = flippedX * vec2(boxFourScale, boxFourScale);
				finalColor = texture2D(uTexture, scaledUV);
			}
			else if (boxFourUVToUse == 1.0) {
				vec2 scaledUV = flippedY * vec2(boxFourScale, boxFourScale);
				finalColor = texture2D(uTexture, scaledUV);
			}
			else if (boxFourUVToUse == 1.5) {
				vec2 scaledUV = flippedUv * vec2(boxFourScale, boxFourScale);
				finalColor = texture2D(uTexture, scaledUV);
			}
		} else if (boxFourTexture == 0.5) {
			if (boxFourUVToUse == 0.0) {
				vec2 scaledUV = vUv * vec2(boxFourScale, boxFourScale);
				finalColor = texture2D(uTextureReverse, scaledUV);
			}
			else if (boxFourUVToUse == 0.5) {
				vec2 scaledUV = flippedX * vec2(boxFourScale, boxFourScale);
				finalColor = texture2D(uTextureReverse, scaledUV);
			}
			else if (boxFourUVToUse == 1.0) {
				vec2 scaledUV = flippedY * vec2(boxFourScale, boxFourScale);
				finalColor = texture2D(uTextureReverse, scaledUV);
			}
			else if (boxFourUVToUse == 1.5) {
				vec2 scaledUV = flippedUv * vec2(boxFourScale, boxFourScale);
				finalColor = texture2D(uTextureReverse, scaledUV);
			}
		} else if (boxFourTexture == 1.0) {
			if (boxFourUVToUse == 0.0) {
				vec2 scaledUV = vUv * vec2(boxFourScale, boxFourScale);
				finalColor = texture2D(uTextureGirl, scaledUV);
			}
			else if (boxFourUVToUse == 0.5) {
				vec2 scaledUV = flippedX * vec2(boxFourScale, boxFourScale);
				finalColor = texture2D(uTextureGirl, scaledUV);
			}
			else if (boxFourUVToUse == 1.0) {
				vec2 scaledUV = flippedY * vec2(boxFourScale, boxFourScale);
				finalColor = texture2D(uTextureGirl, scaledUV);
			}
			else if (boxFourUVToUse == 1.5) {
				vec2 scaledUV = flippedUv * vec2(boxFourScale, boxFourScale);
				finalColor = texture2D(uTextureGirl, scaledUV);
			}
		}
	}
	else {
		finalColor = textureReverseColor;
	}
	
	// if (normalActive == 2.1) {

	// 	if ((vUv.x >= normalX && vUv.x <= (normalX + normalW)) && (vUv.y >= normalY && vUv.y <= (normalY + normalH))){

	// 		finalColor = textureColor;
	// 	}
	// }

	// if (reverseActive == 2.1) {

	// 	if ((vUv.x >= reverseX && vUv.x <= (reverseX + reverseW)) && (vUv.y >= reverseY && vUv.y <= (reverseY + reverseH))){

	// 		finalColor = textureReverseColor;
	// 	}
	// }

	// if (girlActive == 2.1) {

	// 	if ((vUv.x >= girlX && vUv.x <= (girlX + girlW)) && (vUv.y >= girlY && vUv.y <= (girlY + girlH))){

	// 		finalColor = textureGirlColor;
	// 	}
	// }

	// if (reverseActive == 2.0) {

	// 	if ((vUv.x >= reverseX && vUv.x <= reverseW) && (vUv.y >= reverseY && vUv.y <= reverseH)){

	// 		finalColor = textureReverseColor;
	// 	}
	// }

	// if (girlActive == 2.0) {


	// }

	// if ((vUv.x > .2 && vUv.x < .8) && (vUv.y > .2 && vUv.y < .8)){

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
	// 	// float gray = 0.299*textureColor.r + 0.587*textureColor.g + 0.114*textureColor.b;
	
	// 	// vec3 blackWhiteColor = vec3(gray, gray, gray);

	// 	// vec3 finalColor = mix(textureColor.rgb, blackWhiteColor, 1.0);

	// 	// gl_FragColor = vec4(finalColor, 1.0);
	// } else {

	// 	finalColor = textureColor;


	// 	// gl_FragColor = finalColor;
	// }

	gl_FragColor = finalColor;
}