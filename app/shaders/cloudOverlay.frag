varying vec2 vUv;
varying vec2 flippedUv;
uniform sampler2D uTexture;
uniform sampler2D uTextureReverse;
uniform sampler2D uTextureGirl;
uniform sampler2D uTextureBg;

uniform float boxOverlayX;
uniform float boxOverlayY;
uniform float boxOverlayW;
uniform float boxOverlayH;
uniform float boxOverlayTexture;
uniform float boxOverlayScale;



void main() {

	

	vec4 finalColor;
	vec4 textureColor = texture2D( uTexture, vUv );
	vec4 textureReverseColor = texture2D( uTextureReverse, vUv );
	vec4 textureGirlColor = texture2D( uTextureGirl, vUv );
	vec4 bgColor = texture2D(uTextureBg, vUv);

	
	if ((vUv.x >= boxOverlayX && vUv.x <= (boxOverlayX + boxOverlayW)) && (vUv.y >= boxOverlayY && vUv.y <= (boxOverlayY + boxOverlayH))){
		if (boxOverlayTexture == 0.0) {
			vec2 scaledUV = vUv * vec2(boxOverlayScale, boxOverlayScale);
			finalColor = texture2D(uTexture, scaledUV);
		} else if (boxOverlayTexture == 0.5) {
			vec2 scaledUV = vUv * vec2(boxOverlayScale, boxOverlayScale);
			finalColor = texture2D(uTextureReverse, scaledUV);
		} else if (boxOverlayTexture == 1.0) {
			vec2 scaledUV = vUv * vec2(boxOverlayScale, boxOverlayScale);
			finalColor = texture2D(uTextureGirl, scaledUV);
		}
	} 
	else {
		finalColor = bgColor;
	}
	

	gl_FragColor = finalColor;
}