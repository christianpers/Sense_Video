varying vec2 vUv;
varying vec2 flippedUv;
uniform sampler2D uTexture;
uniform sampler2D uTextureReverse;
uniform sampler2D uTextureGirl;
uniform sampler2D uTextureBg;
uniform float resX;
uniform float resY;

uniform float boxOverlayX;
uniform float boxOverlayY;
uniform float boxOverlayW;
uniform float boxOverlayH;
uniform float boxOverlayTexture;
uniform float boxOverlayScale;
uniform float boxOverlayTranslateX;
uniform float boxOverlayTranslateY;
uniform float boxOverlayRotDegree;
uniform float boxOverlayCoeff;

void main() {

	vec4 finalColor;
	vec4 textureColor = texture2D( uTexture, vUv );
	vec4 textureReverseColor = texture2D( uTextureReverse, vUv );
	vec4 textureGirlColor = texture2D( uTextureGirl, vUv );
	vec4 bgColor = texture2D(uTextureBg, vUv);

	vec2 iRes = vec2(resX, resY);

	vec2 uv = gl_FragCoord.xy / iRes.xy;

	vec2 ratio = vec2((iRes.x/2.0) / iRes.x, (iRes.y/2.0) / iRes.y);

	vec4 purple = vec4(242.0/255.0, 29.0/255.0, 199.0/255.0, 1.0) * vec4(.67);

	
	if ((vUv.x >= boxOverlayX && vUv.x <= (boxOverlayX + boxOverlayW)) && (vUv.y >= boxOverlayY && vUv.y <= (boxOverlayY + boxOverlayH))){

		uv.x += boxOverlayTranslateX;
		uv.y += boxOverlayTranslateY;
	    
		float rot = boxOverlayRotDegree * (3.14159265359 / 180.0);

		uv = uv - vec2(.5, .5);

		mat2 m = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));
		uv  = m * uv;

		uv = uv + vec2(.5, .5);

		if (boxOverlayTexture == 0.0) {
			vec4 cloudColor = texture2D(uTexture, uv);
			vec4 fuckedColor = (purple - (cloudColor - vec4(boxOverlayCoeff))) * vec4(40.0);
			finalColor = mix(cloudColor, fuckedColor, boxOverlayScale);
			// finalColor = texture2D(uTexture, uv);
		} else if (boxOverlayTexture == 0.5) {
			vec4 cloudColor = texture2D(uTextureReverse, uv);
			vec4 fuckedColor = (purple - (cloudColor - vec4(boxOverlayCoeff))) * vec4(40.0);
			finalColor = mix(cloudColor, fuckedColor, boxOverlayScale);

		} else if (boxOverlayTexture == 1.0) {
			finalColor = texture2D(uTextureGirl, uv);
			
		} else if (boxOverlayTexture == 1.5) {
			vec4 girlColor = texture2D(uTextureGirl, uv);
			vec4 cloudColor = texture2D(uTexture, uv);
			finalColor = (girlColor - (cloudColor - vec4(boxOverlayCoeff))) * vec4(40.0);
		}
	}
	else {
		finalColor = bgColor;
	}
	

	gl_FragColor = finalColor;
}