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

float degreeToRadian(float degree){
	return degree * (3.14159265359 / 180.0);
}

void main() {

	vec4 finalColor;
	vec4 textureColor = texture2D( uTexture, vUv );
	vec4 textureReverseColor = texture2D( uTextureReverse, vUv );
	vec4 textureGirlColor = texture2D( uTextureGirl, vUv );

	vec2 iRes = vec2(1486.0, 805.0);

	vec2 uv = gl_FragCoord.xy / iRes.xy;

	vec2 ratio = vec2((iRes.x/2.0) / iRes.x, (iRes.y/2.0) / iRes.y);

	// uv = ratio * uv;

	uv.y -= 0.3;
	uv.x -= 0.3;
    
	float rot = 90.0 * (3.14159265359 / 180.0);

	uv = uv - vec2(.5, .5);

	mat2 m = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));
	uv  = m * uv;

	uv = uv + vec2(.5, .5);

	
	finalColor = texture2D(uTextureGirl, uv);

	gl_FragColor = finalColor;
}